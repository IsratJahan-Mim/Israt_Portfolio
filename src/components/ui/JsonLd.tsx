import { CANDIDATE_INFO, SITE_URL } from "@/lib/constants";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function JsonLd() {
  const allSkills = PORTFOLIO_DATA.skillGroups.flatMap((g) => g.skills);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: CANDIDATE_INFO.name,
    jobTitle: "SEO & Digital Marketing Specialist",
    url: SITE_URL,
    email: `mailto:${CANDIDATE_INFO.email}`,
    sameAs: [CANDIDATE_INFO.linkedIn],
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

