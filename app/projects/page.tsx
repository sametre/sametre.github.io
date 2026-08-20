import type { Metadata } from "next";
import { SalesforceBadge, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Samet ER'in e-ticaret, mobil uygulama, ERP, CRM, Salesforce ve Agentforce odaklı projeleri.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    number: "01",
    theme: "karacabey",
    title: "Karacabey Gross Market",
    subtitle: "ERP destekli omnichannel market platformu",
    image: "/projects/karacabey-gross-market.png",
    description:
      "Web mağazası, Flutter mobil uygulaması, yönetim paneli ve ERP senkronizasyonunu tek mimaride birleştiren özel e-ticaret çözümü. Ürün, varyant, stok, sipariş, kampanya, ödeme ve teslimat akışları merkezî olarak yönetiliyor.",
    scope: [
      ["E-ticaret", "Mobil uyumlu özel mağaza, sepet, ödeme ve müşteri hesabı"],
      ["Mobil", "Flutter, Riverpod ve güvenli API ile iOS/Android deneyimi"],
      ["ERP", "Microsoft SQL Server ile ürün, stok ve sipariş senkronizasyonu"],
    ],
    result: "Web, mobil, operasyon ve ERP arasında tek ürün ve sipariş akışı",
    signal: "Omnichannel Commerce",
    metric: "Web · iOS · Android",
    tags: ["Laravel 13", "React 19", "Inertia.js", "Flutter", "Filament", "MSSQL", "PayTR"],
    href: "https://github.com/sametre/KaracabeyGrossMarket",
  },
  {
    number: "02",
    theme: "erler",
    title: "Erler AVM",
    subtitle: "Modern web mağazası ve native iOS deneyimi",
    image: "/projects/erler-avm.png",
    description:
      "Mağaza vitrini, gerçek zamanlı stok, ürün varyantları, sipariş ve iade süreçleri, kampanyalar, yönetim paneli ve mobil uygulamayı bir araya getiren kapsamlı e-ticaret platformu.",
    scope: [
      ["E-ticaret", "Ürün, marka, kategori, favori, sepet ve müşteri akışları"],
      ["Mobil", "SwiftUI ile geliştirilen native iOS alışveriş uygulaması"],
      ["Operasyon", "Akbank 3D Secure, PayTR, güvenli REST API ve rol yönetimi"],
    ],
    result: "Web, iOS ve mağaza operasyonları için ortak ve ölçeklenebilir ticaret altyapısı",
    signal: "Unified Retail",
    metric: "Web · Native iOS",
    tags: ["Laravel 13", "Vue 3", "TypeScript", "Inertia.js", "SwiftUI", "MSSQL", "Sanctum"],
    href: "https://github.com/sametre/ErlerAvm",
  },
  {
    number: "03",
    theme: "r3",
    title: "R3 ERP",
    subtitle: "KOBİ ve perakende için bütünleşik yönetim platformu",
    image: "/projects/r3-erp-dashboard.jpeg",
    description:
      "Satış, satın alma, stok, cari, finans, mağazacılık, e-dönüşüm, muhasebe ve yönetim süreçlerini tek masaüstü çalışma alanında birleştiren kurumsal ERP platformu. Merkez ve mağaza operasyonları aynı veri modeli üzerinde izleniyor; yöneticiler günlük hareketleri, finansal durumu ve operasyon performansını bütünsel biçimde değerlendirebiliyor.",
    scope: [
      ["Ticari", "Satış, satın alma, cari hesap, teklif, sipariş ve faturalama"],
      ["Operasyon", "Çoklu mağaza, depo, stok hareketleri, sayım ve transfer yönetimi"],
      ["Finans", "Kasa, banka, ödeme, tahsilat, muhasebe ve yönetim raporları"],
      ["Dijital", "E-dönüşüm, güvenli API servisleri ve yapay zekâ destekli R3 AI"],
    ],
    result: "Merkez, mağaza, depo ve finans ekipleri için tek kaynaktan izlenebilir operasyon ve daha hızlı karar desteği",
    signal: "R3 KOBİ Çözümleri",
    metric: "Desktop · SQL · AI",
    tags: [".NET", "C#", "SQL", "Windows Desktop", "REST API", "ERP", "R3 AI"],
    href: "https://github.com/sametre/R3",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero shell projects-hero">
        <span className="section-number">(01) Projeler</span>
        <SalesforceBadge label="Salesforce · Agentforce" />
        <h1>Veriden aksiyona,<br /><em>uçtan uca ürünler.</em></h1>
        <p>
          E-ticaret, ERP, CRM ve Agentforce katmanlarını gerçek operasyon
          ihtiyaçlarına göre tasarlıyor; dağınık veriyi ekiplerin güvenle aksiyon
          alabildiği sürdürülebilir ürün deneyimlerine dönüştürüyorum.
        </p>
      </section>

      <section className="shell detail-projects">
        {projects.map((project) => (
          <article className="detail-project project-case" key={project.title}>
            <div className={`detail-project-visual project-showcase showcase-${project.theme}`}>
              <div className="showcase-aurora" />
              <div className="showcase-grid" />
              <div className="showcase-orbit orbit-a" />
              <div className="showcase-orbit orbit-b" />

              <div className="showcase-screen screen-back" aria-hidden="true">
                <img src={project.image} alt="" />
              </div>
              <div className="showcase-screen screen-main">
                <div className="screen-chrome">
                  <i /><i /><i />
                  <span>{project.title}</span>
                </div>
                <img src={project.image} alt={`${project.title} ürün ekranları`} />
              </div>

              <div className="showcase-chip chip-index">{project.number}</div>
              <div className="showcase-chip chip-signal">
                <i />
                <span>{project.signal}</span>
              </div>
              <div className="showcase-chip chip-metric">
                <small>PLATFORM</small>
                <strong>{project.metric}</strong>
              </div>
              <div className="showcase-shadow" />
            </div>
            <div className="detail-project-copy">
              <span className="section-number">{project.number} · Seçilmiş proje</span>
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
              <p>{project.description}</p>

              <div className="project-scope">
                {project.scope.map(([label, detail]) => (
                  <div key={label}>
                    <b>{label}</b>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="result"><b>Proje değeri</b><span>{project.result}</span></div>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                GitHub&apos;da incele ↗
              </a>
            </div>
          </article>
        ))}
      </section>
      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}
