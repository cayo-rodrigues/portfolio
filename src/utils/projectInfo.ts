import { IProject } from "../interfaces/projects"

// project logos
import * as PL from "./projectLogos"

export const projectList: IProject[] = [
  {
    title: "Primeira Fila",
    description: {
      pt: "Uma aplicação backend que permite um usuário ver quais filmes estão em cartaz e onde eles estão sendo exibidos, além de comprar ingressos online. Ao mesmo tempo, gerentes de cinema podem cadastrar seus cinemas e gerenciá-los.",
      en: "A backend app, which allows users to look for movies, see where each one are playing, the prices in each place and buy tickets online. Also, cinema managers can register their cinemas and manage their movie sessions.",
    },
    logoSrc: PL.primeiraFilaImg,
    projectLink: "https://primeira-fila-api.up.railway.app/docs/",
    repoLink: "https://github.com/cayo-rodrigues/primeira-fila",
  },
  {
    title: "Proworking",
    description: {
      pt: "Um projeto cujo objetivo é conectar de forma fácil e simples prestadores de serviço informais com pessoas que precisam desses serviços.",
      en: "The goal of this project is to connect informal workers with people who need some kind of work done, in a simple and easy way",
    },
    logoSrc: PL.pwImg,
    projectLink: "https://proworking.vercel.app/",
    repoLink: "https://github.com/cayo-rodrigues/capstone-m3",
  },
  {
    title: "Yoca",
    description: {
      pt: "Uma api com o objetivo de gerenciar os processos envolvidos na administração de um restaurante, com controle de estoque semi-automático.",
      en: "An api whose purpose in life is to manage many proccess related to a restaraut's workflow, having a semi-automatic inventory control system.",
    },
    logoSrc: PL.yocaImg,
    projectLink: "https://cayoca.up.railway.app/",
    repoLink: "https://github.com/cayo-rodrigues/yoca",
  },
  {
    title: "dj-drf-utils",
    description: {
      pt: "Um pacote Python que possui funções e classes úteis para serem usadas em projetos Django, especialmente com Django Rest Framework, feito para facilitar a vida de desenvolvedores.",
      en: "A Python package, containing useful functions and classes to be used in Django and Django Rest Framework projects. It abstracts away some boiler plate code and common behaviors.",
    },
    logoSrc: PL.pypiImg,
    projectLink: "https://pypi.org/project/dj-drf-utils/",
    repoLink: "https://github.com/cayo-rodrigues/dj-drf-utils",
  },
  {
    title: "GSiC",
    description: {
      pt: 'Essa sigla significa "Grocery Store in C". Este é um programa desenvolvido em linguagem C, capaz de realizar tarefas comuns em um caixa de supermercado.',
      en: 'GSiC means "Grocery Store in C". It is a command line program, developed in C, capable of accomplishing some common tasks in a grocery store cashier',
    },
    logoSrc: PL.gsicImg,
    projectLink:
      "https://drive.google.com/file/d/1yQ8eaLHOqkbEe810dovin0SWaka78f52/view?usp=sharing",
    repoLink: "https://github.com/cayo-rodrigues/gsic",
  },
  {
    title: "JoKing",
    description: {
      pt: "Meu primeiro projeto full stack. Trata-se de uma rede social onde você pode compartilhar, curtir e comentar piadas.",
      en: "My first full stack project. It is a social network for sharing puns, where users can like and leave comments to each other's puns.",
    },
    logoSrc: PL.joKingImg,
    projectLink: "https://joking.onrender.com/",
    repoLink: "https://github.com/cayo-rodrigues/joking",
  },
  {
    title: "Jogo da bolinha",
    description: {
      pt: "Um joguinho simples cujo objetivo é não deixar a bola cair. Conforme o tempo passa o jogador acumula pontos, e a bolinha fica mais rápida.",
      en: "A simple game, in which the goal is not let the ball fall. As time goes on, the player stack up more points, but the ball gets faster.",
    },
    logoSrc: PL.bolinhaImg,
    projectLink: "https://cayo-rodrigues.github.io/jogo-da-bolinha/",
    repoLink: "https://github.com/cayo-rodrigues/jogo-da-bolinha",
  },
]
