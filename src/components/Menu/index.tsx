import MenuButton from "../MenuButton"
import Title from "../Title"
import { NavContainer } from "./styles"

const Menu = () => {
  return (
    <NavContainer>
      <MenuButton>
        <Title>Sobre</Title>
      </MenuButton>

      <MenuButton>
        <Title>Projetos</Title>
      </MenuButton>
    </NavContainer>
  )
}

export default Menu
