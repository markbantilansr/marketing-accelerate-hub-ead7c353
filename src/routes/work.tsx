import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WHATSAPP_URL } from "@/lib/brand";
import { ArrowRight, MessageCircle, TrendingUp, Stethoscope, UtensilsCrossed, HardHat, ShoppingBag, Briefcase, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — ADS Infinity Case Studies" },
      {
        name: "description",
        content:
          "Real challenges, real strategy, real results. Case studies from clinics, restaurants, construction, retail and corporate brands built and grown by ADS Infinity.",
      },
      { property: "og:title", content: "Selected Work — ADS Infinity" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Selected Work — ADS Infinity" },
      {
        property: "og:description",
        content:
          "How we've grown premium brands across healthcare, hospitality, construction and more.",
      },
      {
        name: "twitter:description",
        content:
          "How we've grown premium brands across healthcare, hospitality, construction and more.",
      },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    industry: "Healthcare",
    icon: Stethoscope,
    title: "Owning the private clinic category",
    challenge: "A high-end clinic blending in with dozens of similar-sounding competitors.",
    strategy: "Repositioning around expertise + a premium visual identity.",
    execution: "New brand system, medical website, Local SEO and Google Business optimization.",
    results: ["#1 in map pack for target keywords", "2.6× monthly consult bookings", "42% reduction in cost per lead"],
  },
  {
    industry: "Hospitality",
    icon: UtensilsCrossed,
    title: "From quiet dining room to 3-week waitlist",
    challenge: "Beautiful concept, invisible online, inconsistent bookings.",
    strategy: "Rebrand + reservation-first website + reels-driven content system.",
    execution: "Identity refresh, high-conversion site, weekly reels and community management.",
    results: ["+312% reservations", "4.9★ average review", "Sold-out weekends 90% of the year"],
  },
  {
    industry: "Construction",
    icon: HardHat,
    title: "Winning premium contracts with a premium brand",
    challenge: "Excellent build quality — weak brand and no digital pipeline.",
    strategy: "Corporate rebrand, LinkedIn thought leadership, sales-enablement site.",
    execution: "Identity system, corporate website, case-study library and LinkedIn content ops.",
    results: ["5 enterprise leads / month", "22% higher average order value", "Shortlisted for 2 government projects"],
  },
  {
    industry: "Retail",
    icon: ShoppingBag,
    title: "A retail brand people remember on the shelf",
    challenge: "Strong product, weak shelf presence and unclear positioning.",
    strategy: "Positioning workshop + packaging system + DTC website.",
    execution: "Full identity, packaging system, Shopify build, launch campaign.",
    results: ["+3.4× DTC revenue in 6 months", "Distribution expanded to 40 new stores"],
  },
  {
    industry: "Corporate",
    icon: Briefcase,
    title: "A B2B rebrand that unlocked enterprise deals",
    challenge: "Consulting firm perceived as a solo shop, losing to bigger names.",
    strategy: "Premium corporate identity + industry-focused content.",
    execution: "Rebrand, corporate site, SEO strategy, LinkedIn ads.",
    results: ["Average deal size +58%", "Sales cycle shortened by 3 weeks"],
  },
  {
    industry: "Education",
    icon: GraduationCap,
    title: "Filling seats with a modern digital front door",
    challenge: "Enrollment page performing well below industry benchmark.",
    strategy: "UX overhaul + Google Ads + parent-journey content.",
    execution: "New site, admissions funnel, Google Ads and content plan.",
    results: ["Applications +73%", "Cost per application down 39%"],
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <section className="bg-hero">
          <div className="container-page py-20 md:py-28">
            <p className="text-xs uppercase tracking-widest text-brand font-semibold">Selected work</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight text-navy max-w-4xl">
              We measure success in outcomes, not deliverables.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Every project is a system: challenge, strategy, execution, results.
              Here are a few of the businesses we've helped grow.
            </p>
          </div>
        </section>

        <section className="container-page py-16 md:py-24 space-y-10">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
              >
                <div className="flex flex-wrap items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
                        {p.industry}
                      </span>
                      <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
                        {p.title}
                      </h2>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    Case {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <dl className="mt-8 grid gap-6 md:grid-cols-3">
                  <Row label="Challenge" value={p.challenge} />
                  <Row label="Strategy" value={p.strategy} />
                  <Row label="Execution" value={p.execution} />
                </dl>

                <div className="mt-8 rounded-2xl bg-secondary p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand font-semibold">
                    <TrendingUp className="h-4 w-4" /> Results
                  </div>
                  <ul className="mt-3 grid gap-2 md:grid-cols-3">
                    {p.results.map((r) => (
                      <li key={r} className="text-navy font-medium">{r}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </section>

        <section className="container-page pb-20">
          <div className="rounded-4xl bg-navy-panel text-white p-10 md:p-14 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">
                Your business could be the next case study.
              </h2>
              <p className="mt-3 text-white/70 max-w-xl">Book a free consultation and we'll show you the fastest wins.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL("Hi ADS Infinity, I saw your work and want to discuss a project.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-6 py-3.5 text-sm font-semibold hover:bg-white/90 transition"
              >
                <MessageCircle className="h-4 w-4" /> Start a Project
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 text-sm text-foreground leading-relaxed">{value}</dd>
    </div>
  );
}
