"use client";

import { useState } from "react";
import { ArrowRight, Code2, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";
import { cx } from "@/lib/cx";

function isHomeLink(href: string) {
  return href === "#home";
}

type NavItemsProps = {
  itemClassName: string;
  onSelect?: () => void;
};

function NavItems({ itemClassName, onSelect }: NavItemsProps) {
  return portfolioData.navLinks.map((link) => {
    const isActive = isHomeLink(link.href);

    return (
      <a
        aria-current={isActive ? "page" : undefined}
        className={cx(itemClassName, isActive && "active")}
        href={link.href}
        key={link.label}
        onClick={onSelect}
      >
        {link.label}
      </a>
    );
  });
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container nav-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="nav-logo" href="#home">
          <Code2 aria-hidden="true" className="nav-logo-icon" size={30} />
          <span>DevPortfolio</span>
        </a>

        <div className="nav-links">
          <NavItems itemClassName="nav-link" />
        </div>

        <div className="nav-actions">
          <Button className="nav-cta" href="#contact" icon={<ArrowRight size={17} />}>
            Let&apos;s Talk
          </Button>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Open navigation menu"
            className="nav-menu-button"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <Menu aria-hidden="true" size={22} />
          </button>
        </div>
      </nav>
      {isMenuOpen ? (
        <div className="mobile-nav-panel">
          <div className="mobile-nav-list">
            <NavItems itemClassName="mobile-nav-link" onSelect={() => setIsMenuOpen(false)} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
