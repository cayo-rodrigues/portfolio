import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { useLang } from "@/stores/lang"
import {
  techs,
  categoryLabels,
  categoryOrder,
  type TechCategory,
} from "@/data/techs"

function TechBadge({ name, logoSrc }: { name: string; logoSrc: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          variant="outline"
          className="cursor-default gap-2 py-1.5 text-xs"
        >
          <img
            src={logoSrc}
            alt={name}
            className="size-4 object-contain"
            loading="lazy"
          />
          {name}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  )
}

function TechCategoryGroup({ category }: { category: TechCategory }) {
  const { t } = useLang()
  const categoryTechs = techs.filter(
    (tech) => tech.category === category && !tech.hidden,
  )

  if (categoryTechs.length === 0) return null

  return (
    <div>
      <h3 className="text-muted-foreground mb-3 text-[11px] font-medium uppercase tracking-widest">
        {t(categoryLabels[category])}
      </h3>
      <Separator className="mb-3" />
      <div className="flex flex-wrap gap-2">
        {categoryTechs.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} logoSrc={tech.logoSrc} />
        ))}
      </div>
    </div>
  )
}

export function TechSection() {
  const { t } = useLang()

  return (
    <section id="tech" className="bg-card/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-2xl font-bold tracking-tight">
          {t({ en: "Tech & Tools", pt: "Tecnologias & Ferramentas" })}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map((category) => (
            <TechCategoryGroup key={category} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
