import { useState } from "react"
import { CaretDown } from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useLang } from "@/stores/lang"
import type { Tech } from "@/data/techs"

const DEFAULT_visibleCount = 5

export function TechBadges({
  techs,
  variant = "outline",
  visibleCount = DEFAULT_visibleCount,
}: {
  techs: Tech[]
  variant?: "outline" | "secondary"
  visibleCount?: number
}) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const needsCollapse = techs.length > visibleCount

  const visibleTechs = techs.slice(0, visibleCount)
  const hiddenTechs = techs.slice(visibleCount)

  if (techs.length === 0) return null

  if (!needsCollapse) {
    return (
      <div className="flex flex-wrap gap-1">
        {techs.map((tech) => (
          <TechBadge key={tech.name} tech={tech} variant={variant} />
        ))}
      </div>
    )
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex flex-wrap gap-1">
        {visibleTechs.map((tech) => (
          <TechBadge key={tech.name} tech={tech} variant={variant} />
        ))}
      </div>
      <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
        <div className="flex flex-wrap gap-1 pt-1">
          {hiddenTechs.map((tech) => (
            <TechBadge key={tech.name} tech={tech} variant={variant} />
          ))}
        </div>
      </CollapsibleContent>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="xs" className="mt-1 h-5 gap-0.5 px-1.5">
          {open
            ? t({ en: "less", pt: "menos" })
            : `+${hiddenTechs.length}`}
          <CaretDown
            size={10}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  )
}

function TechBadge({
  tech,
  variant,
}: {
  tech: Tech
  variant: "outline" | "secondary"
}) {
  return (
    <Badge variant={variant} className="gap-1.5 text-[10px]">
      {tech.logoSrc && (
        <img
          src={tech.logoSrc}
          alt={tech.name}
          className="size-3 object-contain"
        />
      )}
      {tech.name}
    </Badge>
  )
}
