import Image from "next/image";
import Link from "next/link";
import {Shell,CTA,wa} from "./components";

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
      <div className="doctor-experience-column"><span className="experience-kicker">CLINICAL BACKGROUND</span><h3>Professional experience in surgical care</h3><p>Dr. Zain Tayyab Abbas has worked across general surgery and surgical oncology roles in Lahore, with experience in patient assessment, operative care and post-operative management.</p><Link className="under-link" href="/about">View professional profile ↗</Link></div>
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
  {/* Modern trust section */}
  <section className="section why-choose-section"><div className="container">
    <div className="why-choose-heading"><div className="eyebrow">Why patients consult Dr. Zain</div><h2>Clear guidance, grounded in your individual needs</h2><p>A specialist consultation should help you understand your reports, the questions to ask and the next steps that may be appropriate for your situation.</p></div>
    <div className="why-choose-grid">
      <article><span>01</span><h3>Specialist surgical training</h3><p>MBBS, FCPS in General Surgery and Fellowship training in Surgical Oncology.</p></article>
      <article><span>02</span><h3>Careful review of reports</h3><p>Time to discuss relevant imaging, pathology, laboratory results and medical history.</p></article>
      <article><span>03</span><h3>Understand your options</h3><p>Clear discussion of possible approaches, referrals and when a multidisciplinary opinion may help.</p></article>
      <article><span>04</span><h3>Practical next steps</h3><p>Guidance on follow-up, further assessment and preparing for your next appointment.</p></article>
    </div>
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
  {/* Patient feedback carousel: quotations are attributed to their original platforms */}
  <section className="section patient-reviews-section"><div className="container">
    <div className="patient-reviews-heading"><div><div className="eyebrow">Patient feedback</div><h2>Experiences shared by patients</h2><p>Feedback published on independent healthcare platforms. Each quotation remains attributed to its original source.</p></div><a className="reviews-google-link" href="https://maps.app.goo.gl/REsnshfnPAKV1tGa8" target="_blank" rel="noopener noreferrer">View Google reviews ↗</a></div>
    <div className="patient-review-window" aria-label="Patient feedback carousel">
      <div className="patient-review-track">
        <article className="patient-review-card"><div className="review-card-top"><span className="review-source">OLADOC · VERIFIED PATIENT</span><span className="review-stars" aria-label="Five stars">★★★★★</span></div><blockquote>“He nice, caring and explaining each and every question.”</blockquote><div className="review-card-bottom"><span>Published patient feedback</span><a href="https://oladoc.com/pakistan/lahore/dr/laparoscopic-surgeon/zain-tayyab-abbas/939412" target="_blank" rel="noopener noreferrer">Read on oladoc ↗</a></div></article>
        <article className="patient-review-card"><div className="review-card-top"><span className="review-source">MARHAM · PATIENT REVIEW</span><span className="review-stars" aria-label="Five out of five">★★★★★</span></div><blockquote>“I am satisfied with the doctor.”</blockquote><div className="review-card-bottom"><span>Patient feedback · Iqra Medical Complex</span><a href="https://www.marham.pk/doctors/lahore/general-surgeon/asst-prof-dr-zain-tayyab-abbas/reviews" target="_blank" rel="noopener noreferrer">Read on Marham ↗</a></div></article>
        <article className="patient-review-card"><div className="review-card-top"><span className="review-source">OLADOC · VERIFIED PATIENT</span><span className="review-stars" aria-label="Five stars">★★★★★</span></div><blockquote>“He nice, caring and explaining each and every question.”</blockquote><div className="review-card-bottom"><span>Published patient feedback</span><a href="https://oladoc.com/pakistan/lahore/dr/laparoscopic-surgeon/zain-tayyab-abbas/939412" target="_blank" rel="noopener noreferrer">Read on oladoc ↗</a></div></article>
        <article className="patient-review-card" aria-hidden="true"><div className="review-card-top"><span className="review-source">MARHAM · PATIENT REVIEW</span><span className="review-stars">★★★★★</span></div><blockquote>“I am satisfied with the doctor.”</blockquote><div className="review-card-bottom"><span>Patient feedback · Iqra Medical Complex</span><span>Read on Marham ↗</span></div></article>
      </div>
    </div>
    <p className="reviews-disclaimer">Reviews are reproduced as brief excerpts from their respective platforms and are not a guarantee of treatment outcomes. Google feedback can be viewed directly through the Google listing.</p>
  </div></section>
  {/* 12 */}
  <section className="section clinic-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">Visit the clinics</div><h2>Consultations in Lahore</h2></div><Link className="under-link" href="/clinics">Full clinic details ↗</Link></div><div className="clinic-grid"><article className="clinic-card premium-clinic"><span className="clinic-index">01 · JOHAR TOWN</span><h3>Iqraa Medical Complex</h3><p>New Building, Extension, Block A, Phase 1, Johar Town, Lahore, Pakistan.</p><strong>Monday – Saturday · 5:00 PM – 8:00 PM</strong></article><article className="clinic-card premium-clinic"><span className="clinic-index">02 · VALENCIA TOWN</span><h3>Tayyab Medical & Dental Complex</h3><p>Valencia Town, Lahore, Pakistan.</p><strong>Monday – Saturday · 9:00 PM – 10:00 PM</strong></article></div></div></section>
  {/* 13 */}
  <section className="section section-white"><div className="container visit-grid"><div><SectionHead kicker="Plan your visit" title="Before you come to the clinic" desc="A little preparation can make your consultation more useful."/><a className="button" href={wa}>Confirm appointment ↗</a></div><div className="visit-checks"><p><b>✓</b> Previous prescriptions and medical history</p><p><b>✓</b> Imaging, biopsy and laboratory reports</p><p><b>✓</b> Current medicines and allergies list</p><p><b>✓</b> Written questions or concerns you want to discuss</p></div></div></section>
  {/* 14 */}
  <section className="section faq-section"><div className="container"><SectionHead kicker="Frequently asked questions" title="Helpful answers before booking"/><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div></div></section>
  {/* 15 */}
  <section className="section section-white"><div className="container patient-note"><div><div className="eyebrow">For patients and families</div><h2>Information you can use to prepare for a conversation.</h2></div><div><p>This website provides general educational and professional information. It cannot diagnose a condition, replace an in-person examination or determine whether surgery is appropriate. If symptoms are urgent or severe, seek timely medical attention.</p><Link className="under-link" href="/contact">Contact and appointment information ↗</Link></div></div></section>
  <section className="home-blogs"><div className="container"><div className="home-blogs-heading"><h2>Blogs</h2><p>Expert insights and helpful articles for better understanding.</p></div><div className="home-blog-carousel" aria-label="Featured blog articles">
    <div className="home-blog-track">
      {[
        {href:"/blog/surgical-oncology-consultation",src:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",alt:"Doctor reviewing medical information",title:"Understanding a Surgical Oncology Consultation",category:"Patient guide · Surgical Oncology"},
        {href:"/blog/breast-lump-assessment",src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",alt:"Medical professional discussing a health assessment",title:"Breast Lump Assessment: Tests and Next Steps",category:"Patient guide · Breast Health"},
        {href:"/blog/thyroid-nodules-assessment",src:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",alt:"Healthcare professional in a clinical environment",title:"Thyroid Nodules: Understanding the Assessment",category:"Patient guide · Endocrine Surgery"}
      ].concat([
        {href:"/blog/surgical-oncology-consultation",src:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",alt:"Doctor reviewing medical information",title:"Understanding a Surgical Oncology Consultation",category:"Patient guide · Surgical Oncology"},
        {href:"/blog/breast-lump-assessment",src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",alt:"Medical professional discussing a health assessment",title:"Breast Lump Assessment: Tests and Next Steps",category:"Patient guide · Breast Health"},
        {href:"/blog/thyroid-nodules-assessment",src:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",alt:"Healthcare professional in a clinical environment",title:"Thyroid Nodules: Understanding the Assessment",category:"Patient guide · Endocrine Surgery"}
      ]).map((item,index)=><article className="home-blog-card" key={index} aria-hidden={index>=3 ? true : undefined}><Link href={item.href} className="home-blog-image" tabIndex={index>=3 ? -1 : undefined}><img src={item.src} alt={index>=3 ? "" : item.alt} loading="lazy"/></Link><div className="home-blog-content"><h3><Link href={item.href} tabIndex={index>=3 ? -1 : undefined}>{item.title}</Link></h3><span>{item.category}</span><Link className="home-blog-read" href={item.href} tabIndex={index>=3 ? -1 : undefined}>Read article ↗</Link></div></article>)}
    </div>
  </div><div className="home-blogs-action"><Link href="/blog">View all Blogs</Link></div></div></section>

  {/* 16 */}
  <section className="premium-final-cta"><div className="container final-cta-inner"><div><div className="eyebrow eyebrow-light">Appointments · Lahore</div><h2>Have a question about arranging a consultation?</h2><p>Contact the clinic to confirm availability, timings and the most suitable location.</p></div><a className="button button-white" href={wa}>WhatsApp +92 370 5978093 ↗</a></div></section>
  <section className="section clinical-gallery"><div className="container"><div className="clinical-gallery-heading"><div><div className="eyebrow">Clinical & professional gallery</div><h2>Inside the practice of surgical care</h2><p>Illustrative views of operating theatres, surgical teams and the environment of modern operative care.</p></div><Link className="button gallery-button" href="/gallery">View Gallery ↗</Link></div><div className="clinical-gallery-grid"><figure><img src="https://srm-hospitals.s3.ap-south-1.amazonaws.com/Speciality-images/General-Surgery.webp" alt="Surgeons performing an operation beneath operating theatre lights" loading="lazy"/><figcaption>Surgical team at work</figcaption></figure><figure><img src="https://media.fluke.com/eeb5ef91-63a7-4e96-aa34-b108002cb02d_original__size.jpg" alt="Surgeons working around a patient in a modern operating theatre" loading="lazy"/><figcaption>Operating theatre environment</figcaption></figure><figure><img src="https://www.hopkinsmedicine.org/-/media/images/articles/2018/07/geriatric-surgery-640x640.jpeg" alt="Operating room team working together during surgery" loading="lazy"/><figcaption>Coordinated surgical care</figcaption></figure><figure><img src="https://static.wixstatic.com/media/04b70ad4e4af4a9290c1769bf2b63030.jpg/v1/fit/w_2500%2Ch_1330%2Cal_c/04b70ad4e4af4a9290c1769bf2b63030.jpg" alt="Surgical team preparing and performing an operation" loading="lazy"/><figcaption>Teamwork in the operating room</figcaption></figure><figure><img src="https://www.kghvisakhapatnam.org/admin/upload/Surgical%20Oncology.webp" alt="Surgical team performing an operation in a hospital theatre" loading="lazy"/><figcaption>Surgical oncology theatre</figcaption></figure><figure><img src="https://www.clinicbarcelona.org/uploads/media/default/0021/72/3130ca282b7cb8b37fa7dec95a9fa207953da8bd.jpg" alt="Surgeons and assistants working together during an operation" loading="lazy"/><figcaption>Modern operative care</figcaption></figure></div></div></section>
 </main></Shell>
}
