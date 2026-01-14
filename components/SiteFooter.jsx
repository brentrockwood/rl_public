import Image from "next/image";

export default function SiteFooter({
  year,
  logo,
  tagline,
  description,
  socials,
  navItems,
  focusItems,
  legalLinks,
}) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-image logo-light">
              <Image
                src={logo.lightSrc}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </span>
            <span className="logo-image logo-dark">
              <Image
                src={logo.darkSrc}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </span>
          </div>
          <p className="footer-tagline">{tagline}</p>
          <p className="footer-description">{description}</p>
          <div className="footer-social">
            {socials.map((link) => {
              const linkProps = link.newTab
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <a key={link.href} href={link.href} aria-label={link.label} {...linkProps}>
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Navigate</p>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <p className="footer-heading">Focus</p>
          {focusItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright {year} Rockwood Lab LLC. All rights reserved.</span>
        <div className="footer-legal">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
