'use client'

const cards = [
  { title: 'Lightning Fast', icon: 'ϟ', detail: 'Fast and responsive performance for every workflow.' },
  { title: 'Secure Vaults', icon: '▣', detail: 'Private, protected spaces for your most important work.' },
  { title: 'AI Automation', icon: '▦', detail: 'Intelligent automation that learns from your workflow. Let AI handle the repetitive tasks.' },
  { title: 'Scale Forever', icon: '↗', detail: 'A flexible foundation built to grow with your ambitions.' },
]

export default function Page() {
  return (
    <main className="automation-page">
      <section className="card-stack" aria-label="Product features">
        {cards.map((card, index) => {
          return (
            <button
              key={card.title}
              className="feature-card"
            >
              <span className="feature-icon" aria-hidden="true">{card.icon}</span>
              <span className="feature-title">{card.title}</span>
              <span className="feature-content">
                <span className="feature-heading">{card.title}</span>
                <span className="feature-detail">{card.detail}</span>
                <span className="learn-more">Learn More</span>
              </span>
            </button>
          )
        })}
      </section>
      <span className="framer-badge"><span aria-hidden="true">◈</span> Made in Framer</span>
    </main>
  )
}
