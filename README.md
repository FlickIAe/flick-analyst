# Flick Analyst ⚡

**Flick Analyst** is a real-time Web3 token analytics terminal for crypto traders. Paste a contract address or ticker to get live DEX market data, a market-health score, contract security checks and holder distribution — all from public APIs, with no fabricated data.

---

## ✨ Key Features

- 🔍 **Token Search:** Paste a contract address (EVM or Solana) or a ticker. The app picks the token's most liquid pools and ignores pairs where it is only the quote token.
- 🩺 **Market Health Score (0–100):** Liquidity, volume/liquidity ratio, pair age, buy/sell balance and socials, computed from live DexScreener data.
- 🛡️ **Contract Checks (GoPlus):** Buy/sell tax, honeypot / sell restrictions, mint authority, freeze/blacklist, proxy/mutable code and LP lock. Shows "Not verified" when a check is unavailable.
- 📊 **Top Holders:** Top-10 supply concentration, holder count, approximate USD value and explorer links.
- 📈 **Live Charts & Pools:** Embedded DexScreener chart, clickable list of the token's pools and live price polling every 12 s.
- 🤖 **AI Assistant (Claude):** Ask anything about the loaded token; Claude answers in the chat using the token's live DexScreener and GoPlus data. The quick-report buttons still give instant, free reports, and the chat falls back to them when the AI isn't available.
- 🌐 **Languages:** English, Español and 简体中文 (`EN`, `ES`, `ZH`), auto-detected from the browser.
- ⚡ **Extras:** Recent searches, shareable deep links (`?ca=…&chain=…`), copy-CA button, `/` keyboard shortcut to search.

> Not financial advice. Always verify on-chain before trading.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Tailwind CSS (CDN), vanilla JavaScript (ES2020+)
- **APIs:**
  - [DexScreener API](https://docs.dexscreener.com/) — market data and chart embeds
  - [GoPlus Security API](https://gopluslabs.io/) — contract security and holders
  - [Claude API](https://docs.claude.com/) — AI assistant (via the official `@anthropic-ai/sdk`)
- **Deployment:** Cloudflare Pages + Pages Functions:
  - `functions/api/goplus.js` proxies GoPlus when the browser can't call it directly
  - `functions/api/chat.js` calls Claude server-side, so the API key never reaches the browser

---

## 📁 Project Structure

```
index.html              Page layout (landing + dashboard)
app.js                  App logic: i18n, search, scoring, GoPlus, reports, polling
functions/api/goplus.js Cloudflare Pages Function: same-origin GoPlus proxy
functions/api/chat.js   Cloudflare Pages Function: AI assistant (Claude, streaming)
package.json            Dependency for the functions (@anthropic-ai/sdk)
flick-logo.webp         Optimized logo (flick-logo.png is the original source)
favicon.png             Browser tab icon
apple-touch-icon.png    Home-screen icon for iOS
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

---

## 🤖 AI Assistant Setup

1. Create an API key at [console.anthropic.com](https://console.anthropic.com/) and set a monthly spend limit there.
2. In Cloudflare: **Workers & Pages → your project → Settings → Variables and Secrets**, add `ANTHROPIC_API_KEY` as a **Secret** (Production).
3. Optional: add `ANTHROPIC_MODEL` to use a different model (default: `claude-opus-5-5`).
4. Redeploy (push to `main` or **Retry deployment**).

Without the key, the chat keeps working with the instant reports. For local testing, put the key in a `.dev.vars` file (`ANTHROPIC_API_KEY=...`, ignored by git) and run `npx wrangler pages dev .`.
