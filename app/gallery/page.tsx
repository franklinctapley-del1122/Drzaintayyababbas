import type { Metadata } from "next";
import { Shell, PageHero, CTA } from "../components";

export const metadata: Metadata = {
  title: "Clinical & Professional Gallery | Dr. Zain Tayyab Abbas",
  description: "A visual gallery of clinical environments and healthcare settings related to surgical care in Lahore.",
  alternates: { canonical: "/gallery" },
};

const images = [
  { src: "https://srm-hospitals.s3.ap-south-1.amazonaws.com/Speciality-images/General-Surgery.webp", alt: "Surgeons performing an operation beneath operating theatre lights", caption: "Surgical team at work" },
  { src: "https://media.fluke.com/eeb5ef91-63a7-4e96-aa34-b108002cb02d_original__size.jpg", alt: "Surgeons working around a patient in a modern operating theatre", caption: "Operating theatre environment" },
  { src: "https://www.hopkinsmedicine.org/-/media/images/articles/2018/07/geriatric-surgery-640x640.jpeg", alt: "Operating room team working together during surgery", caption: "Coordinated surgical care" },
  { src: "https://static.wixstatic.com/media/04b70ad4e4af4a9290c1769bf2b63030.jpg/v1/fit/w_2500%2Ch_1330%2Cal_c/04b70ad4e4af4a9290c1769bf2b63030.jpg", alt: "Surgical team preparing and performing an operation", caption: "Teamwork in the operating room" },
  { src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85", alt: "Surgical team performing an operation in a hospital theatre", caption: "Surgical oncology theatre" },
  { src: "https://www.clinicbarcelona.org/uploads/media/default/0021/72/3130ca282b7cb8b37fa7dec95a9fa207953da8bd.jpg", alt: "Surgeons and assistants working together during an operation", caption: "Modern operative care" },
];

export default function GalleryPage() {
  return <Shell><main>
    <section className="gallery-title-band"><div className="container"><h1>Image <span>Gallery</span></h1><div className="gallery-breadcrumb"><a href="/">⌂ Home</a><span>›</span><span>Gallery</span><span>›</span><strong>Images</strong></div></div></section>
    <section className="gallery-reference-section"><div className="container">
      <div className="gallery-reference-heading"><span>IMAGES GALLERY</span><h2>Surgical <em>Image Gallery</em></h2></div>
      <div className="gallery-page-grid">{images.map((item) => <figure key={item.src}><img src={item.src} alt={item.alt} loading="lazy"/><figcaption>{item.caption}</figcaption></figure>)}</div>
    </div></section>
  </main><CTA/></Shell>;
}
