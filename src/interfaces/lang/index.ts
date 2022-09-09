export type ILang = "en" | "pt"

export interface ILangContextData {
  currentLang: ILang
  switchLang: (lang: ILang) => void
}

export interface ILangButtonProps {
  selected: boolean
}
