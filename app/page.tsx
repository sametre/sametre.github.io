const projects = [
  {
    number: "01",
    theme: "karacabey",
    title: "Karacabey Gross Market",
    type: "E-ticaret · Mobil · ERP",
    description:
      "Özel web mağazası, Flutter mobil uygulaması, yönetim paneli ve ERP stok senkronizasyonunu birleştiren omnichannel market platformu.",
    image: "/projects/karacabey-gross-market.png",
    tags: ["Laravel", "React", "Flutter", "MSSQL"],
  },
  {
    number: "02",
    theme: "erler",
    title: "Erler AVM",
    type: "E-ticaret · Native iOS",
    description:
      "Web mağazası, SwiftUI mobil uygulaması, güvenli ödeme ve gerçek zamanlı stok yönetimini tek sistemde buluşturan e-ticaret ürünü.",
    image: "/projects/erler-avm.png",
    tags: ["Laravel", "Vue", "SwiftUI", "MSSQL"],
  },
  {
    number: "03",
    theme: "r3",
    title: "R3",
    type: "Retail ERP · Salesforce CRM",
    description:
      "Perakende ERP operasyonlarını Salesforce Customer 360, satış ve onay süreçleriyle bağlayan kurumsal masaüstü platformu.",
    image: "/projects/r3-erp-dashboard.jpeg",
    tags: [".NET", "Salesforce", "Apex", "LWC"],
  },
];

const services = [
  ["01", "Salesforce Geliştirme", "Apex, Lightning Web Components ve Flow ile güvenilir, ölçeklenebilir kurumsal çözümler."],
  ["02", "CRM Otomasyonu", "Satış ve servis ekiplerinin tekrar eden işlerini azaltan akıllı süreçler ve onay akışları."],
  ["03", "Sistem Entegrasyonu", "Salesforce'u REST/SOAP API ve event tabanlı mimarilerle diğer iş sistemlerine bağlayan entegrasyonlar."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="eyebrow">
          <span className="status-dot" />
          <SalesforceBadge label="Salesforce · Agentforce" />
          Yeni Agentforce projeleri için müsait · Bursa
        </div>
        <h1>
          Agentforce&apos;u <em>iş sonuçlarına</em>
          <br />
          dönüşen güçlü
          <br />
          çözümlere dönüştürüyorum.
        </h1>
        <div className="hero-bottom">
          <p>
            Merhaba, ben Samet ER. Agentforce, Apex, Lightning Web Components
            ve otomasyonla işletmeler için güvenilir, insan denetimli CRM
            deneyimleri geliştiriyorum.
          </p>
          <a className="circle-link" href="/projects" aria-label="Projeleri gör">
            <span>Projeleri gör</span>
            <b>↓</b>
          </a>
        </div>
        <div className="hero-orbit orbit-one">✦</div>
        <div className="hero-orbit orbit-two">✦</div>
        <div className="hero-proof">
          <span>Agentforce</span><b>Topics · Actions · Trust</b>
          <span>Salesforce</span><b>Apex · LWC · Flow</b>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-inner">
          <span>AGENTFORCE</span><i>✦</i><span>SALESFORCE</span><i>✦</i>
          <span>TRUSTED AI</span><i>✦</i><span>INTEGRATION</span>
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="section-heading">
          <div>
            <span className="section-number">(01)</span>
            <p>Seçilmiş çalışmalar</p>
          </div>
          <h2>Doğru CRM mimarisi,<br />ölçülebilir fark yaratır.</h2>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual home-project-cover home-cover-${project.theme}`}>
                <span className="project-index">{project.number}</span>
                <div className="home-cover-glow" />
                <div className="home-cover-screen">
                  <div className="screen-chrome"><i /><i /><i /><span>{project.title}</span></div>
                  <img src={project.image} alt={`${project.title} proje kapağı`} />
                </div>
                <a href="/projects" aria-label={`${project.title} projesini incele`}>↗</a>
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="shell">
          <div className="section-heading light">
            <div>
              <span className="section-number">(02)</span>
              <p>Neler yapıyorum?</p>
            </div>
            <h2>Akıllı, güvenilir ve<br /><em>ölçülebilir</em> sistemler.</h2>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <b>↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about shell section" id="about">
        <div className="about-card">
          <div className="portrait portrait-profile">
            <div className="profile-blob" />
            <img src="/samet-profile-square.png" alt="Samet ER portresi" />
            <i className="profile-dot" />
            <b className="profile-spark">✦</b>
            <span>Bursa<br />Türkiye</span>
          </div>
          <div className="about-copy">
            <span className="section-number">(03) Hakkımda</span>
            <h2>Salesforce benim için bir CRM&apos;den fazlası: <em>güvenilir AI deneyimlerinin zemini.</em></h2>
            <p>
              ERP ve full-stack geliştirme deneyimimi Salesforce ekosistemiyle
              birleştiriyor; karmaşık iş ihtiyaçlarını sürdürülebilir CRM
              çözümlerine dönüştürüyorum. Bugün odağım Apex, LWC, Flow,
              Agentforce ile yapay zekâ destekli müşteri deneyimleri.
            </p>
            <div className="stats">
              <div><strong>10+</strong><span>Teknoloji alanı</span></div>
              <div><strong>3</strong><span>Ürün platformu</span></div>
              <div><strong>10+</strong><span>Yetkinlik belgesi</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact-inner">
          <span className="section-number">(04) Yeni bir proje</span>
          <h2>Salesforce&apos;ta çözmek istediğin<br /><em>bir iş problemi mi var?</em></h2>
          <div className="contact-actions">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn&apos;den ulaş <span>↗</span></a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub profilim <span>↗</span></a>
          </div>
        </div>
        <SiteFooter />
      </section>
    </main>
  );
}
import { SalesforceBadge, SiteFooter, SiteHeader, githubUrl, linkedinUrl } from "./site-shell";
