import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";

const stats = [
  { value: "20+ years", label: "Production engineering leadership" },
  { value: "3 domains", label: "Software, data, embedded" },
  { value: "Senior-led", label: "Hands-on delivery" },
];

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

const engagements = [
  "Fractional CTO and architecture leadership",
  "Project-based delivery and builds",
  "Rapid prototypes and proof of concept sprints",
  "Embedded team augmentation",
];

const process = [
  {
    step: "01",
    title: "Discovery and direction",
    description:
      "Align on outcomes, constraints, and success metrics. Define a roadmap and risk map before a single line ships.",
  },
  {
    step: "02",
    title: "Build and iterate",
    description:
      "Ship in tight increments with testing, instrumentation, and documentation so teams can move fast without surprises.",
  },
  {
    step: "03",
    title: "Scale and support",
    description:
      "Harden for production, train teams, and map the next phase so delivery keeps compounding.",
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

const techStack = [
  "Node.js",
  "TypeScript",
  "React",
  "GraphQL",
  "SQL",
  "Embedded",
  "ESP32",
  "Raspberry Pi",
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
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <Image
              src="/logo_v1.svg"
              alt="Rockwood Lab"
              width={260}
              height={76}
              priority
            />
          </div>
          <nav className="nav" aria-label="Primary">
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

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

            <div className="hero-panel card reveal" style={{ "--delay": "0.1s" }}>
              <div className="panel-header">
                <div>
                  <p className="panel-title">Engagement models</p>
                  <p className="panel-subtitle">
                    Flexible support that scales with your team.
                  </p>
                </div>
                <span className="panel-badge">Senior-led</span>
              </div>
              <ul className="list">
                {engagements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tag-group">
                {techStack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
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
            <div className="section-header">
              <div>
                <p className="section-eyebrow">Process</p>
                <h2 className="section-title">A clear path from idea to scale.</h2>
                <p className="section-subtitle">
                  Structured delivery keeps timelines realistic and outcomes
                  measurable.
                </p>
              </div>
            </div>

            <div className="grid grid-three">
              {process.map((step, index) => (
                <article
                  key={step.step}
                  className="card process-card reveal"
                  style={{ "--delay": `${0.12 + index * 0.1}s` }}
                >
                  <span className="step-number">{step.step}</span>
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
