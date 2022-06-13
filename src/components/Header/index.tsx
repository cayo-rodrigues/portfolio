import { ContactContainer, ContactIcon, Container } from "./styles"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Header = () => {
  return (
    <Container>
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
