import Link from "next/link";
import {Shell,CTA,PageHero,wa} from "../components";

export const metadata = {
  title: "Surgical Oncologist in Lahore | Dr. Zain Tayyab Abbas",
  description: "Learn about surgical oncology consultations with Dr. Zain Tayyab Abbas in Lahore. Review his qualifications, consultation focus, clinic locations and appointment details.",
  keywords: ["Surgical Oncologist in Lahore","Cancer Surgeon in Lahore","Surgical Oncology Lahore","Dr Zain Tayyab Abbas","Cancer Surgery Consultation Lahore"],
  alternates: { canonical: "/surgical-oncologist-in-lahore" },
  openGraph: {
    title: "Surgical Oncologist in Lahore | Dr. Zain Tayyab Abbas",
    description: "Professional background, surgical oncology consultation information and clinic details in Lahore, Pakistan.",
    url: "/surgical-oncologist-in-lahore",
    type: "website"
  }
};

const consultationAreas = [
  {
    title: "Breast conditions",
    text: "Consultation for breast lumps, review of imaging or biopsy reports, and discussion of appropriate next steps.",
    href: "/specialties/breast-cancer-consultation",
    link: "Breast consultation information"
  },
  {
    title: "Gastrointestinal and colorectal conditions",
    text: "Discussion of relevant symptoms, investigation findings, diagnoses and possible surgical care pathways.",
    href: "/specialties/colorectal-cancer-consultation",
    link: "Colorectal consultation information"
  },
  {
    title: "Hepatobiliary conditions",
    text: "Review of available reports and discussion of surgical options for selected liver, gallbladder and biliary conditions.",
    href: "/specialties/gallbladder-surgery-information",
    link: "Gallbladder surgery information"
  },
  {
    title: "Thyroid and endocrine conditions",
    text: "Assessment and consultation for selected thyroid and parathyroid conditions, guided by individual findings.",
    href: "/specialties/endocrine-surgery",
    link: "Endocrine surgery information"
  }
];

const faqs = [
  ["How can I arrange a surgical oncology consultation in Lahore?", "Contact the clinic through WhatsApp or telephone at +92 370 5978093 to confirm the current schedule, appointment availability and suitable clinic location."],
  ["What reports should I bring to my appointment?", "Bring available imaging, biopsy or histopathology reports, laboratory results, previous prescriptions, referral letters and a list of current medicines. If possible, bring the actual reports as well as summaries."],
  ["Can I book a consultation for a second opinion?", "You may contact the clinic to request a consultation to discuss an existing diagnosis, reports and questions about possible treatment options. The appropriate advice depends on the clinical assessment and records available."],
  ["Does every cancer patient need surgery?", "No. Cancer treatment is individualised and may involve surgery, medicines, radiotherapy or a combination. Decisions are made according to the diagnosis, stage, overall health and multidisciplinary recommendations."],
  ["Where are consultations available?", "Consultations are listed at Iqraa Medical Complex, New Building, Extension, Block A, Phase 1, Johar Town, and Tayyab Medical & Dental Complex, Valencia Town, Lahore. Contact the clinic before travelling to confirm timings."]
];

export default function SurgicalOncologistLahorePage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="Surgical Oncology · Lahore, Pakistan"
          title="Surgical Oncologist in Lahore"
          lead="Consultation information, professional background and clinic details for patients seeking a surgical oncology assessment with Dr. Zain Tayyab Abbas."
        />

        <section className="section section-white">
          <div className="container">
            <div className="premium-section-head">
              <div className="eyebrow">Meet the surgeon</div>
              <h2>Dr. Zain Tayyab Abbas</h2>
              <p>MBBS · FCPS (General Surgery) · Fellowship in Surgical Oncology · Fellowship in Advanced Laparoscopic Surgery</p>
            </div>
            <div className="doctor-about-column">
              <p>Dr. Zain Tayyab Abbas is a Lahore-based surgeon with postgraduate training in General Surgery and fellowship training in Surgical Oncology at Shaukat Khanum Memorial Cancer Hospital &amp; Research Centre, Lahore. He completed his MBBS at University College of Medicine and Dentistry, Lahore, and FCPS in General Surgery through the College of Physicians and Surgeons Pakistan.</p>
              <p>He currently serves as Senior Registrar, Surgical Unit 1, Jinnah Hospital, Lahore. His clinical experience includes the assessment and surgical management of general surgical conditions and oncological cases, including breast, gastrointestinal and hepatobiliary malignancies.</p>
              <p>A consultation provides an opportunity to review the patient's history and available investigations, discuss relevant options and identify whether further assessment or input from another specialist is appropriate.</p>
              <Link className="under-link" href="/about">View professional profile ↗</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="premium-section-head">
              <div className="eyebrow">Consultation focus</div>
              <h2>Surgical oncology consultation areas</h2>
              <p>The areas below describe topics that may be discussed during an appointment. The suitability of any investigation or treatment depends on an individual clinical assessment.</p>
            </div>
            <div className="approach-grid">
              {consultationAreas.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link className="under-link" href={item.href}>{item.link} ↗</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container visit-grid">
            <div>
              <div className="eyebrow">Prepare for your visit</div>
              <h2>What to bring to a consultation</h2>
              <p>Having relevant records available can help make the discussion more focused.</p>
              <a className="button" href={wa}>Confirm an appointment ↗</a>
            </div>
            <div className="visit-checks">
              <p><b>✓</b> Biopsy or histopathology reports, if available</p>
              <p><b>✓</b> CT, MRI, ultrasound or other imaging reports and films</p>
              <p><b>✓</b> Recent laboratory results and previous prescriptions</p>
              <p><b>✓</b> Current medicines, allergies and relevant medical history</p>
              <p><b>✓</b> Referral documents and questions you would like to discuss</p>
            </div>
          </div>
        </section>

        <section className="section clinic-section">
          <div className="container">
            <div className="premium-section-head">
              <div className="eyebrow">Clinic locations</div>
              <h2>Surgical oncology consultations in Lahore</h2>
              <p>Please contact the clinic before travelling to confirm the latest appointment schedule and availability.</p>
            </div>
            <div className="clinic-grid">
              <article className="clinic-card premium-clinic">
                <span className="clinic-index">01 · JOHAR TOWN</span>
                <h3>Iqraa Medical Complex</h3>
                <p>New Building, Extension, Block A, Phase 1, Johar Town, Lahore, Pakistan.</p>
                <strong>Monday – Saturday · 5:00 PM – 8:00 PM</strong>
              </article>
              <article className="clinic-card premium-clinic">
                <span className="clinic-index">02 · VALENCIA TOWN</span>
                <h3>Tayyab Medical &amp; Dental Complex</h3>
                <p>Valencia Town, Lahore, Pakistan.</p>
                <strong>Monday – Saturday · 9:00 PM – 10:00 PM</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <div className="premium-section-head">
              <div className="eyebrow">Patient information</div>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span>＋</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="premium-section-head">
              <div className="eyebrow">Explore related information</div>
              <h2>More about surgical care</h2>
              <p>Read more about the consultation process and related areas of care.</p>
            </div>
            <div className="approach-grid">
              <article><h3>Surgical oncology</h3><p>Overview of surgical oncology services and patient information.</p><Link className="under-link" href="/specialties/surgical-oncology">Explore surgical oncology ↗</Link></article>
              <article><h3>Preparing for consultation</h3><p>Practical guidance on organising your medical records and questions.</p><Link className="under-link" href="/blog/prepare-for-surgical-consultation">Read the patient guide ↗</Link></article>
              <article><h3>Clinic locations</h3><p>Find the clinic details and appointment contact information.</p><Link className="under-link" href="/clinics">View clinic locations ↗</Link></article>
              <article><h3>Contact the clinic</h3><p>Confirm the current schedule and appointment availability.</p><a className="under-link" href={wa}>WhatsApp the clinic ↗</a></article>
            </div>
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}
