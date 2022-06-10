import { ContactContainer, ContactIcon, Container } from "./styles"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Header = () => {
  return (
    <Container>
      <ContactContainer>
        <ContactIcon contactType={"github"}>
          <FaGithub size={"1.2rem"} />
        </ContactIcon>

        <ContactIcon contactType={"linkedin"}>
          <FaLinkedin size={"1.2rem"} />
        </ContactIcon>
      </ContactContainer>
    </Container>
  )
}

export default Header
