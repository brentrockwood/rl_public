export const navItems = [
  { href: "#capabilities", label: "What I build" },
  { href: "#experience", label: "Experience" },
  { href: "#who", label: "About" },
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
  eyebrow: "Applied AI engineering",
  title: "Practical AI systems for real work.",
  subtitle:
    "Rockwood Lab designs and builds secure, reliable AI systems for teams with important workflows to improve. From a focused prototype to a production deployment, the work stays senior-led and hands-on.",
  ctas: {
    primary: { href: "#contact", label: "Start a conversation" },
    secondary: { href: "#capabilities", label: "See how I work" },
  },
  stats: [
    { value: "Three decades", label: "Production engineering leadership" },
    { value: "Secure", label: "Security-minded delivery" },
    { value: "Senior-led", label: "Hands-on delivery" },
  ],
};

export const capabilitiesSection = {
  eyebrow: "What I build",
  title: "AI systems that earn a place in the workflow.",
  subtitle:
    "The useful work is usually more than a model call. It includes the workflow, the source data, the interface, evaluation, access controls, monitoring, and a path for people to stay in control.",
  cta: { href: "https://calendar.app.google/zrhcrUpvDfyRHhgy7", label: "Schedule a call" },
  services: [
    {
      title: "AI workflow and agent systems",
      description:
        "Design and build task-focused systems that help teams research, classify, draft, triage, coordinate, and act—with appropriate review and clear boundaries.",
      icon: "workflow",
    },
    {
      title: "Knowledge and decision tools",
      description:
        "Turn scattered documents, data, and operating knowledge into useful internal tools with traceability, permissions, and interfaces built for the people doing the work.",
      icon: "knowledge",
    },
    {
      title: "Evaluation, reliability, and secure deployment",
      description:
        "Make AI systems testable and dependable: define success criteria, evaluate behavior, design failure paths, and deploy with the security and operational controls the context requires.",
      icon: "evaluation",
    },
  ],
  icons: {
    workflow: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8l8-4 8 4-8 4-8-4Z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 16l8 4 8-4" />
      </svg>
    ),
    knowledge: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
    evaluation: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
  },
};

export const experienceSection = {
  eyebrow: "Experience",
  title: "Production experience, applied to AI.",
  subtitle:
    "Rockwood Lab brings three decades of production engineering and security-minded delivery to AI work. The goal is not a demo that looks clever; it is a system people can use, evaluate, and maintain.",
  items: [
    {
      title: "Secure systems and operational intelligence",
      description:
        "Designed and built internal platforms for data visualization, deployment workflows, and executive reporting.",
      meta: "Enterprise security",
      image: "/cybersecurity.jpg",
      alt: "Cybersecurity project highlight image.",
    },
    {
      title: "Complex platforms and modernization",
      description:
        "Node and TypeScript delivery for retail and banking clients across large-scale modernization programs.",
      meta: "Retail and banking",
      image: "/50.jpg",
      alt: "Fortune 50 modernization project highlight image.",
    },
    {
      title: "Identity, integration, and governance",
      description:
        "Backend and integration leadership for commercial identity management solutions at Quest and Dell Software.",
      meta: "Commercial software",
      image: "/government.jpg",
      alt: "Identity governance project highlight image.",
    },
    {
      title: "High-consequence reporting workflows",
      description:
        "Election reporting tools, identity connectors, and bespoke workflows for public and private sector teams.",
      meta: "Mission-critical delivery",
      image: "/reporting.jpg",
      alt: "Reporting systems project highlight image.",
    },
  ],
};

export const leadershipSection = {
  eyebrow: "About",
  title: "Who you work with",
  members: [
    {
      name: "Brent Rockwood",
      role: "Founder & Principal Engineer",
      bio:
        "Brent is a production engineering leader who builds practical AI systems with a focus on security, reliability, and the real constraints of the work. Engagements are led directly by Brent from the first conversation through delivery.",
      image: "/leadership-brent.jpg",
      alt: "Portrait of Brent Rockwood.",
    },
  ],
};

export const contactSection = {
  eyebrow: "Start a conversation",
  title: "Have an AI workflow worth improving?",
  subtitle:
    "Tell me what your team is trying to make easier, faster, safer, or more reliable. A good first conversation covers the people doing the work, the systems and information involved, the constraints, and how you will know the result is useful.",
  points: [
    "What workflow are you trying to improve?",
    "Who uses it today, and what gets in their way?",
    "What systems, data, or documents would it need to work with?",
    "What constraints matter: security, privacy, reliability, deployment, or review?",
  ],
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
        label: "What AI workflow would you like to improve?",
        placeholder: "Workflow, systems or documents involved, constraints, and what success looks like",
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
  tagline: "Applied AI engineering",
  description:
    "Rockwood Lab builds practical AI systems for teams that need dependable, senior-led engineering.",
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
    "AI workflows",
    "Knowledge systems",
    "Agent systems",
    "Evaluation",
    "Secure deployment",
  ],
  legalLinks: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};
