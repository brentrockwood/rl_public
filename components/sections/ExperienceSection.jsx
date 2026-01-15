import Image from "next/image";

export default function ExperienceSection({ eyebrow, title, subtitle, items }) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
        </div>

        <div className="experience-grid">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="experience-card reveal"
              style={{ "--delay": `${0.08 + index * 0.08}s` }}
            >
              <span className="experience-meta">{item.meta}</span>
              <div className="experience-frame">
                <div className="experience-media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                  />
                </div>
                <div className="experience-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
