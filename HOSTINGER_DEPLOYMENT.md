# Hostinger deployment

Configure the GitHub deployment in Hostinger with:

- Build command: `npm run build:hostinger`
- Output directory: `dist/client`
- Node.js version: 22

The output includes every public page, the Apache `.htaccess` fallback, the
logo, favicon, styles, and scripts. The chatbot remains hosted by the Lovable
site and is called securely from the Hostinger website.

Do not upload `dist/server` or run `dist/server/index.mjs` on Hostinger.