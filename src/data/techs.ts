export type TechCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "ai"
  | "databases"
  | "devops"
  | "testing"
  | "tools"

export interface Tech {
  name: string
  logoSrc: string
  category: TechCategory
  hidden?: boolean
}

export const categoryLabels: Record<TechCategory, { pt: string; en: string }> =
  {
    languages: { pt: "Linguagens", en: "Languages" },
    frontend: { pt: "Frontend", en: "Frontend" },
    backend: { pt: "Backend", en: "Backend" },
    ai: { pt: "IA", en: "AI" },
    databases: { pt: "Banco de Dados", en: "Databases" },
    devops: { pt: "DevOps & Infra", en: "DevOps & Infra" },
    testing: { pt: "Testes", en: "Testing" },
    tools: { pt: "Ferramentas", en: "Tools" },
  }

export const categoryOrder: TechCategory[] = [
  "languages",
  "frontend",
  "backend",
  "ai",
  "databases",
  "devops",
  "testing",
  "tools",
]

// Local asset imports
import sqliteImg from "@/assets/tech-logos/sqlite.png"
import djImg from "@/assets/tech-logos/dj.png"
import githubImg from "@/assets/tech-logos/github.svg"
import htmxImg from "@/assets/tech-logos/htmx.png"
import ghActionsImg from "@/assets/tech-logos/actions.png"
import gooseImg from "@/assets/tech-logos/goose.png"
import langChainImg from "@/assets/tech-logos/langchain.png"
import langGraphImg from "@/assets/tech-logos/langgraph.png"
import langFuseImg from "@/assets/tech-logos/langfuse.svg"
import templImg from "@/assets/tech-logos/templ.png"
import drizzleImg from "@/assets/tech-logos/drizzle.svg"
import expressImg from "@/assets/tech-logos/express.svg"
import shadcnImg from "@/assets/tech-logos/shadcn-ui.png"
import tursoImg from "@/assets/tech-logos/turso.png"
import authJsImg from "@/assets/tech-logos/authjs.png"
import stripeImg from "@/assets/tech-logos/stripe.svg"
import zodImg from "@/assets/tech-logos/zod.svg"
import reactHookFormImg from "@/assets/tech-logos/rhf.png"
import typeormImg from "@/assets/tech-logos/typeorm.png"

// Remote CDN logos
const cImg =
  "https://devicon-website.vercel.app/api/c/original.svg"
const flaskImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
const angularjsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
const bootstrapImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
const jqueryImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
const pyImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
const reactImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
const tsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
const jsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
const nodeImg = "https://devicon-website.vercel.app/api/nodejs/original.svg"
const psqlImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
const mysqlImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
const redisImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
const htmlImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
const cssImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
const dockerImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
const linuxImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
const nvimImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg"
const gitImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
const seleniumImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
const goImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
const tailwindImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
const awsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
const nginxImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
const k8sImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg"
const nextjsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
const jestImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
const pytestImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg"
const drfImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-line.svg"
const fiberImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fiber/fiber-plain.svg"
const prismaImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
const gitLabImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
const puppeteerImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/puppeteer/puppeteer-original.svg"
const railwayImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg"
const sqlImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"
const styledComponentsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg"
const vercelImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
const zustandImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg"
const knexImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/knexjs/knexjs-original.svg"
const fastApiImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"

export const techs: Tech[] = [
  // Languages
  { name: "Python", logoSrc: pyImg, category: "languages" },
  { name: "Go", logoSrc: goImg, category: "languages" },
  { name: "TypeScript", logoSrc: tsImg, category: "languages" },
  { name: "JavaScript", logoSrc: jsImg, category: "languages" },

  // Frontend
  { name: "React", logoSrc: reactImg, category: "frontend" },
  { name: "React Native", logoSrc: reactImg, category: "frontend" },
  { name: "Next.js", logoSrc: nextjsImg, category: "frontend" },
  { name: "HTMX", logoSrc: htmxImg, category: "frontend" },
  { name: "a-h/templ", logoSrc: templImg, category: "frontend" },
  { name: "Zustand", logoSrc: zustandImg, category: "frontend" },
  { name: "Zod", logoSrc: zodImg, category: "frontend" },
  { name: "React Hook Form", logoSrc: reactHookFormImg, category: "frontend" },
  { name: "shadcn/ui", logoSrc: shadcnImg, category: "frontend" },
  { name: "Styled Components", logoSrc: styledComponentsImg, category: "frontend" },
  { name: "Tailwind", logoSrc: tailwindImg, category: "frontend" },
  { name: "HTML", logoSrc: htmlImg, category: "frontend" },
  { name: "CSS", logoSrc: cssImg, category: "frontend" },

  // Backend
  { name: "Django", logoSrc: djImg, category: "backend" },
  { name: "Django Rest Framework", logoSrc: drfImg, category: "backend" },
  { name: "FastAPI", logoSrc: fastApiImg, category: "backend" },
  { name: "Node.js", logoSrc: nodeImg, category: "backend" },
  { name: "Express", logoSrc: expressImg, category: "backend" },
  { name: "Fiber", logoSrc: fiberImg, category: "backend" },
  { name: "Auth.js", logoSrc: authJsImg, category: "backend" },
  { name: "Stripe", logoSrc: stripeImg, category: "backend" },

  // AI
  { name: "LangChain", logoSrc: langChainImg, category: "ai" },
  { name: "LangGraph", logoSrc: langGraphImg, category: "ai" },
  { name: "Langfuse", logoSrc: langFuseImg, category: "ai" },

  // Databases
  { name: "SQL", logoSrc: sqlImg, category: "databases" },
  { name: "PostgreSQL", logoSrc: psqlImg, category: "databases" },
  { name: "MySQL", logoSrc: mysqlImg, category: "databases" },
  { name: "SQLite", logoSrc: sqliteImg, category: "databases" },
  { name: "Turso", logoSrc: tursoImg, category: "databases" },
  { name: "Redis", logoSrc: redisImg, category: "databases" },
  { name: "Goose", logoSrc: gooseImg, category: "databases" },
  { name: "Prisma", logoSrc: prismaImg, category: "databases" },
  { name: "Knex", logoSrc: knexImg, category: "databases", hidden: true },
  { name: "Drizzle", logoSrc: drizzleImg, category: "databases" },

  // DevOps & Infra
  { name: "Docker", logoSrc: dockerImg, category: "devops" },
  { name: "Kubernetes", logoSrc: k8sImg, category: "devops" },
  { name: "AWS", logoSrc: awsImg, category: "devops" },
  { name: "Nginx", logoSrc: nginxImg, category: "devops", hidden: true },
  { name: "Railway", logoSrc: railwayImg, category: "devops" },
  { name: "Vercel", logoSrc: vercelImg, category: "devops" },
  { name: "CI / CD", logoSrc: ghActionsImg, category: "devops" },

  // Testing
  { name: "Go testing", logoSrc: goImg, category: "testing" },
  { name: "node:test", logoSrc: nodeImg, category: "testing" },
  { name: "unittest", logoSrc: pyImg, category: "testing" },
  { name: "Jest", logoSrc: jestImg, category: "testing" },
  { name: "Pytest", logoSrc: pytestImg, category: "testing" },
  { name: "Selenium", logoSrc: seleniumImg, category: "testing" },
  { name: "Puppeteer", logoSrc: puppeteerImg, category: "testing" },

  // Tools
  { name: "Git", logoSrc: gitImg, category: "tools" },
  { name: "GitHub", logoSrc: githubImg, category: "tools" },
  { name: "GitLab", logoSrc: gitLabImg, category: "tools" },
  { name: "Linux", logoSrc: linuxImg, category: "tools" },
  { name: "Neovim", logoSrc: nvimImg, category: "tools" },

  // Hidden — only used in project/experience references
  { name: "C", logoSrc: cImg, category: "languages", hidden: true },
  { name: "Flask", logoSrc: flaskImg, category: "backend", hidden: true },
  { name: "AngularJS", logoSrc: angularjsImg, category: "frontend", hidden: true },
  { name: "TypeORM", logoSrc: typeormImg, category: "databases", hidden: true },
  { name: "Bootstrap", logoSrc: bootstrapImg, category: "frontend", hidden: true },
  { name: "jQuery", logoSrc: jqueryImg, category: "frontend", hidden: true },
]

export const tech = Object.fromEntries(
  techs.map((t) => [t.name, t]),
) as Record<string, Tech>
