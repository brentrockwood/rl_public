import LogoMark from "../components/LogoMark";
import ThemeToggle from "../components/ThemeToggle";

function Header() {
  return (
    <header className="site-header home-header">
      <a className="brand" href="#top" aria-label="Rockwood Lab, home">
        <LogoMark />
        <span>Rockwood<br />Lab</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#research">Research</a>
        <a href="#practice">Practice</a>
        <a href="#about">About</a>
        <a href="/schedule/">Schedule</a>
      </nav>
      <ThemeToggle />
    </header>
  );
}

function Footer() {
  return (
    <footer className="home-footer">
      <span>Rockwood Lab</span>
      <span>Georgia, USA</span>
      <span>© 2026</span>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <p className="section-label">Independent R&amp;D</p>
          <div className="hero-copy">
            <h1 id="hero-title">Pursuing<br /><em>unreasonable effectiveness.</em></h1>
          </div>
        </section>

        <section className="recent-work ruled" id="research" aria-labelledby="research-title">
          <div className="section-label">Recent work</div>
          <div>
            <h2 id="research-title">Things I’ve been building.</h2>
          </div>
          <div className="projects" aria-label="Recent work">
            <article id="hammer">
              <p className="number">Capability</p>
              <h3>Hammer</h3>
              <p className="project-description">What can an AI agent build from little more than the ability to read and write files? Hammer provides a controlled environment for investigating that question.</p>
              <div className="project-links">
                <a href="https://github.com/brentrockwood/hammer" target="_blank" rel="noreferrer" aria-label="Repository: Hammer on GitHub">Repository <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article id="provenance-inspector">
              <p className="number">Evidence</p>
              <h3>Provenance Inspector</h3>
              <p className="project-description">A Chrome extension that checks selected text and images for verifiable provenance signals while keeping the limits of that evidence visible.</p>
              <div className="project-links">
                <a href="https://github.com/brentrockwood/provenance-inspector-extension" target="_blank" rel="noreferrer" aria-label="Repository: Provenance Inspector extension on GitHub">Repository <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article id="acs-adapters">
              <p className="number">Control</p>
              <h3>ACS adapters</h3>
              <p className="project-description">Experimental Pi and OpenCode integrations for the <a href="https://agentcontrolstandard.org/" target="_blank" rel="noreferrer">Agent Control Standard</a>, adding observability and control over agent tool use.</p>
              <div className="project-links">
                <a href="https://github.com/brentrockwood/pi-acs-core" target="_blank" rel="noreferrer" aria-label="Pi ACS adapter repository on GitHub">Pi <span aria-hidden="true">↗</span></a>
                <a href="https://github.com/brentrockwood/opencode-acs-core" target="_blank" rel="noreferrer" aria-label="OpenCode ACS adapter repository on GitHub">OpenCode <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>
        </section>

        <section className="practice ruled" id="practice" aria-labelledby="practice-title">
          <div className="section-label">Practice</div>
          <div className="practice-intro">
            <h2 id="practice-title">Making the pieces work together.</h2>
            <p>I work on AI safety, workflow automation, and infrastructure design. Much of that work means connecting existing software and services into a system that fits the problem—not building everything from scratch.</p>
            <p>Find the smallest version of the real problem. Build the smallest thing capable of answering the question. Beat the hell out of it. Believe the evidence.</p>
          </div>
        </section>

        <section className="about ruled" id="about" aria-labelledby="about-title">
          <div className="section-label">About</div>
          <div>
            <h2 id="about-title">Rockwood Lab is the independent work of Brent Rockwood.</h2>
            <p>I’ve been developing software since the 1990s, including years working in identity and access management and cybersecurity. Rockwood Lab brings that experience to independent research and engineering.</p>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-label">Contact</p>
          <div className="contact-body">
            <h2 id="contact-title">Have a piece of work<br />worth examining?</h2>
            <p>For a practical question, research conversation, or a possible experiment, choose a time or write to Brent.</p>
            <div className="contact-actions">
              <a className="email" href="/schedule/">Choose a time <span aria-hidden="true">→</span></a>
              <a className="secondary-contact" href="mailto:brent@rockwoodlab.com">brent@rockwoodlab.com <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
