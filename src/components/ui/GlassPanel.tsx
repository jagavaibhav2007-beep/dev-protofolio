import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";

export function GlassPanel({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cx("glass-panel", className)} {...props} />
  );
}
