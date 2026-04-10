import { AppScreenshots } from './components/AppScreenshots'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Nav } from './components/Nav'
import { TrustStrip } from './components/TrustStrip'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
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

export default App
