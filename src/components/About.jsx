import { aboutStats } from '../data/content'
import FadeUp from './FadeUp'

function About() {
  return (
    <section id="storia" className="section">
      <div className="container">
        <div className="about-grid">
          <FadeUp>
            <div className="about-img">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Interior de Mare Monti"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <div className="about-text">
              <span className="label">Nuestra Historia</span>
              <h2>Un rincón de Italia<br />en el corazón de Monterrey</h2>
              <span className="gold-line" />
              <p>
                Maremonti es un pequeño restaurante italiano en Monterrey — íntimo, acogedor, romántico.
                Un lugar al que se viene a comer bien, sin prisa, en un ambiente cálido y cuidado.
              </p>
              <p>
                El menú ofrece los grandes clásicos de la cocina italiana: pastas, carpaccios, lasaña,
                pollo parmigiana y platos de mariscos. Cada noche, pan, aceite y entrada se sirven de
                cortesía — porque la hospitalidad es parte del plato.
              </p>
              <p>Pequeño, auténtico, siempre lleno. Se recomienda reservar.</p>

              <div className="about-stats">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="stat-val">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

export default About
