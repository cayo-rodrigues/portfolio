import About from "../../components/About"
import Menu from "../../components/Menu"
import ProjectList from "../../components/ProjectList"
import { useMenu } from "../../contexts/MenuContext"
import {
  AsideContainer,
  Container,
  FooterContainer,
  MainContainer,
} from "./styles"

const Home = () => {
  const { activeTab } = useMenu()

  return (
    <Container>
      <MainContainer>
        <Menu />
        {activeTab === "about" ? <About /> : <ProjectList />}
      </MainContainer>

      <AsideContainer></AsideContainer>

      <FooterContainer></FooterContainer>
    </Container>
  )
}

export default Home
