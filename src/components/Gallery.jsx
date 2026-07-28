import { useEffect, useRef, useState } from 'react'
import { galleryImages } from '../data/content'

function GalleryItem({ image }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`gallery-item fade-up ${visible ? 'visible' : ''}`}>
      <img src={image.src} alt={image.alt} loading="lazy" />
    </div>
  )
}

function Gallery() {
  return (
    <section id="galleria" className="section">
      <div className="container">
        <div className="gallery-intro">
          <span className="label">Galería</span>
          <h2>La atmósfera<br />de Mare Monti</h2>
          <span className="gold-line" />
          <p>
            Un ambiente cálido y refinado para cada ocasión — una cena romántica,
            una celebración, un almuerzo de negocios.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <GalleryItem key={image.src} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
