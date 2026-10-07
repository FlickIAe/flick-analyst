# Flick Super Intelligence ⚡

**Flick Super Intelligence** is a real-time Web3 token analytics terminal for crypto traders. Paste a contract address or ticker to get live DEX market data, a market-health score, contract security checks and holder distribution — all from public APIs, with no fabricated data.

---

## ✨ Key Features

- 🔍 **Token Search:** Paste a contract address (EVM or Solana) or a ticker. The app picks the token's most liquid pools and ignores pairs where it is only the quote token.
- 🩺 **Market Health Score (0–100):** Liquidity, volume/liquidity ratio, pair age, buy/sell balance and socials, computed from live DexScreener data.
- 🛡️ **Contract Checks (GoPlus):** Buy/sell tax, honeypot / sell restrictions, mint authority, freeze/blacklist, proxy/mutable code and LP lock. Shows "Not verified" when a check is unavailable.
- 👤 **Creator & owner (GoPlus):** Who created the token and how much of the supply they still hold, whether the same creator made honeypots before (EVM) or is flagged as malicious (Solana), contract owner (renounced or not), verified source code, Solana mint authority and mutable metadata. All of it feeds the risk checklist and the chat ("who is the dev?"). On Solana, where GoPlus returns neither holders nor the creator for most tokens, both are read from the chain through Solana RPC (top 20 accounts, the first transaction of the mint, or of its Metaplex metadata account for busy tokens, and the creator's current balance), via the same-origin `/api/solana` proxy with public fallbacks. For higher limits, set `SOLANA_RPC_URL` (e.g. a free Helius or QuickNode URL) in Cloudflare Pages → Settings → Variables.
- 📊 **Top Holders:** Top-10 supply concentration, holder count, approximate USD value and explorer links.
- 📈 **Live Charts & Pools:** Embedded DexScreener chart, clickable list of the token's pools and live price polling every 12 s.
- 🤖 **Smart Assistant (free, no AI service):** Ask in your own words ("is it safe?", "who holds the most?", "should I buy?") in English, Spanish or Chinese. A rule-based risk engine combines market and contract signals into a risk checklist with an overall LOW / MEDIUM / HIGH verdict, all computed in the browser.
- ⚖️ **Token comparator:** "Compare" tab puts the current token next to up to 2 more (paste a CA/ticker or pick from your watchlist and recent searches): price, liquidity, volume, age, health score, overall risk, taxes, honeypot, mint/freeze, LP locked, top-10 holders, creator holdings and holder count, with the best value of each row marked and a "lowest risk" summary. Same live data and risk engine as the dashboard.
- ⚡ **Momentum signal:** Card that reads whether the token is accelerating, gaining strength, neutral, losing steam or falling hard, from the last 6h of the active pool: price direction (5m / 1h / 6h), buys vs sells in the last hour against the 6h average, and whether volume is speeding up or fading. Also in the chat ("is it gaining momentum?") and the comparator.
- 🕓 **Risk history:** Flick saves a snapshot of each token's risk when you open it (then every 30 min while open) and every 30 min for watchlist tokens, and lists what changed: overall risk, contract checks, liquidity (with a sparkline colored by risk level), creator holdings, top 10 and holder count. Also in the chat ("what changed?"). Saved only in the browser.
- 🧮 **Price impact simulator:** Type an amount (or tap $100/$500/$1K/$5K) to see the price impact of your buy, how much the price moves, the tokens you get, what you'd get back selling right away (fees + GoPlus taxes) and the largest buy that moves the price under 1%. Constant-product estimate on the active pool.
- 🆕 **New launches, filtered:** Landing-page tab with tokens launched in the last 72h on DexScreener, run through the same risk engine (market + GoPlus). Being new alone doesn't count against a launch (they're all new); high-risk ones are hidden behind a "Show hidden" button with the reason (honeypot, extreme taxes, unlocked liquidity…), and each card shows its LOW/MEDIUM/HIGH verdict.
- 🔥 **Trending on the landing page:** DexScreener's most boosted tokens (boosts are paid promotions, and the page says so), enriched with real pair data, sorted by 24h volume and flagged for low liquidity or pairs under 24h old. Click a card to analyze it.
- 🛡️ **Risk alerts:** Watched tokens also alert when liquidity drains ≥30% from its peak, when ≥75% of the last hour's trades are sells, or when GoPlus contract checks get worse (checked every 30 min). Can be turned off.
- ⭐ **Watchlist & Price Alerts:** Follow up to 20 tokens with ☆ Watch. Prices refresh every minute while the page is open (even in a background tab), and a toast plus a browser notification fire when a token moves ±5/10/20/50% (configurable per token). Saved only in the browser (localStorage).
- 📨 **Telegram alerts (optional):** "Connect Telegram" in the Watchlist tab links the browser to a Telegram bot; a Cloudflare Worker (`worker/`) checks every 5 minutes and sends price and risk alerts even with Flick closed. Free tier; setup guide in [`worker/README.md`](worker/README.md).
- 📲 **Installable app (PWA):** "Install app" button on Android/desktop (instructions on iPhone), opens offline, and alert notifications go through the service worker so they also work on Android.
- 🔗 **Link previews:** Open Graph / Twitter card with a 1200×630 image, so shared links show a title, description and picture.
- 🌐 **Languages:** English, Español and 简体中文 (`EN`, `ES`, `ZH`), auto-detected from the browser.
- ⚡ **Extras:** Recent searches, shareable deep links (`?ca=…&chain=…`), copy-CA button, `/` keyboard shortcut to search.

> Not financial advice. Always verify on-chain before trading.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Tailwind CSS (CDN), vanilla JavaScript (ES2020+)
- **APIs:**
  - [DexScreener API](https://docs.dexscreener.com/) — market data and chart embeds
  - [GeckoTerminal API](https://www.geckoterminal.com/dex-api) — automatic backup for market data, trending pools, new pools and charts whenever DexScreener returns nothing (free, no key, ~30 requests/min, so the app caches and rate-limits its calls)
  - [GoPlus Security API](https://gopluslabs.io/) — contract security and holders
- **Deployment:** Cloudflare Pages, with a Pages Function (`functions/api/goplus.js`) that proxies GoPlus when the browser can't call it directly

---

## 📁 Project Structure

```
index.html              Page layout (landing + dashboard)
app.js                  App logic: i18n, search, scoring, GoPlus, reports, polling
functions/api/goplus.js Cloudflare Pages Function: same-origin GoPlus proxy
functions/api/solana.js Cloudflare Pages Function: Solana RPC proxy (read-only methods; optional SOLANA_RPC_URL)
flick-logo.webp         Optimized logo (flick-logo.png is the original source)
favicon.png             Browser tab icon
apple-touch-icon.png    Home-screen icon for iOS
manifest.webmanifest    Web app manifest (name, colors, icons)
sw.js                   Service worker: offline app shell, alert notifications
icon-*.png              App icons (192, 512 and maskable 512)
og-image.jpg            Link preview image (1200×630)
worker/                 Optional Telegram alerts worker (Cloudflare Workers + D1 + cron)
```

---

## 🚀 Quick Start

No build step or dependencies required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FlickIAe/flick-analyst.git
   cd flick-analyst
   ```
2. **Open it locally:** open `index.html` in the browser, or serve the folder:
   ```bash
   npx serve .
   ```
   The GoPlus proxy only runs on Cloudflare Pages (or locally with `npx wrangler pages dev .`).
3. **Deploy:** push to `main`; Cloudflare Pages publishes it automatically.
