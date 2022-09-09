import {
  ContactContainer,
  ContactIcon,
  Container,
  LangButton,
  LangsContainer,
} from "./styles"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useLang } from "../../contexts/LangContext"

const Header = () => {
  const { currentLang, switchLang } = useLang()

  return (
    <Container>
      <LangsContainer>
        <LangButton
          selected={currentLang === "en"}
          onClick={() => switchLang("en")}
        >
          <span>EN</span>
        </LangButton>
        <LangButton
          selected={currentLang === "pt"}
          onClick={() => switchLang("pt")}
        >
          <span>PT</span>
        </LangButton>
      </LangsContainer>

      <ContactContainer>
        <a
          href="https://github.com/cayo-rodrigues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon contactType={"github"}>
            <FaGithub size={"1.2rem"} />
          </ContactIcon>
        </a>

        <a
          href="https://www.linkedin.com/in/cayo-rodrigues/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon contactType={"linkedin"}>
            <FaLinkedin size={"1.2rem"} />
          </ContactIcon>
        </a>
      </ContactContainer>
    </Container>
  )
}

export default Header
