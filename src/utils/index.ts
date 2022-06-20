import pwImg from "../assets/projectLogos/pw.png"
import yocaImg from "../assets/projectLogos/yoca.png"

import pyImg from "../assets/techLogos/py.png"
import jsImg from "../assets/techLogos/js.png"
import tsImg from "../assets/techLogos/ts.png"
import reactImg from "../assets/techLogos/react.png"
import nodeImg from "../assets/techLogos/node.png"
import expressImg from "../assets/techLogos/express.svg"
import typeormImg from "../assets/techLogos/typeorm.png"
import psqlImg from "../assets/techLogos/psql.png"
import sqliteImg from "../assets/techLogos/sqlite.png"
import djImg from "../assets/techLogos/dj.png"
import htmlImg from "../assets/techLogos/html.png"
import cssImg from "../assets/techLogos/css.png"

import { IProject } from "../interfaces/projects"
import { ITech } from "../interfaces/techs"

export const projectList: IProject[] = [
  {
    title: "Proworking",
    description:
      "Um projeto cujo objetivo é conectar de forma fácil e simples prestadores de serviço informais com pessoas que precisam desses serviços",
    logoSrc: pwImg,
    projectLink: "https://proworking.vercel.app/",
    repoLink: "https://github.com/cayo-rodrigues/capstone-m3",
  },
  {
    title: "Yoca",
    description:
      "Uma api com o objetivo de gerenciar os processos envolvidos na administração de um restaurante, com controle de estoque semi-automático",
    logoSrc: yocaImg,
    projectLink: "https://cayoca.herokuapp.com/api/docs/",
    repoLink: "https://github.com/cayo-rodrigues/yoca",
  },
]

export const techList: ITech[] = [
  {
    logoSrc: pyImg,
    name: "Python",
  },
  {
    logoSrc: djImg,
    name: "Django",
  },
  {
    logoSrc: reactImg,
    name: "React",
  },
  {
    logoSrc: tsImg,
    name: "Typescript",
  },
  {
    logoSrc: jsImg,
    name: "Javascript",
  },
  {
    logoSrc: nodeImg,
    name: "Node.js",
  },
  {
    logoSrc: typeormImg,
    name: "TypeORM",
  },
  {
    logoSrc: expressImg,
    name: "Express",
  },
  {
    logoSrc: psqlImg,
    name: "PostgreSQL",
  },
  {
    logoSrc: sqliteImg,
    name: "SQLite",
  },

  {
    logoSrc: htmlImg,
    name: "HTML",
  },
  {
    logoSrc: cssImg,
    name: "CSS",
  },
]
