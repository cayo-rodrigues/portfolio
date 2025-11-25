import { ITech } from "../../interfaces/techs"
import LogoImg from "../LogoImg"
import Title from "../Title"
import { CardContainer } from "./styles"

const TechCard = ({ logoSrc, name }: ITech) => {
  return (
    <CardContainer>
      <LogoImg alt={name} src={logoSrc} />
      <Title size="1.1rem" wheight={500} tag="span">
        {name}
      </Title>
    </CardContainer>
  )
}

export default TechCard
