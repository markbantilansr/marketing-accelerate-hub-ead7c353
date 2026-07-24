import { Link } from "@tanstack/react-router";
import { LOGO, WHATSAPP_URL } from "@/lib/brand";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl ${
        isDark
          ? "bg-navy/70 border-b border-white/10"
          : "bg-background/70 border-b border-border"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LOGO}
            alt="ADS Infinity"
            className={`h-10 w-auto ${isDark ? "brightness-0 invert" : ""}`}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`text-sm font-medium transition-colors ${
                isDark ? "text-white/70 hover:text-white" : "text-foreground/70 hover:text-foreground"
              }`}
              activeProps={{
                className: isDark ? "text-white" : "text-foreground",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy-2 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Book Consultation
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={`md:hidden inline-flex items-center justify-center rounded-full p-2 ${
              isDark ? "text-white" : "text-foreground"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className={`md:hidden border-t ${isDark ? "border-white/10 bg-navy" : "border-border bg-background"}`}>
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`text-base py-2 ${isDark ? "text-white" : "text-foreground"}`}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium text-white justify-center"
            >
              <MessageCircle className="h-4 w-4" /> Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
