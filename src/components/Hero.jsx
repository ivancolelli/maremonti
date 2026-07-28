import { useEffect, useState } from 'react'
import { site } from '../data/content'

function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = site.heroImage
    img.onload = () => setLoaded(true)
  }, [])

  return (
    <section id="hero">
      <div
        className={`hero-bg ${loaded ? 'loaded' : ''}`}
        id="heroBg"
        style={{ backgroundImage: `url('${site.heroImage}')` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-tag">Monterrey, México — Desde 2005</div>
        <h1 className="hero-title">
          Donde el <em>mar</em><br />se encuentra con la montaña
        </h1>
        <p className="hero-sub">
          Cocina italiana auténtica. Ingredientes seleccionados, recetas de tradición,
          una experiencia que trae Italia al corazón de Monterrey.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn btn-gold">Ver el menú</a>
          <a href="#contatti" className="btn btn-outline">Hacer una reserva</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Descubrir</span>
      </div>
    </section>
  )
}

export default Hero
