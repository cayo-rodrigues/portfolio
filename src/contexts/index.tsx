import { IParentComponentProps } from "../interfaces"
import { MenuProvider } from "./MenuContext"
import { ProjectsProvider } from "./ProjectsContext"
import { LangProvider } from "./LangContext"

const Providers = ({ children }: IParentComponentProps) => {
  return (
    <LangProvider>
      <ProjectsProvider>
        <MenuProvider>{children}</MenuProvider>
      </ProjectsProvider>
    </LangProvider>
  )
}

export default Providers
