// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Static pages are produced directly by TanStack; the Lovable deployment
  // still supplies its own server target through the managed build environment.
  nitro: process.env["HOSTINGER_STATIC"] === "true" ? false : undefined,
  tanstackStart: {
    // Export every public page as HTML so Apache-based hosts such as Hostinger
    // can serve the site without running the Lovable server bundle.
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
