import Image from "next/image";
import Link from "next/link";
import {Shell,CTA,wa} from "./components";
import ExperienceCounter from "./components/ExperienceCounter";

export const metadata={
  title:"Surgical Oncologist & Endocrine Surgeon in Lahore | Dr. Zain Tayyab Abbas",
  description:"Meet Dr. Zain Tayyab Abbas, Surgical Oncologist and Endocrine Surgeon in Lahore. Explore professional credentials, consultation areas, patient guides and clinic locations in Johar Town and Valencia Town.",
  keywords:["Dr Zain Tayyab Abbas","Surgical Oncologist in Lahore","Endocrine Surgeon in Lahore","Cancer Surgeon Lahore","Breast Cancer Surgeon Lahore","Thyroid Surgeon Lahore","Surgical Oncologist Johar Town"],
  alternates:{canonical:"/"},
  openGraph:{title:"Surgical Oncologist & Endocrine Surgeon in Lahore | Dr. Zain Tayyab Abbas",description:"Professional credentials, surgical consultation areas and clinic information in Lahore, Pakistan.",url:"/",type:"website"}
};

const specialties=[
  ["01","Surgical Oncology","Cancer-related surgical assessment and treatment planning.","/specialties/surgical-oncology","✳"],
  ["02","Breast Cancer Consultation","Breast lump assessment, biopsy review and surgical consultation information.","/specialties/breast-cancer-consultation","♡"],
  ["03","Colorectal Cancer Consultation","Colorectal and gastrointestinal cancer assessment information.","/specialties/colorectal-cancer-consultation","◎"],
  ["04","Endocrine Surgery","Consultation for selected thyroid and parathyroid conditions, based on individual assessment.","/specialties/endocrine-surgery","◇"],
  ["05","General Surgery","Assessment for abdominal, hernia, gallbladder and appendix concerns.","/specialties/general-surgery","＋"],
  ["06","Laparoscopic Surgery Information","Patient information about minimally invasive approaches and surgical assessment.","/specialties/laparoscopic-surgery","⌕"]
];
const focus=[
  ["Breast conditions","Breast lump assessment, diagnostic reports and discussion of treatment options.","/specialties/breast-cancer-consultation"],
  ["Colorectal conditions","Information for patients with colorectal symptoms, diagnoses or referral questions.","/specialties/colorectal-cancer-consultation"],
  ["Thyroid & parathyroid conditions","Endocrine surgery consultation and information about investigations, assessment and treatment discussions.","/specialties/endocrine-surgery"],
  ["General surgical concerns","Hernia, gallbladder, appendix and other common general surgery topics.","/specialties/general-surgery"]
];
const faqs=[
  ["What should I bring to my first appointment?","Bring previous prescriptions, imaging, biopsy and laboratory reports, current medication details and referral documents if available."],
  ["Do I need an appointment before visiting?","Yes. Please contact the clinic number to confirm the latest schedule and appointment availability before travelling."],
  ["Are all cancer treatments performed by the surgeon?","Cancer care is often multidisciplinary. The appropriate plan may involve medical oncology, radiation oncology, pathology, radiology and other specialists."],
  ["Can I get a second opinion?","You may request a consultation to discuss your diagnosis, reports and available treatment options. Bring copies of relevant records."]
];

function SectionHead({kicker,title,desc}:{kicker:string,title:string,desc?:string}) {
  return <div className="premium-section-head"><div className="eyebrow">{kicker}</div><h2>{title}</h2>{desc&&<p>{desc}</p>}</div>;
}

export default function Home(){
 return <Shell><main>
  {/* 01 */}
  <section className="home-hero premium-hero reference-hero"><div className="reference-hero-image" aria-hidden="true"></div><div className="container reference-hero-inner"><div className="hero-copy"><div className="eyebrow">Dr. Zain Tayyab Abbas · Lahore</div><h1>Surgical<br/><em>Oncology</em></h1><p className="hero-lead">Surgical oncology and endocrine surgery consultations with a considered, patient-focused approach.</p><div className="hero-actions"><a className="button" href={wa}>Book Appointment</a></div></div></div><a className="reference-hero-arrow reference-hero-prev" href="/about" aria-label="Meet the doctor">‹</a><a className="reference-hero-arrow reference-hero-next" href="/specialties" aria-label="Explore specialties">›</a></section>
  {/* 02 */}
  <section className="credential-strip"><div className="container strip-grid"><div><span>QUALIFICATION</span><strong>MBBS · FCPS General Surgery</strong></div><div><span>SPECIALTIES</span><strong>Surgical Oncology · Endocrine Surgery</strong></div><div><span>LOCATION</span><strong>Lahore, Pakistan</strong></div></div></section>
  {/* 04 */}
  <section className="doctor-intro-showcase"><div className="container">
    <div className="doctor-intro-heading"><span>DR. ZAIN TAYYAB ABBAS</span><p>MBBS, FCPS (General Surgery), Fellowship in Surgical Oncology</p><h2>Surgical Oncology <em>Specialist</em></h2></div>
    <div className="doctor-intro-grid">
      <div className="doctor-experience-column"><ExperienceCounter/><h3>Years of Surgical Experience</h3><p>Dr. Zain Tayyab Abbas has worked across general surgery and surgical oncology roles in leading hospitals in Lahore, with experience in patient assessment, operative care and post-operative management.</p><Link className="under-link" href="/about">View professional profile ↗</Link></div>
      <div className="doctor-portrait"><Image src="/images/dr-zain-tayyab-abbas-main.webp" alt="Dr. Zain Tayyab Abbas" fill sizes="(max-width: 800px) 90vw, 28vw" style={{objectFit:"cover",objectPosition:"center 20%"}}/></div>
      <div className="doctor-about-column"><h3>ABOUT DR. ZAIN TAYYAB ABBAS</h3><p>Dr. Zain Tayyab Abbas is a surgeon with a Fellowship in Surgical Oncology from Shaukat Khanum Memorial Cancer Hospital &amp; Research Centre, Lahore. His clinical background includes surgical oncology and general surgery, with experience in breast, gastrointestinal and hepatobiliary malignancies.</p><p>He currently serves as Senior Registrar, Surgical Unit 1, Jinnah Hospital Lahore. Consultations cover surgical oncology and endocrine surgery.</p><div className="doctor-focus-mark"><span>✚</span><b>SURGICAL ONCOLOGY</b><small>ENDOCRINE SURGERY · LAHORE</small></div></div>
    </div>
  </div></section>
  {/* Professional credentials and clinical background */}
  <section className="section trust-credentials"><div className="container">
    <div className="trust-credentials-heading"><div className="eyebrow">Qualifications & professional background</div><h2>Training and experience you can learn more about</h2><p>Clear information about Dr. Zain Tayyab Abbas’s documented qualifications, specialist training and current hospital appointment.</p></div>
    <div className="trust-credentials-grid">
      <article><span className="trust-card-index">01 · QUALIFICATION</span><h3>MBBS</h3><p>University College of Medicine and Dentistry, Lahore.</p></article>
      <article><span className="trust-card-index">02 · POSTGRADUATE</span><h3>FCPS · General Surgery</h3><p>College of Physicians & Surgeons of Pakistan · 2019.</p></article>
      <article><span className="trust-card-index">03 · SPECIALIST TRAINING</span><h3>Fellowship in Surgical Oncology</h3><p>Shaukat Khanum Memorial Cancer Hospital & Research Centre, Lahore.</p></article>
      <article><span className="trust-card-index">04 · CURRENT APPOINTMENT</span><h3>Senior Registrar</h3><p>Surgical Unit 1, Jinnah Hospital, Lahore. Listed from July 2025 in the professional profile.</p></article>
    </div>
    <div className="trust-credentials-link"><Link className="under-link" href="/about">View full qualifications & career history ↗</Link><Link className="under-link" href="/research">Explore research & academic work ↗</Link></div>
  </div></section>
  {/* Cancer care services */}
  <section className="cancer-services-section"><div className="container">
    <div className="cancer-services-heading"><span>CONSULTATION AREAS</span><h2>Cancer Care &amp; Surgical Services</h2><p>Explore specialist consultation information for common surgical oncology and endocrine concerns.</p></div>
    <div className="cancer-services-slider" aria-label="Surgical services carousel">
      <div className="cancer-services-track">
        {[
          {title:"Breast Cancer Consultation",href:"/specialties/breast-cancer-consultation",src:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",alt:"Breast health consultation"},
          {title:"Thyroid & Endocrine Surgery",href:"/specialties/endocrine-surgery",src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",alt:"Thyroid and neck health consultation"},
          {title:"Gastrointestinal Cancer Care",href:"/specialties/gastric-cancer-information",src:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",alt:"Gastrointestinal health consultation"},
          {title:"Surgical Oncology",href:"/specialties/surgical-oncology",src:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",alt:"Surgical oncology consultation"}
        ].concat([
          {title:"Breast Cancer Consultation",href:"/specialties/breast-cancer-consultation",src:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",alt:"Breast health consultation"},
          {title:"Thyroid & Endocrine Surgery",href:"/specialties/endocrine-surgery",src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",alt:"Thyroid and neck health consultation"},
          {title:"Gastrointestinal Cancer Care",href:"/specialties/gastric-cancer-information",src:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",alt:"Gastrointestinal health consultation"},
          {title:"Surgical Oncology",href:"/specialties/surgical-oncology",src:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",alt:"Surgical oncology consultation"}
        ]).map((item,index)=><article className="cancer-service-card" key={index} aria-hidden={index>=4 ? true : undefined}><div className="cancer-service-image"><img src={item.src} alt={index>=4 ? "" : item.alt} loading="lazy"/></div><div className="cancer-service-info"><h3>{item.title}</h3><Link href={item.href} tabIndex={index>=4 ? -1 : undefined}>Learn more <span>→</span></Link></div></article>)}
      </div>
    </div>
    <div className="cancer-services-action"><Link href="/specialties">View All Services</Link></div>
  </div></section>
  {/* 05 */}
  <section className="section premium-approach"><div className="container"><SectionHead kicker="The consultation experience" title="A considered approach to every patient" desc="A clear consultation helps patients understand the next step without unrealistic promises or unnecessary confusion."/><div className="approach-grid"><article><span>01</span><h3>Listen & understand</h3><p>Discuss symptoms, medical history, concerns and the reason for referral.</p></article><article><span>02</span><h3>Review the evidence</h3><p>Consider available examination findings, imaging, pathology and laboratory reports.</p></article><article><span>03</span><h3>Explain options</h3><p>Discuss appropriate next steps, possible approaches and when another specialist is needed.</p></article><article><span>04</span><h3>Plan follow-up</h3><p>Clarify the recommended follow-up and what information the patient should keep.</p></article></div></div></section>
  <section className="section trust-clarity-section"><div className="container">
    <div className="trust-clarity-heading"><div className="eyebrow">A clear and considered consultation</div><h2>Understand the next step in your care</h2><p>Every patient’s situation is different. A consultation is an opportunity to review the available information and discuss appropriate next steps.</p></div>
    <div className="trust-clarity-grid">
      <article><span>01</span><h3>Review your records</h3><p>Previous reports, imaging, biopsy results and medical history help inform the discussion.</p></article>
      <article><span>02</span><h3>Discuss your options</h3><p>Understand the findings, possible approaches, and when input from another specialist may be needed.</p></article>
      <article><span>03</span><h3>Agree on next steps</h3><p>Clarify recommended investigations, referrals or follow-up based on your individual assessment.</p></article>
    </div>
    <p className="trust-clarity-note">No website can guarantee a treatment outcome or replace an in-person medical assessment. If you have urgent or severe symptoms, seek timely medical attention.</p>
  </div></section>
  {/* 12 */}
  <section className="section clinic-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">Visit the clinics</div><h2>Consultations in Lahore</h2></div><Link className="under-link" href="/clinics">Full clinic details ↗</Link></div><div className="clinic-grid"><article className="clinic-card premium-clinic"><span className="clinic-index">01 · JOHAR TOWN</span><h3>Iqraa Medical Complex</h3><p>New Building, Extension, Block A, Phase 1, Johar Town, Lahore, Pakistan.</p><strong>Monday – Saturday · 5:00 PM – 8:00 PM</strong></article><article className="clinic-card premium-clinic"><span className="clinic-index">02 · VALENCIA TOWN</span><h3>Tayyab Medical & Dental Complex</h3><p>Valencia Town, Lahore, Pakistan.</p><strong>Monday – Saturday · 9:00 PM – 10:00 PM</strong></article></div></div></section>
  {/* 13 */}
  <section className="section section-white"><div className="container visit-grid"><div><SectionHead kicker="Plan your visit" title="Before you come to the clinic" desc="A little preparation can make your consultation more useful."/><a className="button" href={wa}>Confirm appointment ↗</a></div><div className="visit-checks"><p><b>✓</b> Previous prescriptions and medical history</p><p><b>✓</b> Imaging, biopsy and laboratory reports</p><p><b>✓</b> Current medicines and allergies list</p><p><b>✓</b> Written questions or concerns you want to discuss</p></div></div></section>
  {/* 14 */}
  <section className="section faq-section"><div className="container"><SectionHead kicker="Frequently asked questions" title="Helpful answers before booking"/><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div></div></section>
  {/* 15 */}
  <section className="section section-white"><div className="container patient-note"><div><div className="eyebrow">For patients and families</div><h2>Information you can use to prepare for a conversation.</h2></div><div><p>This website provides general educational and professional information. It cannot diagnose a condition, replace an in-person examination or determine whether surgery is appropriate. If symptoms are urgent or severe, seek timely medical attention.</p><Link className="under-link" href="/contact">Contact and appointment information ↗</Link></div></div></section>
  <section className="home-blogs"><div className="container"><div className="home-blogs-heading"><h2>Blogs</h2><p>Expert insights and helpful articles for better understanding.</p></div><div className="home-blog-grid">
    <article className="home-blog-card"><Link href="/blog/breast-self-assessment" className="home-blog-image"><img src="/images/file_0000000001bc8211ab422f0824e461ed.png" alt="Breast self-assessment guide cover" loading="lazy"/></Link><div className="home-blog-content"><h3><Link href="/blog/breast-self-assessment">Breast Self-Assessment: How to Check Your Breasts</Link></h3><span>Patient guide · Breast Health</span><Link className="home-blog-read" href="/blog/breast-self-assessment">Read article ↗</Link></div></article>
    
    <article className="home-blog-card"><Link href="/blog/surgical-oncology-consultation" className="home-blog-image"><img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85" alt="Doctor reviewing medical information"/></Link><div className="home-blog-content"><h3><Link href="/blog/surgical-oncology-consultation">Understanding a Surgical Oncology Consultation</Link></h3><span>Patient guide · Surgical Oncology</span><Link className="home-blog-read" href="/blog/surgical-oncology-consultation">Read article ↗</Link></div></article>
    <article className="home-blog-card"><Link href="/blog/breast-lump-assessment" className="home-blog-image"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85" alt="Medical professional discussing a health assessment"/></Link><div className="home-blog-content"><h3><Link href="/blog/breast-lump-assessment">Breast Lump Assessment: Tests and Next Steps</Link></h3><span>Patient guide · Breast Health</span><Link className="home-blog-read" href="/blog/breast-lump-assessment">Read article ↗</Link></div></article>
    <article className="home-blog-card"><Link href="/blog/thyroid-nodules-assessment" className="home-blog-image"><img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85" alt="Healthcare professional in a clinical environment"/></Link><div className="home-blog-content"><h3><Link href="/blog/thyroid-nodules-assessment">Thyroid Nodules: Understanding the Assessment</Link></h3><span>Patient guide · Endocrine Surgery</span><Link className="home-blog-read" href="/blog/thyroid-nodules-assessment">Read article ↗</Link></div></article>
  </div><div className="home-blogs-action"><Link href="/blog">View all Blogs</Link></div></div></section>

  {/* 16 */}
  <section className="premium-final-cta"><div className="container final-cta-inner"><div><div className="eyebrow eyebrow-light">Appointments · Lahore</div><h2>Have a question about arranging a consultation?</h2><p>Contact the clinic to confirm availability, timings and the most suitable location.</p></div><a className="button button-white" href={wa}>WhatsApp +92 370 5978093 ↗</a></div></section>
  <section className="section clinical-gallery"><div className="container"><div className="clinical-gallery-heading"><div><div className="eyebrow">Clinical & professional gallery</div><h2>Inside the practice of surgical care</h2><p>Illustrative views of operating theatres, surgical teams and the environment of modern operative care.</p></div><Link className="button gallery-button" href="/gallery">View Gallery ↗</Link></div><div className="clinical-gallery-grid"><figure><img src="https://srm-hospitals.s3.ap-south-1.amazonaws.com/Speciality-images/General-Surgery.webp" alt="Surgeons performing an operation beneath operating theatre lights" loading="lazy"/><figcaption>Surgical team at work</figcaption></figure><figure><img src="https://media.fluke.com/eeb5ef91-63a7-4e96-aa34-b108002cb02d_original__size.jpg" alt="Surgeons working around a patient in a modern operating theatre" loading="lazy"/><figcaption>Operating theatre environment</figcaption></figure><figure><img src="https://www.hopkinsmedicine.org/-/media/images/articles/2018/07/geriatric-surgery-640x640.jpeg" alt="Operating room team working together during surgery" loading="lazy"/><figcaption>Coordinated surgical care</figcaption></figure><figure><img src="https://static.wixstatic.com/media/04b70ad4e4af4a9290c1769bf2b63030.jpg/v1/fit/w_2500%2Ch_1330%2Cal_c/04b70ad4e4af4a9290c1769bf2b63030.jpg" alt="Surgical team preparing and performing an operation" loading="lazy"/><figcaption>Teamwork in the operating room</figcaption></figure><figure><img src="https://www.kghvisakhapatnam.org/admin/upload/Surgical%20Oncology.webp" alt="Surgical team performing an operation in a hospital theatre" loading="lazy"/><figcaption>Surgical oncology theatre</figcaption></figure><figure><img src="https://www.clinicbarcelona.org/uploads/media/default/0021/72/3130ca282b7cb8b37fa7dec95a9fa207953da8bd.jpg" alt="Surgeons and assistants working together during an operation" loading="lazy"/><figcaption>Modern operative care</figcaption></figure></div></div></section>
 </main></Shell>
}
