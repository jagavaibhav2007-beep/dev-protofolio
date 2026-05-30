import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

type ButtonVariant = "primary" | "secondary";

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  href: string;
};

export function Button({
  children,
  className,
  icon,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cx(variant === "primary" ? "btn-primary" : "btn-secondary", className)}
      {...props}
    >
      <span>{children}</span>
      {icon}
    </a>
  );
}
