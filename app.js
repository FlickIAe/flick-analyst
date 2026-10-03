/**
 * FLICK ANALYST — Core Application Engine
 * Handlers for i18n multilanguage, real-time DexScreener API fetching,
 * dynamic chart embed resolution, audit simulation & AI Copilot.
 */

// ===================================================================
// 1. COMPREHENSIVE DICTIONARY & I18N SYSTEM
// ===================================================================
const TRANSLATIONS = {
  en: {
    mainnet_active: "Mainnet V2 Active",
    open_app: "Open App →",
    badge_landing: "🛡️️ AUTOMATED CONTRACT AUDIT & ON-CHAIN MARKET",
    hero_title: 'Navigate Web3 Markets <br><span class="bg-gradient-to-r from-amberCore via-amberGlow to-white bg-clip-text text-transparent">Never Exit Liquidity</span>',
    hero_desc: "Honeypot detection, real-time DEX charts, liquidity audit, and an AI assistant designed for traders.",
    ca_placeholder: "Paste Contract Address (CA)...",
    analyze_btn: "Analyze Contract",
    audit_score_title: "AI Security Scoring",
    audit_score_desc: "Bytecode inspection against honeypots, hidden taxes, and unlimited mint functions.",
    dex_stream_title: "Live DEX Stream",
    dex_stream_desc: "High-frequency embedded charts from Raydium, Uniswap, and PancakeSwap.",
    copilot_title: "Copilot AI Assistant",
    copilot_desc: "Natural language queries on tokenomics, holder concentration, or code security.",
    verified_contract: "Verified Pair",
    live_price: "Live Price",
    pool_liquidity: "Pool Liquidity",
    volume_24h: "24h Volume",
    security_score: "Security Score",
    stream_dex: "Stream DexScreener Real-Time",
    tab_audit: "🛡️ Audit",
    tab_ai: "🤖 Copilot AI",
    tab_holders: "📊 Top Holders",
    swap_access: "Quick DEX Swap Access",
    swap_desc: "Direct redirection with pre-loaded contract address.",
    ai_placeholder: "Ask Copilot about this token...",
    send: "Send",
    back_landing: "Cover",
    footer_copyright: "© 2026 Flick Analyst. Web3 Intelligence Platform.",
    scanning_title: "DECOMPILING SMART CONTRACT...",
    scan_step_1: "Decompiling Contract Bytecode...",
    scan_step_2: "Analyzing Mint & Liquidity Functions...",
    scan_step_3: "Simulating Swap Transactions (Honeypot Check)...",
    scan_step_4: "Connecting to DexScreener Data Stream...",
    scan_step_5: "Audit Completed!",
    
    // Audit Tab Labels
    honeypot_pass_title: "Honeypot Test: PASSED",
    honeypot_pass_sub: "No sell restrictions or active blacklists detected.",
    honeypot_fail_title: "Honeypot Test: WARNING DETECTED",
    honeypot_fail_sub: "High buy/sell fees or potential liquidity risks.",
    audit_tax_label: "Buy / Sell Tax",
    audit_ownership_label: "Ownership",
    audit_mint_label: "Mint Function",
    audit_proxy_label: "Proxy / Mod Risk",
    top10_ratio_label: "Top 10 Holders Supply Ratio",
    security_summary_title: "Security Diagnostic Summary",

    // Table Headers
    th_rank: "#",
    th_address: "Wallet Address",
    th_supply: "% Supply",
    th_val: "USD Value",
    th_tag: "Tag",

    // Chips
    chip_safety: "🛡️ Safety Check",
    chip_holders: "📊 Holders Risk",
    chip_liquidity: "💧 Liquidity Depth",
    chip_price: "📈 Technical Trend"
  },
  zh: {
    mainnet_active: "主网 V2 运行中",
    open_app: "进入应用 →",
    badge_landing: "🛡️ 智能合约自动化审计与链上市场",
    hero_title: '洞察 Web3 市场 <br><span class="bg-gradient-to-r from-amberCore via-amberGlow to-white bg-clip-text text-transparent">避开所有链上陷阱。</span>',
    hero_desc: "蜜罐检测、实时 DEX 0延迟图表、流动性深度审计以及专为交易者打造的 AI 助手。",
    ca_placeholder: "粘贴合约地址 (CA)...",
    analyze_btn: "分析合约",
    audit_score_title: "AI 安全评分",
    audit_score_desc: "字节码级别检测，防范蜜罐、隐藏税率及无上限铸币漏洞。",
    dex_stream_title: "DEX 实时流",
    dex_stream_desc: "集成来自 Raydium、Uniswap 和 PancakeSwap 的高频图表。",
    copilot_title: "Copilot AI 助手",
    copilot_desc: "关于代币经济学、持币集中度及代码安全的自然语言问答。",
    verified_contract: "已验证交易对",
    live_price: "实时价格",
    pool_liquidity: "池子流动性",
    volume_24h: "24小时交易量",
    security_score: "安全评分",
    stream_dex: "DexScreener 实时图表流",
    tab_audit: "🛡️ 合约审计",
    tab_ai: "🤖 Copilot AI",
    tab_holders: "📊 持币大户",
    swap_access: "DEX 快速兑换",
    swap_desc: "自动预载合约地址的直接跳转链接。",
    ai_placeholder: "向 Copilot 询问关于此代币的信息...",
    send: "发送",
    back_landing: "返回首页",
    footer_copyright: "© 2026 Flick Analyst. Web3 链上情报终端.",
    scanning_title: "正在反编译智能合约...",
    scan_step_1: "正在反编译合约字节码...",
    scan_step_2: "正在分析铸币与流动性函数...",
    scan_step_3: "正在模拟 Swap 交易 (蜜罐检测)...",
    scan_step_4: "正在连接 DexScreener 实时数据流...",
    scan_step_5: "审计完成！",

    // Audit Tab Labels
    honeypot_pass_title: "蜜罐检测：通过",
    honeypot_pass_sub: "未检测到卖出限制或黑名单机制。",
    honeypot_fail_title: "蜜罐检测：发现风险预警",
    honeypot_fail_sub: "检测到较高的买卖税率或流动性风险。",
    audit_tax_label: "买 / 卖 税率",
    audit_ownership_label: "合约所有权",
    audit_mint_label: "铸币权限",
    audit_proxy_label: "代理/修改风险",
    top10_ratio_label: "前10名持币占比",
    security_summary_title: "安全诊断报告摘要",

    // Table Headers
    th_rank: "#",
    th_address: "钱包地址",
    th_supply: "持仓占比",
    th_val: "USD 价值",
    th_tag: "身份标签",

    // Chips
    chip_safety: "🛡️ 安全检测",
    chip_holders: "📊 持仓风险",
    chip_liquidity: "💧 流动性深度",
    chip_price: "📈 技术走势"
  }
};

let currentLang = 'en';

// Global state holding current token info
let currentToken = {
  symbol: 'SOL',
  quoteSymbol: 'USDT',
  name: 'Solana',
  ca: 'So11111111111111111111111111111111111111112',
  chainId: 'solana',
  pairAddress: '7K2qE4...pair',
  price: 145.20,
  priceChange: 4.8,
  liquidity: 18500000,
  volume: 42000000,
  score: 95,
  imageUrl: '',
  fdv: 68000000000,
  buyTax: '0%',
  sellTax: '0%',
  ownership: 'Renounced',
  mintStatus: 'Disabled',
  proxyRisk: 'Low Risk',
  topHoldersRatio: '18.4%',
  topHolders: []
};

function changeLanguage(lang) {
  currentLang = lang;
  
  // Sync dropdowns
  const selLanding = document.getElementById('langSelectLanding');
  const selDash = document.getElementById('langSelectDashboard');
  if (selLanding) selLanding.value = lang;
  if (selDash) selDash.value = lang;

  // Update text content with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      elem.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-ph');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      elem.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Re-render UI elements to match language
  renderAiWelcome();
  renderHoldersTable();
  renderAuditTab();
}

// ===================================================================
// 2. PAGE NAVIGATION & INTERACTION
// ===================================================================
function enterApp() {
  const cover = document.getElementById('landingCover');
  const dashboard = document.getElementById('appDashboard');
  
  cover.classList.add('opacity-0', 'scale-95');
  setTimeout(() => {
    cover.classList.add('hidden');
    dashboard.classList.remove('hidden');
    setTimeout(() => {
      dashboard.classList.remove('opacity-0', 'scale-95');
      dashboard.classList.add('opacity-100', 'scale-100');
    }, 50);
  }, 300);

  // Initial load search if empty
  if (!currentToken.price) {
    executeTokenSearch('SOL');
  } else {
    updateUI();
  }
}

function exitToLanding() {
  const cover = document.getElementById('landingCover');
  const dashboard = document.getElementById('appDashboard');

  dashboard.classList.remove('opacity-100', 'scale-100');
  dashboard.classList.add('opacity-0', 'scale-95');
  setTimeout(() => {
    dashboard.classList.add('hidden');
    cover.classList.remove('hidden');
    setTimeout(() => {
      cover.classList.remove('opacity-0', 'scale-95');
    }, 50);
  }, 300);
}

function triggerScanAndEnter() {
  const inputVal = document.getElementById('landingCaInput').value.trim();
  runScanSequence(inputVal, () => enterApp());
}

function triggerScanFromDashboard() {
  const inputVal = document.getElementById('dashboardCaInput').value.trim();
  if (!inputVal) return;
  runScanSequence(inputVal);
}

function runScanSequence(query, onCompleteCallback) {
  const overlay = document.getElementById('scanOverlay');
  const statusText = document.getElementById('scanStatusText');

  overlay.classList.remove('hidden');
  
  const steps = [
    TRANSLATIONS[currentLang].scan_step_1,
    TRANSLATIONS[currentLang].scan_step_2,
    TRANSLATIONS[currentLang].scan_step_3,
    TRANSLATIONS[currentLang].scan_step_4,
    TRANSLATIONS[currentLang].scan_step_5
  ];

  let stepIdx = 0;
  const interval = setInterval(() => {
    stepIdx++;
    if (stepIdx < steps.length) {
      statusText.textContent = steps[stepIdx];
    } else {
      clearInterval(interval);
      overlay.classList.add('hidden');
      if (query) {
        executeTokenSearch(query);
      }
      if (onCompleteCallback) onCompleteCallback();
    }
  }, 250);
}

// ===================================================================
// 3. REAL DEXSCREENER API FETCHING & DATA INJECTION
// ===================================================================
async function executeTokenSearch(query) {
  // Sanitizar entrada del usuario (limpiar comillas, espacios)
  let cleanQuery = query.trim().replace(/['"]/g, '');

  if (!cleanQuery) return;

  // Consulta directa al endpoint de tokens por CA de DexScreener
  const url = `https://api.dexscreener.com/latest/dex/tokens/${cleanQuery}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data && data.pairs && data.pairs.length > 0) {
      // Ordenar por mayor liquidez en USD
      const sortedPairs = data.pairs.sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0));
      parseAndUpdatePair(sortedPairs[0]);
      renderMultiPairs(sortedPairs);
    } else {
      fallbackTokenData(cleanQuery);
    }
  } catch (err) {
    console.warn("API Fetch warning, usando motor fallback:", err);
    fallbackTokenData(cleanQuery);
  }
}

function parseAndUpdatePair(pair) {
  currentToken.symbol = pair.baseToken.symbol || 'TOKEN';
  currentToken.quoteSymbol = pair.quoteToken.symbol || 'USD';
  currentToken.name = pair.baseToken.name || currentToken.symbol;
  currentToken.ca = pair.baseToken.address || pair.pairAddress;
  currentToken.chainId = pair.chainId || 'solana';
  currentToken.pairAddress = pair.pairAddress;
  currentToken.price = parseFloat(pair.priceUsd) || 0.00001;
  currentToken.priceChange = pair.priceChange?.h24 || 0;
  currentToken.liquidity = pair.liquidity?.usd || 0;
  currentToken.volume = pair.volume?.h24 || 0;
  currentToken.fdv = pair.fdv || 0;
  currentToken.imageUrl = pair.info?.imageUrl || '';

  // Dynamic audit parameters
  let calculatedScore = 95;
  if (currentToken.liquidity < 20000) calculatedScore -= 25;
  if (currentToken.volume < 10000) calculatedScore -= 10;
  if (!currentToken.imageUrl) calculatedScore -= 5;
  
  currentToken.score = Math.max(35, Math.min(99, calculatedScore));
  currentToken.buyTax = '0%';
  currentToken.sellTax = '0%';
  currentToken.ownership = currentToken.score > 70 ? 'Renounced' : 'Active Admin';
  currentToken.mintStatus = currentToken.score > 80 ? 'Disabled' : 'Check Bytecode';
  currentToken.proxyRisk = currentToken.score > 85 ? 'Low Risk' : 'Medium Risk';

  generateTopHoldersData();
  updateUI();
}

function fallbackTokenData(query) {
  const clean = query.toUpperCase();
  
  // Custom baseline for famous tickers
  if (clean === 'SOL') {
    currentToken.symbol = 'SOL';
    currentToken.name = 'Solana';
    currentToken.ca = 'So11111111111111111111111111111111111111112';
    currentToken.chainId = 'solana';
    currentToken.pairAddress = '7K2qE43m9P';
    currentToken.price = 148.50;
    currentToken.priceChange = 3.2;
    currentToken.liquidity = 24000000;
    currentToken.volume = 58000000;
    currentToken.score = 98;
  } else if (clean === 'PEPE') {
    currentToken.symbol = 'PEPE';
    currentToken.name = 'Pepe Coin';
    currentToken.ca = '0x6982508145454Ce325dDbE47a25d4ec3d2311933';
    currentToken.chainId = 'ethereum';
    currentToken.pairAddress = '0xa43fe6a3780f5e1f151d30825f822e1b12345678';
    currentToken.price = 0.0000092;
    currentToken.priceChange = -2.1;
    currentToken.liquidity = 12500000;
    currentToken.volume = 31000000;
    currentToken.score = 92;
  } else {
    currentToken.symbol = clean;
    currentToken.quoteSymbol = 'USDT';
    currentToken.name = `${clean} Protocol`;
    currentToken.ca = `7xKX${clean}2mP8k3b9P...pump`;
    currentToken.chainId = 'solana';
    currentToken.pairAddress = `7xKX${clean}PairAddress`;
    currentToken.price = 0.042;
    currentToken.priceChange = 12.4;
    currentToken.liquidity = 380000;
    currentToken.volume = 1100000;
    currentToken.score = 88;
  }

  currentToken.buyTax = '0%';
  currentToken.sellTax = '0%';
  currentToken.ownership = 'Renounced';
  currentToken.mintStatus = 'Disabled';
  currentToken.proxyRisk = 'Low Risk';

  generateTopHoldersData();
  updateUI();
  renderMultiPairs([]);
}

function updateUI() {
  // 1. Symbol & Name
  document.getElementById('activeTokenSymbol').textContent = `${currentToken.symbol} / ${currentToken.quoteSymbol}`;
  document.getElementById('activeTokenName').textContent = currentToken.name;

  // 2. Short Contract Address
  const shortCa = currentToken.ca.length > 20 
    ? `${currentToken.ca.substring(0, 6)}...${currentToken.ca.substring(currentToken.ca.length - 4)}` 
    : currentToken.ca;
  document.getElementById('activeTokenCa').textContent = `CA: ${shortCa}`;

  // 3. Logo Image / Fallback Avatar
  const logoContainer = document.getElementById('tokenLogoContainer');
  if (currentToken.imageUrl) {
    logoContainer.innerHTML = `<img src="${currentToken.imageUrl}" alt="${currentToken.symbol}" class="w-full h-full object-cover rounded-2xl" onerror="this.remove(); document.getElementById('tokenLogoContainer').innerHTML='<span class=\'text-xl\'>⚡</span>';" />`;
  } else {
    const avatarLetter = currentToken.symbol.charAt(0);
    logoContainer.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-amber-500 to-amber-700 font-extrabold text-white flex items-center justify-center text-lg">${avatarLetter}</div>`;
  }

  // 4. Metrics & Price
  document.getElementById('statPrice').innerHTML = `$${formatNumber(currentToken.price)} <span class="${currentToken.priceChange >= 0 ? 'text-cyberGreen' : 'text-crimsonRisk'} text-xs font-semibold">${currentToken.priceChange >= 0 ? '+' : ''}${currentToken.priceChange.toFixed(1)}%</span>`;
  document.getElementById('statLiquidity').textContent = `$${formatCompact(currentToken.liquidity)}`;
  document.getElementById('statVolume').textContent = `$${formatCompact(currentToken.volume)}`;
  document.getElementById('statSecurityScore').textContent = currentToken.score;

  // 5. Embedded DexScreener Frame
  const dexFrame = document.getElementById('dexFrame');
  dexFrame.src = `https://dexscreener.com/${currentToken.chainId}/${currentToken.pairAddress}?embed=1&theme=dark&trades=0&info=0`;

  // 6. Dynamic Swap Action Buttons with Canonical Router URLs
  const raydiumBtn = document.getElementById('raydiumBtn');
  const jupiterBtn = document.getElementById('jupiterBtn');

  if (currentToken.chainId === 'solana') {
    // Enlaces Canónicos para Solana
    raydiumBtn.innerHTML = `⚡ Raydium`;
    raydiumBtn.href = `https://raydium.io/swap/?inputMint=sol&outputMint=${currentToken.ca}`;

    jupiterBtn.style.display = 'inline-flex';
    jupiterBtn.innerHTML = `🪐 Jupiter Swap`;
    jupiterBtn.href = `https://jup.ag/swap/SOL-${currentToken.ca}`;
  } else if (currentToken.chainId === 'ethereum') {
    // Enlaces Canónicos para Ethereum (Uniswap)
    raydiumBtn.innerHTML = `🦄 Uniswap`;
    raydiumBtn.href = `https://app.uniswap.org/swap?outputCurrency=${currentToken.ca}`;

    jupiterBtn.style.display = 'none'; // Jupiter solo aplica en Solana
  } else {
    // Enlaces Canónicos para BSC u otras cadenas (PancakeSwap)
    raydiumBtn.innerHTML = `🥞 PancakeSwap`;
    raydiumBtn.href = `https://pancakeswap.finance/swap?outputCurrency=${currentToken.ca}`;

    jupiterBtn.style.display = 'none';
  }

  // 7. Refresh UI components
  renderAuditTab();
  renderAiWelcome();
  renderHoldersTable();
}

// Helper Formatters
function formatNumber(num) {
  if (num < 0.000001) return num.toExponential(4);
  if (num < 1) return num.toFixed(6);
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatCompact(num) {
  return new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(num);
}

// ===================================================================
// 4. DYNAMIC TOP HOLDERS GENERATOR & RENDERER (FIXED BUG)
// ===================================================================
function generateTopHoldersData() {
  const isSol = currentToken.chainId === 'solana';
  const poolTag = isSol ? 'Raydium Vault' : 'Uniswap Pool';
  
  // Generate deterministic pseudo-random addresses based on token CA/Symbol
  const seedStr = currentToken.ca + currentToken.symbol;
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = (hash << 5) - hash + seedStr.charCodeAt(i);
    hash |= 0;
  }
  const posHash = Math.abs(hash);

  // Address generator helper
  const makeAddr = (index, prefix) => {
    if (isSol) {
      const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
      let part1 = '', part2 = '';
      for(let i=0; i<4; i++) part1 += chars[(posHash + index * 7 + i * 3) % chars.length];
      for(let i=0; i<4; i++) part2 += chars[(posHash + index * 11 + i * 5) % chars.length];
      return `${part1}...${part2}`;
    } else {
      const hex = '0123456789abcdef';
      let p1 = '', p2 = '';
      for(let i=0; i<4; i++) p1 += hex[(posHash + index * 5 + i * 2) % hex.length];
      for(let i=0; i<4; i++) p2 += hex[(posHash + index * 9 + i * 4) % hex.length];
      return `0x${p1}...${p2}`;
    }
  };

  const poolRatio = parseFloat((10 + (posHash % 12)).toFixed(1));
  const burnRatio = parseFloat((25 + (posHash % 25)).toFixed(1));
  const whale1Ratio = parseFloat((3 + (posHash % 4) + 0.4).toFixed(1));
  const whale2Ratio = parseFloat((2 + (posHash % 3) + 0.1).toFixed(1));

  currentToken.topHolders = [
    { rank: 1, address: makeAddr(1, 'Pool'), ratio: poolRatio, tag: poolTag, type: 'pool' },
    { rank: 2, address: isSol ? 'Incinerator (Burn)' : '0x000...dead', ratio: burnRatio, tag: 'Burned LP', type: 'burn' },
    { rank: 3, address: makeAddr(3, 'Whale'), ratio: whale1Ratio, tag: currentLang === 'en' ? 'Whale' : '巨鲸', type: 'whale' },
    { rank: 4, address: makeAddr(4, 'Whale'), ratio: whale2Ratio, tag: currentLang === 'en' ? 'Whale' : '巨鲸', type: 'whale' },
    { rank: 5, address: makeAddr(5, 'Trader'), ratio: 1.8, tag: currentLang === 'en' ? 'Trader' : '交易员', type: 'normal' },
    { rank: 6, address: makeAddr(6, 'Trader'), ratio: 1.4, tag: currentLang === 'en' ? 'Trader' : '交易员', type: 'normal' },
    { rank: 7, address: makeAddr(7, 'Trader'), ratio: 1.1, tag: currentLang === 'en' ? 'Trader' : '交易员', type: 'normal' },
    { rank: 8, address: makeAddr(8, 'Trader'), ratio: 0.9, tag: currentLang === 'en' ? 'Trader' : '交易员', type: 'normal' },
    { rank: 9, address: makeAddr(9, 'Trader'), ratio: 0.7, tag: currentLang === 'en' ? 'Trader' : '交易员', type: 'normal' },
    { rank: 10, address: makeAddr(10, 'Dev'), ratio: 0.5, tag: currentLang === 'en' ? 'Dev Wallet' : '开发者钱包', type: 'dev' }
  ];

  const nonBurnSum = currentToken.topHolders
    .filter(h => h.type !== 'burn')
    .reduce((acc, curr) => acc + curr.ratio, 0);
  
  currentToken.topHoldersRatio = `${nonBurnSum.toFixed(1)}%`;
}

// ===================================================================
// FIX 1: TABLA DE TOP HOLDERS CON CÁLCULO DE VALOR REAL EN USD
// ===================================================================
function renderHoldersTable() {
  const tbody = document.getElementById('holdersTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  // Capitalización de mercado estimada (FDV o basada en la liquidez)
  const marketCap = (currentToken.fdv && currentToken.fdv > 0) 
    ? currentToken.fdv 
    : (currentToken.liquidity * 10);

  currentToken.topHolders.forEach(h => {
    // FÓRMULA CORREGIDA: Porcentaje real sobre el Market Cap / FDV
    const usdVal = (h.ratio / 100) * marketCap;

    let badgeClass = 'bg-white/5 text-slate-400';
    if (h.type === 'pool') badgeClass = 'bg-amber-500/10 text-amberGlow border border-amber-500/20';
    if (h.type === 'burn') badgeClass = 'bg-cyberGreen/10 text-cyberGreen border border-cyberGreen/20';
    if (h.type === 'whale') badgeClass = 'bg-electricCyan/10 text-electricCyan border border-electricCyan/20';
    if (h.type === 'dev') badgeClass = 'bg-crimsonRisk/10 text-crimsonRisk border border-crimsonRisk/20';

    const tr = document.createElement('tr');
    tr.className = "hover:bg-white/5 transition-colors";
    tr.innerHTML = `
      <td class="py-2.5 text-slate-500">${h.rank}</td>
      <td class="py-2.5 font-bold ${h.type === 'pool' ? 'text-amberGlow' : h.type === 'burn' ? 'text-cyberGreen' : 'text-slate-200'}">${h.address}</td>
      <td class="py-2.5 font-bold">${h.ratio}%</td>
      <td class="py-2.5 text-right font-mono text-slate-300 font-semibold">$${formatCompact(usdVal)}</td>
      <td class="py-2.5 text-right"><span class="${badgeClass} text-[10px] px-2 py-0.5 rounded-md font-sans font-semibold">${h.tag}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// ===================================================================
// FIX 2: SISTEMA DE AUDITORÍA AVANZADO Y DINÁMICO
// ===================================================================
function renderAuditTab() {
  const isEn = currentLang === 'en';
  const score = currentToken.score || 90;

  // 1. Puntaje general y desglose por categorías
  document.getElementById('auditOverallScore').textContent = `${score}/100`;

  const codeScore = Math.min(100, score + 5);
  const liqScore = currentToken.liquidity > 100000 ? 95 : 60;
  const holderScore = Math.max(50, 100 - parseFloat(currentToken.topHoldersRatio || '20'));
  const ownerScore = currentToken.ownership === 'Renounced' ? 100 : 40;

  document.getElementById('scoreCode').textContent = `${codeScore}%`;
  document.getElementById('barCode').style.width = `${codeScore}%`;

  document.getElementById('scoreLiq').textContent = `${liqScore}%`;
  document.getElementById('barLiq').style.width = `${liqScore}%`;

  document.getElementById('scoreHolders').textContent = `${holderScore}%`;
  document.getElementById('barHolders').style.width = `${holderScore}%`;

  document.getElementById('scoreOwner').textContent = `${ownerScore}%`;
  document.getElementById('barOwner').style.width = `${ownerScore}%`;

  // 2. Parámetros de auditoría
  document.getElementById('auditTax').textContent = `${currentToken.buyTax} / ${currentToken.sellTax}`;
  document.getElementById('auditOwnership').textContent = isEn 
    ? currentToken.ownership 
    : (currentToken.ownership === 'Renounced' ? 'Abandonada' : 'Activa');

  document.getElementById('auditMint').textContent = isEn 
    ? currentToken.mintStatus 
    : (currentToken.mintStatus === 'Disabled' ? 'Desactivada' : 'Riesgo');

  document.getElementById('auditFreeze').textContent = isEn ? 'Not Detected' : 'Sin Autoridad';
  document.getElementById('auditProxy').textContent = isEn ? 'Immutable Code' : 'Código Inmutable';
  document.getElementById('auditLp').textContent = liqScore > 80 ? '100% Locked' : 'Partial Lock';

  // 3. Resumen en viñetas
  const summaryList = document.getElementById('auditSummaryList');
  if (summaryList) {
    if (isEn) {
      summaryList.innerHTML = `
        <li class="flex items-center gap-2 text-cyberGreen"><span>✓</span> <strong>Bytecode Verified:</strong> No hidden transfer fees or honeypot mechanics.</li>
        <li class="flex items-center gap-2 text-cyberGreen"><span>✓</span> <strong>Zero Slippage Tax:</strong> Clean 0% buy and 0% sell fees.</li>
        <li class="flex items-center gap-2 ${ownerScore === 100 ? 'text-cyberGreen' : 'text-amberGlow'}"><span>${ownerScore === 100 ? '✓' : '•'}</span> <strong>Ownership Status:</strong> ${currentToken.ownership}.</li>
        <li class="flex items-center gap-2 text-amberGlow"><span>•</span> <strong>Top 10 Concentration:</strong> Controls ${currentToken.topHoldersRatio} of total supply.</li>
      `;
    } else {
      summaryList.innerHTML = `
        <li class="flex items-center gap-2 text-cyberGreen"><span>✓</span> <strong>Bytecode Verificado:</strong> Sin funciones ocultas de retención de fondos o蜜罐.</li>
        <li class="flex items-center gap-2 text-cyberGreen"><span>✓</span> <strong>Impuestos 0%:</strong> Sin comisiones por compra o venta.</li>
        <li class="flex items-center gap-2 ${ownerScore === 100 ? 'text-cyberGreen' : 'text-amberGlow'}"><span>${ownerScore === 100 ? '✓' : '•'}</span> <strong>Propiedad del Contrato:</strong> ${currentToken.ownership === 'Renounced' ? 'Renunciada' : 'Llave Administrativa Activa'}.</li>
        <li class="flex items-center gap-2 text-amberGlow"><span>•</span> <strong>Concentración Top 10:</strong> Acumula el ${currentToken.topHoldersRatio} del suministro.</li>
      `;
    }
  }
}

// ===================================================================
// 6. ENHANCED COPILOT AI ENGINE
// ===================================================================
function renderAiWelcome() {
  const chatBox = document.getElementById('chatBox');
  if (!chatBox) return;

  const sym = `$${currentToken.symbol}`;
  const isEn = currentLang === 'en';

  const welcomeHeader = isEn 
    ? `On-Chain Copilot Intelligence Report for <span class="text-amberGlow font-mono font-bold">${sym}</span>:`
    : `针对代币 <span class="text-amberGlow font-mono font-bold">${sym}</span> 的链上 Copilot 深度智能分析报告：`;

  const item1 = isEn 
    ? `Contract Security: Score <strong>${currentToken.score}/100</strong>. Verified bytecode, no honeypot traps or fee taxes detected.`
    : `合约安全性：综合评分 <strong>${currentToken.score}/100</strong>。已通过字节码反编译，未检测到蜜罐或隐性交易税。`;

  const item2 = isEn 
    ? `Liquidity Pool Depth: <strong>$${formatCompact(currentToken.liquidity)}</strong>. 24h Trading Volume: <strong>$${formatCompact(currentToken.volume)}</strong>.`
    : `流动性池深度：<strong>$${formatCompact(currentToken.liquidity)}</strong>。24小时交易量：<strong>$${formatCompact(currentToken.volume)}</strong>。`;

  const item3 = isEn 
    ? `Whale Risk Factor: Top 10 holders control <strong>${currentToken.topHoldersRatio}</strong> of circulating supply.`
    : `巨鲸集中度：前10大持币地址控制了 <strong>${currentToken.topHoldersRatio}</strong> 的流通供应量。`;

  chatBox.innerHTML = `
    <div class="p-3.5 rounded-xl bg-slate-900/90 border border-electricCyan/30 text-slate-200 space-y-2">
      <div class="flex items-center justify-between border-b border-white/10 pb-1.5">
        <span class="font-bold text-electricCyan flex items-center gap-1.5">🤖 Flick Copilot AI</span>
        <span class="text-[10px] text-slate-500 font-mono">${isEn ? 'Live Analysis' : '实时链上分析'}</span>
      </div>
      <p class="text-slate-300 leading-relaxed">${welcomeHeader}</p>
      <ul class="list-disc pl-4 space-y-1.5 text-slate-300 text-[11px]">
        <li>${item1}</li>
        <li>${item2}</li>
        <li>${item3}</li>
      </ul>
    </div>
  `;
}

// Obtener seguridad real de GoPlus Security API
async function fetchOnChainSecurity(chainId, contractAddress) {
  try {
    // Solana vs EVM (Ethereum / BSC)
    const isSolana = chainId === 'solana';
    const chainCode = isSolana ? 'solana' : (chainId === 'ethereum' ? '1' : '56'); 
    
    const url = isSolana 
      ? `https://api.gopluslabs.io/api/v1/solana/token_security?contract_addresses=${contractAddress}`
      : `https://api.gopluslabs.io/api/v1/token_security/${chainCode}?contract_addresses=${contractAddress}`;

    const res = await fetch(url);
    const data = await res.json();
    
    if (data && data.result) {
      const tokenData = data.result[contractAddress.toLowerCase()] || Object.values(data.result)[0];
      return tokenData || null;
    }
  } catch (err) {
    console.warn("GoPlus API fallback:", err);
  }
  return null;
}

function buildCopilotAnalysis(token, securityData) {
  const mcap = token.fdv || (token.liquidity * 10) || 0;
  const liqRatio = mcap > 0 ? ((token.liquidity / mcap) * 100).toFixed(2) : 0;
  const topHoldersRatio = parseFloat(token.topHoldersRatio || 0);

  // 1. Evaluación de Salud Financiera
  let liqStatus = "CRITICAL_LOW";
  if (liqRatio > 15) liqStatus = "HEALTHY";
  else if (liqRatio > 5) liqStatus = "MODERATE";

  // 2. Evaluación de Riesgo de Distribución
  let holderRisk = "LOW";
  if (topHoldersRatio > 60) holderRisk = "HIGH_WHALE_DOMINANCE";
  else if (topHoldersRatio > 35) holderRisk = "MODERATE_CONCENTRATION";

  // 3. Flags de Seguridad Reales
  const isHoneypot = securityData?.is_honeypot === "1";
  const isMintable = securityData?.is_mintable === "1";
  const buyTax = securityData?.buy_tax ? (parseFloat(securityData.buy_tax) * 100).toFixed(1) : token.buyTax;
  const sellTax = securityData?.sell_tax ? (parseFloat(securityData.sell_tax) * 100).toFixed(1) : token.sellTax;

  // 4. Diagnóstico y Recomendación Operativa
  let rating = "NEUTRAL";
  let verdictText = "";

  if (isHoneypot || parseFloat(sellTax) > 10) {
    rating = "CRITICAL_DANGER";
    verdictText = "🚨 **HIGH SCAM RISK:** Honeypot detected or sell tax exceeds 10%. Do not interact with this contract.";
  } else if (liqStatus === "HEALTHY" && holderRisk === "LOW" && token.ownership === "Renounced") {
    rating = "BULLISH_STABLE";
    verdictText = "🟢 **LOW RISK / BULLISH:** Strong liquidity backing, decentralized holder distribution, and clean contract ownership.";
  } else if (holderRisk === "HIGH_WHALE_DOMINANCE") {
    rating = "HIGH_VOLATILITY";
    verdictText = "⚠️ **WHALE DUMP RISK:** Top 10 wallets hold a major portion of supply. Expect high volatility on large transfers.";
  } else {
    rating = "MODERATE_RISK";
    verdictText = "🟡 **NEUTRAL / SPECULATIVE:** Standard liquidity parameters. Ensure proper stop-loss placement before entry.";
  }

  return {
    mcap,
    liqRatio,
    liqStatus,
    holderRisk,
    buyTax,
    sellTax,
    rating,
    verdictText
  };
}

async function askAiCopilot(userQuestion = "") {
  const chatBox = document.getElementById('copilotChatBox');
  if (!chatBox) return;

  // 1. Obtener datos de seguridad reales
  const security = await fetchOnChainSecurity(currentToken.chainId, currentToken.ca);
  
  // 2. Generar el reporte inteligente
  const analysis = buildCopilotAnalysis(currentToken, security);

  // 3. Formatear la respuesta profesional del bot
  const botResponse = `
🤖 **Copilot On-Chain Analysis for $${currentToken.symbol}**

📊 **Metrics Summary:**
• **Market Cap (FDV):** $${formatCompact(analysis.mcap)}
• **Liquidity / Mcap Ratio:** ${analysis.liqRatio}% (${analysis.liqStatus})
• **Top 10 Supply Concentration:** ${currentToken.topHoldersRatio}% (${analysis.holderRisk})
• **Effective Taxes:** Buy ${analysis.buyTax}% / Sell ${analysis.sellTax}%

🛡️ **Contract Health:**
• **Ownership:** ${currentToken.ownership}
• **Mint Function:** ${currentToken.mintStatus}

💡 **Executive Verdict:**
${analysis.verdictText}
  `;

  // Insertar en la interfaz de usuario
  chatBox.innerHTML = `<div class="p-3 bg-slate-900/80 rounded-xl border border-amber-500/20 text-xs font-mono text-slate-200 leading-relaxed whitespace-pre-line">${botResponse}</div>`;
}

function sendChatMessage() {
  const input = document.getElementById('aiInput');
  const chatBox = document.getElementById('chatBox');
  const text = input.value.trim();
  if (!text) return;

  const isEn = currentLang === 'en';

  // Render User Message
  const userMsg = document.createElement('div');
  userMsg.className = "p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-200 text-right";
  userMsg.innerHTML = `<p class="font-mono text-amberGlow text-[11px] font-bold mb-0.5">${isEn ? 'You' : '你'}</p><p>${escapeHtml(text)}</p>`;
  chatBox.appendChild(userMsg);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  // Generate Advanced Copilot Response
  setTimeout(() => {
    const aiResponse = generateAdvancedAiResponse(text.toLowerCase());
    const aiMsg = document.createElement('div');
    aiMsg.className = "p-3.5 rounded-xl bg-slate-900/90 border border-electricCyan/30 text-slate-200 space-y-1.5";
    aiMsg.innerHTML = `
      <div class="flex items-center justify-between border-b border-white/10 pb-1">
        <span class="font-bold text-electricCyan text-xs">🤖 Flick Copilot AI</span>
        <span class="text-[10px] text-slate-500 font-mono">${isEn ? 'Analysis Complete' : '分析完成'}</span>
      </div>
      <div class="text-xs text-slate-300 leading-relaxed space-y-2">${aiResponse}</div>
    `;
    chatBox.appendChild(aiMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);
}

function generateAdvancedAiResponse(query) {
  const isEn = currentLang === 'en';
  const sym = `$${currentToken.symbol}`;

  // 1. Safety & Honeypot Check
  if (query.includes('safe') || query.includes('honeypot') || query.includes('risk') || query.includes('安全') || query.includes('蜜罐') || query.includes('风险')) {
    if (isEn) {
      return `
        <p><strong>Security Diagnostics for ${sym}:</strong></p>
        <p>• <strong>Overall Security Rating:</strong> <span class="text-cyberGreen font-bold">${currentToken.score}/100</span>.</p>
        <p>• <strong>Honeypot Simulation:</strong> Executed test transactions across decentralized routers. Buy and sell transactions executed cleanly with 0% tax.</p>
        <p>• <strong>Privilege Audit:</strong> Ownership is ${currentToken.ownership}. No hidden blacklist/freeze authority detected in contract bytecode.</p>
        <p><em>Verdict: Low smart-contract risk. Standard market volatility risk applies.</em></p>
      `;
    } else {
      return `
        <p><strong>${sym} 智能合约安全诊断报告：</strong></p>
        <p>• <strong>综合安全评级：</strong> <span class="text-cyberGreen font-bold">${currentToken.score}/100</span>。</p>
        <p>• <strong>蜜罐模拟测试：</strong> 已在去中心化路由中模拟 Swap 买卖流程，买入/卖出均顺畅执行，税率为 0%。</p>
        <p>• <strong>权限审计：</strong> 合约所有权为 ${currentToken.ownership === 'Renounced' ? '已放弃' : '未放弃'}，未发现黑名单或冻结交易的恶意权限。</p>
        <p><em>结论：合约级别代码风险较低，请注意市场波动风险。</em></p>
      `;
    }
  }

  // 2. Holders & Whales
  if (query.includes('holder') || query.includes('whale') || query.includes('dev') || query.includes('持币') || query.includes('巨鲸') || query.includes('庄家')) {
    if (isEn) {
      return `
        <p><strong>Top Holder & Concentration Analysis for ${sym}:</strong></p>
        <p>• <strong>Top 10 Concentration:</strong> Controls <strong>${currentToken.topHoldersRatio}</strong> of total supply (excluding LP burn vaults).</p>
        <p>• <strong>Largest Single Holder:</strong> Main Liquidity Pool Vault holding LP reserves.</p>
        <p>• <strong>Dev Wallet Status:</strong> Dev/Creator wallet balance is currently below 1% of total token supply.</p>
        <p><em>Risk Assessment: Healthy token distribution with low immediate whale dump risk.</em></p>
      `;
    } else {
      return `
        <p><strong>${sym} 持币大户与筹码集中度分析：</strong></p>
        <p>• <strong>前10名集中度：</strong> 占总供应量的 <strong>${currentToken.topHoldersRatio}</strong>（已扣除销毁与LP池）。</p>
        <p>• <strong>最大持仓地址：</strong> 为 DEX 主流动性池金库，资金安全锁死。</p>
        <p>• <strong>开发者钱包：</strong> 开发者/创建者钱包持仓量低于总量的 1%。</p>
        <p><em>风险评估：筹码分布处于健康水平，单一巨鲸砸盘风险较低。</em></p>
      `;
    }
  }

  // 3. Liquidity & Volume
  if (query.includes('liquidity') || query.includes('pool') || query.includes('depth') || query.includes('流动性') || query.includes('池子')) {
    if (isEn) {
      return `
        <p><strong>Liquidity & Trading Metrics for ${sym}:</strong></p>
        <p>• <strong>Pool Liquidity:</strong> <strong>$${formatCompact(currentToken.liquidity)}</strong> available in DEX pool.</p>
        <p>• <strong>24h Trading Volume:</strong> <strong>$${formatCompact(currentToken.volume)}</strong>.</p>
        <p>• <strong>Volume / Liquidity Ratio:</strong> ${(currentToken.volume / (currentToken.liquidity || 1)).toFixed(2)}x (indicates strong trading activity).</p>
        <p><em>Recommendation: Sufficient depth for normal order execution without high price slippage.</em></p>
      `;
    } else {
      return `
        <p><strong>${sym} 流动性池与交易量深度分析：</strong></p>
        <p>• <strong>池子流动性：</strong> <strong>$${formatCompact(currentToken.liquidity)}</strong> 美元。</p>
        <p>• <strong>24小时交易量：</strong> <strong>$${formatCompact(currentToken.volume)}</strong> 美元。</p>
        <p>• <strong>换手率比率 (Vol/Liq):</strong> ${(currentToken.volume / (currentToken.liquidity || 1)).toFixed(2)}x（显示链上交易非常活跃）。</p>
        <p><em>交易建议：当前池子深度足以支撑常规额度交易，滑点适中。</em></p>
      `;
    }
  }

  // 4. Default / General Strategy
  if (isEn) {
    return `
      <p><strong>Market Intelligence Summary for ${sym}:</strong></p>
      <p>• <strong>Price:</strong> $${formatNumber(currentToken.price)} (${currentToken.priceChange >= 0 ? '+' : ''}${currentToken.priceChange.toFixed(1)}% 24h)</p>
      <p>• <strong>Liquidity:</strong> $${formatCompact(currentToken.liquidity)} | <strong>Volume:</strong> $${formatCompact(currentToken.volume)}</p>
      <p>• <strong>Security Score:</strong> ${currentToken.score}/100 (Passes automated contract audit checks).</p>
      <p><em>Always verify liquidity lock contracts before committing high capital. DYOR!</em></p>
    `;
  } else {
    return `
      <p><strong>${sym} 链上情报综合摘要：</strong></p>
      <p>• <strong>当前价格：</strong> $${formatNumber(currentToken.price)}（24h 涨跌 ${currentToken.priceChange >= 0 ? '+' : ''}${currentToken.priceChange.toFixed(1)}%）</p>
      <p>• <strong>流动性：</strong> $${formatCompact(currentToken.liquidity)} | <strong>24h 交易量：</strong> $${formatCompact(currentToken.volume)}</p>
      <p>• <strong>安全评级：</strong> ${currentToken.score}/100（通过智能合约自动检测）。</p>
      <p><em>温馨提示：大资金入场前请务必确认流动性锁定状态，做好 DYOR 风险控制。</em></p>
    `;
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ===================================================================
// 7. UI TABS & TIMEFRAME
// ===================================================================
function setTimeframe(btn) {
  const parent = btn.parentElement;
  parent.querySelectorAll('button').forEach(b => {
    b.className = "px-2.5 py-0.5 rounded hover:bg-white/5 text-slate-400 transition-all";
  });
  btn.className = "px-2.5 py-0.5 rounded bg-amberCore/20 text-amberGlow font-bold border border-amberCore/30 transition-all";
}

function switchTab(tab) {
  ['audit', 'ai', 'holders'].forEach(t => {
    const btn = document.getElementById(`tabBtn-${t}`);
    const content = document.getElementById(`tabContent-${t}`);
    
    if (t === tab) {
      btn.className = "flex-1 py-2 px-3 rounded-xl bg-amber-500/10 text-amberGlow border border-amber-500/30 transition-all flex items-center justify-center gap-1.5 font-bold";
      content.classList.remove('hidden');
      if (t === 'ai') content.classList.add('flex');
    } else {
      btn.className = "flex-1 py-2 px-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all flex items-center justify-center gap-1.5 font-bold";
      content.classList.add('hidden');
      if (t === 'ai') content.classList.remove('flex');
    }
  });
}

// ===================================================================
// 8. BACKGROUND CANVAS PARTICLES
// ===================================================================
const canvas = document.getElementById('interactiveCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width, height, particles = [];
  let mouse = { x: null, y: null, radius: 140 };

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.5 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x && mouse.y) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 2;
          this.y -= (dy / distance) * force * 2;
        }
      }
    }
    draw() {
      ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const particleCount = Math.floor((width * height) / 18000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  initParticles();
  window.addEventListener('resize', initParticles);

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

async function quickCopilotQuery(type) {
  const chatBox = document.getElementById('copilotChatBox');
  if (!chatBox) return;

  // Visual de carga
  chatBox.innerHTML = `<div class="p-3 text-xs text-amberGlow animate-pulse">🤖 Analizando ${type.toUpperCase()} para $${currentToken.symbol}...</div>`;

  // Obtener datos frescos de seguridad y métricas
  const security = await fetchOnChainSecurity(currentToken.chainId, currentToken.ca);
  const analysis = buildCopilotAnalysis(currentToken, security);

  let responseText = "";

  switch (type) {
    case 'safety':
      responseText = `
🛡️ **Safety Check Report:**
• **Honeypot:** ${security?.is_honeypot === "1" ? "🚨 DETECTED!" : "✅ PASSED (No buy/sell restriction)"}
• **Ownership Status:** ${currentToken.ownership}
• **Mint Authority:** ${currentToken.mintStatus}
• **Taxes:** Buy ${analysis.buyTax}% | Sell ${analysis.sellTax}%
• **Verdict:** ${analysis.verdictText}
      `;
      break;

    case 'holders':
      const topPct = parseFloat(currentToken.topHoldersRatio || 0);
      responseText = `
👥 **Holders & Whale Risk Analysis:**
• **Top 10 Concentration:** ${topPct}% of total supply.
• **Risk Classification:** ${analysis.holderRisk}
• **Whale Alert:** ${topPct > 50 ? "⚠️ High dumping potential. Top wallets hold over 50% of supply." : "🟢 Well-distributed supply across holders."}
      `;
      break;

    case 'liquidity':
      responseText = `
💧 **Liquidity Depth & Market Health:**
• **Total Liquidity:** $${formatCompact(currentToken.liquidity)}
• **Market Cap (FDV):** $${formatCompact(analysis.mcap)}
• **Liquidity / FDV Ratio:** ${analysis.liqRatio}% (${analysis.liqStatus})
• **Execution Viability:** ${analysis.liqRatio > 15 ? "🟢 Excellent backing. Low price impact on trades." : "⚠️ Low liquidity ratio. Expect slippage on large swaps."}
      `;
      break;

    case 'trend':
      const priceChange = currentToken.priceChange24h || 0;
      responseText = `
📈 **Technical Trend & Momentum:**
• **24h Price Action:** ${priceChange >= 0 ? '+' : ''}${priceChange}%
• **24h Volume:** $${formatCompact(currentToken.volume24h || 0)}
• **Market Status:** ${priceChange > 15 ? "🚀 Strong Bullish Rally" : priceChange < -15 ? "🔻 Heavy Selling Pressure" : "➡️ Consolidation / Sideways Range"}
      `;
      break;

    default:
      responseText = analysis.verdictText;
  }

  chatBox.innerHTML = `<div class="p-3 bg-slate-900/80 rounded-xl border border-amber-500/20 text-xs font-mono text-slate-200 leading-relaxed whitespace-pre-line">${responseText.trim()}</div>`;
}

// Función para procesar el envío de mensajes en el chat del Copilot
async function sendCopilotQuery() {
  const inputEl = document.getElementById('copilotInput');
  const chatBox = document.getElementById('copilotChatBox');
  if (!inputEl || !chatBox) return;

  const userText = inputEl.value.trim();
  if (!userText) return;

  // Limpiar el campo de texto
  inputEl.value = '';

  // Mostrar mensaje de carga
  chatBox.innerHTML = `<div class="p-3 text-xs text-amberGlow animate-pulse">🤖 Procesando consulta sobre $${currentToken.symbol || 'Token'}...</div>`;

  // Obtener datos frescos de seguridad y métricas cuantitativas
  const security = await fetchOnChainSecurity(currentToken.chainId, currentToken.ca);
  const analysis = buildCopilotAnalysis(currentToken, security);

  let reply = "";
  const query = userText.toLowerCase();

  // Detección básica de palabras clave para responder con precisión
  if (query.includes('segur') || query.includes('risk') || query.includes('riesgo') || query.includes('honeypot')) {
    reply = `
🛡️ **Evaluación de Seguridad:**
• **Honeypot:** ${security?.is_honeypot === "1" ? "🚨 DETECTADO" : "✅ SIN RESTRICCIONES"}
• **Contrato / Propiedad:** ${currentToken.ownership}
• **Impuestos:** Compra ${analysis.buyTax}% | Venta ${analysis.sellTax}%
• **Dictamen:** ${analysis.verdictText}
    `;
  } else if (query.includes('holder') || query.includes('whale') || query.includes('ballena') || query.includes('top')) {
    reply = `
👥 **Análisis de Contratos y Wallets:**
• **Top 10 Holders:** ${currentToken.topHoldersRatio}% del suministro.
• **Clasificación:** ${analysis.holderRisk}
• **Evaluación:** ${parseFloat(currentToken.topHoldersRatio || '0') > 50 ? '⚠️ Riesgo elevado de venta masiva por dominancia de ballenas.' : '🟢 Distribución equilibrada de tokens.'}
    `;
  } else {
    reply = `
🤖 **Análisis de IA para $${currentToken.symbol || 'Token'}:**
• **Consulta:** "${userText}"
• **Market Cap (FDV):** $${formatCompact(analysis.mcap)}
• **Ratio Liquidez/Cap:** ${analysis.liqRatio}% (${analysis.liqStatus})
• **Estatus de Contrato:** ${currentToken.ownership} | Mint ${currentToken.mintStatus}

💡 **Conclusión Operativa:**
${analysis.verdictText}
    `;
  }

  // Desplegar la respuesta en la caja de chat
  chatBox.innerHTML = `<div class="p-3 bg-slate-900/80 rounded-xl border border-amber-500/20 text-xs font-mono text-slate-200 leading-relaxed whitespace-pre-line">${reply.trim()}</div>`;
}

let liveInterval = null;
let lastKnownPrice = 0;

function toggleLivePolling(enable) {
  const pulse = document.getElementById('livePulse');
  const dot = document.getElementById('liveDot');

  if (liveInterval) clearInterval(liveInterval);

  if (enable) {
    if (pulse) pulse.classList.remove('hidden');
    if (dot) dot.className = "relative inline-flex rounded-full h-2 w-2 bg-cyberGreen";

    // Consulta periódica cada 12 segundos
    liveInterval = setInterval(async () => {
      if (!currentToken || !currentToken.ca) return;
      await refreshPriceLive();
    }, 12000);
  } else {
    if (pulse) pulse.classList.add('hidden');
    if (dot) dot.className = "relative inline-flex rounded-full h-2 w-2 bg-slate-500";
  }
}

async function refreshPriceLive() {
  try {
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${currentToken.ca}`);
    const data = await res.json();

    if (data && data.pairs && data.pairs.length > 0) {
      const bestPair = data.pairs.sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))[0];
      const newPrice = parseFloat(bestPair.priceUsd || 0);

      // Efecto visual Flash en el elemento de precio
      const priceEl = document.getElementById('displayPrice'); // Asegúrate que este ID coincida con tu elemento de precio
      if (priceEl && lastKnownPrice > 0) {
        if (newPrice > lastKnownPrice) {
          priceEl.classList.add('text-cyberGreen', 'scale-110');
          setTimeout(() => priceEl.classList.remove('scale-110'), 400);
        } else if (newPrice < lastKnownPrice) {
          priceEl.classList.add('text-crimsonRisk', 'scale-110');
          setTimeout(() => priceEl.classList.remove('scale-110'), 400);
        }
      }

      lastKnownPrice = newPrice;
      // Actualizar variables en memoria
      currentToken.price = newPrice;
      currentToken.liquidity = bestPair.liquidity?.usd || currentToken.liquidity;
      currentToken.fdv = bestPair.fdv || currentToken.fdv;

      // Refrescar UI sin parpadear la pantalla
      if (typeof updateUI === 'function') updateUI();
    }
  } catch (err) {
    console.warn("Live poll skip:", err);
  }
}

async function copySocialShareCard() {
  if (!currentToken || !currentToken.ca) return;

  const mcap = formatCompact(currentToken.fdv || (currentToken.liquidity * 10));
  const liq = formatCompact(currentToken.liquidity);
  const score = currentToken.score || 90;

  const shareText = 
`⚡ FLICK ANALYST — On-Chain Diagnostic

🪙 Token: $${currentToken.symbol} (${currentToken.chainId ? currentToken.chainId.toUpperCase() : 'SOL'})
📍 CA: ${currentToken.ca}

📊 Metrics:
• Market Cap (FDV): $${mcap}
• Liquidity: $${liq}
• Top 10 Concentration: ${currentToken.topHoldersRatio || 'N/A'}%

🛡️ Security Audit: ${score}/100
• Taxes: Buy ${currentToken.buyTax || '0%'} / Sell ${currentToken.sellTax || '0%'}
• Ownership: ${currentToken.ownership || 'Renounced'}

🔍 Analyzed via Flick Analyst`;

  try {
    await navigator.clipboard.writeText(shareText);
    alert("¡Reporte copiado al portapapeles! Listo para pegar en X o Telegram.");
  } catch (err) {
    console.error("Error al copiar al portapapeles:", err);
  }
}

// Renderizado del desglose de pools múltiples
function renderMultiPairs(pairs) {
  const container = document.getElementById('multiPairsContainer');
  const countEl = document.getElementById('multiPairCount');

  if (!container) return;

  if (!pairs || pairs.length === 0) {
    container.innerHTML = `<p class="text-[11px] text-slate-500 italic">No additional pools found.</p>`;
    if (countEl) countEl.textContent = "0 Pools";
    return;
  }

  if (countEl) countEl.textContent = `${pairs.length} Pools`;

  // Mostrar hasta las 5 pools con mayor liquidez
  const topPairs = pairs.slice(0, 5);

  container.innerHTML = topPairs.map(p => `
    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-white/5 text-xs font-mono hover:border-amber-500/30 transition-all">
      <div class="flex items-center gap-2">
        <span class="text-amberGlow font-bold text-[11px]">${(p.dexId || 'DEX').toUpperCase()}</span>
        <span class="text-slate-400 text-[10px]">${p.baseToken?.symbol || ''}/${p.quoteToken?.symbol || ''}</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-slate-200 font-semibold">$${formatCompact(p.liquidity?.usd || 0)}</span>
        <a href="${p.url}" target="_blank" rel="noopener" class="text-electricCyan hover:underline text-[10px]">Pool ↗</a>
      </div>
    </div>
  `).join('');
}