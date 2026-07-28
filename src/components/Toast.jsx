function Toast({ show }) {
  return (
    <div id="toast" className={show ? 'show' : ''}>
      ✓ Reserva enviada — te contactaremos pronto
    </div>
  )
}

export default Toast
