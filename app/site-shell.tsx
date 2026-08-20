export const linkedinUrl = "https://www.linkedin.com/in/samet-er-75915a3a3/";
export const githubUrl = "https://github.com/sametre";

export function SalesforceBadge({ label = "Salesforce" }: { label?: string }) {
  return (
    <span className="salesforce-badge">
      <img src="https://cdn.simpleicons.org/salesforce/00A1E0" alt="" width="18" height="18" />
      <span>{label}</span>
    </span>
  );
}

export function SiteHeader({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const prefix = en ? "/en" : "";
  return (
    <header className="nav shell">
      <a className="brand" href="/" aria-label="Ana sayfa">
        <img src="/logo.svg" alt="Samet ER — Salesforce Developer" />
        <SalesforceBadge label="Agentforce" />
      </a>
      <nav aria-label="Ana menü">
        <a href={`${prefix}/projects`}>{en ? "Projects" : "Projeler"}</a>
        <a href={`${prefix}/services`}>{en ? "Services" : "Hizmetler"}</a>
        <a href={`${prefix}/about`}>{en ? "About" : "Hakkımda"}</a>
        <a href={`${prefix}/blog`}>Blog</a>
      </nav>
      <a className="language-switch" href={en ? "/" : "/en"} lang={en ? "tr" : "en"}>
        {en ? "TR" : "EN"}
      </a>
      <a className="nav-cta" href={linkedinUrl} target="_blank" rel="noreferrer">
        {en ? "Let's work together" : "Birlikte çalışalım"} <span>↗</span>
      </a>
    </header>
  );
}

export function SiteFooter({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  return (
    <footer className="shell">
      <a className="brand" href="/" aria-label="Ana sayfaya dön">
        <img src="/logo.svg" alt="Samet ER — Salesforce Developer" />
      </a>
      <p>© 2026 Samet ER. Bursa, {en ? "Türkiye" : "Türkiye"}.</p>
      <div>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}
