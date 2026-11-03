import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, ExternalLink, Loader2, Shuffle, Wrench } from "lucide-react";
import { useState } from "react";
import { ESSAY_PROMPTS, ESSAY_SAMPLES } from "@/lib/data";
import { reviewEssayFn } from "@/lib/essay.functions";

export const Route = createFileRoute("/essays")({
  head: () => ({
    meta: [
      { title: "Essay reviewer, prompts & samples — UniCompass" },
      { name: "description", content: "Get your university essay rated by AI, find writing prompts, and read essays universities shared as examples." },
      { property: "og:title", content: "Essay reviewer, prompts & samples — UniCompass" },
      { property: "og:description", content: "AI essay rating, prompts and essays that worked." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Essays,
});

type Review = Awaited<ReturnType<typeof reviewEssayFn>>;
const TABS = ["Essay rater", "Essay prompts", "Essay samples", "Essay hacks"] as const;

function Essays() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Essay rater");
  const [prompt, setPrompt] = useState("");
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="text-5xl font-semibold">Essay reviewer</h1>
      <p className="mt-2 text-muted-foreground">Rate your essay, find a prompt, or learn from essays that worked.</p>
      <div className="mt-8 flex gap-1 rounded-full bg-muted p-1">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${tab === t ? "bg-card shadow-card" : "text-muted-foreground"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-8">
        {tab === "Essay rater" && <Rater prompt={prompt} setPrompt={setPrompt} />}
        {tab === "Essay prompts" && <Prompts onUse={(p) => { setPrompt(p); setTab("Essay rater"); }} />}
        {tab === "Essay samples" && <Samples />}
        {tab === "Essay hacks" && <Hacks />}
      </div>
    </div>
  );
}

function Rater({ prompt, setPrompt }: { prompt: string; setPrompt: (s: string) => void }) {
  const review = useServerFn(reviewEssayFn);
  const [essay, setEssay] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Review | null>(null);
  const words = essay.trim() ? essay.trim().split(/\s+/).length : 0;

  const submit = async () => {
    setLoading(true); setError(""); setResult(null);
    try { setResult(await review({ data: { essay, prompt } })); }
    catch (e) { setError(e instanceof Error ? e.message : "Something went wrong."); }
    finally { setLoading(false); }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-3">
        <input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Essay prompt (optional)" className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm" />
        <textarea value={essay} onChange={(e) => setEssay(e.target.value)} rows={16} placeholder="Paste your essay here…" className="w-full rounded-lg border bg-card p-4 text-sm leading-relaxed" />
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{words} words</span>
          <button disabled={loading || essay.trim().length < 50} onClick={submit} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground disabled:opacity-40">
            {loading && <Loader2 className="h-4 w-4 animate-spin" />} {loading ? "Reviewing…" : "Rate my essay"}
          </button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
      <div>
        {!result && !loading && <div className="rounded-2xl border border-dashed p-10 text-center text-sm text-muted-foreground">Your score and feedback will appear here.</div>}
        {loading && <div className="rounded-2xl border p-10 text-center text-sm text-muted-foreground">Reading your essay carefully…</div>}
        {result && (
          <div className="space-y-5 rounded-2xl border bg-card p-6 shadow-card">
            <div className="flex items-center gap-4">
              <p className="text-6xl font-semibold text-gold">{result.score}</p>
              <p className="text-sm">{result.verdict}</p>
            </div>
            <div className="space-y-3">
              {result.categories.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between text-sm font-semibold"><span>{c.name}</span><span>{c.score}/10</span></div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-gold" style={{ width: `${c.score * 10}%` }} /></div>
                  <p className="mt-1 text-xs text-muted-foreground">{c.comment}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-success"><CheckCircle2 className="h-4 w-4" /> What's good</h3>
              <ul className="mt-2 space-y-1 text-sm">{result.strengths.map((s) => <li key={s}>• {s}</li>)}</ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold"><Wrench className="h-4 w-4 text-gold" /> What to improve</h3>
              <ul className="mt-2 space-y-1 text-sm">{result.improvements.map((s) => <li key={s}>• {s}</li>)}</ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Prompts({ onUse }: { onUse: (p: string) => void }) {
  const [pick, setPick] = useState<number | null>(null);
  return (
    <div>
      <button onClick={() => setPick(Math.floor(Math.random() * ESSAY_PROMPTS.length))} className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-semibold text-gold-foreground">
        <Shuffle className="h-4 w-4" /> Give me a random prompt
      </button>
      <div className="grid gap-4 md:grid-cols-2">
        {ESSAY_PROMPTS.map((p, i) => (
          <div key={p.prompt} className={`rounded-xl border bg-card p-5 ${pick === i ? "ring-2 ring-gold" : ""}`}>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">{p.category} · {p.source}</p>
            <p className="mt-2 text-sm">{p.prompt}</p>
            <button onClick={() => onUse(p.prompt)} className="mt-3 text-sm font-semibold text-primary hover:underline">Write with this prompt →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Samples() {
  return (
    <div>
      <p className="mb-6 text-sm text-muted-foreground">These universities publish real admitted students' essays. Read them to see what great writing looks like — never copy them.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {ESSAY_SAMPLES.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="group rounded-xl border bg-card p-5 shadow-card hover:border-gold">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">{s.school}</p>
            <h3 className="mt-1 flex items-center gap-2 text-lg font-semibold">{s.title} <ExternalLink className="h-4 w-4" /></h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

const HACKS = [
  ["Start in the middle of a moment", "Skip \"Ever since I was young\". Open with an action, a line of dialogue or a vivid detail."],
  ["Show, don't tell", "Instead of \"I am hardworking\", describe waking at 5am to study before helping at the family shop."],
  ["One story, one idea", "Pick a single experience and go deep rather than listing every achievement."],
  ["Reflection is the real answer", "Spend at least a third of the essay on what you learned and how you changed."],
  ["Write like you talk", "Read it aloud. If it doesn't sound like you, simplify the words."],
  ["Cut 20% in the final draft", "Remove filler words (very, really, truly) and sentences that repeat ideas."],
  ["The 'only you' test", "If a classmate could have written the same essay, add details only you know."],
  ["End with a look forward", "Connect your story to what you want to study or do next."],
  ["Answer every part of the prompt", "Underline each question in the prompt and check your essay covers all of them."],
  ["Get two readers", "Ask one person who knows you and one who doesn't. Fix what both find confusing."],
];

function Hacks() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {HACKS.map(([t, d], i) => (
        <div key={t} className="rounded-xl border bg-card p-5 shadow-card">
          <p className="text-xs font-semibold text-gold">Hack {i + 1}</p>
          <h3 className="mt-1 text-lg font-semibold">{t}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}
