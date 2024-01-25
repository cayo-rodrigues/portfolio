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
          <p>Greetings! My name is Cayo Rodrigues.</p>
          <p>
            My journey in the world of technology began unexpectedly in late
            2020 when a friend encouraged me to explore{" "}
            <a href="https://cs50.harvard.edu/x/2023/">CS50x</a>, Harvard’s
            Introduction to Computer Science. Little did I know that this step
            would ignite my passion for problem-solving through programming.
          </p>
          <p>
            Shortly after, I enrolled in a Full Stack Web Development course at{" "}
            <a href="https://kenzie.com.br/">Kenzie Academy</a>, where I honed
            both my hard and soft skills and embraced the collaborative spirit
            of team projects.
          </p>
          <p>
            Currently, I'm a member of the software development team at{" "}
            <a
              href="https://contele.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contele Soluções Tecnológicas
            </a>
            , where I've had the privilege of contributing to meaningful
            projects. The dynamic nature of my work has allowed me to
            continuously expand my skills and navigate various technologies and
            tools.
          </p>
          <p>
            Beyond my professional endeavors, I'm dedicated to ongoing learning.
            Whether through my role at Contele or personal projects, I'm always
            exploring new techs. It's in these independent ventures that I've
            found joy in tackling challenges and crafting impactful solutions.
          </p>
        </>
      )}
    </AboutContainer>
  )
}

export default About
