import { site } from '../data/content'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Mare <span>Monti</span></div>
            <p className="footer-tagline">
              Cocina italiana auténtica en el corazón de Monterrey.
              Donde el mar se encuentra con la montaña, cada noche.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Navegar</div>
            <ul className="footer-links">
              <li><a href="#storia">Nuestra historia</a></li>
              <li><a href="#menu">El menú</a></li>
              <li><a href="#galleria">Galería</a></li>
              <li><a href="#recensioni">Reseñas</a></li>
              <li><a href="#contatti">Reservar</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contacto</div>
            <ul className="footer-links">
              <li><a href={site.phoneTel}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Mare Monti — Restaurante Italiano, Monterrey</span>
          <div className="social-links">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
