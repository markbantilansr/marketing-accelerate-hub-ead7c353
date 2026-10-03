// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Outside Lovable's own publish pipeline (e.g. Hostinger running `npm run build`),
// export plain HTML pages instead of a server app.
const isLovableBuild =
  process.env["LOVABLE_SANDBOX"] === "1" || !!process.env["DEV_SERVER__PROJECT_PATH"];
const isStaticBuild =
  process.env["HOSTINGER_STATIC"] === "true" ||
  (!isLovableBuild && process.argv.includes("build"));

export default defineConfig({
  ...(isStaticBuild ? { nitro: false as const } : {}),
  tanstackStart: isStaticBuild
    ? { prerender: { enabled: true, crawlLinks: true, failOnError: true } }
    : {},
});
