import SiteHeader from "../components/SiteHeader";

const stats = [
  { value: "20+ years", label: "Production engineering leadership" },
  { value: "3 domains", label: "Software, data, embedded" },
  { value: "Senior-led", label: "Hands-on delivery" },
];

const hiringSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a quick call to understand your tech needs, team structure, and project goals. You talk, we listen.",
    icon: "discovery",
    connector: "right",
  },
  {
    step: "02",
    title: "Team Building",
    description:
      "We handpick profiles that match your requirements - not just technically, but culturally too. (We call it K+S)*A: knowledge, skills, and attitude.",
    icon: "team",
    connector: "right",
  },
  {
    step: "03",
    title: "Selection",
    description:
      "You receive a shortlist of candidates. You interview, choose, and approve who joins. We're here to advise - but you stay in control.",
    icon: "selection",
    connector: "down",
  },
  {
    step: "06",
    title: "Continuous Improvement",
    description:
      "We check in regularly to ensure performance, fit, and delivery stay sharp - and that your team keeps getting better.",
    icon: "improvement",
    connector: "right",
  },
  {
    step: "05",
    title: "Support and Scale",
    description:
      "You get ongoing support from a dedicated account manager and the option to grow your team as your project evolves.",
    icon: "support",
    connector: "right",
  },
  {
    step: "04",
    title: "Onboarding",
    description:
      "Your chosen devs integrate into your team, tools, and rituals. They report to you, work on your tasks, and act as part of your squad from day one.",
    icon: "onboarding",
  },
];

const hiringIcons = {
  discovery: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6" />
      <circle cx="12" cy="17" r="1" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="9" r="3" />
      <path d="M4 20c1.5-3 8.5-3 10 0" />
      <path d="M17 8v6" />
      <path d="M14 11h6" />
    </svg>
  ),
  selection: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  ),
  onboarding: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="10" height="16" rx="2" />
      <path d="M13 12h7" />
      <path d="M17 8l4 4-4 4" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5v4" />
      <path d="M12 15v4" />
      <path d="M5 12h4" />
      <path d="M15 12h4" />
    </svg>
  ),
  improvement: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 16l5-5 4 4 7-7" />
      <path d="M15 8h6v6" />
    </svg>
  ),
};

const services = [
  {
    title: "Full-stack software delivery",
    description:
      "Design and implementation of secure web applications, internal platforms, and APIs with production-grade tooling.",
    highlights: ["Node.js + TypeScript", "React + UI systems", "API design + data"],
  },
  {
    title: "Data and visualization systems",
    description:
      "Dashboards, metrics, and operational intelligence that turn complex data into decisions.",
    highlights: [
      "Analytics pipelines",
      "Executive reporting",
      "Workflow automation",
    ],
  },
  {
    title: "Embedded and prototype engineering",
    description:
      "Rapid proof of concept builds for IoT, hardware, and connected devices with custom enclosures.",
    highlights: [
      "ESP32 and Raspberry Pi",
      "Firmware + integration",
      "Prototype manufacturing",
    ],
  },
  {
    title: "Architecture and advisory",
    description:
      "Technical direction, modernization plans, and security-focused reviews to keep systems scalable.",
    highlights: [
      "System design",
      "Security posture",
      "Developer experience",
    ],
  },
];

const experience = [
  {
    title: "Cybersecurity metrics platforms",
    description:
      "Designed and built internal platforms for data visualization, deployment workflows, and executive reporting on Hadoop-backed systems.",
    meta: "Enterprise security",
  },
  {
    title: "Fortune 50 modernization",
    description:
      "Full-stack Node and TypeScript delivery for retail and banking clients across large-scale modernization programs.",
    meta: "Retail and banking",
  },
  {
    title: "Identity governance products",
    description:
      "Backend and integration leadership for commercial identity management solutions at Quest and Dell Software.",
    meta: "Commercial software",
  },
  {
    title: "Specialized reporting systems",
    description:
      "Election reporting tools, identity connectors, and bespoke workflows for public and private sector teams.",
    meta: "Mission-critical delivery",
  },
];

const founderHighlights = [
  "Former VP, Lead Information Security Engineer at Wells Fargo",
  "Led cybersecurity metrics, data visualization, and deployment workflows",
  "Delivered full-stack builds for Fortune 50 retail and banking clients",
  "Backend leadership for automotive and airline modernization projects",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <SiteHeader />

      <main>
        <section className="hero container">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">Independent engineering studio</span>
              <h1 className="hero-title">
                Practical engineering for software, data, and prototypes.
              </h1>
              <p className="hero-subtitle">
                Rockwood Lab is a senior-led engineering practice led by Brent
                Rockwood, delivering scalable systems and rapid prototypes for
                teams that need experienced, hands-on help.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Start a project
                </a>
                <a href="#capabilities" className="btn btn-secondary">
                  View capabilities
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
        </section>

        <section className="section container" id="capabilities">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Capabilities</p>
              <h2 className="section-title">
                Deep technical delivery across the stack.
              </h2>
              <p className="section-subtitle">
                From architecture to prototypes, Rockwood Lab delivers scalable
                systems with a focus on reliability, security, and clarity.
              </p>
            </div>
            <a className="link" href="#contact">
              Schedule a call
            </a>
          </div>

          <div className="grid grid-two">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="card service-card reveal"
                style={{ "--delay": `${0.1 + index * 0.08}s` }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-group">
                  {service.highlights.map((highlight) => (
                    <span key={highlight} className="tag tag-muted">
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted" id="process">
          <div className="container">
            <div className="flow-header">
              <p className="section-eyebrow">Process</p>
              <h2 className="section-title">Hello to Hired in 2 Weeks or Less</h2>
              <p className="section-subtitle">We make hiring top developers easy.</p>
              <p className="flow-intro">Here's how it works:</p>
            </div>

            <div className="flow-grid">
              {hiringSteps.map((step) => (
                <article
                  key={step.step}
                  className={`card flow-card${step.connector ? ` connector-${step.connector}` : ""}`}
                >
                  <span className="flow-step">Step {step.step}</span>
                  <div className="flow-icon" aria-hidden="true">
                    {hiringIcons[step.icon]}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Experience</p>
              <h2 className="section-title">Enterprise depth, startup pace.</h2>
              <p className="section-subtitle">
                Two decades of building production systems for enterprise and
                commercial software teams.
              </p>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article
                key={item.title}
                className="timeline-item reveal"
                style={{ "--delay": `${0.1 + index * 0.08}s` }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="timeline-meta">{item.meta}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="who">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Leadership</p>
              <h2 className="section-title">
                Founder-led, detail-focused engineering.
              </h2>
            </div>
          </div>

          <div className="grid grid-two">
            <div className="card founder-card reveal">
              <p>
                Rockwood Lab is led by Brent Rockwood, a software engineer and
                technology leader with more than two decades of experience
                building production systems for large enterprises, government,
                and commercial software vendors.
              </p>
              <p>
                Most recently, Brent served as a VP, Lead Information Security
                Engineer at Wells Fargo, designing cybersecurity metrics,
                visualization platforms, and deployment workflows for enterprise
                teams.
              </p>
              <p>
                Alongside enterprise work, he has maintained a long-running
                freelance practice building election reporting tools, identity
                connectors, and other specialized systems.
              </p>
            </div>

            <div className="card founder-card reveal" style={{ "--delay": "0.12s" }}>
              <h3>Founder profile</h3>
              <ul className="list">
                {founderHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="accent-callout">
                <p>
                  Rockwood Lab blends software craftsmanship with practical
                  prototyping to help teams deliver reliable systems faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="contact">
          <div className="card contact-card reveal">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2 className="section-title">Let us build your next system.</h2>
              <p className="section-subtitle">
                Interested in working together or exploring a project? Reach out
                to schedule a call or send a note.
              </p>
              <div className="hero-actions">
                <a
                  href="https://calendar.app.google/zrhcrUpvDfyRHhgy7"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a call
                </a>
                <a href="mailto:brent@rockwoodlab.com" className="btn btn-secondary">
                  Email Brent
                </a>
              </div>
            </div>

            <div className="contact-info">
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:brent@rockwoodlab.com">brent@rockwoodlab.com</a>
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <a href="tel:+14049602864">+1 404 960 2864</a>
              </div>
              <div>
                <span className="contact-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/brentrockwood/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/brentrockwood
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>Copyright {year} Rockwood Lab LLC. All rights reserved.</span>
          <span>rockwoodlab.com</span>
        </div>
      </footer>
    </div>
  );
}
