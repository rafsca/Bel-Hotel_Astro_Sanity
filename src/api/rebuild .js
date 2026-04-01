export default async function handler(req, res) {
  const rebuildSecret = process.env.REBUILD_SECRET;
  const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;

  if (!rebuildSecret || !deployHookUrl) {
    return res.status(500).end("Missing server env vars");
  }

    if (req.headers.authorization !== `Bearer ${rebuildSecret}`) {
        return res.status(401).end("Unauthorized");
    }
  console.log("Webhook ricevuto da Sanity");

  // ⏱️ aspetta 5 secondi
  await new Promise(resolve => setTimeout(resolve, 5000));

  // 🔁 chiama il deploy hook di Vercel
  await fetch(deployHookUrl, {
    method: "POST"
  });

  res.status(200).json({ message: "Deploy avviato" });
}