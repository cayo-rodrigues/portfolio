import { IProject } from "../../interfaces/projects"
import Title from "../Title"
import { CardContainer } from "./styles"

const ProjectCard = ({
  description,
  logoSrc,
  projectLink,
  repoLink,
  title,
}: IProject) => {
  return (
    <CardContainer>
      {/* componentizar imagem */}
      <img src={logoSrc} alt="Proworking logo" />
      <Title tag={"h4"} size={"1.2rem"}>
        {title}
      </Title>
      {/* criar styled-component */}
      <p>{description}</p>
      {/* criar styled-component */}
      <div>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          {/* componentinar botões */}
          <button>Projeto</button>
        </a>

        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          {/* componentinar botões */}
          <button>Repositório</button>
        </a>
      </div>
    </CardContainer>
  )
}

export default ProjectCard
