import Image from "next/image";
import Link from "next/link";
import { Shell, PageHero, CTA } from "../components";

export const metadata = {
  title: "About Dr. Zain Tayyab Abbas | Surgical Oncology Lahore",
  description: "Professional profile, qualifications, hospital appointments, documented surgical skills and academic work of Dr. Zain Tayyab Abbas in Lahore.",
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
        <PageHero eyebrow="Professional profile" title="Dr. Zain Tayyab Abbas" lead="MBBS · FCPS (General Surgery) · Fellowship in Surgical Oncology" />

        <section className="section section-white">
          <div className="container profile-grid">
            <div className="profile-image">
              <Image src="/images/dr-zain-tayyab-abbas-main.webp" alt="Dr. Zain Tayyab Abbas" fill sizes="(max-width: 800px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "center 22%" }} />
            </div>
            <div>
              <div className="eyebrow">Professional overview</div>
              <h2>Postgraduate training in general surgery and surgical oncology</h2>
              <p className="large-copy">Dr. Zain Tayyab Abbas is a Lahore-based surgeon with an MBBS degree, FCPS in General Surgery and Fellowship training in Surgical Oncology at Shaukat Khanum Memorial Cancer Hospital & Research Centre. The CV records his current appointment as Senior Registrar in Surgical Unit 1 at Jinnah Hospital, Lahore, from July 2025.</p>
              <p>His CV describes experience in elective and emergency general surgery and oncological surgery involving breast, gastrointestinal and hepatobiliary malignancies. It also records perioperative management, ICU exposure, clinical teaching, research and familiarity with multidisciplinary tumour board protocols.</p>
              <div className="fact-list">
                <div><span>Current appointment (CV)</span><strong>Senior Registrar, Surgical Unit 1</strong></div>
                <div><span>Hospital</span><strong>Jinnah Hospital, Lahore</strong></div>
                <div><span>Specialist fellowship</span><strong>Surgical Oncology · Shaukat Khanum</strong></div>
                <div><span>Location</span><strong>Lahore, Pakistan</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Education & specialist training</div>
            <h2>Qualifications</h2>
            <div className="related-grid">
              <article className="related-card"><strong>Fellowship in Surgical Oncology</strong><span>Shaukat Khanum Memorial Cancer Hospital & Research Centre, Lahore</span></article>
              <article className="related-card"><strong>FCPS (General Surgery) · 2019</strong><span>College of Physicians & Surgeons of Pakistan</span></article>
              <article className="related-card"><strong>MBBS · 2007–2012</strong><span>University College of Medicine and Dentistry, Lahore</span></article>
              <article className="related-card"><strong>F.Sc · 2004–2006</strong><span>Forman Christian College, Lahore</span></article>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="eyebrow">Career & hospital experience</div>
            <h2>Professional appointments</h2>
            <div className="papers">{experience.map(([date, role, place]) => <article className="paper" key={date + role}><span className="clinic-index">{date}</span><h3>{role}</h3><p>{place}</p></article>)}</div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div><div className="eyebrow">Clinical skills recorded in the CV</div><h2>Surgical experience & competencies</h2></div>
            <div>
              <p>The CV lists laparotomy, hernia repair, appendectomy, cholecystectomy, mastectomy, lymph node dissection, bowel anastomosis, wound debridement, port insertion and oncological resections.</p>
              <p>Other clinical competencies listed include ATLS principles, ICU management, emergency surgical care, postoperative care and interpretation of imaging and laboratory investigations.</p>
              <p>Professional skills include research writing, audit design, data analysis, leadership, teamwork and communication.</p>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container two-col">
            <div><div className="eyebrow">Research & academic contribution</div><h2>Research interests and academic work</h2></div>
            <div>
              <p>The CV lists research topics involving breast cancer, colorectal and small bowel tumours, neuroendocrine tumours, ovarian tumours, surgical site infection, appendectomy, gallstone disease and laparoscopic versus open cholecystectomy.</p>
              <p>It also records presentations at surgical academic meetings, including a presentation on locoregional and hepatic resection in stage IV small bowel neuroendocrine tumours at the 23rd Shaukat Khanum Cancer Symposium in 2024.</p>
              <Link className="under-link" href="/research">Explore research and academic work ↗</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div><div className="eyebrow">Courses & professional development</div><h2>Workshops and continuing learning</h2></div>
            <div>
              <p>The CV records a workshop on core cut needle biopsy, a hands-on workshop on safe laparoscopic cholecystectomy, Basic Life Support, research methodology and biostatistics, primary surgical skills, communication skills and workshops in minimally invasive surgery.</p>
              <p>It also records participation in the 23rd Shaukat Khanum Cancer Symposium in 2024. These entries are presented as participation and training activities, not as additional specialist qualifications.</p>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container two-col">
            <div><div className="eyebrow">For patients</div><h2>Preparing for your consultation</h2></div>
            <div>
              <p>Patients may bring previous medical records, consultation notes, biopsy or pathology reports, laboratory results, imaging and a current list of medicines. These records help the treating team understand the medical history and discuss appropriate next steps.</p>
              <p className="small-note">This website provides general information and does not replace an individual medical assessment or consultation.</p>
              <Link className="under-link" href="/specialties">Explore areas of consultation ↗</Link>
            </div>
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}
