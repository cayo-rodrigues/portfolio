import Menu from "../../components/Menu"
import { AsideContainer, Container, MainContainer } from "./styles"

const Home = () => {
  return (
    <Container>
      <MainContainer>
        <Menu />
      </MainContainer>

      <AsideContainer></AsideContainer>
    </Container>
  )
}

export default Home
