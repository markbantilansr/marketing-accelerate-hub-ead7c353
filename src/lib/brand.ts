import logoLight from "@/assets/logo-light.asset.json";
import logoDark from "@/assets/logo-dark.asset.json";

export const LOGO_LIGHT = logoLight.url; // for dark backgrounds (white logo)
export const LOGO_DARK = logoDark.url;   // wait: file naming is inverse below

// Clarify: "logo-light" file = logo on LIGHT bg (blue mark) → use on light UI
// "logo-dark"  file = logo on DARK bg (white mark) → use on dark UI
export const LOGO_ON_LIGHT = logoLight.url;
export const LOGO_ON_DARK = logoDark.url;

export const WHATSAPP_NUMBER = "+971562636693";
export const WHATSAPP_DISPLAY = "+971 56 263 6693";
export const WHATSAPP_URL = (msg = "Hi ADS Infinity, I'd like to discuss a project.") =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${encodeURIComponent(msg)}`;

export const BRAND = {
  name: "ADS Infinity",
  tagline: "Marketing Beyond Limits.",
  positioning: "Brand Growth Agency",
  promise: "We build brands people remember and websites that convert.",
};
