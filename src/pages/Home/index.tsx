import avatarHiImg from "../../assets/images/avatar1.png"
import avatarPointingImg from "../../assets/images/avatar2.png"
import About from "../../components/About"
import Menu from "../../components/Menu"
import ProjectList from "../../components/ProjectList"
import TechList from "../../components/TechList"
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
      <div>
        <MainContainer>
          <Menu />
          {activeTab === "about" ? <About /> : <ProjectList />}
        </MainContainer>

        <AsideContainer>
          <img
            src={activeTab === "about" ? avatarHiImg : avatarPointingImg}
            alt="Avatar waving hi!"
          />
        </AsideContainer>
      </div>

      <FooterContainer>
        <TechList />
      </FooterContainer>
    </Container>
  )
}

export default Home
