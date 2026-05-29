const portfolioCanvasClassName = "min-h-screen";
const portfolioCanvasLabel = "Portfolio canvas";

const previewTags = ["Glass UI", "Purple Glow"] as const;

export default function Home() {
  return (
    <main className={portfolioCanvasClassName} aria-label={portfolioCanvasLabel}>
      <section className="section" id="phase-2">
        <div className="container">
          <div className="glass-panel hover-lift max-w-xl p-8">
            <p className="section-kicker mb-3">Design System</p>
            <h1 className="section-title text-glow">Phase 2 Foundation</h1>
            <p className="lead mt-4">
              Global colors, glass surfaces, button styles, typography, spacing, and
              motion tokens are ready for the portfolio sections.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a className="btn-primary" href="#phase-2">
                Primary Button
              </a>
              <a className="btn-secondary" href="#phase-2">
                Secondary Button
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {previewTags.map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
              <span className="badge-featured">Featured</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
