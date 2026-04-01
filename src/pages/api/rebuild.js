const ALLOWED_TYPES = new Set(['siteSettings', 'homepage', 'room', 'amenity']);
const recentTransactions = new Map();

function seenRecently(transactionId) {
  if (!transactionId) return false;

  const now = Date.now();
  const ttlMs = 60_000;

  for (const [key, ts] of recentTransactions.entries()) {
    if (now - ts > ttlMs) {
      recentTransactions.delete(key);
    }
  }

  if (recentTransactions.has(transactionId)) {
    return true;
  }

  recentTransactions.set(transactionId, now);
  return false;
}

export async function POST({ request }) {
  const rebuildSecret = import.meta.env.REBUILD_SECRET;
  const deployHookUrl = import.meta.env.VERCEL_DEPLOY_HOOK_URL;

  if (!rebuildSecret || !deployHookUrl) {
    return new Response('Missing server env vars', { status: 500 });
  }

  const authorization = request.headers.get('authorization');
  if (authorization !== `Bearer ${rebuildSecret}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  let payload = {};
  try {
    payload = await request.json();
  } catch {
    payload = {};
  }

  const operation =
    payload?.operation ||
    request.headers.get('x-sanity-operation') ||
    request.headers.get('sanity-operation') ||
    '';

  const transactionId =
    payload?.transactionId ||
    request.headers.get('x-sanity-transaction-id') ||
    request.headers.get('sanity-transaction-id') ||
    '';

  const documentId = payload?._id || payload?.documentId || '';
  const documentType = payload?._type || payload?.documentType || '';

  if (seenRecently(transactionId)) {
    return new Response(JSON.stringify({ message: 'Ignored duplicate event' }), {
      status: 202,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (operation.toLowerCase() === 'delete') {
    return new Response(JSON.stringify({ message: 'Ignored delete event' }), {
      status: 202,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (documentId.startsWith('drafts.')) {
    return new Response(JSON.stringify({ message: 'Ignored draft event' }), {
      status: 202,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (documentType && !ALLOWED_TYPES.has(documentType)) {
    return new Response(JSON.stringify({ message: 'Ignored non-content type' }), {
      status: 202,
      headers: { 'content-type': 'application/json' },
    });
  }

  console.log('Webhook ricevuto da Sanity');

  const deployRes = await fetch(deployHookUrl, {
    method: 'POST',
  });

  if (!deployRes.ok) {
    return new Response('Deploy hook failed', { status: 502 });
  }

  return new Response(JSON.stringify({ message: 'Deploy avviato' }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}