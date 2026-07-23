import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WHATSAPP_URL } from "@/lib/brand";
import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react";

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
      {
        property: "og:description",
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
    title: "Owning the private clinic category",
    challenge: "A high-end clinic blending in with dozens of similar-sounding competitors.",
    strategy: "Repositioning around expertise + a premium visual identity.",
    execution: "New brand system, medical website, Local SEO and Google Business optimization.",
    results: ["#1 in map pack for target keywords", "2.6× monthly consult bookings", "42% reduction in cost per lead"],
  },
  {
    industry: "Hospitality",
    title: "From quiet dining room to 3-week waitlist",
    challenge: "Beautiful concept, invisible online, inconsistent bookings.",
    strategy: "Rebrand + reservation-first website + reels-driven content system.",
    execution: "Identity refresh, high-conversion site, weekly reels and community management.",
    results: ["+312% reservations", "4.9★ average review", "Sold-out weekends 90% of the year"],
  },
  {
    industry: "Construction",
    title: "Winning premium contracts with a premium brand",
    challenge: "Excellent build quality — weak brand and no digital pipeline.",
    strategy: "Corporate rebrand, LinkedIn thought leadership, sales-enablement site.",
    execution: "Identity system, corporate website, case-study library and LinkedIn content ops.",
    results: ["5 enterprise leads / month", "22% higher average order value", "Shortlisted for 2 government projects"],
  },
  {
    industry: "Retail",
    title: "A retail brand people remember on the shelf",
    challenge: "Strong product, weak shelf presence and unclear positioning.",
    strategy: "Positioning workshop + packaging system + DTC website.",
    execution: "Full identity, packaging system, Shopify build, launch campaign.",
    results: ["+3.4× DTC revenue in 6 months", "Distribution expanded to 40 new stores"],
  },
  {
    industry: "Corporate",
    title: "A B2B rebrand that unlocked enterprise deals",
    challenge: "Consulting firm perceived as a solo shop, losing to bigger names.",
    strategy: "Premium corporate identity + industry-focused content.",
    execution: "Rebrand, corporate site, SEO strategy, LinkedIn ads.",
    results: ["Average deal size +58%", "Sales cycle shortened by 3 weeks"],
  },
  {
    industry: "Education",
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

        <section className="container-page py-16 md:py-24 space-y-16">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-10 md:grid-cols-[1fr_1.3fr] items-start"
            >
              <div>
                <div
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-navy via-navy-2 to-brand"
                >
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, white 0, transparent 45%), radial-gradient(circle at 80% 80%, white 0, transparent 30%)",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white/15 backdrop-blur border border-white/20 px-3 py-1 text-xs font-medium">
                        {p.industry}
                      </span>
                      <span className="font-mono text-xs text-white/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <div className="text-4xl font-display font-semibold leading-tight">
                        {p.title.split(" ").slice(0, 3).join(" ")}…
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">{p.title}</h2>
                <dl className="mt-8 space-y-6">
                  <Row label="Challenge" value={p.challenge} />
                  <Row label="Strategy" value={p.strategy} />
                  <Row label="Execution" value={p.execution} />
                </dl>
                <div className="mt-8 rounded-2xl bg-secondary p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand font-semibold">
                    <TrendingUp className="h-4 w-4" /> Results
                  </div>
                  <ul className="mt-3 space-y-2">
                    {p.results.map((r) => (
                      <li key={r} className="text-navy font-medium">{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
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
    <div className="grid gap-1.5 md:grid-cols-[140px_1fr]">
      <dt className="text-xs uppercase tracking-widest text-muted-foreground pt-1">{label}</dt>
      <dd className="text-base text-foreground leading-relaxed">{value}</dd>
    </div>
  );
}
