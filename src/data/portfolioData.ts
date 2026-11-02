export interface SkillGroup {
  id: string;
  title: string;
  accent: "coral" | "violet" | "yellow" | "cyan" | "emerald" | "fuchsia";
  skills: string[];
  description?: string;
  isLarge?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export const PORTFOLIO_DATA = {
  about: {
    summary:
      "Information & Communication Engineering graduate with a background in web development and customer relationship management, building a career in SEO, digital marketing, and social media management. Combines technical knowledge with creativity, communication, and a willingness to learn.",
  },
  marqueeTools: [
    "Canva",
    "Figma",
    "Photoshop",
    "Illustrator",
    "CapCut",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "HTML",
    "CSS",
    "PHP",
    "Git",
    "Facebook Marketing",
  ],
  skillGroups: [
    {
      id: "seo",
      title: "SEO",
      accent: "coral",
      isLarge: true,
      description: "Organic search visibility, keyword targeting, and technical foundation.",
      skills: [
        "Basic SEO",
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO Fundamentals",
        "Website Optimization",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      accent: "violet",
      description: "Data-driven campaigns and audience outreach.",
      skills: [
        "Facebook Marketing",
        "Social Media Marketing",
        "Campaign Management",
        "Digital Content Creation",
      ],
    },
    {
      id: "social-media",
      title: "Social Media",
      accent: "yellow",
      description: "Visual storytelling and community engagement.",
      skills: [
        "Content",
        "Post Design",
        "Audience Engagement",
        "Campaign Coordination",
      ],
    },
    {
      id: "design-video",
      title: "Design & Video",
      accent: "cyan",
      description: "Creative assets and motion production.",
      skills: [
        "Canva",
        "Photoshop",
        "Illustrator",
        "Figma",
        "CapCut",
        "Basic Video Editing",
      ],
    },
    {
      id: "technical",
      title: "Technical",
      accent: "fuchsia",
      description: "Web fundamentals and data presentation tools.",
      skills: [
        "HTML",
        "CSS",
        "Microsoft Excel",
        "Microsoft PowerPoint",
      ],
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      accent: "emerald",
      description: "Collaboration, agility, and client rapport.",
      skills: [
        "Communication",
        "Creativity",
        "Leadership",
        "Project Coordination",
        "Team Collaboration",
      ],
    },
  ] as SkillGroup[],
  experience: [
    {
      role: "Customer Relationship Officer",
      company: "Yellow Fiction Digital",
      location: "Remote",
      period: "Dec 2024 – Jan 2026",
      points: [
        "Customer support and order verification",
        "Managed queries and long-term client relationships",
        "Followed up on orders and service requests",
        "Supported internal communication and digital project coordination",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Goinnovior Limited",
      location: "On-site",
      period: "Mar 2023 – Aug 2023",
      points: [
        "Designed web layouts and optimized PHP back-end code",
        "Collaborated on developing and maintaining websites",
        "Documented tasks and used Git",
      ],
    },
  ] as ExperienceItem[],
  certifications: [
    {
      title: "Generative AI for Digital Marketing",
      issuer: "Udemy",
    },
    {
      title: "Graphics & UI Design",
      issuer: "SICIP",
    },
    {
      title: "UI/UX Design",
      issuer: "UY Lab",
    },
    {
      title: "Fundamentals of UX Design",
      issuer: "Coursera",
    },
    {
      title: "Facebook Marketing & Adobe Premiere Pro",
      issuer: "Grameenphone Academy",
    },
    {
      title: "Advanced Employability Program",
      issuer: "Wadhwani Foundation",
    },
  ] as CertificationItem[],
  languages: [
    { language: "English", level: "Professional working proficiency" },
    { language: "Bangla", level: "Native / Bilingual proficiency" },
    { language: "Hindi", level: "Working spoken proficiency" },
  ],
  references: "Available on request",
};

