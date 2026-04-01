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

  console.log('Webhook ricevuto da Sanity');

  await new Promise((resolve) => setTimeout(resolve, 5000));

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