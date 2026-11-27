"use client";

import { useEffect, useRef, useState } from "react";

export default function ExperienceCounter() {
  const [value, setValue] = useState(0);
  const counterRef = useRef<HTMLElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;
        hasStarted.current = true;
        let current = 0;
        const timer = window.setInterval(() => {
          current += 1;
          setValue(current);
          if (current >= 10) window.clearInterval(timer);
        }, 120);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <strong ref={counterRef} className="doctor-years" aria-label="10 plus years of surgical experience">
      {value}+
    </strong>
  );
}
