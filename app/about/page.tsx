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
          <div className="container">
            <div className="eyebrow">Academic work</div>
            <h2>Research interests and conference participation</h2>
            <p className="large-copy">
              The CV lists research topics across surgical oncology and general
              surgery, including breast cancer, colorectal and small bowel
              tumours, ovarian tumours, surgical outcomes and laparoscopic
              procedures. It also records participation in the 23rd Shaukat
              Khanum Cancer Symposium in 2024 and presentations at surgical
              academic meetings.
            </p>
            <Link className="under-link" href="/research">
              Explore research and academic work ↗
            </Link>
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