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

export default function Specialties() {
  return (
    <Shell>
      <main>
        <PageHero eyebrow="Clinical services" title="Surgical specialties in Lahore" lead="Explore consultation information across surgical oncology, breast and colorectal conditions, endocrine surgery, general surgery and laparoscopic approaches. The appropriate evaluation and management plan is determined individually after clinical assessment." />
        <section className="section section-white">
          <div className="container service-list">
            {data.map(([title, description, url], index) => (
              <article className="service-row" key={url}>
                <span className="card-number">0{index + 1}</span>
                <div><h2>{title}</h2><p>{description}</p></div>
                <Link className="under-link" href={url}>Explore consultation ↗</Link>
              </article>
            ))}
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}