import { CANDIDATE_INFO, SITE_URL } from "@/lib/constants";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function JsonLd() {
  const allSkills = [
    ...PORTFOLIO_DATA.skillsAndTools.flatMap((g) => g.tools.map((t) => t.name)),
    ...PORTFOLIO_DATA.services.flatMap((s) => s.points),
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: CANDIDATE_INFO.name,
    jobTitle: CANDIDATE_INFO.headline,
    url: SITE_URL,
    email: `mailto:${CANDIDATE_INFO.email}`,
    sameAs: [
      CANDIDATE_INFO.linkedIn,
      CANDIDATE_INFO.behance,
      CANDIDATE_INFO.facebook,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: CANDIDATE_INFO.education.institution,
    },
    description: PORTFOLIO_DATA.about.summary,
    knowsAbout: allSkills,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
