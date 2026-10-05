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
    badge_landing: "LIVE DEX DATA & CONTRACT RISK SIGNALS",
    hero_title: 'Navigate Web3 Markets <br><span class="bg-gradient-to-r from-amberCore via-amberGlow to-white bg-clip-text text-transparent">Never Exit Liquidity</span>',
    hero_desc: "Real-time DEX charts, market-health scoring, contract checks and holder distribution for traders.",
    ca_placeholder: "Contract address or ticker…",
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
    tab_audit: "Audit",
    tab_ai: "Reports",
    tab_holders: "Holders",
    swap_access: "Quick DEX Swap Access",
    swap_desc: "Direct redirection with the contract address pre-loaded.",
    ai_placeholder: "Ask about safety, holders, liquidity or trend...",
    send: "Send",
    back_landing: "Cover",
    back_title: "Back to cover",
    copy_ca: "Copy contract address",
    footer_copyright: "© 2026 Flick Super Intelligence. Web3 Intelligence Platform. Not financial advice.",
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
    share_btn: "Share Analysis",

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
    holders_loading: "Loading holders…",
    holders_usd_note: "USD value ≈ % supply × FDV",
    tag_contract: "Contract",
    tag_locked: "🔒 Locked",
    th_rank: "#",
    th_address: "Wallet Address",
    th_supply: "% Supply",
    th_val: "≈ USD",
    th_tag: "Tag",

    // Chat
    chat_intro: "Ask about this token in your own words (e.g. \"is it safe?\", \"who holds the most?\", \"should I buy?\") or use the buttons above. Answers are built instantly from live data.",
    chat_hint: "Ask in your own words, e.g. \"is it safe?\", \"who holds the most?\", \"should I buy?\"",
    chip_checklist: "Risk Checklist",
    chip_safety: "Safety Check",
    chip_holders: "Holders Risk",
    chip_liquidity: "Liquidity Depth",
    chip_price: "Technical Trend",
    tab_watch: "Watchlist",
    watch: "Watch",
    watching: "Watching",
    watch_title: "Add to or remove from your watchlist",
    watch_added: "{s} added to your watchlist",
    watch_removed: "{s} removed from your watchlist",
    watch_full: "Your watchlist is full (max {n} tokens)",
    watch_empty: "Your watchlist is empty. Load a token and tap ☆ Watch next to its name.",
    watch_note: "Prices refresh every minute while Flick is open, even in a background tab. Your list is saved only in this browser.",
    w_since: "Since added",
    w_alert: "Alert",
    w_off: "Off",
    w_remove: "Remove",
    w_open: "Open this token",
    notify_enable: "Enable notifications",
    notify_on: "Notifications on",
    notify_blocked: "Notifications are blocked in your browser settings. Alerts will show inside the page.",
    notify_unsupported: "This browser doesn't support notifications. Alerts will show inside the page.",
    alert_up: "📈 {s} is up {pct} → {price}",
    alert_down: "📉 {s} is down {pct} → {price}",
    trending_title: "Trending on DexScreener",
    trending_note: "Most boosted tokens on DexScreener (boosts are paid promotions), sorted by real 24h volume. Not a recommendation: open one and check its risk checklist before trading.",
    trending_loading: "Loading trending tokens…",
    trending_error: "Couldn't load trending tokens.",
    trending_retry: "Retry",
    trending_refresh: "Refresh",
    t_vol: "Vol 24h",
    t_liq: "Liq",
    t_new: "⚠️ <24h old",
    t_lowliq: "⚠️ Low liquidity",
    t_open: "Analyze this token",
    install_app: "Install app",
    installed: "Flick was installed on your device!",
    ios_install: "On iPhone/iPad: tap Share ⬆️ and then “Add to Home Screen”.",
    risk_label: "Risk",
    rv_low: "LOW",
    rv_medium: "MEDIUM",
    rv_high: "HIGH",
    sim_title: "Price impact simulator",
    sim_desc: "How much the price moves if you buy now.",
    sim_impact: "Price impact",
    sim_move: "Price after your buy",
    sim_receive: "You receive ≈",
    sim_roundtrip: "If you sell right away",
    sim_safe: "Up to {amt} moves the price less than 1%.",
    sim_na: "Load a token with liquidity to simulate a buy.",
    sim_note: "Estimate for a standard pool (x·y=k) using the active pool's liquidity, a 0.3% DEX fee and GoPlus taxes. Concentrated-liquidity pools (Uniswap v3, Raydium CLMM, Meteora) can differ.",
    ra_toggle: "Risk alerts: liquidity drain, heavy selling and worse contract checks",
    ra_liq: "⚠️ {s}: liquidity fell {pct} to {liq}. Possible rug pull.",
    ra_sells: "⚠️ {s}: {pct}% of the last hour's trades are sells.",
    ra_contract: "⛔ {s}: contract checks now show {level}.",
    feed_trending: "Trending",
    feed_launches: "New · filtered",
    launch_loading: "Analyzing new launches…",
    launch_empty: "No new launch passed the filter right now. Try again in a few minutes.",
    launch_error: "Couldn't load new launches.",
    launch_note: "Tokens launched in the last 72h on DexScreener, checked automatically (liquidity, age, activity and GoPlus contract checks). High-risk ones are hidden. Passing the filter doesn't make a token safe: new launches are always risky.",
    t_unverified: "⚠️ Contract not verified",
    tg_title: "Telegram alerts",
    tg_desc: "Get these alerts on Telegram, even with Flick closed.",
    tg_connect: "Connect Telegram",
    tg_open: "Open Telegram",
    tg_cancel: "Cancel",
    tg_pending: "Waiting for you to tap “Start” in the Telegram bot…",
    tg_connected_title: "Telegram connected",
    tg_connected_desc: "You'll get alerts for these tokens on Telegram even with Flick closed (checked every 5 minutes). Commands in the bot: /list · /stop",
    tg_disconnect: "Disconnect",
    tg_privacy: "To alert you with Flick closed, your watched tokens (addresses and alert settings only, no personal data) are stored on Flick's server. Disconnect anytime to delete them.",
    tg_connected_toast: "Telegram connected! You'll get alerts there too.",
    tg_error: "Couldn't reach the alerts server. Try again.",
    sec_creator: "Creator & owner · GoPlus",
    cr_na: "Creator data isn't available for this token.",
    cr_creator: "Creator",
    cr_holds: "holds {pct}",
    cr_history: "Track record",
    cr_past_hp: "Made honeypots before",
    cr_clean: "No known honeypots",
    cr_wallet: "Creator wallet",
    cr_malicious: "Flagged as malicious",
    cr_no_reports: "No reports",
    cr_owner: "Contract owner",
    cr_renounced: "Renounced",
    cr_code: "Contract code",
    cr_verified: "Verified",
    cr_unverified: "Not verified",
    cr_mint_auth: "Mint authority",
    cr_metadata: "Name / image",
    cr_changeable: "Can be changed",
    cr_locked: "Locked",
    cr_sold_all: "sold everything",
    holders_sol_src: "Top 20 accounts · Solana RPC",
    cr_not_found: "Couldn't identify (very active or old token)",
    cr_rpc_down: "Solana network busy, try again in a minute"
  },
  zh: {
    mainnet_active: "实时 DEX 数据",
    open_app: "进入应用 →",
    open_terminal: "打开终端 →",
    badge_landing: "实时 DEX 数据与合约风险信号",
    hero_title: '洞察 Web3 市场 <br><span class="bg-gradient-to-r from-amberCore via-amberGlow to-white bg-clip-text text-transparent">避开所有链上陷阱。</span>',
    hero_desc: "实时 DEX 图表、市场健康评分、合约检测与持币分布，专为交易者打造。",
    ca_placeholder: "合约地址或代币符号…",
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
    tab_audit: "审计",
    tab_ai: "报告",
    tab_holders: "持币",
    swap_access: "DEX 快速兑换",
    swap_desc: "自动预载合约地址的直接跳转链接。",
    ai_placeholder: "询问安全、持币、流动性或走势...",
    send: "发送",
    back_landing: "返回首页",
    back_title: "返回首页",
    copy_ca: "复制合约地址",
    footer_copyright: "© 2026 Flick Super Intelligence. Web3 链上情报终端。不构成投资建议。",
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
    share_btn: "分享分析",

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
    holders_loading: "正在加载持币数据…",
    holders_usd_note: "USD 价值 ≈ 持仓占比 × FDV",
    tag_contract: "合约",
    tag_locked: "🔒 锁定",
    th_rank: "#",
    th_address: "钱包地址",
    th_supply: "持仓占比",
    th_val: "≈ USD",
    th_tag: "标签",

    chat_intro: "用自己的话询问该代币（例如“安全吗？”“谁持有最多？”“值得买吗？”），或使用上方按钮。答案基于实时数据即时生成。",
    chat_hint: "用自己的话提问，例如“安全吗？”“谁持有最多？”“值得买吗？”",
    chip_checklist: "风险清单",
    chip_safety: "安全检测",
    chip_holders: "持仓风险",
    chip_liquidity: "流动性深度",
    chip_price: "技术走势",
    tab_watch: "自选",
    watch: "自选",
    watching: "已自选",
    watch_title: "加入或移出自选",
    watch_added: "{s} 已加入自选",
    watch_removed: "{s} 已移出自选",
    watch_full: "自选已满（最多 {n} 个）",
    watch_empty: "自选列表为空。加载一个代币，然后点击名称旁的 ☆ 自选。",
    watch_note: "Flick 打开期间（包括后台标签页）每分钟刷新价格。列表仅保存在此浏览器中。",
    w_since: "加入以来",
    w_alert: "提醒",
    w_off: "关闭",
    w_remove: "移除",
    w_open: "打开该代币",
    notify_enable: "开启通知",
    notify_on: "通知已开启",
    notify_blocked: "浏览器设置已阻止通知。提醒将显示在页面内。",
    notify_unsupported: "此浏览器不支持通知。提醒将显示在页面内。",
    alert_up: "📈 {s} 上涨 {pct} → {price}",
    alert_down: "📉 {s} 下跌 {pct} → {price}",
    trending_title: "DexScreener 热门",
    trending_note: "DexScreener 上被推广（Boost，即付费推广）最多的代币，按真实 24 小时交易量排序。不构成推荐：交易前请打开代币查看风险清单。",
    trending_loading: "正在加载热门代币…",
    trending_error: "无法加载热门代币。",
    trending_retry: "重试",
    trending_refresh: "刷新",
    t_vol: "24h 量",
    t_liq: "流动性",
    t_new: "⚠️ 不到24小时",
    t_lowliq: "⚠️ 流动性低",
    t_open: "分析该代币",
    install_app: "安装应用",
    installed: "Flick 已安装到你的设备！",
    ios_install: "在 iPhone/iPad 上：点击分享 ⬆️，然后选择“添加到主屏幕”。",
    risk_label: "风险",
    rv_low: "低",
    rv_medium: "中",
    rv_high: "高",
    sim_title: "价格冲击模拟器",
    sim_desc: "现在买入会让价格变动多少。",
    sim_impact: "价格冲击",
    sim_move: "买入后价格",
    sim_receive: "你将获得 ≈",
    sim_roundtrip: "如果立刻卖出",
    sim_safe: "不超过 {amt} 的买入对价格的影响小于 1%。",
    sim_na: "加载有流动性的代币后即可模拟买入。",
    sim_note: "基于标准池（x·y=k）、当前池子流动性、0.3% DEX 手续费和 GoPlus 税率的估算。集中流动性池（Uniswap v3、Raydium CLMM、Meteora）可能不同。",
    ra_toggle: "风险提醒：流动性流失、大量抛售、合约检测变差",
    ra_liq: "⚠️ {s}：流动性下降 {pct}，降至 {liq}。可能跑路。",
    ra_sells: "⚠️ {s}：过去一小时 {pct}% 的交易是卖出。",
    ra_contract: "⛔ {s}：合约检测现在显示{level}。",
    feed_trending: "热门",
    feed_launches: "新币 · 已过滤",
    launch_loading: "正在分析新上线代币…",
    launch_empty: "目前没有新代币通过过滤。请几分钟后再试。",
    launch_error: "无法加载新上线代币。",
    launch_note: "DexScreener 上近 72 小时上线的代币，自动检测（流动性、年龄、活跃度和 GoPlus 合约检测），高风险的已隐藏。通过过滤不代表安全：新币始终有风险。",
    t_unverified: "⚠️ 合约未验证",
    tg_title: "Telegram 提醒",
    tg_desc: "即使关闭 Flick，也能在 Telegram 上收到这些提醒。",
    tg_connect: "连接 Telegram",
    tg_open: "打开 Telegram",
    tg_cancel: "取消",
    tg_pending: "请在 Telegram 机器人中点击“开始”…",
    tg_connected_title: "Telegram 已连接",
    tg_connected_desc: "即使关闭 Flick，你也会在 Telegram 上收到这些代币的提醒（每 5 分钟检查一次）。机器人命令：/list · /stop",
    tg_disconnect: "断开",
    tg_privacy: "为了在 Flick 关闭时提醒你，你关注的代币（仅地址和提醒设置，无个人数据）会保存在 Flick 服务器上。随时断开即可删除。",
    tg_connected_toast: "Telegram 已连接！你也会在那里收到提醒。",
    tg_error: "无法连接提醒服务器，请重试。",
    sec_creator: "创建者与所有者 · GoPlus",
    cr_na: "暂无该代币的创建者数据。",
    cr_creator: "创建者",
    cr_holds: "持有 {pct}",
    cr_history: "历史记录",
    cr_past_hp: "曾发行蜜罐",
    cr_clean: "无已知蜜罐",
    cr_wallet: "创建者钱包",
    cr_malicious: "被标记为恶意",
    cr_no_reports: "无报告",
    cr_owner: "合约所有者",
    cr_renounced: "已放弃",
    cr_code: "合约代码",
    cr_verified: "已验证",
    cr_unverified: "未验证",
    cr_mint_auth: "增发权限",
    cr_metadata: "名称 / 图片",
    cr_changeable: "可更改",
    cr_locked: "已锁定",
    cr_sold_all: "已全部卖出",
    holders_sol_src: "前 20 个账户 · Solana RPC",
    cr_not_found: "无法识别（代币过于活跃或较老）",
    cr_rpc_down: "Solana 网络繁忙，请稍后再试"
  },
  es: {
    mainnet_active: "Datos DEX en vivo",
    open_app: "Abrir app →",
    open_terminal: "Abrir terminal →",
    badge_landing: "DATOS DEX EN VIVO Y SEÑALES DE RIESGO DE CONTRATOS",
    hero_title: 'Navegá los mercados Web3 <br><span class="bg-gradient-to-r from-amberCore via-amberGlow to-white bg-clip-text text-transparent">Nunca seas la liquidez de salida</span>',
    hero_desc: "Gráficos DEX en tiempo real, puntuación de salud del mercado, chequeos de contrato y distribución de holders para traders.",
    ca_placeholder: "Dirección del contrato o ticker…",
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
    tab_audit: "Auditoría",
    tab_ai: "Reportes",
    tab_holders: "Holders",
    swap_access: "Acceso rápido a swap",
    swap_desc: "Redirección directa con la dirección del contrato precargada.",
    ai_placeholder: "Preguntá sobre seguridad, holders, liquidez o tendencia...",
    send: "Enviar",
    back_landing: "Portada",
    back_title: "Volver a la portada",
    copy_ca: "Copiar dirección del contrato",
    footer_copyright: "© 2026 Flick Super Intelligence. Plataforma de inteligencia Web3. No es asesoramiento financiero.",
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
    share_btn: "Compartir análisis",

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
    holders_loading: "Cargando holders…",
    holders_usd_note: "Valor USD ≈ % del supply × FDV",
    tag_contract: "Contrato",
    tag_locked: "🔒 Bloqueado",
    th_rank: "#",
    th_address: "Billetera",
    th_supply: "% Supply",
    th_val: "≈ USD",
    th_tag: "Etiqueta",

    chat_intro: "Preguntá sobre este token con tus palabras (por ejemplo \"¿es seguro?\", \"¿quién tiene más tokens?\", \"¿me conviene comprar?\") o usá los botones de arriba. Las respuestas se arman al instante con datos en vivo.",
    chat_hint: "Preguntá con tus palabras, por ejemplo \"¿es seguro?\", \"¿quién tiene más tokens?\", \"¿me conviene comprar?\"",
    chip_checklist: "Checklist de riesgo",
    chip_safety: "Seguridad",
    chip_holders: "Riesgo de holders",
    chip_liquidity: "Profundidad de liquidez",
    chip_price: "Tendencia técnica",
    tab_watch: "Watchlist",
    watch: "Seguir",
    watching: "Siguiendo",
    watch_title: "Agregar o quitar de tu watchlist",
    watch_added: "{s} se agregó a tu watchlist",
    watch_removed: "Quitaste {s} de tu watchlist",
    watch_full: "Tu watchlist está llena (máximo {n} tokens)",
    watch_empty: "Tu watchlist está vacía. Cargá un token y tocá ☆ Seguir al lado de su nombre.",
    watch_note: "Los precios se actualizan cada minuto mientras Flick esté abierto, aunque sea en otra pestaña. La lista se guarda solo en este navegador.",
    w_since: "Desde que lo agregaste",
    w_alert: "Alerta",
    w_off: "Apagada",
    w_remove: "Quitar",
    w_open: "Abrir este token",
    notify_enable: "Activar notificaciones",
    notify_on: "Notificaciones activadas",
    notify_blocked: "Las notificaciones están bloqueadas en tu navegador. Las alertas se van a mostrar dentro de la página.",
    notify_unsupported: "Este navegador no soporta notificaciones. Las alertas se van a mostrar dentro de la página.",
    alert_up: "📈 {s} subió {pct} → {price}",
    alert_down: "📉 {s} bajó {pct} → {price}",
    trending_title: "En tendencia en DexScreener",
    trending_note: "Los tokens más boosteados en DexScreener (los boosts son promociones pagas), ordenados por volumen real de 24h. No es una recomendación: abrí uno y revisá su checklist de riesgo antes de operar.",
    trending_loading: "Cargando tokens en tendencia…",
    trending_error: "No se pudieron cargar los tokens en tendencia.",
    trending_retry: "Reintentar",
    trending_refresh: "Actualizar",
    t_vol: "Vol 24h",
    t_liq: "Liq",
    t_new: "⚠️ <24h de vida",
    t_lowliq: "⚠️ Poca liquidez",
    t_open: "Analizar este token",
    install_app: "Instalar app",
    installed: "¡Flick se instaló en tu dispositivo!",
    ios_install: "En iPhone/iPad: tocá Compartir ⬆️ y después “Agregar a inicio”.",
    risk_label: "Riesgo",
    rv_low: "BAJO",
    rv_medium: "MEDIO",
    rv_high: "ALTO",
    sim_title: "Simulador de impacto",
    sim_desc: "Cuánto se mueve el precio si comprás ahora.",
    sim_impact: "Impacto en tu compra",
    sim_move: "El precio sube",
    sim_receive: "Recibís ≈",
    sim_roundtrip: "Si vendés enseguida",
    sim_safe: "Hasta {amt} el precio se mueve menos de 1%.",
    sim_na: "Cargá un token con liquidez para simular una compra.",
    sim_note: "Estimación para un pool estándar (x·y=k) con la liquidez del pool activo, comisión de 0,3% y los impuestos de GoPlus. Los pools de liquidez concentrada (Uniswap v3, Raydium CLMM, Meteora) pueden diferir.",
    ra_toggle: "Alertas de riesgo: caída de liquidez, ventas masivas y contrato que empeora",
    ra_liq: "⚠️ {s}: la liquidez cayó {pct} a {liq}. Posible rug pull.",
    ra_sells: "⚠️ {s}: el {pct}% de las operaciones de la última hora son ventas.",
    ra_contract: "⛔ {s}: los chequeos del contrato ahora muestran {level}.",
    feed_trending: "Tendencia",
    feed_launches: "Nuevos filtrados",
    launch_loading: "Analizando lanzamientos nuevos…",
    launch_empty: "Ningún lanzamiento nuevo pasó el filtro por ahora. Probá de nuevo en unos minutos.",
    launch_error: "No se pudieron cargar los lanzamientos nuevos.",
    launch_note: "Tokens lanzados en las últimas 72h en DexScreener, revisados automáticamente (liquidez, antigüedad, actividad y chequeos de contrato de GoPlus). Los de riesgo alto se ocultan. Pasar el filtro no hace seguro a un token: los lanzamientos nuevos siempre son riesgosos.",
    t_unverified: "⚠️ Contrato sin verificar",
    tg_title: "Alertas por Telegram",
    tg_desc: "Recibí estas alertas en Telegram, aunque tengas Flick cerrado.",
    tg_connect: "Conectar Telegram",
    tg_open: "Abrir Telegram",
    tg_cancel: "Cancelar",
    tg_pending: "Esperando que toques “Iniciar” en el bot de Telegram…",
    tg_connected_title: "Telegram conectado",
    tg_connected_desc: "Vas a recibir las alertas de estos tokens en Telegram aunque cierres Flick (se revisan cada 5 minutos). Comandos del bot: /list · /stop",
    tg_disconnect: "Desconectar",
    tg_privacy: "Para avisarte con Flick cerrado, tus tokens seguidos (solo direcciones y configuración de alertas, sin datos personales) se guardan en el servidor de Flick. Desconectate cuando quieras para borrarlos.",
    tg_connected_toast: "¡Telegram conectado! También vas a recibir las alertas ahí.",
    tg_error: "No se pudo conectar con el servidor de alertas. Probá de nuevo.",
    sec_creator: "Creador y dueño · GoPlus",
    cr_na: "No hay datos del creador para este token.",
    cr_creator: "Creador",
    cr_holds: "tiene {pct}",
    cr_history: "Historial",
    cr_past_hp: "Ya lanzó honeypots",
    cr_clean: "Sin honeypots conocidos",
    cr_wallet: "Billetera del creador",
    cr_malicious: "Marcada como maliciosa",
    cr_no_reports: "Sin reportes",
    cr_owner: "Dueño del contrato",
    cr_renounced: "Renunciado",
    cr_code: "Código del contrato",
    cr_verified: "Verificado",
    cr_unverified: "Sin verificar",
    cr_mint_auth: "Autoridad de mint",
    cr_metadata: "Nombre / imagen",
    cr_changeable: "Se puede cambiar",
    cr_locked: "Bloqueado",
    cr_sold_all: "ya vendió todo",
    holders_sol_src: "Top 20 cuentas · Solana RPC",
    cr_not_found: "No se pudo identificar (token muy activo o antiguo)",
    cr_rpc_down: "Red de Solana ocupada, probá en un minuto"
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

// Line icons (Feather, MIT): trusted constant markup, rendered as inline SVG
const ICONS = {
  "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  "message": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  "alert": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "search": '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  "share": '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  "bell": '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  "repeat": '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  "radio": '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>',
  "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  "send": '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  "list": '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>'
};

function icon(name, cls = 'w-4 h-4') {
  const t = document.createElement('template');
  t.innerHTML = `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  return t.content.firstChild;
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
  renderWatchButton();
  renderWatchlist();
  renderTrending();
  renderLaunches();
  renderFeedTabs();
  renderSimulator();
  renderTelegramCard();
  if (tgLinked) scheduleTgSync();
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
  if (t.chainId === 'solana') return [['Raydium', `https://raydium.io/swap/?inputMint=sol&outputMint=${ca}`], ['Jupiter', `https://jup.ag/swap/SOL-${ca}`]];
  if (UNI_CHAIN[t.chainId]) return [['Uniswap', `https://app.uniswap.org/swap?chain=${UNI_CHAIN[t.chainId]}&outputCurrency=${ca}`]];
  if (t.chainId === 'bsc') return [['PancakeSwap', `https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${ca}`]];
  return t.pairUrl ? [['DexScreener', t.pairUrl]] : [];
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
    if (l) { a.replaceChildren(icon('repeat', 'w-3.5 h-3.5'), l[0]); a.href = l[1]; }
  });
  const vb = $('verifyBtn');
  const vl = verifyLink(t);
  vb.classList.toggle('hidden', !vl);
  if (vl) vb.href = vl;

  renderHoldersTable();
  renderWatchButton();
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
  if (isSol && security.key === key && security.status === 'ok') enrichSolana(key, ca);
}

// ===================================================================
// 5b. SOLANA ON-CHAIN ENRICHMENT (public RPC, free)
// GoPlus doesn't return holders or the creator for most Solana tokens
// (e.g. pump.fun launches), so they are read straight from the chain:
//   top holders  → getTokenLargestAccounts + owners of those token accounts
//   creator      → fee payer of the mint's first transaction
//   creator now  → the creator's current balance of the token
// ===================================================================
// Tried in order; the first one that answers is remembered for the session.
// "/api/solana" is our own Pages Function (server-side, avoids RPCs that block web pages).
const SOL_RPCS = [
  ...(location.protocol.startsWith('http') ? ['/api/solana'] : []),
  'https://solana-rpc.publicnode.com',
  'https://api.mainnet-beta.solana.com'
];
const SOL_SIG_PAGES = 3; // up to 3,000 signatures back to find the creation transaction
const RPC_RETRY_CODES = [-32005, -32429, -32000, 429, 403];
let solRpcIndex = 0;

async function solRpcAt(url, method, params, timeout) {
  const c = new AbortController();
  const timer = setTimeout(() => c.abort(), timeout);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
      signal: c.signal
    });
    const d = await res.json().catch(() => null);
    if (!res.ok || !d) return { retry: true, error: `HTTP ${res.status}` };
    if (d.error) return { retry: RPC_RETRY_CODES.includes(d.error.code), error: d.error.message || 'RPC error' };
    return { result: d.result };
  } catch (err) {
    return { retry: true, error: err.message || 'network error' };
  } finally {
    clearTimeout(timer);
  }
}

async function solRpc(method, params, timeout = 12000) {
  let lastError = 'no RPC endpoint';
  for (let n = 0; n < SOL_RPCS.length; n++) {
    const i = (solRpcIndex + n) % SOL_RPCS.length;
    const r = await solRpcAt(SOL_RPCS[i], method, params, timeout);
    if (!('error' in r)) {
      solRpcIndex = i;
      return r.result;
    }
    lastError = `${SOL_RPCS[i]}: ${r.error}`;
    if (!r.retry) break; // a real error (bad params...), another endpoint won't help
  }
  const err = new Error(lastError);
  err.rpcDown = true;
  throw err;
}

async function solanaTopHolders(mint, supply) {
  const largest = (await solRpc('getTokenLargestAccounts', [mint]))?.value || [];
  if (!largest.length || !(supply > 0)) return [];
  const accounts = (await solRpc('getMultipleAccounts', [largest.map(a => a.address), { encoding: 'jsonParsed' }]))?.value || [];
  const byOwner = new Map();
  largest.forEach((a, i) => {
    const owner = accounts[i]?.data?.parsed?.info?.owner || a.address;
    const amount = Number(a.uiAmountString ?? a.uiAmount) || 0;
    byOwner.set(owner, (byOwner.get(owner) || 0) + amount);
  });
  return [...byOwner.entries()]
    .map(([address, amount]) => ({ address, pct: (amount / supply) * 100, tag: '', isContract: false, isLocked: false }))
    .filter(h => h.pct > 0)
    .sort((a, b) => b.pct - a.pct);
}

async function solanaCreatorWallet(mint) {
  let before;
  for (let page = 0; page < SOL_SIG_PAGES; page++) {
    const sigs = await solRpc('getSignaturesForAddress', [mint, before ? { limit: 1000, before } : { limit: 1000 }]);
    if (!Array.isArray(sigs) || !sigs.length) return null;
    if (sigs.length < 1000) {
      const tx = await solRpc('getTransaction', [sigs[sigs.length - 1].signature, { encoding: 'json', maxSupportedTransactionVersion: 0 }]);
      const keys = tx?.transaction?.message?.accountKeys;
      const payer = Array.isArray(keys) ? (typeof keys[0] === 'string' ? keys[0] : keys[0]?.pubkey) : null;
      return payer && SOL_RE.test(payer) ? payer : null;
    }
    before = sigs[sigs.length - 1].signature;
  }
  return null; // very active or old token: the creation is too far back
}

async function solanaWalletBalance(owner, mint) {
  const res = await solRpc('getTokenAccountsByOwner', [owner, { mint }, { encoding: 'jsonParsed' }]);
  return (res?.value || []).reduce((sum, a) => sum + (Number(a.account?.data?.parsed?.info?.tokenAmount?.uiAmountString) || 0), 0);
}

// Runs after GoPlus; fills holders/top 10 and the creator, then re-renders
async function enrichSolana(key, mint) {
  const data = security.data;
  if (!data?.isSol) return;
  data.creator.pending = true;
  renderAuditTab();
  renderHoldersTable();
  try {
    const supply = Number((await solRpc('getTokenSupply', [mint]))?.value?.uiAmountString) || 0;
    const [holders, creator] = await Promise.all([
      data.holders.length ? Promise.resolve(null) : solanaTopHolders(mint, supply).catch(err => { console.warn('Solana holders failed:', err); return null; }),
      data.creator.address ? Promise.resolve(data.creator.address) : solanaCreatorWallet(mint).catch(err => { console.warn('Solana creator lookup failed:', err); return null; })
    ]);
    if (security.key !== key) return; // the user opened another token meanwhile
    if (holders && holders.length) {
      data.holders = holders;
      data.top10 = holders.slice(0, 10).reduce((s, h) => s + h.pct, 0);
    }
    if (!creator && !data.creator.address) data.creator.notFound = true;
    if (creator) {
      data.creator.address = creator;
      if (data.creator.pct == null && supply > 0) {
        const bal = await solanaWalletBalance(creator, mint).catch(() => null);
        if (security.key !== key) return;
        if (bal != null) data.creator.pct = (bal / supply) * 100;
      }
    }
  } catch (err) {
    console.warn('Solana on-chain lookup failed:', err);
    if (err.rpcDown && !data.creator.address) data.creator.rpcDown = true;
  } finally {
    if (security.key === key) {
      data.creator.pending = false;
      renderAuditTab();
      renderHoldersTable();
    }
  }
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
  const holderPct = addr => {
    const h = addr && holders.find(x => sameAddress(x.address, addr));
    return h ? h.pct : null;
  };

  if (isSol) {
    const st = o => flag(o?.status);
    const hook = Array.isArray(r.transfer_hook) ? r.transfer_hook.length > 0 : null;
    const fee = r.transfer_fee && typeof r.transfer_fee === 'object' ? Object.keys(r.transfer_fee).length > 0 : null;
    return {
      isSol: true, honeypot: null, cannotSell: flag(r.non_transferable),
      buyTax: null, sellTax: null, transferFee: fee,
      mintable: st(r.mintable), freezable: st(r.freezable),
      mutable: anyTrue(st(r.balance_mutable_authority), st(r.closable), hook),
      lpLocked: null, holders, top10, holderCount,
      creator: solanaCreator(r, holderPct)
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
    lpLocked, holders, top10, holderCount,
    creator: evmCreator(r, pct, holderPct)
  };
}

// Who created the token, how much they still hold, and their track record (GoPlus)
const isNullOwner = a => !a || /^0x0{40}$|^0x0{36}dead$/i.test(a);

function evmCreator(r, pct, holderPct) {
  const address = /^0x[a-fA-F0-9]{40}$/.test(r.creator_address || '') ? r.creator_address : null;
  const ownerAddr = typeof r.owner_address === 'string' ? r.owner_address : null;
  return {
    address,
    pct: pct(r.creator_percent) ?? holderPct(address),
    pastHoneypots: flag(r.honeypot_with_same_creator),
    malicious: null,
    owner: ownerAddr == null ? null : {
      renounced: isNullOwner(ownerAddr),
      address: isNullOwner(ownerAddr) ? null : ownerAddr,
      pct: isNullOwner(ownerAddr) ? null : (pct(r.owner_percent) ?? holderPct(ownerAddr))
    },
    openSource: flag(r.is_open_source),
    mintAuthority: undefined, metadataMutable: null
  };
}

function solanaCreator(r, holderPct) {
  const creators = (Array.isArray(r.creators) ? r.creators : []).filter(c => c && typeof c.address === 'string');
  const address = creators[0]?.address || null;
  const auth = Array.isArray(r.mintable?.authority) ? r.mintable.authority.filter(a => a && a.address) : [];
  const malicious = anyTrue(...creators.map(c => flag(c.malicious_address)), ...auth.map(a => flag(a.malicious_address)));
  return {
    address,
    pct: holderPct(address),
    pastHoneypots: null,
    malicious,
    owner: null,
    openSource: null,
    mintAuthority: flag(r.mintable?.status) === false ? null : (auth[0]?.address || null),
    metadataMutable: flag(r.metadata_mutable?.status)
  };
}

function contractRisk(s) {
  if (!s) return null;
  const maxTax = Math.max(s.buyTax ?? 0, s.sellTax ?? 0);
  const c = s.creator || {};
  if (s.honeypot || s.cannotSell || maxTax >= 30 || c.pastHoneypots || c.malicious) return 'bad';
  if (maxTax > 10 || s.mintable || s.freezable || s.mutable || s.transferFee || c.openSource === false) return 'warn';
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
  if (security.status === 'loading' || (security.data?.isSol && security.data.creator?.pending && !security.data.holders.length)) return message(tr('holders_loading'));
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
    const meta = el('div', 'flex items-center justify-between gap-2 text-[11px] text-slate-400');
    meta.append(el('span', '', s.holderCount != null ? `${tr('holder_count')}: ${formatCompact(s.holderCount)}` : (s.isSol ? tr('holders_sol_src') : '')), el('span', '', tr('holders_usd_note')));
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

function setBanner(lv, iconName, title, sub, badge) {
  $('honeypotBanner').className = `p-3.5 rounded-xl border flex items-center justify-between gap-3 ${BANNER[lv]}`;
  const ic = $('honeypotIcon');
  ic.className = `shrink-0 ${TXT[lv]}`;
  ic.replaceChildren(icon(iconName, 'w-6 h-6'));
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
// Overall risk (LOW / MEDIUM / HIGH) shown next to the market health score
function renderRiskBadge() {
  const b = $('statRisk');
  if (!b) return;
  const base = 'inline-flex items-center gap-1.5 mt-0.5 px-2.5 py-1 rounded-lg text-xs font-extrabold tracking-wide border';
  if (!currentToken.loaded || security.status === 'loading' || security.status === 'idle') {
    b.className = `${base} text-slate-400 bg-white/5 border-white/10`;
    b.textContent = currentToken.loaded ? '…' : '—';
    return;
  }
  const v = riskVerdict(riskFindings());
  const style = {
    low: ['text-cyberGreen bg-cyberGreen/10 border-cyberGreen/30', 'check-circle'],
    medium: ['text-amberGlow bg-amberGlow/10 border-amberGlow/30', 'alert'],
    high: ['text-crimsonRisk bg-crimsonRisk/10 border-crimsonRisk/30', 'x-octagon']
  }[v];
  b.className = `${base} ${style[0]}`;
  b.replaceChildren(icon(style[1], 'w-3.5 h-3.5'), tr(`rv_${v}`));
}

// "Creator & owner" card in the Audit tab
function renderCreatorBox() {
  const box = $('creatorBox');
  if (!box) return;
  const t = currentToken;
  if (!t.loaded || security.status === 'loading' || security.status === 'idle') {
    box.replaceChildren(el('p', 'text-[11px] text-slate-400', t.loaded ? tr('checking') : '—'));
    return;
  }
  const c = security.status === 'ok' ? security.data.creator : null;
  if (!c) {
    box.replaceChildren(el('p', 'text-[11px] text-slate-400', tr('cr_na')));
    return;
  }
  const addrNode = addr => {
    const link = explorerLink(t.chainId, addr);
    const a = el(link ? 'a' : 'span', 'font-mono text-electricCyan hover:underline', shortAddr(addr));
    if (link) { a.href = link; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.title = addr; }
    return a;
  };
  const row = (label, lv, ...value) => {
    const r = el('div', 'flex items-start justify-between gap-3');
    const v = el('div', `text-right font-semibold ${TXT[lv]}`);
    v.append(...value);
    r.append(el('span', 'text-slate-400 shrink-0', label), v);
    return r;
  };
  const rows = [];
  if (!c.address && c.pending) {
    rows.push(row(tr('cr_creator'), 'na', tr('checking')));
  } else if (!c.address && c.notFound) {
    rows.push(row(tr('cr_creator'), 'na', tr('cr_not_found')));
  } else if (!c.address && c.rpcDown) {
    rows.push(row(tr('cr_creator'), 'na', tr('cr_rpc_down')));
  } else if (c.address) {
    const lv = c.pct == null ? 'na' : c.pct >= 20 ? 'bad' : c.pct >= 5 ? 'warn' : 'ok';
    rows.push(row(tr('cr_creator'), lv, addrNode(c.address), c.pct == null ? '' : ` · ${c.pct < 0.01 ? tr('cr_sold_all') : tr('cr_holds', { pct: pctTxt(c.pct) })}`));
  } else {
    rows.push(row(tr('cr_creator'), 'na', 'N/A'));
  }
  if (c.pastHoneypots != null) rows.push(row(tr('cr_history'), c.pastHoneypots ? 'bad' : 'ok', tr(c.pastHoneypots ? 'cr_past_hp' : 'cr_clean')));
  if (c.malicious != null) rows.push(row(tr('cr_wallet'), c.malicious ? 'bad' : 'ok', tr(c.malicious ? 'cr_malicious' : 'cr_no_reports')));
  if (c.owner) {
    if (c.owner.renounced) rows.push(row(tr('cr_owner'), 'ok', tr('cr_renounced')));
    else if (c.owner.address) rows.push(row(tr('cr_owner'), c.owner.pct >= 5 ? 'warn' : 'na', addrNode(c.owner.address), c.owner.pct == null ? '' : ` · ${tr('cr_holds', { pct: pctTxt(c.owner.pct) })}`));
  }
  if (c.openSource != null) rows.push(row(tr('cr_code'), c.openSource ? 'ok' : 'warn', tr(c.openSource ? 'cr_verified' : 'cr_unverified')));
  if (c.mintAuthority !== undefined && security.data.isSol) rows.push(row(tr('cr_mint_auth'), c.mintAuthority ? 'warn' : 'ok', c.mintAuthority ? addrNode(c.mintAuthority) : tr('cr_renounced')));
  if (c.metadataMutable != null) rows.push(row(tr('cr_metadata'), c.metadataMutable ? 'warn' : 'ok', tr(c.metadataMutable ? 'cr_changeable' : 'cr_locked')));
  box.replaceChildren(...rows);
}

function renderAuditTab() {
  const t = currentToken;
  if (!$('honeypotBanner')) return;

  renderRiskBadge();
  renderSimulator();
  renderCreatorBox();
  if (!t.loaded) {
    setBanner('na', 'clock', tr('waiting'), '', '—');
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
    setBanner('bad', 'x-octagon', tr('contract_bad_title'), tr('contract_bad_sub'), `${t.score}/100`);
  } else {
    const [title, sub, icon] = {
      ok: ['health_good_title', 'health_good_sub', 'check-circle'],
      warn: ['health_mid_title', 'health_mid_sub', 'alert'],
      bad: ['health_bad_title', 'health_bad_sub', 'alert']
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
  card.append(
    (() => { const h = el('p', 'flex items-center gap-1.5 font-bold text-electricCyan'); h.append(icon('message', 'w-4 h-4'), `$${t.symbol} · ${chainName(t.chainId)}`); return h; })(),
    stats,
    el('p', 'text-[11px] text-electricCyan/80', tr('chat_hint')),
    el('p', 'text-[11px] text-slate-400', L('Reports use public DEX data and GoPlus checks. Not financial advice.', '报告基于公开 DEX 数据与 GoPlus 检测，不构成投资建议。', 'Los reportes usan datos públicos de DEX y chequeos de GoPlus. No es asesoramiento financiero.'))
  );
  chatBox.replaceChildren(card);
}

// ===================================================================
// Smart quick reports: a rule-based assistant over the loaded data.
// Runs entirely in the browser (no AI service, no cost).
// ===================================================================
const SEV_ORDER = { bad: 0, warn: 1, info: 2, ok: 3 };
const SEV_ICON = { bad: '⛔', warn: '⚠️', info: 'ℹ️', ok: '✅' };
const pctTxt = v => `${+v.toFixed(1)}%`;

// Combines market (DexScreener) and contract (GoPlus) signals into findings, worst first
function riskFindings(t = currentToken, st = security) {
  const s = st.status === 'ok' ? st.data : null;
  const out = [];
  const add = (lv, topic, text) => out.push({ lv, topic, text });

  if (s) {
    if (anyTrue(s.honeypot, s.cannotSell)) {
      add('bad', 'contract', L('Honeypot or sell restriction detected: you might not be able to sell.', '检测到蜜罐或卖出限制：你可能无法卖出。', 'Se detectó honeypot o restricción de venta: podrías no poder vender.'));
    } else if (s.honeypot === false) {
      add('ok', 'contract', L('No honeypot detected: selling looks possible.', '未检测到蜜罐：看起来可以正常卖出。', 'No se detectó honeypot: vender parece posible.'));
    }
    if (s.buyTax != null || s.sellTax != null) {
      const max = Math.max(s.buyTax ?? 0, s.sellTax ?? 0);
      const both = `${s.buyTax == null ? '?' : pctTxt(s.buyTax)} / ${s.sellTax == null ? '?' : pctTxt(s.sellTax)}`;
      if (max >= 30) add('bad', 'tax', L(`Extreme taxes (buy/sell ${both}): most of each trade would be lost.`, `极高税率（买/卖 ${both}）：每笔交易的大部分会被扣除。`, `Impuestos extremos (compra/venta ${both}): perderías gran parte de cada operación.`));
      else if (max > 10) add('warn', 'tax', L(`High taxes (buy/sell ${both}).`, `税率偏高（买/卖 ${both}）。`, `Impuestos altos (compra/venta ${both}).`));
      else add('ok', 'tax', L(`Low taxes (buy/sell ${both}).`, `税率较低（买/卖 ${both}）。`, `Impuestos bajos (compra/venta ${both}).`));
    }
    if (s.transferFee) add('warn', 'tax', L('The token charges a fee on every transfer.', '该代币每次转账都会收取手续费。', 'El token cobra una comisión en cada transferencia.'));
    if (s.mintable) add('warn', 'permissions', L('Mint is enabled: new tokens can be created, diluting holders.', '增发权限开启：可以增发新币，稀释持有者。', 'El mint está activado: pueden crear tokens nuevos y diluir a los holders.'));
    else if (s.mintable === false) add('ok', 'permissions', L('Mint is disabled: the supply cannot grow.', '增发已关闭：供应量不会增加。', 'El mint está desactivado: el supply no puede crecer.'));
    if (s.freezable) add('warn', 'permissions', L('Freeze or blacklist is possible: wallets can be blocked.', '可冻结或拉黑：钱包可能被封禁。', 'Se puede congelar o usar lista negra: pueden bloquear billeteras.'));
    else if (s.freezable === false) add('ok', 'permissions', L('No freeze or blacklist function.', '无冻结或黑名单功能。', 'No hay función de congelar ni lista negra.'));
    if (s.mutable) add('warn', 'permissions', L('The contract is a proxy or its owner can change it.', '合约为代理合约或所有者可以修改。', 'El contrato es proxy o su dueño lo puede modificar.'));
    if (s.lpLocked != null) {
      if (s.lpLocked >= 90) add('ok', 'liquidity', L(`${pctTxt(s.lpLocked)} of the liquidity is locked or burned.`, `${pctTxt(s.lpLocked)} 的流动性已锁定或销毁。`, `El ${pctTxt(s.lpLocked)} de la liquidez está bloqueada o quemada.`));
      else add(s.lpLocked >= 50 ? 'warn' : 'bad', 'liquidity', L(`Only ${pctTxt(s.lpLocked)} of the liquidity is locked: the rest can be withdrawn (rug pull risk).`, `仅 ${pctTxt(s.lpLocked)} 的流动性被锁定：其余可被撤出（跑路风险）。`, `Solo el ${pctTxt(s.lpLocked)} de la liquidez está bloqueada: el resto se puede retirar (riesgo de rug pull).`));
    }
    if (s.top10 != null) {
      const v = pctTxt(s.top10);
      if (s.top10 > 50) add('bad', 'holders', L(`The top 10 wallets hold ${v} of the supply: very concentrated.`, `前10名钱包持有 ${v} 的供应量：高度集中。`, `Las 10 billeteras principales tienen el ${v} del supply: muy concentrado.`));
      else if (s.top10 > 30) add('warn', 'holders', L(`The top 10 wallets hold ${v} of the supply.`, `前10名钱包持有 ${v} 的供应量。`, `Las 10 billeteras principales tienen el ${v} del supply.`));
      else add('ok', 'holders', L(`Holders are well distributed (top 10: ${v}).`, `持币分布较分散（前10名：${v}）。`, `Los holders están bien distribuidos (top 10: ${v}).`));
    }
    const c = s.creator;
    if (c) {
      if (c.pastHoneypots) add('bad', 'creator', L('This creator has made honeypot tokens before.', '该创建者以前发行过蜜罐代币。', 'Este creador ya lanzó tokens honeypot antes.'));
      if (c.malicious) add('bad', 'creator', L('The creator wallet is flagged as malicious.', '创建者钱包被标记为恶意地址。', 'La billetera del creador está marcada como maliciosa.'));
      if (c.pct != null) {
        const v = pctTxt(c.pct);
        if (c.pct >= 20) add('bad', 'creator', L(`The creator still holds ${v} of the supply: they could dump it at any time.`, `创建者仍持有 ${v} 的供应量：随时可能抛售。`, `El creador todavía tiene el ${v} del supply: lo podría vender de golpe.`));
        else if (c.pct >= 5) add('warn', 'creator', L(`The creator still holds ${v} of the supply.`, `创建者仍持有 ${v} 的供应量。`, `El creador todavía tiene el ${v} del supply.`));
        else if (c.pct < 0.01) add('info', 'creator', L('The creator already sold or moved all their tokens.', '创建者已卖出或转出全部代币。', 'El creador ya vendió o movió todos sus tokens.'));
        else add('ok', 'creator', L(`The creator holds little of the supply (${v}).`, `创建者持有的供应量很少（${v}）。`, `El creador tiene poco del supply (${v}).`));
      }
      if (c.owner?.renounced) add('ok', 'creator', L('Contract ownership was renounced.', '合约所有权已放弃。', 'La propiedad del contrato fue renunciada.'));
      else if (c.owner?.pct >= 5) add('warn', 'creator', L(`The contract owner holds ${pctTxt(c.owner.pct)} of the supply.`, `合约所有者持有 ${pctTxt(c.owner.pct)} 的供应量。`, `El dueño del contrato tiene el ${pctTxt(c.owner.pct)} del supply.`));
      if (c.openSource === false) add('warn', 'creator', L("The contract code isn't verified: nobody can check what it does.", '合约代码未验证：无法查看其功能。', 'El código del contrato no está verificado: nadie puede revisar qué hace.'));
      if (c.metadataMutable) add('warn', 'creator', L('The token name, symbol or image can still be changed.', '代币名称、符号或图片仍可更改。', 'El nombre, símbolo o imagen del token todavía se pueden cambiar.'));
    }
  } else if (st.status === 'loading') {
    add('info', 'contract', L('Contract checks are still loading.', '合约检测仍在加载中。', 'Los chequeos del contrato todavía se están cargando.'));
  } else {
    add('warn', 'contract', L('Contract checks are not available for this token: verify on-chain before trading.', '该代币暂无合约检测：交易前请先链上验证。', 'No hay chequeos de contrato para este token: verificá on-chain antes de operar.'));
  }

  if (t.liquidity < 20000) add('bad', 'liquidity', L(`Very low liquidity (${formatUsd(t.liquidity)}): big price impact and easy to manipulate.`, `流动性极低（${formatUsd(t.liquidity)}）：价格冲击大，容易被操纵。`, `Liquidez muy baja (${formatUsd(t.liquidity)}): mucho impacto en el precio y fácil de manipular.`));
  else if (t.liquidity < 100000) add('warn', 'liquidity', L(`Low liquidity (${formatUsd(t.liquidity)}).`, `流动性偏低（${formatUsd(t.liquidity)}）。`, `Liquidez baja (${formatUsd(t.liquidity)}).`));
  else add('ok', 'liquidity', L(`Solid liquidity (${formatUsd(t.liquidity)}).`, `流动性充足（${formatUsd(t.liquidity)}）。`, `Liquidez sólida (${formatUsd(t.liquidity)}).`));

  const days = ageDays(t);
  if (days != null) {
    if (days < 1) add('bad', 'age', L(`The pair is less than a day old (${formatAge(days)}): most rug pulls happen at this stage.`, `交易对上线不到一天（${formatAge(days)}）：多数跑路发生在这个阶段。`, `El par tiene menos de un día (${formatAge(days)}): la mayoría de los rug pulls pasan en esta etapa.`));
    else if (days < 7) add('warn', 'age', L(`New pair, only ${formatAge(days)} old.`, `新交易对，仅上线 ${formatAge(days)}。`, `Par nuevo, tiene solo ${formatAge(days)}.`));
    else if (days >= 30) add('ok', 'age', L(`The pair has been trading for ${formatAge(days)}.`, `该交易对已交易 ${formatAge(days)}。`, `El par opera desde hace ${formatAge(days)}.`));
  }

  const ratio = t.liquidity ? t.volume / t.liquidity : 0;
  if (t.volume < 10000) add('warn', 'activity', L(`Low trading activity (${formatUsd(t.volume)} in 24h).`, `交易不活跃（24小时 ${formatUsd(t.volume)}）。`, `Poca actividad (${formatUsd(t.volume)} en 24h).`));
  else if (ratio > 20) add('warn', 'activity', L(`24h volume is ${ratio.toFixed(0)}x the liquidity: unusual, possibly wash trading.`, `24小时交易量是流动性的 ${ratio.toFixed(0)} 倍：异常，可能存在刷量。`, `El volumen de 24h es ${ratio.toFixed(0)} veces la liquidez: inusual, puede haber operaciones falsas.`));
  if (t.buys != null && t.sells != null && t.buys + t.sells > 0) {
    const r = t.buys / (t.buys + t.sells);
    if (r > 0.75) add('warn', 'activity', L(`${Math.round(r * 100)}% of 24h trades are buys: hype can reverse quickly.`, `24小时内 ${Math.round(r * 100)}% 的交易是买入：热度可能迅速反转。`, `El ${Math.round(r * 100)}% de las operaciones de 24h son compras: el hype se puede dar vuelta rápido.`));
    else if (r < 0.25) add('warn', 'activity', L(`${Math.round((1 - r) * 100)}% of 24h trades are sells: heavy selling pressure.`, `24小时内 ${Math.round((1 - r) * 100)}% 的交易是卖出：抛压很大。`, `El ${Math.round((1 - r) * 100)}% de las operaciones de 24h son ventas: mucha presión vendedora.`));
  }

  const ch = t.changes.h24;
  if (ch != null && ch <= -30) add('warn', 'trend', L(`The price fell ${formatPct(ch)} in 24h.`, `价格24小时内下跌 ${formatPct(ch)}。`, `El precio cayó ${formatPct(ch)} en 24h.`));
  else if (ch != null && ch >= 100) add('warn', 'trend', L(`The price rose ${formatPct(ch)} in 24h: very volatile.`, `价格24小时内上涨 ${formatPct(ch)}：波动极大。`, `El precio subió ${formatPct(ch)} en 24h: muy volátil.`));

  if (!t.socials) add('warn', 'info', L('No website or social links are listed.', '未列出官网或社交媒体链接。', 'No tiene sitio web ni redes sociales listadas.'));

  return out.sort((a, b) => SEV_ORDER[a.lv] - SEV_ORDER[b.lv]);
}

function riskVerdict(findings, st = security) {
  if (findings.some(f => f.lv === 'bad')) return 'high';
  if (findings.filter(f => f.lv === 'warn').length >= 2 || st.status !== 'ok') return 'medium';
  return 'low';
}

function verdictLine(v) {
  return {
    high: L('🔴 Overall risk: HIGH', '🔴 整体风险：高', '🔴 Riesgo general: ALTO'),
    medium: L('🟡 Overall risk: MEDIUM', '🟡 整体风险：中', '🟡 Riesgo general: MEDIO'),
    low: L('🟢 Overall risk: LOW', '🟢 整体风险：低', '🟢 Riesgo general: BAJO')
  }[v];
}

const findingLines = (list) => list.map(f => `${SEV_ICON[f.lv]} ${f.text}`);
const disclaimer = () => L('Built from live DexScreener and GoPlus data. Not financial advice.', '基于 DexScreener 与 GoPlus 实时数据。不构成投资建议。', 'Basado en datos en vivo de DexScreener y GoPlus. No es asesoramiento financiero.');

function reportText(type) {
  const t = currentToken, s = `$${t.symbol}`;
  const days = ageDays(t);
  const ratio = (t.liquidity ? t.volume / t.liquidity : 0).toFixed(2);
  const sec = security.status === 'ok' ? security.data : null;
  const yn = v => (v == null ? 'N/A' : v ? L('YES ⚠️', '是 ⚠️', 'SÍ ⚠️') : L('no ✓', '否 ✓', 'no ✓'));
  const findings = riskFindings();
  const verdict = riskVerdict(findings);
  const about = topics => findingLines(findings.filter(f => topics.includes(f.topic)));
  const examples = [
    L('• "Is it safe?"', '• “安全吗？”', '• "¿Es seguro?"'),
    L('• "Who holds the most?"', '• “谁持有最多？”', '• "¿Quién tiene más tokens?"'),
    L('• "Should I buy?"', '• “值得买吗？”', '• "¿Me conviene comprar?"'),
    L('• "Are there taxes?" / "Can they mint more?"', '• “有税吗？” / “能增发吗？”', '• "¿Tiene impuestos?" / "¿Pueden crear más tokens?"'),
    L('• "How is the price doing?" / "Is the liquidity locked?"', '• “价格走势如何？” / “流动性锁了吗？”', '• "¿Cómo viene el precio?" / "¿La liquidez está bloqueada?"')
  ];

  switch (type) {
    case 'checklist': return [
      L(`⚖️ Risk checklist for ${s}`, `⚖️ ${s} 风险清单`, `⚖️ Checklist de riesgo de ${s}`),
      verdictLine(verdict), '',
      ...findingLines(findings), '',
      disclaimer()
    ].join('\n');

    case 'verdict': {
      const risks = findings.filter(f => f.lv === 'bad' || f.lv === 'warn').slice(0, 3);
      const goods = findings.filter(f => f.lv === 'ok').slice(0, 2);
      return [
        L(`🤔 Should you buy ${s}?`, `🤔 ${s} 值得买吗？`, `🤔 ¿Te conviene comprar ${s}?`),
        L("I can't tell you whether to buy, but this is what the data shows:", '我无法告诉你是否该买，但数据显示：', 'No te puedo decir si comprar, pero esto es lo que muestran los datos:'),
        verdictLine(verdict), '',
        ...(risks.length ? [L('Main risks:', '主要风险：', 'Principales riesgos:'), ...findingLines(risks)] : []),
        ...(goods.length ? [L('In favor:', '有利因素：', 'A favor:'), ...findingLines(goods)] : []), '',
        L('If you decide to trade: only use money you can afford to lose, start small and use "Verify on-chain".', '如果决定交易：只用你能承受损失的资金，小额起步，并使用“链上验证”。', 'Si decidís operar: usá solo plata que puedas perder, empezá con poco y usá "Verificar on-chain".'),
        disclaimer()
      ].join('\n');
    }

    case 'safety': {
      const lines = [
        L(`🛡️ Safety signals for ${s}`, `🛡️ ${s} 安全信号`, `🛡️ Señales de seguridad de ${s}`),
        verdictLine(verdict),
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
      const flags = findingLines(findings.filter(f => f.lv === 'bad' || f.lv === 'warn').slice(0, 3));
      if (flags.length) lines.push('', L('Watch out:', '注意：', 'Ojo con:'), ...flags);
      return lines.join('\n');
    }

    case 'tax': {
      const lines = about(['tax']);
      return [
        L(`💸 Taxes for ${s}`, `💸 ${s} 税率`, `💸 Impuestos de ${s}`),
        ...(lines.length ? lines : [L('No tax data is available for this token. Use "Verify on-chain".', '暂无该代币的税率数据。请使用“链上验证”。', 'No hay datos de impuestos para este token. Usá "Verificar on-chain".')])
      ].join('\n');
    }

    case 'permissions': {
      if (!sec) return [L(`🔑 Contract permissions for ${s}`, `🔑 ${s} 合约权限`, `🔑 Permisos del contrato de ${s}`), ...about(['contract'])].join('\n');
      return [
        L(`🔑 Contract permissions for ${s}`, `🔑 ${s} 合约权限`, `🔑 Permisos del contrato de ${s}`),
        `• ${L('Mint authority', '增发权限', 'Permiso de mint')}: ${yn(sec.mintable)}`,
        `• ${L('Freeze / blacklist', '冻结 / 黑名单', 'Congelar / lista negra')}: ${yn(sec.freezable)}`,
        `• ${L('Proxy / mutable', '代理 / 可修改', 'Proxy / modificable')}: ${yn(sec.mutable)}`, '',
        ...about(['permissions'])
      ].join('\n');
    }

    case 'creator': {
      const lines = about(['creator']);
      return [
        L(`👤 Creator of ${s}`, `👤 ${s} 的创建者`, `👤 Creador de ${s}`),
        sec?.creator?.address ? `• ${L('Wallet', '钱包', 'Billetera')}: ${sec.creator.address}` : null,
        ...(lines.length ? lines : [L('No creator data is available for this token. Use "Verify on-chain".', '暂无该代币的创建者数据。请使用“链上验证”。', 'No hay datos del creador para este token. Usá "Verificar on-chain".')])
      ].filter(Boolean).join('\n');
    }

    case 'holders': {
      if (!sec || !sec.holders.length) return `👥 ${tr('holders_na')}`;
      return [
        L(`👥 Holder distribution for ${s}`, `👥 ${s} 持币分布`, `👥 Distribución de holders de ${s}`),
        `• ${tr('top10_ratio_label')}: ${sec.top10.toFixed(1)}%`,
        sec.holderCount != null ? `• ${tr('holder_count')}: ${formatCompact(sec.holderCount)}` : null,
        ...sec.holders.slice(0, 3).map((h, i) => `• #${i + 1} ${shortAddr(h.address)} — ${h.pct.toFixed(2)}%${h.tag ? ` (${h.tag})` : ''}`),
        ...about(['holders']),
        L('Note: top wallets are often LPs, exchanges or burn addresses.', '注意：头部地址常为流动池、交易所或销毁地址。', 'Nota: las billeteras principales suelen ser pools de liquidez, exchanges o direcciones de quema.')
      ].filter(Boolean).join('\n');
    }

    case 'liquidity': return [
      L(`💧 Liquidity for ${s}`, `💧 ${s} 流动性`, `💧 Liquidez de ${s}`),
      `• ${L('Active pool', '当前池子', 'Pool activo')}: ${t.dexId || 'DEX'} ${t.symbol}/${t.quoteSymbol} — ${formatUsd(t.liquidity)}`,
      `• ${L('Pools found', '池子数量', 'Pools encontrados')}: ${currentPairs.length} (${formatUsd(currentPairs.reduce((a, p) => a + (p.liquidity?.usd || 0), 0))} ${L('total', '合计', 'en total')})`,
      `• FDV: ${t.fdv ? formatUsd(t.fdv) : '—'}`,
      `• ${L('Volume / Liquidity', '交易量 / 流动性', 'Volumen / Liquidez')}: ${ratio}x`,
      ...about(['liquidity'])
    ].join('\n');

    case 'trend': return [
      L(`📈 Trend for ${s}`, `📈 ${s} 走势`, `📈 Tendencia de ${s}`),
      `• 5m: ${formatPct(t.changes.m5)} · 1h: ${formatPct(t.changes.h1)} · 6h: ${formatPct(t.changes.h6)} · 24h: ${formatPct(t.changes.h24)}`,
      `• ${L('Price', '价格', 'Precio')}: $${formatPrice(t.price)}`,
      `• ${L('24h volume', '24h 交易量', 'Volumen 24h')}: ${formatUsd(t.volume)}`,
      t.buys != null ? `• ${L('Buys / Sells 24h', '24h 买 / 卖', 'Compras / Ventas 24h')}: ${formatCompact(t.buys)} / ${formatCompact(t.sells)}` : null,
      ...about(['trend'])
    ].filter(Boolean).join('\n');

    case 'activity': return [
      L(`📊 Trading activity for ${s}`, `📊 ${s} 交易活跃度`, `📊 Actividad de ${s}`),
      `• ${L('Pair age', '交易对年龄', 'Antigüedad del par')}: ${formatAge(days)}`,
      `• ${L('24h volume', '24h 交易量', 'Volumen 24h')}: ${formatUsd(t.volume)}`,
      t.buys != null ? `• ${L('Buys / Sells 24h', '24h 买 / 卖', 'Compras / Ventas 24h')}: ${formatCompact(t.buys)} / ${formatCompact(t.sells)}` : null,
      `• ${L('Volume / Liquidity', '交易量 / 流动性', 'Volumen / Liquidez')}: ${ratio}x`,
      ...about(['age', 'activity'])
    ].filter(Boolean).join('\n');

    case 'summary': {
      const risks = findings.filter(f => f.lv === 'bad' || f.lv === 'warn').slice(0, 2);
      return [
        L(`📋 ${s} at a glance`, `📋 ${s} 概况`, `📋 ${s} de un vistazo`),
        verdictLine(verdict),
        `• ${L('Price', '价格', 'Precio')}: $${formatPrice(t.price)} (${formatPct(t.priceChange)} 24h)`,
        `• ${L('Liquidity', '流动性', 'Liquidez')}: ${formatUsd(t.liquidity)} · FDV: ${t.fdv ? formatUsd(t.fdv) : '—'}`,
        `• ${L('Market Health Score', '市场健康评分', 'Puntuación de salud del mercado')}: ${t.score}/100`,
        ...(risks.length ? ['', ...findingLines(risks)] : []), '',
        L('You can also ask, for example:', '你也可以这样问：', 'También podés preguntar, por ejemplo:'),
        ...examples.slice(0, 3)
      ].join('\n');
    }

    case 'greeting': return [
      L(`👋 Hi! Ask me anything about ${s}. For example:`, `👋 你好！可以问我任何关于 ${s} 的问题，例如：`, `👋 ¡Hola! Preguntame lo que quieras sobre ${s}. Por ejemplo:`),
      ...examples
    ].join('\n');

    default: return [
      L('💡 I answer from this token\'s live data. Try asking:', '💡 我会根据该代币的实时数据回答。可以试试：', '💡 Respondo con los datos en vivo de este token. Probá preguntar:'),
      ...examples
    ].join('\n');
  }
}

// Detects what the user is asking about (accent-insensitive, EN / ES / ZH keywords)
const INTENTS = [
  ['verdict', /conviene|comprar|compro|invertir|invierto|vale la pena|deberia|\bbuy\b|\binvest|worth|should i|买吗|值得|投资|入场/],
  ['checklist', /checklist|riesgos|\brisks\b|red flag|bandera|senal|peligro|danger|风险清单|红旗|危险/],
  ['safety', /safe|segur|\brug|scam|estafa|honey|fraud|trampa|confiable|trust|legit|安全|蜜罐|跑路|骗|可信|风险/],
  ['tax', /\btax|impuesto|comision|\bfees?\b|税|手续费/],
  ['creator', /creador|creator|\bdev\b|developer|desarrollador|deployer|owner|dueno|propietario|renounc|renunci|equipo|\bteam\b|quien lo (creo|hizo)|who (made|created)|创建|开发者|项目方|所有者/],
  ['permissions', /\bmint|emitir|crear mas|inflacion|freeze|congel|blacklist|lista negra|proxy|增发|冻结|黑名单|权限/],
  ['holders', /holder|whale|ballena|concentra|distribu|wallet|billetera|quien tiene|who (holds|owns)|持币|巨鲸|集中|分布|钱包|谁持有/],
  ['liquidity', /\bliq|pool|\blp\b|profundidad|depth|流动|池/],
  ['trend', /price|precio|trend|tendencia|pump|dump|chart|grafic|sube|subio|baja|bajo|cae|cayo|volatil|走势|价格|涨|跌/],
  ['activity', /volum|actividad|activity|trading|transacc|\btxn|compras|ventas|\bbuys\b|\bsells\b|edad|antigu|nuevo|\bnew\b|\bold\b|\bage\b|launch|lanz|creado|created|cuando se creo|cuando (se )?lanzo|how old|交易量|成交|年龄|活跃/],
  ['summary', /resumen|summary|overview|analiza|analisis|analysis|que es|what is|\binfo|概况|总结|分析|介绍/],
  ['help', /ayuda|\bhelp\b|que puedo|what can|como funciona|how does|帮助|怎么用/]
];
const GREETING_RE = /^(hola|buenas|hi|hello|hey)\b|^(你好|您好|嗨)/;

function detectIntents(text) {
  const q = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  let found = INTENTS.filter(([, re]) => re.test(q)).map(([k]) => k);
  // broader reports already include the narrower ones
  if (found.includes('creator')) found = found.filter(k => k !== 'permissions' && k !== 'activity'); // "who created it / dev / owner" questions
  if (found.includes('verdict')) found = found.filter(k => !['checklist', 'safety', 'summary'].includes(k));
  if (found.includes('checklist')) found = found.filter(k => !['safety', 'summary'].includes(k));
  if (found.length > 1) found = found.filter(k => k !== 'summary' && k !== 'help');
  if (!found.length) return [GREETING_RE.test(q) ? 'greeting' : 'summary'];
  return found.slice(0, 2);
}

function addMsg(text, isUser) {
  const box = $('copilotChatBox');
  if (!box) return;
  box.appendChild(el('div', isUser
    ? 'p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-200 text-right font-sans my-1 whitespace-pre-line break-words'
    : 'p-3 bg-slate-900/90 rounded-xl border border-electricCyan/30 text-[13px] lg:text-xs text-slate-200 leading-relaxed my-1 whitespace-pre-line break-words', text));
  box.scrollTop = box.scrollHeight;
}

function quickCopilotQuery(type) {
  if (!currentToken.loaded) return showToast(tr('waiting'));
  addMsg(reportText(type), false);
}

function sendCopilotQuery() {
  const input = $('copilotInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  if (!currentToken.loaded) return showToast(tr('waiting'));
  input.value = '';
  addMsg(text, true);
  detectIntents(text).forEach(type => addMsg(reportText(type), false));
}

// ===================================================================
// 9. UI TABS & LIVE POLLING
// ===================================================================
function switchTab(tab) {
  ['audit', 'ai', 'holders', 'watch'].forEach(t => {
    const btn = $(`tabBtn-${t}`);
    const content = $(`tabContent-${t}`);
    const active = t === tab;
    btn.setAttribute('aria-selected', String(active));
    btn.tabIndex = active ? 0 : -1;
    btn.className = 'flex-1 py-2 px-2 rounded-xl transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 font-bold text-[11px] sm:text-xs border '
      + (active ? 'bg-amber-500/10 text-amberGlow border-amber-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border-transparent');
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
    '⚡ Flick Super Intelligence · Market Snapshot', '',
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
  const toast = el('div', 'bg-[#10141e] text-white border border-amberCore/40 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-sm transition-opacity duration-300 max-w-sm');
  const zap = el('span', 'text-amberCore shrink-0');
  zap.appendChild(icon('zap', 'w-4 h-4'));
  toast.append(zap, el('span', '', message));
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
// 11b. TRENDING TOKENS (landing page)
// DexScreener has no public "trending" ranking, so this uses its most boosted
// tokens (paid promotions), enriched with real pair data and sorted by 24h volume.
// ===================================================================
const TRENDING_CACHE_KEY = 'flickTrending';
const TRENDING_TTL = 5 * 60 * 1000;
const TRENDING_SHOW = 8;
let trending = { status: 'idle', items: [] }; // idle | loading | ok | error

async function loadTrending(force = false) {
  if (trending.status === 'loading') return;
  if (!force) {
    const cached = safeStorage(() => JSON.parse(sessionStorage.getItem(TRENDING_CACHE_KEY) || 'null'));
    if (cached && Array.isArray(cached.items) && Date.now() - cached.at < TRENDING_TTL) {
      trending = { status: 'ok', items: cached.items };
      return renderTrending();
    }
  }
  trending = { status: 'loading', items: trending.items };
  renderTrending();
  try {
    const boosts = await fetchJson('https://api.dexscreener.com/token-boosts/top/v1', { timeout: 10000 });
    const seen = new Set();
    const candidates = (Array.isArray(boosts) ? boosts : [])
      .filter(b => b && typeof b.tokenAddress === 'string' && typeof b.chainId === 'string')
      .filter(b => {
        const k = `${b.chainId}:${b.tokenAddress}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, 14);
    const items = [];
    for (let i = 0; i < candidates.length; i += 4) { // 4 requests at a time
      const batch = await Promise.all(candidates.slice(i, i + 4).map(b => trendingItem(b).catch(() => null)));
      items.push(...batch.filter(Boolean));
    }
    items.sort((a, b) => b.vol - a.vol);
    trending = { status: items.length ? 'ok' : 'error', items: items.slice(0, TRENDING_SHOW) };
    if (items.length) safeStorage(() => sessionStorage.setItem(TRENDING_CACHE_KEY, JSON.stringify({ at: Date.now(), items: trending.items })));
  } catch (err) {
    console.warn('Trending load failed:', err);
    trending = { status: 'error', items: [] };
  }
  renderTrending();
}

async function trendingItem(boost) {
  const d = await fetchJson(`${DEX_API}/tokens/${encodeURIComponent(boost.tokenAddress)}`, { timeout: 10000 });
  const own = (d.pairs || [])
    .filter(p => p.chainId === boost.chainId && sameAddress(p.baseToken?.address, boost.tokenAddress))
    .sort(byLiquidity);
  if (!own.length) return null;
  const p = own[0];
  const img = [p.info?.imageUrl, boost.icon].find(u => typeof u === 'string' && u.startsWith('https://')) || '';
  return {
    ca: p.baseToken.address, chainId: p.chainId,
    symbol: String(p.baseToken.symbol || '?').slice(0, 12), name: String(p.baseToken.name || '').slice(0, 40),
    price: parseFloat(p.priceUsd) || 0, ch24: Number(p.priceChange?.h24),
    vol: own.reduce((a, x) => a + (x.volume?.h24 || 0), 0),
    liq: own.reduce((a, x) => a + (x.liquidity?.usd || 0), 0),
    ageDays: p.pairCreatedAt ? (Date.now() - p.pairCreatedAt) / 864e5 : null,
    img
  };
}

function openTrending(item) {
  $('landingCaInput').value = item.ca;
  runScanSequence(item.ca, { chain: item.chainId, onDone: ok => { if (ok && !isDashboardVisible()) enterApp(); } });
}

function renderTrending() {
  const grid = $('trendingGrid'), status = $('trendingStatus');
  if (!grid || !status) return;
  if (trending.status === 'loading' && !trending.items.length) {
    grid.replaceChildren();
    status.replaceChildren(el('p', 'text-[11px] text-slate-500 font-mono animate-pulse', tr('trending_loading')));
    return;
  }
  if (trending.status === 'error') {
    grid.replaceChildren();
    const retry = el('button', 'ml-2 text-amberCore hover:underline', tr('trending_retry'));
    retry.type = 'button';
    retry.onclick = () => loadTrending(true);
    const msg = el('p', 'text-[11px] text-slate-500 font-mono', tr('trending_error'));
    msg.appendChild(retry);
    status.replaceChildren(msg);
    return;
  }
  status.replaceChildren();
  grid.replaceChildren(...trending.items.map(item => feedCard(item)));
}

// ===================================================================
// 11c. PRICE IMPACT SIMULATOR
// Constant-product (x·y=k) estimate on the active pool: each side holds about
// half of the pool's USD liquidity. 0.3% DEX fee + GoPlus taxes when known.
// Concentrated-liquidity pools can behave differently, and the page says so.
// ===================================================================
const SIM_FEE = 0.003;
const SIM_PRESETS = [100, 500, 1000, 5000];

function simulateImpact(amountUsd, liquidityUsd, buyTaxPct = 0, sellTaxPct = 0) {
  const Q = liquidityUsd / 2; // USD side of the pool (base side valued at spot)
  if (!(Q > 0) || !(amountUsd > 0)) return null;
  const eff = amountUsd * (1 - SIM_FEE);
  const tokensGross = (Q * eff) / (Q + eff);           // in USD-at-spot units (price = 1)
  const tokensNet = tokensGross * (1 - buyTaxPct / 100);
  const impact = eff / (Q + eff);                       // execution price vs spot
  const priceMove = ((Q + eff) / Q) ** 2 - 1;           // spot price after the buy
  // Selling everything right back into the same pool
  const sellIn = tokensNet * (1 - sellTaxPct / 100) * (1 - SIM_FEE);
  const roundTrip = ((Q + eff) * sellIn) / (Q - tokensGross + sellIn);
  const maxFor1pct = (Q * 0.01 / 0.99) / (1 - SIM_FEE);
  return { impact: impact * 100, priceMove: priceMove * 100, tokensUsd: tokensNet, roundTrip, roundTripLoss: (1 - roundTrip / amountUsd) * 100, maxFor1pct };
}

function setSimAmount(v) {
  const input = $('simAmount');
  if (!input) return;
  input.value = String(v);
  renderSimulator();
}

function renderSimulator() {
  const box = $('simResult');
  if (!box) return;
  const t = currentToken;
  const amount = Number($('simAmount')?.value) || 0;
  document.querySelectorAll('[data-sim-amt]').forEach(b => {
    const on = Number(b.dataset.simAmt) === amount;
    b.className = `px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all ${on ? 'bg-amber-500/15 text-amberGlow border-amber-500/40' : 'bg-white/5 text-slate-300 border-white/10 hover:text-amberGlow'}`;
  });
  const sec = security.status === 'ok' ? security.data : null;
  const r = t.loaded ? simulateImpact(amount, t.liquidity, sec?.buyTax || 0, sec?.sellTax || 0) : null;
  if (!r) {
    box.replaceChildren(el('p', 'col-span-2 text-[11px] text-slate-400', tr('sim_na')));
    return;
  }
  const lv = r.impact < 1 ? 'ok' : r.impact < 5 ? 'warn' : 'bad';
  const tile = (label, value, cls = 'text-white') => {
    const d = el('div', 'p-2.5 rounded-xl bg-white/5 border border-white/5 min-w-0');
    d.append(el('p', 'text-[11px] text-slate-400', label), el('p', `font-mono text-sm font-bold truncate ${cls}`, value));
    return d;
  };
  const tokens = t.price > 0 ? r.tokensUsd / t.price : null;
  box.replaceChildren(
    tile(tr('sim_impact'), `${r.impact.toFixed(2)}%`, TXT[lv]),
    tile(tr('sim_move'), `+${r.priceMove.toFixed(2)}%`, TXT[lv]),
    tile(tr('sim_receive'), tokens == null ? '—' : `${formatCompact(tokens)} ${t.symbol}`),
    tile(tr('sim_roundtrip'), `$${formatCompact(r.roundTrip)} (−${r.roundTripLoss.toFixed(1)}%)`, r.roundTripLoss > 10 ? TXT.bad : r.roundTripLoss > 3 ? TXT.warn : 'text-white'),
    el('p', `col-span-2 text-[11px] ${TXT[lv]}`, tr('sim_safe', { amt: formatUsd(r.maxFor1pct) }))
  );
}

// ===================================================================
// 11d. NEW LAUNCHES, FILTERED (landing page, next to Trending)
// Latest token profiles on DexScreener, launched in the last 72h, run through
// the same risk engine as the dashboard (market + GoPlus). High risk is hidden.
// ===================================================================
const LAUNCH_CACHE_KEY = 'flickLaunches';
const LAUNCH_MAX_AGE_DAYS = 3;
let launches = { status: 'idle', items: [] };
let feed = safeStorage(() => localStorage.getItem('flickFeed')) === 'launches' ? 'launches' : 'trending';

function setFeed(f) {
  feed = f === 'launches' ? 'launches' : 'trending';
  safeStorage(() => localStorage.setItem('flickFeed', feed));
  renderFeedTabs();
  if (feed === 'launches' && launches.status === 'idle') loadLaunches();
}

function refreshFeed() {
  if (feed === 'launches') loadLaunches(true);
  else loadTrending(true);
}

function renderFeedTabs() {
  ['trending', 'launches'].forEach(f => {
    const btn = $(`feedBtn-${f}`), panel = $(`feed-${f}`);
    if (!btn || !panel) return;
    const on = f === feed;
    btn.setAttribute('aria-selected', String(on));
    btn.className = `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${on ? 'bg-amber-500/15 text-amberGlow' : 'text-slate-400 hover:text-slate-200'}`;
    panel.classList.toggle('hidden', !on);
  });
}

async function launchItem(profile) {
  const d = await fetchJson(`${DEX_API}/tokens/${encodeURIComponent(profile.tokenAddress)}`, { timeout: 10000 });
  const own = (d.pairs || [])
    .filter(p => p.chainId === profile.chainId && sameAddress(p.baseToken?.address, profile.tokenAddress))
    .sort(byLiquidity);
  if (!own.length) return null;
  const p = own[0];
  const created = Math.min(...own.map(x => x.pairCreatedAt || Infinity));
  if (!Number.isFinite(created) || (Date.now() - created) / 864e5 > LAUNCH_MAX_AGE_DAYS) return null;
  const img = [p.info?.imageUrl, profile.icon].find(u => typeof u === 'string' && u.startsWith('https://')) || '';
  const tok = {
    liquidity: own.reduce((a, x) => a + (x.liquidity?.usd || 0), 0),
    volume: own.reduce((a, x) => a + (x.volume?.h24 || 0), 0),
    pairCreatedAt: created,
    buys: p.txns?.h24?.buys ?? null, sells: p.txns?.h24?.sells ?? null,
    changes: { h24: Number.isFinite(Number(p.priceChange?.h24)) ? Number(p.priceChange.h24) : null },
    socials: (p.info?.websites?.length || 0) + (p.info?.socials?.length || 0)
  };
  return {
    ca: p.baseToken.address, chainId: p.chainId,
    symbol: String(p.baseToken.symbol || '?').slice(0, 12), name: String(p.baseToken.name || '').slice(0, 40),
    price: parseFloat(p.priceUsd) || 0, ch24: tok.changes.h24 ?? NaN,
    vol: tok.volume, liq: tok.liquidity, ageDays: (Date.now() - created) / 864e5, img, tok
  };
}

async function launchVerdict(item) {
  let st = { status: 'unsupported', data: null };
  if (item.chainId === 'solana' || GOPLUS_EVM[item.chainId]) {
    try {
      const d = await fetchGoPlus(item.chainId, item.ca);
      const result = d?.result || {};
      const raw = result[item.ca] || result[item.ca.toLowerCase()] || Object.values(result)[0];
      st = raw && typeof raw === 'object' ? { status: 'ok', data: normalizeSecurity(raw, item.chainId === 'solana') } : { status: 'error', data: null };
    } catch (e) {
      st = { status: 'error', data: null };
    }
  }
  const findings = riskFindings(item.tok, st);
  item.verdict = riskVerdict(findings, st);
  item.checked = st.status === 'ok';
  return item;
}

async function loadLaunches(force = false) {
  if (launches.status === 'loading') return;
  if (!force) {
    const cached = safeStorage(() => JSON.parse(sessionStorage.getItem(LAUNCH_CACHE_KEY) || 'null'));
    if (cached && Array.isArray(cached.items) && Date.now() - cached.at < TRENDING_TTL) {
      launches = { status: 'ok', items: cached.items };
      return renderLaunches();
    }
  }
  launches = { status: 'loading', items: launches.items };
  renderLaunches();
  try {
    const profiles = await fetchJson('https://api.dexscreener.com/token-profiles/latest/v1', { timeout: 10000 });
    const seen = new Set();
    const candidates = (Array.isArray(profiles) ? profiles : [])
      .filter(p => p && typeof p.tokenAddress === 'string' && typeof p.chainId === 'string')
      .filter(p => {
        const k = `${p.chainId}:${p.tokenAddress}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, 24);
    let items = [];
    for (let i = 0; i < candidates.length; i += 4) {
      const batch = await Promise.all(candidates.slice(i, i + 4).map(p => launchItem(p).catch(() => null)));
      items.push(...batch.filter(Boolean));
    }
    // Contract checks only for the most active ones (keeps GoPlus calls low)
    items = items.sort((a, b) => b.vol - a.vol).slice(0, 12);
    for (let i = 0; i < items.length; i += 4) {
      await Promise.all(items.slice(i, i + 4).map(launchVerdict));
    }
    const rank = { low: 0, medium: 1, high: 2 };
    const passed = items.filter(x => x.verdict !== 'high')
      .sort((a, b) => rank[a.verdict] - rank[b.verdict] || b.vol - a.vol)
      .slice(0, TRENDING_SHOW)
      .map(({ tok, ...rest }) => rest);
    launches = { status: 'ok', items: passed };
    safeStorage(() => sessionStorage.setItem(LAUNCH_CACHE_KEY, JSON.stringify({ at: Date.now(), items: passed })));
  } catch (err) {
    console.warn('New launches load failed:', err);
    launches = { status: 'error', items: [] };
  }
  renderLaunches();
}

function renderLaunches() {
  const grid = $('launchGrid'), status = $('launchStatus');
  if (!grid || !status) return;
  if (launches.status === 'loading' && !launches.items.length) {
    grid.replaceChildren();
    status.replaceChildren(el('p', 'text-[11px] text-slate-400 animate-pulse', tr('launch_loading')));
    return;
  }
  if (launches.status === 'error') {
    grid.replaceChildren();
    const retry = el('button', 'ml-2 text-amberCore hover:underline', tr('trending_retry'));
    retry.type = 'button';
    retry.onclick = () => loadLaunches(true);
    const msg = el('p', 'text-[11px] text-slate-400', tr('launch_error'));
    msg.appendChild(retry);
    status.replaceChildren(msg);
    return;
  }
  if (launches.status === 'ok' && !launches.items.length) {
    grid.replaceChildren();
    status.replaceChildren(el('p', 'text-[11px] text-slate-400', tr('launch_empty')));
    return;
  }
  status.replaceChildren();
  grid.replaceChildren(...launches.items.map(item => feedCard(item, true)));
}

// Card shared by "Trending" and "New launches"
function feedCard(item, isLaunch = false) {
  const card = el('button', 'glass-panel glass-card-hover p-3 rounded-2xl border border-white/5 text-left space-y-1.5 min-w-0');
  card.type = 'button';
  card.title = `${tr('t_open')}: ${item.name || item.symbol}`;
  card.onclick = () => openTrending(item);

  const head = el('div', 'flex items-center gap-2 min-w-0');
  const logo = el('div', 'w-7 h-7 rounded-lg overflow-hidden bg-amber-500/20 flex items-center justify-center text-xs font-bold text-white shrink-0', Array.from(item.symbol)[0] || '?');
  if (item.img) {
    const img = new Image();
    img.alt = '';
    img.loading = 'lazy';
    img.className = 'w-full h-full object-cover';
    img.onerror = () => img.remove();
    img.src = item.img;
    logo.replaceChildren(img);
  }
  const names = el('div', 'min-w-0 flex-1');
  names.append(
    el('p', 'text-xs font-bold text-white truncate', `$${item.symbol}`),
    el('p', 'text-[11px] text-slate-400 truncate', isLaunch ? `${chainName(item.chainId)} · ${formatAge(item.ageDays)}` : chainName(item.chainId))
  );
  head.append(logo, names);
  if (isLaunch && item.verdict) {
    const style = { low: 'text-cyberGreen bg-cyberGreen/10 border-cyberGreen/30', medium: 'text-amberGlow bg-amberGlow/10 border-amberGlow/30' }[item.verdict] || 'text-slate-400 bg-white/5 border-white/10';
    head.appendChild(el('span', `shrink-0 px-1.5 py-0.5 rounded-md border text-[10px] font-extrabold ${style}`, tr(`rv_${item.verdict}`)));
  }

  const known = Number.isFinite(item.ch24);
  const priceRow = el('div', 'flex items-baseline justify-between gap-2 font-mono');
  priceRow.append(
    el('span', 'text-[11px] text-slate-200 truncate', `$${formatPrice(item.price)}`),
    el('span', `text-[11px] font-semibold ${known ? (item.ch24 >= 0 ? 'text-cyberGreen' : 'text-crimsonRisk') : 'text-slate-400'}`, formatPct(item.ch24))
  );
  const stats = el('p', 'text-[11px] text-slate-400 font-mono truncate', `${tr('t_vol')} ${formatUsd(item.vol)} · ${tr('t_liq')} ${formatUsd(item.liq)}`);
  card.append(head, priceRow, stats);

  const flags = [];
  if (item.liq < 20000) flags.push(tr('t_lowliq'));
  if (!isLaunch && item.ageDays != null && item.ageDays < 1) flags.push(tr('t_new'));
  if (isLaunch && item.checked === false) flags.push(tr('t_unverified'));
  if (flags.length) card.appendChild(el('p', 'text-[11px] text-amberGlow truncate', flags.join(' · ')));
  return card;
}

// ===================================================================
// 12. WATCHLIST & PRICE ALERTS (localStorage; checked every minute while the page is open)
// ===================================================================
const WATCH_KEY = 'flickWatchlist';
const WATCH_MAX = 20;
const WATCH_INTERVAL = 60000;
const ALERT_STEPS = [0, 5, 10, 20, 50]; // ± % move that triggers an alert (0 = off)
const watchKey = w => `${w.chainId}:${w.ca}`;
let watchlist = loadWatchlist();
let watchPrices = {};      // watchKey -> { price, change24 }
let watchInFlight = false;

function loadWatchlist() {
  const v = safeStorage(() => JSON.parse(localStorage.getItem(WATCH_KEY) || '[]'));
  return Array.isArray(v)
    ? v.filter(w => w && typeof w.ca === 'string' && typeof w.chainId === 'string' && typeof w.symbol === 'string').slice(0, WATCH_MAX)
    : [];
}

function saveWatchlist() {
  safeStorage(() => localStorage.setItem(WATCH_KEY, JSON.stringify(watchlist)));
}

const findWatch = t => watchlist.find(w => w.ca === t.ca && w.chainId === t.chainId);

function toggleWatch() {
  const t = currentToken;
  if (!t.loaded) return;
  const existing = findWatch(t);
  if (existing) {
    watchlist = watchlist.filter(w => w !== existing);
    showToast(tr('watch_removed', { s: `$${t.symbol}` }));
  } else {
    if (watchlist.length >= WATCH_MAX) return showToast(tr('watch_full', { n: WATCH_MAX }));
    const price = t.price || 0;
    watchlist.push({
      ca: t.ca, chainId: t.chainId, symbol: t.symbol.slice(0, 12), pairAddress: t.pairAddress,
      addedAt: Date.now(), addedPrice: price, refPrice: price, alertPct: 10
    });
    watchPrices[`${t.chainId}:${t.ca}`] = { price, change24: t.priceChange };
    showToast(tr('watch_added', { s: `$${t.symbol}` }));
  }
  saveWatchlist();
  renderWatchButton();
  renderWatchlist();
  scheduleTgSync();
}

function removeWatch(key) {
  watchlist = watchlist.filter(w => watchKey(w) !== key);
  saveWatchlist();
  renderWatchButton();
  renderWatchlist();
  scheduleTgSync();
}

function setWatchAlert(key, pct) {
  const w = watchlist.find(x => watchKey(x) === key);
  if (!w) return;
  w.alertPct = ALERT_STEPS.includes(pct) ? pct : 10;
  w.refPrice = watchPrices[key]?.price || w.refPrice; // measure the next move from now
  saveWatchlist();
  scheduleTgSync();
  if (w.alertPct && 'Notification' in window && Notification.permission === 'default') renderNotifyControl(true);
}

function renderWatchButton() {
  const btn = $('watchBtn');
  if (!btn) return;
  const t = currentToken;
  btn.classList.toggle('hidden', !t.loaded);
  if (!t.loaded) return;
  const on = !!findWatch(t);
  btn.replaceChildren(icon('star', `w-3.5 h-3.5${on ? ' fill-current' : ''}`), tr(on ? 'watching' : 'watch'));
  btn.setAttribute('aria-pressed', String(on));
  btn.className = `inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-all ${on ? 'bg-amber-500/20 text-amberGlow border-amber-500/40' : 'bg-white/5 text-slate-300 border-white/15 hover:text-amberGlow hover:border-amber-500/40'}`;
}

function renderNotifyControl(highlight = false) {
  const box = $('notifyControl');
  if (!box) return;
  if (!('Notification' in window)) return box.replaceChildren(el('p', 'text-[11px] text-slate-400', tr('notify_unsupported')));
  const perm = Notification.permission;
  if (perm === 'granted') return box.replaceChildren(el('p', 'text-[11px] text-cyberGreen font-mono', tr('notify_on')));
  if (perm === 'denied') return box.replaceChildren(el('p', 'text-[11px] text-slate-400', tr('notify_blocked')));
  const btn = el('button', `w-full px-3 py-2 rounded-xl text-xs font-mono border transition-all ${highlight ? 'bg-amber-500/20 border-amber-500/50 text-amberGlow' : 'bg-white/5 border-white/10 text-slate-300 hover:text-amberGlow'}`, tr('notify_enable'));
  btn.type = 'button';
  btn.onclick = async () => {
    try { await Notification.requestPermission(); } catch (e) { /* ignored */ }
    renderNotifyControl();
  };
  box.replaceChildren(btn);
}

function renderWatchlist() {
  const list = $('watchlistBody');
  const count = $('watchCount');
  if (count) {
    count.textContent = watchlist.length ? String(watchlist.length) : '';
    count.classList.toggle('hidden', !watchlist.length);
  }
  if (!list) return;
  renderNotifyControl();
  const toggle = $('riskAlertToggle');
  if (toggle) toggle.checked = riskAlertsOn();
  if (!watchlist.length) {
    list.replaceChildren(el('p', 'py-6 text-center text-slate-500 text-[11px] leading-relaxed', tr('watch_empty')));
    return;
  }
  list.replaceChildren(...watchlist.map(w => {
    const key = watchKey(w);
    const live = watchPrices[key];
    const price = live?.price;
    const since = price && w.addedPrice ? ((price - w.addedPrice) / w.addedPrice) * 100 : null;
    const color = v => (v == null || !Number.isFinite(v) ? 'text-slate-400' : v >= 0 ? 'text-cyberGreen' : 'text-crimsonRisk');

    const row = el('div', 'p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5');
    const top = el('div', 'flex items-center justify-between gap-2');
    const open = el('button', 'flex items-center gap-2 min-w-0 text-left');
    open.type = 'button';
    open.title = tr('w_open');
    open.onclick = () => runScanSequence(w.ca, { chain: w.chainId });
    open.append(el('span', 'font-bold text-white text-xs truncate', `$${w.symbol}`), el('span', 'text-[11px] text-slate-400', chainName(w.chainId)));
    if (w.lastRisk) {
      const lv = { ok: 'ok', warn: 'warn', bad: 'bad' }[w.lastRisk];
      const tag = el('span', `inline-flex items-center gap-1 text-[10px] font-semibold ${TXT[lv]}`);
      tag.append(icon(w.lastRisk === 'ok' ? 'check-circle' : 'alert', 'w-3 h-3'), tr(`risk_${w.lastRisk}`));
      open.appendChild(tag);
    }
    const remove = el('button', 'text-slate-500 hover:text-crimsonRisk text-xs px-1.5', '✕');
    remove.type = 'button';
    remove.title = tr('w_remove');
    remove.setAttribute('aria-label', `${tr('w_remove')} $${w.symbol}`);
    remove.onclick = () => removeWatch(key);
    top.append(open, remove);

    const mid = el('div', 'flex items-center justify-between gap-2 text-[11px] font-mono');
    const prices = el('div', 'flex items-center gap-2 flex-wrap');
    prices.append(
      el('span', 'text-slate-200 font-semibold', price ? `$${formatPrice(price)}` : '—'),
      el('span', color(live?.change24), `${formatPct(live?.change24)} 24h`),
      el('span', color(since), `${formatPct(since)} ${tr('w_since').toLowerCase()}`)
    );
    const alertWrap = el('label', 'flex items-center gap-1 text-[10px] text-slate-400 shrink-0');
    const select = el('select', 'bg-slate-900 border border-white/10 rounded-md px-1 py-0.5 text-[10px] text-slate-200 focus:outline-none focus:border-amberCore');
    ALERT_STEPS.forEach(v => {
      const o = el('option', '', v ? `±${v}%` : tr('w_off'));
      o.value = String(v);
      if ((w.alertPct ?? 10) === v) o.selected = true;
      select.appendChild(o);
    });
    select.onchange = () => setWatchAlert(key, Number(select.value));
    alertWrap.append(`🔔 ${tr('w_alert')}`, select);
    mid.append(prices, alertWrap);

    row.append(top, mid);
    return row;
  }));
}

function sendAlert(w, change, price) {
  notifyWatch(w, tr(change > 0 ? 'alert_up' : 'alert_down', { s: `$${w.symbol}`, pct: formatPct(change), price: `$${formatPrice(price)}` }));
}

// Toast + browser notification (through the service worker when available) + 🔔 in the tab title
function notifyWatch(w, msg) {
  showToast(msg);
  if ('Notification' in window && Notification.permission === 'granted') {
    const opts = {
      body: msg, icon: 'icon-192.png', badge: 'favicon.png', tag: watchKey(w),
      data: { ca: w.ca, chain: w.chainId, url: `/?ca=${encodeURIComponent(w.ca)}&chain=${encodeURIComponent(w.chainId)}` }
    };
    const viaPage = () => {
      try {
        const n = new Notification('Flick Super Intelligence', opts);
        n.onclick = () => { window.focus(); openTokenFromAlert(w.ca, w.chainId); n.close(); };
      } catch (e) { /* this browser only allows notifications from a service worker */ }
    };
    // Android only shows notifications created by the service worker (sw.js handles the tap)
    if (navigator.serviceWorker?.getRegistration) {
      navigator.serviceWorker.getRegistration().then(reg => (reg ? reg.showNotification('Flick Super Intelligence', opts) : viaPage())).catch(viaPage);
    } else viaPage();
  }
  if (document.hidden && !document.title.startsWith('🔔')) document.title = `🔔 ${document.title}`;
}

function openTokenFromAlert(ca, chain) {
  if (!ca) return;
  runScanSequence(ca, { chain: chain || '', onDone: ok => { if (ok && !isDashboardVisible()) enterApp(); } });
}

async function refreshWatchItem(w) {
  const d = await fetchJson(`${DEX_API}/tokens/${encodeURIComponent(w.ca)}`, { timeout: 10000 });
  const own = (d.pairs || []).filter(p => p.chainId === w.chainId && sameAddress(p.baseToken?.address, w.ca));
  if (!own.length) return;
  const pair = own.find(p => p.pairAddress === w.pairAddress) || own.sort(byLiquidity)[0];
  const price = parseFloat(pair.priceUsd);
  if (!(price > 0)) return;
  watchPrices[watchKey(w)] = { price, change24: Number(pair.priceChange?.h24) };
  if (!w.addedPrice) w.addedPrice = price;
  if (!w.refPrice) w.refPrice = price;
  if (w.alertPct) {
    const change = ((price - w.refPrice) / w.refPrice) * 100;
    if (Math.abs(change) >= w.alertPct) {
      w.refPrice = price; // the next alert is measured from this price
      sendAlert(w, change, price);
    }
  }
  if (riskAlertsOn()) await checkRiskSignals(w, pair, own);
}

// ---- Risk alerts: liquidity drain, heavy selling, contract checks getting worse ----
const RISK_RANK = { ok: 0, warn: 1, bad: 2 };
const riskAlertsOn = () => safeStorage(() => localStorage.getItem('flickRiskAlerts')) !== 'off';

function setRiskAlerts(on) {
  safeStorage(() => localStorage.setItem('flickRiskAlerts', on ? 'on' : 'off'));
  renderWatchlist();
  scheduleTgSync();
}

async function checkRiskSignals(w, pair, own) {
  const now = Date.now();
  const s = `$${w.symbol}`;
  w.cool = w.cool || {};
  const ready = (type, ms) => !w.cool[type] || now - w.cool[type] > ms;
  const fire = (type, msg) => { w.cool[type] = now; notifyWatch(w, msg); };

  // Liquidity drained from its recent peak (all of the token's pools on this chain)
  const liq = own.reduce((a, p) => a + (p.liquidity?.usd || 0), 0);
  if (liq > 0) {
    if (!w.peakLiq || liq > w.peakLiq) w.peakLiq = liq;
    const drop = ((w.peakLiq - liq) / w.peakLiq) * 100;
    if (drop >= 30 && ready('liq', 30 * 60e3)) {
      fire('liq', tr('ra_liq', { s, pct: pctTxt(drop), liq: formatUsd(liq) }));
      w.peakLiq = liq;
    }
  }

  // Heavy selling in the last hour
  const h1 = pair.txns?.h1;
  if (h1 && h1.buys + h1.sells >= 30) {
    const r = h1.sells / (h1.buys + h1.sells);
    if (r >= 0.75 && ready('sells', 2 * 3600e3)) fire('sells', tr('ra_sells', { s, pct: Math.round(r * 100) }));
  }

  // Contract checks (GoPlus) every 30 minutes: alert only when they get worse
  if ((w.chainId === 'solana' || GOPLUS_EVM[w.chainId]) && (!w.riskCheckedAt || now - w.riskCheckedAt > 30 * 60e3)) {
    w.riskCheckedAt = now;
    try {
      const d = await fetchGoPlus(w.chainId, w.ca);
      const result = d?.result || {};
      const raw = result[w.ca] || result[w.ca.toLowerCase()] || Object.values(result)[0];
      if (raw && typeof raw === 'object') {
        const risk = contractRisk(normalizeSecurity(raw, w.chainId === 'solana'));
        if (w.lastRisk && RISK_RANK[risk] > RISK_RANK[w.lastRisk]) fire('contract', tr('ra_contract', { s, level: tr(`risk_${risk}`) }));
        w.lastRisk = risk;
      }
    } catch (e) { /* try again in 30 minutes */ }
  }
}

async function checkWatchlist() {
  if (!watchlist.length || watchInFlight) return;
  watchInFlight = true;
  try {
    const items = [...watchlist];
    for (let i = 0; i < items.length; i += 4) { // 4 requests at a time, well under DexScreener's rate limit
      await Promise.all(items.slice(i, i + 4).map(w => refreshWatchItem(w).catch(err => console.warn('Watchlist refresh failed:', w.symbol, err))));
    }
    saveWatchlist();
  } finally {
    watchInFlight = false;
    renderWatchlist();
  }
}

setInterval(checkWatchlist, WATCH_INTERVAL);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && document.title.startsWith('🔔 ')) document.title = document.title.slice(3);
});

// ===================================================================
// 12c. TELEGRAM ALERTS (optional; needs the worker in /worker)
// Enabled when index.html has the "flick-alerts-api" and "flick-telegram-bot" meta tags.
// The browser keeps a random token; the bot links it to the user's chat on /start.
// ===================================================================
const TG_API = (document.querySelector('meta[name="flick-alerts-api"]')?.content || '').trim().replace(/\/+$/, '');
const TG_BOT = (document.querySelector('meta[name="flick-telegram-bot"]')?.content || '').trim().replace(/^@/, '');
const tgEnabled = () => /^https:\/\//.test(TG_API) && /^[A-Za-z0-9_]{5,64}$/.test(TG_BOT);
let tgToken = safeStorage(() => localStorage.getItem('flickTgToken')) || '';
let tgLinked = safeStorage(() => localStorage.getItem('flickTgLinked')) === '1';
let tgSyncTimer = null;
let tgPollTimer = null;

function newTgToken() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); // 32 chars
}

function tgPayload() {
  return {
    token: tgToken,
    lang: currentLang,
    riskAlerts: riskAlertsOn(),
    items: watchlist.map(w => ({
      ca: w.ca, chainId: w.chainId, symbol: w.symbol, pairAddress: w.pairAddress,
      alertPct: w.alertPct ?? 10, refPrice: watchPrices[watchKey(w)]?.price || w.refPrice || null
    }))
  };
}

function setTgLinked(linked) {
  tgLinked = linked;
  safeStorage(() => localStorage.setItem('flickTgLinked', linked ? '1' : '0'));
  renderTelegramCard();
}

async function tgSync() {
  if (!tgEnabled() || !tgToken) return null;
  try {
    const res = await fetch(`${TG_API}/api/sync`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(tgPayload()) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const d = await res.json();
    setTgLinked(!!d.linked);
    return d;
  } catch (err) {
    console.warn('Telegram sync failed:', err);
    return null;
  }
}

// Called whenever the watchlist or its settings change
function scheduleTgSync() {
  if (!tgEnabled() || !tgToken) return;
  clearTimeout(tgSyncTimer);
  tgSyncTimer = setTimeout(tgSync, 800);
}

async function tgCheckStatus() {
  if (!tgEnabled() || !tgToken) return false;
  try {
    const res = await fetch(`${TG_API}/api/status?token=${encodeURIComponent(tgToken)}`);
    const d = await res.json();
    if (d.linked && !tgLinked) showToast(tr('tg_connected_toast'));
    setTgLinked(!!d.linked);
    return !!d.linked;
  } catch (err) {
    return tgLinked;
  }
}

// After opening Telegram, check every 3 s (for up to 3 minutes) whether the user tapped "Start"
function pollTgStatus() {
  clearInterval(tgPollTimer);
  const until = Date.now() + 180e3;
  tgPollTimer = setInterval(async () => {
    if (Date.now() > until || (await tgCheckStatus())) clearInterval(tgPollTimer);
  }, 3000);
}

async function connectTelegram() {
  if (!tgEnabled()) return;
  if (!tgToken) {
    tgToken = newTgToken();
    safeStorage(() => localStorage.setItem('flickTgToken', tgToken));
  }
  const win = window.open('about:blank', '_blank'); // opened right away so popup blockers allow it
  const d = await tgSync();
  if (!d) {
    if (win) win.close();
    showToast(tr('tg_error'));
    return;
  }
  const link = `https://t.me/${TG_BOT}?start=${tgToken}`;
  if (win) win.location.href = link;
  else location.href = link;
  renderTelegramCard();
  pollTgStatus();
}

async function disconnectTelegram() {
  if (!tgToken) return;
  try {
    await fetch(`${TG_API}/api/unlink`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ token: tgToken }) });
  } catch (err) { /* the server forgets unconfirmed links after a day anyway */ }
  clearInterval(tgPollTimer);
  tgToken = '';
  safeStorage(() => localStorage.removeItem('flickTgToken'));
  setTgLinked(false);
}

function renderTelegramCard() {
  const box = $('tgCard');
  if (!box) return;
  box.classList.toggle('hidden', !tgEnabled());
  if (!tgEnabled()) return;
  const head = el('div', 'flex items-center gap-2');
  const badge = el('span', 'w-7 h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0');
  badge.appendChild(icon('send', 'w-4 h-4'));
  const btn = (label, cls, onclick) => {
    const b = el('button', `px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${cls}`, label);
    b.type = 'button';
    b.onclick = onclick;
    return b;
  };
  const actions = el('div', 'flex flex-wrap gap-2');

  if (tgLinked) {
    head.append(badge, el('p', 'text-sm font-bold text-cyberGreen', tr('tg_connected_title')));
    actions.append(btn(tr('tg_disconnect'), 'bg-white/5 border-white/10 text-slate-300 hover:text-crimsonRisk', disconnectTelegram));
    box.replaceChildren(head, el('p', 'text-[11px] text-slate-400 leading-relaxed', tr('tg_connected_desc')), actions);
  } else if (tgToken) {
    head.append(badge, el('p', 'text-sm font-bold text-white', tr('tg_title')));
    const open = el('a', 'px-3 py-2 rounded-xl text-xs font-semibold border bg-sky-500/15 border-sky-500/40 text-sky-300 hover:bg-sky-500/25 transition-all', tr('tg_open'));
    open.href = `https://t.me/${TG_BOT}?start=${tgToken}`;
    open.target = '_blank';
    open.rel = 'noopener noreferrer';
    open.onclick = () => pollTgStatus();
    actions.append(open, btn(tr('tg_cancel'), 'bg-white/5 border-white/10 text-slate-300', disconnectTelegram));
    box.replaceChildren(head, el('p', 'text-[11px] text-amberGlow leading-relaxed animate-pulse', tr('tg_pending')), actions);
  } else {
    head.append(badge, el('p', 'text-sm font-bold text-white', tr('tg_title')));
    actions.append(btn(tr('tg_connect'), 'bg-sky-500/15 border-sky-500/40 text-sky-300 hover:bg-sky-500/25', connectTelegram));
    box.replaceChildren(head, el('p', 'text-[11px] text-slate-300 leading-relaxed', tr('tg_desc')), actions, el('p', 'text-[11px] text-slate-400 leading-relaxed', tr('tg_privacy')));
  }
}

document.addEventListener('visibilitychange', () => {
  if (!document.hidden && tgToken && !tgLinked) tgCheckStatus(); // back from the Telegram app
});

// ===================================================================
// 12b. INSTALLABLE APP (PWA): service worker + install button
// ===================================================================
let installPrompt = null;
const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

function showInstallButton(show) {
  const btn = $('installBtn');
  if (btn) btn.classList.toggle('hidden', !show);
}

async function installApp() {
  if (installPrompt) {
    installPrompt.prompt();
    try { await installPrompt.userChoice; } catch (e) { /* dismissed */ }
    installPrompt = null;
    showInstallButton(false);
  } else if (isIOS()) {
    showToast(tr('ios_install')); // Safari has no install prompt
  }
}

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault(); // show our own button instead of the browser's mini-bar
  installPrompt = e;
  showInstallButton(true);
});
window.addEventListener('appinstalled', () => {
  installPrompt = null;
  showInstallButton(false);
  showToast(tr('installed'));
});

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => console.warn('Service worker not registered:', err));
  });
  // A tapped alert notification asks this page to open its token
  navigator.serviceWorker.addEventListener('message', e => {
    if (e.data?.type === 'open-token') openTokenFromAlert(e.data.ca, e.data.chain);
  });
}

// ===================================================================
// 13. INIT (saved language, ?ca=&chain= deep link)
// ===================================================================
(function init() {
  const saved = safeStorage(() => localStorage.getItem('flickLang'));
  const nav = (navigator.language || '').toLowerCase();
  changeLanguage(saved || (nav.startsWith('zh') ? 'zh' : nav.startsWith('es') ? 'es' : 'en'));
  if (watchlist.length) setTimeout(checkWatchlist, 2000);
  loadTrending();
  renderFeedTabs();
  if (feed === 'launches') loadLaunches();
  if (isIOS() && !isStandalone()) showInstallButton(true);
  if (tgEnabled() && tgToken) tgSync(); // refresh the server copy and the "connected" state
  const params = new URLSearchParams(location.search);
  const ca = params.get('ca');
  if (ca) {
    $('landingCaInput').value = ca;
    runScanSequence(ca, { chain: params.get('chain') || '', onDone: ok => { if (ok) enterApp(); } });
  }
})();
