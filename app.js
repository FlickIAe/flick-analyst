/**
 * FLICK ANALYST — Core Application Engine
 * i18n (EN / ZH), live DexScreener market data, GoPlus contract checks,
 * holder distribution, quick reports and live polling.
 *
 * Rule of thumb: everything shown comes from a real API response.
 * When data is missing or a check is unavailable, the UI says so ("N/A", "Not verified").
 */

// ===================================================================
// 1. DICTIONARY & I18N
// ===================================================================
const TRANSLATIONS = {
  en: {
    mainnet_active: "Live DEX Data",
    open_app: "Open App →",
    open_terminal: "Open Terminal →",
    badge_landing: "📡 LIVE DEX DATA & CONTRACT RISK SIGNALS",
    hero_title: 'Navigate Web3 Markets <br><span class="bg-gradient-to-r from-amberCore via-amberGlow to-white bg-clip-text text-transparent">Never Exit Liquidity</span>',
    hero_desc: "Real-time DEX charts, market-health scoring, contract checks and holder distribution for traders.",
    ca_placeholder: "Paste contract address (CA) or ticker...",
    analyze_btn: "Analyze Token",
    recent_title: "Recent:",
    audit_score_title: "Market Health Score",
    audit_score_desc: "Scores liquidity, volume, pair age, buy/sell balance and socials from live DEX data, plus GoPlus contract checks.",
    dex_stream_title: "Live DEX Stream",
    dex_stream_desc: "Embedded real-time charts for pools on Raydium, Uniswap, PancakeSwap and more.",
    copilot_title: "Quick Reports",
    copilot_desc: "Instant reports on safety, holders, liquidity and trend for any token.",
    live_price: "Live Price",
    pool_liquidity: "Pool Liquidity",
    volume_24h: "24h Volume",
    fdv: "FDV",
    security_score: "Market Health",
    stream_dex: "DexScreener Real-Time Chart",
    tab_audit: "🛡️ Audit",
    tab_ai: "🤖 Reports",
    tab_holders: "📊 Holders",
    swap_access: "Quick DEX Swap Access",
    swap_desc: "Direct redirection with the contract address pre-loaded.",
    ai_placeholder: "Ask anything about this token...",
    send: "Send",
    back_landing: "Cover",
    back_title: "Back to cover",
    copy_ca: "Copy contract address",
    footer_copyright: "© 2026 Flick Analyst. Web3 Intelligence Platform. Not financial advice.",
    live: "LIVE",
    updated_ago: "updated {s}s ago",
    scanning_title: "ANALYZING TOKEN DATA...",
    scan_step_1: "Validating input...",
    scan_step_2: "Fetching pairs from DexScreener...",
    scan_step_3: "Selecting the most liquid pool...",
    scan_step_4: "Computing market-health score...",
    scan_step_5: "Analysis completed!",
    not_found: "Token not found on DexScreener.",
    api_error: "Could not reach DexScreener. Try again.",
    invalid_input: "Enter a valid contract address or ticker.",
    not_verified: "Not verified",
    none: "None",
    checking: "Checking…",
    waiting: "Waiting for data…",
    verify: "Verify on-chain ↗",
    copied: "Report copied to clipboard!",
    copy_failed: "Could not copy to clipboard.",
    ca_copied: "Contract address copied!",
    links: "{n} links",
    pools_title: "DEX Liquidity Pools",
    pools_count: "{n} pools",
    no_pools: "No pools loaded.",
    pool_active: "ACTIVE",
    pool_switch: "Show this pool on the chart",
    share_btn: "📤 Share Analysis",

    // Banner
    health_good_title: "Market Health: GOOD",
    health_good_sub: "Healthy liquidity and activity.",
    health_mid_title: "Market Health: MODERATE",
    health_mid_sub: "Some weak signals. Review the details below.",
    health_bad_title: "Market Health: CAUTION",
    health_bad_sub: "Weak liquidity, very new pair or unusual activity.",
    contract_bad_title: "Contract Risk: HIGH",
    contract_bad_sub: "GoPlus flagged critical issues (honeypot, sell restrictions or extreme tax).",
    contract_unverified_note: "Contract checks unavailable — verify on-chain before trading.",
    contract_warn_note: "GoPlus flagged some contract risks — see below.",

    // Breakdown
    breakdown_title: "Score Breakdown",
    bd_liq: "Liquidity",
    bd_vol: "Volume / Liquidity",
    bd_age: "Pair Age",
    bd_bal: "Buy / Sell Balance",

    // Matrix
    sec_market: "Market signals · DexScreener",
    sec_contract: "Contract checks · GoPlus",
    m_txns: "Buys / Sells 24h",
    m_age: "Pair Age",
    m_socials: "Socials / Info",
    m_tax: "Buy / Sell Tax",
    m_honeypot: "Honeypot / Sell",
    m_mint: "Mint Authority",
    m_freeze: "Freeze / Blacklist",
    m_proxy: "Proxy / Mutable",
    m_lp: "LP Locked / Burned",
    b_balanced: "BALANCED",
    b_skewed: "SKEWED",
    b_very_new: "VERY NEW",
    b_new: "NEW",
    b_ok: "OK",
    b_none: "NONE",
    b_safe: "SAFE",
    b_risk: "RISK",
    b_high: "HIGH",
    b_locked: "LOCKED",
    b_partial: "PARTIAL",
    b_unlocked: "UNLOCKED",
    v_enabled: "Enabled",
    v_disabled: "Disabled",
    v_detected: "Detected",
    v_not_detected: "Not detected",
    v_honeypot: "Honeypot / can't sell",
    v_sellable: "Sellable",
    v_transfer_fee: "Transfer fee",

    // Summary
    security_summary_title: "Market & Contract Summary",
    s_liquidity: "Liquidity",
    s_volliq: "Volume / Liquidity",
    s_top10: "Top 10 holders",
    s_contract: "Contract checks",
    risk_ok: "no critical flags",
    risk_warn: "some risk flags",
    risk_bad: "critical risk",
    contract_src_err: "GoPlus unreachable",
    contract_src_unsupported: "chain not supported",

    // Holders
    top10_ratio_label: "Top 10 Holders Supply Ratio",
    holder_count: "Holders",
    holders_na: "Holder data is unavailable for this token. Use \"Verify on-chain\" in the Audit tab.",
    holders_loading: "Loading holders from GoPlus…",
    holders_usd_note: "USD value ≈ % supply × FDV",
    tag_contract: "Contract",
    tag_locked: "🔒 Locked",
    th_rank: "#",
    th_address: "Wallet Address",
    th_supply: "% Supply",
    th_val: "≈ USD",
    th_tag: "Tag",

    // Chat
    chat_intro: "🤖 Ask anything about this token: the AI assistant answers using its live data. The buttons above give instant reports.",
    ai_hint: "Ask anything: the AI assistant answers with this token's live data.",
    ai_thinking: "Thinking…",
    ai_refusal: "I can't help with that request. Try asking about this token's risks, holders, liquidity or trend.",
    ai_busy: "The AI assistant is busy right now. Here is a quick report instead.",
    ai_interrupted: "(answer interrupted)",
    chip_safety: "🛡️ Safety Check",
    chip_holders: "📊 Holders Risk",
    chip_liquidity: "💧 Liquidity Depth",
    chip_price: "📈 Technical Trend"
  },
  zh: {
    mainnet_active: "实时 DEX 数据",
    open_app: "进入应用 →",
    open_terminal: "打开终端 →",
    badge_landing: "📡 实时 DEX 数据与合约风险信号",
    hero_title: '洞察 Web3 市场 <br><span class="bg-gradient-to-r from-amberCore via-amberGlow to-white bg-clip-text text-transparent">避开所有链上陷阱。</span>',
    hero_desc: "实时 DEX 图表、市场健康评分、合约检测与持币分布，专为交易者打造。",
    ca_placeholder: "粘贴合约地址 (CA) 或代币符号...",
    analyze_btn: "分析代币",
    recent_title: "最近：",
    audit_score_title: "市场健康评分",
    audit_score_desc: "基于实时 DEX 数据评估流动性、交易量、交易对年龄、买卖平衡与社交信息，并结合 GoPlus 合约检测。",
    dex_stream_title: "DEX 实时流",
    dex_stream_desc: "嵌入 Raydium、Uniswap、PancakeSwap 等池子的实时图表。",
    copilot_title: "快速报告",
    copilot_desc: "为任意代币即时生成安全、持币、流动性与走势报告。",
    live_price: "实时价格",
    pool_liquidity: "池子流动性",
    volume_24h: "24小时交易量",
    fdv: "完全稀释估值",
    security_score: "市场健康",
    stream_dex: "DexScreener 实时图表",
    tab_audit: "🛡️ 审计",
    tab_ai: "🤖 报告",
    tab_holders: "📊 持币",
    swap_access: "DEX 快速兑换",
    swap_desc: "自动预载合约地址的直接跳转链接。",
    ai_placeholder: "关于这个代币，问什么都可以...",
    send: "发送",
    back_landing: "返回首页",
    back_title: "返回首页",
    copy_ca: "复制合约地址",
    footer_copyright: "© 2026 Flick Analyst. Web3 链上情报终端。不构成投资建议。",
    live: "实时",
    updated_ago: "{s} 秒前更新",
    scanning_title: "正在分析代币数据...",
    scan_step_1: "正在验证输入...",
    scan_step_2: "正在从 DexScreener 获取交易对...",
    scan_step_3: "正在选择流动性最高的池子...",
    scan_step_4: "正在计算市场健康评分...",
    scan_step_5: "分析完成！",
    not_found: "未在 DexScreener 找到该代币。",
    api_error: "无法连接 DexScreener，请重试。",
    invalid_input: "请输入有效的合约地址或代币符号。",
    not_verified: "未验证",
    none: "无",
    checking: "检测中…",
    waiting: "等待数据…",
    verify: "链上验证 ↗",
    copied: "报告已复制到剪贴板！",
    copy_failed: "复制失败。",
    ca_copied: "合约地址已复制！",
    links: "{n} 个链接",
    pools_title: "DEX 流动性池",
    pools_count: "{n} 个池子",
    no_pools: "暂无池子数据。",
    pool_active: "当前",
    pool_switch: "在图表中显示此池子",
    share_btn: "📤 分享分析",

    health_good_title: "市场健康：良好",
    health_good_sub: "流动性与活跃度良好。",
    health_mid_title: "市场健康：一般",
    health_mid_sub: "存在部分弱信号，请查看下方详情。",
    health_bad_title: "市场健康：需谨慎",
    health_bad_sub: "流动性较弱、交易对很新或交易异常。",
    contract_bad_title: "合约风险：高",
    contract_bad_sub: "GoPlus 检测到严重问题（蜜罐、限制卖出或极高税率）。",
    contract_unverified_note: "合约检测不可用，交易前请先链上验证。",
    contract_warn_note: "GoPlus 检测到部分合约风险，详见下方。",

    breakdown_title: "评分明细",
    bd_liq: "流动性",
    bd_vol: "交易量 / 流动性",
    bd_age: "交易对年龄",
    bd_bal: "买卖平衡",

    sec_market: "市场信号 · DexScreener",
    sec_contract: "合约检测 · GoPlus",
    m_txns: "24h 买 / 卖笔数",
    m_age: "交易对年龄",
    m_socials: "社交 / 信息",
    m_tax: "买 / 卖税率",
    m_honeypot: "蜜罐 / 可卖出",
    m_mint: "增发权限",
    m_freeze: "冻结 / 黑名单",
    m_proxy: "代理 / 可修改",
    m_lp: "LP 锁定 / 销毁",
    b_balanced: "均衡",
    b_skewed: "失衡",
    b_very_new: "极新",
    b_new: "较新",
    b_ok: "正常",
    b_none: "无",
    b_safe: "安全",
    b_risk: "风险",
    b_high: "高危",
    b_locked: "已锁定",
    b_partial: "部分",
    b_unlocked: "未锁定",
    v_enabled: "已开启",
    v_disabled: "已关闭",
    v_detected: "已检测到",
    v_not_detected: "未检测到",
    v_honeypot: "蜜罐 / 无法卖出",
    v_sellable: "可卖出",
    v_transfer_fee: "转账手续费",

    security_summary_title: "市场与合约摘要",
    s_liquidity: "流动性",
    s_volliq: "交易量 / 流动性",
    s_top10: "前10名持币",
    s_contract: "合约检测",
    risk_ok: "无严重风险",
    risk_warn: "存在风险项",
    risk_bad: "严重风险",
    contract_src_err: "无法连接 GoPlus",
    contract_src_unsupported: "暂不支持该链",

    top10_ratio_label: "前10名持币占比",
    holder_count: "持币地址",
    holders_na: "暂无该代币的持币数据。请使用审计页中的“链上验证”。",
    holders_loading: "正在从 GoPlus 加载持币数据…",
    holders_usd_note: "USD 价值 ≈ 持仓占比 × FDV",
    tag_contract: "合约",
    tag_locked: "🔒 锁定",
    th_rank: "#",
    th_address: "钱包地址",
    th_supply: "持仓占比",
    th_val: "≈ USD",
    th_tag: "标签",

    chat_intro: "🤖 关于这个代币，问什么都可以：AI 助手会基于实时数据回答。上方按钮可生成即时报告。",
    ai_hint: "问什么都可以：AI 助手会基于该代币的实时数据回答。",
    ai_thinking: "思考中…",
    ai_refusal: "我无法处理这个请求。可以试着询问该代币的风险、持币、流动性或走势。",
    ai_busy: "AI 助手当前繁忙，先为你生成一份快速报告。",
    ai_interrupted: "（回答中断）",
    chip_safety: "🛡️ 安全检测",
    chip_holders: "📊 持仓风险",
    chip_liquidity: "💧 流动性深度",
    chip_price: "📈 技术走势"
  },
  es: {
    mainnet_active: "Datos DEX en vivo",
    open_app: "Abrir app →",
    open_terminal: "Abrir terminal →",
    badge_landing: "📡 DATOS DEX EN VIVO Y SEÑALES DE RIESGO DE CONTRATOS",
    hero_title: 'Navegá los mercados Web3 <br><span class="bg-gradient-to-r from-amberCore via-amberGlow to-white bg-clip-text text-transparent">Nunca seas la liquidez de salida</span>',
    hero_desc: "Gráficos DEX en tiempo real, puntuación de salud del mercado, chequeos de contrato y distribución de holders para traders.",
    ca_placeholder: "Pegá la dirección del contrato (CA) o el ticker...",
    analyze_btn: "Analizar token",
    recent_title: "Recientes:",
    audit_score_title: "Salud del mercado",
    audit_score_desc: "Evalúa liquidez, volumen, antigüedad del par, balance compra/venta y redes con datos DEX en vivo, más chequeos de contrato de GoPlus.",
    dex_stream_title: "DEX en vivo",
    dex_stream_desc: "Gráficos en tiempo real de pools en Raydium, Uniswap, PancakeSwap y más.",
    copilot_title: "Reportes rápidos",
    copilot_desc: "Reportes instantáneos de seguridad, holders, liquidez y tendencia de cualquier token.",
    live_price: "Precio en vivo",
    pool_liquidity: "Liquidez del pool",
    volume_24h: "Volumen 24h",
    fdv: "FDV",
    security_score: "Salud del mercado",
    stream_dex: "Gráfico en tiempo real de DexScreener",
    tab_audit: "🛡️ Auditoría",
    tab_ai: "🤖 Reportes",
    tab_holders: "📊 Holders",
    swap_access: "Acceso rápido a swap",
    swap_desc: "Redirección directa con la dirección del contrato precargada.",
    ai_placeholder: "Preguntá lo que quieras sobre este token...",
    send: "Enviar",
    back_landing: "Portada",
    back_title: "Volver a la portada",
    copy_ca: "Copiar dirección del contrato",
    footer_copyright: "© 2026 Flick Analyst. Plataforma de inteligencia Web3. No es asesoramiento financiero.",
    live: "EN VIVO",
    updated_ago: "actualizado hace {s}s",
    scanning_title: "ANALIZANDO DATOS DEL TOKEN...",
    scan_step_1: "Validando la entrada...",
    scan_step_2: "Buscando pares en DexScreener...",
    scan_step_3: "Eligiendo el pool con más liquidez...",
    scan_step_4: "Calculando la salud del mercado...",
    scan_step_5: "¡Análisis completado!",
    not_found: "No se encontró el token en DexScreener.",
    api_error: "No se pudo conectar con DexScreener. Probá de nuevo.",
    invalid_input: "Ingresá una dirección de contrato o un ticker válido.",
    not_verified: "No verificado",
    none: "Ninguno",
    checking: "Verificando…",
    waiting: "Esperando datos…",
    verify: "Verificar on-chain ↗",
    copied: "¡Reporte copiado al portapapeles!",
    copy_failed: "No se pudo copiar al portapapeles.",
    ca_copied: "¡Dirección del contrato copiada!",
    links: "{n} enlaces",
    pools_title: "Pools de liquidez DEX",
    pools_count: "{n} pools",
    no_pools: "No hay pools cargados.",
    pool_active: "ACTIVO",
    pool_switch: "Mostrar este pool en el gráfico",
    share_btn: "📤 Compartir análisis",

    health_good_title: "Salud del mercado: BUENA",
    health_good_sub: "Liquidez y actividad saludables.",
    health_mid_title: "Salud del mercado: MODERADA",
    health_mid_sub: "Hay algunas señales débiles. Revisá los detalles abajo.",
    health_bad_title: "Salud del mercado: PRECAUCIÓN",
    health_bad_sub: "Liquidez baja, par muy nuevo o actividad inusual.",
    contract_bad_title: "Riesgo del contrato: ALTO",
    contract_bad_sub: "GoPlus detectó problemas críticos (honeypot, restricciones de venta o impuestos extremos).",
    contract_unverified_note: "Chequeos de contrato no disponibles: verificá on-chain antes de operar.",
    contract_warn_note: "GoPlus detectó algunos riesgos en el contrato; mirá abajo.",

    breakdown_title: "Desglose de la puntuación",
    bd_liq: "Liquidez",
    bd_vol: "Volumen / Liquidez",
    bd_age: "Antigüedad del par",
    bd_bal: "Balance compra / venta",

    sec_market: "Señales de mercado · DexScreener",
    sec_contract: "Chequeos de contrato · GoPlus",
    m_txns: "Compras / Ventas 24h",
    m_age: "Antigüedad del par",
    m_socials: "Redes / Info",
    m_tax: "Impuesto compra / venta",
    m_honeypot: "Honeypot / Venta",
    m_mint: "Permiso de mint",
    m_freeze: "Congelar / Lista negra",
    m_proxy: "Proxy / Modificable",
    m_lp: "LP bloqueado / quemado",
    b_balanced: "EQUILIBRADO",
    b_skewed: "DESBALANCEADO",
    b_very_new: "MUY NUEVO",
    b_new: "NUEVO",
    b_ok: "OK",
    b_none: "NINGUNO",
    b_safe: "SEGURO",
    b_risk: "RIESGO",
    b_high: "ALTO",
    b_locked: "BLOQUEADO",
    b_partial: "PARCIAL",
    b_unlocked: "SIN BLOQUEAR",
    v_enabled: "Activado",
    v_disabled: "Desactivado",
    v_detected: "Detectado",
    v_not_detected: "No detectado",
    v_honeypot: "Honeypot / no se puede vender",
    v_sellable: "Se puede vender",
    v_transfer_fee: "Comisión de transferencia",

    security_summary_title: "Resumen de mercado y contrato",
    s_liquidity: "Liquidez",
    s_volliq: "Volumen / Liquidez",
    s_top10: "Top 10 holders",
    s_contract: "Chequeos de contrato",
    risk_ok: "sin alertas críticas",
    risk_warn: "algunas alertas de riesgo",
    risk_bad: "riesgo crítico",
    contract_src_err: "GoPlus no responde",
    contract_src_unsupported: "red no soportada",

    top10_ratio_label: "Porcentaje del supply en el top 10",
    holder_count: "Holders",
    holders_na: "No hay datos de holders para este token. Usá \"Verificar on-chain\" en la pestaña Auditoría.",
    holders_loading: "Cargando holders desde GoPlus…",
    holders_usd_note: "Valor USD ≈ % del supply × FDV",
    tag_contract: "Contrato",
    tag_locked: "🔒 Bloqueado",
    th_rank: "#",
    th_address: "Billetera",
    th_supply: "% Supply",
    th_val: "≈ USD",
    th_tag: "Etiqueta",

    chat_intro: "🤖 Preguntá lo que quieras sobre este token: el asistente de IA responde con sus datos en vivo. Los botones de arriba dan reportes instantáneos.",
    ai_hint: "Preguntá lo que quieras: el asistente de IA responde con los datos en vivo de este token.",
    ai_thinking: "Pensando…",
    ai_refusal: "No puedo ayudar con ese pedido. Probá preguntar por los riesgos, holders, liquidez o tendencia de este token.",
    ai_busy: "El asistente de IA está ocupado. Te dejo un reporte rápido.",
    ai_interrupted: "(respuesta interrumpida)",
    chip_safety: "🛡️ Seguridad",
    chip_holders: "📊 Riesgo de holders",
    chip_liquidity: "💧 Profundidad de liquidez",
    chip_price: "📈 Tendencia técnica"
  }
};

let currentLang = 'en';
const L = (en, zh, es) => (currentLang === 'zh' ? zh : currentLang === 'es' ? (es ?? en) : en);

function tr(key, vars) {
  let s = TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
  return s;
}

const $ = id => document.getElementById(id);

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function safeStorage(fn) {
  try { return fn(); } catch (e) { return null; }
}

// ===================================================================
// 2. STATE
// ===================================================================
function blankToken() {
  return {
    loaded: false, symbol: '—', quoteSymbol: '', name: '', ca: '', chainId: '', dexId: '',
    pairAddress: '', pairUrl: '', price: 0, priceChange: 0, changes: {}, liquidity: 0, volume: 0, fdv: 0,
    imageUrl: '', buys: null, sells: null, pairCreatedAt: null, socials: 0, score: 0,
    parts: { liq: 0, vol: 0, age: 0, bal: 0 }, updatedAt: 0
  };
}

let currentToken = blankToken();   // only real API data lives here
let currentPairs = [];             // pools of the current token, sorted by liquidity
let security = { key: '', status: 'idle', data: null }; // idle | loading | ok | error | unsupported
let chatKey = '';
let scanning = false;

const tokenKey = t => `${t.chainId}:${t.ca}`;

function changeLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  currentLang = lang;
  safeStorage(() => localStorage.setItem('flickLang', lang));
  document.documentElement.lang = { zh: 'zh-CN', es: 'es' }[lang] || 'en';
  ['langSelectLanding', 'langSelectDashboard'].forEach(id => {
    const s = $(id);
    if (s) s.value = lang;
  });
  document.querySelectorAll('[data-i18n]').forEach(e => {
    const v = TRANSLATIONS[lang][e.dataset.i18n];
    if (v) e.innerHTML = v; // dictionary strings are trusted constants
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(e => {
    const v = TRANSLATIONS[lang][e.dataset.i18nPh];
    if (v) e.placeholder = v;
  });
  document.querySelectorAll('[data-i18n-title]').forEach(e => {
    const v = TRANSLATIONS[lang][e.dataset.i18nTitle];
    if (v) { e.title = v; e.setAttribute('aria-label', v); }
  });
  // The chat is intentionally NOT re-rendered so conversations survive a language change
  renderRecent();
  renderAuditTab();
  renderHoldersTable();
  renderMultiPairs();
  renderLastUpdated();
}

// ===================================================================
// 3. PAGE NAVIGATION
// ===================================================================
let navSeq = 0;

// Guarded by a sequence number so fast enter/exit clicks can't leave both screens visible
function swapScreens(from, to) {
  const seq = ++navSeq;
  from.classList.remove('opacity-100', 'scale-100');
  from.classList.add('opacity-0', 'scale-95');
  setTimeout(() => {
    if (seq !== navSeq) return;
    from.classList.add('hidden');
    to.classList.remove('hidden');
    window.scrollTo(0, 0);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (seq !== navSeq) return;
      to.classList.remove('opacity-0', 'scale-95');
      to.classList.add('opacity-100', 'scale-100');
    }));
  }, 300);
}

const isDashboardVisible = () => !$('appDashboard').classList.contains('hidden');

function enterApp() {
  swapScreens($('landingCover'), $('appDashboard'));
  if (!currentToken.loaded) {
    executeTokenSearch('SOL').then(st => {
      if (st !== 'ok' && st !== 'aborted') showToast(statusMessage(st));
    });
  }
  toggleLivePolling(true);
}

function exitToLanding() {
  swapScreens($('appDashboard'), $('landingCover'));
  toggleLivePolling(false);
}

function triggerScanAndEnter() {
  const v = $('landingCaInput').value.trim();
  if (!v) return enterApp();
  runScanSequence(v, { onDone: ok => { if (ok) enterApp(); } });
}

function triggerScanFromDashboard() {
  const v = $('dashboardCaInput').value.trim();
  if (v) runScanSequence(v);
}

function statusMessage(status) {
  return tr({ invalid: 'invalid_input', not_found: 'not_found' }[status] || 'api_error');
}

// The overlay runs WHILE the real request is in flight
async function runScanSequence(query, { onDone, chain = '' } = {}) {
  if (scanning) return;
  if (!isValidQuery(query)) { showToast(tr('invalid_input')); return; }
  scanning = true;
  const overlay = $('scanOverlay');
  const statusText = $('scanStatusText');
  const steps = ['scan_step_1', 'scan_step_2', 'scan_step_3', 'scan_step_4'].map(k => tr(k));
  let i = 0;
  overlay.classList.remove('hidden');
  statusText.textContent = steps[0];
  const timer = setInterval(() => {
    i = Math.min(i + 1, steps.length - 1);
    statusText.textContent = steps[i];
  }, 450);

  let status = 'api_error';
  try {
    status = await executeTokenSearch(query, { chain, remember: true });
  } finally {
    clearInterval(timer);
    const ok = status === 'ok';
    if (ok) statusText.textContent = tr('scan_step_5');
    setTimeout(() => {
      overlay.classList.add('hidden');
      scanning = false;
      if (!ok && status !== 'aborted') showToast(statusMessage(status));
      if (onDone) onDone(ok);
    }, ok ? 350 : 150);
  }
}

// ===================================================================
// 4. DEXSCREENER DATA
// ===================================================================
const DEX_API = 'https://api.dexscreener.com/latest/dex';
const EVM_RE = /^0x[a-fA-F0-9]{40}$/;
const SOL_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const TICKER_RE = /^[\p{L}\p{N}._\-]{1,24}$/u; // accepts CJK / unicode tickers

const normalizeQuery = q => String(q || '').trim().replace(/^\$/, '');
const isAddress = q => EVM_RE.test(q) || SOL_RE.test(q);
const isValidQuery = q => { const n = normalizeQuery(q); return isAddress(n) || TICKER_RE.test(n); };

// EVM addresses are case-insensitive, Solana (base58) addresses are not
function sameAddress(a, b) {
  if (!a || !b) return false;
  return EVM_RE.test(b) || EVM_RE.test(a) ? a.toLowerCase() === b.toLowerCase() : a === b;
}

const byLiquidity = (a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0);

async function fetchJson(url, { signal, timeout = 10000 } = {}) {
  const c = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => { timedOut = true; c.abort(); }, timeout);
  const onAbort = () => c.abort();
  if (signal) {
    if (signal.aborted) c.abort();
    else signal.addEventListener('abort', onAbort, { once: true });
  }
  try {
    const res = await fetch(url, { signal: c.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    if (timedOut) throw new Error(`Timeout after ${timeout}ms`);
    throw err;
  } finally {
    clearTimeout(timer);
    if (signal) signal.removeEventListener('abort', onAbort);
  }
}

// Groups pairs by token (chain + base address) and returns the pools of the most liquid token
function pickTokenPools(pairs, preferChain) {
  const groups = new Map();
  for (const p of pairs) {
    if (!p?.baseToken?.address || !p.pairAddress || !p.chainId) continue;
    const key = `${p.chainId}:${p.baseToken.address.toLowerCase()}`;
    if (!groups.has(key)) groups.set(key, { chain: p.chainId, liq: 0, pairs: [] });
    const g = groups.get(key);
    g.liq += p.liquidity?.usd || 0;
    g.pairs.push(p);
  }
  let candidates = [...groups.values()];
  if (preferChain && candidates.some(g => g.chain === preferChain)) {
    candidates = candidates.filter(g => g.chain === preferChain);
  }
  candidates.sort((a, b) => b.liq - a.liq);
  return candidates.length ? candidates[0].pairs.sort(byLiquidity) : [];
}

let searchController = null;

// Returns 'ok' | 'invalid' | 'not_found' | 'api_error' | 'aborted'. Never invents data.
async function executeTokenSearch(query, { chain = '', remember = false } = {}) {
  const q = normalizeQuery(query);
  const addr = isAddress(q);
  if (!addr && !TICKER_RE.test(q)) return 'invalid';

  if (searchController) searchController.abort();
  const controller = (searchController = new AbortController());

  try {
    let pairs;
    if (addr) {
      const d = await fetchJson(`${DEX_API}/tokens/${encodeURIComponent(q)}`, { signal: controller.signal });
      // only pairs where the searched token is the BASE token (never show the quote token instead)
      pairs = (d.pairs || []).filter(p => sameAddress(p.baseToken?.address, q));
    } else {
      const d = await fetchJson(`${DEX_API}/search?q=${encodeURIComponent(q)}`, { signal: controller.signal });
      const all = d.pairs || [];
      const sym = q.toUpperCase();
      const exact = all.filter(p => (p.baseToken?.symbol || '').toUpperCase() === sym);
      pairs = exact.length ? exact : all;
    }
    if (controller !== searchController) return 'aborted'; // superseded by a newer search
    const pools = pickTokenPools(pairs, chain);
    if (!pools.length) return 'not_found';
    currentPairs = pools;
    selectPair(pools[0]);
    if (remember) addRecent(currentToken);
    return 'ok';
  } catch (err) {
    if (controller !== searchController || err.name === 'AbortError') return 'aborted';
    console.warn('Search failed:', err);
    return 'api_error';
  } finally {
    if (searchController === controller) searchController = null;
  }
}

const ageDays = t => (t.pairCreatedAt ? (Date.now() - t.pairCreatedAt) / 864e5 : null);
const level = s => (s >= 75 ? 'ok' : s >= 50 ? 'warn' : 'bad');

// Weights sum to 1 and every component can reach 100, so the score really spans 0–100
function computeHealthScore(t) {
  const liq = t.liquidity >= 500000 ? 100 : t.liquidity >= 100000 ? 80 : t.liquidity >= 20000 ? 50 : 20;
  const ratio = t.liquidity ? t.volume / t.liquidity : 0;
  const vol = t.volume < 10000 ? 20 : ratio > 20 ? 40 : ratio >= 0.05 ? 100 : 55;
  const days = ageDays(t);
  const age = days == null ? 50 : days < 1 ? 15 : days < 7 ? 40 : days < 30 ? 70 : 100;
  let bal = 50;
  if (t.buys != null && t.sells != null && t.buys + t.sells > 0) {
    const r = t.buys / (t.buys + t.sells);
    bal = r < 0.25 || r > 0.75 ? 40 : 100;
  }
  const soc = t.socials ? 100 : 0;
  const score = Math.round(liq * 0.35 + vol * 0.2 + age * 0.25 + bal * 0.1 + soc * 0.1);
  return { score: Math.max(0, Math.min(100, score)), parts: { liq, vol, age, bal } };
}

// Shared by the search and the live poll
function applyMetrics(pair) {
  const t = currentToken;
  const num = v => (Number.isFinite(Number(v)) ? Number(v) : null);
  t.price = parseFloat(pair.priceUsd) || 0;
  t.changes = {
    m5: num(pair.priceChange?.m5), h1: num(pair.priceChange?.h1),
    h6: num(pair.priceChange?.h6), h24: num(pair.priceChange?.h24)
  };
  t.priceChange = t.changes.h24 ?? 0;
  t.liquidity = pair.liquidity?.usd || 0;
  t.volume = pair.volume?.h24 || 0;
  t.fdv = pair.fdv || pair.marketCap || 0;
  t.buys = pair.txns?.h24?.buys ?? null;
  t.sells = pair.txns?.h24?.sells ?? null;
  t.pairCreatedAt = pair.pairCreatedAt || null;
  t.socials = (pair.info?.websites?.length || 0) + (pair.info?.socials?.length || 0);
  t.updatedAt = Date.now();
  const h = computeHealthScore(t);
  t.score = h.score;
  t.parts = h.parts;
}

function selectPair(pair) {
  const t = currentToken;
  const sameToken = t.loaded && t.chainId === pair.chainId && sameAddress(t.ca, pair.baseToken?.address);
  t.symbol = pair.baseToken?.symbol || 'TOKEN';
  t.quoteSymbol = pair.quoteToken?.symbol || 'USD';
  t.name = pair.baseToken?.name || t.symbol;
  t.ca = pair.baseToken?.address || pair.pairAddress;
  t.chainId = pair.chainId || '';
  t.dexId = pair.dexId || '';
  t.pairAddress = pair.pairAddress;
  t.pairUrl = String(pair.url || '').startsWith('https://dexscreener.com/') ? pair.url : '';
  t.imageUrl = pair.info?.imageUrl || '';
  applyMetrics(pair);
  t.loaded = true;
  try {
    const u = new URL(location.href);
    u.searchParams.set('ca', t.ca);
    u.searchParams.set('chain', t.chainId);
    history.replaceState(null, '', u);
  } catch (e) { /* file:// or sandboxed iframe */ }
  updateUI(true);
  renderMultiPairs();
  if (!sameToken) fetchSecurity();
}

const CHAIN_NAMES = {
  solana: 'Solana', ethereum: 'Ethereum', bsc: 'BNB Chain', base: 'Base', arbitrum: 'Arbitrum',
  polygon: 'Polygon', optimism: 'Optimism', avalanche: 'Avalanche'
};
const chainName = id => CHAIN_NAMES[id] || (id ? id.charAt(0).toUpperCase() + id.slice(1) : '—');

const UNI_CHAIN = { ethereum: 'mainnet', base: 'base', arbitrum: 'arbitrum', polygon: 'polygon', optimism: 'optimism' };
const EXPLORERS = {
  solana: 'https://solscan.io/account/', ethereum: 'https://etherscan.io/address/', bsc: 'https://bscscan.com/address/',
  base: 'https://basescan.org/address/', arbitrum: 'https://arbiscan.io/address/', polygon: 'https://polygonscan.com/address/',
  optimism: 'https://optimistic.etherscan.io/address/', avalanche: 'https://snowtrace.io/address/'
};
const explorerLink = (chainId, addr) => (EXPLORERS[chainId] ? EXPLORERS[chainId] + encodeURIComponent(addr) : '');

function swapLinks(t) {
  const ca = encodeURIComponent(t.ca);
  if (t.chainId === 'solana') return [['⚡ Raydium', `https://raydium.io/swap/?inputMint=sol&outputMint=${ca}`], ['🪐 Jupiter', `https://jup.ag/swap/SOL-${ca}`]];
  if (UNI_CHAIN[t.chainId]) return [['🦄 Uniswap', `https://app.uniswap.org/swap?chain=${UNI_CHAIN[t.chainId]}&outputCurrency=${ca}`]];
  if (t.chainId === 'bsc') return [['🥞 PancakeSwap', `https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${ca}`]];
  return t.pairUrl ? [['📊 DexScreener', t.pairUrl]] : [];
}

function verifyLink(t) {
  const ca = encodeURIComponent(t.ca);
  if (t.chainId === 'solana') return `https://rugcheck.xyz/tokens/${ca}`;
  if (GOPLUS_EVM[t.chainId]) return `https://gopluslabs.io/token-security/${GOPLUS_EVM[t.chainId]}/${ca}`;
  return t.pairUrl || '';
}

// full=false only refreshes numbers (live polling): no iframe reload, no chat reset
function updateUI(full = true) {
  const t = currentToken;
  if (!t.loaded) return;

  const up = t.priceChange >= 0;
  const chg = el('span', `${up ? 'text-cyberGreen' : 'text-crimsonRisk'} text-xs font-semibold`, formatPct(t.priceChange));
  $('statPrice').replaceChildren(`$${formatPrice(t.price)} `, chg);
  $('statLiquidity').textContent = formatUsd(t.liquidity);
  $('statVolume').textContent = formatUsd(t.volume);
  $('statFdv').textContent = t.fdv ? formatUsd(t.fdv) : '—';
  const sc = $('statSecurityScore');
  sc.textContent = t.score;
  sc.className = `font-mono text-lg font-extrabold ${TXT[level(t.score)]}`;
  renderAuditTab();
  renderLastUpdated();
  if (!full) return;

  $('activeTokenSymbol').textContent = `${t.symbol} / ${t.quoteSymbol}`;
  $('activeTokenName').textContent = t.name;
  $('activeChainBadge').textContent = t.dexId ? `${chainName(t.chainId)} · ${t.dexId}` : chainName(t.chainId);
  $('activeChainBadge').classList.remove('hidden');
  const caEl = $('activeTokenCa');
  caEl.textContent = `CA: ${shortAddr(t.ca)}`;
  caEl.title = t.ca;
  $('copyCaBtn').classList.remove('hidden');

  const logo = $('tokenLogoContainer');
  const fallback = () => logo.replaceChildren(el('div', 'w-full h-full bg-gradient-to-br from-amber-500 to-amber-700 font-extrabold text-white flex items-center justify-center text-lg', Array.from(t.symbol)[0] || '⚡'));
  if (t.imageUrl.startsWith('https://')) {
    const img = new Image();
    img.alt = t.symbol;
    img.className = 'w-full h-full object-cover rounded-2xl';
    img.onerror = fallback;
    img.src = t.imageUrl;
    logo.replaceChildren(img);
  } else fallback();

  const frame = $('dexFrame');
  const src = `https://dexscreener.com/${encodeURIComponent(t.chainId)}/${encodeURIComponent(t.pairAddress)}?embed=1&theme=dark&trades=0&info=0`;
  if (frame.dataset.src !== src) { frame.dataset.src = src; frame.src = src; }

  const links = swapLinks(t);
  [['raydiumBtn', links[0]], ['jupiterBtn', links[1]]].forEach(([id, l]) => {
    const a = $(id);
    a.classList.toggle('hidden', !l);
    if (l) { a.textContent = l[0]; a.href = l[1]; }
  });
  const vb = $('verifyBtn');
  const vl = verifyLink(t);
  vb.classList.toggle('hidden', !vl);
  if (vl) vb.href = vl;

  renderHoldersTable();
  if (chatKey !== tokenKey(t)) {
    chatKey = tokenKey(t);
    renderAiWelcome();
  }
}

// Helper Formatters
const compactFmt = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 });
const formatCompact = n => (Number.isFinite(n) ? compactFmt.format(n) : '—');
const formatUsd = n => (Number.isFinite(n) ? `$${formatCompact(n)}` : '—');
const shortAddr = a => (a && a.length > 14 ? `${a.slice(0, 6)}…${a.slice(-4)}` : a || '—');

function formatPrice(n) {
  if (!Number.isFinite(n) || n <= 0) return '0.00';
  if (n < 1e-6) return n.toExponential(3);
  if (n < 1) return n.toPrecision(4); // keeps 4 significant digits for micro-caps
  return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatPct(n, digits = 1) {
  if (n == null || !Number.isFinite(n)) return '—';
  return `${n >= 0 ? '+' : ''}${n.toFixed(digits)}%`;
}

function formatAge(days) {
  if (days == null) return 'N/A';
  if (days < 1) return `${Math.max(1, Math.round(days * 24))}h`;
  if (days < 365) return `${Math.floor(days)}d`;
  return `${(days / 365).toFixed(1)}y`;
}

// ===================================================================
// 5. GOPLUS CONTRACT SECURITY (graceful fallback to "Not verified")
// ===================================================================
const GOPLUS_API = 'https://api.gopluslabs.io/api/v1';
const GOPLUS_EVM = { ethereum: 1, bsc: 56, base: 8453, arbitrum: 42161, polygon: 137, optimism: 10, avalanche: 43114 };

const flag = v => (v === undefined || v === null || v === '' ? null : String(v) === '1');
const toNum = v => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
// true if any is true, false if all known values are false, null if nothing is known
const anyTrue = (...vals) => (vals.includes(true) ? true : vals.includes(false) ? false : null);

// Same-origin proxy (functions/api/goplus.js on Cloudflare Pages), used when the browser can't call GoPlus directly
const GOPLUS_PROXY = '/api/goplus';
let goplusViaProxy = false; // remembered once the direct call has failed

async function fetchGoPlus(chainId, ca) {
  const chain = chainId === 'solana' ? 'solana' : GOPLUS_EVM[chainId];
  const direct = chain === 'solana'
    ? `${GOPLUS_API}/solana/token_security?contract_addresses=${encodeURIComponent(ca)}`
    : `${GOPLUS_API}/token_security/${chain}?contract_addresses=${encodeURIComponent(ca)}`;
  const proxy = `${GOPLUS_PROXY}?chain=${encodeURIComponent(chain)}&address=${encodeURIComponent(ca)}`;
  const canProxy = location.protocol.startsWith('http');
  if (goplusViaProxy && canProxy) return fetchJson(proxy, { timeout: 12000 });
  try {
    return await fetchJson(direct, { timeout: 12000 });
  } catch (err) {
    if (!canProxy) throw err;
    const d = await fetchJson(proxy, { timeout: 12000 });
    goplusViaProxy = true;
    return d;
  }
}

async function fetchSecurity() {
  const t = currentToken;
  const key = tokenKey(t);
  const supported = t.chainId === 'solana' || !!GOPLUS_EVM[t.chainId];

  security = { key, status: supported ? 'loading' : 'unsupported', data: null };
  renderAuditTab();
  renderHoldersTable();
  if (!supported) return;

  const ca = t.ca, isSol = t.chainId === 'solana';
  try {
    const d = await fetchGoPlus(t.chainId, ca);
    if (security.key !== key) return; // token changed meanwhile
    const result = d?.result || {};
    const raw = result[ca] || result[ca.toLowerCase()] || Object.values(result)[0];
    if (!raw || typeof raw !== 'object') throw new Error(d?.message || 'Empty GoPlus result');
    security = { key, status: 'ok', data: normalizeSecurity(raw, isSol) };
  } catch (err) {
    console.warn('GoPlus check failed:', err);
    if (security.key !== key) return;
    security = { key, status: 'error', data: null };
  }
  renderAuditTab();
  renderHoldersTable();
}

function normalizeSecurity(r, isSol) {
  const holders = (Array.isArray(r.holders) ? r.holders : [])
    .map(h => ({
      address: String(h.address || h.account || ''),
      pct: (toNum(h.percent) ?? 0) * 100, // GoPlus returns a fraction (0.12 = 12%)
      tag: String(h.tag || ''),
      isContract: flag(h.is_contract) === true,
      isLocked: flag(h.is_locked) === true
    }))
    .filter(h => h.address)
    .sort((a, b) => b.pct - a.pct);
  const top10 = holders.length ? holders.slice(0, 10).reduce((s, h) => s + h.pct, 0) : null;
  const holderCount = toNum(r.holder_count);

  if (isSol) {
    const st = o => flag(o?.status);
    const hook = Array.isArray(r.transfer_hook) ? r.transfer_hook.length > 0 : null;
    const fee = r.transfer_fee && typeof r.transfer_fee === 'object' ? Object.keys(r.transfer_fee).length > 0 : null;
    return {
      isSol: true, honeypot: null, cannotSell: flag(r.non_transferable),
      buyTax: null, sellTax: null, transferFee: fee,
      mintable: st(r.mintable), freezable: st(r.freezable),
      mutable: anyTrue(st(r.balance_mutable_authority), st(r.closable), hook),
      lpLocked: null, holders, top10, holderCount
    };
  }

  const lp = Array.isArray(r.lp_holders) ? r.lp_holders : [];
  const burned = a => /^0x0{40}$|^0x0{36}dead$/i.test(a || '');
  const lpLocked = lp.length
    ? Math.min(100, lp.filter(h => flag(h.is_locked) || burned(h.address)).reduce((s, h) => s + (toNum(h.percent) ?? 0) * 100, 0))
    : null;
  const pct = v => (toNum(v) == null ? null : toNum(v) * 100);
  return {
    isSol: false,
    honeypot: flag(r.is_honeypot), cannotSell: flag(r.cannot_sell_all),
    buyTax: pct(r.buy_tax), sellTax: pct(r.sell_tax), transferFee: null,
    mintable: flag(r.is_mintable),
    freezable: anyTrue(flag(r.is_blacklisted), flag(r.transfer_pausable)),
    mutable: anyTrue(flag(r.is_proxy), flag(r.can_take_back_ownership), flag(r.owner_change_balance), flag(r.hidden_owner)),
    lpLocked, holders, top10, holderCount
  };
}

function contractRisk(s) {
  if (!s) return null;
  const maxTax = Math.max(s.buyTax ?? 0, s.sellTax ?? 0);
  if (s.honeypot || s.cannotSell || maxTax >= 30) return 'bad';
  if (maxTax > 10 || s.mintable || s.freezable || s.mutable || s.transferFee) return 'warn';
  return 'ok';
}

// ===================================================================
// 6. TOP HOLDERS (real GoPlus data, or an explicit "unavailable")
// ===================================================================
function renderHoldersTable() {
  const tbody = $('holdersTableBody');
  const summary = $('holdersSummary');
  if (!tbody) return;
  const t = currentToken;
  const message = text => {
    const td = el('td', 'py-6 text-center text-slate-500 text-[11px] leading-relaxed font-sans', text);
    td.colSpan = 5;
    const tr_ = document.createElement('tr');
    tr_.appendChild(td);
    tbody.replaceChildren(tr_);
    if (summary) summary.classList.add('hidden');
  };

  if (!t.loaded) return message(tr('waiting'));
  if (security.status === 'loading') return message(tr('holders_loading'));
  const s = security.status === 'ok' ? security.data : null;
  if (!s || !s.holders.length) return message(tr('holders_na'));

  if (summary) {
    const lv = s.top10 > 50 ? 'bad' : s.top10 > 30 ? 'warn' : 'ok';
    const ratio = el('div', 'flex items-center justify-between gap-2');
    ratio.append(el('span', 'text-slate-400', tr('top10_ratio_label')), el('span', `font-mono font-bold ${TXT[lv]}`, `${s.top10.toFixed(1)}%`));
    const bar = el('div', 'w-full h-1.5 bg-slate-800 rounded-full overflow-hidden');
    const fill = el('div', `h-full ${BAR[lv]}`);
    fill.style.width = `${Math.min(100, s.top10)}%`;
    bar.appendChild(fill);
    const meta = el('div', 'flex items-center justify-between gap-2 text-[10px] text-slate-500');
    meta.append(el('span', '', s.holderCount != null ? `${tr('holder_count')}: ${formatCompact(s.holderCount)}` : ''), el('span', '', tr('holders_usd_note')));
    summary.replaceChildren(ratio, bar, meta);
    summary.classList.remove('hidden');
  }

  tbody.replaceChildren(...s.holders.slice(0, 15).map((h, i) => {
    const row = el('tr', 'hover:bg-white/5');
    const addrTd = el('td', 'py-2 pr-2');
    const link = explorerLink(t.chainId, h.address);
    if (link) {
      const a = el('a', 'text-electricCyan hover:underline', shortAddr(h.address));
      a.href = link; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.title = h.address;
      addrTd.appendChild(a);
    } else addrTd.textContent = shortAddr(h.address);
    const tag = h.tag || (h.isLocked ? tr('tag_locked') : h.isContract ? tr('tag_contract') : '—');
    const tagTd = el('td', 'py-2 text-right text-[10px] text-slate-400 truncate max-w-[110px]', tag);
    tagTd.title = tag;
    row.append(
      el('td', 'py-2 pr-2 text-slate-500', String(i + 1)),
      addrTd,
      el('td', `py-2 pr-2 ${h.pct >= 10 ? 'text-crimsonRisk' : h.pct >= 5 ? 'text-amberGlow' : 'text-slate-200'}`, `${h.pct.toFixed(2)}%`),
      el('td', 'py-2 pr-2 text-right text-slate-300', t.fdv ? formatUsd((h.pct / 100) * t.fdv) : '—'),
      tagTd
    );
    return row;
  }));
}

// ===================================================================
// 7. AUDIT TAB & RISK MATRIX
// ===================================================================
const TXT = { ok: 'text-cyberGreen', warn: 'text-amberGlow', bad: 'text-crimsonRisk', na: 'text-slate-400' };
const BAR = { ok: 'bg-cyberGreen', warn: 'bg-amberGlow', bad: 'bg-crimsonRisk', na: 'bg-slate-600' };
const BANNER = {
  ok: 'bg-cyberGreen/10 border-cyberGreen/30', warn: 'bg-amberGlow/10 border-amberGlow/30',
  bad: 'bg-crimsonRisk/10 border-crimsonRisk/30', na: 'bg-white/5 border-white/10'
};
const PILL = {
  ok: 'text-cyberGreen bg-cyberGreen/20', warn: 'text-amberGlow bg-amberGlow/20',
  bad: 'text-crimsonRisk bg-crimsonRisk/20', na: 'text-slate-400 bg-white/5'
};
const MARKET_CELLS = ['mTxns', 'mAge', 'mSocials'];
const CONTRACT_CELLS = ['mTax', 'mHoneypot', 'mMint', 'mFreeze', 'mProxy', 'mLp'];

function setCell(id, value, badge, lv) {
  const v = $(`${id}Val`), b = $(`${id}Badge`);
  if (v) { v.textContent = value; v.className = `font-mono font-bold text-xs ${TXT[lv]}`; }
  if (b) { b.textContent = badge; b.className = `text-[10px] font-bold ${TXT[lv]}`; }
}

function setBanner(lv, icon, title, sub, badge) {
  $('honeypotBanner').className = `p-3.5 rounded-xl border flex items-center justify-between gap-3 ${BANNER[lv]}`;
  $('honeypotIcon').textContent = icon;
  const ti = $('honeypotTitle');
  ti.textContent = title;
  ti.className = `text-xs font-bold ${TXT[lv]}`;
  $('honeypotSub').textContent = sub;
  const b = $('honeypotBadge');
  b.textContent = badge;
  b.className = `font-mono text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 ${PILL[lv]}`;
}

function setBars(values) {
  Object.entries(values).forEach(([k, v]) => {
    const txt = $(`${k}Score`), bar = $(`${k}Bar`);
    const lv = v == null ? 'na' : level(v);
    txt.textContent = v == null ? '—' : `${v}%`;
    txt.className = `${TXT[lv]} font-mono`;
    bar.style.width = `${v || 0}%`;
    bar.className = `h-full transition-all duration-500 ${BAR[lv]}`;
  });
}

function boolCell(id, value, onText, offText) {
  if (value == null) setCell(id, 'N/A', 'N/A', 'na');
  else if (value) setCell(id, onText, tr('b_risk'), 'warn');
  else setCell(id, offText, tr('b_safe'), 'ok');
}

function renderContractCells() {
  if (security.status !== 'ok') {
    const text = security.status === 'loading' ? tr('checking') : tr('not_verified');
    CONTRACT_CELLS.forEach(id => setCell(id, text, security.status === 'loading' ? '…' : 'N/A', 'na'));
    return;
  }
  const s = security.data;

  // Taxes
  if (s.isSol) {
    if (s.transferFee == null) setCell('mTax', 'N/A', 'N/A', 'na');
    else if (s.transferFee) setCell('mTax', tr('v_transfer_fee'), tr('b_risk'), 'warn');
    else setCell('mTax', '0%', tr('b_safe'), 'ok');
  } else if (s.buyTax == null && s.sellTax == null) {
    setCell('mTax', 'N/A', 'N/A', 'na');
  } else {
    const fmt = v => (v == null ? '?' : `${+v.toFixed(1)}%`);
    const max = Math.max(s.buyTax ?? 0, s.sellTax ?? 0);
    const lv = max >= 30 ? 'bad' : max > 10 ? 'warn' : 'ok';
    setCell('mTax', `${fmt(s.buyTax)} / ${fmt(s.sellTax)}`, tr(lv === 'ok' ? 'b_safe' : lv === 'warn' ? 'b_risk' : 'b_high'), lv);
  }

  // Honeypot / sellability
  const hp = anyTrue(s.honeypot, s.cannotSell);
  if (hp == null) setCell('mHoneypot', 'N/A', 'N/A', 'na');
  else if (hp) setCell('mHoneypot', tr('v_honeypot'), tr('b_high'), 'bad');
  else setCell('mHoneypot', tr('v_sellable'), tr('b_safe'), 'ok');

  boolCell('mMint', s.mintable, tr('v_enabled'), tr('v_disabled'));
  boolCell('mFreeze', s.freezable, tr('v_detected'), tr('v_not_detected'));
  boolCell('mProxy', s.mutable, tr('v_detected'), tr('v_not_detected'));

  // LP lock
  if (s.lpLocked == null) setCell('mLp', 'N/A', 'N/A', 'na');
  else {
    const lv = s.lpLocked >= 90 ? 'ok' : s.lpLocked >= 50 ? 'warn' : 'bad';
    setCell('mLp', `${s.lpLocked.toFixed(0)}%`, tr(lv === 'ok' ? 'b_locked' : lv === 'warn' ? 'b_partial' : 'b_unlocked'), lv);
  }
}

// Market data comes from DexScreener, contract data from GoPlus. Unknowns are marked as such.
function renderAuditTab() {
  const t = currentToken;
  if (!$('honeypotBanner')) return;

  if (!t.loaded) {
    setBanner('na', '⏳', tr('waiting'), '', '—');
    $('auditOverallScore').textContent = '—';
    setBars({ bdLiq: null, bdVol: null, bdAge: null, bdBal: null });
    [...MARKET_CELLS, ...CONTRACT_CELLS].forEach(id => setCell(id, '—', '', 'na'));
    const ul = $('auditSummaryList');
    if (ul) ul.replaceChildren();
    return;
  }

  $('auditOverallScore').textContent = `${t.score}/100`;
  setBars({ bdLiq: t.parts.liq, bdVol: t.parts.vol, bdAge: t.parts.age, bdBal: t.parts.bal });

  // Banner: a critical contract flag overrides an otherwise healthy market
  const risk = security.status === 'ok' ? contractRisk(security.data) : null;
  const hl = level(t.score);
  const unverified = security.status === 'error' || security.status === 'unsupported';
  if (risk === 'bad') {
    setBanner('bad', '☠️', tr('contract_bad_title'), tr('contract_bad_sub'), `${t.score}/100`);
  } else {
    const [title, sub, icon] = {
      ok: ['health_good_title', 'health_good_sub', '📈'],
      warn: ['health_mid_title', 'health_mid_sub', '⚖️'],
      bad: ['health_bad_title', 'health_bad_sub', '⚠️']
    }[hl];
    const note = unverified ? tr('contract_unverified_note') : risk === 'warn' ? tr('contract_warn_note') : '';
    setBanner(hl, icon, tr(title), note ? `${tr(sub)} ${note}` : tr(sub), `${t.score}/100`);
  }

  // Buys / Sells 24h
  if (t.buys == null || t.sells == null) setCell('mTxns', 'N/A', 'N/A', 'na');
  else {
    const r = t.buys + t.sells ? t.buys / (t.buys + t.sells) : 0.5;
    const skew = r < 0.25 || r > 0.75;
    setCell('mTxns', `${formatCompact(t.buys)} / ${formatCompact(t.sells)}`, tr(skew ? 'b_skewed' : 'b_balanced'), skew ? 'warn' : 'ok');
  }
  // Pair age
  const days = ageDays(t);
  if (days == null) setCell('mAge', 'N/A', 'N/A', 'na');
  else setCell('mAge', formatAge(days), tr(days < 1 ? 'b_very_new' : days < 7 ? 'b_new' : 'b_ok'), days < 1 ? 'bad' : days < 7 ? 'warn' : 'ok');
  // Socials / info
  setCell('mSocials', t.socials ? tr('links', { n: t.socials }) : tr('none'), tr(t.socials ? 'b_ok' : 'b_none'), t.socials ? 'ok' : 'warn');

  renderContractCells();

  const ul = $('auditSummaryList');
  if (ul) {
    const ratio = t.liquidity ? t.volume / t.liquidity : 0;
    const rows = [
      [t.liquidity >= 100000 ? 'ok' : 'warn', tr('s_liquidity'), formatUsd(t.liquidity)],
      [ratio > 20 || ratio < 0.05 ? 'warn' : 'ok', tr('s_volliq'), `${ratio.toFixed(2)}x`],
      ['na', 'FDV', t.fdv ? formatUsd(t.fdv) : '—']
    ];
    const s = security.status === 'ok' ? security.data : null;
    if (s && s.top10 != null) rows.push([s.top10 > 50 ? 'bad' : s.top10 > 30 ? 'warn' : 'ok', tr('s_top10'), `${s.top10.toFixed(1)}%`]);
    const contractText = {
      ok: () => `GoPlus — ${tr(`risk_${risk}`)}`,
      loading: () => tr('checking'),
      error: () => `${tr('not_verified')} (${tr('contract_src_err')})`,
      unsupported: () => `${tr('not_verified')} (${tr('contract_src_unsupported')})`,
      idle: () => tr('not_verified')
    }[security.status]();
    rows.push([risk || 'na', tr('s_contract'), contractText]);
    ul.replaceChildren(...rows.map(([lv, k, v]) => {
      const li = el('li', `flex items-center gap-2 ${TXT[lv]}`);
      li.append(el('span', 'w-3 text-center', lv === 'ok' ? '✓' : lv === 'bad' ? '✕' : '•'), el('strong', '', `${k}:`), ` ${v}`);
      return li;
    }));
  }
}

// ===================================================================
// 8. QUICK REPORTS (chat)
// ===================================================================
function renderAiWelcome() {
  const chatBox = $('copilotChatBox');
  const t = currentToken;
  if (!chatBox || !t.loaded) return;
  const card = el('div', 'p-3.5 rounded-xl bg-slate-900/90 border border-electricCyan/30 text-slate-200 space-y-1.5');
  const stats = el('p', 'text-[11px] text-slate-300');
  stats.append(
    `${L('Market Health Score', '市场健康评分', 'Puntuación de salud del mercado')}: `, el('strong', '', `${t.score}/100`),
    ` · ${L('Liquidity', '流动性', 'Liquidez')}: `, el('strong', '', formatUsd(t.liquidity)),
    ` · ${L('24h Volume', '24小时交易量', 'Volumen 24h')}: `, el('strong', '', formatUsd(t.volume))
  );
  resetAiConversation();
  card.append(
    el('p', 'font-bold text-electricCyan', `🤖 $${t.symbol} · ${chainName(t.chainId)}`),
    stats,
    el('p', 'text-[11px] text-electricCyan/80', tr('ai_hint')),
    el('p', 'text-[10px] text-slate-500', L('Reports use public DEX data and GoPlus checks. Not financial advice.', '报告基于公开 DEX 数据与 GoPlus 检测，不构成投资建议。', 'Los reportes usan datos públicos de DEX y chequeos de GoPlus. No es asesoramiento financiero.'))
  );
  chatBox.replaceChildren(card);
}

function reportText(type) {
  const t = currentToken, s = `$${t.symbol}`;
  const days = ageDays(t);
  const ratio = (t.liquidity ? t.volume / t.liquidity : 0).toFixed(2);
  const sec = security.status === 'ok' ? security.data : null;
  const yn = v => (v == null ? 'N/A' : v ? L('YES ⚠️', '是 ⚠️', 'SÍ ⚠️') : L('no ✓', '否 ✓', 'no ✓'));
  switch (type) {
    case 'safety': {
      const lines = [
        L(`🛡️ Safety signals for ${s}`, `🛡️ ${s} 安全信号`, `🛡️ Señales de seguridad de ${s}`),
        `• ${L('Market Health Score', '市场健康评分', 'Puntuación de salud del mercado')}: ${t.score}/100`,
        `• ${L('Pair age', '交易对年龄', 'Antigüedad del par')}: ${formatAge(days)}`
      ];
      if (sec) {
        const tax = v => (v == null ? '?' : `${+v.toFixed(1)}%`);
        lines.push(
          `• ${L('Honeypot / cannot sell', '蜜罐 / 无法卖出', 'Honeypot / no se puede vender')}: ${yn(anyTrue(sec.honeypot, sec.cannotSell))}`,
          sec.isSol ? `• ${L('Transfer fee', '转账手续费', 'Comisión de transferencia')}: ${yn(sec.transferFee)}` : `• ${L('Buy / Sell tax', '买 / 卖税', 'Impuesto compra / venta')}: ${tax(sec.buyTax)} / ${tax(sec.sellTax)}`,
          `• ${L('Mint authority', '增发权限', 'Permiso de mint')}: ${yn(sec.mintable)}`,
          `• ${L('Freeze / blacklist', '冻结 / 黑名单', 'Congelar / lista negra')}: ${yn(sec.freezable)}`,
          `• ${L('Proxy / mutable', '代理 / 可修改', 'Proxy / modificable')}: ${yn(sec.mutable)}`,
          `• ${L('Contract risk', '合约风险', 'Riesgo del contrato')}: ${tr(`risk_${contractRisk(sec)}`)} (GoPlus)`
        );
      } else {
        lines.push(`• ${L('Honeypot, taxes, mint, ownership', '蜜罐、税率、铸币、所有权', 'Honeypot, impuestos, mint, propiedad')}: ${L('NOT verified. Use "Verify on-chain".', '未验证，请使用“链上验证”。', 'NO verificado. Usá "Verificar on-chain".')}`);
      }
      return lines.join('\n');
    }
    case 'holders': {
      if (!sec || !sec.holders.length) return `👥 ${tr('holders_na')}`;
      return [
        L(`👥 Holder distribution for ${s}`, `👥 ${s} 持币分布`, `👥 Distribución de holders de ${s}`),
        `• ${tr('top10_ratio_label')}: ${sec.top10.toFixed(1)}%`,
        sec.holderCount != null ? `• ${tr('holder_count')}: ${formatCompact(sec.holderCount)}` : null,
        ...sec.holders.slice(0, 3).map((h, i) => `• #${i + 1} ${shortAddr(h.address)} — ${h.pct.toFixed(2)}%${h.tag ? ` (${h.tag})` : ''}`),
        L('Note: top wallets are often LPs, exchanges or burn addresses.', '注意：头部地址常为流动池、交易所或销毁地址。', 'Nota: las billeteras principales suelen ser pools de liquidez, exchanges o direcciones de quema.')
      ].filter(Boolean).join('\n');
    }
    case 'liquidity': return [
      L(`💧 Liquidity for ${s}`, `💧 ${s} 流动性`, `💧 Liquidez de ${s}`),
      `• ${L('Active pool', '当前池子', 'Pool activo')}: ${t.dexId || 'DEX'} ${t.symbol}/${t.quoteSymbol} — ${formatUsd(t.liquidity)}`,
      `• ${L('Pools found', '池子数量', 'Pools encontrados')}: ${currentPairs.length} (${formatUsd(currentPairs.reduce((a, p) => a + (p.liquidity?.usd || 0), 0))} ${L('total', '合计', 'en total')})`,
      `• FDV: ${t.fdv ? formatUsd(t.fdv) : '—'}`,
      `• ${L('Volume / Liquidity', '交易量 / 流动性', 'Volumen / Liquidez')}: ${ratio}x`
    ].join('\n');
    case 'trend': return [
      L(`📈 Trend for ${s}`, `📈 ${s} 走势`, `📈 Tendencia de ${s}`),
      `• 5m: ${formatPct(t.changes.m5)} · 1h: ${formatPct(t.changes.h1)} · 6h: ${formatPct(t.changes.h6)} · 24h: ${formatPct(t.changes.h24)}`,
      `• ${L('Price', '价格', 'Precio')}: $${formatPrice(t.price)}`,
      `• ${L('24h volume', '24h 交易量', 'Volumen 24h')}: ${formatUsd(t.volume)}`,
      t.buys != null ? `• ${L('Buys / Sells 24h', '24h 买 / 卖', 'Compras / Ventas 24h')}: ${formatCompact(t.buys)} / ${formatCompact(t.sells)}` : null
    ].filter(Boolean).join('\n');
    default: return L('Try asking about: safety, holders, liquidity or trend.', '可尝试询问：安全、持币、流动性或走势。', 'Probá preguntar sobre: seguridad, holders, liquidez o tendencia.');
  }
}

function addMsg(text, isUser) {
  const box = $('copilotChatBox');
  if (!box) return;
  box.appendChild(el('div', isUser
    ? 'p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-200 text-right font-sans my-1 whitespace-pre-line break-words'
    : 'p-3 bg-slate-900/90 rounded-xl border border-electricCyan/30 text-xs font-mono text-slate-200 leading-relaxed my-1 whitespace-pre-line break-words', text));
  box.scrollTop = box.scrollHeight;
  return box.lastChild;
}

function quickCopilotQuery(type) {
  if (!currentToken.loaded) return showToast(tr('waiting'));
  addMsg(reportText(type), false);
}

function detectReportType(text) {
  const q = text.toLowerCase();
  return /safe|honey|rug|scam|risk|tax|mint|freeze|audit|segur|riesgo|estafa|impuesto|auditor|安全|蜜罐|风险|税|审计/.test(q) ? 'safety'
    : /holder|whale|ballena|concentra|distribu|持币|巨鲸|集中|分布/.test(q) ? 'holders'
    : /liq|pool|\blp\b|流动|池/.test(q) ? 'liquidity'
    : /price|trend|pump|dump|chart|precio|tendencia|grafic|gráfic|sube|baja|走势|价格|涨|跌/.test(q) ? 'trend' : 'help';
}

// ---- AI assistant (Claude via functions/api/chat.js) ----
const AI_ENDPOINT = '/api/chat';
const AI_MAX_TURNS = 10;
let aiHistory = [];       // text-only turns for the current token: [{ role, content }]
let aiController = null;  // in-flight request
let aiAvailable = location.protocol.startsWith('http'); // the function only exists on the deployed site

function resetAiConversation() {
  if (aiController) aiController.abort();
  aiController = null;
  aiHistory = [];
  setAiBusy(false);
}

function setAiBusy(busy) {
  const input = $('copilotInput'), btn = $('copilotSendBtn');
  if (input) input.disabled = busy;
  if (btn) btn.disabled = busy;
}

// Snapshot of what the app knows about the current token (sent with each question)
function tokenSnapshot() {
  const t = currentToken;
  const s = security.status === 'ok' ? security.data : null;
  const clip = (v, n = 60) => (v == null ? null : String(v).slice(0, n));
  const days = ageDays(t);
  return {
    token: { symbol: clip(t.symbol, 24), name: clip(t.name), chain: chainName(t.chainId), contract: t.ca, quote: clip(t.quoteSymbol, 24), dex: clip(t.dexId, 30) },
    market: {
      priceUsd: t.price || null, priceChangePct: t.changes, liquidityUsd: t.liquidity, volume24hUsd: t.volume, fdvUsd: t.fdv || null,
      buys24h: t.buys, sells24h: t.sells, pairAgeDays: days == null ? null : +days.toFixed(1), socialLinks: t.socials,
      marketHealthScore: t.score,
      scoreParts: { liquidity: t.parts.liq, volumeToLiquidity: t.parts.vol, pairAge: t.parts.age, buySellBalance: t.parts.bal }
    },
    pools: currentPairs.slice(0, 5).map(p => ({
      dex: clip(p.dexId, 30), pair: clip(`${p.baseToken?.symbol || ''}/${p.quoteToken?.symbol || ''}`, 50),
      liquidityUsd: p.liquidity?.usd || 0, active: p.pairAddress === t.pairAddress
    })),
    contractChecks: s ? {
      source: 'GoPlus', riskLevel: contractRisk(s), honeypot: s.honeypot, cannotSellAll: s.cannotSell,
      buyTaxPct: s.buyTax, sellTaxPct: s.sellTax, transferFee: s.transferFee, mintable: s.mintable,
      freezeOrBlacklist: s.freezable, proxyOrMutable: s.mutable, lpLockedPct: s.lpLocked,
      holderCount: s.holderCount, top10HoldersPct: s.top10 == null ? null : +s.top10.toFixed(2),
      topHolders: s.holders.slice(0, 5).map(h => ({ pct: +h.pct.toFixed(2), tag: clip(h.tag, 40), isContract: h.isContract, isLocked: h.isLocked }))
    } : { status: security.status === 'loading' ? 'loading' : 'unavailable' }
  };
}

async function sendCopilotQuery() {
  const input = $('copilotInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text || aiController) return;
  if (!currentToken.loaded) return showToast(tr('waiting'));
  input.value = '';
  addMsg(text, true);
  // Without the AI function (local file, not deployed, no API key) fall back to the instant reports
  const answered = aiAvailable && await askAI(text);
  if (!answered) addMsg(reportText(detectReportType(text)), false);
}

// Streams Claude's answer into a chat bubble. Returns false when the caller should fall back.
async function askAI(question) {
  const key = chatKey;
  const bubble = addMsg(tr('ai_thinking'), false);
  bubble.classList.add('animate-pulse');
  const box = $('copilotChatBox');
  const controller = (aiController = new AbortController());
  setAiBusy(true);
  let answer = '', stop = null, failed = null;

  try {
    const res = await fetch(AI_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({ lang: currentLang, context: tokenSnapshot(), messages: [...aiHistory, { role: 'user', content: question }] })
    });
    const type = res.headers.get('content-type') || '';
    if (!res.ok || !res.body || !type.includes('ndjson')) {
      // 404/405 or an HTML page: the function isn't deployed. 503: no API key configured.
      if (res.status !== 429 && res.status !== 400) aiAvailable = false;
      throw new Error(`AI endpoint HTTP ${res.status}`);
    }
    const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
    let buf = '';
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += value;
      let nl;
      while ((nl = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, nl).trim();
        buf = buf.slice(nl + 1);
        if (!line) continue;
        const ev = JSON.parse(line);
        if (ev.t === 'delta') answer += ev.v;
        else if (ev.t === 'reset') answer = '';
        else if (ev.t === 'end') stop = ev.stop;
        else if (ev.t === 'error') failed = ev.code;
      }
      if (answer && key === chatKey) {
        bubble.classList.remove('animate-pulse');
        bubble.textContent = answer;
        box.scrollTop = box.scrollHeight;
      }
    }
  } catch (err) {
    if (err.name === 'AbortError') { bubble.remove(); return true; } // token changed; chat was reset
    console.warn('AI assistant unavailable:', err);
    failed = failed || 'network';
  } finally {
    if (aiController === controller) { aiController = null; setAiBusy(false); }
  }
  if (key !== chatKey) return true;
  bubble.classList.remove('animate-pulse');

  if (stop === 'refusal') { bubble.textContent = tr('ai_refusal'); return true; }
  if (!answer) {
    bubble.remove();
    if (failed === 'config') aiAvailable = false;
    if (failed === 'busy') showToast(tr('ai_busy'));
    return false;
  }
  if (failed || !stop) answer += `\n${tr('ai_interrupted')}`;
  else if (stop === 'max_tokens') answer += ' …';
  bubble.textContent = answer;
  box.scrollTop = box.scrollHeight;
  aiHistory.push({ role: 'user', content: question }, { role: 'assistant', content: answer });
  aiHistory = aiHistory.slice(-AI_MAX_TURNS);
  return true;
}

// ===================================================================
// 9. UI TABS & LIVE POLLING
// ===================================================================
function switchTab(tab) {
  ['audit', 'ai', 'holders'].forEach(t => {
    const btn = $(`tabBtn-${t}`);
    const content = $(`tabContent-${t}`);
    const active = t === tab;
    btn.setAttribute('aria-selected', String(active));
    btn.tabIndex = active ? 0 : -1;
    btn.className = active
      ? 'flex-1 py-2 px-3 rounded-xl bg-amber-500/10 text-amberGlow border border-amber-500/30 transition-all flex items-center justify-center gap-1.5 font-bold'
      : 'flex-1 py-2 px-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent transition-all flex items-center justify-center gap-1.5 font-bold';
    content.classList.toggle('hidden', !active);
    if (t === 'ai') content.classList.toggle('flex', active);
  });
}

let liveInterval = null;
let pollInFlight = false;

function toggleLivePolling(enable) {
  const pulse = $('livePulse');
  const dot = $('liveDot');
  if (liveInterval) clearInterval(liveInterval);
  liveInterval = null;

  if (enable) {
    if (pulse) pulse.classList.remove('hidden');
    if (dot) dot.className = 'relative inline-flex rounded-full h-2 w-2 bg-cyberGreen';
    liveInterval = setInterval(() => { if (!document.hidden) refreshPriceLive(); }, 12000);
  } else {
    if (pulse) pulse.classList.add('hidden');
    if (dot) dot.className = 'relative inline-flex rounded-full h-2 w-2 bg-slate-500';
  }
}

async function refreshPriceLive() {
  const t = currentToken;
  if (!t.loaded || pollInFlight || scanning) return;
  pollInFlight = true;
  const key = tokenKey(t);
  try {
    const data = await fetchJson(`${DEX_API}/tokens/${encodeURIComponent(t.ca)}`, { timeout: 8000 });
    if (tokenKey(currentToken) !== key) return; // user switched token while waiting
    const own = (data.pairs || []).filter(p => p.chainId === t.chainId && sameAddress(p.baseToken?.address, t.ca)).sort(byLiquidity);
    if (own.length) { currentPairs = own; renderMultiPairs(); }
    const pair = own.find(p => p.pairAddress === currentToken.pairAddress);
    if (!pair) return;
    const old = t.price;
    applyMetrics(pair);
    updateUI(false); // numbers only: keeps chart and chat intact
    const priceEl = $('statPrice');
    if (priceEl && old && t.price !== old) {
      priceEl.style.color = t.price > old ? '#10B981' : '#FF3366';
      setTimeout(() => { priceEl.style.color = ''; }, 800);
    }
  } catch (err) {
    console.warn('Live poll skipped:', err);
  } finally {
    pollInFlight = false;
  }
}

function renderLastUpdated() {
  const e = $('lastUpdated');
  if (!e) return;
  const t = currentToken;
  if (!t.loaded || !t.updatedAt) { e.textContent = ''; return; }
  e.textContent = tr('updated_ago', { s: Math.max(0, Math.round((Date.now() - t.updatedAt) / 1000)) });
}

setInterval(() => { if (!document.hidden && isDashboardVisible()) renderLastUpdated(); }, 1000);

// Refresh immediately when the tab becomes visible again
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && liveInterval && isDashboardVisible()) refreshPriceLive();
});

// ===================================================================
// 10. POOLS, SHARE, COPY, RECENT SEARCHES & TOASTS
// ===================================================================
function renderMultiPairs() {
  const container = $('multiPairsContainer');
  const countEl = $('multiPairCount');
  if (!container) return;
  if (countEl) countEl.textContent = tr('pools_count', { n: currentPairs.length });
  if (!currentPairs.length) {
    container.replaceChildren(el('p', 'text-[11px] text-slate-500 italic', tr('no_pools')));
    return;
  }
  container.replaceChildren(...currentPairs.slice(0, 8).map(p => {
    const active = p.pairAddress === currentToken.pairAddress;
    const row = el('div', `flex items-center justify-between gap-2 p-2 rounded-lg border text-xs font-mono transition-all ${active ? 'bg-amber-500/10 border-amber-500/40' : 'bg-slate-900/60 border-white/5 hover:border-amber-500/30'}`);
    const left = el('button', 'flex items-center gap-2 min-w-0 flex-1 text-left');
    left.type = 'button';
    left.title = tr('pool_switch');
    left.onclick = () => { if (p.pairAddress !== currentToken.pairAddress) selectPair(p); };
    left.append(
      el('span', 'text-amberGlow font-bold text-[11px] truncate', String(p.dexId || 'DEX').toUpperCase()),
      el('span', 'text-slate-400 text-[10px] truncate', `${p.baseToken?.symbol || ''}/${p.quoteToken?.symbol || ''}`)
    );
    if (active) left.appendChild(el('span', 'text-[9px] text-cyberGreen font-bold', tr('pool_active')));
    const right = el('div', 'flex items-center gap-3 shrink-0');
    right.appendChild(el('span', 'text-slate-200 font-semibold', formatUsd(p.liquidity?.usd || 0)));
    if (String(p.url || '').startsWith('https://dexscreener.com/')) {
      const a = el('a', 'text-electricCyan hover:underline text-[10px]', 'Pool ↗');
      a.href = p.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      right.appendChild(a);
    }
    row.append(left, right);
    return row;
  }));
}

async function copyText(text, okKey) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(tr(okKey));
  } catch (err) {
    showToast(tr('copy_failed'));
  }
}

function copyContractAddress() {
  if (currentToken.loaded) copyText(currentToken.ca, 'ca_copied');
}

function copySocialShareCard() {
  const t = currentToken;
  if (!t.loaded) return;
  const risk = security.status === 'ok' ? `GoPlus: ${tr(`risk_${contractRisk(security.data)}`)}` : tr('not_verified');
  const text = [
    '⚡ Flick Market Snapshot', '',
    `🪙 $${t.symbol} (${chainName(t.chainId)})`,
    `📍 CA: ${t.ca}`, '',
    `💲 ${tr('live_price')}: $${formatPrice(t.price)} (${formatPct(t.priceChange)} 24h)`,
    `📊 FDV: ${t.fdv ? formatUsd(t.fdv) : '—'} | ${tr('pool_liquidity')}: ${formatUsd(t.liquidity)} | ${tr('volume_24h')}: ${formatUsd(t.volume)}`,
    `🩺 ${tr('security_score')}: ${t.score}/100`,
    `🛡️ ${tr('s_contract')}: ${risk}`,
    '', location.href
  ].join('\n');
  copyText(text, 'copied');
}

const RECENT_KEY = 'flickRecent';

function getRecent() {
  const v = safeStorage(() => JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'));
  return Array.isArray(v) ? v.filter(r => r && typeof r.ca === 'string' && typeof r.symbol === 'string').slice(0, 6) : [];
}

function addRecent(t) {
  const list = getRecent().filter(r => !(r.ca === t.ca && r.chainId === t.chainId));
  list.unshift({ ca: t.ca, chainId: t.chainId, symbol: t.symbol.slice(0, 12) });
  safeStorage(() => localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 6))));
  renderRecent();
}

function renderRecent() {
  const box = $('recentSearches');
  if (!box) return;
  const list = getRecent();
  box.classList.toggle('hidden', !list.length);
  if (!list.length) return box.replaceChildren();
  box.replaceChildren(el('span', 'text-slate-500', tr('recent_title')), ...list.map(r => {
    const b = el('button', 'px-2 py-0.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amberGlow transition-all', `$${r.symbol}`);
    b.type = 'button';
    b.title = `${chainName(r.chainId)} · ${r.ca}`;
    b.onclick = () => {
      $('landingCaInput').value = r.ca;
      runScanSequence(r.ca, { chain: r.chainId, onDone: ok => { if (ok) enterApp(); } });
    };
    return b;
  }));
}

function showToast(message) {
  let stack = $('toastStack');
  if (!stack) {
    stack = el('div', 'fixed bottom-6 right-6 left-6 sm:left-auto z-[60] flex flex-col items-end gap-2 pointer-events-none');
    stack.id = 'toastStack';
    stack.setAttribute('role', 'status');
    stack.setAttribute('aria-live', 'polite');
    document.body.appendChild(stack);
  }
  const toast = el('div', 'bg-[#10141e] text-white border border-amberCore/40 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-mono transition-opacity duration-300 max-w-sm', `⚡ ${message}`);
  stack.appendChild(toast);
  while (stack.children.length > 3) stack.firstChild.remove();
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// "/" focuses the search box of the visible screen
document.addEventListener('keydown', e => {
  if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
  const input = isDashboardVisible() ? $('dashboardCaInput') : $('landingCaInput');
  if (input) { e.preventDefault(); input.focus(); }
});

// ===================================================================
// 11. BACKGROUND CANVAS PARTICLES
// ===================================================================
const canvas = $('interactiveCanvas');
if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, particles = [];
  const mouse = { x: null, y: null, radius: 140 };

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // crisp on retina screens
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.5 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
    }
    update() {
      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 0 && distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 2;
          this.y -= (dy / distance) * force * 2;
        }
      }
      this.x += this.vx;
      this.y += this.vy;
      // Clamp + reflect so particles can't get stuck flipping outside the edges
      if (this.x < 0) { this.x = 0; this.vx = Math.abs(this.vx); }
      else if (this.x > width) { this.x = width; this.vx = -Math.abs(this.vx); }
      if (this.y < 0) { this.y = 0; this.vy = Math.abs(this.vy); }
      else if (this.y > height) { this.y = height; this.vy = -Math.abs(this.vy); }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    const count = Math.min(160, Math.floor((width * height) / 18000));
    particles = Array.from({ length: count }, () => new Particle());
  }

  resizeCanvas();
  initParticles();
  let rs;
  window.addEventListener('resize', () => {
    resizeCanvas();
    clearTimeout(rs);
    rs = setTimeout(initParticles, 200);
  });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  document.addEventListener('mouseleave', () => { mouse.x = mouse.y = null; });

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// ===================================================================
// 12. INIT (saved language, ?ca=&chain= deep link)
// ===================================================================
(function init() {
  const saved = safeStorage(() => localStorage.getItem('flickLang'));
  const nav = (navigator.language || '').toLowerCase();
  changeLanguage(saved || (nav.startsWith('zh') ? 'zh' : nav.startsWith('es') ? 'es' : 'en'));
  const params = new URLSearchParams(location.search);
  const ca = params.get('ca');
  if (ca) {
    $('landingCaInput').value = ca;
    runScanSequence(ca, { chain: params.get('chain') || '', onDone: ok => { if (ok) enterApp(); } });
  }
})();
