import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  navLinks: [
    { href: "#home", isActive: true, label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ],
  hero: {
    eyebrow: "Hi, I'm",
    title: {
      base: "Full Stack",
      accent: "Developer"
    },
    description:
      "I build scalable web applications with modern technologies and exceptional user experiences.",
    ctaLabel: "View My Work",
    ctaHref: "#projects",
    downloadLabel: "Download CV",
    downloadHref: "#contact",
    techStack: [
      { icon: "react", label: "React" },
      { icon: "nextjs", label: "Next.js" },
      { icon: "nodejs", label: "Node.js" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "mongodb", label: "MongoDB" },
      { icon: "tailwindcss", label: "Tailwind CSS" }
    ]
  },
  about: {
    kicker: "About Me",
    heading: "Building solutions, solving problems",
    body:
      "I'm a passionate Full Stack Developer with 3+ years of experience building end-to-end web applications. I love turning ideas into reality using clean code, scalable architectures, and modern technologies.",
    ctaLabel: "More About Me",
    ctaHref: "#about",
    features: [
      {
        icon: "clean-code",
        title: "Clean Code",
        description: "Readable, maintainable interfaces designed for long-term product work."
      },
      {
        icon: "problem-solver",
        title: "Problem Solver",
        description: "Thoughtful debugging and delivery across UI, API, and data boundaries."
      },
      {
        icon: "fast-learner",
        title: "Fast Learner",
        description: "Quick ramp-up on tools, patterns, and product context without losing rigor."
      }
    ]
  },
  projects: {
    kicker: "Projects",
    heading: "Things I've Built",
    ctaLabel: "View All Projects",
    ctaHref: "#projects",
    items: [
      {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        description: "A real-time analytics dashboard with interactive charts and reports.",
        demoHref: "#projects",
        featured: true,
        tags: [
          { icon: "nextjs", label: "Next.js" },
          { icon: "typescript", label: "TypeScript" },
          { icon: "tailwindcss", label: "Tailwind CSS" }
        ]
      },
      {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce platform with cart, payments, and order tracking.",
        demoHref: "#projects",
        tags: [
          { icon: "nextjs", label: "Next.js" },
          { icon: "nodejs", label: "Node.js" },
          { icon: "mongodb", label: "MongoDB" }
        ]
      },
      {
        id: "devchat",
        title: "DevChat",
        description: "Real-time chat application with authentication and rooms.",
        demoHref: "#projects",
        tags: [
          { icon: "react", label: "React" },
          { icon: "nodejs", label: "Node.js" },
          { icon: "socketio", label: "Socket.io" }
        ]
      }
    ]
  },
  skills: {
    kicker: "Skills",
    heading: "Tech I Work With",
    items: [
      { id: "react", icon: "react", label: "React" },
      { id: "nextjs", icon: "nextjs", label: "Next.js" },
      { id: "nodejs", icon: "nodejs", label: "Node.js" },
      { id: "typescript", icon: "typescript", label: "TypeScript" },
      { id: "mongodb", icon: "mongodb", label: "MongoDB" },
      { id: "postgresql", icon: "postgresql", label: "PostgreSQL" },
      { id: "tailwindcss", icon: "tailwindcss", label: "Tailwind CSS" },
      { id: "git", icon: "git", label: "Git" },
      { id: "docker", icon: "docker", label: "Docker" }
    ]
  }
};
