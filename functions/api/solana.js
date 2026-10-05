/**
 * Cloudflare Pages Function: POST /api/solana   (JSON-RPC body)
 * Same-origin proxy to Solana RPC for the read-only calls app.js needs
 * (top holders, creator lookup). Public RPCs often reject requests coming
 * from web pages; from here they go out server-side.
 *
 * Optional: set SOLANA_RPC_URL in Cloudflare Pages → Settings → Variables
 * (e.g. a free Helius or QuickNode URL) for higher limits. Without it the
 * public endpoints below are tried in order.
 */
const PUBLIC_RPCS = ['https://solana-rpc.publicnode.com', 'https://api.mainnet-beta.solana.com'];
const ALLOWED = new Set([
  'getTokenSupply', 'getTokenLargestAccounts', 'getMultipleAccounts',
  'getSignaturesForAddress', 'getTransaction', 'getTokenAccountsByOwner'
]);

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: 'forbidden' }, 403);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }
  if (!body || body.jsonrpc !== '2.0' || !ALLOWED.has(body.method) || !Array.isArray(body.params) || JSON.stringify(body).length > 4000) {
    return json({ error: 'bad_request' }, 400);
  }

  const upstreams = [env.SOLANA_RPC_URL, ...PUBLIC_RPCS].filter(Boolean);
  for (const url of upstreams) {
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) continue; // 403 / 429 / 5xx → try the next endpoint
      const data = await res.json();
      if (data?.error && [-32005, -32429, 429, 403].includes(data.error.code)) continue; // rate limited
      return json(data);
    } catch {
      // network error → next endpoint
    }
  }
  return json({ jsonrpc: '2.0', id: body.id ?? 1, error: { code: -32000, message: 'All Solana RPC endpoints failed' } }, 502);
}
