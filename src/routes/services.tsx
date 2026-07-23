import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WHATSAPP_URL } from "@/lib/brand";
import { SectionHead } from "./index";
import {
  Compass, Palette, MonitorSmartphone, Megaphone, Search, BarChart3, Camera,
  MessageCircle, ArrowRight, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ADS Infinity Brand Growth Agency" },
      {
        name: "description",
        content:
          "Brand strategy, branding, web design & development, digital marketing, SEO & AI search, paid media and creative production — all under one roof.",
      },
      { property: "og:title", content: "Services — ADS Infinity" },
      {
        property: "og:description",
        content:
          "Seven integrated systems to grow premium brands: strategy, branding, web, digital, search, performance, and creative.",
      },
    ],
  }),
  component: ServicesPage,
});

const systems = [
  {
    id: "strategy",
    icon: Compass,
    title: "Brand Strategy",
    lead: "The foundation. Without it, everything else is decoration.",
    items: ["Brand Discovery", "Brand Positioning", "Naming", "Messaging", "Tone of Voice", "Customer Personas", "Competitor Analysis", "Brand Architecture"],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding",
    lead: "Identity systems that feel premium in every touchpoint.",
    items: ["Logo Design", "Brand Identity", "Brand Guidelines", "Color Palette", "Typography", "Icons", "Packaging", "Stationery", "Signage"],
  },
  {
    id: "web",
    icon: MonitorSmartphone,
    title: "Web Design & Development",
    lead: "Not just websites — lead-generating digital properties.",
    items: ["UX Research", "UI Design", "WordPress", "Webflow", "Shopify", "Landing Pages", "Corporate Websites", "Medical Websites", "Restaurant Websites", "Speed Optimization", "SEO Ready Development", "Conversion Optimization"],
  },
  {
    id: "digital",
    icon: Megaphone,
    title: "Digital Marketing",
    lead: "Content systems that build authority and drive sales.",
    items: ["Social Strategy", "Content Planning", "Reels", "Photography", "Video Production", "Community Management", "Copywriting", "Monthly Reports"],
  },
  {
    id: "search",
    icon: Search,
    title: "Search & AI Search Marketing",
    lead: "Win Google — and win the AI answers everyone's about to see.",
    items: ["SEO", "Local SEO", "Google Business Optimization", "GEO (Generative Engine Optimization)", "AI Search Optimization", "Technical SEO", "Content Marketing"],
  },
  {
    id: "performance",
    icon: BarChart3,
    title: "Performance Marketing",
    lead: "Paid media wired into funnels, CRM, and analytics that report on revenue.",
    items: ["Meta Ads", "Google Ads", "LinkedIn Ads", "TikTok Ads", "Lead Funnels", "CRM Integration", "Analytics"],
  },
  {
    id: "creative",
    icon: Camera,
    title: "Creative Production",
    lead: "In-house production for the assets your brand actually needs.",
    items: ["Photography", "Videography", "Drone", "Motion Graphics", "Animation", "Podcast", "Corporate Videos"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <section className="bg-hero">
          <div className="container-page py-20 md:py-28">
            <p className="text-xs uppercase tracking-widest text-brand font-semibold">Services</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight text-navy max-w-4xl">
              Seven integrated systems.
              <br /> One growth engine.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              We don't sell isolated deliverables. We combine branding, websites,
              SEO, content and paid media into one system — designed to compound
              your growth month after month.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL("Hi ADS Infinity, I'd like a proposal.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-2 transition"
              >
                <MessageCircle className="h-4 w-4" /> Get a Proposal
              </a>
            </div>
          </div>
        </section>

        <section className="container-page py-16 md:py-24 space-y-16">
          {systems.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-start scroll-mt-24"
            >
              <div className="md:sticky md:top-24">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(systems.length).padStart(2, "0")}
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy tracking-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.lead}</p>
                <a
                  href={WHATSAPP_URL(`Hi ADS Infinity, I'm interested in ${s.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand transition"
                >
                  Discuss on WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 hover-lift"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span className="text-sm text-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "How is pricing structured?",
      a: "We scope every engagement to outcomes. Most projects run as a fixed-price system (brand + web + launch) plus a monthly growth retainer for content, SEO and ads.",
    },
    {
      q: "What are typical timelines?",
      a: "A full brand + website system typically ships in 6–10 weeks. Landing pages and campaigns can go live in 2–3 weeks.",
    },
    {
      q: "Which platforms do you build on?",
      a: "WordPress, Webflow and Shopify — chosen based on your team, budget and growth model. We don't push a single stack.",
    },
    {
      q: "Who owns the work?",
      a: "You do. All brand files, website code, hosting accounts and creative assets are handed over and remain yours.",
    },
    {
      q: "Where's my hosting?",
      a: "We recommend and set up premium hosting in your own account. You retain full control.",
    },
    {
      q: "Do you handle SEO ongoing?",
      a: "Yes — SEO, Local SEO, Google Business, and GEO / AI Search Optimization are all offered as monthly retainers.",
    },
    {
      q: "Do you offer maintenance?",
      a: "Yes. Care plans include updates, backups, security, speed and conversion tuning.",
    },
  ];
  return (
    <section className="container-page py-20 md:py-24">
      <SectionHead eyebrow="FAQ" title="Answers to what most clients ask." />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-3xl border border-border bg-card p-6 open:shadow-soft transition"
          >
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-navy font-semibold">
              {f.q}
              <span className="mt-1 text-brand transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
