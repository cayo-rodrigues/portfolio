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
            <a
              href="https://cs50.harvard.edu/x/2023/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS50x
            </a>
            , um curso de introdução à Ciência da Computação de Harvard. Aquilo
            abriu minha mente para o mundo da programação, e eu fiquei
            impressionado de ver como gostei disso. Passei a entender vários
            conceitos que antes eram um mistério na minha cabeça.
          </p>
          <p>
            Um tempo depois aquele mesmo amigo me indicou a{" "}
            <a
              href="https://kenzie.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kenzie Academy
            </a>
            , onde fiz um curso incrível de desenvolvimento web full stack.
            Durante essa formação, tive a oportunidade de trabalhar em projetos
            feitos em equipe com metodologias ágeis e aprender novas
            tecnologias, além de ser muito bem preparado para conseguir entrar
            no mercado de trabalho.
          </p>
          <p>
            Atualmente, trabalho como desenvolvedor de software na empresa{" "}
            <a
              href="https://contele.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contele Soluções Tecnológicas
            </a>
            .
          </p>
        </>
      ) : (
        <>
          <p>
            Hi, my name is Cayo Rodrigues. I never thought that working with
            technology would be a thing for me. However, in late 2020, a friend
            of mine encouraged me to take{" "}
            <a href="https://cs50.harvard.edu/x/2023/">CS50x</a>, which is
            Harvard’s introduction to Computer Science. That opened my mind in
            such a way that made me just love problem solving with programming.
          </p>
          <p>
            Some time later, that same friend told me about{" "}
            <a href="https://kenzie.com.br/">Kenzie Academy</a>, where I took an
            amazing full stack web development course. During the course, I had
            the opportunity to work in team projects, to work with scrum and to
            learn new technologies. Besides that, I had a really good training
            on how to take my first steps into the job market.
          </p>
          <p>
            Currently I'm a software developer at{" "}
            <a
              href="https://contele.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contele Soluções Tecnológicas
            </a>
            .
          </p>
        </>
      )}
    </AboutContainer>
  )
}

export default About
