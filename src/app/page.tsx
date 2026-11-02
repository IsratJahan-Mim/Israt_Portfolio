import { Hero } from "@/components/sections/Hero";
import { ToolsMarquee } from "@/components/sections/ToolsMarquee";
import { About } from "@/components/sections/About";
import { SkillsBento } from "@/components/sections/SkillsBento";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Certifications } from "@/components/sections/Certifications";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/ui/JsonLd";

export default function Home() {
  return (
    <>
      {/* Structured SEO Schema */}
      <JsonLd />

      {/* Sections in Locked Order */}
      {/* 1. Hero */}
      <Hero />

      {/* Tools Marquee Strip */}
      <ToolsMarquee />

      {/* 2. About */}
      <About />

      {/* 3. Skills (Bento Grid) */}
      <SkillsBento />

      {/* 4. Experience */}
      <Experience />

      {/* 5. Featured Project (SafeNest preview + 'More work coming soon') */}
      <FeaturedProject />

      {/* 6. Certifications */}
      <Certifications />

      {/* 7. Languages */}
      <Languages />

      {/* 8. Contact & References */}
      <Contact />
    </>
  );
}

