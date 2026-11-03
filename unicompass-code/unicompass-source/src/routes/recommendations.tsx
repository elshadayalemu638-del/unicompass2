import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, Check, X } from "lucide-react";
import { useMemo, useState } from "react";
import { COUNTRIES } from "@/lib/countries";
import { PROGRAMS, scoreProgram } from "@/lib/data";
import { useProfile, useSaved } from "@/lib/profile";

export const Route = createFileRoute("/recommendations")({
  head: () => ({
    meta: [
      { title: "Your university matches — UniCompass" },
      { name: "description", content: "University programs ranked against your profile, with fit reasons, tuition and deadlines." },
      { property: "og:title", content: "Your university matches — UniCompass" },
      { property: "og:description", content: "Programs ranked by how well they fit you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Recs,
});

function Recs() {
  const [profile] = useProfile();
  const [saved, toggle] = useSaved();
  const [country, setCountry] = useState("All");
  const [onlySaved, setOnlySaved] = useState(false);

  const ranked = useMemo(
    () =>
      PROGRAMS.filter((p) => profile.level === "Any" || p.level === profile.level)
        .map((p) => ({ p, s: scoreProgram(p, profile) }))
        .sort((a, b) => b.s.passed - a.s.passed || a.p.rank - b.p.rank),
    [profile],
  );
  const shown = ranked
    .filter((r) => country === "All" || r.p.country === country)
    .filter((r) => !onlySaved || saved.includes(r.p.slug))
    .slice(0, 60);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-5xl font-semibold">Your matches</h1>
          <p className="mt-2 text-muted-foreground">{ranked.length} programs ranked against your profile.</p>
        </div>
        <Link to="/onboarding" className="rounded-full border px-5 py-2 text-sm font-semibold hover:bg-muted">Edit preferences</Link>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <select value={country} onChange={(e) => setCountry(e.target.value)} className="rounded-lg border bg-card px-3 py-2 text-sm">
          <option>All</option>
          {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <button onClick={() => setOnlySaved(!onlySaved)} className={`rounded-lg border px-3 py-2 text-sm ${onlySaved ? "bg-primary text-primary-foreground" : "bg-card"}`}>
          Saved ({saved.length})
        </button>
      </div>
      {shown.length === 0 && <p className="mt-10 text-muted-foreground">No programs listed for this choice yet — try another country.</p>}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {shown.map(({ p, s }) => (
          <article key={p.slug} className="rounded-2xl border bg-card p-6 shadow-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.city}, {p.country} · #{p.rank} worldwide</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-semibold text-gold">{s.percent}%</p>
                <p className="text-xs text-muted-foreground">fit · {s.passed}/6</p>
              </div>
            </div>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-sm">
              <div><dt className="text-xs text-muted-foreground">Tuition/yr</dt><dd className="font-medium">{p.tuition === 0 ? "Free" : `$${p.tuition.toLocaleString()}`}</dd></div>
              <div><dt className="text-xs text-muted-foreground">Min GPA</dt><dd className="font-medium">{p.minGpa}</dd></div>
              <div><dt className="text-xs text-muted-foreground">Level</dt><dd className="font-medium">{p.level}</dd></div>
            </dl>
            <ul className="mt-4 grid grid-cols-2 gap-1 text-xs">
              {s.checks.map((c) => (
                <li key={c.label} className={`flex items-center gap-1 ${c.ok ? "text-success" : "text-muted-foreground line-through"}`}>
                  {c.ok ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />} {c.label}
                </li>
              ))}
            </ul>
            <button onClick={() => toggle(p.slug)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              <Bookmark className={`h-4 w-4 ${saved.includes(p.slug) ? "fill-current" : ""}`} /> {saved.includes(p.slug) ? "Saved" : "Save"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
