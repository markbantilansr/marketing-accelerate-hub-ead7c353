import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WHATSAPP_URL } from "@/lib/brand";
import { MessageCircle, Sparkles, Layers, Rocket, Handshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ADS Infinity Brand Growth Agency" },
      {
        name: "description",
        content:
          "We help businesses build premium brands through strategy, branding, websites, content, SEO and digital marketing. Meet the team behind ADS Infinity.",
      },
      { property: "og:title", content: "About — ADS Infinity" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About — ADS Infinity" },
      {
        property: "og:description",
        content:
          "A premium brand growth agency in the UAE — strategy, branding, web, SEO and content under one roof.",
      },
      {
        name: "twitter:description",
        content:
          "A premium brand growth agency in the UAE — strategy, branding, web, SEO and content under one roof.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, t: "Premium", d: "Every touchpoint has to feel like the brand deserves the price." },
  { icon: Layers, t: "Integrated", d: "Strategy, brand, web, content and search — designed as one system." },
  { icon: Rocket, t: "Outcome-driven", d: "We measure success in leads, revenue and reputation." },
  { icon: Handshake, t: "Partnership", d: "We plug in like an in-house team, not a vendor." },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <section className="bg-hero">
          <div className="container-page py-20 md:py-28 max-w-4xl">
            <p className="text-xs uppercase tracking-widest text-brand font-semibold">About</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight text-navy">
              A brand growth agency for businesses that refuse to blend in.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
              We help businesses build premium brands through strategy, branding,
              websites, content, SEO and digital marketing. Everything you need
              to grow — from one team, under one roof.
            </p>
          </div>
        </section>

        <section className="container-page py-20 md:py-24 grid gap-14 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              We don't sell services. We sell business transformation.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Most agencies sell social media, branding or websites as isolated
              deliverables. But clients don't buy design — they buy more leads,
              better positioning, a premium image, easier sales and business
              growth.
            </p>
            <p>
              Everything we do — from a logo to an ad campaign — is engineered
              around those outcomes. It's why our clients stay for years, not
              projects.
            </p>
          </div>
        </section>

        <section className="container-page py-16 md:py-24">
          <p className="text-xs uppercase tracking-widest text-brand font-semibold">What we believe</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-navy tracking-tight max-w-3xl">
            Four principles that guide every project.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-3xl border border-border bg-card p-7 hover-lift">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-navy-panel text-white">
          <div className="container-page py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-lg">
                Let's talk about your brand.
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                Message us on WhatsApp for a free 30-minute consultation. Expect
                a real conversation — not a sales pitch.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={WHATSAPP_URL("Hi ADS Infinity, I'd like to book a free consultation.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-6 py-3.5 text-sm font-semibold hover:bg-white/90 transition"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
