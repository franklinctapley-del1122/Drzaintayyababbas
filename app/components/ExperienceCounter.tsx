"use client";

import { useEffect, useState } from "react";

export default function ExperienceCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const timer = window.setInterval(() => {
      current += 1;
      setValue(current);
      if (current >= 10) window.clearInterval(timer);
    }, 90);
    return () => window.clearInterval(timer);
  }, []);

  return <strong className="doctor-years" aria-label="10 plus years of surgical experience">{value}+</strong>;
}
