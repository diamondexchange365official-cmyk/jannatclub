import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon'};
const routes = new Map([['/','index.html'],['/index.html','index.html'],['/styles.css','styles.css'],['/app.js','app.js']]);
const server = http.createServer(async (request, response) => {
  if (!['GET','HEAD'].includes(request.method)) { response.writeHead(405, {'Allow':'GET, HEAD'}); response.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const assetName = pathname.startsWith('/images/') ? pathname.slice('/images/'.length) : null;
    const relativeFile = routes.get(pathname) || (assetName && !assetName.includes('/') && !assetName.includes('\\') && assetName !== '..' ? path.join('public','images',assetName) : null);
    if (!relativeFile) { response.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); response.end('Page not found'); return; }
    const filePath = path.join(root, relativeFile);
    const info = await stat(filePath);
    if (!info.isFile()) throw new Error('Not a file');
    const body = await readFile(filePath);
    response.writeHead(200, {'Content-Type':mime[path.extname(filePath)] || 'application/octet-stream','Content-Length':body.length,'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch { response.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); response.end('File not found'); }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Jannat Club is running at http://localhost:${port}`));
