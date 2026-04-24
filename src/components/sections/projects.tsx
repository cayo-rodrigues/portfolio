import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { TechBadges } from "@/components/tech-badges"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLang } from "@/stores/lang"
import { projects, type Project } from "@/data/projects"

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang()

  return (
    <Card className="flex flex-col transition-all hover:ring-primary/50 md:flex-row">
      {/* Logo area */}
      <div className="flex items-center justify-center bg-muted/30 p-8 md:w-[35%] md:p-10">
        {project.logoSrc ? (
          <img
            src={project.logoSrc}
            alt={project.title}
            className="max-h-36 max-w-36 object-contain"
          />
        ) : null}
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col">
        <CardHeader>
          <CardTitle className="text-base">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t(project.description)}
          </p>
          <TechBadges techs={project.techStack} variant="outline" />
        </CardContent>
        <CardFooter className="gap-2">
          <Button variant="default" size="sm" asChild>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowSquareOutIcon data-icon="inline-start" weight="bold" />
              {t({ en: "Visit", pt: "Visitar" })}
            </a>
          </Button>
          {project.repoLink && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogoIcon data-icon="inline-start" weight="bold" />
                {t({ en: "Source", pt: "Código" })}
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  )
}

export function ProjectsSection() {
  const { t } = useLang()

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-2xl font-bold tracking-tight">
          {t({ en: "Projects", pt: "Projetos" })}
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
