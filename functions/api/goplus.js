/**
 * Cloudflare Pages Function: GET /api/goplus?chain=<id>&address=<ca>
 * Same-origin proxy to the GoPlus token security API, used by app.js when the
 * browser can't call GoPlus directly. Responses are cached for 5 minutes.
 */
const GOPLUS_API = 'https://api.gopluslabs.io/api/v1';
const EVM_CHAINS = new Set(['1', '56', '8453', '42161', '137', '10', '43114']);
const EVM_RE = /^0x[a-fA-F0-9]{40}$/;
const SOL_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

const json = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...extra }
  });

export async function onRequestGet({ request }) {
  const params = new URL(request.url).searchParams;
  const chain = params.get('chain') || '';
  const address = params.get('address') || '';

  let upstream;
  if (chain === 'solana' && SOL_RE.test(address)) {
    upstream = `${GOPLUS_API}/solana/token_security?contract_addresses=${address}`;
  } else if (EVM_CHAINS.has(chain) && EVM_RE.test(address)) {
    upstream = `${GOPLUS_API}/token_security/${chain}?contract_addresses=${address}`;
  } else {
    return json({ code: 0, message: 'Invalid chain or address' }, 400);
  }

  try {
    const res = await fetch(upstream, {
      headers: { accept: 'application/json' },
      cf: { cacheTtl: 300, cacheEverything: true }
    });
    if (!res.ok) return json({ code: 0, message: `GoPlus HTTP ${res.status}` }, 502);
    const data = await res.json();
    return json(data, 200, { 'cache-control': 'public, max-age=300' });
  } catch (err) {
    return json({ code: 0, message: 'GoPlus unreachable' }, 502);
  }
}
