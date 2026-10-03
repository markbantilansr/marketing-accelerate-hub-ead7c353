# Hostinger deployment

`npm run build` outside Lovable now produces plain website files in `dist/client`
(every page, logo, favicon, `.htaccess`).

Hostinger Node.js web app settings:

- Build command: `npm run build`
- Start command / entry: `npm start` (entry file `scripts/serve-static.mjs`)
- Output directory (if asked): `dist/client`
- Node.js version: 22

Static hosting (no Node.js) works too: upload the contents of `dist/client`.
The chatbot is served by the Lovable site and keeps working from Hostinger.
