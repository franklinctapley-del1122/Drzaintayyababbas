import type { Metadata } from "next";
import { Shell, PageHero, CTA } from "../components";

export const metadata: Metadata = {
  title: "Clinical & Professional Gallery | Dr. Zain Tayyab Abbas",
  description: "A visual gallery of clinical environments and healthcare settings related to surgical care in Lahore.",
  alternates: { canonical: "/gallery" },
};

const images = [
  { src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85", alt: "Clinical team and healthcare environment", caption: "Clinical team and healthcare environment" },
  { src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85", alt: "Clinical consultation setting", caption: "Clinical consultation setting" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85", alt: "Healthcare professional in a clinical environment", caption: "Healthcare professional in a clinical environment" },
  { src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=85", alt: "Surgical operating room environment", caption: "Surgical operating room environment" },
];

export default function GalleryPage() {
  return <Shell><main>
    <section className="gallery-title-band"><div className="container"><h1>Image <span>Gallery</span></h1><div className="gallery-breadcrumb"><a href="/">⌂ Home</a><span>›</span><span>Gallery</span><span>›</span><strong>Images</strong></div></div></section>
    <section className="gallery-reference-section"><div className="container">
      <div className="gallery-reference-heading"><span>IMAGES GALLERY</span><h2>Surgical <em>Image Gallery</em></h2></div>
      <p className="gallery-disclaimer">These are illustrative stock photographs of clinical environments, not photographs of Dr. Zain Tayyab Abbas, his patients, clinics or surgical procedures. Actual professional photographs can be added when supplied.</p>
      <div className="gallery-page-grid">{images.map((item) => <figure key={item.src}><img src={item.src} alt={item.alt} loading="lazy"/><figcaption>{item.caption}</figcaption></figure>)}</div>
    </div></section>
  </main><CTA/></Shell>;
}
