import React from "react";
import { useLang } from "../../contexts/LangContext";
import { IProject } from "../../interfaces/projects";
import LogoImg from "../LogoImg";
import Title from "../Title";
import { CardButtonsContainer, CardContainer } from "./styles";

const ProjectCard = React.memo(
  ({
    description,
    logoSrc,
    logoIcon,
    projectLink,
    repoLink,
    title,
  }: IProject) => {
    const { currentLang } = useLang();

    const buttonsText = {
      project: {
        pt: "Ver Projeto",
        en: "See Project",
      },
      repo: {
        pt: "Código Fonte",
        en: "Source Code",
      },
    };

    return (
      <CardContainer>
        {logoIcon ? (
          logoIcon
        ) : (
          <LogoImg src={logoSrc} alt={title} width="30%" widthMobile="36%" />
        )}

        <Title tag={"h4"} size={"1.2rem"}>
          {title}
        </Title>

        <p>{description[currentLang]}</p>

        <CardButtonsContainer>
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <button>{buttonsText.project[currentLang]}</button>
          </a>
          {repoLink ? (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <button>{buttonsText.repo[currentLang]}</button>
            </a>
          ) : null}
        </CardButtonsContainer>
      </CardContainer>
    );
  },
);

export default ProjectCard;
