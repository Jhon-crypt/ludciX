import Header from './components/header/header'
import HeaderHero from './components/hero/HeaderHero'
import FeaturesHero from './components/hero/FeaturesHero'
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

        

    </>
  )
}

export default App
