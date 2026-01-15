export default function CapabilitiesSection({
  eyebrow,
  title,
  subtitle,
  cta,
  services,
  icons,
}) {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
          <a className="btn schedule-cta" href={cta.href} target="_blank" rel="noopener noreferrer">
            {cta.label}
          </a>
        </div>

        <div className="grid grid-two">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card service-card reveal"
              style={{ "--delay": `${0.1 + index * 0.08}s` }}
            >
              <div className="service-icon" aria-hidden="true">
                {icons[service.icon]}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
