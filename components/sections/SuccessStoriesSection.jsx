import Image from "next/image";

export default function SuccessStoriesSection({ title, link, stories }) {
  return (
    <section className="section" id="success-stories">
      <div className="container">
        <div className="section-header story-header">
          <div>
            <h2 className="section-title">{title}</h2>
          </div>
          <a className="link link-arrow" href={link.href}>
            {link.label} <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <a
              key={story.title}
              className="card story-card"
              href={story.href}
              aria-label={story.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="story-media">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
                <div className="story-overlay">
                  <span className="story-logo">{story.client}</span>
                  <h3 className="story-title">{story.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
