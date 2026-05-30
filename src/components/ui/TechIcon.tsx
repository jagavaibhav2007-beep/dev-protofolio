import {
  siDocker,
  siGit,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siSocketdotio,
  siTailwindcss,
  siTypescript
} from "simple-icons";
import { cx } from "@/lib/cx";
import type { BrandIconSlug } from "@/types/portfolio";

type TechIconProps = {
  className?: string;
  decorative?: boolean;
  label: string;
  slug: BrandIconSlug;
  size?: number;
};

const iconRegistry = {
  docker: siDocker,
  git: siGit,
  mongodb: siMongodb,
  nextjs: siNextdotjs,
  nodejs: siNodedotjs,
  postgresql: siPostgresql,
  react: siReact,
  socketio: siSocketdotio,
  tailwindcss: siTailwindcss,
  typescript: siTypescript
} as const;

export function TechIcon({
  className,
  decorative = false,
  label,
  size = 24,
  slug
}: TechIconProps) {
  const icon = iconRegistry[slug];

  return (
    <svg
      aria-hidden={decorative}
      aria-label={decorative ? undefined : label}
      className={cx("shrink-0", className)}
      fill={`#${icon.hex}`}
      height={size}
      role={decorative ? "presentation" : "img"}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d={icon.path} />
    </svg>
  );
}
