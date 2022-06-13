import { IParentComponentProps } from "../interfaces"
import { MenuProvider } from "./MenuContext"
import { ProjectsProvider } from "./ProjectsContext"

const Providers = ({ children }: IParentComponentProps) => {
  return (
    <ProjectsProvider>
      <MenuProvider>{children}</MenuProvider>
    </ProjectsProvider>
  )
}

export default Providers
