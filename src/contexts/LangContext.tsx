import { createContext, useContext, useState } from "react"
import { IParentComponentProps } from "../interfaces"
import { ILang, ILangContextData } from "../interfaces/lang"

const LangContext = createContext<ILangContextData>({} as ILangContextData)

export const useLang = () => useContext(LangContext)

export const LangProvider = ({ children }: IParentComponentProps) => {
  const [currentLang, setCurrentLang] = useState<ILang>("en")

  const switchLang = (lang: ILang) => {
    setCurrentLang(lang)
  }

  return (
    <LangContext.Provider value={{ currentLang, switchLang }}>
      {children}
    </LangContext.Provider>
  )
}
