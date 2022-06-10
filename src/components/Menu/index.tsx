import MenuButton from "../MenuButton"
import Title from "../Title"
import { NavContainer } from "./styles"

const Menu = () => {
  return (
    <NavContainer>
      <MenuButton>
        <Title size="0.95rem" sizeMobile="0.85rem" tag="span">
          Sobre
        </Title>
      </MenuButton>

      <MenuButton>
        <Title size="0.95rem" sizeMobile="0.85rem" tag="span">
          Projetos
        </Title>
      </MenuButton>
    </NavContainer>
  )
}

export default Menu
