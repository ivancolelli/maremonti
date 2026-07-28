import { useEffect, useState } from 'react'

function Navbar({ onGoToMenu }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
  }, [menuOpen])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    function onResize() {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  const navClass = [
    scrolled ? 'scrolled' : '',
    menuOpen ? 'menu-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <nav id="navbar" className={navClass}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          Mare <span>Monti</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="#storia" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="#menu" onClick={() => { closeMenu(); onGoToMenu?.('paste') }}>Menú</a></li>
          <li><a href="#galleria" onClick={closeMenu}>Galería</a></li>
          <li><a href="#recensioni" onClick={closeMenu}>Reseñas</a></li>
          <li>
            <a href="#contatti" className="btn btn-outline nav-cta" onClick={closeMenu}>
              Reservar
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
