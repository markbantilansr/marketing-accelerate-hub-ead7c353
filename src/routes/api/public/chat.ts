import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are the friendly AI assistant for ADS Infinity, a premium brand growth agency. Your job is to answer any question about the website, the agency, and its services — clearly, briefly, and helpfully.

ABOUT ADS INFINITY
- Tagline: "Marketing Beyond Limits."
- Positioning: Brand Growth Agency for premium businesses.
- Promise: We build brands people remember and websites that convert.
- Contact: WhatsApp +971 56 263 6693 (link: https://wa.me/971562636693) and email derick@adsinfinity.online. We reply within 1 business hour.

SERVICES (see /services)
1. Brand Strategy — positioning, messaging, market research, brand architecture.
2. Branding & Identity — logo, visual identity, brand guidelines.
3. Web Design & Development — lead-generating, conversion-focused websites.
4. Digital Marketing — social media marketing, content systems, community growth.
5. SEO & AI Search — ranking on Google and being recommended by AI search tools.
6. Paid Media / Performance Marketing — ads that convert, measurable ROI.
7. Creative Production — content, photography direction, campaign assets.

PAGES
- Home (/): overview, process, value propositions.
- Services (/services): full detail on all seven service systems plus FAQ.
- Work (/work): selected case studies with problem, solution, and results.
- About (/about): agency philosophy and principles.
- Contact (/contact): contact hub with WhatsApp and email.

HOW TO ANSWER
- Keep answers short (2-6 sentences) unless the user asks for detail.
- When a page is relevant, include a clickable markdown link like [View our services](/services) or [See our work](/work). Always make links markdown-formatted so they are clickable.
- For pricing or project inquiries, invite them to chat on WhatsApp: [Chat on WhatsApp](https://wa.me/971562636693) or email [derick@adsinfinity.online](mailto:derick@adsinfinity.online).
- Never invent prices, client names, or stats not listed here. If unsure, say so and point them to WhatsApp.
- Be warm, professional, and confident — matching a premium agency tone.`;

// Allow the chat widget to work when the site is served from another host
// (e.g. the Hostinger-deployed build) while the API stays on Lovable.
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

export const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => null)) as {
          messages?: { role: string; content: string }[];
        } | null;
        if (!body?.messages || !Array.isArray(body.messages)) {
          return new Response("Messages are required", { status: 400, headers: CORS });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("Chat is not configured", { status: 500, headers: CORS });
        }

        const messages = [
          { role: "system", content: SYSTEM_PROMPT },
          ...body.messages
            .filter((m) => m.role === "user" || m.role === "assistant")
            .slice(-20)
            .map((m) => ({ role: m.role, content: String(m.content).slice(0, 4000) })),
        ];

        const res = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${key}`,
            },
            body: JSON.stringify({
              model: "google/gemini-3.8-flash",
              messages,
            }),
          },
        );

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          console.error("AI gateway error", res.status, text);
          const message =
            res.status === 429
              ? "I'm getting a lot of questions right now — please try again in a moment."
              : res.status === 402 || res.status === 403
                ? "Chat is temporarily unavailable. Please reach us on WhatsApp instead."
                : "Something went wrong. Please try again or contact us on WhatsApp.";
          return Response.json({ error: message }, { status: res.status, headers: CORS });
        }

        const data = (await res.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const reply =
          data.choices?.[0]?.message?.content ??
          "Sorry, I couldn't come up with an answer. Please try again.";
        return Response.json({ reply }, { headers: CORS });
      },
    },
  },
});
