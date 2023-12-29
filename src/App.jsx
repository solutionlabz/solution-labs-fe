import './App.css'
import ClientComments from './components/molecules/clientComments'
import Projects from './components/molecules/projects'
import Subscribe from './components/molecules/subscribe'
import WhoWeAre from './components/molecules/whoweare'
import Footer from './components/templates/footer'
import HomeHero from './components/templates/homeHero'
import ServicesHero from './components/templates/servicesHero'

function App() {
  return (
    <main>
      <HomeHero />
      <ServicesHero />
      <Projects />
      <WhoWeAre />
      <ClientComments />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App
