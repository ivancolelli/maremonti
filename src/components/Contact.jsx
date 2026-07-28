import { useState } from 'react'
import { reservaHours, reservaPeople, site } from '../data/content'

function Contact({ onReservaSuccess }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    occasion: '',
  })

  function updateField(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onReservaSuccess()
    setForm({
      name: '',
      phone: '',
      date: '',
      time: '',
      people: '',
      occasion: '',
    })
  }

  return (
    <section id="contatti" className="section">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="label">Dónde estamos</span>
            <h2>Visítanos</h2>
            <span className="gold-line" />

            <ul className="contact-info-list">
              <li>
                <div className="contact-detail-label">Dirección</div>
                <div className="contact-detail-val">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapDestination)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.addressLines[0]}
                    <br />
                    {site.addressLines[1]}
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-detail-label">Teléfono / WhatsApp</div>
                <div className="contact-detail-val">
                  <a href={site.phoneTel}>{site.phone}</a>
                </div>
              </li>
              <li>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-val">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <div className="contact-detail-label">Instagram</div>
                <div className="contact-detail-val">
                  <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                    {site.instagram}
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-detail-label">Horario</div>
                <div className="contact-detail-val hours-inline">
                  {site.hours.map((row) => (
                    <span key={row.day}>
                      {row.day} <strong>{row.time}</strong>
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="reserva-block">
              <span className="label">Reservar mesa</span>
              <h3 style={{ marginBottom: 24 }}>Reserva tu mesa</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Nombre</label>
                    <input
                      name="name"
                      className="form-input"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={updateField}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Teléfono / WhatsApp</label>
                    <input
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+52 81..."
                      value={form.phone}
                      onChange={updateField}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Fecha</label>
                    <input
                      name="date"
                      type="date"
                      className="form-input"
                      value={form.date}
                      onChange={updateField}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Hora</label>
                    <select
                      name="time"
                      className="form-select"
                      value={form.time}
                      onChange={updateField}
                      required
                    >
                      <option value="">Seleccionar</option>
                      {reservaHours.map((hour) => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Número de personas</label>
                  <select
                    name="people"
                    className="form-select"
                    value={form.people}
                    onChange={updateField}
                    required
                  >
                    <option value="">Seleccionar</option>
                    {reservaPeople.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Ocasión especial (opcional)</label>
                  <input
                    name="occasion"
                    className="form-input"
                    placeholder="Cumpleaños, aniversario..."
                    value={form.occasion}
                    onChange={updateField}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                >
                  Confirmar reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
