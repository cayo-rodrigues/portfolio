import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Lang = "en" | "pt"

interface LangStore {
  lang: Lang
  setLang: (lang: Lang) => void
  t: <T extends { pt: T["pt"]; en: T["en"] }>(translations: T) => T[Lang]
}

export const useLang = create<LangStore>()(
  persist(
    (set, get) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
      t: (translations) => translations[get().lang],
    }),
    { name: "portfolio-lang" },
  ),
)
