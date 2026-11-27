import Link from "next/link";
import { Shell, PageHero, CTA } from "../components";

export const metadata = {
  title: "Surgical Specialties in Lahore",
  description: "Explore surgical oncology, breast cancer, colorectal, endocrine, general and laparoscopic surgery consultation information with Dr. Zain Tayyab Abbas in Lahore.",
  alternates: { canonical: "/specialties" }
};

const data = [
  ["Surgical Oncology", "Consultation and surgical assessment for cancer-related conditions, with a focus on reviewing diagnosis, pathology, imaging and treatment planning.", "/specialties/surgical-oncology"],
  ["Breast Cancer Consultation", "Understand breast lump assessment, biopsy and pathology reports, breast cancer surgery discussions and lymph node assessment.", "/specialties/breast-cancer-consultation"],
  ["Colorectal Cancer Consultation", "Information about colorectal and gastrointestinal cancer investigations, pathology review and surgical consultation.", "/specialties/colorectal-cancer-consultation"],
  ["Endocrine Surgery", "Consultation information for selected conditions involving the thyroid, parathyroid and other endocrine glands.", "/specialties/endocrine-surgery"],
  ["General Surgery", "Assessment information for abdominal, hernia, gallbladder, appendix and other general surgical concerns.", "/specialties/general-surgery"],
  ["Advanced Laparoscopy", "Fellowship in Advanced Laparoscopy; learn about minimally invasive approaches, patient selection and surgical planning.", "/specialties/laparoscopic-surgery"],
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
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons = [
    <><path d="M32 8c-7 8-15 15-15 25a15 15 0 0 0 30 0C47 23 39 16 32 8Z"/><path d="M25 34c2-5 5-8 10-11"/></>,
    <><path d="M32 8v48M8 32h48"/><path d="M17 17l30 30M47 17 17 47"/></>,
    <><path d="M17 12c-7 8-7 32 0 40M47 12c7 8 7 32 0 40"/><path d="M17 18c10 7 22 7 30 0M17 46c10-7 22-7 30 0M18 32h28"/></>,
    <><path d="M20 12c-7 8-7 24 0 32 4 4 8 2 12-1 4 3 8 5 12 1 7-8 7-24 0-32-4-4-8-2-12 1-4-3-8-5-12-1Z"/><path d="M32 13v31"/></>,
    <><path d="M12 18h40v28H12z"/><path d="M24 18v-6h16v6M24 32h16M32 24v16"/></>,
    <><path d="M15 49 45 19M37 13l12 12M11 53l9-3-6-6Z"/><circle cx="43" cy="21" r="10"/></>,
    <><path d="M13 18h38v28H13z"/><path d="M20 25h24M20 32h24M20 39h15"/></>,
    <><path d="M32 10c-8 8-12 15-12 23a12 12 0 0 0 24 0c0-8-4-15-12-23Z"/><path d="M32 23v20M24 33h16"/></>,
    <><path d="M32 12c-9 0-17 8-17 18 0 11 17 22 17 22s17-11 17-22c0-10-8-18-17-18Z"/><path d="M24 30h16M32 22v16"/></>,
    <><path d="M20 12c-6 7-6 19 0 26l12 12 12-12c6-7 6-19 0-26"/><path d="M25 22h14M32 17v24"/></>,
    <><circle cx="32" cy="32" r="19"/><path d="M32 20v24M20 32h24"/></>,
    <><path d="M16 13c0 14 2 26 16 38 14-12 16-24 16-38"/><path d="M23 25h18M26 34h12"/></>,
    <><path d="M14 42c8-2 12-10 18-10s10 8 18 10"/><path d="M18 22c4-8 10-10 14-10s10 2 14 10"/><path d="M32 32v20"/></>,
    <><path d="M14 18h36v28H14z"/><path d="M22 18v-6h20v6M22 32h20"/></>,
    <><path d="M13 24c0-7 6-12 13-12h6c7 0 13 5 13 12v15c0 7-6 13-13 13h-6c-7 0-13-6-13-13Z"/><path d="M23 25h18M23 34h18"/></>
  ];
  if (index < 2) return null;
  return <svg viewBox="0 0 64 64" {...common}>{icons[index] || icons[0]}</svg>;
}

export default function Specialties() {
  return (
    <Shell>
      <main>
        <PageHero eyebrow="Clinical services" title="Surgical specialties in Lahore" lead="Explore consultation information across surgical oncology, breast and colorectal conditions, endocrine surgery, general surgery and laparoscopic approaches. The appropriate evaluation and management plan is determined individually after clinical assessment." />
        <section className="section section-white specialties-cards-section">
          <div className="container">
            <div className="specialties-card-grid">
              {data.map(([title, description, url], index) => (
                <Link className="specialty-tile" href={url} key={url}>
                  <div className="specialty-tile-art" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <SpecialtyIcon index={index} />
                  </div>
                  <div className="specialty-tile-copy">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span className="specialty-tile-link">Explore consultation <b>↗</b></span>
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
