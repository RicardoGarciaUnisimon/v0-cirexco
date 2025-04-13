import { NavBar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { UserCards } from "@/components/user-cards"
import { CircleInfo } from "@/components/circle-info"
import { DiagnosticSection } from "@/components/diagnostic-section"
import { ImprovementPlan } from "@/components/improvement-plan"
import { TrainingSection } from "@/components/training-section"
import { SuccessCases } from "@/components/success-cases"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <HeroSection />
      <StatsSection />
      <UserCards />
      <CircleInfo />
      <DiagnosticSection />
      <ImprovementPlan />
      <TrainingSection />
      <SuccessCases />
      <Partners />
      <Footer />
    </main>
  )
}
