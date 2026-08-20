import type { Metadata } from "next";
import { SalesforceBadge, SiteFooter, SiteHeader, githubUrl, linkedinUrl } from "../site-shell";

export const metadata: Metadata = {
  title: "Hakkımda ve Sertifikalar",
  description:
    "Bursa merkezli Salesforce, Agentforce ve Full-Stack Developer Samet ER'in teknoloji yolculuğu, uzmanlık alanları ve sertifikaları.",
  alternates: { canonical: "/about" },
};

const certificates = [
  {
    title: "Salesforce Certified Platform Administrator",
    issuer: "Salesforce",
    date: "Mayıs 2026",
    status: "Aralık 2036'ya kadar geçerli",
    image: "/certificates/salesforce-platform-administrator.png",
    imageClass: "certificate-badge",
    href: "https://www.salesforce.com/trailblazer/esdwwv1meq5dlx2mq7",
  },
  {
    title: "Senior Laravel Developer",
    issuer: "Certification for Laravel",
    date: "Temmuz 2019",
    status: "Laravel 12 Developer Exam",
    image: "/certificates/laravel-developer.jpeg",
  },
  {
    title: "Uygulamalarla SQL",
    issuer: "BTK Akademi",
    date: "Şubat 2026",
    status: "Katılım sertifikası",
    image: "/certificates/btk-sql.jpeg",
  },
  {
    title: "Uygulamalarla Nesne Yönelimli Programlama",
    issuer: "BTK Akademi",
    date: "Şubat 2026",
    status: "Katılım sertifikası",
    image: "/certificates/btk-oop.jpeg",
  },
  {
    title: "İleri Seviye Java",
    issuer: "BTK Akademi",
    date: "Şubat 2026",
    status: "Katılım sertifikası",
    image: "/certificates/btk-advanced-java.jpeg",
  },
  {
    title: "Web Sitesi Kullanılabilirliği",
    issuer: "BTK Akademi",
    date: "Ekim 2025",
    status: "Katılım sertifikası",
    image: "/certificates/btk-web-usability.jpeg",
  },
];

const additionalCredentials = [
  ["Mastering React / React Foundation", "Opsgility", "Ekim 2023"],
  ["Programming for Android Apps Specialist", "FLAG", "Kasım 2025"],
  ["JavaScript ES6 Certification", "QuickStart Inc.", "Ekim 2024"],
  ["Laravel Artisan Developer", "AIS — Academy of Information Systems", "Nisan 2023"],
  ["PHP — Symfony", "Ittanta Technologies", "Şubat 2021"],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="subpage-hero shell about-hero">
        <span className="section-number">(03) Hakkımda</span>
        <SalesforceBadge label="Salesforce professional" />
        <h1>Merhaba, ben<br /><em>Samet ER.</em></h1>
        <p>
          Bursa&apos;da yaşayan; kurumsal yazılımlar, web teknolojileri ve
          Salesforce ekosisteminin kesişiminde ürünler geliştiren bir yazılım
          geliştiricisiyim.
        </p>
      </section>

      <section className="about-story shell">
        <div className="profile-stage" aria-label="Samet ER profil görseli">
          <div className="profile-orbit profile-orbit-outer"><i /><i /><i /></div>
          <div className="profile-orbit profile-orbit-inner"><i /><i /></div>
          <div className="profile-photo-ring">
            <img src="/samet-profile-square.png" alt="Salesforce Developer Samet ER portresi" />
          </div>
          <span className="profile-location">Bursa · Türkiye</span>
          <span className="profile-role">Agentforce<br />Builder</span>
          <b className="profile-star">✦</b>
        </div>
        <div className="story-copy">
          <h2>Meraktan başlayan,<br /><em>sürekli gelişen</em> bir yolculuk.</h2>
          <p>
            Anadolu Lisesi&apos;nden mezun olduktan sonra Anadolu Üniversitesi
            Açıköğretim Fakültesi Bilgisayar Programcılığı bölümünde eğitim
            aldım. Yazılıma duyduğum ilgi ise çok daha önce, ortaokul ve lise
            yıllarında programlama dillerini ve yeni teknolojileri keşfetmemle
            başladı.
          </p>
          <p>
            Kariyerimin ilk döneminde iş dünyasındaki ERP sistemlerine ve
            masaüstü uygulamalara odaklandım. C#, C, Go, Java ve Python ile
            kendimi geliştirirken ERP ve ağ yönetimi çözümleri ürettim. Daha
            sonra web teknolojilerine yönelerek PHP, JavaScript ve Ruby;
            Laravel, React, Next.js, Angular, Node.js ve Express.js ile
            freelance projeler geliştirdim. Mobil tarafta Flutter, Dart ve
            Swift öğrenerek teknik bakış açımı farklı platformlara taşıdım.
          </p>
          <p>
            ERP deneyimimin ardından CRM alanına yönelmem, Salesforce
            ekosistemiyle tanışmamı sağladı. Bugün Apex, Lightning Web
            Components, Flow ve entegrasyon teknolojileriyle CRM panelleri ve
            Salesforce çözümleri geliştiriyorum. Agentforce ve yapay zekâ
            destekli müşteri deneyimleri üzerine çalışıyor; güvenilir veri,
            kontrollü aksiyonlar ve insan devri gereken hizmet senaryolarında
            uzmanlığımı derinleştiriyorum.
          </p>
          <p>
            Kendimi tek bir teknoloji alanıyla sınırlamıyorum. Sürekli
            öğrenmeye, eksiklerimi tamamlamaya ve öğrendiklerimi gerçek iş
            problemlerine uygulamaya önem veriyorum. Teknoloji dışında
            arkadaşlarımla vakit geçirmekten, yeni aktiviteler denemekten,
            satranç oynamaktan ve yüzmekten keyif alıyorum.
          </p>

          <div className="principles expertise">
            <div><b>01</b><span>ERP &amp; kurumsal sistemler</span></div>
            <div><b>02</b><span>Web &amp; mobil ürünler</span></div>
            <div><b>03</b><span>Salesforce, Agentforce &amp; güvenilir AI</span></div>
          </div>
          <div className="profile-links">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <section className="credentials section" id="certificates">
        <div className="shell">
          <div className="credentials-heading">
            <div>
              <span className="section-number">(04) Sertifikalar</span>
              <p>Öğrenmeyi ölçülebilir yetkinliğe dönüştüren çalışmalar.</p>
            </div>
            <h2>Doğrulanmış bilgi,<br /><em>sürekli gelişim.</em></h2>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate) => {
              const content = (
                <>
                  <div className={`certificate-image ${certificate.imageClass ?? ""}`}>
                    <img src={certificate.image} alt={`${certificate.title} sertifikası`} />
                    <span>Görüntüle ↗</span>
                  </div>
                  <div className="certificate-copy">
                    <span>{certificate.issuer}</span>
                    <h3>{certificate.title}</h3>
                    <div>
                      <time>{certificate.date}</time>
                      <small>{certificate.status}</small>
                    </div>
                  </div>
                </>
              );

              return certificate.href ? (
                <a
                  className="certificate-card"
                  href={certificate.href}
                  target="_blank"
                  rel="noreferrer"
                  key={certificate.title}
                  aria-label={`${certificate.title} yeterlilik belgesini görüntüle`}
                >
                  {content}
                </a>
              ) : (
                <a
                  className="certificate-card"
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  key={certificate.title}
                  aria-label={`${certificate.title} sertifika görselini görüntüle`}
                >
                  {content}
                </a>
              );
            })}
          </div>

          <div className="additional-credentials">
            <div>
              <span className="section-number">Diğer yetkinlik belgeleri</span>
              <p>Web, mobil ve uygulama geliştirme alanlarındaki tamamlayıcı eğitimler.</p>
            </div>
            <div className="credential-list">
              {additionalCredentials.map(([title, issuer, date], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{issuer}</p>
                  <time>{date}</time>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}
