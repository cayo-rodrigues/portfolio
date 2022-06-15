import { ITitleProps } from "../../interfaces/title"
import { TitleContainer } from "./styles"

const Title = ({
  children,
  tag: Tag = "h1",
  size = "2rem",
  sizeMobile = size,
  wheight = 600,
  wheightMobile = wheight,
}: ITitleProps) => {
  return (
    <TitleContainer
      fontSize={size}
      fontSizeMobile={sizeMobile}
      fontWheightMobile={wheightMobile}
      fontWheight={wheight}
    >
      <Tag>{children}</Tag>
    </TitleContainer>
  )
}

export default Title
