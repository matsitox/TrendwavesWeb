import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { AboutSection } from "@/components/about-section"
import { InfluencersSection } from "@/components/influencers-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <InfluencersSection />
      <ProjectsSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
