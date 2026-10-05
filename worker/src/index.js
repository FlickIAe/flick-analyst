/**
 * Flick Super Intelligence · Telegram alerts worker (Cloudflare Workers + D1)
 *
 * Website API (CORS limited to ALLOWED_ORIGINS):
 *   POST /api/sync    { token, lang, riskAlerts, items[] }  save the browser's watchlist
 *   GET  /api/status?token=…                                 is this browser linked to a Telegram chat?
 *   POST /api/unlink  { token }                              disconnect and delete the data
 * Telegram:
 *   POST /telegram                                           bot webhook (/start, /list, /stop, /help)
 *   GET  /setup?key=TELEGRAM_WEBHOOK_SECRET                  one-time: registers the webhook and commands
 * Cron (every 5 minutes, see wrangler.toml):
 *   price alerts, liquidity drain, heavy selling and worse contract checks → Telegram messages
 *
 * Secrets: TELEGRAM_BOT_TOKEN, TELEGRAM_WEBHOOK_SECRET   Vars: SITE_URL, ALLOWED_ORIGINS
 */

const DEFAULTS = {
  DEX_API: 'https://api.dexscreener.com',
  GOPLUS_API: 'https://api.gopluslabs.io/api/v1',
  TELEGRAM_API: 'https://api.telegram.org',
  SITE_URL: 'https://flick-app.pages.dev'
};
const cfg = (env, key) => env[key] || DEFAULTS[key];

const TOKEN_RE = /^[A-Za-z0-9_-]{24,64}$/;
const EVM_RE = /^0x[a-fA-F0-9]{40}$/;
const SOL_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const CHAIN_RE = /^[a-z0-9-]{2,24}$/;
const PAIR_RE = /^[A-Za-z0-9:_-]{1,100}$/;
const ALERT_STEPS = [0, 5, 10, 20, 50];
const MAX_WATCHES = 20;
const GOPLUS_EVM = { ethereum: 1, bsc: 56, base: 8453, arbitrum: 42161, polygon: 137, optimism: 10, avalanche: 43114 };
const SUBREQUEST_BUDGET = 45; // the free plan allows 50 outgoing requests per invocation
const GOPLUS_PER_RUN = 5;
const RISK_RANK = { ok: 0, warn: 1, bad: 2 };
const MIN = 60e3;

// ------------------------------------------------------------------ texts
const TEXT = {
  en: {
    welcome: "👋 Hi! I'm the Flick Super Intelligence bot.\n\nTo get alerts: open {site}, follow tokens with ☆ Watch and tap “Connect Telegram” in the Watchlist tab.",
    linked: "✅ Connected! You'll get alerts here for the {n} tokens in your Flick watchlist.\n\nCommands: /list · /stop · /help",
    link_bad: "⚠️ This link expired or is invalid. Tap “Connect Telegram” again in Flick.",
    stopped: "🔕 Alerts are off and this chat was disconnected. You can reconnect from Flick anytime.",
    list_empty: "Your watchlist is empty. Add tokens in Flick with ☆ Watch.",
    list_head: "⭐ Your watchlist:",
    alert_off: "alert off",
    not_linked: "This chat isn't connected yet. Open {site} → Watchlist → “Connect Telegram”.",
    help: "Commands:\n/list – tokens you follow\n/stop – turn off alerts and disconnect\n\nYou get a message when a token moves past its price alert, its liquidity drains ≥30%, ≥75% of the last hour's trades are sells, or its contract checks get worse.\n\nNot financial advice.",
    up: "📈 {s} is up {pct} → {price}",
    down: "📉 {s} is down {pct} → {price}",
    liq: "⚠️ {s}: liquidity fell {pct} to {liq}. Possible rug pull.",
    sells: "⚠️ {s}: {pct}% of the last hour's trades are sells.",
    contract: "⛔ {s}: contract checks now show {level}.",
    risk_warn: "some risk flags",
    risk_bad: "critical risk"
  },
  es: {
    welcome: "👋 ¡Hola! Soy el bot de Flick Super Intelligence.\n\nPara recibir alertas: abrí {site}, seguí tokens con ☆ Seguir y tocá “Conectar Telegram” en la pestaña Watchlist.",
    linked: "✅ ¡Conectado! Vas a recibir acá las alertas de los {n} tokens de tu watchlist de Flick.\n\nComandos: /list · /stop · /help",
    link_bad: "⚠️ Este link venció o no es válido. Tocá “Conectar Telegram” otra vez en Flick.",
    stopped: "🔕 Alertas apagadas y este chat quedó desconectado. Podés reconectarlo desde Flick cuando quieras.",
    list_empty: "Tu watchlist está vacía. Agregá tokens en Flick con ☆ Seguir.",
    list_head: "⭐ Tu watchlist:",
    alert_off: "alerta apagada",
    not_linked: "Este chat todavía no está conectado. Abrí {site} → Watchlist → “Conectar Telegram”.",
    help: "Comandos:\n/list – tokens que seguís\n/stop – apagar alertas y desconectar\n\nTe aviso cuando un token supera su alerta de precio, su liquidez cae ≥30%, ≥75% de las operaciones de la última hora son ventas, o empeoran los chequeos de su contrato.\n\nNo es asesoramiento financiero.",
    up: "📈 {s} subió {pct} → {price}",
    down: "📉 {s} bajó {pct} → {price}",
    liq: "⚠️ {s}: la liquidez cayó {pct} a {liq}. Posible rug pull.",
    sells: "⚠️ {s}: el {pct}% de las operaciones de la última hora son ventas.",
    contract: "⛔ {s}: los chequeos del contrato ahora muestran {level}.",
    risk_warn: "algunas alertas de riesgo",
    risk_bad: "riesgo crítico"
  },
  zh: {
    welcome: "👋 你好！我是 Flick Super Intelligence 机器人。\n\n接收提醒：打开 {site}，用 ☆ 自选 关注代币，然后在自选标签页点击“连接 Telegram”。",
    linked: "✅ 已连接！你将在这里收到 Flick 自选中 {n} 个代币的提醒。\n\n命令：/list · /stop · /help",
    link_bad: "⚠️ 此链接已过期或无效。请在 Flick 中再次点击“连接 Telegram”。",
    stopped: "🔕 提醒已关闭，此聊天已断开。你可以随时在 Flick 中重新连接。",
    list_empty: "你的自选为空。在 Flick 中用 ☆ 自选 添加代币。",
    list_head: "⭐ 你的自选：",
    alert_off: "提醒关闭",
    not_linked: "此聊天尚未连接。打开 {site} → 自选 → “连接 Telegram”。",
    help: "命令：\n/list – 你关注的代币\n/stop – 关闭提醒并断开\n\n当代币超过价格提醒、流动性下降 ≥30%、过去一小时 ≥75% 的交易为卖出，或合约检测变差时，我会通知你。\n\n不构成投资建议。",
    up: "📈 {s} 上涨 {pct} → {price}",
    down: "📉 {s} 下跌 {pct} → {price}",
    liq: "⚠️ {s}：流动性下降 {pct}，降至 {liq}。可能跑路。",
    sells: "⚠️ {s}：过去一小时 {pct}% 的交易是卖出。",
    contract: "⛔ {s}：合约检测现在显示{level}。",
    risk_warn: "存在风险项",
    risk_bad: "严重风险"
  }
};
const fill = (str, vars) => str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
const text = (lang, key, vars = {}) => fill((TEXT[lang] || TEXT.en)[key] || TEXT.en[key], vars);
const langOf = code => (String(code || '').startsWith('es') ? 'es' : String(code || '').startsWith('zh') ? 'zh' : 'en');

const compact = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 });
const fmtUsd = n => `$${compact.format(n)}`;
const fmtPct = n => `${n >= 0 ? '+' : ''}${n.toFixed(1)}%`;
const fmtPrice = n => (n < 1e-6 ? `$${n.toExponential(3)}` : n < 1 ? `$${n.toPrecision(4)}` : `$${n.toFixed(2)}`);
const keyOf = (chain, ca) => `${chain}:${EVM_RE.test(ca) ? ca.toLowerCase() : ca}`;

// ------------------------------------------------------------------ http helpers
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

const allowedOrigins = env => String(env.ALLOWED_ORIGINS || cfg(env, 'SITE_URL')).split(',').map(s => s.trim()).filter(Boolean);

function withCors(request, env, response) {
  const origin = request.headers.get('origin');
  if (origin && allowedOrigins(env).includes(origin)) {
    response.headers.set('access-control-allow-origin', origin);
    response.headers.set('access-control-allow-methods', 'GET, POST, OPTIONS');
    response.headers.set('access-control-allow-headers', 'content-type');
    response.headers.set('access-control-max-age', '86400');
    response.headers.set('vary', 'origin');
  }
  return response;
}

async function getJson(url) {
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res.json();
}

async function tg(env, method, payload) {
  const res = await fetch(`${cfg(env, 'TELEGRAM_API')}/bot${env.TELEGRAM_BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return { ok: res.ok, status: res.status, body: await res.json().catch(() => null) };
}

const sendMessage = (env, chatId, msg) => tg(env, 'sendMessage', { chat_id: chatId, text: msg, disable_web_page_preview: true });

// ------------------------------------------------------------------ worker entry
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      if (url.pathname.startsWith('/api/')) {
        if (request.method === 'OPTIONS') return withCors(request, env, new Response(null, { status: 204 }));
        const origin = request.headers.get('origin');
        if (origin && !allowedOrigins(env).includes(origin)) return json({ error: 'forbidden' }, 403);
        if (url.pathname === '/api/sync' && request.method === 'POST') return withCors(request, env, await apiSync(request, env));
        if (url.pathname === '/api/status' && request.method === 'GET') return withCors(request, env, await apiStatus(url, env));
        if (url.pathname === '/api/unlink' && request.method === 'POST') return withCors(request, env, await apiUnlink(request, env));
        return withCors(request, env, json({ error: 'not_found' }, 404));
      }
      if (url.pathname === '/telegram' && request.method === 'POST') return await telegramWebhook(request, env);
      if (url.pathname === '/setup') return await setup(url, env);
      if (url.pathname === '/') return new Response('Flick Super Intelligence · Telegram alerts worker', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
      return json({ error: 'not_found' }, 404);
    } catch (err) {
      console.error('Request failed:', err);
      return withCors(request, env, json({ error: 'server_error' }, 500));
    }
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runChecks(env).catch(err => console.error('Scheduled check failed:', err)));
  }
};

// ------------------------------------------------------------------ website API
function cleanItem(it) {
  if (!it || typeof it !== 'object') return null;
  const chain = String(it.chainId || '');
  const ca = String(it.ca || '');
  if (!CHAIN_RE.test(chain) || !(EVM_RE.test(ca) || SOL_RE.test(ca))) return null;
  const alertPct = ALERT_STEPS.includes(Number(it.alertPct)) ? Number(it.alertPct) : 10;
  const refPrice = Number(it.refPrice) > 0 && Number.isFinite(Number(it.refPrice)) ? Number(it.refPrice) : null;
  const pair = PAIR_RE.test(String(it.pairAddress || '')) ? String(it.pairAddress) : null;
  const symbol = String(it.symbol || '?').replace(/[\u0000-\u001f<>]/g, '').slice(0, 16) || '?';
  return { chain, ca, symbol, pair, alertPct, refPrice };
}

async function apiSync(request, env) {
  const body = await request.json().catch(() => null);
  if (!body || !TOKEN_RE.test(String(body.token || ''))) return json({ error: 'bad_request' }, 400);
  const token = body.token;
  const lang = ['en', 'es', 'zh'].includes(body.lang) ? body.lang : 'en';
  const risk = body.riskAlerts === false ? 0 : 1;
  const seen = new Set();
  const items = (Array.isArray(body.items) ? body.items : []).map(cleanItem).filter(Boolean)
    .filter(it => { const k = keyOf(it.chain, it.ca); if (seen.has(k)) return false; seen.add(k); return true; })
    .slice(0, MAX_WATCHES);
  const now = Date.now();
  const stmts = [
    env.DB.prepare(`INSERT INTO subscribers (token, lang, risk_alerts, created_at, updated_at) VALUES (?1, ?2, ?3, ?4, ?4)
      ON CONFLICT(token) DO UPDATE SET lang = excluded.lang, risk_alerts = excluded.risk_alerts, updated_at = excluded.updated_at`).bind(token, lang, risk, now),
    env.DB.prepare(`DELETE FROM watches WHERE token = ?1 AND (chain || ':' || ca) NOT IN (SELECT value FROM json_each(?2))`)
      .bind(token, JSON.stringify(items.map(it => `${it.chain}:${it.ca}`))),
    ...items.map(it => env.DB.prepare(`INSERT INTO watches (token, chain, ca, symbol, pair, alert_pct, ref_price) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)
      ON CONFLICT(token, chain, ca) DO UPDATE SET symbol = excluded.symbol, pair = excluded.pair,
        ref_price = CASE WHEN watches.alert_pct != excluded.alert_pct OR watches.ref_price IS NULL THEN excluded.ref_price ELSE watches.ref_price END,
        alert_pct = excluded.alert_pct`).bind(token, it.chain, it.ca, it.symbol, it.pair, it.alertPct, it.refPrice))
  ];
  await env.DB.batch(stmts);
  const sub = await env.DB.prepare('SELECT chat_id FROM subscribers WHERE token = ?').bind(token).first();
  return json({ ok: true, linked: !!sub?.chat_id, count: items.length });
}

async function apiStatus(url, env) {
  const token = url.searchParams.get('token') || '';
  if (!TOKEN_RE.test(token)) return json({ error: 'bad_request' }, 400);
  const sub = await env.DB.prepare('SELECT chat_id FROM subscribers WHERE token = ?').bind(token).first();
  return json({ linked: !!sub?.chat_id });
}

async function apiUnlink(request, env) {
  const body = await request.json().catch(() => null);
  if (!body || !TOKEN_RE.test(String(body.token || ''))) return json({ error: 'bad_request' }, 400);
  const sub = await env.DB.prepare('SELECT chat_id, lang FROM subscribers WHERE token = ?').bind(body.token).first();
  await env.DB.batch([
    env.DB.prepare('DELETE FROM watches WHERE token = ?').bind(body.token),
    env.DB.prepare('DELETE FROM subscribers WHERE token = ?').bind(body.token)
  ]);
  if (sub?.chat_id) await sendMessage(env, sub.chat_id, text(sub.lang, 'stopped')).catch(() => null);
  return json({ ok: true });
}

// ------------------------------------------------------------------ Telegram bot
async function telegramWebhook(request, env) {
  if (!env.TELEGRAM_WEBHOOK_SECRET || request.headers.get('x-telegram-bot-api-secret-token') !== env.TELEGRAM_WEBHOOK_SECRET) {
    return new Response('forbidden', { status: 403 });
  }
  const update = await request.json().catch(() => null);
  const msg = update?.message;
  if (!msg?.chat?.id || typeof msg.text !== 'string') return new Response('ok');
  const chatId = msg.chat.id;
  const [rawCmd, arg = ''] = msg.text.trim().split(/\s+/, 2);
  const cmd = rawCmd.split('@')[0].toLowerCase();
  const site = cfg(env, 'SITE_URL');
  const known = await env.DB.prepare('SELECT lang FROM subscribers WHERE chat_id = ? LIMIT 1').bind(chatId).first();
  let lang = known?.lang || langOf(msg.from?.language_code);

  if (cmd === '/start' && arg) {
    const sub = TOKEN_RE.test(arg) ? await env.DB.prepare('SELECT token, lang FROM subscribers WHERE token = ?').bind(arg).first() : null;
    if (!sub) {
      await sendMessage(env, chatId, text(lang, 'link_bad'));
    } else {
      lang = sub.lang;
      await env.DB.prepare('UPDATE subscribers SET chat_id = ?, updated_at = ? WHERE token = ?').bind(chatId, Date.now(), arg).run();
      const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM watches WHERE token = ?').bind(arg).first();
      await sendMessage(env, chatId, text(lang, 'linked', { n: n?.n ?? 0 }));
    }
  } else if (cmd === '/start') {
    await sendMessage(env, chatId, text(lang, 'welcome', { site }));
  } else if (cmd === '/stop') {
    await env.DB.batch([
      env.DB.prepare('DELETE FROM watches WHERE token IN (SELECT token FROM subscribers WHERE chat_id = ?)').bind(chatId),
      env.DB.prepare('DELETE FROM subscribers WHERE chat_id = ?').bind(chatId)
    ]);
    await sendMessage(env, chatId, text(lang, 'stopped'));
  } else if (!known) {
    await sendMessage(env, chatId, text(lang, 'not_linked', { site }));
  } else if (cmd === '/list') {
    const { results } = await env.DB.prepare(`SELECT DISTINCT w.symbol, w.chain, w.ca, w.alert_pct FROM watches w
      JOIN subscribers s ON s.token = w.token WHERE s.chat_id = ? ORDER BY w.symbol`).bind(chatId).all();
    const lines = results.map(r => `• $${r.symbol} (${r.chain}) — ${r.alert_pct ? `±${r.alert_pct}%` : text(lang, 'alert_off')}\n  ${site}/?ca=${encodeURIComponent(r.ca)}&chain=${encodeURIComponent(r.chain)}`);
    await sendMessage(env, chatId, lines.length ? `${text(lang, 'list_head')}\n\n${lines.join('\n')}` : text(lang, 'list_empty'));
  } else {
    await sendMessage(env, chatId, text(lang, 'help'));
  }
  return new Response('ok');
}

async function setup(url, env) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_WEBHOOK_SECRET) return json({ error: 'missing_secrets' }, 500);
  if (url.searchParams.get('key') !== env.TELEGRAM_WEBHOOK_SECRET) return json({ error: 'forbidden' }, 403);
  const webhook = await tg(env, 'setWebhook', {
    url: `${url.origin}/telegram`,
    secret_token: env.TELEGRAM_WEBHOOK_SECRET,
    allowed_updates: ['message'],
    drop_pending_updates: true
  });
  const commands = {
    en: [['list', 'Tokens you follow'], ['stop', 'Turn off alerts and disconnect'], ['help', 'How alerts work']],
    es: [['list', 'Tokens que seguís'], ['stop', 'Apagar alertas y desconectar'], ['help', 'Cómo funcionan las alertas']],
    zh: [['list', '你关注的代币'], ['stop', '关闭提醒并断开'], ['help', '提醒说明']]
  };
  const results = [];
  for (const [lang, list] of Object.entries(commands)) {
    const payload = { commands: list.map(([command, description]) => ({ command, description })) };
    if (lang !== 'en') payload.language_code = lang;
    results.push((await tg(env, 'setMyCommands', payload)).ok);
  }
  // Profile texts in each language (Telegram shows the one matching the user's app language)
  const site = cfg(env, 'SITE_URL').replace(/^https?:\/\//, '').replace(/\/+$/, '');
  const descriptions = [];
  for (const [lang, t] of Object.entries(BOT_PROFILE)) {
    const extra = lang === 'en' ? {} : { language_code: lang };
    const d = await tg(env, 'setMyDescription', { description: fill(t.description, { site }), ...extra });
    const s = await tg(env, 'setMyShortDescription', { short_description: fill(t.short, { site }), ...extra });
    descriptions.push(d.ok && s.ok);
  }
  const me = await tg(env, 'getMe', {});
  return json({ webhook: webhook.body, commands: results, descriptions, bot: me.body?.result?.username || null });
}

// Shown before tapping "Start" (description, max 512 chars) and in the bot profile (short, max 120)
const BOT_PROFILE = {
  en: {
    description: "⚡ Flick Super Intelligence alerts you when something changes in the tokens you follow.\n\n🔔 Price alerts (±5/10/20/50%)\n💧 Liquidity drains (possible rug pull)\n📉 Heavy selling in the last hour\n⛔ Contracts that start showing risk\n\nGet started: open {site}, follow tokens with ☆ Watch and tap “Connect Telegram” in the Watchlist tab.\n\nFree. Not financial advice.",
    short: "Price and risk alerts for your crypto tokens, even with Flick closed. Free · {site}"
  },
  es: {
    description: "⚡ Flick Super Intelligence te avisa cuando algo cambia en los tokens que seguís.\n\n🔔 Alertas de precio (±5/10/20/50%)\n💧 Caída de liquidez (posible rug pull)\n📉 Ventas masivas en la última hora\n⛔ Contratos que empiezan a mostrar riesgo\n\nCómo empezar: entrá a {site}, seguí tokens con ☆ Seguir y tocá “Conectar Telegram” en la pestaña Watchlist.\n\nGratis. No es asesoramiento financiero.",
    short: "Alertas de precio y riesgo para tus tokens cripto, aunque tengas Flick cerrado. Gratis · {site}"
  },
  zh: {
    description: "⚡ 当你关注的代币发生变化时，Flick Super Intelligence 会提醒你。\n\n🔔 价格提醒（±5/10/20/50%）\n💧 流动性流失（可能跑路）\n📉 过去一小时大量抛售\n⛔ 合约开始出现风险\n\n开始使用：打开 {site}，用 ☆ 自选 关注代币，然后在自选标签页点击“连接 Telegram”。\n\n免费。不构成投资建议。",
    short: "即使关闭 Flick，也能收到加密代币的价格和风险提醒。免费 · {site}"
  }
};

// ------------------------------------------------------------------ contract checks (same rules as the website)
const flag = v => (v === undefined || v === null || v === '' ? null : String(v) === '1');
const num = v => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };

function contractRisk(raw, isSol) {
  if (isSol) {
    const st = o => flag(o?.status);
    const hook = Array.isArray(raw.transfer_hook) && raw.transfer_hook.length > 0;
    const fee = raw.transfer_fee && typeof raw.transfer_fee === 'object' && Object.keys(raw.transfer_fee).length > 0;
    const creators = Array.isArray(raw.creators) ? raw.creators : [];
    const auth = Array.isArray(raw.mintable?.authority) ? raw.mintable.authority : [];
    if (flag(raw.non_transferable) || [...creators, ...auth].some(c => flag(c?.malicious_address))) return 'bad';
    if (st(raw.mintable) || st(raw.freezable) || st(raw.balance_mutable_authority) || st(raw.closable) || hook || fee) return 'warn';
    return 'ok';
  }
  const maxTax = Math.max((num(raw.buy_tax) ?? 0) * 100, (num(raw.sell_tax) ?? 0) * 100);
  if (flag(raw.is_honeypot) || flag(raw.cannot_sell_all) || maxTax >= 30 || flag(raw.honeypot_with_same_creator)) return 'bad';
  if (maxTax > 10 || flag(raw.is_mintable) || flag(raw.is_blacklisted) || flag(raw.transfer_pausable)
    || flag(raw.is_proxy) || flag(raw.can_take_back_ownership) || flag(raw.owner_change_balance) || flag(raw.hidden_owner)
    || flag(raw.is_open_source) === false) return 'warn';
  return 'ok';
}

// ------------------------------------------------------------------ scheduled checks
async function runChecks(env) {
  const now = Date.now();
  let budget = SUBREQUEST_BUDGET;

  // Forget browsers that never finished connecting (after 1 day)
  await env.DB.batch([
    env.DB.prepare('DELETE FROM watches WHERE token IN (SELECT token FROM subscribers WHERE chat_id IS NULL AND created_at < ?)').bind(now - 1440 * MIN),
    env.DB.prepare('DELETE FROM subscribers WHERE chat_id IS NULL AND created_at < ?').bind(now - 1440 * MIN)
  ]);

  const { results: rows } = await env.DB.prepare(`SELECT w.*, s.chat_id, s.lang, s.risk_alerts FROM watches w
    JOIN subscribers s ON s.token = w.token WHERE s.chat_id IS NOT NULL`).all();
  if (!rows.length) return { rows: 0 };

  // 1. Market data: up to 30 tokens per request, per chain
  const byChain = new Map();
  for (const r of rows) {
    if (!byChain.has(r.chain)) byChain.set(r.chain, new Set());
    byChain.get(r.chain).add(r.ca);
  }
  const market = new Map(); // chain:ca -> pairs[]
  for (const [chain, set] of byChain) {
    const cas = [...set];
    for (let i = 0; i < cas.length && budget > 10; i += 30) {
      budget--;
      try {
        const data = await getJson(`${cfg(env, 'DEX_API')}/tokens/v1/${encodeURIComponent(chain)}/${cas.slice(i, i + 30).map(encodeURIComponent).join(',')}`);
        const pairs = Array.isArray(data) ? data : data?.pairs || [];
        for (const p of pairs) {
          const base = p?.baseToken?.address;
          if (!base || p.chainId !== chain) continue;
          const k = keyOf(chain, base);
          if (!market.has(k)) market.set(k, []);
          market.get(k).push(p);
        }
      } catch (err) {
        console.warn('DexScreener batch failed:', chain, err.message);
      }
    }
  }

  // 2. Contract checks: a few tokens per run, the ones checked longest ago
  const contract = new Map();
  const due = [...new Map(rows
    .filter(r => r.risk_alerts && (r.chain === 'solana' || GOPLUS_EVM[r.chain]) && (!r.risk_checked_at || now - r.risk_checked_at > 30 * MIN))
    .sort((a, b) => (a.risk_checked_at || 0) - (b.risk_checked_at || 0))
    .map(r => [keyOf(r.chain, r.ca), r])).values()].slice(0, GOPLUS_PER_RUN);
  for (const r of due) {
    if (budget <= 6) break;
    budget--;
    try {
      const isSol = r.chain === 'solana';
      const url = isSol
        ? `${cfg(env, 'GOPLUS_API')}/solana/token_security?contract_addresses=${encodeURIComponent(r.ca)}`
        : `${cfg(env, 'GOPLUS_API')}/token_security/${GOPLUS_EVM[r.chain]}?contract_addresses=${encodeURIComponent(r.ca)}`;
      const d = await getJson(url);
      const result = d?.result || {};
      const raw = result[r.ca] || result[r.ca.toLowerCase()] || Object.values(result)[0];
      if (raw && typeof raw === 'object') contract.set(keyOf(r.chain, r.ca), contractRisk(raw, isSol));
    } catch (err) {
      console.warn('GoPlus check failed:', r.symbol, err.message);
    }
  }

  // 3. Evaluate every watched token
  const evaluated = rows.map(r => {
    const s = `$${r.symbol}`;
    const st = {
      ref_price: r.ref_price, peak_liq: r.peak_liq, last_risk: r.last_risk,
      risk_checked_at: r.risk_checked_at, cool_liq: r.cool_liq, cool_sells: r.cool_sells
    };
    const msgs = [];
    const pairs = market.get(keyOf(r.chain, r.ca)) || [];
    if (pairs.length) {
      const pair = pairs.find(p => p.pairAddress === r.pair) || [...pairs].sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))[0];
      const price = parseFloat(pair.priceUsd);
      if (price > 0) {
        if (!st.ref_price) st.ref_price = price;
        else if (r.alert_pct > 0) {
          const change = ((price - st.ref_price) / st.ref_price) * 100;
          if (Math.abs(change) >= r.alert_pct) {
            msgs.push(text(r.lang, change > 0 ? 'up' : 'down', { s, pct: fmtPct(change), price: fmtPrice(price) }));
            st.ref_price = price;
          }
        }
      }
      if (r.risk_alerts) {
        const liq = pairs.reduce((a, p) => a + (p.liquidity?.usd || 0), 0);
        if (liq > 0) {
          if (!st.peak_liq || liq > st.peak_liq) st.peak_liq = liq;
          const drop = ((st.peak_liq - liq) / st.peak_liq) * 100;
          if (drop >= 30 && (!st.cool_liq || now - st.cool_liq > 30 * MIN)) {
            msgs.push(text(r.lang, 'liq', { s, pct: `${drop.toFixed(1)}%`, liq: fmtUsd(liq) }));
            st.cool_liq = now;
            st.peak_liq = liq;
          }
        }
        const h1 = pair.txns?.h1;
        if (h1 && h1.buys + h1.sells >= 30) {
          const ratio = h1.sells / (h1.buys + h1.sells);
          if (ratio >= 0.75 && (!st.cool_sells || now - st.cool_sells > 120 * MIN)) {
            msgs.push(text(r.lang, 'sells', { s, pct: Math.round(ratio * 100) }));
            st.cool_sells = now;
          }
        }
      }
    }
    const risk = contract.get(keyOf(r.chain, r.ca));
    if (risk) {
      if (r.risk_alerts && r.last_risk && RISK_RANK[risk] > RISK_RANK[r.last_risk]) {
        msgs.push(text(r.lang, 'contract', { s, level: text(r.lang, `risk_${risk}`) }));
      }
      st.last_risk = risk;
      st.risk_checked_at = now;
    }
    return { r, st, msgs };
  });

  // 4. One Telegram message per chat (saves requests); state is saved only when the alert was delivered
  const byChat = new Map();
  for (const e of evaluated.filter(e => e.msgs.length)) {
    if (!byChat.has(e.r.chat_id)) byChat.set(e.r.chat_id, []);
    byChat.get(e.r.chat_id).push(e);
  }
  const site = cfg(env, 'SITE_URL');
  const delivered = new Set();
  const blocked = [];
  let sent = 0;
  for (const [chatId, list] of byChat) {
    if (budget <= 0) break;
    budget--;
    const body = list.map(e => `${e.msgs.join('\n')}\n${site}/?ca=${encodeURIComponent(e.r.ca)}&chain=${encodeURIComponent(e.r.chain)}`).join('\n\n');
    const res = await sendMessage(env, chatId, body).catch(() => ({ ok: false, status: 0 }));
    if (res.ok) {
      sent++;
      list.forEach(e => delivered.add(e));
    } else if (res.status === 403) {
      blocked.push(chatId); // the user blocked the bot
    }
  }

  const updates = evaluated
    .filter(e => !e.msgs.length || delivered.has(e))
    .map(({ r, st }) => env.DB.prepare(`UPDATE watches SET ref_price = ?, peak_liq = ?, last_risk = ?, risk_checked_at = ?, cool_liq = ?, cool_sells = ?
      WHERE token = ? AND chain = ? AND ca = ?`).bind(st.ref_price ?? null, st.peak_liq ?? null, st.last_risk ?? null,
      st.risk_checked_at ?? null, st.cool_liq ?? null, st.cool_sells ?? null, r.token, r.chain, r.ca));
  for (const chatId of blocked) {
    updates.push(env.DB.prepare('DELETE FROM watches WHERE token IN (SELECT token FROM subscribers WHERE chat_id = ?)').bind(chatId));
    updates.push(env.DB.prepare('DELETE FROM subscribers WHERE chat_id = ?').bind(chatId));
  }
  if (updates.length) await env.DB.batch(updates);
  return { rows: rows.length, sent, budgetLeft: budget };
}
