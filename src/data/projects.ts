import pickpicImg from "@/assets/project-logos/pickpic.png"
import nffImg from "@/assets/project-logos/nff.png"
import safeImg from "@/assets/project-logos/safe.png"
import fiadoSeguroImg from "@/assets/project-logos/fiado-seguro.png"
import { tech, type Tech } from "@/data/techs"

export interface Project {
  title: string
  description: { pt: string; en: string }
  logoSrc: string
  projectLink: string
  repoLink: string
  techStack: Tech[]
}

export const projects: Project[] = [
  {
    title: "Pick Picture",
    description: {
      pt: "Plataforma que ajuda fotógrafos profissionais a compartilhar ensaios com seus clientes, permitindo que escolham suas fotos favoritas em uma galeria elegante, com marca d'água automática e entrega facilitada.",
      en: "A platform that helps professional photographers share photo shoots with clients, letting them pick their favorite shots through an elegant gallery with automatic watermarking and easy delivery.",
    },
    logoSrc: pickpicImg,
    projectLink: "https://pickpicture.com.br",
    repoLink: "",
    techStack: [
      tech["Next.js"],
      tech["TypeScript"],
      tech["Turso"],
      tech["Drizzle"],
      tech["Stripe"],
      tech["React"],
      tech["Auth.js"],
      tech["Tailwind"],
      tech["shadcn/ui"],
      tech["Zustand"],
      tech["Zod"],
      tech["React Hook Form"],
      tech["node:test"],
      tech["CI / CD"],
      tech["AWS"],
      tech["Node.js"],
      tech["Vercel"],
    ],
  },
  {
    title: "Fiado Seguro",
    description: {
      pt: "Um SaaS feito para ajudar donos de negócios a gerenciar clientes devedores, manter o controle das pendências e cobrar com facilidade — sem dor de cabeça.",
      en: "A SaaS built to help business owners manage customers who owe them, keep track of debts, and easily send payment reminders — no hassle.",
    },
    logoSrc: fiadoSeguroImg,
    projectLink: "https://fiado-seguro.vercel.app/",
    repoLink: "",
    techStack: [
      tech["Next.js"],
      tech["TypeScript"],
      tech["Prisma"],
      tech["PostgreSQL"],
      tech["Puppeteer"],
      tech["Auth.js"],
      tech["Tailwind"],
      tech["React"],
      tech["CI / CD"],
      tech["node:test"],
      tech["shadcn/ui"],
      tech["Vercel"],
      tech["Node.js"],
    ], 
  },
  {
    title: "NFF - Nota Fiscal Fácil",
    description: {
      pt: "Automatiza a emissão, cancelamento e download de notas fiscais, além de gerar relatórios de vendas e compras para produtores rurais em um site do governo chamado Siare. Já economizou incontáveis horas de trabalho.",
      en: "Automates invoice issuing, canceling, and downloading, as well as generating sales and purchase reports for farmers on a government website called Siare. It has saved countless hours of work.",
    },
    logoSrc: nffImg,
    projectLink: "https://nff-web-railway-dev.up.railway.app/",
    repoLink: "https://github.com/cayo-rodrigues/nff",
    techStack: [
      tech["Go"],
      tech["HTMX"],
      tech["a-h/templ"],
      tech["Python"],
      tech["Selenium"],
      tech["Fiber"],
      tech["Turso"],
      tech["Goose"],
      tech["JavaScript"],
      tech["Tailwind"],
      tech["Docker"],
      tech["AWS"],
      tech["Railway"],
      tech["CI / CD"],
    ], 
  },
  {
    title: "Safe",
    description: {
      pt: "Uma biblioteca de validação simples, mas poderosa para programas escritos em Go. Nunca confie no seu usuário. Use este pacote para validar qualquer coisa que precisar, e você saberá que está seguro!",
      en: "Simple, yet powerful validation library for Go programs. User input is unpredictable. Never trust it. Use this library to validate anything you want, and you know you're safe!",
    },
    logoSrc: safeImg,
    projectLink: "https://pkg.go.dev/github.com/cayo-rodrigues/safe",
    repoLink: "https://github.com/cayo-rodrigues/safe",
    techStack: [
      tech["Go"],
      tech["Go testing"],
      tech["CI / CD"],
    ], 
  },
]
