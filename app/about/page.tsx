import Image from "next/image";
import Link from "next/link";
import { Shell, PageHero, CTA } from "../components";

export const metadata = {
  title: "About Dr. Zain Tayyab Abbas | Surgical Oncology Lahore",
  description: "Learn about Dr. Zain Tayyab Abbas, an MBBS and FCPS-qualified surgeon with fellowship training in Surgical Oncology, his hospital experience and clinical interests in Lahore.",
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
        <PageHero
          eyebrow="Professional profile"
          title="Dr. Zain Tayyab Abbas"
          lead="MBBS · FCPS (General Surgery) · Fellowship in Surgical Oncology"
        />

        <section className="section section-white">
          <div className="container profile-grid">
            <div className="profile-image">
              <Image
                src="/images/dr-zain-tayyab-abbas-main.webp"
                alt="Dr. Zain Tayyab Abbas"
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "center 22%" }}
              />
            </div>
            <div>
              <div className="eyebrow">Professional overview</div>
              <h2>Committed to informed, patient-focused surgical care</h2>
              <p className="large-copy">
                Dr. Zain Tayyab Abbas is a Lahore-based surgeon with postgraduate
                training in General Surgery and fellowship training in Surgical
                Oncology. He is currently serving as Senior Registrar in Surgical
                Unit 1 at Jinnah Hospital, Lahore.
              </p>
              <p>
                His clinical background spans elective and emergency general
                surgery, as well as the surgical care of patients with breast,
                gastrointestinal and hepatobiliary malignancies. His experience
                also includes perioperative patient management, critical care
                exposure, clinical teaching and participation in research and
                clinical audit activities.
              </p>
              <div className="fact-list">
                <div><span>Current appointment</span><strong>Senior Registrar, Surgical Unit 1</strong></div>
                <div><span>Hospital</span><strong>Jinnah Hospital, Lahore</strong></div>
                <div><span>Clinical focus</span><strong>Surgical Oncology · General Surgery</strong></div>
                <div><span>Location</span><strong>Lahore, Pakistan</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Education &amp; specialist training</div>
            <h2>Qualifications</h2>
            <div className="related-grid">
              <article className="related-card">
                <strong>Fellowship in Surgical Oncology</strong>
                <span>Shaukat Khanum Memorial Cancer Hospital and Research Centre, Lahore</span>
              </article>
              <article className="related-card">
                <strong>FCPS (General Surgery)</strong>
                <span>College of Physicians &amp; Surgeons of Pakistan</span>
              </article>
              <article className="related-card">
                <strong>MBBS</strong>
                <span>University College of Medicine and Dentistry, Lahore</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="eyebrow">Career &amp; hospital experience</div>
            <h2>Professional appointments</h2>
            <div className="papers">
              {experience.map(([date, role, place]) => (
                <article className="paper" key={date + role}>
                  <span className="clinic-index">{date}</span>
                  <h3>{role}</h3>
                  <p>{place}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <div className="eyebrow">Clinical expertise</div>
              <h2>Surgical experience &amp; competencies</h2>
            </div>
            <div>
              <p>
                Dr. Abbas's surgical experience includes laparotomy, hernia
                repair, appendectomy, cholecystectomy, mastectomy, lymph node
                dissection, bowel anastomosis, wound debridement, port insertion
                and oncological resections.
              </p>
              <p>
                His clinical competencies include emergency surgical care,
                post-operative management, ICU management, ATLS principles and
                interpretation of imaging and laboratory investigations.
              </p>
              <p>
                His wider professional skills include research writing, audit
                design, data analysis, clinical teaching, teamwork and
                communication.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container two-col">
            <div>
              <div className="eyebrow">Research &amp; academic contribution</div>
              <h2>Research interests and publications</h2>
            </div>
            <div>
              <p>
                Dr. Abbas has participated in research and academic work across
                surgical oncology and general surgery. Topics listed in his
                professional record include breast cancer, colorectal and small
                bowel tumours, neuroendocrine tumours, ovarian conditions,
                surgical outcomes and perioperative complications.
              </p>
              <p>
                He has also contributed to clinical audits, academic
                presentations and the teaching of junior doctors and medical
                students.
              </p>
              <Link className="under-link" href="/research">
                Explore selected research publications ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="eyebrow">Continuing medical education</div>
            <h2>Professional development &amp; CME</h2>
            <p className="large-copy">
              Dr. Zain Tayyab Abbas has participated in the Shaukat Khanum Cancer
              Symposium, with continuing medical education activities accredited
              by the American Association of Continuing Medical Education (AACME).
            </p>
            <div className="related-grid">
              <article className="related-card">
                <strong>22nd Shaukat Khanum Cancer Symposium</strong>
                <span>Shaukat Khanum Memorial Cancer Hospital &amp; Research Centre · Peshawar, Pakistan · November 2–5, 2023</span>
                <span>36.75 hours · Category I CME credit</span>
                <a href="/images/cme-22.jpg" target="_blank" rel="noreferrer" aria-label="Open 22nd Shaukat Khanum Cancer Symposium certificate">
                  <Image src="/images/cme-22.jpg" alt="AACME certificate for Dr. Zain Tayyab Abbas, 22nd Shaukat Khanum Cancer Symposium, 2023" width={1200} height={900} style={{width:"100%",height:"auto",marginTop:16,borderRadius:8}} />
                </a>
                <a className="under-link" href="/images/cme-22.jpg" target="_blank" rel="noreferrer">View full certificate ↗</a>
              </article>
              <article className="related-card">
                <strong>23rd Shaukat Khanum Cancer Symposium</strong>
                <span>Shaukat Khanum Memorial Cancer Hospital &amp; Research Centre · Lahore, Pakistan · October 24–27, 2024</span>
                <span>33.75 hours · Category I CME credit</span>
                <a href="/images/cme-23.jpg" target="_blank" rel="noreferrer" aria-label="Open 23rd Shaukat Khanum Cancer Symposium certificate">
                  <Image src="/images/cme-23.jpg" alt="AACME certificate for Dr. Zain Tayyab Abbas, 23rd Shaukat Khanum Cancer Symposium, 2024" width={1200} height={900} style={{width:"100%",height:"auto",marginTop:16,borderRadius:8}} />
                </a>
                <a className="under-link" href="/images/cme-23.jpg" target="_blank" rel="noreferrer">View full certificate ↗</a>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <div className="eyebrow">For patients</div>
              <h2>Preparing for your consultation</h2>
            </div>
            <div>
              <p>
                To make the most of a consultation, patients may bring previous
                medical records, consultation notes, biopsy or pathology reports,
                laboratory results, imaging and a current list of medicines.
                These records help the treating team understand the patient's
                medical history and discuss appropriate next steps.
              </p>
              <p className="small-note">
                Information on this website is for general guidance and does
                not replace an individual medical assessment or consultation.
              </p>
              <Link className="under-link" href="/specialties">
                Explore areas of consultation ↗
              </Link>
            </div>
          </div>
        </section>
        <CTA />
      </main>
    </Shell>
  );
}