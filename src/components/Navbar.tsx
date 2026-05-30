"use client";

import { useState } from "react";
import { ArrowRight, Code2, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";
import { cx } from "@/lib/cx";

const logoLabel = "DevPortfolio";
const contactHref = "#contact";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container nav-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="nav-logo" href="#home">
          <Code2
            aria-hidden="true"
            className="nav-logo-icon"
            size={30}
          />
          <span>{logoLabel}</span>
        </a>

        <div className="nav-links">
          {portfolioData.navLinks.map((link) => (
            <a
              aria-current={link.isActive ? "page" : undefined}
              className={cx("nav-link", link.isActive && "active")}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <Button
            className="nav-cta"
            href={contactHref}
            icon={<ArrowRight size={17} />}
          >
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
            {portfolioData.navLinks.map((link) => (
              <a
                aria-current={link.isActive ? "page" : undefined}
                className={cx("mobile-nav-link", link.isActive && "active")}
                href={link.href}
                key={link.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
