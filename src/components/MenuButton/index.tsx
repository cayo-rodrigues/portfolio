import { ReactNode } from "react"
import { Container } from "./styles"

interface MenuButtonProps {
  children?: ReactNode
}

const MenuButton = ({ children }: MenuButtonProps) => {
  return <Container>{children}</Container>
}

export default MenuButton
