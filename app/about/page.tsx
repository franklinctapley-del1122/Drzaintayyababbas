import Image from "next/image";
import Link from "next/link";
import { Shell, PageHero, CTA } from "../components";

export const metadata = {
  title: "About Dr. Zain Tayyab Abbas | Surgical Oncology Lahore",
  description: "Professional profile of Dr. Zain Tayyab Abbas, MBBS, FCPS (General Surgery), with a Fellowship in Surgical Oncology. View his clinical experience, areas of expertise and research.",
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
          lead="MBBS, FCPS (General Surgery), Fellowship in Surgical Oncology"
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
              <div className="eyebrow">About the doctor</div>
              <h2>Surgical experience grounded in clinical practice</h2>
              <p className="large-copy">
                Dr. Zain Tayyab Abbas is a surgeon with postgraduate qualifications
                in General Surgery and fellowship training in Surgical Oncology.
                He is currently serving as Senior Registrar in Surgical Unit 1 at
                Jinnah Hospital, Lahore.
              </p>
              <p>
                His clinical experience includes elective and emergency general
                surgical procedures and the surgical management of oncological
                conditions, including breast, gastrointestinal and hepatobiliary
                malignancies. His professional work also includes pre- and
                post-operative patient management, ICU exposure, clinical
                teaching, research and audit activities.
              </p>
              <div className="fact-list">
                <div><span>Current appointment</span><strong>Senior Registrar, Surgical Unit 1</strong></div>
                <div><span>Institution</span><strong>Jinnah Hospital, Lahore</strong></div>
                <div><span>Clinical interests</span><strong>Surgical Oncology · General Surgery</strong></div>
                <div><span>Based in</span><strong>Lahore, Pakistan</strong></div>
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
                <span>College of Physicians &amp; Surgeons, Pakistan</span>
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
            <div className="eyebrow">Professional background</div>
            <h2>Clinical appointments</h2>
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
              <div className="eyebrow">Clinical practice</div>
              <h2>Surgical skills &amp; competencies</h2>
            </div>
            <div>
              <p>
                His CV lists experience with laparotomy, hernia repair,
                appendectomy, cholecystectomy, mastectomy, lymph node dissection,
                bowel anastomosis, wound debridement, port insertion and
                oncological resections.
              </p>
              <p>
                His stated clinical competencies include emergency surgical care,
                post-operative care, ICU management, ATLS principles and
                interpretation of imaging and laboratory investigations.
              </p>
              <p>
                Additional professional skills include research writing, audit
                design, data analysis, leadership, teamwork and communication.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container two-col">
            <div>
              <div className="eyebrow">Academic work</div>
              <h2>Research &amp; publications</h2>
            </div>
            <div>
              <p>
                His research interests and listed academic work include surgical
                oncology, breast cancer, colorectal and small bowel tumours,
                neuroendocrine tumours, ovarian conditions and surgical outcomes.
                He has also been involved in research, clinical audits and
                academic presentations.
              </p>
              <Link className="under-link" href="/research">
                View selected research and publications ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <div className="eyebrow">Patient information</div>
              <h2>Preparing for a consultation</h2>
            </div>
            <div>
              <p>
                Patients are encouraged to bring relevant medical records,
                previous consultation notes, biopsy or pathology reports,
                laboratory results, imaging and a current list of medicines.
                These details can help inform the clinical discussion.
              </p>
              <p className="small-note">
                Website information is general and does not replace an
                individual medical assessment or consultation.
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