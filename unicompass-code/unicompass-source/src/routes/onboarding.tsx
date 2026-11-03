import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { COUNTRIES } from "@/lib/countries";
import { DEFAULT_PROFILE, FIELDS, type Profile } from "@/lib/data";
import { useProfile } from "@/lib/profile";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Questionnaire — UniCompass" },
      { name: "description", content: "Tell UniCompass your interests, grades, budget and countries to get ranked university matches." },
      { property: "og:title", content: "Questionnaire — UniCompass" },
      { property: "og:description", content: "Five quick steps to find universities that fit you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Onboarding,
});

const STEPS = ["Interests", "Budget", "Grades", "Countries", "Language"];

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`rounded-full border px-4 py-2 text-sm transition-colors ${on ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}>
      {children}
    </button>
  );
}

function Onboarding() {
  const [stored, save] = useProfile();
  const [p, setP] = useState<Profile>(DEFAULT_PROFILE);
  const [step, setStep] = useState(0);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  useEffect(() => setP(stored), [stored]);

  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-muted-foreground">Step {step + 1} of 5 · {STEPS[step]}</p>
      <div className="mt-2 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-gold transition-all" style={{ width: `${((step + 1) / 5) * 100}%` }} /></div>

      <div className="mt-10 min-h-[320px]">
        {step === 0 && (
          <>
            <h1 className="text-4xl font-semibold">What do you want to study?</h1>
            <p className="mt-2 text-muted-foreground">Choose one or more fields.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {FIELDS.map((f) => <Chip key={f} on={p.fields.includes(f)} onClick={() => setP({ ...p, fields: toggle(p.fields, f) })}>{f}</Chip>)}
            </div>
            <p className="mt-8 font-semibold">Degree level</p>
            <div className="mt-3 flex gap-2">
              {(["Bachelors", "Masters", "Any"] as const).map((l) => <Chip key={l} on={p.level === l} onClick={() => setP({ ...p, level: l })}>{l}</Chip>)}
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <h1 className="text-4xl font-semibold">What's your yearly tuition budget?</h1>
            <p className="mt-6 text-3xl font-semibold text-gold">${p.budget.toLocaleString()}</p>
            <input type="range" min={0} max={70000} step={1000} value={p.budget} onChange={(e) => setP({ ...p, budget: +e.target.value })} className="mt-4 w-full accent-primary" />
          </>
        )}
        {step === 2 && (
          <>
            <h1 className="text-4xl font-semibold">What's your GPA (out of 4.0)?</h1>
            <p className="mt-6 text-3xl font-semibold text-gold">{p.gpa.toFixed(1)}</p>
            <input type="range" min={2} max={4} step={0.1} value={p.gpa} onChange={(e) => setP({ ...p, gpa: +e.target.value })} className="mt-4 w-full accent-primary" />
          </>
        )}
        {step === 3 && (
          <>
            <h1 className="text-4xl font-semibold">Where would you like to study?</h1>
            <p className="mt-2 text-muted-foreground">Pick any countries — leave empty for anywhere in the world. {p.countries.length} selected.</p>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search countries…" className="mt-4 w-full rounded-lg border bg-card px-4 py-2.5 text-sm" />
            <div className="mt-4 flex max-h-72 flex-wrap gap-2 overflow-y-auto">
              {COUNTRIES.filter((c) => c.toLowerCase().includes(q.toLowerCase())).map((c) => (
                <Chip key={c} on={p.countries.includes(c)} onClick={() => setP({ ...p, countries: toggle(p.countries, c) })}>{c}</Chip>
              ))}
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <h1 className="text-4xl font-semibold">Language of instruction?</h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {["English", "German", "French", "Spanish", "Chinese", "Japanese", "Korean", "Arabic", "Portuguese", "Italian"].map((l) => (
                <Chip key={l} on={p.language === l} onClick={() => setP({ ...p, language: l })}>{l}</Chip>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-10 flex justify-between">
        <button disabled={step === 0} onClick={() => setStep(step - 1)} className="rounded-full border px-6 py-2.5 font-semibold disabled:opacity-40">Back</button>
        <button
          onClick={() => {
            if (step < 4) setStep(step + 1);
            else { save(p); navigate({ to: "/recommendations" }); }
          }}
          className="rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground"
        >
          {step < 4 ? "Continue" : "See my matches"}
        </button>
      </div>
    </div>
  );
}
