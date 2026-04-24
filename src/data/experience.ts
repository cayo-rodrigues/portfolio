import { tech, type Tech } from "@/data/techs"

export type ExperienceType = "work" | "education"

export interface Experience {
  type: ExperienceType
  company: string
  companyUrl?: string
  role: { pt: string; en: string }
  description: { pt: string; en: string }
  period: { start: string; end: string | null }
  techs: Tech[]
}

export const experiences: Experience[] = [
  {
    type: "work",
    company: "Stefanini Group",
    companyUrl: "https://stefanini.com",
    role: {
      pt: "Desenvolvedor de Software",
      en: "Software Developer",
    },
    description: {
      pt: "Trabalho como Desenvolvedor de Software na Stefanini, prestando serviços para a Dell. Atuo em uma equipe multinacional, com colegas da Índia, EUA, Romênia e Brasil. Meu trabalho é focado em um projeto de IA, no qual conectamos diversos agentes LLM em um workflow, consumindo dados de várias fontes. Trabalhamos em Scrum com forte comunicação assíncrona por conta dos fusos horários. Atuo em qualquer área necessária — backend (FastAPI, LangChain), frontend (Next.js) ou devops (CI/CD, Docker, Kubernetes).",
      en: "I work as a Software Developer at Stefanini, where I provide services for Dell. At Dell I work in a multinational team, with folks from India, USA, Romania and Brazil. My job is primarily related to an AI focused project, in which we wire many LLM agents together in a workflow, retrieving data from many sources. We work in a scrum environment, meeting once a day, but with a high focus on having good async communication, due to time zone offsets. I handle tasks in any area, be it the backend (FastAPI, LangChain), frontend (Next.js) or devops (CI/CD pipelines, Docker, Kubernetes)",
    },
    period: { start: "2025-11", end: null },
    techs: [
      tech["Python"],
      tech["FastAPI"],
      tech["LangChain"],
      tech["LangGraph"],
      tech["Langfuse"],
      tech["Pytest"],
      tech["SQL"],
      tech["TypeScript"],
      tech["Next.js"],
      tech["React"],
      tech["Node.js"],
      tech["Drizzle"],
      tech["Docker"],
      tech["Kubernetes"],
      tech["CI / CD"],
      tech["GitLab"],
      tech["Git"],
    ],
  },
  {
    type: "work",
    company: "Contele Soluções Tecnológicas",
    companyUrl: "https://contele.com.br",
    role: {
      pt: "Desenvolvedor de Software",
      en: "Software Developer",
    },
    description: {
      pt: "No dia a dia resolvia bugs, desenvolvia novas funcionalidades, colaborava com o time de produto, revisava PRs e testava features antes de irem para produção. Nos dois primeiros anos foquei no backend e frontend legado, escritos em JavaScript com Node/Express no servidor e Angular e React no cliente. Também tive a oportunidade de criar novos serviços do zero. No último ano, trabalhei em um app mobile em React Native, com JavaScript e TypeScript.",
      en: "In my day to day I used to solve bugs, develop new features, help (and ask help from) my teammates, collaborate with the product team, review PRs and test features before they go into production. As the need arises I can play many roles. For the first two years in this company I have focused on working with the legacy backend and frontend code, written in Javascript, with Node and Express on the server, and both Angular and React on the client. Nevertheless, sometimes I had the opportunity of working in new services, from zero to production. Then, during my last year in the company I worked on a new mobile app written in React Native, with both Javascript and Typescript.",
    },
    period: { start: "2022-08", end: "2025-10" },
    techs: [
      tech["JavaScript"],
      tech["TypeScript"],
      tech["Node.js"],
      tech["React"],
      tech["React Native"],
      tech["AngularJS"],
      tech["HTML"],
      tech["CSS"],
      tech["Styled Components"],
      tech["Zod"],
      tech["React Hook Form"],
      tech["Jest"],
      tech["node:test"],
      tech["Express"],
      tech["Knex"],
      tech["SQL"],
      tech["PostgreSQL"],
      tech["MySQL"],
      tech["Docker"],
      tech["CI / CD"],
      tech["Kubernetes"],
      tech["AWS"],
      tech["GitHub"],
      tech["Git"],
    ],
  },
  {
    type: "education",
    company: "Kenzie Academy",
    companyUrl: "https://kenzie.com.br",
    role: {
      pt: "Desenvolvimento Web Full Stack",
      en: "Full Stack Web Development",
    },
    description: {
      pt: "Curso de desenvolvimento web full stack, com foco em hard e soft skills e projetos em equipe.",
      en: "Full stack web development course, focused on hard and soft skills and team projects.",
    },
    period: { start: "2021-09", end: "2022-09" },
    techs: [
      tech["JavaScript"],
      tech["TypeScript"],
      tech["Node.js"],
      tech["React"],
      tech["HTML"],
      tech["CSS"],
      tech["Styled Components"],
      tech["Express"],
      tech["Jest"],
      tech["Python"],
      tech["Django"],
      tech["Django Rest Framework"],
      tech["unittest"],
      tech["SQL"],
      tech["SQLite"],
      tech["PostgreSQL"],
      tech["TypeORM"],
      tech["Docker"],
      tech["AWS"],
      tech["Git"],
      tech["GitHub"],
    ],
  },
  {
    type: "education",
    company: "CS50x — Harvard",
    companyUrl: "https://cs50.harvard.edu/x/",
    role: {
      pt: "Introdução à Ciência da Computação",
      en: "Introduction to Computer Science",
    },
    description: {
      pt: "Introdução à ciência da computação de Harvard. Curso incrível que me ensinou a resolver problemas com e sem código, com ênfase em corretude, design e estilo. Os tópicos incluem pensamento computacional, abstração, algoritmos, estruturas de dados e ciência da computação de forma geral.",
      en: "Harvard's Introduction to Computer Science. Amazing course that taught me how to solve problems both with and without code, with an emphasis on correctness, design, and style. Topics include computational thinking, abstraction, algorithms, data structures, and computer science more generally.",
    },
    period: { start: "2020-11", end: "2021-05" },
    techs: [
      tech["C"],
      tech["Python"],
      tech["SQL"],
      tech["SQLite"],
      tech["HTML"],
      tech["CSS"],
      tech["JavaScript"],
      tech["Flask"],
      tech["jQuery"],
      tech["Bootstrap"],
      tech["Git"],
      tech["GitHub"],
    ],
  },
]
