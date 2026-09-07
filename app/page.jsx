import Image from "next/image";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Rockwood Lab, home">
        <Image src="/favicon.svg" width={32} height={32} alt="" />
        <span>Rockwood<br />Lab</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#research">Research</a>
        <a href="#practice">Practice</a>
        <a href="#about">About</a>
        <a href="/schedule/">Schedule</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <span>Rockwood Lab</span>
      <span>Georgia</span>
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
          <div className="hero-copy">
            <p className="eyebrow">Independent research &amp; practice</p>
            <h1 id="hero-title">Useful AI,<br /><em>under observation.</em></h1>
            <p className="lede">Rockwood Lab studies and builds AI systems for work where evidence, boundaries, and human judgment remain visible.</p>
            <a className="text-link" href="#practice">What that means <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <div className="mark-frame">
              <Image src="/rl.svg" width={256} height={256} alt="" />
              <span className="coordinate coordinate-a">ROCKWOOD LAB</span>
              <span className="coordinate coordinate-b">OBS. 01</span>
              <span className="coordinate coordinate-c">RL / 2026</span>
            </div>
            <p>An independent lab for systems, security, and applied AI.</p>
          </div>
        </section>

        <section className="statement ruled" id="research" aria-labelledby="research-title">
          <div className="section-label">01 / Research</div>
          <div>
            <h2 id="research-title">The interesting work begins after the model answers.</h2>
            <p>AI can produce an answer quickly. The harder question is whether that answer belongs in the work: what it used, who can inspect it, what happens when it is unsure, and who has authority to act.</p>
          </div>
        </section>

        <section className="areas" aria-label="Areas of inquiry">
          <article>
            <p className="number">A</p>
            <h3>Agent systems</h3>
            <p>How task boundaries, permissions, and review shape useful autonomous work.</p>
          </article>
          <article>
            <p className="number">B</p>
            <h3>Evidence &amp; evaluation</h3>
            <p>Ways to make behavior testable, inspectable, and accountable to a real task.</p>
          </article>
          <article>
            <p className="number">C</p>
            <h3>Secure practice</h3>
            <p>Systems built with attention to sources, access, failure paths, and operational reality.</p>
          </article>
        </section>

        <section className="practice ruled" id="practice" aria-labelledby="practice-title">
          <div className="section-label">02 / Practice</div>
          <div className="practice-intro">
            <h2 id="practice-title">A small lab for consequential work.</h2>
            <p>Rockwood Lab takes on selected experiments and practical systems work. The starting point is a specific workflow, its people and source material, and a clear way to decide if the result helps.</p>
          </div>
          <div className="method">
            <div><span>01</span><h3>Observe</h3><p>Name the work, constraints, decisions, and points where confidence should give way to review.</p></div>
            <div><span>02</span><h3>Make</h3><p>Build a focused system around the task, including the interfaces and safeguards it needs.</p></div>
            <div><span>03</span><h3>Learn</h3><p>Test it against realistic cases and use the evidence to refine, limit, or stop the experiment.</p></div>
          </div>
          <details>
            <summary>What “under observation” means</summary>
            <p>It means keeping the task, inputs, decisions, and limits legible. It is a working posture, not a claim that every outcome can be predicted.</p>
          </details>
        </section>

        <section className="about ruled" id="about" aria-labelledby="about-title">
          <div className="section-label">03 / About</div>
          <div>
            <h2 id="about-title">Rockwood Lab is the independent work of Brent Rockwood.</h2>
            <p>Brent works across systems engineering, security, and applied AI. The lab is a place to develop useful tools carefully: with owner oversight, traceable decisions, and an honest account of what has and has not been demonstrated.</p>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-label">04 / Contact</p>
          <h2 id="contact-title">Have a piece of work<br />worth examining?</h2>
          <p>For a practical question, research conversation, or a possible experiment, choose a time or write to Brent.</p>
          <div className="contact-actions">
            <a className="email" href="/schedule/">Choose a time <span aria-hidden="true">→</span></a>
            <a className="secondary-contact" href="mailto:brent@rockwoodlab.com">brent@rockwoodlab.com <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
