import { IProject } from "../interfaces/projects";
import { PiggyBankIcon } from "lucide-react";

// project logos
import * as PL from "./projectLogos";

export const projectList: IProject[] = [
  {
    title: "Pick Picture",
    description: {
      pt: "Plataforma que ajuda fotógrafos profissionais a compartilhar ensaios com seus clientes, permitindo que escolham suas fotos favoritas em uma galeria elegante, com marca d'água automática e entrega facilitada.",
      en: "A platform that helps professional photographers share photo shoots with clients, letting them pick their favorite shots through an elegant gallery with automatic watermarking and easy delivery.",
    },
    logoSrc: PL.pickPickImg,
    projectLink: "https://pickpicture.com.br",
    repoLink: "",
  },
  {
    title: "Fiado Seguro",
    description: {
      pt: "Cansado de atrasos nas compras fiadas? O Fiado Seguro ajuda você a gerenciar, cobrar e receber o que é seu — sem dor de cabeça!",
      en: "Tired of chasing late payments? Fiado Seguro helps you manage, track, and collect your credit purchases — without the hassle!",
    },
    logoSrc: "",
    logoIcon: <PiggyBankIcon style={{ width: "30%", height: "auto" }} />,
    projectLink: "https://fiado-seguro.vercel.app/",
    repoLink: "",
  },
  {
    title: "NFF - Nota Fiscal Fácil",
    description: {
      pt: "Automatização de emissão, cancelamento e download de notas fiscais, além de levantamento de dados sobre vendas e compras para produtores rurais em um site do governo chamado Siare.",
      en: "Automation of invoices issuing, canceling and download, as well as data aggregation about income and expenses for farmers in a government website called Siare.",
    },
    logoSrc: PL.nffImg,
    projectLink: "https://nff-web-railway-dev.up.railway.app/",
    repoLink: "https://github.com/cayo-rodrigues/nff",
  },
  {
    title: "Safe",
    description: {
      pt: "Uma biblioteca de validação simples, mas poderosa para programas escritos em Go. Nunca confie no seu usuário. Use este pacote para validar qualquer coisa que precisar, e você saberá que está seguro!",
      en: "Simple, yet powerful validation library for Go programs. User input is unpredictable. Never trust it. Use this library to validate anything you want, and you know you're safe!",
    },
    logoSrc: PL.safeImg,
    projectLink: "https://pkg.go.dev/github.com/cayo-rodrigues/safe",
    repoLink: "https://github.com/cayo-rodrigues/safe",
  },
  {
    title: "Django Awesome Tools",
    description: {
      pt: "Um pacote Python que possui funcionalidades úteis para serem usadas em projetos Django, especialmente com Django Rest Framework, feito para facilitar a vida de desenvolvedores.",
      en: "A Python package, containing useful features to be used in Django and Django Rest Framework projects. It abstracts away some boiler plate code and common behaviors.",
    },
    logoSrc: PL.awesomeToolsImg,
    projectLink: "https://pypi.org/project/django-awesome-tools/",
    repoLink: "https://github.com/cayo-rodrigues/django-awesome-tools",
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
    title: "Jogo da bolinha",
    description: {
      pt: "Um joguinho simples cujo objetivo é não deixar a bola cair. Conforme o tempo passa o jogador acumula pontos, e a bolinha fica mais rápida.",
      en: "A simple game, in which the goal is not let the ball fall. As time goes on, the player stack up more points, but the ball gets faster.",
    },
    logoSrc: PL.bolinhaImg,
    projectLink: "https://cayo-rodrigues.github.io/jogo-da-bolinha/",
    repoLink: "https://github.com/cayo-rodrigues/jogo-da-bolinha",
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
];
