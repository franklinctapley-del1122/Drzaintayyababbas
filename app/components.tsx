"use client";
import Link from "next/link";
import { useState } from "react";
export const wa="https://wa.me/923705978093";
const links=[["Home","/"],["About","/about"],["Specialties","/specialties"],["Blog","/blog"],["Research","/research"],["Clinics","/clinics"],["Contact","/contact"]];
const specialtyLinks=[["Surgical Oncology","/specialties/surgical-oncology"],["Breast Cancer Consultation","/specialties/breast-cancer-consultation"],["Colorectal Cancer Consultation","/specialties/colorectal-cancer-consultation"],["Endocrine Surgery","/specialties/endocrine-surgery"],["General Surgery","/specialties/general-surgery"],["Advanced Laparoscopy","/specialties/laparoscopic-surgery"],["Gastric Cancer Information","/specialties/gastric-cancer-information"],["Thyroid Cancer Information","/specialties/thyroid-cancer-information"],["Ovarian Cancer Information","/specialties/ovarian-cancer-information"],["Uterine Cancer Information","/specialties/uterine-cancer-information"],["Testicular Cancer Information","/specialties/testicular-cancer-information"],["Esophageal Cancer Information","/specialties/esophageal-cancer-information"],["Sarcoma Information","/specialties/sarcoma-information"],["Gallbladder Surgery Information","/specialties/gallbladder-surgery-information"],["Hernia Information","/specialties/hernia-information"]];
export function Header(){
 const [menuOpen,setMenuOpen]=useState(false);
 const [specialtiesOpen,setSpecialtiesOpen]=useState(false);
 return <>
 <div className="doctor-topbar"><div className="container doctor-topbar-inner"><a href="tel:+923705978093">+92 370 5978093</a><span className="doctor-topbar-separator">/</span><a href="https://wa.me/923705978093">WhatsApp Appointments</a></div></div>
 <div className={menuOpen?"mobile-menu-backdrop is-open":"mobile-menu-backdrop"} onClick={()=>setMenuOpen(false)} aria-hidden="true"></div>
 <header className="site-header doctor-reference-header">
  <div className="doctor-identity-row"><div className="container doctor-identity-inner">
   <Link className="doctor-identity-brand" href="/"><span className="doctor-identity-monogram">ZA</span><span className="doctor-identity-copy"><strong>Dr. Zain Tayyab Abbas</strong><small>MBBS · FCPS (General Surgery)</small><em>Fellowship in Surgical Oncology</em></span></Link>
   <div className="doctor-header-contact"><div className="doctor-header-contact-icon">☏</div><div><small>Call Today</small><a href="tel:+923705978093">+92 370 5978093</a></div></div>
   <div className="doctor-header-hours"><div className="doctor-header-contact-icon">◷</div><div><small>Clinic Hours</small><strong>5:00 PM – 8:00 PM</strong><span>Johar Town · 9:00 PM – 10:00 PM Valencia</span></div></div>
  </div></div>
  <div className="doctor-nav-row"><div className="container nav">
   <button className="mobile-menu-toggle" type="button" aria-label={menuOpen?"Close navigation":"Open navigation"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}><span></span><span></span><span></span></button>
   <nav className={menuOpen?"is-open":""} aria-label="Main navigation"><button className="mobile-drawer-close" type="button" onClick={()=>{setMenuOpen(false);setSpecialtiesOpen(false)}} aria-label="Close navigation">×</button>{links.map(([n,u])=>n==="Specialties"?<div className="nav-dropdown" key={u}><div className="nav-dropdown-row"><Link className="nav-dropdown-trigger" href={u} onClick={()=>setMenuOpen(false)}>Cancer Care</Link><button type="button" className="mobile-submenu-toggle" aria-label="Toggle cancer care submenu" aria-expanded={specialtiesOpen} onClick={()=>setSpecialtiesOpen(v=>!v)}>⌄</button></div><div className={specialtiesOpen?"nav-dropdown-menu is-open":"nav-dropdown-menu"}><Link href={u} className="nav-dropdown-all" onClick={()=>setMenuOpen(false)}>All Services</Link>{specialtyLinks.map(([label,path])=><Link key={path} href={path} onClick={()=>setMenuOpen(false)}>{label}</Link>)}</div></div>:<Link key={u} href={u} onClick={()=>setMenuOpen(false)}>{n==="Clinics"?"Clinic Locations":n==="Blog"?"Blog":n}</Link>)}</nav>
   <a className="button button-small nav-booking" href={wa}>Book Appointment</a>
  </div></div>
 </header>
 </>;
}
export function Footer(){return <footer className="footer"><div className="container footer-grid"><div><Link className="brand brand-footer" href="/"><span className="brand-mark">ZA</span><span>Dr. Zain Tayyab Abbas<small>SURGICAL ONCOLOGY · ENDOCRINE SURGERY</small></span></Link><p>Professional surgical consultations in Lahore, Pakistan.</p></div><div><h4>Explore</h4>{links.slice(1).map(([n,u])=><Link key={u} href={u}>{n}</Link>)}</div><div><h4>Appointments</h4><a href={wa}>+92 370 5978093</a><p>Iqraa Medical Complex · Johar Town<br/>Tayyab Medical & Dental Complex · Valencia Town</p></div></div><div className="container copyright"><span>© {new Date().getFullYear()} Dr. Zain Tayyab Abbas</span><span>Website information is general and does not replace medical advice or consultation.</span></div></footer>}
export function Shell({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/></>}
export function PageHero({eyebrow,title,lead}:{eyebrow:string,title:string,lead:string}){return <section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{lead}</p></div></section>}
export function CTA(){return <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow">Appointments in Lahore</div><h2>Discuss your consultation with the clinic.</h2><p>Contact the appointment number to confirm availability and timings.</p></div><a className="button button-white" href={wa}>WhatsApp +92 370 5978093 ↗</a></div></section>}