import About from "../../components/About"
import Menu from "../../components/Menu"
import ProjectList from "../../components/ProjectList"
import { AsideContainer, Container, MainContainer } from "./styles"

const Home = () => {
  return (
    <Container>
      <MainContainer>
        <Menu />
        {/* <About /> */}
        <ProjectList />
      </MainContainer>

      <AsideContainer></AsideContainer>
    </Container>
  )
}

export default Home
