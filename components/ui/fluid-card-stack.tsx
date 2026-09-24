'use client'

interface FluidCard {
  title: string
  image: string
  detail: string
}

interface FluidCardStackProps {
  cards: FluidCard[]
  onCardClick?: (card: FluidCard) => void
}

export function FluidCardStack({ cards, onCardClick }: FluidCardStackProps) {
  return (
    <div className="card-stack" aria-label="Fluid card stack">
      {cards.map((card, index) => {
        return (
          <button
            key={card.title}
            className="feature-card"
            onClick={() => onCardClick?.(card)}
          >
            <span
              className="feature-card-image"
              aria-hidden="true"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className="feature-card-overlay">
              <span className="feature-title">{card.title}</span>
            </div>
            <div className="feature-content">
              <span className="feature-heading">{card.title}</span>
              <span className="feature-detail">{card.detail}</span>
              <span className="learn-more">Learn More</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}