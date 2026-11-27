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
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const artwork = [
    <><path d="M32 8c-7 8-15 15-15 25a15 15 0 0 0 30 0C47 23 39 16 32 8Z"/><path d="M25 34c2-5 5-8 10-11"/></>,
    <><path d="M32 8c-8 0-13 6-13 14 0 6 4 9 4 14 0 5 4 10 9 10s9-5 9-10c0-5 4-8 4-14 0-8-5-14-13-14Z"/><path d="M20 24c7-3 17-3 24 0M23 36c6-3 12-3 18 0M32 16v28"/></>,
    <><path d="M18 13c-7 0-8 8-4 13-4 5-3 13 3 15-1 8 7 12 13 7l2-4 2 4c6 5 14 1 13-7 6-2 7-10 3-15 4-5 3-13-4-13-5 0-7 5-8 10h-12c-1-5-3-10-8-10Z"/><path d="M24 23v18M40 23v18M24 32h16"/></>,
    <><path d="M18 21c-5-8 3-14 10-9l4 4 4-4c7-5 15 1 10 9-3 5-8 8-14 13-6-5-11-8-14-13Z"/><path d="M32 16v28M25 29h14"/></>,
    <><path d="M17 14h30v36H17z"/><path d="M24 14v-5h16v5M23 24h18M23 32h18M23 40h12"/><circle cx="45" cy="45" r="5"/></>,
    <><path d="M13 44 43 14M37 10l9 9M10 47l10-3-7-7Z"/><path d="M38 27a13 13 0 1 0 10 13"/><path d="M48 33v8h-8"/></>,
    <><path d="M21 10c-5 5-7 12-7 20s2 15 7 20M43 10c5 5 7 12 7 20s-2 15-7 20"/><path d="M21 17c6 4 16 4 22 0M21 47c6-4 16-4 22 0M21 25c6 4 16 4 22 0M21 39c6-4 16-4 22 0"/></>,
    <><path d="M32 8c-8 9-13 17-13 27a13 13 0 0 0 26 0c0-10-5-18-13-27Z"/><path d="M32 22v24M24 34h16"/></>,
    <><path d="M32 10c-9 0-16 7-16 16 0 8 6 14 16 27 10-13 16-19 16-27 0-9-7-16-16-16Z"/><path d="M22 28c4-5 16-5 20 0M25 36c4-3 10-3 14 0"/></>,
    <><path d="M20 11c-6 7-7 17-3 25l15 15 15-15c4-8 3-18-3-25"/><path d="M25 20h14M32 16v28M25 34h14"/></>,
    <><path d="M32 8v48M8 32h48"/><path d="M20 20l24 24M44 20 20 44"/><circle cx="32" cy="32" r="19"/></>,
    <><path d="M17 11c0 14 3 27 15 42 12-15 15-28 15-42"/><path d="M23 23h18M25 32h14M28 41h8"/></>,
    <><path d="M12 42c7-2 11-10 15-10s7 5 10 5 7-3 15 5"/><path d="M18 21c4-7 9-10 14-10s10 3 14 10"/><path d="M32 32v20"/><circle cx="32" cy="32" r="4"/></>,
    <><path d="M15 16h34v32H15z"/><path d="M22 16v-5h20v5M22 27h20M22 36h20"/><path d="M27 48v5M37 48v5"/></>,
    <><path d="M18 18c-5 5-6 14-3 21 3 8 10 13 17 13s14-5 17-13c3-7 2-16-3-21"/><path d="M18 27c8-5 20-5 28 0M18 38c8-5 20-5 28 0"/><path d="M25 14h14"/></>
  ];
  if (index < 2) return null;
  return <svg viewBox="0 0 64 64" role="img" aria-label={["", "", "Colon illustration", "Thyroid gland illustration", "Surgical assessment illustration", "Laparoscopic instrument illustration", "Stomach illustration", "Thyroid illustration", "Ovarian illustration", "Uterine illustration", "Testicular illustration", "Esophagus illustration", "Soft tissue illustration", "Gallbladder illustration", "Hernia illustration"][index]} {...common}>{artwork[index] || artwork[0]}</svg>;
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
