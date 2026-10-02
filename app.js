
let currentToken = 'BTC';
let currentLang = 'es';
let lastLiveData = null;
let lastSecurityData = null;
let isWalletConnected = false;

const i18n = {
    es: {
        headerSub: "Ecosistema Ember • Multicadena",
        nodeStatus: "Sistema: <strong class=\"text-white\">100% Operativo</strong>",
        connectWallet: "Conectar Wallet",
        heroTitle: 'Auditoría Inteligente de Tokens <span class="gradient-text-ember">Multicadena</span>',
        heroSub: 'Escanea cualquier Dirección de Contrato (CA) para obtener auditorías de seguridad en tiempo real, análisis de liquidez y proyecciones impulsadas por la IA de Flick.',
        searchPlaceholder: 'Pega la dirección del contrato (CA) o el nombre del token...',
        auditBtn: 'Auditar',
        quickLabel: 'Rápidos:',
        verifiedText: 'Verificado',
        scoreLabel: 'Puntaje de Seguridad',
        badgeMint: 'MINT AUTHORITY',
        badgeFreeze: 'FREEZE AUTHORITY',
        badgeLp: 'LIQUIDEZ POOL',
        badgeHoneypot: 'HONEYPOT CHECK',
        revoked: 'Revocada',
        locked100: '100% Bloqueada',
        clean: 'Limpio',
        aiReportTitle: 'Dictamen de Inteligencia Flick AI',
        chartTitle: 'Evolución de Precio:',
        currPriceLabel: 'Precio Actual',
        metricsTitle: 'Métricas del Pool',
        lblPriceEmber: 'Cotización ($EMBER)',
        lblPriceUsd: 'Precio Ref. USD',
        lblLiq: 'Liquidez Pool',
        lblVol: 'Volumen 24 Horas',
        lblMcap: 'Market Cap',
        lblTierTitle: 'Nivel de Usuario',
        lblTierVal: 'Tier 2 • Acceso Fuego',
        lblTierActive: 'Activo',
        copilotTitle: 'Copiloto Flick AI',
        chatWelcome: '¡Hola! Soy el analista de riesgo de Flick. Puedes preguntarme sobre el token actual, comparar paridades $FLICK/$EMBER o pedirme proyecciones de volumen.',
        promptSafe: '¿Por qué es seguro?',
        promptLiq: 'Liquidez',
        promptWhySafe: '¿Por qué es seguro FLICK/EMBER?',
        promptLiquidity: '¿Cuál es la liquidez actual?',
        chatPlaceholder: 'Haz una pregunta a Flick AI...',
        footerText: 'Flick AI Analyst • Ecosistema $FLICK / $EMBER',
        footerSub: 'Web3 Autonomous Intelligence • Multi-Chain & Liquidity Integration',
        copiedAlert: 'Dirección de Contrato copiada al portapapeles: ',
        invalidSymbolAlert: 'Por favor introduce un símbolo válido o una dirección de contrato válida.'
    },
    en: {
        headerSub: "Ember Ecosystem • Multi-Chain",
        nodeStatus: "System: <strong class=\"text-white\">100% Operational</strong>",
        connectWallet: "Connect Wallet",
        heroTitle: 'Smart Token Audit for <span class="gradient-text-ember">Multichain</span>',
        heroSub: 'Scan any Contract Address (CA) across any blockchain for real-time security audits, liquidity analysis, and AI-powered projections by Flick.',
        searchPlaceholder: 'Paste contract address (CA) or token name...',
        auditBtn: 'Audit',
        quickLabel: 'Quick:',
        verifiedText: 'Verified',
        scoreLabel: 'Security Score',
        badgeMint: 'MINT AUTHORITY',
        badgeFreeze: 'FREEZE AUTHORITY',
        badgeLp: 'POOL LIQUIDITY',
        badgeHoneypot: 'HONEYPOT CHECK',
        revoked: 'Revoked',
        locked100: '100% Locked',
        clean: 'Clean',
        aiReportTitle: 'Flick AI Intelligence Report',
        chartTitle: 'Price Action:',
        currPriceLabel: 'Current Price',
        metricsTitle: 'Pool Metrics',
        lblPriceEmber: 'Quote ($EMBER)',
        lblPriceUsd: 'USD Ref. Price',
        lblLiq: 'Pool Liquidity',
        lblVol: '24h Volume',
        lblMcap: 'Market Cap',
        lblTierTitle: 'User Tier',
        lblTierVal: 'Tier 2 • Fire Access',
        lblTierActive: 'Active',
        copilotTitle: 'Flick AI Copilot',
        chatWelcome: 'Hello! I am Flick\'s risk analyst. Ask me about the current token, compare $FLICK/$EMBER pairs, or request volume projections.',
        promptSafe: 'Why is it safe?',
        promptLiq: 'Liquidity',
        promptWhySafe: 'Why is FLICK/EMBER safe?',
        promptLiquidity: 'What is the current liquidity?',
        chatPlaceholder: 'Ask Flick AI a question...',
        footerText: 'Flick AI Analyst • $FLICK / $EMBER Ecosystem',
        footerSub: 'Web3 Autonomous Intelligence • Multi-Chain & Liquidity Integration',
        copiedAlert: 'Contract Address copied to clipboard: ',
        invalidSymbolAlert: 'Please enter a valid ticker or contract address.'
    },
    ja: {
        headerSub: "Emberエコシステム • マルチチェーン",
        nodeStatus: "システム: <strong class=\"text-white\">100% 正常稼働</strong>",
        connectWallet: "ウォレット接続",
        heroTitle: 'マルチチェーン対応 <span class="gradient-text-ember">AIトークン監査</span>',
        heroSub: 'あらゆるブロックチェーンのコントラクトアドレス(CA)をスキャンし、リアルタイムセキュリティ監査、流動性解析、Flick AI予測を実行します。',
        searchPlaceholder: 'コントラクトアドレス(CA)または名称を入力...',
        auditBtn: '監査実行',
        quickLabel: 'クイック:',
        verifiedText: '検証済み',
        scoreLabel: '安全性スコア',
        badgeMint: 'MINT権限',
        badgeFreeze: 'FREEZE権限',
        badgeLp: 'プール流動性',
        badgeHoneypot: 'ハニーポット検証',
        revoked: '放棄済み',
        locked100: '100% ロック済み',
        clean: '問題なし',
        aiReportTitle: 'Flick AI 診断レポート',
        chartTitle: '価格推移:',
        currPriceLabel: '現在価格',
        metricsTitle: 'プールメトリクス',
        lblPriceEmber: '価格 ($EMBER)',
        lblPriceUsd: 'USD参考価格',
        lblLiq: 'プール流動性',
        lblVol: '24時間出来高',
        lblMcap: '時価総額',
        lblTierTitle: 'ユーザーティア',
        lblTierVal: 'ティア 2 • Fireアクセス',
        lblTierActive: 'アクティブ',
        copilotTitle: 'Flick AI コパイロット',
        chatWelcome: 'こんにちは！Flickリスクアナリストです。トークン詳細、$FLICK/$EMBERペアの分析、出来高予測などご質問ください。',
        promptSafe: 'なぜ安全なのか？',
        promptLiq: '流動性について',
        promptWhySafe: 'FLICK/EMBERが安全な理由は何ですか？',
        promptLiquidity: '現在の流動性はいくらですか？',
        chatPlaceholder: 'Flick AIに質問を入力...',
        footerText: 'Flick AI アナリスト • $FLICK / $EMBER エコシステム',
        footerSub: 'Web3 自律型AI • マルチチェーン統合',
        copiedAlert: 'コントラクトアドレスをクリップボードにコピーしました: ',
        invalidSymbolAlert: '有効なシンボルまたはコントラクトアドレスを入力してください。'
    }
};

const TOKEN_DATA = {
    'FLICK': {
        symbol: 'FLICK',
        pairName: 'SOL / USDC',
        ca: 'So11111111111111111111111111111111111111112',
        chainId: 'solana',
        pairAddress: '8sLbNZo1M3ipXxTZ2ar28A23GH4JwCeVvMv7Ju6wqMvg',
        priceEmber: '0.00142 EMBER',
        priceUsd: '$0.0482 USD',
        liquidity: '$142,500 USD',
        volume24h: '$38,900 USD',
        mcap: '$4.82M USD',
        score: 96,
        scoreText: {
            es: '96 / 100 • RIESGO MUY BAJO',
            en: '96 / 100 • VERY LOW RISK',
            ja: '96 / 100 • 極めて低リスク'
        },
        narrative: {
            es: 'El par <strong>$FLICK / $EMBER</strong> cuenta con parámetros de seguridad óptimos. Las funciones críticas de contrato han sido irrevocablemente destruidas.',
            en: 'The <strong>$FLICK / $EMBER</strong> pair exhibits optimal security parameters. Critical contract authorities have been irrevocably revoked.',
            ja: '<strong>$FLICK / $EMBER</strong>ペアは最適なセキュリティパラメータを提示しています。'
        }
    },
    'SOL': {
        symbol: 'SOL',
        pairName: 'SOL / USDC',
        ca: 'So11111111111111111111111111111111111111112',
        chainId: 'solana',
        pairAddress: '8sLbNZo1M3ipXxTZ2ar28A23GH4JwCeVvMv7Ju6wqMvg',
        priceEmber: '4,150.00 EMBER',
        priceUsd: '$142.50 USD',
        liquidity: '$85.2M USD',
        volume24h: '$420.5M USD',
        mcap: '$66.8B USD',
        score: 99,
        scoreText: {
            es: '99 / 100 • ACTIVO NATIVO',
            en: '99 / 100 • NATIVE ASSET',
            ja: '99 / 100 • ネイティブ資産'
        },
        narrative: {
            es: 'Activo con la máxima puntuación de confianza institucional.',
            en: 'Asset holding maximum institutional trust score.',
            ja: '最高レベルの機関投資家信頼度を獲得しています。'
        }
    }
};

// Función auxiliar para modificar texto sin romper JS si el elemento no existe en el HTML
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

function safeSetHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

window.addEventListener('load', () => {
    setLanguage('en');
    loadToken('FLICK');
});

// Función para inyectar el iframe de DexScreener
function loadChartIframe(chainId, pairAddress) {
    const container = document.getElementById('chart-container');
    if (!container) return;

    if (!chainId || !pairAddress) {
        container.innerHTML = `<div class="flex items-center justify-center h-full text-brand-darkText font-mono text-xs">Gráfico no disponible para este par</div>`;
        return;
    }

    container.innerHTML = `
        <iframe 
            src="https://dexscreener.com/${chainId}/${pairAddress}?embed=1&theme=dark&trades=0&info=0" 
            style="width: 100%; height: 100%; border: 0;"
            allow="clipboard-write">
        </iframe>
    `;
}

// Consultar la API de DexScreener en vivo
async function fetchTokenDataFromDexScreener(address) {
    try {
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
        const data = await res.json();
        
        if (!data.pairs || data.pairs.length === 0) return null;

        // Seleccionar el par con mayor liquidez en USD
        const pair = data.pairs.sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))[0];

        return {
            ca: address,
            symbol: pair.baseToken.symbol || 'TOKEN',
            pairName: `${pair.baseToken.symbol} / ${pair.quoteToken.symbol}`,
            priceNative: `${pair.priceNative || '0'} ${pair.quoteToken.symbol}`,
            priceUsd: pair.priceUsd ? `$${parseFloat(pair.priceUsd).toLocaleString('en-US', { maximumFractionDigits: 6 })}` : '$0.00',
            liquidity: pair.liquidity?.usd ? `$${Math.round(pair.liquidity.usd).toLocaleString('en-US')}` : '$0',
            volume24h: pair.volume?.h24 ? `$${Math.round(pair.volume.h24).toLocaleString('en-US')}` : '$0',
            mcap: pair.fdv ? `$${Math.round(pair.fdv).toLocaleString('en-US')}` : 'N/A',
            chainId: pair.chainId,
            pairAddress: pair.pairAddress
        };
    } catch (err) {
        console.error("Error al consultar DexScreener:", err);
        return null;
    }
}

// Mapeo de nombres de cadenas a IDs de GoPlus Security
const GOPLUS_CHAINS = {
    'ethereum': '1',
    'bsc': '56',
    'polygon': '137',
    'arbitrum': '42161',
    'optimism': '10',
    'avalanche': '43114',
    'base': '8453',
    'solana': 'solana'
};

// Función para consultar la seguridad del contrato en GoPlus
async function fetchGoPlusSecurity(chainId, ca) {
    try {
        const chainCode = GOPLUS_CHAINS[chainId] || chainId;
        let url = '';
        
        if (chainCode === 'solana') {
            url = `https://api.gopluslabs.io/api/v1/solana/token_security?contract_addresses=${ca}`;
        } else {
            url = `https://api.gopluslabs.io/api/v1/token_security/${chainCode}?contract_addresses=${ca}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        
        if (!data.result) return null;
        
        // GoPlus devuelve las claves en minúsculas
        const key = Object.keys(data.result).find(k => k.toLowerCase() === ca.toLowerCase());
        return key ? data.result[key] : null;
    } catch (err) {
        console.error("Error al consultar seguridad en GoPlus:", err);
        return null;
    }
}

// Diccionario de traducciones para la auditoría de seguridad
const SECURITY_I18N = {
    es: {
        noData: "INFORMACIÓN DE SEGURIDAD NO DISPONIBLE",
        noDataNarrative: "No se pudieron recuperar las métricas de auditoría para este contrato.",
        low: "RIESGO BAJO",
        mod: "RIESGO MODERADO",
        high: "ALTO RIESGO / POSIBLE HONEYPOT",
        detected: "¡DETECTADO!",
        clean: "Limpio",
        active: "Activa",
        revoked: "Revocada",
        intro: "Análisis de auditoría en vivo en tiempo real. ",
        danger: '<strong class="text-red-400">¡PELIGRO!</strong> Se detectaron restricciones para vender o código Honeypot. ',
        safe: "El token no presenta bloqueos de venta conocidos. ",
        taxes: (buy, sell) => `Impuesto de Compra: <strong>${buy.toFixed(1)}%</strong> | Impuesto de Venta: <strong>${sell.toFixed(1)}%</strong>.`
    },
    en: {
        noData: "SECURITY INFORMATION NOT AVAILABLE",
        noDataNarrative: "Could not retrieve security audit metrics for this contract.",
        low: "LOW RISK",
        mod: "MODERATE RISK",
        high: "HIGH RISK / POSSIBLE HONEYPOT",
        detected: "DETECTED!",
        clean: "Clean",
        active: "Active",
        revoked: "Revoked",
        intro: "Real-time live audit analysis. ",
        danger: '<strong class="text-red-400">WARNING!</strong> Sell restrictions or Honeypot code detected. ',
        safe: "No known sell restrictions detected. ",
        taxes: (buy, sell) => `Buy Tax: <strong>${buy.toFixed(1)}%</strong> | Sell Tax: <strong>${sell.toFixed(1)}%</strong>.`
    },
    ja: {
        noData: "セキュリティ情報利用不可",
        noDataNarrative: "このコントラクトの監査メトリクスを取得できませんでした。",
        low: "低リスク",
        mod: "中リスク",
        high: "高リスク / ハニーポットの可能性",
        detected: "検出！",
        clean: "正常",
        active: "有効",
        revoked: "放棄済み",
        intro: "リアルタイム監査分析。 ",
        danger: '<strong class="text-red-400">警告！</strong> 売却制限またはハニーポットコードが検出されました。 ',
        safe: "確認された売却制限はありません。 ",
        taxes: (buy, sell) => `購入税: <strong>${buy.toFixed(1)}%</strong> | 売却税: <strong>${sell.toFixed(1)}%</strong>.`
    }
};

function updateSecurityUI(securityData) {
    lastSecurityData = securityData;
    const t = SECURITY_I18N[currentLang] || SECURITY_I18N['en'];

    if (!securityData) {
        safeSetText('risk-score-badge', 'N/A');
        safeSetText('risk-score-text', t.noData);
        safeSetHTML('ai-narrative', t.noDataNarrative);
        return;
    }

    let score = 100;
    const isHoneypot = securityData.is_honeypot === "1" || securityData.cannot_sell_all === "1";
    const isMintable = securityData.is_mintable === "1" || securityData.mintable?.authority !== null;
    const buyTax = parseFloat(securityData.buy_tax || 0) * 100;
    const sellTax = parseFloat(securityData.sell_tax || 0) * 100;

    if (isHoneypot) score -= 80;
    if (isMintable) score -= 25;
    if (buyTax > 5 || sellTax > 5) score -= 15;
    if (buyTax > 15 || sellTax > 15) score -= 20;

    score = Math.max(0, Math.min(100, score));

    safeSetText('risk-score-badge', score);

    let statusLabel = t.low;
    if (score < 50) statusLabel = t.high;
    else if (score < 80) statusLabel = t.mod;

    safeSetText('risk-score-text', `${score} / 100 • ${statusLabel}`);

    // Actualizar Badges
    const honeypotBadge = document.querySelector('#badge-honeypot .val-text');
    if (honeypotBadge) honeypotBadge.innerText = isHoneypot ? t.detected : t.clean;

    const mintBadge = document.querySelector('#badge-mint .val-text');
    if (mintBadge) mintBadge.innerText = isMintable ? t.active : t.revoked;

    // Generar dictamen traducido
    let narrative = t.intro;
    if (isHoneypot) {
        narrative += t.danger;
    } else {
        narrative += t.safe;
    }
    narrative += t.taxes(buyTax, sellTax);

    safeSetHTML('ai-narrative', narrative);
}

function setLanguage(lang) {
    currentLang = lang;

    ['es', 'en', 'ja'].forEach(l => {
        const btn = document.getElementById(`lang-btn-${l}`);
        if (btn) {
            btn.className = l === lang 
                ? "px-2.5 py-1 rounded-lg bg-brand-amber text-black font-bold transition-all shadow-sm"
                : "px-2.5 py-1 rounded-lg text-brand-darkText hover:text-white transition-all";
        }
    });

    const dict = i18n[lang];

    safeSetText('i18n-header-sub', dict.headerSub);
    safeSetHTML('i18n-node-status', dict.nodeStatus);
    if (!isWalletConnected) safeSetText('wallet-text', dict.connectWallet);
    safeSetHTML('i18n-hero-title', dict.heroTitle);
    safeSetText('i18n-hero-sub', dict.heroSub);
    
    const caInput = document.getElementById('ca-input');
    if (caInput) caInput.placeholder = dict.searchPlaceholder;

    safeSetText('i18n-audit-btn', dict.auditBtn);
    safeSetText('i18n-quick-label', dict.quickLabel);
    safeSetText('i18n-verified-text', dict.verifiedText);
    safeSetText('i18n-score-label', dict.scoreLabel);
    
    safeSetText('i18n-badge-mint', dict.badgeMint);
    safeSetText('i18n-badge-freeze', dict.badgeFreeze);
    safeSetText('i18n-badge-lp', dict.badgeLp);
    safeSetText('i18n-badge-honeypot', dict.badgeHoneypot);

    safeSetText('i18n-ai-report-title', dict.aiReportTitle);
    safeSetText('i18n-chart-title', dict.chartTitle);
    safeSetText('i18n-curr-price-label', dict.currPriceLabel);
    
    safeSetText('i18n-metrics-title', `${dict.metricsTitle} (${TOKEN_DATA[currentToken]?.pairName || currentToken})`);
    safeSetText('i18n-lbl-price-ember', dict.lblPriceEmber);
    safeSetText('i18n-lbl-price-usd', dict.lblPriceUsd);
    safeSetText('i18n-lbl-liq', dict.lblLiq);
    safeSetText('i18n-lbl-vol', dict.lblVol);
    safeSetText('i18n-lbl-mcap', dict.lblMcap);

    safeSetText('i18n-lbl-tier-title', dict.lblTierTitle);
    safeSetText('i18n-lbl-tier-val', dict.lblTierVal);
    safeSetText('i18n-lbl-tier-active', dict.lblTierActive);

    safeSetText('i18n-copilot-title', dict.copilotTitle);
    safeSetText('i18n-chat-welcome', dict.chatWelcome);
    safeSetText('i18n-prompt-safe', dict.promptSafe);
    safeSetText('i18n-prompt-liq', dict.promptLiq);
    
    const chatField = document.getElementById('chat-input-field');
    if (chatField) chatField.placeholder = dict.chatPlaceholder;

    safeSetText('i18n-footer-text', dict.footerText);
    safeSetText('i18n-footer-sub', dict.footerSub);

    if (TOKEN_DATA[currentToken]) {
        loadToken(currentToken);
    }
    // Agregá esta línea al final dentro de la función setLanguage(lang):
    if (lastSecurityData) {
        updateSecurityUI(lastSecurityData);
    }
}

function loadToken(symbol) {

    lastSecurityData = null; // Reinicia el estado de auditoría en vivo al cargar un token estático
    const data = TOKEN_DATA[symbol] || TOKEN_DATA['FLICK'];
    currentToken = symbol;
    const dict = i18n[currentLang];

    safeSetText('token-title', data.pairName);
    safeSetText('chart-pair-label', data.pairName);
    safeSetText('i18n-metrics-title', `${dict.metricsTitle} (${data.pairName})`);
    
    const caElem = document.getElementById('token-ca-display');
    if (caElem && caElem.querySelector('span')) {
        caElem.querySelector('span').innerText = `CA: ${data.ca.substring(0, 6)}...${data.ca.substring(data.ca.length - 6)}`;
    }
    safeSetText('token-avatar', symbol.substring(0, 3));
    
    safeSetText('stat-price-ember', data.priceEmber);
    safeSetText('stat-price-usd', data.priceUsd);
    safeSetText('stat-liquidity', data.liquidity);
    safeSetText('stat-volume', data.volume24h);
    safeSetText('stat-mcap', data.mcap);

    if (data.scoreText && data.scoreText[currentLang]) safeSetText('risk-score-text', data.scoreText[currentLang]);
    if (data.narrative && data.narrative[currentLang]) safeSetHTML('ai-narrative', data.narrative[currentLang]);
    if (data.score) safeSetText('risk-score-badge', data.score);

    loadChartIframe(data.chainId, data.pairAddress);
    lastLiveData = null;
}

async function handleSearch(e) {
    if (e) e.preventDefault();
    
    const caInput = document.getElementById('ca-input');
    if (!caInput) return;
    
    const inputVal = caInput.value.trim();
    if (!inputVal) return;

    // Si es un token de la lista estática (ej: BTC, ETH)
    if (typeof TOKEN_DATA !== 'undefined' && TOKEN_DATA[inputVal.toUpperCase()]) {
        lastLiveData = null;
        loadToken(inputVal.toUpperCase());
        return;
    }

    const auditBtn = document.getElementById('i18n-audit-btn');
    const oldText = auditBtn ? auditBtn.innerText : '';
    if (auditBtn) auditBtn.innerText = '...';

    try {
        // 1. Obtener datos de mercado
        const liveData = await fetchTokenDataFromDexScreener(inputVal);

        if (liveData) {
            lastLiveData = liveData; // Guardar en estado global

            safeSetText('token-title', liveData.pairName);
            safeSetText('chart-pair-label', liveData.pairName);
            
            const caElem = document.getElementById('token-ca-display');
            if (caElem && caElem.querySelector('span')) {
                caElem.querySelector('span').innerText = `CA: ${liveData.ca.substring(0, 6)}...${liveData.ca.substring(liveData.ca.length - 6)}`;
            }
            
            safeSetText('token-avatar', liveData.symbol.substring(0, 3));
            safeSetText('stat-price-ember', liveData.priceNative);
            safeSetText('stat-price-usd', liveData.priceUsd);
            safeSetText('stat-liquidity', liveData.liquidity);
            safeSetText('stat-volume', liveData.volume24h);
            safeSetText('stat-mcap', liveData.mcap);

            if (typeof loadChartIframe === 'function') {
                loadChartIframe(liveData.chainId, liveData.pairAddress);
            }

            // 2. Obtener auditoría de GoPlus
            if (typeof fetchGoPlusSecurity === 'function') {
                const securityData = await fetchGoPlusSecurity(liveData.chainId, liveData.ca);
                updateSecurityUI(securityData);
            }

        } else {
            const errorMsg = (typeof i18n !== 'undefined' && i18n[currentLang]) 
                ? i18n[currentLang].invalidSymbolAlert 
                : 'Contrato o token no encontrado.';
                showToast(i18n[currentLang].invalidSymbolAlert, 'error');
        }
    } catch (err) {
        console.error("Error en handleSearch:", err);
        showToast(i18n[currentLang].invalidSymbolAlert, 'error');
    } finally {
        if (auditBtn) auditBtn.innerText = oldText;
    }
}

function copyCA() {
    const caElem = document.getElementById('token-ca-display');
    const ca = lastLiveData ? lastLiveData.ca : (TOKEN_DATA[currentToken]?.ca || '');
    if (!ca) return;
    
    navigator.clipboard.writeText(ca);
    showToast(`${i18n[currentLang].copiedAlert} ${ca.substring(0, 6)}...${ca.substring(ca.length - 4)}`, 'success');
}
function handleChatSubmit(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('chat-input-field');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    addChatMessage('user', text);
    input.value = '';

    setTimeout(() => {
        let response = '';
        const lower = text.toLowerCase();

        // 1. Datos en vivo o por defecto del token activo
        const symbol = lastLiveData ? lastLiveData.symbol : currentToken;
        const price = lastLiveData ? lastLiveData.priceUsd : (TOKEN_DATA[currentToken]?.priceUsd || '$0.00');
        const liquidity = lastLiveData ? lastLiveData.liquidity : (TOKEN_DATA[currentToken]?.liquidity || '$0');
        const volume = lastLiveData ? lastLiveData.volume24h : (TOKEN_DATA[currentToken]?.volume24h || '$0');
        const mcap = lastLiveData ? lastLiveData.mcap : (TOKEN_DATA[currentToken]?.mcap || 'N/A');

        // 2. Datos de seguridad
        const isHoneypot = lastSecurityData ? (lastSecurityData.is_honeypot === "1" || lastSecurityData.cannot_sell_all === "1") : false;
        const buyTax = lastSecurityData ? (parseFloat(lastSecurityData.buy_tax || 0) * 100).toFixed(1) : '0.0';
        const sellTax = lastSecurityData ? (parseFloat(lastSecurityData.sell_tax || 0) * 100).toFixed(1) : '0.0';

        // 3. Lógica por idioma con palabras clave ampliadas
        if (currentLang === 'es') {
            const isSecurityQuery = ['seguro', 'riesgo', 'auditor', 'seguridad', 'impuesto', 'impuestos', 'tax', 'taxes', 'honeypot', 'fee', 'fees'].some(w => lower.includes(w));
            const isMetricsQuery = ['liquidez', 'mcap', 'volumen', 'precio', 'price', 'market cap', 'cap'].some(w => lower.includes(w));

            if (isSecurityQuery) {
                if (isHoneypot) {
                    response = `⚠️ ¡Atención! El contrato de **${symbol}** presenta alto riesgo o comportamiento Honeypot. Impuestos: Compra ${buyTax}% / Venta ${sellTax}%. No recomiendo operar este activo.`;
                } else {
                    response = `El token **${symbol}** parece estar libre de Honeypot. Registra un impuesto de compra del ${buyTax}% y de venta del ${sellTax}%.`;
                }
            } else if (isMetricsQuery) {
                response = `Métricas actuales para **${symbol}**: Precio en ${price}, Liquidez total de ${liquidity}, Volumen 24h de ${volume} y Market Cap de ${mcap}.`;
            } else {
                response = `Estoy listo para analizar **${symbol}**. Cotiza en ${price} con una liquidez en pool de ${liquidity}. Podés preguntarme sobre su seguridad, impuestos o volumen.`;
            }
        } else if (currentLang === 'en') {
            const isSecurityQuery = ['safe', 'risk', 'audit', 'security', 'tax', 'taxes', 'fee', 'fees', 'honeypot'].some(w => lower.includes(w));
            const isMetricsQuery = ['liquidity', 'mcap', 'volume', 'price', 'market cap', 'cap'].some(w => lower.includes(w));

            if (isSecurityQuery) {
                if (isHoneypot) {
                    response = `⚠️ Warning! **${symbol}** contract shows high risk or Honeypot behavior. Taxes: Buy ${buyTax}% / Sell ${sellTax}%. Proceed with extreme caution.`;
                } else {
                    response = `**${symbol}** contract shows no Honeypot mechanisms. Buy tax is ${buyTax}% and Sell tax is ${sellTax}%.`;
                }
            } else if (isMetricsQuery) {
                response = `Live metrics for **${symbol}**: Price ${price}, Pool Liquidity ${liquidity}, 24h Volume ${volume}, and Market Cap ${mcap}.`;
            } else {
                response = `I'm ready to analyze **${symbol}**. Currently trading at ${price} with ${liquidity} in liquidity. Feel free to ask about its security, taxes, or volume.`;
            }
        } else if (currentLang === 'ja') {
            const isSecurityQuery = ['安全', 'リスク', '監査', 'セキュリティ', '税', 'ハニーポット'].some(w => lower.includes(w));
            const isMetricsQuery = ['流動性', '価格', '出来高', '時価総額'].some(w => lower.includes(w));

            if (isSecurityQuery) {
                if (isHoneypot) {
                    response = `⚠️ 警告！**${symbol}** はハニーポットリスクが検出されました。購入税: ${buyTax}% / 売却税: ${sellTax}%。`;
                } else {
                    response = `**${symbol}** のコントラクトはハニーポットが検出されていません。購入税: ${buyTax}% / 売却税: ${sellTax}% です。`;
                }
            } else if (isMetricsQuery) {
                response = `**${symbol}** の現在価格は ${price}、流動性は ${liquidity}、24時間出来高は ${volume} です。`;
            } else {
                response = `**${symbol}** の分析準備ができました。現在価格: ${price}、流動性: ${liquidity} です。`;
            }
        }

        addChatMessage('ai', response);
    }, 600);
}

function sendQuickPrompt(promptText) {
    const field = document.getElementById('chat-input-field');
    if (field) {
        field.value = promptText;
        handleChatSubmit(null);
    }
}

function addChatMessage(sender, text) {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    
    const msgDiv = document.createElement('div');
    const userLabel = currentLang === 'es' ? 'Tú' : currentLang === 'en' ? 'You' : 'あなた';

    if (sender === 'user') {
        msgDiv.className = 'p-3 rounded-xl bg-brand-amber/20 border border-brand-amber/30 text-white space-y-1 ml-4';
        msgDiv.innerHTML = `<div class="text-[10px] text-brand-gold font-bold font-mono">${userLabel}</div><p>${text}</p>`;
    } else {
        msgDiv.className = 'p-3 rounded-xl bg-black/60 border border-brand-border/20 text-brand-lightText space-y-1 mr-4';
        msgDiv.innerHTML = `<div class="text-[10px] text-brand-gold font-bold font-mono flex items-center gap-1"><i class="fa-solid fa-robot"></i> Flick AI</div><p>${text}</p>`;
    }

    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    
    // Configuración de colores e íconos según el tipo de notificación
    let borderClass = 'border-brand-border/60 bg-black/80';
    let icon = 'fa-circle-info text-brand-gold';

    if (type === 'success') {
        borderClass = 'border-emerald-500/50 bg-black/90';
        icon = 'fa-circle-check text-emerald-400';
    } else if (type === 'error') {
        borderClass = 'border-red-500/50 bg-black/90';
        icon = 'fa-triangle-exclamation text-red-400';
    }

    toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border ${borderClass} backdrop-blur-md text-white text-xs font-mono shadow-2xl transition-all duration-300 transform translate-y-3 opacity-0`;
    toast.innerHTML = `<i class="fa-solid ${icon} text-sm"></i> <span>${message}</span>`;

    container.appendChild(toast);

    // Animar entrada
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-3', 'opacity-0');
    });

    // Ocultar y remover automáticamente tras 3.5 segundos
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-3');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}