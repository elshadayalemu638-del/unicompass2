import { ExternalLink, Lightbulb } from "lucide-react";
import { useState } from "react";
import { INTERESTS, type Opportunity } from "@/lib/data";

export function OpportunityBrowser({ items }: { items: Opportunity[] }) {
  const [picked, setPicked] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const shown = items
    .filter((o) => picked.length === 0 || o.interests.some((i) => picked.includes(i)))
    .filter((o) => !q || `${o.name} ${o.org} ${o.location}`.toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      <p className="mb-3 text-sm font-semibold">What are you interested in?</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {INTERESTS.map((i) => {
          const on = picked.includes(i);
          return (
            <button
              key={i}
              onClick={() => setPicked(on ? picked.filter((x) => x !== i) : [...picked, i])}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${on ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}
            >
              {i}
            </button>
          );
        })}
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by name or location…"
        className="mb-6 w-full rounded-lg border bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      <p className="mb-4 text-sm text-muted-foreground">{shown.length} matches</p>
      <div className="grid gap-4 md:grid-cols-2">
        {shown.map((o) => (
          <article key={o.name} className="flex flex-col rounded-xl border bg-card p-5 shadow-card">
            <h3 className="text-lg font-semibold">{o.name}</h3>
            <p className="text-sm text-muted-foreground">{o.org} · {o.location}</p>
            <p className="mt-3 text-sm">{o.why}</p>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div><dt className="text-muted-foreground">Who</dt><dd className="font-medium">{o.ages}</dd></div>
              <div><dt className="text-muted-foreground">Cost</dt><dd className="font-medium">{o.cost}</dd></div>
              <div><dt className="text-muted-foreground">Deadline</dt><dd className="font-medium">{o.deadline}</dd></div>
            </dl>
            <div className="mt-4 flex gap-2 rounded-lg bg-accent p-3 text-sm text-accent-foreground">
              <Lightbulb className="h-4 w-4 shrink-0 translate-y-0.5" /> {o.tip}
            </div>
            <a href={o.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-primary hover:underline">
              Visit & apply <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Dates and eligibility change every year — always check the official page.</p>
    </div>
  );
}
