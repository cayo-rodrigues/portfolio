import { ElementType, ReactNode } from "react"
import { TitleContainer } from "./styles"

interface TitleProps {
  children?: ReactNode
  size?: string
  sizeMobile?: string
  wheight?: number
  wheightMobile?: number
  tag?: ElementType
}

const Title = ({
  children,
  tag: Tag = "h1",
  size = "2rem",
  sizeMobile = size,
  wheight = 600,
  wheightMobile = wheight,
}: TitleProps) => {
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
