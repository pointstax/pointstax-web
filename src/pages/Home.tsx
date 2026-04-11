import { AppScreenshots } from '../components/AppScreenshots'
import { FAQ } from '../components/FAQ'
import { Features } from '../components/Features'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Masthead } from '../components/Masthead'
import { Nav } from '../components/Nav'
import { PullQuote } from '../components/PullQuote'
import { TrustStrip } from '../components/TrustStrip'

export function Home() {
  return (
    <>
      <Masthead />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <PullQuote />
        <HowItWorks />
        <AppScreenshots />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
