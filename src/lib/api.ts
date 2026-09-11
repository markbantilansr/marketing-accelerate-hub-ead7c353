// Where the chat backend lives.
//
// On Lovable (preview + published) the API route is served from the same origin.
// On a static host such as Hostinger there is no server runtime, so requests are
// sent to the Lovable-hosted API instead (CORS is enabled on that endpoint).
// Override with VITE_CHAT_API_BASE at build time if the API moves.

const FALLBACK_API_BASE = "https://marketing-accelerate-hub.lovable.app";

function isSameOriginApiHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".lovable.app") ||
    hostname.endsWith(".lovableproject.com")
  );
}

export function apiUrl(path: string) {
  const configured = import.meta.env['VITE_CHAT_API_BASE'] as string | undefined;
  if (configured) return `${configured.replace(/\/$/, "")}${path}`;
  if (typeof window === "undefined") return path;
  if (isSameOriginApiHost(window.location.hostname)) return path;
  return `${FALLBACK_API_BASE}${path}`;
}
