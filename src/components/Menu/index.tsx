import { useMenu } from "../../contexts/MenuContext"
import Title from "../Title"
import { MenuTabContainer, NavContainer } from "./styles"

const Menu = () => {
  const { activeTab, switchTab } = useMenu()

  return (
    <NavContainer>
      <MenuTabContainer
        isActive={activeTab === "about"}
        onClick={() => switchTab("about")}
      >
        <Title size="0.95rem" sizeMobile="0.85rem" tag="span">
          Sobre
        </Title>
      </MenuTabContainer>

      <MenuTabContainer
        isActive={activeTab === "projects"}
        onClick={() => switchTab("projects")}
      >
        <Title size="0.95rem" sizeMobile="0.85rem" tag="span">
          Projetos
        </Title>
      </MenuTabContainer>
    </NavContainer>
  )
}

export default Menu
