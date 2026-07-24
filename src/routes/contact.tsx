import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, EMAIL, EMAIL_URL } from "@/lib/brand";
import { MessageCircle, Clock, Zap, ShieldCheck, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ADS Infinity | Book a Consultation" },
      {
        name: "description",
        content:
          "Message ADS Infinity on WhatsApp at +971 56 263 6693 for a free 30-minute brand & website consultation. Reply within 1 business hour.",
      },
      { property: "og:title", content: "Contact ADS Infinity" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact ADS Infinity" },
      {
        property: "og:description",
        content:
          "Book a free consultation on WhatsApp — brand, web and marketing experts.",
      },
      {
        name: "twitter:description",
        content:
          "Book a free consultation on WhatsApp — brand, web and marketing experts.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const services = [
    "Brand Strategy",
    "Branding & Identity",
    "Website Design",
    "Website Development",
    "Digital Marketing",
    "SEO / AI Search",
    "Paid Ads",
    "Something else",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <section className="bg-hero">
          <div className="container-page py-20 md:py-28 grid gap-12 md:grid-cols-2 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand font-semibold">Contact</p>
              <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight text-navy">
                Let's build something worth remembering.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Message us on WhatsApp — the fastest way to reach the team.
                We'll reply within one business hour and set up a free
                30-minute consultation.
              </p>

              <a
                href={WHATSAPP_URL("Hi ADS Infinity, I'd like to book a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-navy px-6 py-5 text-white hover:bg-navy-2 transition shadow-elegant"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="text-left">
                  <div className="text-xs uppercase tracking-widest text-white/60">WhatsApp us</div>
                  <div className="text-lg font-semibold">{WHATSAPP_DISPLAY}</div>
                </span>
              </a>

              <a
                href={EMAIL_URL("Project inquiry — ADS Infinity")}
                className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 hover:border-brand/40 hover:bg-brand/5 transition"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="text-left">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email us</div>
                  <div className="text-base font-semibold text-navy">{EMAIL}</div>
                </span>
              </a>

              <ul className="mt-10 space-y-4">
                <Highlight icon={Clock} title="Reply within 1 business hour" body="Real humans, real fast." />
                <Highlight icon={Zap} title="Free 30-min consultation" body="A working session — not a sales pitch." />
                <Highlight icon={ShieldCheck} title="No obligation, ever" body="You keep the audit and insights." />
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-navy">Tell us about your project</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefill your WhatsApp message so we can jump straight to the good part.
              </p>

              <ContactForm services={services} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function Highlight({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-sm font-semibold text-navy">{title}</div>
        <div className="text-sm text-muted-foreground">{body}</div>
      </div>
    </li>
  );
}

function ContactForm({ services }: { services: string[] }) {
  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = fd.get("name");
        const company = fd.get("company");
        const service = fd.get("service");
        const budget = fd.get("budget");
        const message = fd.get("message");
        const text = [
          `Hi ADS Infinity — I'd like to discuss a project.`,
          ``,
          `Name: ${name || "-"}`,
          `Company: ${company || "-"}`,
          `Service: ${service || "-"}`,
          `Budget: ${budget || "-"}`,
          ``,
          `Details: ${message || "-"}`,
        ].join("\n");
        window.open(WHATSAPP_URL(text), "_blank");
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Your name" required />
        <Field name="company" label="Company" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-widest font-semibold text-navy">Service</label>
        <select
          name="service"
          className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-focus"
          defaultValue={services[0]}
        >
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-widest font-semibold text-navy">Budget range</label>
        <select
          name="budget"
          className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-focus"
        >
          <option>Not sure yet</option>
          <option>Under 10k AED</option>
          <option>10k – 30k AED</option>
          <option>30k – 75k AED</option>
          <option>75k+ AED</option>
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-widest font-semibold text-navy">Tell us more</label>
        <textarea
          name="message"
          rows={4}
          placeholder="A quick summary of your business and what you're trying to achieve."
          className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-focus"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-2 transition"
      >
        <MessageCircle className="h-4 w-4" /> Send via WhatsApp
      </button>
      <p className="text-xs text-muted-foreground text-center">
        We'll open WhatsApp with your message pre-filled to {WHATSAPP_DISPLAY}.
      </p>
    </form>
  );
}

function Field({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest font-semibold text-navy">{label}</label>
      <input
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-focus"
      />
    </div>
  );
}
