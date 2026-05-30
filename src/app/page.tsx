import { ArrowRight, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechIcon } from "@/components/ui/TechIcon";
import { portfolioData } from "@/data/portfolio";
import type { AboutFeature, Skill, TechItem } from "@/types/portfolio";

export default function Home() {
  return (
    <main aria-label="Portfolio canvas" className="min-h-screen pb-14 sm:pb-20">
      <Navbar />
      <section className="section" id="home">
        <div className="container">
          <PreviewHeader />

          <GlassPanel className="p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
              <HeroPreview />
              <div className="space-y-5">
                <AboutPreview features={portfolioData.about.features} />
                <ProjectPreview />
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>
    </main>
  );
}

function PreviewHeader() {
  return (
    <SectionHeader
      className="mb-8"
      description="The navbar and shared primitives are in place, so the next step can focus on the real hero section instead of setup work."
      kicker="Phase 4 Complete"
      title="Ready For Hero Build"
    />
  );
}

function HeroPreview() {
  const { hero } = portfolioData;

  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <p className="section-kicker">{hero.eyebrow}</p>
        <h1 className="section-title text-glow text-4xl sm:text-5xl">
          {hero.title.base}{" "}
          <span className="mt-2 block text-[color:var(--purple-bright)]">
            {hero.title.accent}
          </span>
        </h1>
        <p className="lead">{hero.description}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button href={hero.ctaHref} icon={<ArrowRight size={18} />}>
          {hero.ctaLabel}
        </Button>
        <Button href={hero.downloadHref} icon={<Download size={18} />} variant="secondary">
          {hero.downloadLabel}
        </Button>
      </div>

      <TechRail items={hero.techStack} />
    </div>
  );
}

function TechRail({ items }: { items: TechItem[] }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-[color:var(--text-soft)]">Tech Stack</p>
      <GlassPanel className="inline-flex flex-wrap items-center gap-5 rounded-[12px] px-5 py-4">
        {items.map((item) => (
          <TechIcon decorative key={item.label} label={item.label} size={28} slug={item.icon} />
        ))}
      </GlassPanel>
    </div>
  );
}

function AboutPreview({ features }: { features: AboutFeature[] }) {
  const { about } = portfolioData;

  return (
    <GlassPanel className="p-6">
      <SectionHeader
        className="mb-5"
        description={about.body}
        kicker={about.kicker}
        title={about.heading}
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <FeatureTile feature={feature} key={feature.title} />
        ))}
      </div>
    </GlassPanel>
  );
}

function FeatureTile({ feature }: { feature: AboutFeature }) {
  return (
    <div className="rounded-[18px] border border-[color:var(--border-soft)] bg-[rgba(7,17,31,0.55)] p-4">
      <p className="mb-2 text-sm font-semibold text-white">{feature.title}</p>
      <p className="text-sm leading-6 text-[color:var(--muted)]">{feature.description}</p>
    </div>
  );
}

function ProjectPreview() {
  const featuredProject = portfolioData.projects.items[0];

  return (
    <GlassPanel className="p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="section-kicker">{portfolioData.projects.kicker}</p>
          <h2 className="section-title mt-2">{portfolioData.projects.heading}</h2>
        </div>
        <span className="badge-featured">Featured</span>
      </div>

      <TagList items={featuredProject?.tags ?? []} />
      <SkillPreviewGrid items={portfolioData.skills.items} />
    </GlassPanel>
  );
}

function TagList({ items }: { items: TechItem[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span className="pill" key={item.label}>
          <TechIcon decorative label={item.label} size={14} slug={item.icon} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

function SkillPreviewGrid({ items }: { items: Skill[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
      {items.map((skill) => (
        <div className="skill-tile px-3 py-4 text-center" key={skill.id}>
          <TechIcon decorative label={skill.label} size={32} slug={skill.icon} />
          <span className="text-sm font-medium text-white">{skill.label}</span>
        </div>
      ))}
    </div>
  );
}
