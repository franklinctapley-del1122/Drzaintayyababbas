"use client";

import {useEffect,useRef,useState} from "react";
import Link from "next/link";

const services=[
  {number:"01",title:"Surgical Oncology",description:"Assessment and surgical consultation information for cancer-related concerns.",href:"/specialties/surgical-oncology",image:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=88",alt:"Modern surgical oncology care"},
  {number:"02",title:"Breast Cancer Consultation",description:"Breast lump assessment, diagnostic reports and discussion of treatment options.",href:"/specialties/breast-cancer-consultation",image:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=88",alt:"Breast health consultation"},
  {number:"03",title:"Colorectal Cancer Consultation",description:"Consultation information for colorectal and gastrointestinal cancer concerns.",href:"/specialties/colorectal-cancer-consultation",image:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=88",alt:"Gastrointestinal medical consultation"},
  {number:"04",title:"Endocrine Surgery",description:"Assessment information for selected thyroid and parathyroid conditions.",href:"/specialties/endocrine-surgery",image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=88",alt:"Endocrine and thyroid care"},
  {number:"05",title:"General Surgery",description:"Surgical assessment information for hernia, gallbladder, appendix and abdominal concerns.",href:"/specialties/general-surgery",image:"https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=88",alt:"General surgery hospital environment"},
  {number:"06",title:"Laparoscopic Surgery",description:"Patient information about minimally invasive surgical approaches and assessment.",href:"/specialties/laparoscopic-surgery",image:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=88",alt:"Modern minimally invasive surgical care"}
];

export default function ServicesCarousel(){
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const touchStart=useRef<number|null>(null);
  const next=()=>setActive(v=>(v+1)%services.length);
  const prev=()=>setActive(v=>(v+services.length-1)%services.length);
  useEffect(()=>{
    if(paused) return;
    const timer=window.setInterval(()=>setActive(v=>(v+1)%services.length),5000);
    return ()=>window.clearInterval(timer);
  },[paused]);
  const onTouchStart=(e:React.TouchEvent)=>{touchStart.current=e.touches[0].clientX;};
  const onTouchEnd=(e:React.TouchEvent)=>{
    if(touchStart.current===null)return;
    const delta=e.changedTouches[0].clientX-touchStart.current;
    if(Math.abs(delta)>45){if(delta<0)next();else prev();}
    touchStart.current=null;
  };
  return <section className="cancer-services-section" aria-label="Consultation areas">
    <div className="container">
      <div className="cancer-services-heading">
        <span>CONSULTATION AREAS</span>
        <h2>Specialist Services</h2>
        <p>Explore surgical oncology, endocrine surgery and general surgical consultation information.</p>
      </div>
      <div className="services-carousel-shell" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="cancer-services-slider">
          <div className="cancer-services-track" style={{transform:`translateX(-${active*(100/services.length)}%)`}}>
            {services.map((service,index)=><article className="cancer-service-card" key={service.number}>
              <div className="cancer-service-image"><img src={service.image} alt={service.alt} loading={index<3?"eager":"lazy"}/><span className="service-image-number">{service.number}</span></div>
              <div className="cancer-service-info"><span className="service-card-kicker">SPECIALIST CONSULTATION</span><h3>{service.title}</h3><p>{service.description}</p><Link href={service.href}>Explore service <span aria-hidden="true">↗</span></Link></div>
            </article>)}
          </div>
        </div>
        <div className="services-carousel-controls">
          <div className="services-carousel-arrows"><button type="button" onClick={prev} aria-label="Previous service">←</button><button type="button" onClick={next} aria-label="Next service">→</button></div>
          <div className="services-carousel-dots" aria-label="Choose a service">{services.map((service,index)=><button key={service.number} type="button" onClick={()=>setActive(index)} className={active===index?"is-active":""} aria-label={`Show ${service.title}`} aria-current={active===index?"true":undefined}/>)}</div>
          <span className="services-carousel-count">{String(active+1).padStart(2,"0")} <i>/</i> {String(services.length).padStart(2,"0")}</span>
        </div>
      </div>
      <div className="cancer-services-action"><Link href="/specialties">View All Services <span aria-hidden="true">↗</span></Link></div>
    </div>
  </section>;
}
