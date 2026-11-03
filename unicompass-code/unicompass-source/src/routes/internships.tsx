import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { OpportunityBrowser } from "@/components/OpportunityBrowser";
import { COMPETITIVE_TIPS, INTERNSHIPS } from "@/lib/data";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internships for students — UniCompass" },
      { name: "description", content: "Internships that fit your interests, plus practical tips to become a competitive applicant." },
      { property: "og:title", content: "Internships for students — UniCompass" },
      { property: "og:description", content: "Find internships by interest and learn how to stand out." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-5xl font-semibold">Internships</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">Real work experience that fits your interests.</p>
      <section className="my-10 rounded-2xl bg-hero p-8 text-primary-foreground">
        <h2 className="flex items-center gap-2 text-2xl font-semibold"><Trophy className="h-6 w-6 text-gold" /> How to be competitive</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {COMPETITIVE_TIPS.map((t) => <li key={t} className="text-sm opacity-90">• {t}</li>)}
        </ul>
      </section>
      <OpportunityBrowser items={INTERNSHIPS} />
    </div>
  ),
});
