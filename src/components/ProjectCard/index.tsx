import { IProject } from "../../interfaces/projects";
import LogoImg from "../LogoImg";
import Title from "../Title";
import { CardButtonsContainer, CardContainer } from "./styles";

const ProjectCard = ({
  description,
  logoSrc,
  projectLink,
  repoLink,
  title,
}: IProject) => {
  return (
    <CardContainer>
      <LogoImg
        src={logoSrc}
        alt="Proworking logo"
        width="30%"
        widthMobile="36%"
      />

      <Title tag={"h4"} size={"1.2rem"}>
        {title}
      </Title>

      <p>{description}</p>

      <CardButtonsContainer>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button>Projeto</button>
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <button>Repositório</button>
        </a>
      </CardButtonsContainer>
    </CardContainer>
  );
};

export default ProjectCard;
