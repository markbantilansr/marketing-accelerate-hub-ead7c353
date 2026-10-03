// Tiny static file server for Node.js hosts (e.g. Hostinger Node.js apps).
// Serves the prerendered site from dist/client.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "dist", "client");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".woff2": "font/woff2",
};

async function resolveFile(urlPath) {
  const safe = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const candidates = [join(root, safe), join(root, safe, "index.html")];
  for (const file of candidates) {
    if (!file.startsWith(root)) continue;
    try {
      if ((await stat(file)).isFile()) return file;
    } catch {}
  }
  return join(root, "index.html");
}

createServer(async (req, res) => {
  try {
    const file = await resolveFile(new URL(req.url ?? "/", "http://x").pathname);
    const body = await readFile(file);
    const type = types[extname(file)] ?? "application/octet-stream";
    res.writeHead(200, {
      "content-type": type,
      "cache-control": file.includes("/assets/") ? "public, max-age=31536000, immutable" : "no-cache",
    });
    res.end(body);
  } catch (e) {
    console.error(e);
    res.writeHead(500).end("Server error");
  }
}).listen(process.env.PORT || 3000, () => console.log("Serving dist/client"));
