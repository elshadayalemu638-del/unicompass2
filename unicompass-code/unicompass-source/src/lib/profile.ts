import { useEffect, useState } from "react";
import { DEFAULT_PROFILE, type Profile } from "./data";

const KEY = "unicompass-profile";
const SAVED = "unicompass-saved";

export function useProfile() {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setProfile({ ...DEFAULT_PROFILE, ...JSON.parse(raw) });
    } catch {}
  }, []);
  const save = (p: Profile) => {
    setProfile(p);
    localStorage.setItem(KEY, JSON.stringify(p));
  };
  return [profile, save] as const;
}

export function useSaved() {
  const [saved, setSaved] = useState<string[]>([]);
  useEffect(() => {
    try {
      setSaved(JSON.parse(localStorage.getItem(SAVED) || "[]"));
    } catch {}
  }, []);
  const toggle = (slug: string) => {
    setSaved((s) => {
      const next = s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug];
      localStorage.setItem(SAVED, JSON.stringify(next));
      return next;
    });
  };
  return [saved, toggle] as const;
}
