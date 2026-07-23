import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WHATSAPP_URL, BRAND } from "@/lib/brand";
import {
  ArrowRight,
  Sparkles,
  Compass,
  Palette,
  MonitorSmartphone,
  Megaphone,
  Search,
  BarChart3,
  CheckCircle2,
  MessageCircle,
  Star,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADS Infinity — Brand Growth Agency in the UAE" },
      {
        name: "description",
        content:
          "ADS Infinity is a premium brand growth agency. We build lead-generating websites, powerful brands, and content systems that drive measurable business growth.",
      },
      { property: "og:title", content: "ADS Infinity — Brand Growth Agency in the UAE" },
      {
        property: "og:description",
        content:
          "ADS Infinity is a premium brand growth agency. We build lead-generating websites, powerful brands, and content systems that drive measurable business growth.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <ValueProps />
        <ServicesOverview />
        <ProcessSection />
        <SelectedWork />
        <IndustriesStrip />
        <TestimonialsSection />
        <CTASection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-hero relative overflow-hidden">
      <div className="container-page pt-20 pb-24 md:pt-28 md:pb-32 relative">
        <div className="max-w-4xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-navy">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            {BRAND.positioning} · UAE
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
            We build brands people <span className="text-gradient">remember</span>
            <br className="hidden md:block" /> and websites that <span className="text-gradient">convert</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            ADS Infinity is a premium brand growth agency. We combine strategy,
            branding, web, SEO and content into one integrated system — designed
            to generate leads and grow your business.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL("Hi ADS Infinity, I'd like to book a consultation.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-2 transition-colors shadow-elegant"
            >
              <MessageCircle className="h-4 w-4" /> Book a Consultation
            </a>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy hover:bg-white/70 transition-colors"
            >
              View Our Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            <Stat value="120+" label="Projects delivered" />
            <Stat value="45+" label="Brands scaled" />
            <Stat value="7" label="Industries served" />
          </div>
        </div>

        {/* decorative floating shape */}
        <div className="pointer-events-none absolute -right-24 top-24 hidden lg:block animate-floaty">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-brand to-brand-2 opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-semibold text-navy tracking-tight font-display">
        {value}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    "Healthcare", "Restaurants", "Construction", "Retail",
    "Corporate", "Hospitality", "Education", "Government",
  ];
  return (
    <section className="border-y border-border bg-white/60">
      <div className="container-page py-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center">
          Trusted across industries
        </p>
        <div className="mt-5 overflow-hidden">
          <div className="marquee flex gap-12 whitespace-nowrap min-w-[200%]">
            {[...items, ...items, ...items].map((s, i) => (
              <span key={i} className="text-sm font-medium text-navy/60">
                — {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const props = [
    {
      icon: Target,
      title: "Outcomes, not deliverables",
      body:
        "We sell business transformation: more leads, better positioning, easier sales — not graphic design.",
    },
    {
      icon: Zap,
      title: "One integrated system",
      body:
        "Branding, websites, SEO, content and ads working together — engineered to compound your growth.",
    },
    {
      icon: TrendingUp,
      title: "AI Search ready",
      body:
        "GEO and AI Search Optimization built into every project — so you show up where buyers actually look.",
    },
  ];
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-3">
        {props.map((p, i) => (
          <div
            key={i}
            className="rounded-3xl bg-card border border-border p-8 hover-lift"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-navy">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    id: "strategy",
    icon: Compass,
    title: "Brand Strategy",
    desc: "Positioning, naming, messaging and architecture that make you unmistakable.",
    items: ["Brand Discovery", "Positioning", "Naming", "Messaging", "Personas", "Competitor Analysis"],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding",
    desc: "Logo, identity, guidelines, color, typography and packaging — cohesive and premium.",
    items: ["Logo Design", "Identity Systems", "Guidelines", "Packaging", "Signage", "Stationery"],
  },
  {
    id: "web",
    icon: MonitorSmartphone,
    title: "Web Design & Dev",
    desc: "Lead-generating websites on WordPress, Webflow or Shopify — fast, accessible, SEO-ready.",
    items: ["UX Research", "UI Design", "Webflow / WordPress", "Landing Pages", "Speed & CRO", "SEO Ready"],
  },
  {
    id: "digital",
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Content systems and community management that build authority and drive sales.",
    items: ["Social Strategy", "Content Planning", "Reels", "Copywriting", "Community", "Monthly Reports"],
  },
  {
    id: "search",
    icon: Search,
    title: "Search & AI Search",
    desc: "SEO, Local SEO, Google Business, and GEO — so you win Google and AI answers.",
    items: ["SEO", "Local SEO", "Google Business", "GEO", "AI Search Optimization", "Technical SEO"],
  },
  {
    id: "performance",
    icon: BarChart3,
    title: "Performance & Ads",
    desc: "Meta, Google, LinkedIn and TikTok ads wired into funnels, CRM and analytics.",
    items: ["Meta Ads", "Google Ads", "LinkedIn Ads", "TikTok Ads", "Lead Funnels", "CRM & Analytics"],
  },
];

function ServicesOverview() {
  return (
    <section id="services" className="container-page py-20 md:py-28">
      <SectionHead
        eyebrow="What we do"
        title="Six systems. One integrated growth engine."
        sub="We combine branding, websites, SEO, content and case studies into a single offering — instead of isolated services."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.id}
            className="group relative rounded-3xl border border-border bg-card p-7 hover-lift"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-secondary transition"
        >
          Explore all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: "01", t: "Discover", d: "We audit your brand, buyers and category — inside and out." },
    { n: "02", t: "Strategy", d: "Positioning, messaging and channel plan tuned to outcomes." },
    { n: "03", t: "Design", d: "Identity and interfaces built for premium recognition." },
    { n: "04", t: "Build", d: "Websites, funnels and content pipelines engineered to convert." },
    { n: "05", t: "Launch", d: "QA, tracking, and a launch plan that puts you in front of buyers." },
    { n: "06", t: "Grow", d: "Ongoing SEO, ads and content to compound results month over month." },
  ];
  return (
    <section className="bg-navy-panel text-white">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-white/60">Our process</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            A six-step system built for premium outcomes.
          </h2>
          <p className="mt-5 text-white/70 max-w-2xl leading-relaxed">
            Every engagement follows the same disciplined process — so you always
            know where we are, what's next, and how it impacts the business.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div className="text-sm font-mono text-brand-2">{s.n}</div>
              <div className="mt-3 text-xl font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    slug: "restaurant",
    industry: "Hospitality",
    title: "From quiet dining room to a 3-week waitlist",
    problem: "Beautiful restaurant, invisible online.",
    solution: "Rebrand, new site, reels-first content system.",
    result: "+312% reservations · 4.9★ average review",
  },
  {
    slug: "clinic",
    industry: "Healthcare",
    title: "A private clinic that now owns its category",
    problem: "Blending in with dozens of similar clinics.",
    solution: "Premium brand, medical website, Local SEO.",
    result: "#1 map pack · 2.6× consult bookings",
  },
  {
    slug: "construction",
    industry: "Construction",
    title: "Winning premium contracts with a premium brand",
    problem: "Great work, weak positioning.",
    solution: "Brand system, corporate website, LinkedIn strategy.",
    result: "5 enterprise leads / month, 22% higher AOV",
  },
];

function SelectedWork() {
  return (
    <section className="container-page py-20 md:py-28">
      <SectionHead
        eyebrow="Selected work"
        title="Case studies, not portfolio pieces."
        sub="Real challenges. Real strategy. Real numbers."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {caseStudies.map((c) => (
          <article
            key={c.slug}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card hover-lift"
          >
            <div className="relative aspect-[4/5] bg-gradient-to-br from-navy via-navy-2 to-brand overflow-hidden">
              <div className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, white 0, transparent 40%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium text-white border border-white/20">
                  {c.industry}
                </span>
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-xl font-semibold text-navy leading-snug">{c.title}</h3>
              <div className="mt-5 space-y-2 text-sm">
                <MiniRow label="Problem" value={c.problem} />
                <MiniRow label="Solution" value={c.solution} />
                <MiniRow label="Result" value={c.result} accent />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MiniRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex gap-3">
      <div className="w-20 shrink-0 text-xs uppercase tracking-wider text-muted-foreground pt-0.5">{label}</div>
      <div className={`text-sm ${accent ? "text-brand font-semibold" : "text-foreground"}`}>{value}</div>
    </div>
  );
}

function IndustriesStrip() {
  const industries = [
    "Healthcare", "Restaurants", "Construction", "Corporate",
    "Education", "Retail", "Government", "Hospitality",
  ];
  return (
    <section className="container-page pb-4">
      <div className="rounded-3xl bg-navy-panel text-white p-10 md:p-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Industries</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Deep experience across regulated and reputation-driven categories.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {industries.map((i) => (
              <span
                key={i}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const t = [
    {
      quote:
        "ADS Infinity felt more like a strategic partner than an agency. The rebrand and new site paid for themselves in the first quarter.",
      name: "Managing Director",
      role: "Private Clinic, Dubai",
    },
    {
      quote:
        "They understood the business, not just the design brief. Our content finally sounds like us — and it's actually driving bookings.",
      name: "Owner",
      role: "Restaurant Group",
    },
    {
      quote:
        "A rare mix of taste, discipline, and business sense. Everything they build ships fast and performs.",
      name: "Head of Marketing",
      role: "Construction Firm",
    },
  ];
  return (
    <section className="container-page py-20 md:py-28">
      <SectionHead
        eyebrow="Clients"
        title="What our clients say."
        sub="A partnership model built on outcomes, not hours."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {t.map((x, i) => (
          <blockquote
            key={i}
            className="rounded-3xl border border-border bg-card p-8 hover-lift"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-brand text-brand" />
              ))}
            </div>
            <p className="mt-5 text-base text-foreground leading-relaxed">"{x.quote}"</p>
            <footer className="mt-6">
              <div className="text-sm font-semibold text-navy">{x.name}</div>
              <div className="text-xs text-muted-foreground">{x.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container-page pb-20">
      <div className="relative overflow-hidden rounded-4xl bg-navy-panel text-white p-10 md:p-16">
        <div className="max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Let's build something worth remembering.
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Book a free 30-minute consultation. We'll audit your brand and web
            presence, and show you where the fastest growth is hiding.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL("Hi ADS Infinity, I'd like to book a free consultation.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-6 py-3.5 text-sm font-semibold hover:bg-white/90 transition"
            >
              <MessageCircle className="h-4 w-4" /> Book Consultation on WhatsApp
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              See Services
            </Link>
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-white/70">
            {[
              "Reply within 1 business hour",
              "Free brand & website audit",
              "No obligation — ever",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-2" /> {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-widest text-brand font-semibold">{eyebrow}</p>
      <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-navy">{title}</h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}
