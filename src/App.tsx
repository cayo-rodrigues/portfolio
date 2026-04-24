import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { TechSection } from "@/components/sections/tech"
import { Footer } from "@/components/sections/footer"

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechSection />
      </main>
      <Footer />
    </>
  )
}

export default App
