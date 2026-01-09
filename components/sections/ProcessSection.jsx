export default function ProcessSection({
  eyebrow,
  title,
  subtitle,
  intro,
  steps,
  icons,
}) {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="flow-header">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <p className="flow-intro">{intro}</p>
        </div>

        <div className="flow-grid">
          {steps.map((step) => (
            <article
              key={step.step}
              className={`card flow-card${step.connector ? ` connector-${step.connector}` : ""}`}
            >
              <span className="flow-step">Step {step.step}</span>
              <div className="flow-icon" aria-hidden="true">
                {icons[step.icon]}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
