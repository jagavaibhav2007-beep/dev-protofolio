export type BrandIconSlug =
  | "docker"
  | "git"
  | "mongodb"
  | "nextjs"
  | "nodejs"
  | "postgresql"
  | "react"
  | "socketio"
  | "tailwindcss"
  | "typescript";

export type NavLink = {
  href: string;
  label: string;
};

export type HeroContent = {
  ctaLabel: string;
  ctaHref: string;
  description: string;
  downloadLabel: string;
  downloadHref: string;
  eyebrow: string;
  title: {
    accent: string;
    base: string;
  };
};

export type TechItem = {
  icon: BrandIconSlug;
  label: string;
};

export type AboutFeature = {
  description: string;
  icon: "clean-code" | "fast-learner" | "problem-solver";
  title: string;
};

export type ProjectTag = TechItem;

export type Project = {
  demoHref: string;
  description: string;
  featured?: boolean;
  id: string;
  tags: ProjectTag[];
  title: string;
};

export type Skill = TechItem & {
  id: string;
};

export type PortfolioData = {
  about: {
    body: string;
    ctaHref: string;
    ctaLabel: string;
    features: AboutFeature[];
    heading: string;
    kicker: string;
  };
  hero: HeroContent & {
    techStack: TechItem[];
  };
  navLinks: NavLink[];
  projects: {
    ctaHref: string;
    ctaLabel: string;
    heading: string;
    items: Project[];
    kicker: string;
  };
  skills: {
    heading: string;
    items: Skill[];
    kicker: string;
  };
};
