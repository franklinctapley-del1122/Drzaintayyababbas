import Link from "next/link";
import { Shell, PageHero, CTA } from "../../components";

type FAQ = [string, string];
type Service = {
  title: string; short: string; intro: string; context: string;
  topics: [string, string][]; preparation: string[];
  uniqueTitle: string; uniqueText: string; related: string[];
  faqs: FAQ[];
};

const services: Record<string, Service> = {
  "surgical-oncology": {
    title: "Surgical Oncology",
    short: "Surgical oncology consultation in Lahore",
    intro: "Surgical oncology is the branch of surgery concerned with the assessment and operative management of cancer. Decisions depend on the cancer type, site, stage, pathology, imaging, general health and the wider treatment plan.",
    context: "Dr. Zain Tayyab Abbas has fellowship training in Surgical Oncology at Shaukat Khanum Memorial Cancer Hospital & Research Centre. His CV documents clinical and operative experience involving breast, gastrointestinal and hepatobiliary malignancies, as well as oncological resections and lymph node dissection.",
    topics: [
      ["Understanding a surgical oncology consultation", "A consultation reviews the diagnosis, biopsy or pathology findings, imaging, previous treatment and the reason surgery is being considered. The aim is to understand the clinical picture and discuss appropriate next steps."],
      ["Cancer surgery and treatment planning", "Surgery may be one part of cancer treatment. Depending on the diagnosis, care planning may also involve medical oncology, radiation oncology, radiology and pathology. The sequence and suitability of treatments are individual decisions."],
      ["Breast and gastrointestinal oncology", "Dr. Abbas's CV records experience in breast and gastrointestinal malignancies, including research contributions relating to breast cancer, colorectal carcinoma and small bowel tumours. A patient's own diagnosis and records determine the appropriate consultation pathway."],
      ["What influences a surgical decision?", "The site and extent of disease, histopathology, imaging, fitness for surgery, prior treatment and the goals of care all influence whether an operation is appropriate and which approach may be considered."]
    ],
    preparation: ["Biopsy or histopathology reports, if available", "CT, MRI, ultrasound or PET scan reports and image discs", "Previous discharge summaries and operation notes", "Current medicines, allergies and relevant medical history", "A referral letter or oncology treatment summary, if available"],
    uniqueTitle: "Why pathology and imaging should be reviewed together",
    uniqueText: "A useful consultation does not rely on a scan or a biopsy result in isolation. The clinical history, pathology, imaging and previous treatment need to be considered together. Bring the actual reports and images where possible, so the treating team can review the available evidence and identify whether further assessment is needed.",
    related: ["breast-cancer-consultation", "colorectal-cancer-consultation", "endocrine-surgery", "general-surgery"],
    faqs: [
      ["What does a surgical oncologist do?", "A surgical oncologist assesses cancers that may require an operation and considers surgery within the wider cancer treatment plan. The decision depends on the diagnosis, stage, pathology, imaging and the patient's overall health."],
      ["When should I seek a surgical oncology consultation?", "A consultation may be appropriate after a cancer diagnosis, an abnormal biopsy, or a referral recommending a surgical opinion. Bring available reports so the doctor can understand the reason for referral."],
      ["Do I need a biopsy report before my appointment?", "A biopsy or pathology report is helpful when one has already been performed. If you do not have it, contact the clinic to ask what records are useful for your particular appointment."],
      ["Should I bring CT or MRI scans?", "Yes. Bring the written radiology reports and, where possible, the scan images on disc or through the original imaging portal. Reports alone may not contain every detail needed for clinical review."],
      ["Does every cancer need surgery?", "No. Treatment depends on the cancer type, stage, location and individual circumstances. Some cancers are treated with medicines or radiation, while others may involve surgery or a combination of treatments."],
      ["Can surgery be combined with chemotherapy or radiotherapy?", "For some cancers, surgery is planned before or after other treatments. The sequence is determined by the diagnosis and a coordinated clinical assessment."],
      ["What should I ask during a cancer surgery consultation?", "Ask about the purpose of the proposed operation, alternatives, expected recovery, possible risks, further treatment and follow-up. The answers should relate to your own diagnosis and clinical findings."],
      ["How can I book a consultation in Lahore?", "Contact the clinic through the appointment WhatsApp link on this website to confirm the current clinic schedule, location and availability before travelling."]
    ]
  },
  "breast-cancer-consultation": {
    title: "Breast Cancer Consultation",
    short: "Breast cancer surgical assessment in Lahore",
    intro: "Breast cancer assessment brings together clinical examination, breast imaging and tissue diagnosis. When a surgical opinion is needed, the consultation helps review the available findings and explain the options that may be relevant to the individual case.",
    context: "Dr. Zain Tayyab Abbas's CV documents experience in breast malignancies and mastectomy, as well as participation in breast cancer research. He is a co-author of a published study examining Ki-67 proliferation index and axillary lymph node metastasis in early breast cancer. This background is presented as professional experience and academic contribution, not as a promise that a particular procedure is suitable for every patient.",
    topics: [
      ["Breast lump and diagnostic assessment", "A breast lump may require clinical examination, imaging and sometimes a tissue sample. The meaning of a finding depends on the combined assessment rather than symptoms or imaging alone."],
      ["Understanding biopsy and pathology reports", "A pathology report can describe the type of cells found and relevant tumour features. The report should be reviewed alongside imaging and the clinical examination."],
      ["Surgical options for breast cancer", "Depending on the diagnosis and extent of disease, surgical discussions may include breast-conserving surgery or mastectomy and assessment of lymph nodes. The appropriate option is individual and requires specialist assessment."],
      ["Research and lymph node assessment", "Published research involving Dr. Abbas includes work on Ki-67 and axillary lymph node metastasis in early breast cancer. Research findings provide context for clinical questions but do not determine an individual's diagnosis or treatment."]
    ],
    preparation: ["Breast ultrasound, mammogram or MRI reports and images", "Core biopsy or histopathology report", "Receptor and tumour marker results, if performed", "Previous breast operation notes or treatment summaries", "A list of medicines and relevant family or personal medical history"],
    uniqueTitle: "Bring the complete breast assessment record",
    uniqueText: "Breast decisions often depend on matching the imaging findings with the biopsy location and pathology result. Bring the reports and images together, including receptor results when available. This helps avoid interpreting one result without its clinical context.",
    related: ["surgical-oncology", "colorectal-cancer-consultation", "general-surgery", "research"],
    faqs: [
      ["When should a breast lump be checked?", "A new, persistent or changing breast lump should be assessed by a qualified healthcare professional. The need for imaging or biopsy depends on age, examination findings and clinical history."],
      ["Does every breast lump mean cancer?", "No. Many breast lumps are benign, but examination and appropriate investigations are needed to understand the cause. Do not rely on touch or symptoms alone to determine whether a lump is cancerous."],
      ["What tests are used to assess a breast lump?", "Assessment may include clinical examination, ultrasound, mammography and, when indicated, a core needle biopsy. The appropriate tests depend on the individual presentation."],
      ["Why is a biopsy report important?", "A biopsy can identify the tissue diagnosis and provide information used in treatment planning. It should be interpreted together with imaging and the clinical findings."],
      ["What is the difference between breast-conserving surgery and mastectomy?", "Breast-conserving surgery removes the cancer with a margin of surrounding tissue while retaining much of the breast. Mastectomy removes the breast tissue. Suitability depends on tumour features, extent, patient factors and the treatment plan."],
      ["Are lymph nodes assessed in breast cancer?", "Lymph node assessment may be part of staging and treatment planning. The method depends on the clinical situation and findings from examination and investigations."],
      ["Should I bring my mammogram images to the appointment?", "Yes. Bring the written report and original images where possible, along with ultrasound, MRI and biopsy records. Having the complete record supports a more informed review."],
      ["How do I arrange a breast surgery consultation in Lahore?", "Use the clinic's WhatsApp appointment link to confirm the current schedule, clinic location and availability before visiting."]
    ]
  },
  "colorectal-cancer-consultation": {
    title: "Colorectal Cancer Consultation",
    short: "Colorectal and gastrointestinal surgical consultation in Lahore",
    intro: "Colorectal cancer affects the colon or rectum. Assessment and treatment planning may involve colonoscopy, biopsy, imaging, pathology review and discussion among relevant specialists. A surgical consultation considers whether an operation may form part of an individual's care.",
    context: "Dr. Zain Tayyab Abbas's CV records experience involving gastrointestinal malignancies, bowel anastomosis and oncological resections. His academic work includes a co-authored retrospective study on signet ring colorectal carcinoma and research involving small bowel tumours and neuroendocrine tumours.",
    topics: [
      ["Understanding colorectal cancer investigations", "Colonoscopy and biopsy can help establish a diagnosis. Imaging and pathology provide further information about the location and extent of disease and are considered together during treatment planning."],
      ["When is colorectal surgery considered?", "Surgery may be considered depending on tumour location, stage, operability, symptoms and the wider treatment plan. The appropriate procedure cannot be determined from a search result or symptom list."],
      ["Bowel surgery and anastomosis", "Some bowel operations involve removing a diseased segment and joining the remaining bowel ends, a connection called an anastomosis. Whether this is appropriate depends on the patient's condition and operative findings."],
      ["Small bowel and neuroendocrine tumour research", "Dr. Abbas's CV lists research work on small bowel tumours and stage IV small bowel neuroendocrine tumours. These academic topics reflect research involvement and should not be interpreted as a guarantee of a particular treatment or outcome."]
    ],
    preparation: ["Colonoscopy report and biopsy or histopathology results", "CT, MRI or other staging scan reports and images", "Previous operation notes and discharge summaries", "Blood test results and current medication list", "Details of previous cancer treatment, if applicable"],
    uniqueTitle: "Why the original colonoscopy and pathology reports matter",
    uniqueText: "A brief diagnosis label does not show the full clinical picture. The site of the lesion, biopsy findings, imaging and previous treatment can affect the surgical discussion. Bringing the original reports helps the clinician review the evidence rather than relying only on a verbal summary.",
    related: ["surgical-oncology", "breast-cancer-consultation", "general-surgery", "laparoscopic-surgery"],
    faqs: [
      ["What is colorectal cancer?", "Colorectal cancer is cancer that begins in the colon or rectum. Diagnosis and treatment planning depend on the exact site, pathology, stage and the patient's overall health."],
      ["Which tests help diagnose colorectal cancer?", "Tests may include colonoscopy with biopsy, pathology review and imaging such as CT or MRI. The treating team determines which investigations are needed for the individual case."],
      ["Does colorectal cancer always require surgery?", "Not every patient follows the same treatment pathway. Surgery may be considered for some cases, while other treatments may be recommended before, after or instead of an operation depending on the diagnosis."],
      ["What is a bowel anastomosis?", "A bowel anastomosis is a surgical connection between two sections of bowel. It may be created after a segment is removed, when clinically appropriate. The decision depends on the patient's condition and operative findings."],
      ["What is a stoma and will I need one?", "A stoma is a surgically created opening that allows bowel contents to leave the body into an external pouch. Whether one is needed depends on the tumour, operation, safety considerations and individual circumstances."],
      ["Why are staging scans important?", "Imaging helps clinicians assess the location and extent of disease and plan further evaluation. The type and timing of scans depend on the diagnosis and clinical pathway."],
      ["What should I bring to a colorectal surgery appointment?", "Bring colonoscopy and biopsy reports, staging scans, previous treatment records, blood tests and a current medication list. Original images are useful where available."],
      ["How can I arrange a colorectal consultation in Lahore?", "Contact the clinic using the appointment WhatsApp link to confirm the current clinic schedule, location and appointment availability."]
    ]
  },
  "endocrine-surgery": {
    title: "Endocrine Surgery",
    short: "Endocrine surgery consultation in Lahore",
    intro: "Endocrine surgery concerns conditions involving hormone-producing glands, including the thyroid and parathyroid glands. A surgical consultation reviews symptoms, examination findings, laboratory tests and imaging to determine whether specialist surgical assessment is appropriate.",
    context: "Dr. Zain Tayyab Abbas lists Endocrine Surgery among his consultation areas. The need for surgery and the specific operation, if any, depend on the confirmed diagnosis and individual assessment.",
    topics: [
      ["Thyroid and neck investigations", "Assessment may include thyroid function blood tests and ultrasound. If a nodule or other finding needs further evaluation, additional tests may be considered according to clinical findings."],
      ["Understanding thyroid nodules", "Thyroid nodules are common and many are not cancerous. Their assessment depends on ultrasound characteristics, size, symptoms, relevant history and, in selected cases, needle sampling."],
      ["Parathyroid conditions", "The parathyroid glands help regulate calcium levels. Blood calcium, parathyroid hormone and other investigations may be reviewed when a parathyroid condition is suspected."],
      ["Planning a surgical opinion", "The decision to consider surgery depends on the diagnosis, symptoms, test results, risks and expected benefits. Patients should receive an explanation of the available options before making a decision."]
    ],
    preparation: ["Thyroid or neck ultrasound report and images", "Thyroid function and calcium blood test results", "Fine needle aspiration or pathology reports, if available", "Previous specialist letters and relevant medical history", "Current medicines and supplements"],
    uniqueTitle: "Keep blood tests and ultrasound results together",
    uniqueText: "Thyroid and parathyroid assessment often relies on more than one type of investigation. Bringing laboratory results alongside the original ultrasound report allows the findings to be reviewed in context and helps identify whether further assessment is needed.",
    related: ["surgical-oncology", "general-surgery", "laparoscopic-surgery", "research"],
    faqs: [
      ["What conditions are assessed in endocrine surgery?", "Endocrine surgery consultations may involve conditions affecting glands such as the thyroid and parathyroid. The reason for referral and appropriate investigations determine the focus of an appointment."],
      ["Does every thyroid nodule need surgery?", "No. Many thyroid nodules do not require an operation. Assessment depends on ultrasound features, symptoms, growth, biopsy findings when indicated and the overall clinical picture."],
      ["What tests should I bring for a thyroid consultation?", "Bring thyroid function blood tests, ultrasound reports and images, and any fine needle aspiration or pathology results. Previous specialist notes are also helpful."],
      ["What is a fine needle aspiration?", "Fine needle aspiration is a procedure that uses a thin needle to collect cells from a thyroid nodule or other lump for laboratory examination. Whether it is needed depends on clinical and ultrasound findings."],
      ["What do the parathyroid glands do?", "The parathyroid glands help regulate calcium levels in the body through parathyroid hormone. Assessment may include calcium and hormone blood tests alongside other investigations."],
      ["When might thyroid surgery be discussed?", "Surgery may be discussed for selected nodules, confirmed or suspected cancer, compressive symptoms or other specific thyroid conditions. The decision requires an individual assessment."],
      ["Will I need to stop my medicines before consultation?", "Do not stop prescribed medicines on your own. Bring a current medication list and ask the clinic or treating doctor if any specific preparation is required."],
      ["How can I book an endocrine surgery consultation in Lahore?", "Use the clinic's WhatsApp appointment link to confirm the current clinic schedule, location and availability before travelling."]
    ]
  },
  "general-surgery": {
    title: "General Surgery",
    short: "General surgery consultation in Lahore",
    intro: "General surgery covers the assessment and operative management of a range of conditions involving the abdomen, digestive system, abdominal wall and soft tissues. A consultation helps clarify the problem, review investigations and discuss whether surgery or another pathway may be appropriate.",
    context: "Dr. Zain Tayyab Abbas holds FCPS in General Surgery. His CV documents experience in elective and emergency general surgical care, including hernia repair, appendectomy, cholecystectomy, laparotomy, wound debridement and post-operative management.",
    topics: [
      ["Abdominal and digestive surgical concerns", "Abdominal pain and digestive symptoms can have many causes. The history, examination and relevant investigations help determine whether a surgical opinion or further assessment is needed."],
      ["Hernia assessment", "A hernia occurs when tissue pushes through a weakened area in the surrounding muscle or connective tissue. Assessment considers the site, symptoms, examination and risk of complications."],
      ["Gallbladder and appendix conditions", "Gallstones, gallbladder inflammation and appendicitis may require medical or surgical assessment. The appropriate pathway depends on symptoms, examination and investigation results."],
      ["Wound care and post-operative review", "Wound concerns and recovery after an operation should be assessed in context, including the type of procedure, healing progress, symptoms and any signs of infection."]
    ],
    preparation: ["Previous consultation notes and discharge summaries", "Ultrasound, CT or other imaging reports", "Blood test results and relevant investigation reports", "Previous operation details, if applicable", "Current medicines, allergies and relevant medical history"],
    uniqueTitle: "Know when a problem needs urgent assessment",
    uniqueText: "Some surgical symptoms can worsen quickly. Severe or rapidly worsening abdominal pain, fainting, persistent vomiting, significant bleeding, or a painful hernia with vomiting or abdominal swelling should not wait for a routine appointment. Seek urgent medical assessment.",
    related: ["laparoscopic-surgery", "surgical-oncology", "endocrine-surgery", "clinics"],
    faqs: [
      ["What conditions does general surgery cover?", "General surgery includes assessment of several conditions involving the abdomen, digestive tract, abdominal wall and soft tissues. The exact scope of an appointment depends on the symptoms and referral."],
      ["When should abdominal pain be assessed by a surgeon?", "Persistent, severe or worsening abdominal pain needs prompt medical assessment. Sudden severe pain or pain with fainting, fever, repeated vomiting or bleeding may require urgent care."],
      ["What is a hernia?", "A hernia occurs when tissue pushes through a weak area in the muscle or connective tissue. A clinician assesses its location, symptoms and whether treatment or surgery should be considered."],
      ["Do all gallstones require surgery?", "No. Management depends on symptoms, complications, imaging and the patient's overall health. A clinician can explain whether observation, further assessment or surgery is appropriate."],
      ["What should I bring to a general surgery consultation?", "Bring previous medical notes, imaging and laboratory reports, operation records if relevant, and a list of medicines and allergies."],
      ["What is laparotomy?", "Laparotomy is an operation that uses an incision in the abdominal wall to access the abdominal cavity. Whether it is needed depends on the condition being treated."],
      ["When should I seek emergency care instead of waiting for an appointment?", "Seek urgent care for severe or rapidly worsening pain, persistent vomiting, fainting, major bleeding, breathing difficulty or other serious acute symptoms. Do not wait for a routine clinic appointment in an emergency."],
      ["How do I arrange a general surgery appointment in Lahore?", "Contact the clinic through the appointment WhatsApp link to confirm the current schedule, location and availability."]
    ]
  },
  "laparoscopic-surgery": {
    title: "Laparoscopic Surgery",
    short: "Laparoscopic surgery consultation in Lahore",
    intro: "Laparoscopic surgery is a minimally invasive approach that uses a camera and specialised instruments through small incisions. It may be suitable for selected conditions, but the safest approach depends on the diagnosis, previous operations, patient health and operative findings.",
    context: "Dr. Zain Tayyab Abbas's CV documents laparotomy, cholecystectomy and other general surgical experience, along with participation in workshops related to safe laparoscopic cholecystectomy and minimally invasive surgery. Suitability for a laparoscopic approach must be assessed individually.",
    topics: [
      ["How laparoscopic surgery is performed", "The surgeon uses a camera and specialised instruments inserted through small incisions to view and operate within the body. The technique and number of incisions depend on the procedure."],
      ["When a minimally invasive approach may be considered", "Laparoscopy may be considered for selected gallbladder, abdominal and other surgical conditions. The decision depends on the diagnosis, anatomy, medical history and available clinical resources."],
      ["Laparoscopic versus open surgery", "Both approaches have potential benefits and risks. The appropriate method depends on the operation required, patient factors, safety and the surgeon's assessment."],
      ["Recovery and preparation", "Recovery varies by procedure and individual health. Patients should receive specific instructions about fasting, medicines, activity, wound care and follow-up from their treating team."]
    ],
    preparation: ["Diagnosis and previous specialist notes", "Ultrasound, CT or other imaging reports", "Previous abdominal operation notes", "Current medicines, allergies and medical history", "Relevant blood tests and pre-operative assessments, if already completed"],
    uniqueTitle: "The smallest incision is not the only measure of a good operation",
    uniqueText: "The choice between laparoscopic and open surgery should prioritise safe and appropriate treatment, not incision size alone. The diagnosis, surgical goals, patient health and findings during an operation all matter when selecting an approach.",
    related: ["general-surgery", "surgical-oncology", "endocrine-surgery", "clinics"],
    faqs: [
      ["What is laparoscopic surgery?", "Laparoscopic surgery is a minimally invasive technique that uses a camera and specialised instruments inserted through small incisions. It is used for selected operations depending on the condition."],
      ["Is laparoscopic surgery suitable for every patient?", "No. Suitability depends on the diagnosis, previous operations, anatomy, general health and the procedure required. The surgeon explains the options after reviewing the case."],
      ["What is the difference between laparoscopic and open surgery?", "Laparoscopic surgery uses a camera and instruments through small incisions, while open surgery uses a larger incision to access the operative area. Each approach has different considerations and risks."],
      ["Does laparoscopic surgery mean faster recovery?", "Some patients may experience a different recovery profile after minimally invasive surgery, but recovery depends on the procedure, health, complications and individual circumstances. No specific recovery time can be guaranteed."],
      ["Can gallbladder surgery be performed laparoscopically?", "Laparoscopic cholecystectomy is a commonly used approach for selected patients requiring gallbladder removal. The treating surgeon determines suitability based on the clinical assessment."],
      ["Will I need general anaesthesia?", "Many laparoscopic operations are performed under general anaesthesia, but the anaesthesia plan depends on the procedure and the patient's health. The surgical and anaesthesia teams provide individual instructions."],
      ["What should I ask before a laparoscopic operation?", "Ask why the operation is recommended, whether an open approach may be needed, the expected benefits and risks, recovery instructions and what follow-up will involve."],
      ["How do I arrange a laparoscopic surgery consultation in Lahore?", "Contact the clinic through the appointment WhatsApp link to confirm the current schedule, location and appointment availability."]
    ]
  },

  "gastric-cancer-information": {
    title: "Gastric Cancer Information",
    short: "Patient information about stomach cancer assessment and surgical treatment planning in Lahore",
    intro: "Gastric cancer, also called stomach cancer, begins in the lining of the stomach. Assessment usually brings together endoscopy, biopsy, imaging and the patient's general health before a treatment plan is discussed.",
    context: "Dr. Zain Tayyab Abbas's CV documents surgical oncology fellowship training and experience in gastrointestinal malignancies. This page is an educational guide to the assessment pathway; it does not confirm that a specific operation is available or appropriate for an individual.",
    topics: [
      ["How gastric cancer is investigated", "Upper gastrointestinal endoscopy allows the stomach lining to be examined and suspicious areas to be sampled. Biopsy establishes the tissue diagnosis; imaging may then help assess the extent of disease."],
      ["Why staging matters", "The stage, tumour location, pathology, fitness for treatment and involvement of nearby structures influence the options considered. The treating team may discuss surgery, systemic treatment, or a sequence of treatments."],
      ["When surgery may be considered", "For selected patients, an operation to remove part or all of the stomach may be discussed as part of a wider plan. The decision depends on staging, resectability, expected benefit and the patient's preferences."],
      ["Preparing for a specialist discussion", "Bring endoscopy and biopsy reports, staging scans, blood tests, previous treatment summaries and a list of current medicines. Ask which specialists should be involved in the next decision."]
    ],
    preparation: ["Upper GI endoscopy report and biopsy result", "CT or other staging scan reports and images", "Previous oncology or surgical notes", "Recent blood tests and current medicines", "Discharge summaries and relevant medical history"],
    uniqueTitle: "Keep endoscopy, pathology and staging records together",
    uniqueText: "The endoscopy report identifies where a sample was taken, while pathology describes the tissue and imaging helps assess the extent of disease. Reviewing these records together gives the clinical team a more complete starting point.",
    related: ["surgical-oncology", "colorectal-cancer-consultation", "laparoscopic-surgery", "research"],
    faqs: [
      ["What is gastric cancer?", "Gastric cancer is cancer that starts in the stomach. Diagnosis and treatment planning depend on biopsy findings, tumour location, stage and overall health."],
      ["Which test confirms stomach cancer?", "A biopsy taken during upper GI endoscopy is commonly used to establish the tissue diagnosis. Other tests may be needed to assess the extent of disease."],
      ["Does every patient with gastric cancer need surgery?", "No. Treatment depends on stage, tumour features, health and the expected benefit of an operation. Some patients need other treatments or a different care approach."],
      ["What should I bring to a gastric cancer consultation?", "Bring endoscopy and biopsy reports, staging scans, blood tests, previous treatment records and a current medication list."],
      ["Can treatment include chemotherapy and surgery?", "Some treatment plans combine systemic treatment and surgery. The sequence depends on the individual diagnosis and multidisciplinary assessment."],
      ["Who decides whether an operation is suitable?", "The treating specialists review pathology, imaging, fitness for treatment and the patient's goals before discussing options."],
      ["Is this page a diagnosis or treatment recommendation?", "No. It is general educational information and cannot replace an assessment by the treating clinical team."],
      ["How can I arrange an appointment in Lahore?", "Contact the clinic through the WhatsApp appointment link to confirm the current schedule and availability."]
    ]
  },
  "thyroid-cancer-information": {
    title: "Thyroid Cancer Information",
    short: "Patient information about thyroid nodules, biopsy and thyroid cancer assessment in Lahore",
    intro: "Thyroid cancer assessment starts with understanding a thyroid lump or nodule, relevant symptoms, ultrasound features and, when indicated, a needle sample. Not every thyroid nodule is cancer and not every nodule requires an operation.",
    context: "Dr. Zain Tayyab Abbas lists Endocrine Surgery among his consultation areas. This page explains common assessment steps and should not be read as confirmation of an individual diagnosis or a specific procedure.",
    topics: [
      ["Thyroid ultrasound and risk assessment", "Ultrasound describes the size and appearance of a nodule and its relationship to surrounding structures. The findings help clinicians decide whether monitoring or further tests may be appropriate."],
      ["Fine needle aspiration and pathology", "When indicated, fine needle aspiration collects cells from a nodule for laboratory assessment. The result is interpreted alongside ultrasound findings and clinical history."],
      ["Treatment discussions", "Options may include observation, additional testing or surgery, depending on the diagnosis and risk assessment. The extent of any operation is an individual clinical decision."],
      ["After a thyroid diagnosis", "Patients may need discussion about pathology, thyroid hormone levels, possible treatment, follow-up and whether other specialists should be involved."]
    ],
    preparation: ["Thyroid ultrasound report and images", "Fine needle aspiration or pathology report, if performed", "TSH and other thyroid blood test results", "Previous neck imaging and specialist letters", "Current medicines and relevant medical history"],
    uniqueTitle: "Ultrasound and cytology should be interpreted together",
    uniqueText: "A nodule's appearance on ultrasound and the result of a needle sample provide different information. Their combined interpretation, together with symptoms and history, guides the next step.",
    related: ["endocrine-surgery", "surgical-oncology", "general-surgery", "clinics"],
    faqs: [
      ["Are all thyroid nodules cancerous?", "No. Thyroid nodules are common and many are benign. Assessment depends on ultrasound features, clinical history and tests when indicated."],
      ["What is a thyroid fine needle aspiration?", "It is a procedure that uses a thin needle to collect cells from a thyroid nodule for laboratory examination."],
      ["Does thyroid cancer always require surgery?", "Treatment depends on the type and extent of disease and individual risk factors. A specialist explains the options after reviewing the results."],
      ["What tests should I bring?", "Bring thyroid ultrasound images and report, thyroid blood tests, needle sampling results and previous specialist notes."],
      ["Can a thyroid nodule be monitored?", "Some nodules can be monitored rather than treated immediately. The decision depends on their features, symptoms and clinical assessment."],
      ["What is the role of thyroid blood tests?", "Blood tests help assess thyroid function, although they do not by themselves determine whether a nodule is cancerous."],
      ["Will I need lifelong medication after thyroid surgery?", "Medication needs depend on the type and extent of surgery and the patient's thyroid function. The treating clinician will explain the likely plan."],
      ["How do I arrange an endocrine consultation in Lahore?", "Use the clinic WhatsApp link to confirm appointment availability and clinic timings."]
    ]
  },
  "ovarian-cancer-information": {
    title: "Ovarian Cancer Information",
    short: "Patient guide to ovarian cancer investigations and specialist treatment planning",
    intro: "Ovarian cancer assessment may involve symptoms and examination, pelvic imaging, blood tests and tissue diagnosis where appropriate. The exact pathway depends on the suspected diagnosis and clinical findings.",
    context: "Dr. Zain Tayyab Abbas's CV lists academic work involving ovarian tumours, including immature ovarian teratoma and mucinous borderline ovarian tumours. These research topics are not a claim of a particular subspecialist service or treatment outcome.",
    topics: [
      ["Symptoms and initial assessment", "Persistent bloating, abdominal or pelvic discomfort, early fullness or changes in urinary habits can have many causes. Ongoing or concerning symptoms should be assessed by a qualified clinician."],
      ["Imaging and blood tests", "Pelvic ultrasound and other imaging may help assess an ovarian mass. Blood tests can contribute to evaluation but are not a diagnosis on their own."],
      ["Why pathology is important", "The type of ovarian tumour and its behaviour are determined through specialist pathology. The appropriate timing and method of tissue diagnosis depend on the clinical situation."],
      ["Planning care with the right specialists", "Treatment planning may involve gynaecological oncology, radiology, pathology and medical oncology. The team considers tumour type, stage, fitness and the patient's priorities."]
    ],
    preparation: ["Pelvic ultrasound, CT or MRI reports and images", "Relevant blood test results", "Previous operation and pathology reports", "Referral letters and treatment summaries", "Current medicines and medical history"],
    uniqueTitle: "Ovarian masses are not all the same",
    uniqueText: "Ovarian masses include different benign, borderline and malignant conditions. Imaging, clinical history and pathology help distinguish these categories and guide appropriate specialist referral.",
    related: ["surgical-oncology", "general-surgery", "research", "clinics"],
    faqs: [
      ["Does every ovarian cyst mean cancer?", "No. Many ovarian cysts and masses are benign. Their assessment depends on symptoms, age, imaging and clinical history."],
      ["Which scans are used to assess an ovarian mass?", "Ultrasound is commonly used initially; CT or MRI may be considered depending on the findings and clinical question."],
      ["Can a blood test diagnose ovarian cancer?", "Blood tests may support assessment but cannot independently confirm or exclude ovarian cancer."],
      ["Why is the exact tumour type important?", "Different ovarian tumours behave differently and may require different management. Pathology is important in establishing the diagnosis."],
      ["Which specialist should assess suspected ovarian cancer?", "The appropriate specialist pathway depends on the clinical findings and local referral arrangements. A clinician can help coordinate referral."],
      ["What records should I bring?", "Bring imaging reports and images, blood tests, previous operation notes and any pathology or referral documents."],
      ["Is ovarian cancer treatment always surgery?", "No. Treatment depends on tumour type, stage and the patient's circumstances and may involve more than one treatment modality."],
      ["How can I request an appointment?", "Contact the clinic through WhatsApp to confirm whether the consultation pathway is appropriate and check availability."]
    ]
  },
  "uterine-cancer-information": {
    title: "Uterine Cancer Information",
    short: "Patient information about uterine and endometrial cancer assessment",
    intro: "Uterine cancer often refers to cancer arising from the lining of the uterus, called the endometrium. Abnormal bleeding, especially after menopause, needs medical assessment rather than self-diagnosis.",
    context: "This page provides general information about the diagnostic pathway. Dr. Zain Tayyab Abbas's CV does not establish a dedicated gynaecological oncology service; patients should be directed to the appropriate gynaecology or gynaecological oncology team.",
    topics: [
      ["Symptoms that need assessment", "Unusual vaginal bleeding, including bleeding after menopause, should be assessed promptly by a qualified healthcare professional. Many causes are not cancer, but investigation is important."],
      ["How diagnosis is investigated", "Assessment may include pelvic examination, ultrasound and sampling of the uterine lining. The clinician determines which tests are appropriate."],
      ["Understanding pathology and staging", "The tissue sample helps identify the diagnosis and tumour features. Further investigations may be used to understand the extent of disease."],
      ["Referral and treatment planning", "Management depends on pathology, stage and individual health. Referral to a gynaecologist or gynaecological oncologist may be needed to discuss treatment options."]
    ],
    preparation: ["Pelvic ultrasound and other imaging reports", "Endometrial biopsy or histopathology report", "Previous gynaecology letters and treatment records", "Current medicines and relevant medical history", "A note of symptoms and when they began"],
    uniqueTitle: "Do not ignore postmenopausal bleeding",
    uniqueText: "Bleeding after menopause should always be discussed with a healthcare professional. It does not automatically mean cancer, but it requires appropriate assessment to identify the cause.",
    related: ["surgical-oncology", "research", "clinics"],
    faqs: [
      ["What is uterine or endometrial cancer?", "Endometrial cancer begins in the lining of the uterus. Other uterine cancers are less common and have different features."],
      ["Is bleeding after menopause a warning sign?", "It can have several causes, but it should always be assessed by a healthcare professional."],
      ["How is endometrial cancer diagnosed?", "Diagnosis commonly involves sampling the uterine lining and examining the tissue in a laboratory."],
      ["Does an ultrasound confirm uterine cancer?", "Ultrasound can help assess the uterus but tissue sampling is often needed to establish a diagnosis."],
      ["Which specialist manages uterine cancer?", "A gynaecologist or gynaecological oncologist is commonly involved. The appropriate referral depends on the diagnosis and local services."],
      ["What should I bring to an appointment?", "Bring imaging, biopsy results, previous clinic letters, medication details and a timeline of symptoms."],
      ["Is surgery always required?", "Treatment depends on the exact diagnosis, stage and health of the patient. The specialist team explains the available options."],
      ["How can I seek a referral?", "Contact your treating clinician or clinic to confirm the appropriate specialist pathway."]
    ]
  },
  "testicular-cancer-information": {
    title: "Testicular Cancer Information",
    short: "Patient information about testicular lumps and cancer assessment",
    intro: "A new lump, swelling or change in a testicle needs prompt medical assessment. Many causes are not cancer, but examination and appropriate tests are important to establish the cause.",
    context: "This is an educational information page, not a claim that Dr. Zain Tayyab Abbas provides urological cancer surgery. Suspected testicular cancer is generally assessed through an appropriate urology pathway.",
    topics: [
      ["Recognising a change", "A painless lump, swelling, heaviness or change in the size or feel of a testicle should be checked. Sudden severe testicular pain is an emergency and needs immediate medical care."],
      ["Ultrasound and blood markers", "A clinician may arrange a testicular ultrasound and blood tests for tumour markers. These tests contribute to assessment but must be interpreted by the treating team."],
      ["Why specialist referral matters", "Urology specialists assess suspected testicular cancer and determine the appropriate diagnostic and treatment pathway based on examination and investigation results."],
      ["Preparing for assessment", "Bring ultrasound reports, blood test results, previous medical records and details of when the change was first noticed."]
    ],
    preparation: ["Testicular ultrasound report and images", "Tumour marker and other blood test results, if performed", "Previous urology or emergency department notes", "Current medicines and medical history", "A brief timeline of symptoms"],
    uniqueTitle: "A painless lump still needs medical review",
    uniqueText: "The absence of pain does not reliably establish that a testicular lump is harmless. Prompt assessment is important even when a lump is painless.",
    related: ["surgical-oncology", "general-surgery", "clinics"],
    faqs: [
      ["Can testicular cancer be painless?", "Yes. Some testicular cancers present as a painless lump or swelling, so a painless change should still be assessed."],
      ["What should I do if I find a testicular lump?", "Arrange prompt assessment by a qualified healthcare professional. Do not wait for pain to develop."],
      ["Which test is used first?", "A clinician commonly arranges a physical examination and ultrasound, with blood tests where indicated."],
      ["Are all testicular lumps cancer?", "No. There are several possible causes, but examination and investigation are needed to determine the cause."],
      ["Which specialist should I see?", "A urologist is generally involved in assessing suspected testicular cancer."],
      ["What if I have sudden severe testicular pain?", "Seek emergency medical care immediately; sudden severe testicular pain can indicate a time-critical condition."],
      ["What should I bring to the appointment?", "Bring ultrasound images and reports, blood tests and previous medical notes."],
      ["Can this website diagnose a testicular lump?", "No. Online information cannot diagnose a lump. A clinical examination and appropriate tests are required."]
    ]
  },
  "esophageal-cancer-information": {
    title: "Esophageal Cancer Information",
    short: "Patient information about oesophageal cancer symptoms, diagnosis and treatment planning",
    intro: "Oesophageal cancer affects the tube that carries food from the mouth to the stomach. Difficulty swallowing, progressive food sticking or unexplained weight loss requires medical assessment.",
    context: "Dr. Zain Tayyab Abbas's CV documents surgical oncology fellowship training and experience in gastrointestinal malignancies. This page explains general assessment concepts and does not promise a specific oesophageal cancer procedure or treatment pathway.",
    topics: [
      ["Symptoms and early assessment", "Progressive difficulty swallowing, painful swallowing, persistent reflux symptoms or unexplained weight loss should be discussed with a clinician. These symptoms can have causes other than cancer."],
      ["Endoscopy and biopsy", "Upper GI endoscopy allows the oesophagus to be examined and suspicious tissue to be sampled. Biopsy is used to establish the tissue diagnosis."],
      ["Staging and treatment planning", "Imaging and other investigations help assess the extent of disease. The treatment plan depends on tumour location, stage, pathology and the patient's fitness."],
      ["A coordinated specialist approach", "Care may involve gastroenterology, surgical oncology, medical oncology, radiation oncology, radiology and pathology. The appropriate team depends on local referral pathways."]
    ],
    preparation: ["Endoscopy report and biopsy or histopathology result", "CT, PET or other imaging reports and images", "Previous treatment summaries", "Recent blood tests and medication list", "Referral letters and relevant medical history"],
    uniqueTitle: "Progressive swallowing difficulty needs assessment",
    uniqueText: "A worsening ability to swallow, especially when accompanied by weight loss, should not be ignored. Timely assessment helps identify the cause and determine whether specialist investigations are needed.",
    related: ["surgical-oncology", "gastric-cancer-information", "colorectal-cancer-consultation", "research"],
    faqs: [
      ["What is oesophageal cancer?", "It is cancer arising in the oesophagus, the tube that carries food from the throat to the stomach."],
      ["What symptoms need assessment?", "Progressive difficulty swallowing, painful swallowing and unexplained weight loss should be assessed by a healthcare professional."],
      ["How is oesophageal cancer diagnosed?", "Upper GI endoscopy with biopsy is commonly used to establish the tissue diagnosis."],
      ["Why are staging scans needed?", "Imaging helps assess the extent of disease and contributes to treatment planning."],
      ["Does every patient need an operation?", "No. Treatment depends on tumour type, location, stage and fitness. Some patients receive other treatments or combined approaches."],
      ["Which specialists may be involved?", "The team may include gastroenterology, oncology, surgery, radiology, radiation oncology and pathology."],
      ["What should I bring to a consultation?", "Bring endoscopy and biopsy reports, scan images, previous treatment records and current medicines."],
      ["What if swallowing suddenly becomes impossible?", "Seek urgent medical care, especially if you cannot swallow liquids or saliva or have breathing difficulty."]
    ]
  },
  "sarcoma-information": {
    title: "Sarcoma Information",
    short: "Patient information about soft tissue and bone sarcoma assessment",
    intro: "Sarcomas are uncommon cancers that arise in bone or soft tissues such as muscle, fat, nerves and connective tissue. A growing or unexplained lump needs appropriate assessment, particularly before any procedure to remove it.",
    context: "This page is a general educational guide. Sarcoma diagnosis and treatment are specialised and often require referral to a multidisciplinary sarcoma team; it does not claim a dedicated sarcoma service by Dr. Zain Tayyab Abbas.",
    topics: [
      ["Why a growing lump should be assessed", "A lump that is enlarging, deep, painful or larger than expected should be reviewed by a clinician. Many lumps are benign, but clinical assessment determines whether imaging or referral is needed."],
      ["Imaging and biopsy planning", "MRI or other imaging may be used to define the location and extent of a suspected soft tissue tumour. Biopsy planning is important and should be coordinated with the team that may provide definitive treatment."],
      ["Understanding pathology", "Sarcoma includes many different tumour types. Specialist pathology review can be important because subtype and grade influence treatment planning."],
      ["Multidisciplinary care", "Management may involve sarcoma surgery, medical oncology, radiation oncology, radiology, pathology and rehabilitation. Referral to an experienced specialist team is important."]
    ],
    preparation: ["MRI, CT or other imaging reports and images", "Biopsy and pathology reports, if already performed", "Previous operation notes", "Referral letters and treatment summaries", "Current medicines and relevant medical history"],
    uniqueTitle: "Do not arrange removal of a suspicious lump without a plan",
    uniqueText: "For a suspected sarcoma, the location and route of a biopsy or operation can affect later treatment. Seek specialist advice before an unplanned excision of a deep or enlarging mass.",
    related: ["surgical-oncology", "general-surgery", "research", "clinics"],
    faqs: [
      ["What is a sarcoma?", "A sarcoma is a cancer that begins in bone or soft tissues such as muscle, fat or connective tissue."],
      ["Are all soft tissue lumps sarcomas?", "No. Most lumps are not sarcomas, but a growing or concerning lump should be assessed."],
      ["Which scan is used for a suspected soft tissue sarcoma?", "MRI is often used for soft tissue assessment, while the appropriate imaging depends on the site and clinical question."],
      ["Should a lump be removed before a diagnosis?", "Do not arrange an unplanned removal of a suspicious deep or enlarging lump. Specialist assessment and biopsy planning are important."],
      ["Why is specialist pathology review important?", "Sarcomas include many subtypes, and accurate classification helps guide the treatment plan."],
      ["Who treats sarcoma?", "Care is commonly coordinated by a specialist multidisciplinary team with surgical, oncology, radiology and pathology expertise."],
      ["What should I bring to a consultation?", "Bring all imaging, biopsy results, previous operation notes and referral letters."],
      ["Can this page tell me whether my lump is cancer?", "No. Diagnosis requires individual clinical assessment and appropriate investigations."]
    ]
  },
  "gallbladder-surgery-information": {
    title: "Gallbladder Surgery Information",
    short: "Patient information about gallstones, gallbladder symptoms and surgical assessment",
    intro: "Gallstones may cause no symptoms or lead to episodes of pain and complications such as inflammation. A surgical assessment reviews symptoms, ultrasound findings and blood tests before discussing whether an operation is appropriate.",
    context: "Dr. Zain Tayyab Abbas's CV documents experience in cholecystectomy and laparoscopic surgery. The approach and timing of any operation depend on the patient's diagnosis, risks and clinical findings.",
    topics: [
      ["Gallstones and symptoms", "Gallstones can cause pain in the upper abdomen, often after meals, but abdominal pain has many possible causes. Severe or persistent pain, fever or jaundice needs urgent medical assessment."],
      ["Ultrasound and blood tests", "Ultrasound is commonly used to identify gallstones and assess the gallbladder. Blood tests may be needed when inflammation or bile duct problems are suspected."],
      ["When gallbladder removal is discussed", "Surgery may be considered for symptomatic gallstones or certain complications. The risks and benefits depend on symptoms, medical history and investigation findings."],
      ["Laparoscopic and open approaches", "Many gallbladder operations are started laparoscopically, but the safest approach depends on anatomy, inflammation and operative findings. A surgeon can explain the possibility of changing approach."]
    ],
    preparation: ["Abdominal ultrasound report and images", "Liver function and other relevant blood tests", "Previous emergency or hospital discharge summaries", "Current medicines and allergies", "Details of pain episodes and associated symptoms"],
    uniqueTitle: "Fever or jaundice changes the urgency",
    uniqueText: "Abdominal pain with fever, yellowing of the eyes or skin, repeated vomiting or severe persistent symptoms needs urgent medical assessment rather than waiting for a routine appointment.",
    related: ["general-surgery", "laparoscopic-surgery", "surgical-oncology", "clinics"],
    faqs: [
      ["Do all gallstones need surgery?", "No. Treatment depends on symptoms, complications and individual health. Some gallstones do not require an operation."],
      ["How are gallstones diagnosed?", "Ultrasound is commonly used, with blood tests or further imaging when clinically indicated."],
      ["What symptoms need urgent care?", "Severe persistent pain, fever, jaundice or repeated vomiting should prompt urgent medical assessment."],
      ["What is a cholecystectomy?", "A cholecystectomy is an operation to remove the gallbladder."],
      ["Is gallbladder surgery always laparoscopic?", "Laparoscopy is commonly used, but the safest approach depends on the patient's condition and operative findings."],
      ["What should I bring to a consultation?", "Bring ultrasound reports and images, blood tests, discharge summaries and a current medication list."],
      ["Can gallstones cause jaundice?", "A stone affecting the bile duct can cause jaundice and requires prompt medical assessment."],
      ["How can I book a consultation?", "Contact the clinic by WhatsApp to confirm the schedule and appointment availability."]
    ]
  },
  "hernia-information": {
    title: "Hernia Information",
    short: "Patient information about hernia symptoms, assessment and repair options",
    intro: "A hernia occurs when tissue pushes through a weak area in the muscle or connective tissue. The type, size, symptoms and risk of complications help determine whether monitoring or surgical repair should be discussed.",
    context: "Dr. Zain Tayyab Abbas's CV documents experience in hernia repair and general surgery. The appropriate management plan depends on examination, patient health and the specific hernia.",
    topics: [
      ["Common hernia symptoms", "A hernia may appear as a bulge that becomes more noticeable when standing, coughing or straining. Some hernias cause discomfort, while others may have few symptoms."],
      ["Clinical examination and imaging", "Many hernias can be assessed by examination. Ultrasound or other imaging may be requested when the diagnosis or anatomy is unclear."],
      ["When repair may be considered", "Surgery may be discussed for symptomatic hernias or where there is concern about complications. The decision depends on hernia type, symptoms, health and individual risks."],
      ["Open and minimally invasive repair", "Hernia repair may be performed using open or minimally invasive techniques in selected cases. The best approach depends on the hernia, previous operations, anatomy and surgeon assessment."]
    ],
    preparation: ["Previous ultrasound or CT reports, if available", "Previous hernia or abdominal operation notes", "Current medicines and allergies", "Relevant medical conditions", "A note of symptoms and when the bulge appears"],
    uniqueTitle: "A painful, stuck hernia can be an emergency",
    uniqueText: "A hernia bulge that becomes suddenly painful, firm or cannot be pushed back, especially with vomiting or abdominal swelling, needs urgent emergency assessment.",
    related: ["general-surgery", "laparoscopic-surgery", "clinics"],
    faqs: [
      ["What causes a hernia?", "A hernia develops when tissue pushes through a weak area in the muscle or connective tissue. Factors vary by hernia type."],
      ["Does every hernia need an operation?", "Not every hernia requires immediate surgery. Management depends on the type, symptoms, risk and individual circumstances."],
      ["Can a hernia disappear on its own?", "A hernia generally does not repair itself. A clinician can explain whether monitoring or surgery should be considered."],
      ["What are warning signs of a complication?", "Sudden pain, a firm or stuck bulge, vomiting or abdominal swelling requires urgent medical assessment."],
      ["Is laparoscopic hernia repair possible?", "It may be an option for selected hernias. Suitability depends on the hernia, anatomy, previous surgery and patient factors."],
      ["What should I bring to a hernia consultation?", "Bring previous imaging, operation notes, medication details and information about symptoms."],
      ["Can exercise make a hernia worse?", "Activity advice depends on the hernia and symptoms. Ask a clinician for guidance specific to your condition."],
      ["How can I arrange a consultation in Lahore?", "Contact the clinic using the WhatsApp appointment link to confirm timings and availability."]
    ]
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Surgical Consultation in Lahore" };
  return {
    title: service.title + " Consultation in Lahore",
    description: service.short + ". Learn about assessment, relevant clinical background, appointment preparation and frequently asked questions.",
    alternates: { canonical: "/specialties/" + slug }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return <Shell><main><PageHero eyebrow="Specialties" title="Specialty information" lead="Please explore our consultation areas." /></main></Shell>;

  const linkLabels: Record<string, string> = {
    "surgical-oncology": "Surgical oncology consultation",
    "breast-cancer-consultation": "breast cancer consultation",
    "colorectal-cancer-consultation": "colorectal cancer consultation",
    "endocrine-surgery": "endocrine surgery consultation",
    "general-surgery": "general surgery consultation",
    "laparoscopic-surgery": "laparoscopic surgery consultation",
    "research": "research and publications",
    "clinics": "clinic locations and timings"
  };

  return (
    <Shell>
      <main>
        <PageHero eyebrow="Clinical consultation · Lahore" title={service.title + " in Lahore"} lead={service.intro} />
        <section className="section section-white">
          <div className="container content-grid">
            <article className="prose">
              <div className="eyebrow">Clinical context</div>
              <h2>What this consultation covers</h2>
              <p>{service.context}</p>
              <h3>Individual assessment and diagnosis</h3>
              <p>{service.topics[0][1]}</p>
              <h3>Understanding available treatment pathways</h3>
              <p>{service.topics[1][1]}</p>
              <h2>Clinical topics patients may need to understand</h2>
              <h3>{service.topics[2][0]}</h3>
              <p>{service.topics[2][1]}</p>
              <h3>{service.topics[3][0]}</h3>
              <p>{service.topics[3][1]}</p>
              <h2>Preparing for a specialist consultation</h2>
              <h3>Records and reports to bring</h3>
              <ul>{service.preparation.map((item) => <li key={item}>{item}</li>)}</ul>
              <h3>Questions to discuss with the doctor</h3>
              <ul>
                <li>What does my diagnosis or investigation result mean?</li>
                <li>Are further tests or specialist opinions needed?</li>
                <li>What options are relevant to my individual condition?</li>
                <li>What are the expected benefits, risks and follow-up requirements?</li>
              </ul>
              <h2>{service.uniqueTitle}</h2>
              <h3>Why this information is relevant</h3>
              <p>{service.uniqueText}</p>
              <h3>How to use this information during your appointment</h3>
              <p>Use these points to organise your reports and questions before meeting the doctor. The consultation should focus on your own diagnosis, findings and preferences.</p>
              <h2>Related clinical information</h2>
              <h3>Explore connected consultation topics</h3>
              <p>Explore related areas to understand how different surgical consultations connect. Each patient's care pathway is based on their own clinical findings.</p>
              <h3>Academic and clinic information</h3>
              <p>Review the doctor's <Link href="/research">research and publications</Link> or check the <Link href="/clinics">clinic locations and timings</Link> before requesting an appointment.</p>
              <ul>{service.related.map((item) => <li key={item}><Link href={item === "research" || item === "clinics" ? "/" + item : "/specialties/" + item}>{linkLabels[item] ?? item}</Link></li>)}</ul>
              <p className="small-note">This page provides general educational information and describes professional background documented in the doctor's CV. It does not establish a diagnosis, guarantee that a procedure is available or suitable, or replace an individual medical consultation. In an emergency, seek urgent medical care.</p>
            </article>
            <aside className="contact-aside">
              <span className="clinic-index">APPOINTMENTS</span>
              <h3>Arrange a consultation</h3>
              <p>Contact the clinic to confirm the current appointment schedule, location and availability.</p>
              <a className="button" href="https://wa.me/923705978093">WhatsApp the clinic ↗</a>
              <hr />
              <strong>Clinic locations</strong>
              <p>Iqraa Medical Complex<br />Johar Town, Lahore</p>
              <p>Tayyab Medical &amp; Dental Complex<br />Valencia Town, Lahore</p>
              <Link className="under-link" href="/clinics">View clinic timings ↗</Link>
            </aside>
          </div>
        </section>
        <CTA />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
          "@context":"https://schema.org",
          "@type":"FAQPage",
          "mainEntity":service.faqs.map(([question,answer])=>({
            "@type":"Question",
            "name":question,
            "acceptedAnswer":{"@type":"Answer","text":answer}
          }))
        })}} />
        <section className="section">
          <div className="container">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about {service.title.toLowerCase()}</h2>
            <div className="related-grid">
              {service.faqs.map(([question, answer]) => (
                <article className="related-card" key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
