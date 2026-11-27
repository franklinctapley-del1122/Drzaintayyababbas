import Link from "next/link";
import { Shell, CTA } from "../components";

export const metadata = {
  title: "Patient Education Blog | Surgical Oncology & Endocrine Surgery in Lahore",
  description: "Patient-friendly educational articles and practical guides about surgical oncology, breast and colorectal cancer, thyroid conditions and general surgery in Lahore.",
  keywords: ["Surgical Oncology Blog Lahore", "Endocrine Surgery Articles Lahore", "Cancer Patient Education Pakistan", "Thyroid Surgery Information Lahore"],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Patient Education Blog | Dr. Zain Tayyab Abbas",
    description: "Clear, patient-friendly information about surgical oncology, endocrine surgery and general surgical conditions.",
    url: "/blog",
    type: "website"
  }
};

const articles = [
  { category: "Surgical Oncology", read: "Patient guide", title: "Understanding a surgical oncology consultation", excerpt: "What to expect during an appointment, which reports may be useful and how treatment discussions are approached.", href: "/blog/surgical-oncology-consultation", tone: "blog-art-oncology", tag: "Cancer care" },
  { category: "Breast Health", read: "Patient guide", title: "Breast lump assessment: tests and next steps", excerpt: "A practical overview of clinical assessment, imaging, biopsy reports and questions patients may wish to ask.", href: "/blog/breast-lump-assessment", tone: "blog-art-breast", tag: "Breast" },
  { category: "Endocrine Surgery", read: "Patient guide", title: "Thyroid nodules: understanding the assessment", excerpt: "Learn about common investigations used to evaluate thyroid nodules and when specialist review may be recommended.", href: "/blog/thyroid-nodules-assessment", tone: "blog-art-thyroid", tag: "Thyroid" },
  { category: "Colorectal Health", read: "Patient guide", title: "Preparing for a colorectal specialist appointment", excerpt: "A checklist of medical history, symptoms and reports that can help make a consultation more useful.", href: "/blog/colorectal-consultation-preparation", tone: "blog-art-colorectal", tag: "Colorectal" },
  { category: "General Surgery", read: "Patient guide", title: "When should a hernia be assessed by a surgeon?", excerpt: "An introduction to hernias, common symptoms and why an individual clinical assessment matters.", href: "/blog/when-to-have-a-hernia-assessed", tone: "blog-art-general", tag: "General surgery" },
  { category: "Patient Resources", read: "Checklist", title: "What to bring to your surgical consultation", excerpt: "A simple preparation list covering previous prescriptions, imaging, pathology and laboratory reports.", href: "/blog/prepare-for-surgical-consultation", tone: "blog-art-checklist", tag: "Appointments" }
];

const categories = ["All topics", "Surgical Oncology", "Breast Health", "Endocrine Surgery", "Colorectal Health", "General Surgery", "Patient Resources"];

export default function BlogPage() {
  return <Shell><main className="blog-page">
    <section className="blog-hero"><div className="container blog-hero-grid"><div className="blog-hero-copy"><div className="eyebrow">The patient education journal · Lahore</div><h1>Clear information.<br/><em>More confident conversations.</em></h1><p>Explore accessible guides about surgical oncology, endocrine surgery and general surgical conditions. Our aim is to help patients prepare for informed discussions with their healthcare team.</p><div className="blog-hero-meta"><span>MEDICAL EDUCATION</span><i/> <span>REVIEWED FOR CLARITY</span></div></div><div className="blog-hero-art" aria-hidden="true"><div className="blog-orbit blog-orbit-one"/><div className="blog-orbit blog-orbit-two"/><div className="blog-hero-symbol">+</div><div className="blog-hero-note"><span>READ · LEARN · PREPARE</span><strong>Patient-first<br/>health information</strong></div></div></div></section>
    <section className="blog-intro"><div className="container blog-intro-inner"><div><span className="eyebrow">Explore the journal</span><h2>Health topics, explained simply.</h2></div><p>These educational resources are intended to support—not replace—a consultation, diagnosis or treatment advice from a qualified healthcare professional.</p></div></section>
    <section className="blog-listing"><div className="container"><div className="blog-listing-head"><div><span className="eyebrow">Browse articles</span><h2>Latest patient guides</h2></div><span className="blog-count">06 ARTICLES</span></div><div className="blog-category-list" aria-label="Article topics">{categories.map((c,i)=><span className={i===0?"blog-category active":"blog-category"} key={c}>{c}</span>)}</div><div className="blog-card-grid">{articles.map((a,i)=><article className="blog-card" key={a.title}><Link href={a.href} className={"blog-card-art "+a.tone} aria-label={"Read "+a.title}><span className="blog-card-index">0{i+1}</span><span className="blog-art-mark">{i===0?"✳":i===1?"♡":i===2?"◇":i===3?"◎":i===4?"＋":"✓"}</span><span className="blog-art-caption">DR. ZAIN TAYYAB ABBAS <b>·</b> LAHORE</span></Link><div className="blog-card-body"><div className="blog-card-meta"><span>{a.category}</span><span>{a.read}</span></div><h3><Link href={a.href}>{a.title}</Link></h3><p>{a.excerpt}</p><Link className="blog-read-link" href={a.href}>Read patient guide <b>↗</b></Link></div></article>)}</div></div></section>
    <section className="blog-disclaimer"><div className="container blog-disclaimer-inner"><span className="blog-disclaimer-icon">i</span><div><strong>Important medical information</strong><p>Articles on this website provide general educational information. They do not establish a doctor–patient relationship and should not be used to self-diagnose or delay urgent medical care. Your care plan should be based on an individual assessment.</p></div></div></section>
    <CTA/>
  </main></Shell>;
}