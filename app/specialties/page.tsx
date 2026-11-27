import Link from "next/link";
import { Shell, PageHero, CTA } from "../components";

export const metadata = {
  title: "Surgical Specialties in Lahore",
  description: "Explore Dr. Zain Tayyab Abbas’s documented surgical oncology and general surgery background, alongside patient education on related conditions and referral pathways in Lahore.",
  alternates: { canonical: "/specialties" }
};

const data = [
  ["Surgical Oncology", "Consultation and surgical assessment for cancer-related conditions, with a focus on reviewing diagnosis, pathology, imaging and treatment planning.", "/specialties/surgical-oncology"],
  ["Breast Cancer Consultation", "Understand breast lump assessment, biopsy and pathology reports, breast cancer surgery discussions and lymph node assessment.", "/specialties/breast-cancer-consultation"],
  ["Colorectal Cancer Consultation", "Information about colorectal and gastrointestinal cancer investigations, pathology review and surgical consultation.", "/specialties/colorectal-cancer-consultation"],
  ["Thyroid & Endocrine Information", "General educational information about thyroid and endocrine conditions, investigations and specialist referral.", "/specialties/endocrine-surgery"],
  ["General Surgery", "Assessment information for abdominal, hernia, gallbladder, appendix and other general surgical concerns.", "/specialties/general-surgery"],
  ["Laparoscopic Surgery Information", "Patient education about minimally invasive approaches, including the importance of individual surgical assessment.", "/specialties/laparoscopic-surgery"],
  ["Gastric Cancer Information", "Understand stomach cancer investigations, biopsy, staging and treatment planning.", "/specialties/gastric-cancer-information"],
  ["Thyroid Cancer Information", "Learn about thyroid nodules, ultrasound, needle sampling and specialist assessment.", "/specialties/thyroid-cancer-information"],
  ["Ovarian Cancer Information", "Patient guidance on ovarian masses, imaging, pathology and specialist referral.", "/specialties/ovarian-cancer-information"],
  ["Uterine Cancer Information", "Understand abnormal bleeding, endometrial assessment and appropriate specialist referral.", "/specialties/uterine-cancer-information"],
  ["Testicular Cancer Information", "Guidance on testicular lumps, ultrasound, blood tests and urology assessment.", "/specialties/testicular-cancer-information"],
  ["Esophageal Cancer Information", "Learn about swallowing symptoms, endoscopy, biopsy and staging investigations.", "/specialties/esophageal-cancer-information"],
  ["Sarcoma Information", "Understand soft tissue and bone sarcoma assessment, biopsy planning and specialist teams.", "/specialties/sarcoma-information"],
  ["Gallbladder Surgery Information", "Patient guide to gallstones, ultrasound, symptoms and surgical assessment.", "/specialties/gallbladder-surgery-information"],
  ["Hernia Information", "Learn about hernia symptoms, warning signs and repair options.", "/specialties/hernia-information"],
];

function SpecialtyIcon({ index }: { index: number }) {
  const icons = [
    "/images/healthicons/oncology.svg",
    "/images/healthicons/body.svg",
    "/images/healthicons/colon.svg",
    "/images/healthicons/thyroid.svg",
    "/images/healthicons/general-surgery.svg",
    "/images/healthicons/general-surgery.svg",
    "/images/healthicons/stomach.svg",
    "/images/healthicons/thyroid-cancer.svg",
    "/images/healthicons/female-reproductive_system.svg",
    "/images/healthicons/female-reproductive_system.svg",
    "/images/healthicons/testicles.svg",
    "/images/healthicons/oesophagus-cancer.svg",
    "/images/healthicons/bone.svg",
    "/images/healthicons/gallbladder.svg",
    "/images/healthicons/body.svg"
  ];
  if (!icons[index]) return null;
  return <img src={icons[index]} alt="" aria-hidden="true" className="specialty-medical-icon" />;
}

export default function Specialties() {
  return (
    <Shell>
      <main>
        <PageHero eyebrow="Consultation areas & patient education" title="Surgical consultations and patient information" lead="Explore Dr. Abbas’s CV-documented background in surgical oncology and general surgery, alongside educational guides to related conditions and referral pathways. The appropriate evaluation and management plan is determined individually after clinical assessment." />
        <section className="section section-white specialties-cards-section">
          <div className="container">
            <h2 className="specialties-directory-title">Areas of Specialty</h2>
            <div className="specialties-card-grid">
              {data.map(([title, description, url], index) => (
                <Link className="specialty-tile" href={url} key={url}>
                  <div className="specialty-tile-art" aria-hidden="true">
                    <SpecialtyIcon index={index} />
                  </div>
                  <div className="specialty-tile-copy">
                    <h2>{title}</h2>
                    <span className="specialty-tile-link">Explore <b>↗</b></span>
                  </div>
                </Link>
              ))}
            </div>
            <p className="specialties-cards-note">Some pages provide general educational information and referral guidance; they do not imply that every condition or cancer type is a dedicated specialist service.</p>
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}
