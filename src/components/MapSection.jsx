import { useState } from 'react'
import { site } from '../data/content'

function MapSection() {
  const [origin, setOrigin] = useState('')
  const [coords, setCoords] = useState('')
  const [mapSrc, setMapSrc] = useState(site.mapEmbed)
  const [hint, setHint] = useState('Escribe tu dirección o usa tu ubicación actual')
  const [hintColor, setHintColor] = useState('')
  const [showReset, setShowReset] = useState(false)
  const [locating, setLocating] = useState(false)

  function showHint(message, color = '') {
    setHint(message)
    setHintColor(color)
  }

  function showDirections(from) {
    if (!from) return
    const url =
      `https://maps.google.com/maps?saddr=${encodeURIComponent(from)}` +
      `&daddr=${encodeURIComponent(site.mapDestination)}&output=embed&hl=es`
    setMapSrc(url)
    setShowReset(true)
    showHint('📍 Ruta cargada — desplázate al mapa para verla', 'var(--gold)')
    document.getElementById('mapa')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const start = coords || origin.trim()
    if (!start) {
      showHint('⚠️ Escribe tu dirección o usa el GPS', 'var(--gold)')
      return
    }
    showDirections(start)
  }

  function resetMap() {
    setMapSrc(site.mapEmbed)
    setShowReset(false)
    setOrigin('')
    setCoords('')
    showHint('Escribe tu dirección o usa tu ubicación actual')
  }

  async function locateMe() {
    if (!navigator.geolocation) {
      showHint('Tu navegador no soporta geolocalización.', '#e8a0a0')
      return
    }

    setLocating(true)
    showHint('Detectando tu ubicación…', 'rgba(255,255,255,0.5)')

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords
        const value = `${latitude},${longitude}`
        setCoords(value)
        setLocating(false)
        showHint('📍 Ubicación detectada — pulsa Ver ruta', 'var(--gold)')

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
          const data = await res.json()
          const address = data.display_name?.split(',').slice(0, 3).join(',') || value
          setOrigin(address)
        } catch {
          setOrigin(value)
        }
      },
      (err) => {
        setLocating(false)
        const messages = {
          1: '⚠️ Permiso denegado. Activa la ubicación en tu navegador.',
          2: '⚠️ No se pudo detectar tu posición.',
          3: '⚠️ Tiempo agotado. Inténtalo de nuevo.',
        }
        showHint(messages[err.code] || '⚠️ Error de geolocalización.', 'var(--gold)')
      },
      { timeout: 8000, enableHighAccuracy: true }
    )
  }

  return (
    <div className="map-section" id="mapa">
      <div className="map-overlay">
        <div className="map-overlay__card">
          <p className="map-overlay__label">📍 Dónde estamos</p>
          <h3 className="map-overlay__title">Mare Monti</h3>
          <p className="map-overlay__addr">
            Plaza Revolución, Av. Revolución 3985 local 3
            <br />
            Torremolinos, Monterrey, N.L.
          </p>
          <div className="map-divider" />
          <p className="map-overlay__label" style={{ marginTop: 4 }}>¿Cómo llegar?</p>

          <form className="map-directions-form" onSubmit={handleSubmit}>
            <div className="map-input-wrap">
              <input
                type="text"
                className="map-directions-input"
                placeholder="Tu dirección o punto de partida..."
                value={origin}
                onChange={(e) => {
                  setOrigin(e.target.value)
                  setCoords('')
                }}
                style={coords ? { borderColor: 'var(--gold)' } : undefined}
                autoComplete="off"
              />
              <button
                type="button"
                className={`map-locate-btn ${locating ? 'locating' : ''}`}
                title="Usar mi ubicación"
                onClick={locateMe}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
                </svg>
              </button>
            </div>

            <div className="map-directions-actions">
              <button type="submit" className="btn btn-gold map-directions-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                Ver ruta
              </button>
              {showReset && (
                <button type="button" className="btn btn-map-outline" onClick={resetMap}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 .49-3.87" />
                  </svg>
                  Volver
                </button>
              )}
            </div>
          </form>

          <p className="map-directions-hint" style={hintColor ? { color: hintColor } : undefined}>
            {hint}
          </p>
        </div>
      </div>

      <iframe
        className="map-iframe"
        src={mapSrc}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mare Monti — Mapa"
      />
    </div>
  )
}

export default MapSection
