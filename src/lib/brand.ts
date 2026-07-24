import logo from "@/assets/brand/logo.png.asset.json";
import favicon from "@/assets/brand/favicon.png.asset.json";

// Single transparent logo used everywhere. On dark surfaces, apply the
// `brightness-0 invert` utility to render it in white.
export const LOGO = logo.url;
export const LOGO_ON_LIGHT = logo.url;
export const LOGO_ON_DARK = logo.url;
export const FAVICON = favicon.url;

export const WHATSAPP_NUMBER = "+971562636693";
export const WHATSAPP_DISPLAY = "+971 56 263 6693";
export const WHATSAPP_URL = (msg = "Hi ADS Infinity, I'd like to discuss a project.") =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${encodeURIComponent(msg)}`;

export const EMAIL = "derick@adsinfinity.online";
export const EMAIL_URL = (subject = "Project inquiry") =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

export const BRAND = {
  name: "ADS Infinity",
  tagline: "Marketing Beyond Limits.",
  positioning: "Brand Growth Agency",
  promise: "We build brands people remember and websites that convert.",
};
