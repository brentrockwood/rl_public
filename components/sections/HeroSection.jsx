export default function HeroSection({ eyebrow, title, subtitle, ctas, stats }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-actions">
              <a href={ctas.primary.href} className="btn btn-primary">
                {ctas.primary.label}
              </a>
              <a href={ctas.secondary.href} className="btn btn-secondary">
                {ctas.secondary.label}
              </a>
            </div>
            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.value} className="stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
