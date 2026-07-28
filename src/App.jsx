import { useState } from 'react'
import DemoBanner from './components/DemoBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import Fab from './components/Fab'
import Toast from './components/Toast'

function App() {
  const [activeTab, setActiveTab] = useState('paste')
  const [toastShow, setToastShow] = useState(false)

  function goToMenu(tabId) {
    setActiveTab(tabId)
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleReservaSuccess() {
    setToastShow(true)
    setTimeout(() => setToastShow(false), 3500)
  }

  return (
    <>
      <DemoBanner />
      <Navbar onGoToMenu={goToMenu} />
      <Hero />
      <Pillars onGoToMenu={goToMenu} />
      <About />
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
      <Gallery />
      <Reviews />
      <Contact onReservaSuccess={handleReservaSuccess} />
      <MapSection />
      <Footer />
      <Fab />
      <Toast show={toastShow} />
    </>
  )
}

export default App
