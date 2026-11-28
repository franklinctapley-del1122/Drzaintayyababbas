"use client";

import {useEffect,useState} from "react";
import {wa} from "./components";

const slides=[
  {src:"/images/unnamed%20(4).webp",alt:"Surgical oncology care at Dr. Zain Tayyab Abbas clinic"},
  {src:"/images/IMG-20261126-WA0024.jpg",alt:"Dr. Zain Tayyab Abbas medical practice"},
  {src:"/images/file_000000006cf88211849a3b77ef72c585.png",alt:"Surgical oncology patient care and consultation"}
];

export default function HeroBanner(){
  const [active,setActive]=useState(0);
  const next=()=>setActive(v=>(v+1)%slides.length);
  const prev=()=>setActive(v=>(v+slides.length-1)%slides.length);
  useEffect(()=>{
    const timer=window.setInterval(()=>setActive(v=>(v+1)%slides.length),6000);
    return ()=>window.clearInterval(timer);
  },[]);
  return <section className="home-hero premium-hero reference-hero">
    <div className="reference-hero-image" aria-label="Clinic and surgical oncology photographs">
      {slides.map((slide,index)=><img key={slide.src} className={`hero-banner-slide ${index===active?"is-active":""}`} src={slide.src} alt={slide.alt} fetchPriority={index===0?"high":"auto"}/>)}
    </div>
    <div className="container reference-hero-inner"><div className="hero-copy">
      <div className="eyebrow">Dr. Zain Tayyab Abbas · Lahore</div>
      <h1>Surgical<br/><em>Oncology</em></h1>
      <p className="hero-lead">Surgical oncology and endocrine surgery consultations with a considered, patient-focused approach.</p>
      <div className="hero-actions"><a className="button" href={wa}>Book Appointment</a></div>
    </div></div>
    <button type="button" className="reference-hero-arrow reference-hero-prev" onClick={prev} aria-label="Previous banner image">‹</button>
    <button type="button" className="reference-hero-arrow reference-hero-next" onClick={next} aria-label="Next banner image">›</button>
    <div className="reference-hero-dots" aria-label="Choose banner image">{slides.map((slide,index)=><button key={slide.src} type="button" onClick={()=>setActive(index)} className={index===active?"is-active":""} aria-label={`Show banner image ${index+1}`} aria-pressed={index===active}/>)}</div>
  </section>;
}
