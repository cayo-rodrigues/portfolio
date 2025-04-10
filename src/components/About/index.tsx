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
      Minha história como desenvolvedor começou inexperadamente no final de 2020,
      quando um amigo me incentivou a fazer o
      <a href="https://cs50.harvard.edu/x/2023/" target="_blank" rel="noopener noreferrer">
        CS50x
      </a>,
      a introdução à ciência da computação de Harvard. Isso foi o que me fez entrar neste mundo.
    </p>
    <p>
      Pouco depois, cursei um curso de desenvolvimento web full stack na
      <a href="https://kenzie.com.br/" target="_blank" rel="noopener noreferrer">
        Kenzie Academy
      </a>, onde pude melhorar minhas soft e hard skills, e também começar a trabalhar
      nos meus primeiros projetos em equipe. Na verdade, esses trabalhos em equipe
      foram a melhor parte!
    </p>
    <p>
      Atualmente, sou um membro da equipe de desenvolvimento de
      software na empresa{" "}
      <a href="https://contele.com.br/" target="_blank" rel="noopener noreferrer">
        Contele Soluções Tecnológicas
      </a>.
    </p>
    <p>
      Fora do trabalho estou sempre procurando aprender algo novo. Fique à vontade para
      ver alguns dos meus projetos pessoais aqui ou no Github.
    </p>
  </>
  ) : (
  <>
    <p>Greetings! My name is Cayo Rodrigues.</p>
    <p>
      My journey in the world of technology began unexpectedly in late
      2020 when a friend encouraged me to take{" "}
      <a href="https://cs50.harvard.edu/x/2023/">CS50x</a>, Harvard’s
      Introduction to Computer Science. This was what made me dive into the world of programming.
    </p>
    <p>
      Shortly after, I took a Full Stack Web Development course at{" "}
      <a href="https://kenzie.com.br/">Kenzie Academy</a>, where I enhanced
      both my hard and soft skills and began to work on my first team projects. Actually, these team projects were the
      best part of it.
    </p>
    <p>
      Currently, I'm a member of the software development team at{" "}
      <a href="https://contele.com.br/" target="_blank" rel="noopener noreferrer">
        Contele Soluções Tecnológicas
      </a>.
    </p>
    <p>
      Aside of work I am always looking to learn something new.
      You can check on some of my personal projects here or on Github.
    </p>
  </>
  )}
</AboutContainer>
);
};

export default About;
