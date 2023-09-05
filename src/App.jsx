import Header from './components/header/header'
import HeaderHero from './components/hero/HeaderHero'
import FeaturesHero from './components/hero/FeaturesHero'
import Blog from './components/section/blogSection'
import CallToAction from './components/section/callToAction'
import Footer from './components/footer/footer'
import './App.css'

function App() {
  

  return (
    <>
      
      <section>
        <div className="container px-4 mx-auto">

          <Header />

          <HeaderHero />

          </div>
      </section>

      <FeaturesHero />

      <Blog />

      <CallToAction />

      <Footer />

    </>
  )
}

export default App
