import { ArrowSquareOut, Briefcase, GraduationCap } from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { TechBadges } from "@/components/tech-badges"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLang } from "@/stores/lang"
import { experiences, type Experience } from "@/data/experience"

function formatPeriod(period: Experience["period"], lang: "en" | "pt") {
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-")
    const date = new Date(Number(year), Number(month) - 1)
    return date.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
      month: "short",
      year: "numeric",
    })
  }

  const start = formatDate(period.start)

  if (!period.end) {
    const since = lang === "pt" ? "Desde" : "Since"
    return `${since} ${start}`
  }

  return `${start} — ${formatDate(period.end)}`
}

function TimelineItem({ experience }: { experience: Experience }) {
  const { lang, t } = useLang()
  const isWork = experience.type === "work"

  return (
    <div className="group relative pl-10">
      {/* Icon on the line */}
      <div className="bg-background absolute left-0 top-1 flex size-7 items-center justify-center border">
        {isWork ? (
          <Briefcase size={14} className="text-primary" weight="bold" />
        ) : (
          <GraduationCap
            size={14}
            className="text-muted-foreground"
            weight="bold"
          />
        )}
      </div>

      <Card className="hover:ring-primary/50 transition-colors">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            {formatPeriod(experience.period, lang)}
            {!experience.period.end && (
              <Badge variant="default" className="text-[10px]">
                {lang === "pt" ? "Atual" : "Current"}
              </Badge>
            )}
          </CardDescription>
          <CardTitle>
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary inline-flex items-center gap-1.5 transition-colors"
              >
                {experience.company}
                <ArrowSquareOut size={12} className="text-muted-foreground" />
              </a>
            ) : (
              experience.company
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-primary text-xs font-medium">
            {t(experience.role)}
          </p>
          <p className="text-muted-foreground text-xs leading-relaxed">
            {t(experience.description)}
          </p>
          <TechBadges techs={experience.techs} variant="secondary" visibleCount={12} />
        </CardContent>
      </Card>
    </div>
  )
}

export function ExperienceSection() {
  const { t } = useLang()

  return (
    <section id="experience" className="bg-card/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-2xl font-bold tracking-tight">
          {t({ en: "Experience", pt: "Experiência" })}
        </h2>

        <div className="relative flex flex-col gap-8">
          {/* Vertical line */}
          <div className="bg-border absolute bottom-0 left-[13px] top-0 w-px" />

          {experiences.map((exp, i) => (
            <TimelineItem key={i} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
