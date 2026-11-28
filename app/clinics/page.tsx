import {Shell,PageHero,CTA,wa} from "../components";

export const metadata={
  title:"Clinic Locations in Lahore | Johar Town & Valencia Town",
  description:"Find Dr. Zain Tayyab Abbas's surgical consultation clinics in Lahore: Iqraa Medical Complex, Johar Town and Tayyab Medical & Dental Complex, Valencia Town. Confirm timings before visiting.",
  keywords:["Surgical Oncologist Johar Town Lahore","Endocrine Surgeon Lahore clinic","Cancer Surgeon Lahore clinic","Dr Zain Tayyab Abbas clinic Lahore"],
  alternates:{canonical:"/clinics"},
  openGraph:{title:"Clinic Locations in Lahore | Dr. Zain Tayyab Abbas",description:"Appointment locations and consultation timings in Johar Town and Valencia Town, Lahore.",url:"/clinics",type:"website"}
};

export default function Clinics(){
  const locations=[
    {"@type":"MedicalClinic","name":"Iqraa Medical Complex","address":{"@type":"PostalAddress","streetAddress":"New Building, Extension, Block A, Phase 1, Johar Town","addressLocality":"Lahore","addressCountry":"PK"},"areaServed":{"@type":"City","name":"Lahore"}},
    {"@type":"MedicalClinic","name":"Tayyab Medical & Dental Complex","address":{"@type":"PostalAddress","addressLocality":"Valencia Town, Lahore","addressCountry":"PK"},"areaServed":{"@type":"City","name":"Lahore"}}
  ];
  return <Shell><main>
    <PageHero eyebrow="Clinic locations · Lahore" title="Surgical consultation clinics in Lahore" lead="Dr. Zain Tayyab Abbas lists two consultation locations in Lahore: Iqraa Medical Complex in Johar Town and Tayyab Medical & Dental Complex in Valencia Town. Contact the clinic to confirm the appointment time and location before travelling."/>
    <section className="section section-white">
      <div className="container clinic-grid clinic-grid-large">
        <article className="clinic-card location-photo"><img className="clinic-location-photo" src="/images/about-building.JPG" alt="Iqraa Medical Complex building in Johar Town, Lahore" loading="lazy"/><span className="clinic-index">01 · JOHAR TOWN</span><h2>Iqraa Medical Complex</h2><p>New Building, Extension, Block A, Phase 1, Johar Town, Lahore, Pakistan.</p><div className="hours"><span>Consultation days</span><strong>Monday – Saturday</strong><span>Timings</span><strong>5:00 PM – 8:00 PM</strong></div><a className="button" href="https://www.google.com/maps/search/?api=1&query=Iqraa+Medical+Complex+Johar+Town+Lahore" target="_blank" rel="noopener noreferrer">Find on Google Maps ↗</a></article>
        <article className="clinic-card location-photo"><img className="clinic-location-photo" src="/images/unnamed%20(3).webp" alt="Tayyab Medical and Dental Complex in Valencia Town, Lahore" loading="lazy"/><span className="clinic-index">02 · VALENCIA TOWN</span><h2>Tayyab Medical &amp; Dental Complex</h2><p>Valencia Town, Lahore, Pakistan.</p><div className="hours"><span>Consultation days</span><strong>Monday – Saturday</strong><span>Timings</span><strong>9:00 PM – 10:00 PM</strong></div><a className="button" href="https://www.google.com/maps/search/?api=1&query=Tayyab+Medical+and+Dental+Complex+Valencia+Town+Lahore" target="_blank" rel="noopener noreferrer">Find on Google Maps ↗</a></article>
      </div>
      <div className="container small-note">Clinic schedules can change. Confirm the current schedule by WhatsApp before travelling. The Valencia clinic's precise street address has not been supplied, so please confirm the exact location with the clinic.</div>
      <div className="container" style={{marginTop:"22px"}}><a className="button" href={wa}>Confirm appointment on WhatsApp ↗</a></div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"ItemList","name":"Dr. Zain Tayyab Abbas consultation locations in Lahore","itemListElement":locations.map((item,i)=>({"@type":"ListItem","position":i+1,"item":item}))})}}/>
    <CTA/>
  </main></Shell>
}