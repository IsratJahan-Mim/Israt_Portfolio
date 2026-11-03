import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { About } from "@/components/sections/About";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { DesignProcess } from "@/components/sections/DesignProcess";
import { Experience } from "@/components/sections/Experience";
import { SkillsAndTools } from "@/components/sections/SkillsAndTools";
import { EducationCertifications } from "@/components/sections/EducationCertifications";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/ui/JsonLd";

export default function Home() {
  return (
    <>
      {/* Structured SEO Schema */}
      <JsonLd />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. What I Do (Services) */}
      <WhatIDo />

      {/* 3. About Me */}
      <About />

      {/* 4. Selected Works / Featured Projects */}
      <SelectedWorks />

      {/* 5. How I Work / My Design Process */}
      <DesignProcess />

      {/* 6. Professional Experience */}
      <Experience />

      {/* 7. Skills & Tools */}
      <SkillsAndTools />

      {/* 8. Education & Certifications */}
      <EducationCertifications />

      {/* 9. Contact / Get in Touch */}
      <Contact />
    </>
  );
}
