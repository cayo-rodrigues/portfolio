export interface IProject {
  logoSrc: string
  title: string
  description: string
  repoLink: string
  projectLink: string
}

export interface IProjectsContextData {
  projects: IProject[]
}
