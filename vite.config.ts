// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// `npm run build:hostinger` exports plain HTML pages for static hosts (Hostinger).
const isStaticBuild = process.env["HOSTINGER_STATIC"] === "true";

export default defineConfig({
  ...(isStaticBuild ? { nitro: false as const } : {}),
  tanstackStart: isStaticBuild
    ? { prerender: { enabled: true, crawlLinks: true, failOnError: true } }
    : {},
});
