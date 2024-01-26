import { useLang } from "../../contexts/LangContext";
import { AboutContainer } from "./styles";

const About = () => {
  const { currentLang } = useLang();

  return (
    <AboutContainer>
      {currentLang === "pt" ? (
        <>
          <p>Oi, meu nome é Cayo Rodrigues.</p>
          <p>
            Sou um desenvolvedor de software com uma base em ciência da
            computação pelo{" "}
            <a
              href="https://cs50.harvard.edu/x/2023/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS50x
            </a>{" "}
            de Harvard e formação em desenvolvimento web full stack pela{" "}
            <a
              href="https://kenzie.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kenzie Academy
            </a>
            .
          </p>
          <p>
            Atualmente, sou um membro valioso da equipe de desenvolvimento de
            software na empresa{" "}
            <a
              href="https://contele.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contele Soluções Tecnológicas
            </a>
            , contribuindo ativamente para projetos impactantes.
          </p>
          <p>
            Bem familiarizado com diversas tecnologias, mantenho um compromisso
            contínuo com a aprendizagem, tanto em ambientes profissionais quanto
            em projetos independentes.
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
  );
};

export default About;
