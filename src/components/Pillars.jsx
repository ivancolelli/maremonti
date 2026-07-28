import { useEffect, useRef, useState } from 'react'
import { pillars } from '../data/content'

function PillarCard({ pillar, onGoToMenu }) {
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
    <div
      ref={ref}
      className={`pillar fade-up ${visible ? 'visible' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={() => onGoToMenu(pillar.menuId)}
      title={pillar.title}
    >
      <span className="pillar-icon">{pillar.icon}</span>
      <h3>{pillar.title}</h3>
      <p>{pillar.text}</p>
      <span className="pillar-link">Ver menú →</span>
    </div>
  )
}

function Pillars({ onGoToMenu }) {
  return (
    <section id="filosofia">
      <div className="container">
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.menuId} pillar={pillar} onGoToMenu={onGoToMenu} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars
