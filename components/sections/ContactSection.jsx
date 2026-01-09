function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true">
      <path
        d="M5 10.5l3.2 3.2L15.5 6.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactPoints({ points }) {
  return (
    <ul className="contact-points">
      {points.map((point) => (
        <li key={point}>
          <span className="contact-check" aria-hidden="true">
            <CheckIcon />
          </span>
          {point}
        </li>
      ))}
    </ul>
  );
}

function ContactForm({ form }) {
  const { fields } = form;

  return (
    <form
      className="card contact-form reveal"
      action={form.action}
      method={form.method}
      encType={form.encType}
      style={{ "--delay": "0.08s" }}
    >
      <div className="contact-field">
        <label htmlFor={fields.name.id}>{fields.name.label}</label>
        <input
          id={fields.name.id}
          name="name"
          type={fields.name.type}
          placeholder={fields.name.placeholder}
          autoComplete={fields.name.autoComplete}
          required={fields.name.required}
        />
      </div>
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor={fields.email.id}>{fields.email.label}</label>
          <input
            id={fields.email.id}
            name="email"
            type={fields.email.type}
            placeholder={fields.email.placeholder}
            autoComplete={fields.email.autoComplete}
            required={fields.email.required}
          />
        </div>
        <div className="contact-field">
          <label htmlFor={fields.company.id}>{fields.company.label}</label>
          <input
            id={fields.company.id}
            name="company"
            type={fields.company.type}
            placeholder={fields.company.placeholder}
            autoComplete={fields.company.autoComplete}
          />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor={fields.message.id}>{fields.message.label}</label>
        <textarea
          id={fields.message.id}
          name="message"
          placeholder={fields.message.placeholder}
          rows={fields.message.rows}
        />
      </div>
      <button className="btn contact-submit" type="submit">
        {form.submitLabel}
      </button>
    </form>
  );
}

export default function ContactSection({ eyebrow, title, subtitle, points, form }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-content reveal">
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
            <ContactPoints points={points} />
          </div>

          <ContactForm form={form} />
        </div>
      </div>
    </section>
  );
}
