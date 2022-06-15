import pwImg from "../assets/images/pw.png"

import pyImg from "../assets/images/py.png"
import jsImg from "../assets/images/js.png"
import tsImg from "../assets/images/ts.png"
import reactImg from "../assets/images/react.png"
import nodeImg from "../assets/images/node.png"
import typeormImg from "../assets/images/typeorm.png"
import psqlImg from "../assets/images/psql.png"
import sqliteImg from "../assets/images/sqlite.png"
import djImg from "../assets/images/dj.png"
import htmlImg from "../assets/images/html.png"
import cssImg from "../assets/images/css.png"
import expressImg from "../assets/images/express.png"

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
    title: "Proworking",
    description:
      "Um projeto cujo objetivo é conectar de forma fácil e simples prestadores de serviço informais com pessoas que precisam desses serviços",
    logoSrc: pwImg,
    projectLink: "https://proworking.vercel.app/",
    repoLink: "https://github.com/cayo-rodrigues/capstone-m3",
  },
  {
    title: "Proworking",
    description:
      "Um projeto cujo objetivo é conectar de forma fácil e simples prestadores de serviço informais com pessoas que precisam desses serviços",
    logoSrc: pwImg,
    projectLink: "https://proworking.vercel.app/",
    repoLink: "https://github.com/cayo-rodrigues/capstone-m3",
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
