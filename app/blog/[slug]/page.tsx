import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell, CTA } from "../../components";

type Article = {
  title: string; category: string; excerpt: string; intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  sources: { label: string; url: string }[];
  related: string[];
  faqs?: { question: string; answer: string }[];
  cover?: string;
};

const articles: Record<string, Article> = {
  "surgical-oncology-consultation": {
    title: "Understanding a Surgical Oncology Consultation",
    category: "Surgical Oncology",
    excerpt: "What to expect at an appointment, which records may help and how treatment discussions are approached.",
    intro: "A surgical oncology consultation is an opportunity to review a cancer diagnosis or a concern that may require a surgical opinion. The discussion is based on the specific diagnosis, available pathology, imaging, previous treatment and the patient's overall health.",
    sections: [
      { heading: "What happens during the appointment?", paragraphs: ["The clinician will usually ask about the diagnosis, symptoms, medical history and any treatment already received. They may review examination findings, biopsy or histopathology reports, and imaging. The purpose is to understand the available information and identify what questions or next steps remain.", "A consultation does not automatically mean that an operation is required. Some cancers are managed with medicines, radiotherapy, surgery or a combination. The sequence depends on the cancer type and individual findings."] },
      { heading: "Which records should you bring?", paragraphs: ["Bring the original reports where possible, not only a brief verbal summary. If scans were performed, take the written report and the images or access details supplied by the imaging centre."], bullets: ["Biopsy or histopathology report", "CT, MRI, ultrasound or PET scan reports and images", "Previous operation notes and discharge summaries", "Details of chemotherapy, radiotherapy or other treatment", "Current medicines, allergies and relevant medical history"] },
      { heading: "Questions worth asking", paragraphs: ["It can help to write down questions before the appointment. Ask the doctor to explain unfamiliar terms and how each recommendation relates to your own diagnosis."], bullets: ["What does the pathology report confirm?", "What is known about the extent or stage of the disease?", "Are more tests or another specialist opinion needed?", "What options may be considered, and why?", "What are the possible benefits, risks and follow-up requirements?"] },
      { heading: "How decisions are made", paragraphs: ["Cancer treatment planning may involve surgeons, medical oncologists, radiation oncologists, radiologists and pathologists. A recommendation should take account of the available evidence, the patient's health and preferences, and the goals of treatment."] }
    ],
    sources: [{label:"National Cancer Institute – Cancer treatment",url:"https://www.cancer.gov/about-cancer/treatment"},{label:"National Cancer Institute – Cancer diagnosis",url:"https://www.cancer.gov/about-cancer/diagnosis-staging/diagnosis"}],
    related: ["/specialties/surgical-oncology","/research","/clinics"]
  },
  "breast-lump-assessment": {
    title: "Breast Lump Assessment: Tests and Next Steps",
    category: "Breast Health",
    excerpt: "A patient-friendly overview of clinical assessment, breast imaging and biopsy reports.",
    intro: "A breast lump or change can have several causes. Many breast changes are not cancer, but a new or persistent lump should be assessed by a qualified healthcare professional rather than judged by touch alone.",
    sections: [
      { heading: "What may happen during assessment?", paragraphs: ["Assessment may include questions about when the lump appeared, whether it has changed, associated symptoms and personal or family history. A clinician may examine the breasts and nearby lymph node areas and decide whether imaging or tissue sampling is appropriate.", "The tests selected depend on factors such as age, examination findings and the nature of the breast change."] },
      { heading: "Understanding imaging and biopsy", paragraphs: ["Depending on the situation, investigations may include diagnostic mammography or breast ultrasound. Sometimes MRI is used for additional information. If imaging or examination identifies an area that needs clarification, a biopsy may be recommended so a pathologist can examine a tissue sample.", "A biopsy result should be interpreted together with the imaging and clinical findings. Bring the actual reports and images to the consultation."] },
      { heading: "What to bring to an appointment", bullets: ["Mammogram, ultrasound or MRI reports and images", "Biopsy or histopathology report, if performed", "Receptor or biomarker results, if available", "Previous breast clinic letters or treatment summaries", "A list of medicines and relevant medical history"], paragraphs: ["If a test has not yet been arranged, do not delay seeking assessment just to collect every item on this list. The clinic can advise what is needed for your appointment."] },
      { heading: "Questions you can ask", paragraphs: [], bullets: ["What did the examination and imaging show?", "Is a biopsy needed, and what will it help establish?", "When and how will results be explained?", "Do I need another specialist involved?", "What are the next steps based on my results?"] }
    ],
    sources: [{label:"National Cancer Institute – How breast cancer is diagnosed",url:"https://www.cancer.gov/types/breast/diagnosis"},{label:"American Cancer Society – Breast biopsy",url:"https://www.cancer.org/cancer/types/breast-cancer/screening-tests-and-early-detection/breast-biopsy.html"}],
    related: ["/specialties/breast-cancer-consultation","/specialties/surgical-oncology","/clinics"]
  },
  "thyroid-nodules-assessment": {
    title: "Thyroid Nodules: Understanding the Assessment",
    category: "Endocrine Surgery",
    excerpt: "Learn about common investigations used to assess a thyroid nodule and what the results may help clarify.",
    intro: "A thyroid nodule is a lump within the thyroid gland. Nodules are common and many are non-cancerous. The appropriate assessment depends on the person's history, examination, thyroid blood tests and ultrasound features.",
    sections: [
      { heading: "Which tests may be used?", paragraphs: ["A clinician may request thyroid function blood tests to understand how the gland is working. Ultrasound helps describe the nodule's size and appearance and may also assess the surrounding neck structures.", "Blood tests alone cannot determine whether a nodule is cancerous. The ultrasound pattern and the wider clinical picture help the treating team decide whether further testing is appropriate."] },
      { heading: "When is a needle sample considered?", paragraphs: ["Some nodules may need fine needle aspiration cytology (FNAC), in which a thin needle collects cells for laboratory examination. Whether FNAC is recommended depends on ultrasound characteristics and clinical factors. Not every nodule needs a biopsy or an operation."] },
      { heading: "What should you bring?", bullets: ["Thyroid ultrasound report and images", "Recent thyroid function blood test results", "FNAC or pathology report, if performed", "Previous neck imaging or specialist letters", "Current medicines and relevant medical history"], paragraphs: ["Keep the dates of tests visible. Comparing earlier and more recent results may help the clinician understand whether a finding has changed."] },
      { heading: "Questions to discuss", paragraphs: [], bullets: ["What does the ultrasound description mean?", "Are my thyroid blood tests within the expected range?", "Is FNAC or follow-up imaging appropriate in my case?", "What symptoms should prompt earlier review?", "If surgery is discussed, what is its purpose and what alternatives exist?"] }
    ],
    sources: [{label:"NICE – Thyroid disease: assessment and management",url:"https://www.nice.org.uk/guidance/ng145/chapter/recommendations"},{label:"NIDDK – Thyroid tests",url:"https://www.niddk.nih.gov/health-information/diagnostic-tests/thyroid"},{label:"Endocrine Society – Thyroid nodules",url:"https://www.endocrine.org/patient-engagement/endocrine-library/thyroid-nodules"}],
    related: ["/specialties/endocrine-surgery","/specialties/thyroid-cancer-information","/clinics"]
  },
  "colorectal-consultation-preparation": {
    title: "Preparing for a Colorectal Specialist Appointment",
    category: "Colorectal Health",
    excerpt: "A practical checklist of symptoms, medical history and reports to organise before an appointment.",
    intro: "A colorectal consultation may be arranged for bowel symptoms, an abnormal test, a confirmed diagnosis or a recommendation for a surgical opinion. Organising your history and reports can make the discussion clearer.",
    sections: [
      { heading: "Make a short symptom timeline", paragraphs: ["Write down when the symptoms began, how often they occur and whether they are changing. Include relevant details such as bowel habit changes, abdominal discomfort, bleeding, weight changes or previous episodes. This information does not establish a diagnosis, but it helps the clinician understand the reason for the visit."] },
      { heading: "Collect relevant reports", bullets: ["Colonoscopy or sigmoidoscopy report", "Biopsy or histopathology results", "CT, MRI or other imaging reports and images", "Previous operation notes and discharge summaries", "Recent blood tests and medication list"], paragraphs: ["If you have had a procedure, bring the full report rather than only the appointment summary. If a report is unavailable, tell the clinic which test was performed and where."] },
      { heading: "What may be discussed?", paragraphs: ["The clinician may review the symptoms, examination findings and test results, then explain whether further investigation or another specialist opinion is needed. If a condition requiring surgery is identified, the purpose, possible approaches, risks and recovery considerations should be discussed in relation to the individual case."] },
      { heading: "Questions to ask", paragraphs: [], bullets: ["What do my endoscopy and pathology results show?", "Do I need additional imaging or tests?", "What are the possible management options?", "What symptoms should lead me to seek urgent care?", "When should I expect follow-up?"] }
    ],
    sources: [{label:"NHS – Bowel cancer",url:"https://www.nhs.uk/conditions/bowel-cancer/"}],
    related: ["/specialties/colorectal-cancer-consultation","/specialties/surgical-oncology","/clinics"]
  },
  "when-to-have-a-hernia-assessed": {
    title: "When Should a Hernia Be Assessed by a Surgeon?",
    category: "General Surgery",
    excerpt: "An introduction to common hernia symptoms, clinical assessment and warning signs that need urgent attention.",
    intro: "A hernia occurs when tissue pushes through a weak area in the surrounding muscle or connective tissue. It may appear as a bulge and can cause discomfort, but symptoms and risks vary by hernia type and individual circumstances.",
    sections: [
      { heading: "Common signs and symptoms", paragraphs: ["Some hernias cause a visible or noticeable lump in the groin, abdomen or around a previous surgical scar. The bulge may become more noticeable when standing, coughing or straining. Some people experience dragging discomfort or pain, while others notice few symptoms."] },
      { heading: "How is a hernia assessed?", paragraphs: ["A clinician may ask when the bulge appears, whether it changes with position or activity, and whether there is pain or digestive difficulty. Physical examination is often important. Ultrasound or other imaging may be considered if the diagnosis or anatomy is unclear."] },
      { heading: "When is it urgent?", paragraphs: ["Seek urgent medical assessment if a hernia becomes suddenly or severely painful, the bulge becomes firm or cannot be reduced, or there is vomiting, abdominal swelling, fever, or a change in the skin colour over the lump. These may indicate a complication and should not wait for a routine appointment."] },
      { heading: "What to bring to a consultation", bullets: ["Previous ultrasound or CT reports", "Previous abdominal or hernia operation notes", "Current medicines and allergies", "A note of when the bulge appears and what makes it worse", "Relevant medical conditions"], paragraphs: ["Not every hernia requires immediate surgery. Monitoring or repair may be discussed depending on the hernia type, symptoms, health and clinical findings."] }
    ],
    sources: [{label:"NHS – Hernia",url:"https://www.nhs.uk/conditions/hernia/"},{label:"NIDDK – Inguinal hernia",url:"https://www.niddk.nih.gov/health-information/digestive-diseases/inguinal-hernia"}],
    related: ["/specialties/hernia-information","/specialties/general-surgery","/clinics"]
  },
  "prepare-for-surgical-consultation": {
    title: "What to Bring to Your Consultation",
    category: "Patient Resources",
    excerpt: "A simple checklist to help you organise reports, medicines and questions before meeting a surgeon.",
    intro: "A little preparation can make a surgical appointment more useful. You do not need to have every test completed before asking for advice; bring what you already have and let the clinic guide you about anything missing.",
    sections: [
      { heading: "Bring your medical records", bullets: ["Referral letter, if available", "Previous clinic letters and discharge summaries", "Operation notes, if you have had surgery before", "Relevant blood test results", "Imaging reports and images", "Biopsy or histopathology reports, if performed"], paragraphs: ["For scans, bring both the written report and the image files or access details where possible. A short diagnosis label may not contain all the information the doctor needs."] },
      { heading: "Prepare your medication and health history", paragraphs: ["Make a current list of prescription medicines, over-the-counter products and supplements. Include known allergies and important medical conditions. Do not stop a prescribed medicine before an appointment unless your treating clinician has advised you to do so."] },
      { heading: "Write down your questions", bullets: ["What is the likely explanation for my symptoms or test result?", "Do I need more tests before a decision can be made?", "What options may be suitable for my condition?", "What are the benefits, risks and alternatives?", "What recovery and follow-up might involve?"], paragraphs: ["If you are worried about remembering details, bring a trusted family member or write down the answers, where appropriate."] },
      { heading: "Confirm clinic details before travelling", paragraphs: ["Contact the clinic to confirm the appointment time, location and any specific instructions. Clinic schedules can change, so check before setting out."] }
    ],
    sources: [{label:"NHS – Preparing for an appointment",url:"https://www.nhs.uk/nhs-services/gps/"}],
    related: ["/clinics","/contact","/specialties/surgical-oncology"]
  }
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Patient Education Blog" };
  return {
    title: article.title + " | Patient Education Lahore",
    description: article.excerpt,
    alternates: { canonical: "/blog/" + slug },
    openGraph: { title: article.title, description: article.excerpt, type: "article", images: article.cover ? [{ url: article.cover, alt: article.title }] : undefined },\n    twitter: { card: "summary_large_image", title: article.title, description: article.excerpt, images: article.cover ? [article.cover] : undefined }
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();
  return <Shell><main className="blog-article-page">
    <div className="container blog-article-wrap">
      <nav className="blog-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{article.category}</span></nav>
      {article.cover && <figure className="blog-article-cover"><img src={article.cover} alt="Breast self-assessment guide featuring Dr. Zain Tayyab Abbas and five breast-awareness steps" width="1600" height="900" fetchPriority="high"/><figcaption>Breast self-awareness: notice changes and seek medical advice when needed.</figcaption></figure>}\n      <header className="blog-article-header"><span className="eyebrow">{article.category} · PATIENT EDUCATION</span><h1>{article.title}</h1><p>{article.excerpt}</p><div className="blog-article-byline">Professional profile: <Link href="/about">Dr. Zain Tayyab Abbas</Link> <span>•</span> General patient education <span>•</span> External references listed below</div></header>
      {slug === "prepare-for-surgical-consultation" && <h2>Under Development</h2>}
      <article className="blog-article-content">
        <p className="blog-article-lead">{article.intro}</p>
        {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((p) => <p key={p}>{p.split(/(\\[[^\\]]+\\]\\([^\\)]+\\))/g).map((part) => { const match = part.match(/^\\[([^\\]]+)\\]\\(([^\\)]+)\\)$/); return match ? <Link key={part} href={match[2]}>{match[1]}</Link> : part; })}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}\n        {article.faqs && <section className="blog-faq-section"><h2>Frequently asked questions</h2>{article.faqs.map((faq) => <div className="blog-faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>}
        <section className="blog-source-list"><h2>Further reading</h2><p>These external resources provide additional general information. They do not replace individual medical advice.</p><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section>
        <p className="blog-medical-note"><strong>Medical note:</strong> This article is general education and is not presented as an individually reviewed clinical recommendation. It is not a diagnosis or personal treatment plan and cannot replace assessment by a qualified healthcare professional. Seek urgent medical care for severe or rapidly worsening symptoms.</p>
        <div className="blog-article-related"><h2>Related information</h2>{article.related.map((href) => <Link key={href} href={href}>{href === "/clinics" ? "Clinic locations" : href === "/contact" ? "Contact the clinic" : href === "/research" ? "Research and publications" : "Explore related information"} ↗</Link>)}</div>
      </article>
      <div className="blog-back-link"><Link href="/blog">← Back to all patient guides</Link></div>
    </div>
    <CTA/>
  </main></Shell>;
}
