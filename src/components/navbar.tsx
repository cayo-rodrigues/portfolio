import { GithubLogo, LinkedinLogo, List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useLang } from "@/stores/lang"

const navLinks = [
  { id: "hero", label: { en: "About", pt: "Sobre" } },
  { id: "experience", label: { en: "Experience", pt: "Experiência" } },
  { id: "projects", label: { en: "Projects", pt: "Projetos" } },
  { id: "tech", label: { en: "Tech", pt: "Tech" } },
]

export function Navbar() {
  const { lang, setLang, t } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="text-sm font-medium tracking-tight"
        >
          Cayo Rodrigues
        </a>

        {/* Desktop nav */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink href={`#${link.id}`}>
                  {t(link.label)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={lang}
            onValueChange={(v) => {
              if (v) setLang(v as "en" | "pt")
            }}
          >
            <ToggleGroupItem value="en">EN</ToggleGroupItem>
            <ToggleGroupItem value="pt">PT</ToggleGroupItem>
          </ToggleGroup>

          <Separator orientation="vertical" className="mx-1 h-5" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href="https://github.com/cayo-rodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo weight="bold" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href="https://www.linkedin.com/in/cayo-rodrigues/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo weight="bold" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X weight="bold" /> : <List weight="bold" />}
          </Button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t px-6 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-muted-foreground hover:text-foreground block py-1.5 text-sm transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
