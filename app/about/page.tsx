import Image from "next/image";
import Link from "next/link";
import { Shell, PageHero, CTA } from "../components";

export const metadata = {
  title: "Dr. Zain Tayyab Abbas | Qualifications & Surgical Experience",
  description: "Read the CV-based professional profile of Dr. Zain Tayyab Abbas, MBBS, FCPS (General Surgery), Fellowship in Surgical Oncology, based in Lahore.",
  alternates: { canonical: "/about" },
};

const experience = [
  ["July 2025 – Present", "Senior Registrar, Surgical Unit 1", "Jinnah Hospital, Lahore"],
  ["July 2023 – July 2025", "Fellow, Surgical Oncology", "Shaukat Khanum Memorial Cancer Hospital and Research Centre, Lahore"],
  ["January 2023 – July 2023", "Senior Registrar, Surgical Unit 3", "Sir Ganga Ram Hospital, Lahore"],
  ["April 2022 – September 2022", "Assistant Professor of General Surgery", "University of Lahore Teaching Hospital, Lahore"],
  ["March 2020 – April 2022", "Senior Registrar, Surgical Unit 3", "Sir Ganga Ram Hospital, Lahore"],
  ["April 2019 – April 2020", "Senior Medical Officer", "Indus Hospital, Kahna Nau, Lahore"],
  ["July 2015 – July 2019", "Postgraduate Resident, Surgical Unit 1", "Jinnah Hospital, Lahore"],
  ["March 2015 – June 2015", "Medical Officer, Surgical Oncology", "Shaukat Khanum Memorial Hospital, Lahore"],
  ["April 2013 – March 2014", "House Officer", "Jinnah Hospital, Lahore"],
];

export default function About() {
  return (
    <Shell>
      <main>
        <PageHero eyebrow="Doctor profile · Lahore, Pakistan" title="Dr. Zain Tayyab Abbas" lead="MBBS · FCPS (General Surgery) · Fellowship in Surgical Oncology. Explore his qualifications, professional experience, surgical skills and research interests." />
        <section className="section section-white">
          <div className="container profile-grid">
            <div className="profile-image"><Image src="/images/dr-zain-tayyab-abbas-main.webp" alt="Dr. Zain Tayyab Abbas" fill sizes="(max-width: 800px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "center 22%" }} /></div>
            <div>
              <div className="eyebrow">Professional overview</div>
              <h2>About Dr. Zain Tayyab Abbas</h2>
              <p className="large-copy">Dr. Zain Tayyab Abbas is a surgeon with qualifications in General Surgery and fellowship training in Surgical Oncology. His CV lists his current position as Senior Registrar, Surgical Unit 1, Jinnah Hospital, Lahore, from July 2025 to present.</p>
              <p>His professional summary describes experience in elective and emergency general surgical procedures, oncological surgeries including breast, gastrointestinal and hepatobiliary malignancies, perioperative management and ICU exposure. The CV also notes involvement in research, audits, clinical teaching and multidisciplinary tumour board protocols.</p>
              <div className="fact-list">
                <div><span>Qualifications</span><strong>MBBS · FCPS (General Surgery)</strong></div>
                <div><span>Fellowship</span><strong>Surgical Oncology · Shaukat Khanum, Lahore</strong></div>
                <div><span>Current position (CV)</span><strong>Senior Registrar, Surgical Unit 1 · Jinnah Hospital</strong></div>
                <div><span>Practice location</span><strong>Lahore, Punjab, Pakistan</strong></div>
              </div>
              <p className="small-note">Professional details on this page are based on the CV supplied for the website.</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="eyebrow">Education &amp; training</div>
            <h2>Academic qualifications</h2>
            <div className="related-grid">
              <article className="related-card"><strong>Fellowship in Surgical Oncology</strong><span>Shaukat Khanum Memorial Cancer Hospital and Research Centre, Lahore</span></article>
              <article className="related-card"><strong>FCPS (General Surgery) · 2019</strong><span>College of Physicians &amp; Surgeons, Karachi, Pakistan</span></article>
              <article className="related-card"><strong>MBBS · 2007–2012</strong><span>University College of Medicine and Dentistry, Lahore</span></article>
              <article className="related-card"><strong>F.Sc · 2004–2006</strong><span>Forman Christian College, Lahore</span></article>
              <article className="related-card"><strong>Matriculation · 2002–2004</strong><span>Pakistan Public School, Lahore</span></article>
            </div>
          </div>
        </section>
        <section className="section section-white">
          <div className="container">
            <div className="eyebrow">Professional career</div>
            <h2>Hospital &amp; clinical experience</h2>
            <div className="papers">
              {experience.map(([date, role, place], i) => <article className="paper" key={date + role}><span className="clinic-index">{date}</span><h3>{role}</h3><p>{place}</p></article>)}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container two-col">
            <div><div className="eyebrow">Clinical competencies</div><h2>Surgical skills &amp; professional interests</h2></div>
            <div>
              <h3>Surgical skills listed in the CV</h3>
              <p>Laparotomy, hernia repair, appendectomy, cholecystectomy, mastectomy, lymph node dissection, bowel anastomosis, wound debridement, port insertion and oncological resections.</p>
              <h3>Clinical competencies</h3>
              <p>ATLS principles, ICU management, emergency surgical care, postoperative care, and interpretation of imaging and laboratory results.</p>
              <h3>Other professional skills</h3>
              <p>Research writing, audit design, data analysis, leadership, teamwork and communication.</p>
            </div>
          </div>
        </section>
        <section className="section section-white">
          <div className="container two-col">
            <div><div className="eyebrow">Academic interests</div><h2>Research and medical publications</h2></div>
            <div><p>The CV lists research work on ovarian teratoma, small bowel tumours, neuroendocrine tumours, colorectal carcinoma, ovarian tumours, surgical site infection, appendectomy, breast cancer risk assessment and gallstone disease.</p><Link className="under-link" href="/research">View selected research and publications ↗</Link></div>
          </div>
        </section>
        <section className="section">
          <div className="container two-col">
            <div><div className="eyebrow">Before your appointment</div><h2>Preparing for a surgical consultation</h2></div>
            <div><p>Bring previous consultation notes, biopsy or pathology reports, blood test results, imaging reports, discharge summaries and a current list of medicines, if available. Be ready to explain your symptoms, previous treatments and questions.</p><p className="small-note">Website information is general and does not provide a diagnosis or replace an in-person medical consultation. For urgent or life-threatening symptoms, seek emergency medical care.</p><Link className="under-link" href="/specialties">Explore surgical consultation areas ↗</Link></div>
          </div>
        </section>
        <section className="section section-white">
          <div className="container">
            <div className="eyebrow">Clinic information</div><h2>Consultation locations in Lahore</h2>
            <div className="clinic-grid clinic-grid-large">
              <article className="clinic-card"><span className="clinic-index">JOHAR TOWN</span><h3>Iqraa Medical Complex</h3><p>New Building, Extension, Block A, Phase 1, Johar Town, Lahore.</p><div className="hours"><span>Monday – Saturday</span><strong>5:00 PM – 8:00 PM</strong></div></article>
              <article className="clinic-card"><span className="clinic-index">VALENCIA TOWN</span><h3>Tayyab Medical &amp; Dental Complex</h3><p>Valencia Town, Lahore, Pakistan.</p><div className="hours"><span>Monday – Saturday</span><strong>9:00 PM – 10:00 PM</strong></div></article>
            </div>
            <p className="small-note">Clinic schedules may change. Please contact the clinic to confirm availability before travelling.</p><Link className="under-link" href="/clinics">View clinic details ↗</Link>
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}