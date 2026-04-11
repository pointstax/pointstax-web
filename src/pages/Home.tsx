import { AlwaysWithYou } from '../components/AlwaysWithYou'
import { AppScreenshots } from '../components/AppScreenshots'
import { FAQ } from '../components/FAQ'
import { Features } from '../components/Features'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Nav } from '../components/Nav'

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AlwaysWithYou />
        <Features />
        <HowItWorks />
        <AppScreenshots />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
