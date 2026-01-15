import Image from "next/image";

export default function LeadershipSection({ eyebrow, title, members }) {
  return (
    <section className="section leader-section" id="who">
      <div className="container">
        <div className="leader-header">
          <p className="leader-eyebrow">{eyebrow}</p>
          <h2 className="leader-title">{title}</h2>
        </div>

        <div className="leader-grid">
          {members.map((member, index) => (
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
  );
}
