import { Link } from "@tanstack/react-router";
import { Compass, Menu } from "lucide-react";
import { useState } from "react";

const NAV = [
  { to: "/recommendations", label: "Programs" },
  { to: "/essays", label: "Essays" },
  { to: "/summer-programs", label: "Summer programs" },
  { to: "/internships", label: "Internships" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
          <Compass className="h-6 w-6 text-gold" /> UniCompass
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/onboarding"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Start questionnaire
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-4 py-3 md:hidden">
          {[...NAV, { to: "/onboarding", label: "Start questionnaire" } as const].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
