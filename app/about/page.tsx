import Image from "next/image";
import Link from "next/link";
import { Shell, PageHero, CTA } from "../components";

export const metadata = {
  title: "Dr. Zain Tayyab Abbas | About & Surgical Profile",
  description:
    "Meet Assistant Professor Dr. Zain Tayyab Abbas in Lahore. Explore his Surgical Oncology, Endocrine Surgery, General Surgery and Laparoscopic Surgery practice.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="Doctor profile · Lahore, Pakistan"
          title="Assistant Professor Dr. Zain Tayyab Abbas"
          lead="Learn about Dr. Zain Tayyab Abbas’s surgical practice, areas of consultation, research interests and clinic locations in Lahore."
        />

        <section className="section section-white">
          <div className="container profile-grid">
            <div className="profile-image">
              <Image
                src="/images/dr-zain-tayyab-abbas-main.webp"
                alt="Assistant Professor Dr. Zain Tayyab Abbas"
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "center 22%" }}
              />
            </div>
            <div>
              <div className="eyebrow">Professional overview</div>
              <h2>About Dr. Zain Tayyab Abbas</h2>
              <p className="large-copy">
                Dr. Zain Tayyab Abbas is an Assistant Professor and surgical specialist
                based in Lahore, Pakistan. His stated areas of practice include
                Surgical Oncology and Endocrine Surgery.
              </p>
              <p>
                His consultation profile also includes General Surgery and
                Laparoscopic Surgery. The purpose of a consultation is to review
                each patient’s individual concerns, medical history and available
                investigations, and to discuss appropriate next steps.
              </p>
              <div className="fact-list">
                <div>
                  <span>Professional designation</span>
                  <strong>Assistant Professor</strong>
                </div>
                <div>
                  <span>Primary practice areas</span>
                  <strong>Surgical Oncology · Endocrine Surgery</strong>
                </div>
                <div>
                  <span>Additional consultation areas</span>
                  <strong>General Surgery · Laparoscopic Surgery</strong>
                </div>
                <div>
                  <span>Practice location</span>
                  <strong>Lahore, Punjab, Pakistan</strong>
                </div>
              </div>
              <p className="small-note">
                Qualifications, training dates and professional appointments should
                be confirmed against the doctor-approved CV before publication.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Areas of practice</div>
            <h2>Surgical consultation areas</h2>
            <p className="large-copy">
              Patients can enquire about the following consultation areas. The
              appropriate assessment or treatment depends on the individual
              diagnosis and the doctor’s clinical evaluation.
            </p>
            <div className="related-grid">
              <Link className="related-card" href="/specialties/surgical-oncology">
                <strong>Surgical Oncology</strong>
                <span>Consultation for assessment and surgical care planning in cancer-related conditions ↗</span>
              </Link>
              <Link className="related-card" href="/specialties/endocrine-surgery">
                <strong>Endocrine Surgery</strong>
                <span>Surgical assessment for conditions involving endocrine glands ↗</span>
              </Link>
              <Link className="related-card" href="/specialties/general-surgery">
                <strong>General Surgery</strong>
                <span>Consultation for concerns that may require a general surgical opinion ↗</span>
              </Link>
              <Link className="related-card" href="/specialties/laparoscopic-surgery">
                <strong>Laparoscopic Surgery</strong>
                <span>Discussion of minimally invasive surgical approaches where suitable ↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container two-col">
            <div>
              <div className="eyebrow">Academic interests</div>
              <h2>Research and medical publications</h2>
            </div>
            <div>
              <p>
                Dr. Zain Tayyab is listed as a co-author on research relating to
                breast cancer and surgical oncology, as well as published work
                concerning colorectal and ovarian conditions. Research papers
                provide readers with a way to review the specific study,
                authorship and journal details.
              </p>
              <Link className="under-link" href="/research">
                View research and publications ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <div className="eyebrow">Before your appointment</div>
              <h2>How to prepare for a surgical consultation</h2>
            </div>
            <div>
              <h3>Bring relevant medical information</h3>
              <p>
                If available, bring previous consultation notes, biopsy or
                pathology reports, blood test results, imaging reports, discharge
                summaries and a current list of medicines.
              </p>
              <h3>Discuss your questions and concerns</h3>
              <p>
                Be ready to explain your symptoms, when they began, previous
                treatments and the questions you would like answered. The doctor
                can advise whether further assessment, investigations, treatment
                discussion or referral is appropriate.
              </p>
              <p className="small-note">
                Website information is general and does not provide a diagnosis
                or replace an in-person medical consultation. For urgent or
                life-threatening symptoms, seek emergency medical care.
              </p>
              <Link className="under-link" href="/specialties">
                Explore all surgical consultation areas ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="eyebrow">Clinic information</div>
            <h2>Where to find Dr. Zain Tayyab Abbas in Lahore</h2>
            <div className="clinic-grid clinic-grid-large">
              <article className="clinic-card">
                <span className="clinic-index">JOHAR TOWN</span>
                <h3>Iqraa Medical Complex</h3>
                <p>New Building, Extension, Block A, Phase 1, Johar Town, Lahore.</p>
                <div className="hours">
                  <span>Monday – Saturday</span>
                  <strong>5:00 PM – 8:00 PM</strong>
                </div>
              </article>
              <article className="clinic-card">
                <span className="clinic-index">VALENCIA TOWN</span>
                <h3>Tayyab Medical &amp; Dental Complex</h3>
                <p>Valencia Town, Lahore, Pakistan.</p>
                <div className="hours">
                  <span>Monday – Saturday</span>
                  <strong>9:00 PM – 10:00 PM</strong>
                </div>
              </article>
            </div>
            <p className="small-note">
              Clinic schedules may change. Please contact the clinic to confirm
              availability and the location before travelling.
            </p>
            <Link className="under-link" href="/clinics">
              View clinic details and directions ↗
            </Link>
          </div>
        </section>

        <CTA />
      </main>
    </Shell>
  );
}
