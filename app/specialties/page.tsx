import Link from "next/link";
import { Shell, PageHero, CTA } from "../components";

export const metadata = {
  title: "Surgical Specialties & Patient Information in Lahore | Dr. Zain Tayyab Abbas",
  description: "Explore surgical oncology, breast and colorectal cancer consultation information, endocrine surgery, general surgery and advanced laparoscopy in Lahore.",
  alternates: { canonical: "/specialties" }
};

const images = {
  oncology: "https://vshhospital.com/media/departments/Surgical_Onco.jpg",
  breast: "https://www.aureliushealth.com/sites/default/files/paragraph/image/2024-06/breast%20surgery.jpg",
  colorectal: "https://www.arodya.com/illustrations/blog/colorectal-cancer-surgery-india.webp",
  thyroid: "https://www.sehatok.com/sites/default/files/styles/large_16_9/public/media/images/CAB2ECAA-336F-469E-BD5B-CA6AFFB8F636.jpg?h=d1cb525d&itok=eBZMJ19Q",
  general: "https://www.herniasurgeryclinic.com/cdn/images/treatments/robotic-hernia-surgery-mumbai5.webp",
  laparoscopy: "https://everhope.care/assets/images/onco/cytoreductive-surgery.webp"
};

const data = [
  ["Surgical Oncology", "Consultation and surgical assessment for cancer-related conditions, with a focus on reviewing diagnosis, pathology, imaging and treatment planning.", "/specialties/surgical-oncology", images.oncology, "Cancer care planning"],
  ["Breast Cancer Consultation", "Understand breast lump assessment, biopsy and pathology reports, breast cancer surgery discussions and lymph node assessment.", "/specialties/breast-cancer-consultation", images.breast, "Breast assessment"],
  ["Colorectal Cancer Consultation", "Information about colorectal and gastrointestinal cancer investigations, pathology review and surgical consultation.", "/specialties/colorectal-cancer-consultation", images.colorectal, "Colorectal information"],
  ["Endocrine Surgery", "Consultation information for selected conditions involving the thyroid, parathyroid and other endocrine glands.", "/specialties/endocrine-surgery", images.thyroid, "Thyroid & glands"],
  ["General Surgery", "Assessment information for abdominal, hernia, gallbladder, appendix and other general surgical concerns.", "/specialties/general-surgery", images.general, "Common surgical concerns"],
  ["Advanced Laparoscopy", "Fellowship in Advanced Laparoscopy; learn about minimally invasive approaches, patient selection and surgical planning.", "/specialties/laparoscopic-surgery", images.laparoscopy, "Minimally invasive surgery"],
  ["Gastric Cancer Information", "Understand stomach cancer investigations, biopsy, staging and treatment planning.", "/specialties/gastric-cancer-information", images.oncology, "Stomach cancer guide"],
  ["Thyroid Cancer Information", "Learn about thyroid nodules, ultrasound, needle sampling and specialist assessment.", "/specialties/thyroid-cancer-information", images.thyroid, "Thyroid cancer guide"],
  ["Ovarian Cancer Information", "Patient guidance on ovarian masses, imaging, pathology and specialist referral.", "/specialties/ovarian-cancer-information", images.oncology, "Ovarian cancer guide"],
  ["Uterine Cancer Information", "Understand abnormal bleeding, endometrial assessment and appropriate specialist referral.", "/specialties/uterine-cancer-information", images.breast, "Uterine cancer guide"],
  ["Testicular Cancer Information", "Guidance on testicular lumps, ultrasound, blood tests and urology assessment.", "/specialties/testicular-cancer-information", images.oncology, "Testicular cancer guide"],
  ["Esophageal Cancer Information", "Learn about swallowing symptoms, endoscopy, biopsy and staging investigations.", "/specialties/esophageal-cancer-information", images.colorectal, "Oesophageal cancer guide"],
  ["Sarcoma Information", "Understand soft tissue and bone sarcoma assessment, biopsy planning and specialist teams.", "/specialties/sarcoma-information", images.oncology, "Sarcoma information"],
  ["Gallbladder Surgery Information", "Patient guide to gallstones, ultrasound, symptoms and surgical assessment.", "/specialties/gallbladder-surgery-information", images.general, "Gallbladder guide"],
  ["Hernia Information", "Learn about hernia symptoms, warning signs and repair options.", "/specialties/hernia-information", images.general, "Hernia guide"],
];

export default function Specialties() {
  return (
    <Shell>
      <main>
        <PageHero eyebrow="Clinical services & patient guides" title="Surgical specialties and patient information" lead="Explore consultation areas and educational guides. Clinical assessment and treatment recommendations depend on each patient's diagnosis and individual circumstances." />
        <section className="section section-white specialties-directory">
          <div className="container">
            <div className="specialties-directory-intro">
              <div className="eyebrow">Explore by topic</div>
              <h2>Areas of consultation</h2>
              <p>Start with the topic most relevant to your concern. Each page explains what may be discussed and what information can help prepare for an appointment.</p>
            </div>
            <div className="specialties-image-grid">
              {data.map(([title, description, url, image, label], index) => (
                <article className="specialty-image-card" key={url}>
                  <Link href={url} className="specialty-image-link" aria-label={`Explore ${title}`}>
                    <div className="specialty-image-wrap">
                      <img src={image} alt={`${title} — related medical consultation image`} loading={index < 6 ? "eager" : "lazy"} />
                      <span className="specialty-image-number">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="specialty-image-content">
                      <span className="specialty-image-label">{label}</span>
                      <h2>{title}</h2>
                      <p>{description}</p>
                      <span className="specialty-image-cta">Explore consultation <b>↗</b></span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <p className="specialties-directory-note">Some pages provide general educational information and referral guidance; they do not imply that every condition or cancer type is a dedicated specialist service.</p>
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}
