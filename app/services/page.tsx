import type { Metadata } from "next";
import { SalesforceBadge, SiteFooter, SiteHeader, linkedinUrl } from "../site-shell";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Agentforce, Salesforce geliştirme, CRM otomasyonu, sistem entegrasyonu ve kurumsal uygulama mimarisi hizmetleri.",
  alternates: { canonical: "/services" },
};

const services = [
  ["01", "Agentforce Experiences", "Doğru konu, güvenilir veri ve kontrollü aksiyon tasarımıyla ekipleri güçlendiren Agentforce deneyimleri.", ["Topics & Actions", "Trusted Grounding", "Human Handoff", "Agent Evaluation"]],
  ["02", "Salesforce Development", "Apex, SOQL, Lightning Web Components ve Flow ile güvenli, test edilebilir ve ölçeklenebilir çözümler.", ["Apex & SOQL", "Lightning Web Components", "Flow Automation", "Test & Deployment"]],
  ["03", "CRM & Process Automation", "Satış ve servis ekipleri için tekrar eden işleri azaltan veri modelleri, onay süreçleri ve otomasyonlar.", ["Sales Cloud", "Service Cloud", "Approval Processes", "Reports & Dashboards"]],
  ["04", "Enterprise Integration", "Salesforce'u ERP, POS, ödeme ve diğer kurumsal sistemlerle güvenilir biçimde bağlayan API mimarileri.", ["REST & SOAP API", "Platform Events", "CRM–ERP Sync", "Data Migration"]],
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero shell">
        <span className="section-number">(02) Hizmetler</span>
        <SalesforceBadge label="Agentforce delivery" />
        <h1>Sadece AI değil,<br /><em>güvenilir aksiyon.</em></h1>
        <p>İş ihtiyacını, veriyi ve insan denetimini birlikte tasarlayarak sürdürülebilir Agentforce ve Salesforce ürünlerine dönüştürürüm.</p>
      </section>
      <section className="service-cards shell">
        {services.map(([number, title, description, items]) => (
          <article key={number as string}>
            <span className="section-number">{number as string}</span>
            <h2>{title as string}</h2>
            <p>{description as string}</p>
            <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="contact page-cta">
        <div className="shell contact-inner">
          <span className="section-number">Bir proje konuşalım</span>
          <h2>İş problemini birlikte<br /><em>doğru çözüme dönüştürelim.</em></h2>
          <div className="contact-actions"><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn&apos;den ulaş <span>↗</span></a></div>
        </div>
        <SiteFooter />
      </section>
    </main>
  );
}
