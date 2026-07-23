import { Link } from "@tanstack/react-router";
import { LOGO_ON_DARK, WHATSAPP_DISPLAY, WHATSAPP_URL, BRAND } from "@/lib/brand";
import { MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy-panel text-white/80 mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={LOGO_ON_DARK} alt="ADS Infinity" className="h-11 w-auto" />
          <p className="mt-5 max-w-sm text-sm text-white/60 leading-relaxed">
            {BRAND.positioning} building lead-generating brands, websites, and
            content systems for premium businesses.
          </p>
          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-navy px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <FooterCol title="Company">
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/work">Selected Work</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterCol>

        <FooterCol title="Services">
          <FooterLink to="/services#branding">Brand Strategy</FooterLink>
          <FooterLink to="/services#web">Web Design & Dev</FooterLink>
          <FooterLink to="/services#digital">Digital Marketing</FooterLink>
          <FooterLink to="/services#search">SEO & AI Search</FooterLink>
          <FooterLink to="/services#performance">Paid Media</FooterLink>
        </FooterCol>

        <FooterCol title="Get in touch">
          <li>
            <a href={WHATSAPP_URL()} target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-white">
              {WHATSAPP_DISPLAY}
            </a>
          </li>
          <li className="text-sm text-white/60">Reply within 1 business hour.</li>
          <li className="pt-3 flex gap-3">
            <SocialIcon href="#"><Instagram className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="#"><Facebook className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="#"><Linkedin className="h-4 w-4" /></SocialIcon>
          </li>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-wrap gap-3 items-center justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} ADS Infinity. All rights reserved.</span>
          <span>Marketing Beyond Limits.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">{title}</h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  const isHash = to.includes("#");
  if (isHash) {
    return (
      <li>
        <a href={to} className="text-sm text-white/70 hover:text-white transition-colors">
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link to={to} className="text-sm text-white/70 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition"
    >
      {children}
    </a>
  );
}
