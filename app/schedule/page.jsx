import Image from "next/image";

const scheduleUrl = "https://calendar.app.google/zrhcrUpvDfyRHhgy7";

export const metadata = {
  title: "Schedule a conversation | Rockwood Lab",
  description: "Choose a time to talk with Rockwood Lab about a practical system, research question, or possible experiment.",
};

export default function Schedule() {
  return (
    <div className="page schedule-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Rockwood Lab, home">
          <Image src="/favicon.svg" width={32} height={32} alt="" />
          <span>Rockwood<br />Lab</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/#research">Research</a>
          <a href="/#practice">Practice</a>
          <a href="/#about">About</a>
          <a href="mailto:brent@rockwoodlab.com">Email</a>
        </nav>
      </header>

      <main id="main" className="schedule-main">
        <section className="schedule-intro" aria-labelledby="schedule-title">
          <p className="eyebrow">Schedule / Rockwood Lab</p>
          <h1 id="schedule-title">Bring one<br /><em>real question.</em></h1>
          <p className="lede">A useful first conversation starts with the work itself: where it gets stuck, what information matters, and what would make a result worth trusting.</p>
        </section>

        <section className="booking-panel" aria-labelledby="booking-title">
          <div className="booking-mark" aria-hidden="true">
            <Image src="/rl.svg" width={256} height={256} alt="" />
          </div>
          <p className="section-label">Before we meet</p>
          <h2 id="booking-title">A short note is enough.</h2>
          <ol>
            <li><span>01</span><p>What are you trying to make easier, safer, or more reliable?</p></li>
            <li><span>02</span><p>Who does the work today, and where does judgment matter?</p></li>
            <li><span>03</span><p>What would a useful first experiment show?</p></li>
          </ol>
          <a className="booking-button" href={scheduleUrl} target="_blank" rel="noreferrer">
            Open available times <span aria-hidden="true">↗</span>
          </a>
          <p className="booking-note">Availability and confirmation are handled by Google Calendar.</p>
        </section>
      </main>

      <footer>
        <span>Rockwood Lab</span>
        <a href="mailto:brent@rockwoodlab.com">brent@rockwoodlab.com</a>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
