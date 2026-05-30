import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type SectionHeaderProps = {
  actions?: ReactNode;
  align?: "center" | "left";
  className?: string;
  description?: string;
  kicker: string;
  title: string;
};

export function SectionHeader({
  actions,
  align = "left",
  className,
  description,
  kicker,
  title
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cx(
        "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
        isCentered && "md:flex-col md:items-center md:justify-center",
        className
      )}
    >
      <div className={cx("space-y-3", isCentered && "text-center")}>
        <p className="section-kicker">{kicker}</p>
        <h2 className={cx("section-title", isCentered && "mx-auto")}>{title}</h2>
        {description ? (
          <p className={cx("lead max-w-2xl", isCentered && "mx-auto")}>{description}</p>
        ) : null}
      </div>
      {actions ? <div className={cx(isCentered && "md:self-center")}>{actions}</div> : null}
    </div>
  );
}
