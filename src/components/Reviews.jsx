import { reviews } from '../data/content'
import FadeUp from './FadeUp'

function Reviews() {
  return (
    <section id="recensioni">
      <div className="container">
        <div className="reviews-top">
          <span className="label">Reseñas</span>
          <h2>Lo que dicen nuestros comensales</h2>
          <div className="rating-display">
            <div className="rating-number">4.7</div>
            <div>
              <div className="rating-stars">★★★★★</div>
              <div className="rating-info">
                <span>575 reseñas en Google Maps</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <FadeUp key={review.name}>
              <div className="review-card">
                <div className="review-quote">&quot;</div>
                <p className="review-text">{review.text}</p>
                <div className="review-author">
                  <div className="review-avatar">{review.initials}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-meta">{review.meta}</div>
                  </div>
                  <div className="review-stars">{review.stars}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
