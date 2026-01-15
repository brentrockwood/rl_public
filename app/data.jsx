export const navItems = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#success-stories", label: "Success Stories" },
  { href: "#who", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export const headerLogo = {
  lightSrc: "/logo_v1.svg",
  darkSrc: "/logo_dark_mode.svg",
  alt: "Rockwood Lab",
  width: 140,
  height: 40,
};

export const heroSection = {
  eyebrow: "Applied engineering studio",
  title: "Practical engineering for software, data, and prototypes.",
  subtitle:
    "Rockwood Lab is a senior-led engineering practice led by Brent Rockwood, delivering scalable systems and rapid prototypes for teams that need experienced, hands-on help.",
  ctas: {
    primary: { href: "#contact", label: "Start a project" },
    secondary: { href: "#capabilities", label: "View capabilities" },
  },
  stats: [
    { value: "20+ years", label: "Production engineering leadership" },
    { value: "3 domains", label: "Software, data, embedded" },
    { value: "Senior-led", label: "Hands-on delivery" },
  ],
};

export const capabilitiesSection = {
  eyebrow: "Capabilities",
  title: "Deep technical delivery across the stack.",
  subtitle:
    "From architecture to prototypes, Rockwood Lab delivers scalable systems with a focus on reliability, security, and clarity.",
  cta: { href: "https://calendar.app.google/zrhcrUpvDfyRHhgy7", label: "Schedule a call" },
  services: [
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
  ],
  icons: {
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
  },
};

export const experienceSection = {
  eyebrow: "Experience",
  title: "Enterprise depth, startup pace.",
  subtitle:
    "Two decades of building production systems for enterprise and commercial software teams.",
  items: [
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
  ],
};

export const processSection = {
  eyebrow: "Process",
  title: "Hello to Hired in 2 Weeks or Less",
  subtitle: "We make hiring top developers easy.",
  intro: "Here's how it works:",
  steps: [
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
  ],
  icons: {
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
  },
};

export const successStoriesSection = {
  title: "Success Stories",
  link: { href: "#contact", label: "Other projects" },
  stories: [
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
      href: "https://Travelindustrysolutions.com",
    },
    {
      title: "Home design industry professionals' networking platform.",
      image: "/HDG.jpg",
      alt: "HDG project highlight image.",
      client: "Home Design Guild",
      href: "https://Homedesignguild.com",
    },
  ],
};

export const leadershipSection = {
  eyebrow: "Who you work with",
  title: "Senior team, hands-on delivery",
  members: [
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
  ],
};

export const contactSection = {
  eyebrow: "Start a project",
  title: "Tell us about the product, metric, or workflow you need to move.",
  subtitle:
    "We respond within one business day. If there is a fit, we propose a lightweight discovery sprint to frame KPIs, technical scope, and the fastest path to value.",
  points: [
    "Fractional CTO and architecture leadership",
    "Product and platform modernization",
    "Embedded systems and IoT delivery",
    "Data platforms, analytics, and automation",
  ],
  scheduleLink: "https://calendar.app.google/zrhcrUpvDfyRHhgy7",
  form: {
    action: "mailto:brent@rockwoodlab.com",
    method: "post",
    encType: "text/plain",
    submitLabel: "Send message",
    fields: {
      name: {
        id: "contact-name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        autoComplete: "name",
        required: true,
      },
      email: {
        id: "contact-email",
        label: "Email",
        type: "email",
        placeholder: "you@company.com",
        autoComplete: "email",
        required: true,
      },
      company: {
        id: "contact-company",
        label: "Company",
        type: "text",
        placeholder: "Company or team",
        autoComplete: "organization",
      },
      message: {
        id: "contact-message",
        label: "What do you want to build?",
        placeholder: "Goals, KPIs, timelines",
        rows: 5,
      },
    },
  },
};

export const footerSection = {
  logo: {
    lightSrc: "/logo_v1.svg",
    darkSrc: "/logo_dark_mode.svg",
    alt: "Rockwood Lab",
    width: 150,
    height: 42,
  },
  tagline: "Applied engineering studio",
  description:
    "We build production systems across software, data, and embedded platforms for teams that need dependable delivery and senior guidance.",
  socials: [
    {
      href: "https://calendar.app.google/zrhcrUpvDfyRHhgy7",
      label: "Schedule a call",
      newTab: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      ),
    },
    {
      href: "mailto:brent@rockwoodlab.com",
      label: "Email Rockwood Lab",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
          <path d="m4 8 8 5 8-5" />
        </svg>
      ),
    },
    {
      href: "tel:+14049602864",
      label: "Call Rockwood Lab",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 16.9v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.72c.12.82.3 1.62.54 2.4a2 2 0 0 1-.45 2.11L7.1 9.1a16 16 0 0 0 6 6l.87-1.09a2 2 0 0 1 2.11-.45c.78.24 1.58.42 2.4.54A2 2 0 0 1 22 16.9Z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/company/rockwood-lab/",
      label: "LinkedIn",
      newTab: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.72 1.72 0 1 0 0 3.44 1.72 1.72 0 0 0 0-3.44Zm13.53 9.04c0-3.33-1.78-4.88-4.16-4.88a3.6 3.6 0 0 0-3.26 1.8V8.5H8.64V20h2.94v-6c0-1.58.3-3.12 2.26-3.12 1.94 0 1.96 1.82 1.96 3.22V20h2.94v-6.96Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ],
  navItems,
  focusItems: [
    "Production engineering",
    "Platform modernization",
    "Embedded systems",
    "Data platforms",
    "Automation delivery",
  ],
  legalLinks: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};
