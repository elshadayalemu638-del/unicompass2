import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Briefcase, Sun, Search } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UniCompass — Find the university that fits you" },
      { name: "description", content: "Discover universities in every country, get AI essay feedback, and find summer programs and internships that match your interests." },
      { property: "og:title", content: "UniCompass — Find the university that fits you" },
      { property: "og:description", content: "Universities worldwide, essay help, summer programs and internships for students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURES = [
  { to: "/recommendations", icon: Search, title: "University matches", text: "Programs ranked against your grades, budget and goals." },
  { to: "/essays", icon: BookOpen, title: "Essay reviewer", text: "Get your essay rated, find prompts and read essays that worked." },
  { to: "/summer-programs", icon: Sun, title: "Summer programs", text: "Pre-college and research programs by interest." },
  { to: "/internships", icon: Briefcase, title: "Internships", text: "Internships that fit you, plus tips to stand out." },
] as const;

function Index() {
  return (
    <>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Admission guidance</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            Your dreams deserve <em className="text-gold">a direction.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-80">
            UniCompass helps students worldwide discover university opportunities that match their interests, academic background, budget and goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/onboarding" className="rounded-full bg-gold px-6 py-3 font-semibold text-gold-foreground hover:opacity-90">Start the questionnaire</Link>
            <Link to="/recommendations" className="rounded-full border border-primary-foreground/30 px-6 py-3 font-semibold hover:bg-primary-foreground/10">Browse programs</Link>
          </div>
        </div>
        <div className="overflow-hidden border-t border-primary-foreground/10 py-4">
          <p className="whitespace-nowrap text-sm opacity-60">{COUNTRIES.join(" · ")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-4xl font-semibold">Everything for your application</h2>
        <p className="mt-2 text-muted-foreground">Covering all {COUNTRIES.length} countries and territories.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <Link key={f.to} to={f.to} className="group rounded-2xl border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
              <f.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="text-4xl font-semibold">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Tell us about you", "Field of interest, budget, grades, language and the countries you'd move to."],
            ["See ranked matches", "Every program is scored against your profile, best fit first, with the reasons shown."],
            ["Shortlist and apply", "Save universities, polish your essay and add summer programs or internships."],
          ].map(([t, d], i) => (
            <div key={t} className="rounded-2xl bg-secondary p-6">
              <p className="text-sm font-semibold text-gold">Step {i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
