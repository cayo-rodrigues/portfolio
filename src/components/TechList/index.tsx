import { techList } from "../../utils"
import TechCard from "../TechCard"
import Title from "../Title"
import { TechListContainer, TechsContainer } from "./styles"

const TechList = () => {
  return (
    <TechsContainer>
      <Title size="1.55rem" tag="h3">
        Ferramentas e Tecnologias
      </Title>
      <TechListContainer>
        {techList.map((tech, index) => (
          <li key={index}>
            <TechCard name={tech.name} logoSrc={tech.logoSrc} />
          </li>
        ))}
      </TechListContainer>
    </TechsContainer>
  )
}

export default TechList
