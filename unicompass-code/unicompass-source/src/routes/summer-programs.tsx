import { createFileRoute } from "@tanstack/react-router";
import { OpportunityBrowser } from "@/components/OpportunityBrowser";
import { SUMMER_PROGRAMS } from "@/lib/data";

export const Route = createFileRoute("/summer-programs")({
  head: () => ({
    meta: [
      { title: "Summer programs for students — UniCompass" },
      { name: "description", content: "Find pre-college, research and leadership summer programs that match your interests." },
      { property: "og:title", content: "Summer programs for students — UniCompass" },
      { property: "og:description", content: "Summer programs by interest, with costs, deadlines and application tips." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-5xl font-semibold">Summer programs</h1>
      <p className="mb-10 mt-2 max-w-2xl text-muted-foreground">Spend your summer learning, researching or building — and strengthen your university application.</p>
      <OpportunityBrowser items={SUMMER_PROGRAMS} />
    </div>
  ),
});
