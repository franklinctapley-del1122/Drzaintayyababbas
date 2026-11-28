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
  },

  "breast-self-assessment": {
    title: "Breast Self-Assessment: How to Check Your Breasts and Recognize Early Changes",
    category: "Breast Health",
    excerpt: "Learn breast awareness, recognize unusual changes and understand when to seek a professional breast assessment.",
    intro: "Breast self-awareness means knowing how your breasts normally look and feel so you can notice a new or unusual change. A step-by-step self-check may help you become familiar with your breast tissue, but routine monthly breast self-examination is not recommended as a screening test. It cannot diagnose or rule out breast cancer.",
    cover: "/images/breast-self-assessment-cover.svg",
    sections: [
      { heading: "What is breast self-assessment?", paragraphs: ["Breast self-assessment is a way of becoming familiar with the usual appearance and feel of your breasts. You may notice your breasts while bathing, dressing or during an optional, gentle check. The important point is awareness of what is normal for you, rather than following a strict monthly examination schedule.", "Breast self-awareness is different from formal breast self-examination. Routine, repetitive monthly breast self-examination is not recommended for women at average risk as a screening method. Research has not shown that it reduces breast cancer deaths, and false alarms can lead to unnecessary investigations."] },
      { heading: "Why is knowing your normal important?", paragraphs: ["Breast tissue naturally varies. One breast may be slightly larger than the other, and texture can change with hormonal fluctuations, pregnancy, breastfeeding and age. Knowing your usual pattern can help you recognize a change that is new for you.", "A change does not automatically mean cancer. Cysts, fibroadenomas, infections and hormonal changes can also cause breast symptoms. However, a new or persistent change deserves assessment rather than a diagnosis by touch alone."] },
      { heading: "When should you check your breasts?", paragraphs: ["There is no medically required day of the month for routine breast self-examination in women at average risk. You do not need to force a monthly schedule. Instead, stay familiar with your breasts during everyday activities and seek advice when you notice something different.", "If you prefer to use a planned self-check to learn what is normal for you, choose a comfortable time. Breast tenderness and fullness may vary during the menstrual cycle. Do not delay assessment of a new symptom until a particular time in your cycle."] },
      { heading: "How to become familiar with your breasts in 5 steps", paragraphs: ["The following steps are an optional way to learn about your normal breast appearance and feel. They are not a validated screening test, and no particular self-examination technique has been shown to prevent breast cancer deaths. Use gentle pressure and stop if the check causes pain."] },
      { heading: "Step 1: Look at your breasts in a mirror", paragraphs: ["With your upper body uncovered, stand comfortably in front of a mirror with your arms relaxed. Notice the usual size, shape, skin appearance and nipple position of both breasts. A small difference between breasts is common. Look for a new change such as swelling, dimpling, puckering, a persistent rash or a change in nipple position."] },
      { heading: "Step 2: Raise your arms and look again", paragraphs: ["Raise both arms above your head and observe whether you notice a new difference in breast shape, skin or nipple position. You can also place your hands on your hips and gently tighten your chest muscles. Focus on changes from your normal appearance, not on achieving perfect symmetry."] },
      { heading: "Step 3: Notice unexpected nipple discharge", paragraphs: ["Pay attention to fluid that comes from the nipple without squeezing, particularly if it is bloody or clear, comes from one breast, or is new for you. Do not repeatedly squeeze your nipples to check for discharge. New or spontaneous discharge should be discussed with a healthcare professional."] },
      { heading: "Step 4: Become familiar with the feel of your breasts while lying down", paragraphs: ["If you choose to feel your breasts, lie comfortably and use the pads of your three middle fingers with gentle, small circular movements. Become familiar with the breast tissue and the area extending towards the armpit and collarbone. Avoid pressing hard enough to cause pain. You are looking for a new or distinctly different area, not trying to decide whether a lump is cancer."] },
      { heading: "Step 5: Notice changes during everyday activities", paragraphs: ["You may find it easier to notice how your breasts feel while standing or sitting, including during bathing or dressing. There is no need to repeat a detailed examination in multiple positions if it makes you anxious or uncomfortable. The goal is to recognize a change and report it, not to carry out a diagnostic test at home."] },
      { heading: "What breast changes should you not ignore?", bullets: ["A new lump or thickened area in the breast or armpit", "A new change in breast size, shape or contour", "Skin dimpling, puckering, persistent redness or an orange-peel appearance", "A nipple that newly turns inward or changes position", "Spontaneous nipple discharge, especially if bloody or clear", "A persistent rash, crusting, ulceration or scaling around the nipple", "New, persistent focal breast pain or swelling"], paragraphs: ["These symptoms can have non-cancerous causes, but they should be assessed. Breast cancer does not always cause pain, and the absence of pain does not rule it out."] },
      { heading: "What should you do if you notice a lump or change?", paragraphs: ["Arrange an appointment with a qualified healthcare professional or breast specialist. Explain when you first noticed the change, whether it has grown or altered, and whether you have pain, discharge, skin changes or a relevant family history. Avoid repeatedly pressing the area or trying to diagnose it yourself.", "A clinical assessment may include a medical history and examination of the breasts and nearby lymph node areas. Depending on your age, symptoms and findings, the clinician may recommend diagnostic ultrasound, mammography or another imaging test. A biopsy may be considered if an area needs tissue diagnosis. The right tests depend on the individual case.", "For further information, see our [breast lump assessment guide](/blog/breast-lump-assessment), learn about [breast cancer consultation](/specialties/breast-cancer-consultation), or explore [surgical oncology services](/specialties/surgical-oncology)."] },
      { heading: "Are all breast lumps cancerous?", paragraphs: ["No. Many breast lumps are benign. Common causes include fluid-filled cysts, fibroadenomas and hormonal changes. Infection and other benign breast conditions can also cause lumps, swelling or tenderness.", "It is not possible to reliably tell whether a lump is benign or cancerous by its feel alone. A new lump or persistent change should be assessed so the need for imaging or biopsy can be decided appropriately."] },
      { heading: "Does breast self-assessment replace mammography?", paragraphs: ["No. Breast awareness is not a substitute for recommended breast cancer screening. A self-check cannot reliably detect every cancer, and it cannot rule out disease when no lump is felt.", "Screening recommendations differ between countries and may depend on age, personal risk, family history and local guidance. Diagnostic imaging for a new symptom is different from routine screening. Discuss the appropriate screening plan with your healthcare professional, especially if you have a strong family history, a known genetic risk or a previous breast condition."] },
      { heading: "When to seek urgent medical advice", paragraphs: ["Seek prompt medical assessment for a new breast lump, spontaneous bloody nipple discharge, new nipple inversion, skin dimpling or persistent one-sided changes. If you have rapidly worsening breast redness or swelling with fever or feel very unwell, seek urgent medical care because infection or another condition may need prompt treatment."] },
      { heading: "Speak with a breast specialist", paragraphs: ["If you have noticed a breast lump or an unusual change, arrange an individual assessment rather than relying on a home self-check. Find information about [breast cancer consultation in Lahore](/specialties/breast-cancer-consultation) or use the [clinic contact page](/contact) to ask about an appointment."] }
    ],
    faqs: [
      { question: "Is monthly breast self-examination still recommended?", answer: "No. Routine monthly breast self-examination is not recommended as a screening test for women at average risk. Breast self-awareness is encouraged so that you can notice and report new changes." },
      { question: "What is the difference between breast self-awareness and breast self-examination?", answer: "Breast self-awareness means knowing your normal breast appearance and feel without following a required schedule. Formal breast self-examination is a repeated, systematic check, often monthly, and is not recommended as a routine screening method for average-risk women." },
      { question: "What is the best time to check my breasts?", answer: "There is no required monthly time for breast self-awareness. If you choose to do an optional check, choose a comfortable time. Do not postpone assessment of a new change until after your period." },
      { question: "What does a breast cancer lump feel like?", answer: "A concerning lump may feel firm or different from nearby tissue, but breast lumps vary and touch cannot diagnose cancer. Any new lump should be assessed by a healthcare professional." },
      { question: "Are most breast lumps cancerous?", answer: "No. Many breast lumps are benign, including cysts and fibroadenomas. A clinician may recommend imaging or biopsy depending on the examination and individual circumstances." },
      { question: "Can breast cancer occur without pain?", answer: "Yes. Breast cancer may not cause pain, especially early on. Do not wait for pain before seeking assessment of a new lump or other breast change." },
      { question: "Should I squeeze my nipples to check for discharge?", answer: "No. Repeated squeezing is unnecessary. Report discharge that occurs spontaneously, particularly if it is bloody, clear or comes from one breast." },
      { question: "Does a normal self-check mean I do not have breast cancer?", answer: "No. A self-check cannot rule out breast cancer. Follow screening advice appropriate to your age and risk, and seek assessment for any new symptom even if you do not feel a lump." },
      { question: "When should I see a breast specialist?", answer: "Arrange an assessment for a new lump, spontaneous nipple discharge, new nipple inversion, skin dimpling, persistent one-sided changes or another unusual breast symptom. Seek urgent care for rapidly worsening redness or swelling with fever or feeling very unwell." }
    ],
    sources: [
      {label:"American College of Obstetricians and Gynecologists (ACOG) - Monthly breast self-exams",url:"https://www.acog.org/womens-health/experts-and-stories/ask-acog/monthly-self-exams-of-breasts"},
      {label:"Susan G. Komen - Breast self-exam and breast awareness",url:"https://www.komen.org/breast-cancer/screening/breast-self-exam/"},
      {label:"Mayo Clinic - Breast self-exam for breast awareness",url:"https://www.mayoclinic.org/tests-procedures/breast-exam/about/pac-20393237"},
      {label:"NHS - How to check your breasts or chest",url:"https://www.nhs.uk/tests-and-treatments/how-to-check-your-breasts-or-chest/"},
      {label:"Pakistan National Cancer Screening and Early Diagnosis Guidelines",url:"https://www.iccp-portal.org/sites/default/files/2026-04/National_Cancer_Screening_Guidelines_2024_1%20%281%29.pdf"},
    ],
    related: ["/blog/breast-lump-assessment","/specialties/breast-cancer-consultation","/specialties/surgical-oncology","/contact"]
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Patient Education Blog" };
  return {
    title: slug === "breast-self-assessment" ? "Breast Self-Assessment: 5-Step Guide | Dr. Zain" : article.title + " | Patient Education Lahore",
    description: article.excerpt,
    alternates: { canonical: "/blog/" + slug },
    openGraph: { title: article.title, description: article.excerpt, type: "article", images: article.cover ? [{ url: article.cover, alt: article.title }] : undefined },
    twitter: { card: "summary_large_image", title: article.title, description: article.excerpt, images: article.cover ? [article.cover] : undefined }
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();
  const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":article.title,"description":article.excerpt,"datePublished":"2026-11-28","dateModified":"2026-11-28","author":{"@type":"Organization","name":"Dr. Zain Tayyab Abbas - Patient Education"},"reviewedBy":{"@type":"Person","name":"Dr. Zain Tayyab Abbas"},"image":article.cover ? ["https://dr-zain-tayyab-abbas.vercel.app"+article.cover] : undefined,"mainEntityOfPage":{"@type":"WebPage","@id":"https://dr-zain-tayyab-abbas.vercel.app/blog/"+slug},"publisher":{"@type":"Organization","name":"Dr. Zain Tayyab Abbas - Patient Education","url":"https://dr-zain-tayyab-abbas.vercel.app"}};
  const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://dr-zain-tayyab-abbas.vercel.app/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://dr-zain-tayyab-abbas.vercel.app/blog"},{"@type":"ListItem","position":3,"name":article.title,"item":"https://dr-zain-tayyab-abbas.vercel.app/blog/"+slug}]};
  return <Shell><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/><main className="blog-article-page">
    <div className="container blog-article-wrap">
      <nav className="blog-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{article.category}</span></nav>
{article.cover && <figure className="blog-article-cover"><img src={article.cover} alt="Breast self-awareness guide featuring Dr. Zain Tayyab Abbas and five steps to notice breast changes" width="1600" height="900" fetchPriority="high"/><figcaption>Breast self-awareness: notice changes and seek medical advice when needed.</figcaption></figure>}
      <header className="blog-article-header"><span className="eyebrow">{article.category} · PATIENT EDUCATION</span><h1>{article.title}</h1><p>{article.excerpt}</p><div className="blog-article-byline">Clinical review and approval: <Link href="/about">Dr. Zain Tayyab Abbas</Link> <span>•</span> Reviewed 28 November 2026 <span>•</span> General patient education</div></header>
      {slug === "prepare-for-surgical-consultation" && <h2>Under Development</h2>}
      <article className="blog-article-content">
        <p className="blog-article-lead">{article.intro}</p>
        {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((p) => <p key={p}>{p.split(/(\[[^\]]+\]\([^\)]+\))/g).map((part) => { const match = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/); return match ? <Link key={part} href={match[2]}>{match[1]}</Link> : part; })}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
        {slug === "breast-self-assessment" && <section className="blog-article-cta"><h2>Noticed a change in your breast?</h2><p>A new lump or unusual breast change deserves an individual clinical assessment. Arrange an appointment to discuss your concern and the next appropriate steps.</p><Link href="/specialties/breast-cancer-consultation">Breast cancer consultation in Lahore</Link><span> or </span><Link href="/contact">contact the clinic</Link>.</section>}
        {article.faqs && <section className="blog-faq-section"><h2>Frequently asked questions</h2>{article.faqs.map((faq) => <div className="blog-faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>}
        <section className="blog-source-list"><h2>Further reading</h2><p>These external resources provide additional general information. They do not replace individual medical advice.</p><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section>
        <p className="blog-medical-note"><strong>Medical note:</strong> This article is general education and is not presented as an individually reviewed clinical recommendation. It is not a diagnosis or personal treatment plan and cannot replace assessment by a qualified healthcare professional. Seek urgent medical care for severe or rapidly worsening symptoms.</p>
        <div className="blog-article-related"><h2>Related information</h2>{article.related.map((href) => <Link key={href} href={href}>{href === "/clinics" ? "Clinic locations" : href === "/contact" ? "Contact the clinic" : href === "/research" ? "Research and publications" : "Explore related information"} ↗</Link>)}</div>
      </article>
      <div className="blog-back-link"><Link href="/blog">← Back to all patient guides</Link></div>
    </div>
    <CTA/>
  </main></Shell>;
}
