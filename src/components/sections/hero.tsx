import { ArrowDown } from "@phosphor-icons/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLang } from "@/stores/lang"
import avatarImg from "@/assets/images/me.jpeg"

export function HeroSection() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100svh-3.5rem)] items-center pt-14"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          <div>
            <p className="text-muted-foreground mb-2 text-sm">
              {t({ en: "Hi, I'm", pt: "Oi, eu sou o" })}
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Cayo Rodrigues
            </h1>
            <p className="text-primary mt-2 text-lg font-medium">
              {t({
                en: "Software Developer",
                pt: "Desenvolvedor de Software",
              })}
            </p>
          </div>
          <p className="text-muted-foreground max-w-lg whitespace-pre-line leading-relaxed">
            {t({
              en: "I build tools that solve real problems.\nOtherwise, why bother?",
              pt: "Eu construo ferramentas que resolvem problemas reais.\nSenão, qual o sentido?",
            })}
          </p>
          <a
            href="#experience"
            className="text-muted-foreground hover:text-foreground mt-4 flex items-center gap-2 text-sm transition-colors"
          >
            {t({ en: "See my work", pt: "Veja meu trabalho" })}
            <ArrowDown className="animate-bounce" size={16} />
          </a>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <Avatar className="size-48 md:size-64">
            <AvatarImage src={avatarImg} alt="Cayo Rodrigues" />
            <AvatarFallback className="text-4xl">CR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  )
}
