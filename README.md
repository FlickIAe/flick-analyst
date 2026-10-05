# Flick Analyst ⚡

**Flick Analyst** is a real-time Web3 token analytics terminal for crypto traders. Paste a contract address or ticker to get live DEX market data, a market-health score, contract security checks and holder distribution — all from public APIs, with no fabricated data.

---

## ✨ Key Features

- 🔍 **Token Search:** Paste a contract address (EVM or Solana) or a ticker. The app picks the token's most liquid pools and ignores pairs where it is only the quote token.
- 🩺 **Market Health Score (0–100):** Liquidity, volume/liquidity ratio, pair age, buy/sell balance and socials, computed from live DexScreener data.
- 🛡️ **Contract Checks (GoPlus):** Buy/sell tax, honeypot / sell restrictions, mint authority, freeze/blacklist, proxy/mutable code and LP lock. Shows "Not verified" when a check is unavailable.
- 📊 **Top Holders:** Top-10 supply concentration, holder count, approximate USD value and explorer links.
- 📈 **Live Charts & Pools:** Embedded DexScreener chart, clickable list of the token's pools and live price polling every 12 s.
- 🤖 **Smart Assistant (free, no AI service):** Ask in your own words ("is it safe?", "who holds the most?", "should I buy?") in English, Spanish or Chinese. A rule-based risk engine combines market and contract signals into a risk checklist with an overall LOW / MEDIUM / HIGH verdict, all computed in the browser.
- ⭐ **Watchlist & Price Alerts:** Follow up to 20 tokens with ☆ Watch. Prices refresh every minute while the page is open (even in a background tab), and a toast plus a browser notification fire when a token moves ±5/10/20/50% (configurable per token). Saved only in the browser (localStorage).
- 🌐 **Languages:** English, Español and 简体中文 (`EN`, `ES`, `ZH`), auto-detected from the browser.
- ⚡ **Extras:** Recent searches, shareable deep links (`?ca=…&chain=…`), copy-CA button, `/` keyboard shortcut to search.

> Not financial advice. Always verify on-chain before trading.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Tailwind CSS (CDN), vanilla JavaScript (ES2020+)
- **APIs:**
  - [DexScreener API](https://docs.dexscreener.com/) — market data and chart embeds
  - [GoPlus Security API](https://gopluslabs.io/) — contract security and holders
- **Deployment:** Cloudflare Pages, with a Pages Function (`functions/api/goplus.js`) that proxies GoPlus when the browser can't call it directly

---

## 📁 Project Structure

```
index.html              Page layout (landing + dashboard)
app.js                  App logic: i18n, search, scoring, GoPlus, reports, polling
functions/api/goplus.js Cloudflare Pages Function: same-origin GoPlus proxy
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
