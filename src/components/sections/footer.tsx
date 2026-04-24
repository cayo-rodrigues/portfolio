import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="py-8">
      <Separator className="mb-8" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Cayo Rodrigues
        </p>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon-sm" asChild>
            <a
              href="https://github.com/cayo-rodrigues"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo weight="bold" />
            </a>
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <a
              href="https://www.linkedin.com/in/cayo-rodrigues/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo weight="bold" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
