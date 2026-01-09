import Image from "next/image";
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
    icon: "stack",
  },
  {
    title: "Data and visualization systems",
    description:
      "Dashboards, metrics, and operational intelligence that turn complex data into decisions.",
    icon: "data",
  },
  {
    title: "Embedded and prototype engineering",
    description:
      "Rapid proof of concept builds for IoT, hardware, and connected devices with custom enclosures.",
    icon: "embedded",
  },
  {
    title: "Architecture and advisory",
    description:
      "Technical direction, modernization plans, and security-focused reviews to keep systems scalable.",
    icon: "advisory",
  },
];

const capabilityIcons = {
  stack: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8l8-4 8 4-8 4-8-4Z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  embedded: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M3 9h3M3 15h3M18 9h3M18 15h3M9 3v3M15 3v3M9 18v3M15 18v3" />
    </svg>
  ),
  advisory: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19h16" />
      <path d="M7 16l5-10 5 10" />
      <path d="M9 12h6" />
    </svg>
  ),
};

const experience = [
  {
    title: "Cybersecurity metrics platforms",
    description:
      "Designed and built internal platforms for data visualization, deployment workflows, and executive reporting.",
    meta: "Enterprise security",
    image: "/cybersecurity.jpg",
    alt: "Cybersecurity project highlight image.",
  },
  {
    title: "Fortune 50 modernization",
    description:
      "Full-stack Node and TypeScript delivery for retail and banking clients across large-scale modernization programs.",
    meta: "Retail and banking",
    image: "/50.jpg",
    alt: "Fortune 50 modernization project highlight image.",
  },
  {
    title: "Identity governance products",
    description:
      "Backend and integration leadership for commercial identity management solutions at Quest and Dell Software.",
    meta: "Commercial software",
    image: "/government.jpg",
    alt: "Identity governance project highlight image.",
  },
  {
    title: "Specialized reporting systems",
    description:
      "Election reporting tools, identity connectors, and bespoke workflows for public and private sector teams.",
    meta: "Mission-critical delivery",
    image: "/reporting.jpg",
    alt: "Reporting systems project highlight image.",
  },
];

const successStories = [
  {
    title: "Conference management and networking platform for professionals",
    image: "/CC.jpg",
    alt: "CC project highlight image.",
    client: "Conference Connect",
    href: "https://conferenceconnect.com",
  },
  {
    title: "Travel industry event and business solutions platform",
    image: "/Travel.jpg",
    alt: "Travel Industry Solutions",
    client: "Travel Industry Solutions",
    href: "https://Travelindustrysolutions.com"
  },
  {
    title: "Home design industry professionals' networking platform.",
    image: "/HDG.jpg",
    alt: "HDG project highlight image.",
    client: "Home Design Guild",
    href: "https://Homedesignguild.com",
  },
];

const leadershipTeam = [
  {
    name: "Brent Rockwood",
    role: "Founder & Principal Engineer",
    bio:
      "Applied engineering leader focused on secure, scalable platforms and practical delivery.",
    image: "/leadership-brent.jpg",
    alt: "Portrait of Brent Rockwood.",
  },
  {
    name: "Kevin Lim",
    role: "Lead Developer",
    bio:
      "Lead developer delivering durable software systems and hands-on team support.",
    image: "/leadership-kevin.jpg",
    alt: "Portrait of Kevin Lim.",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="container">
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
          </div>
        </section>

        <div className="section-group">
        <section className="section" id="capabilities">
          <div className="container">
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
                  <div className="service-icon" aria-hidden="true">
                    {capabilityIcons[service.icon]}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
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

            <div className="experience-grid">
              {experience.map((item, index) => (
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

        <section className="section" id="process">
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

        <section className="section" id="success-stories">
          <div className="container">
            <div className="section-header story-header">
              <div>
                <h2 className="section-title">Success Stories</h2>
              </div>
              <a className="link link-arrow" href="#contact">
                Other projects <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="stories-grid">
              {successStories.map((story) => (
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

        <section className="section leader-section" id="who">
          <div className="container">
            <div className="leader-header">
              <p className="leader-eyebrow">Who you work with</p>
              <h2 className="leader-title">Senior team, hands-on delivery</h2>
            </div>

            <div className="leader-grid">
              {leadershipTeam.map((member, index) => (
                <article
                  key={member.name}
                  className="card leader-card reveal"
                  style={{ "--delay": `${0.08 + index * 0.08}s` }}
                >
                  <div className="leader-media">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 960px) 100vw, 50vw"
                    />
                  </div>
                  <div className="leader-body">
                    <h3>{member.name}</h3>
                    <p className="leader-role">{member.role}</p>
                    <p>{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-content reveal">
                <p className="section-eyebrow">Start a project</p>
                <h2 className="section-title">
                  Tell us about the product, metric, or workflow you need to move.
                </h2>
                <p className="section-subtitle">
                  We respond within one business day. If there is a fit, we propose a
                  lightweight discovery sprint to frame KPIs, technical scope, and the
                  fastest path to value.
                </p>
                <ul className="contact-points">
                  <li>
                    <span className="contact-check" aria-hidden="true">
                      <svg viewBox="0 0 20 20" focusable="false">
                        <path
                          d="M5 10.5l3.2 3.2L15.5 6.8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Fractional CTO and architecture leadership
                  </li>
                  <li>
                    <span className="contact-check" aria-hidden="true">
                      <svg viewBox="0 0 20 20" focusable="false">
                        <path
                          d="M5 10.5l3.2 3.2L15.5 6.8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Product and platform modernization
                  </li>
                  <li>
                    <span className="contact-check" aria-hidden="true">
                      <svg viewBox="0 0 20 20" focusable="false">
                        <path
                          d="M5 10.5l3.2 3.2L15.5 6.8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Embedded systems and IoT delivery
                  </li>
                  <li>
                    <span className="contact-check" aria-hidden="true">
                      <svg viewBox="0 0 20 20" focusable="false">
                        <path
                          d="M5 10.5l3.2 3.2L15.5 6.8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Data platforms, analytics, and automation
                  </li>
                </ul>
              </div>

              <form
                className="card contact-form reveal"
                action="mailto:brent@rockwoodlab.com"
                method="post"
                encType="text/plain"
                style={{ "--delay": "0.08s" }}
              >
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="contact-row">
                  <div className="contact-field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-company">Company</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Company or team"
                      autoComplete="organization"
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-message">What do you want to build?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Goals, KPIs, timelines"
                    rows={5}
                  />
                </div>
                <button className="btn contact-submit" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/logo_v1.svg" alt="Rockwood Lab" width={150} height={42} />
            </div>
            <p className="footer-tagline">Applied engineering studio</p>
            <p className="footer-description">
              We build production systems across software, data, and embedded platforms
              for teams that need dependable delivery and senior guidance.
            </p>
            <div className="footer-social">
              <a
                href="https://calendar.app.google/zrhcrUpvDfyRHhgy7"
                aria-label="Schedule a call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M8 3v4M16 3v4M3 10h18" />
                </svg>
              </a>
              <a href="mailto:brent@rockwoodlab.com" aria-label="Email Rockwood Lab">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                  <path d="m4 8 8 5 8-5" />
                </svg>
              </a>
              <a href="tel:+14049602864" aria-label="Call Rockwood Lab">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.9v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.72c.12.82.3 1.62.54 2.4a2 2 0 0 1-.45 2.11L7.1 9.1a16 16 0 0 0 6 6l.87-1.09a2 2 0 0 1 2.11-.45c.78.24 1.58.42 2.4.54A2 2 0 0 1 22 16.9Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/brentrockwood/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.72 1.72 0 1 0 0 3.44 1.72 1.72 0 0 0 0-3.44Zm13.53 9.04c0-3.33-1.78-4.88-4.16-4.88a3.6 3.6 0 0 0-3.26 1.8V8.5H8.64V20h2.94v-6c0-1.58.3-3.12 2.26-3.12 1.94 0 1.96 1.82 1.96 3.22V20h2.94v-6.96Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Navigate</p>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#experience">Experience</a>
            <a href="#who">Leadership</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Focus</p>
            <span>Production engineering</span>
            <span>Platform modernization</span>
            <span>Embedded systems</span>
            <span>Data platforms</span>
            <span>Automation delivery</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>Copyright {year} Rockwood Lab LLC. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
