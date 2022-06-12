import ProjectCard from "../ProjectCard"
import { useProjects } from "../../contexts/projects"

const ProjectList = () => {
  const { projects } = useProjects()

  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <ProjectCard
            description={project.description}
            logoSrc={project.logoSrc}
            projectLink={project.projectLink}
            repoLink={project.repoLink}
            title={project.title}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProjectList
