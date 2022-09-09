import { useLang } from "../../contexts/LangContext"
import { AboutContainer } from "./styles"

const About = () => {
  const { currentLang } = useLang()

  return (
    <AboutContainer>
      {currentLang === "pt" ? (
        <>
          <p>
            Oi, meu nome é Cayo Rodrigues. Particularmente, nunca pensei que a
            área de tecnologia fosse para mim. Até que no final de 2020, um
            amigo me indicou o{" "}
            <a href="https://cs50.harvard.edu/x/2022/">CS50x</a>, um curso de
            introdução à Ciência da Computação de Harvard. Aquilo abriu minha
            mente para o mundo da programação, e eu fiquei impressionado de ver
            como gostei disso. Passei a entender vários conceitos que antes eram
            um mistério na minha cabeça.
          </p>
          <p>
            Um tempo depois aquele mesmo amigo me indicou a{" "}
            <a href="https://kenzie.com.br/">Kenzie Academy</a>, onde iniciei um
            curso incrível de desenvolvimento web full stack. Agora estou tendo
            a oportunidade de trabalhar em projetos feitos em equipe com
            metodologias ágeis e aprendendo cada vez mais tecnologias.
          </p>
        </>
      ) : (
        <>
          <p>
            Hi, my name is Cayo Rodrigues. I never thought that working with
            technology would be a thing for me. However, in late 2020, a friend
            of mine encouraged me to take{" "}
            <a href="https://cs50.harvard.edu/x/2022/">CS50x</a>, which is
            Harvard’s introduction to Computer Science. That opened my mind in
            such a way that made me just love problem solving with programming.
          </p>
          <p>
            Some time later, that same friend told me about{" "}
            <a href="https://kenzie.com.br/">Kenzie Academy</a>, where I took an
            amazing Full Stack Web Development course. Now I am having the
            opportunity to work in team projects, to work with scrum and to
            learn increasingly more technologies and tools.
          </p>
        </>
      )}
    </AboutContainer>
  )
}

export default About
