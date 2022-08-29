import { IProject } from "../interfaces/projects";

// project logos
import * as PL from "./projectLogos";

export const projectList: IProject[] = [
  {
    title: "Primeira Fila",
    description:
      "Uma aplicação backend que permite um usuário ver quais filmes estão em cartaz e onde eles estão sendo exibidos, além de comprar ingressos online. Ao mesmo tempo, gerentes de cinema podem cadastrar seus cinemas e gerenciá-los.",
    logoSrc: PL.primeiraFilaImg,
    projectLink: "http://primeira-fila.herokuapp.com/docs/",
    repoLink: "https://github.com/cayo-rodrigues/primeira-fila",
  },
  {
    title: "Proworking",
    description:
      "Um projeto cujo objetivo é conectar de forma fácil e simples prestadores de serviço informais com pessoas que precisam desses serviços.",
    logoSrc: PL.pwImg,
    projectLink: "https://proworking.vercel.app/",
    repoLink: "https://github.com/cayo-rodrigues/capstone-m3",
  },
  {
    title: "JoKing",
    description:
      "Meu primeiro projeto full stack. Trata-se de uma rede social onde você pode compartilhar, curtir e comentar piadas.",
    logoSrc: PL.joKingImg,
    projectLink: "https://jo-king.herokuapp.com/",
    repoLink: "https://github.com/cayo-rodrigues/joking",
  },
  {
    title: "dj-drf-utils",
    description:
      "Um pacote Python que possui funções e classes úteis para serem usadas em projetos Django, especialmente com Django Rest Framework, feito para facilitar a vida de desenvolvedores.",
    logoSrc: PL.pypiImg,
    projectLink: "https://pypi.org/project/dj-drf-utils/",
    repoLink: "https://github.com/cayo-rodrigues/dj-drf-utils",
  },
  {
    title: "Yoca",
    description:
      "Uma api com o objetivo de gerenciar os processos envolvidos na administração de um restaurante, com controle de estoque semi-automático.",
    logoSrc: PL.yocaImg,
    projectLink: "https://cayoca.herokuapp.com/api/docs/",
    repoLink: "https://github.com/cayo-rodrigues/yoca",
  },
  {
    title: "Jogo da bolinha",
    description:
      "Um joguinho simples cujo objetivo é não deixar a bola cair. Conforme o tempo passa o jogador acumula pontos, e a bolinha fica mais rápida.",
    logoSrc: PL.bolinhaImg,
    projectLink: "https://cayo-rodrigues.github.io/jogo-da-bolinha/",
    repoLink: "https://github.com/cayo-rodrigues/jogo-da-bolinha",
  },
];
