import { IParentComponentProps } from "../interfaces/general"
import { ProjectsProvider } from "./projects"

const Providers = ({ children }: IParentComponentProps) => {
  return <ProjectsProvider>{children}</ProjectsProvider>
}

export default Providers
