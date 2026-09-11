// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig(({ command }) => {
  // Lovable injects its server target when publishing. A normal GitHub build
  // has no server target, so it produces files Hostinger can serve directly.
  const isStaticBuild =
    command === "build" &&
    (process.env["HOSTINGER_STATIC"] === "true" || !process.env["LOVABLE_NITRO_PRESET"]);

  return {
    nitro: isStaticBuild ? false : undefined,
    tanstackStart: {
      prerender: isStaticBuild
        ? {
            enabled: true,
            crawlLinks: true,
            failOnError: true,
          }
        : undefined,
    },
  };
});
