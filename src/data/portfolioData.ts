export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  badge: string;
  points: string[];
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  icon: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Graphic Design" | "UI/UX Design" | "Digital Marketing";
  description: string;
  image: string;
  link?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface ToolCategory {
  category: string;
  tools: {
    name: string;
    icon?: string;
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  accent: "coral" | "violet" | "yellow" | "cyan" | "emerald" | "fuchsia";
  skills: string[];
  description?: string;
  isLarge?: boolean;
}

export const PORTFOLIO_DATA = {
  about: {
    title: "A creative mind with a strategic approach.",
    summary:
      "I'm a Graphic Designer, UI/UX Designer and Digital Marketer with a background in Information & Communication Engineering (ICE). I enjoy creating visual identities, user-friendly experiences and meaningful digital content.",
    educationHighlight: "B.Sc in ICE • CGPA: 3.50",
    experienceHighlight: "2+ Years (CRO & Web Intern)",
    locationHighlight: "Dhaka, Bangladesh",
  },

  services: [
    {
      id: "graphic-design",
      title: "Graphic Design",
      icon: "palette",
      badge: "Visual Identity",
      points: [
        "Social Media Design",
        "Brand Identity",
        "Poster & Banner",
        "Advertising Creatives",
      ],
      image: "/images/service-graphic.jpg",
    },
    {
      id: "uiux-design",
      title: "UI/UX Design",
      icon: "layout",
      badge: "Digital Product",
      points: [
        "Mobile App Design",
        "Website Design",
        "Wireframing",
        "Prototyping",
        "UX Research",
      ],
      image: "/images/service-uiux.jpg",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: "trending",
      badge: "Organic Growth",
      points: [
        "Search Engine Optimization",
        "Keyword Research",
        "On-page SEO",
        "Competitor Analysis",
        "Social Media Marketing",
      ],
      image: "/images/service-marketing.jpg",
    },
  ] as ServiceItem[],

  designProcess: [
    {
      step: "01",
      title: "Research",
      icon: "search",
      description: "Understand the goals, users, and problem.",
    },
    {
      step: "02",
      title: "Strategy",
      icon: "target",
      description: "Plan the right approach and creative direction.",
    },
    {
      step: "03",
      title: "Design",
      icon: "layers",
      description: "Create meaningful and user-friendly solutions.",
    },
    {
      step: "04",
      title: "Deliver",
      icon: "send",
      description: "Finalize, test, and deliver high-quality results.",
    },
  ] as ProcessStep[],

  projects: [
    {
      id: "safenest",
      title: "SafeNest",
      subtitle: "Stay Booking App",
      category: "UI/UX Design",
      description:
        "A user-friendly accommodation booking app that helps users find, book, and manage stays easily.",
      image: "/images/project-safenest-preview.jpg",
      link: "/projects/safenest",
      featured: true,
    },
    {
      id: "velora",
      title: "Velora",
      subtitle: "Brand Identity",
      category: "Graphic Design",
      description:
        "Complete visual identity including logo system, stationery mockups, color hierarchy, and brand collateral.",
      image: "/images/project-velora-preview.jpg",
      link: "/#contact",
      featured: true,
    },
    {
      id: "seo-case-study",
      title: "SEO Case Study",
      subtitle: "Keyword Research & SEO Audit",
      category: "Digital Marketing",
      description:
        "Data-driven keyword mapping, organic traffic optimization, and technical search audit.",
      image: "/images/project-seo-preview.jpg",
      link: "/#contact",
      featured: true,
    },
    {
      id: "aura-suite",
      title: "Aura Vendor Suite",
      subtitle: "E-commerce Dashboard UI",
      category: "UI/UX Design",
      description:
        "Modern and intuitive merchant administrative dashboard designed for sales metrics and inventory tracking.",
      image: "/images/project-aura-preview.jpg",
      link: "/#contact",
      featured: true,
    },
  ] as ProjectItem[],

  experience: [
    {
      role: "Customer Relationship Officer",
      company: "Yellow Fiction Digital",
      location: "Remote",
      period: "Dec 2024 – Jan 2026",
      points: [
        "Provided prompt and effective customer support and order verification.",
        "Managed customer queries and built long-term client relationships.",
        "Followed up with customers regarding orders and service requests.",
        "Supported internal communication and assisted in digital project coordination.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Goinnovior Limited",
      location: "On-site",
      period: "Mar 2023 – Aug 2023",
      points: [
        "Designed web layouts and optimized PHP back-end code.",
        "Collaborated with team members to develop and maintain websites.",
        "Documented tasks and followed best practices using version control (Git).",
      ],
    },
  ] as ExperienceItem[],

  skillsAndTools: [
    {
      category: "Graphic Design",
      tools: [
        { name: "Canva" },
        { name: "Photoshop" },
        { name: "Illustrator" },
      ],
    },
    {
      category: "UI/UX Design",
      tools: [
        { name: "Figma" },
        { name: "Wireframing" },
        { name: "Prototyping" },
      ],
    },
    {
      category: "Digital Marketing",
      tools: [
        { name: "SEO" },
        { name: "Google Search Console" },
        { name: "Google Analytics" },
      ],
    },
  ] as ToolCategory[],

  skillGroups: [
    {
      id: "graphic-design",
      title: "Graphic Design",
      accent: "coral",
      isLarge: true,
      description: "Visual identity, brand assets, social media, and advertising collateral.",
      skills: ["Canva", "Photoshop", "Illustrator", "Brand Identity", "Social Media Graphics"],
    },
    {
      id: "uiux-design",
      title: "UI/UX Design",
      accent: "violet",
      description: "Human-centered interfaces, user flows, wireframes, and prototypes.",
      skills: ["Figma", "Wireframing", "Prototyping", "Mobile App UI", "UX Research"],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      accent: "yellow",
      description: "Organic search visibility, technical SEO, and social marketing.",
      skills: ["SEO", "Keyword Research", "Google Analytics", "Search Console", "Social Media"],
    },
  ] as SkillGroup[],

  education: {
    degree: "B.Sc in ICE",
    fullDegree: "B.Sc in ICE (Information & Communication Engineering)",
    institution: "Daffodil International University",
    cgpa: "3.50",
    year: "2024",
  },

  certifications: [
    {
      title: "Generative AI for Digital Marketing: From Basics to Pro",
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
  ] as CertificationItem[],

  languages: [
    { language: "English", level: "Professional working proficiency" },
    { language: "Bangla", level: "Native / Bilingual proficiency" },
    { language: "Hindi", level: "Working spoken proficiency" },
  ],

  references: "Available on request",

  socialLinks: [
    { label: "Email", href: "mailto:isratjahanm574@gmail.com", display: "isratjahanm574@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/isratjahanm/", display: "linkedin.com/in/isratjahanm/" },
    { label: "Behance", href: "https://behance.net/mim", display: "behance.net/mim" },
    { label: "Facebook", href: "https://facebook.com/mim", display: "facebook.com/mim" },
  ],

  marqueeTools: [
    "Canva",
    "Figma",
    "Photoshop",
    "Illustrator",
    "CapCut",
    "SEO",
    "Google Analytics",
    "Search Console",
    "HTML & CSS",
    "Social Media Marketing",
  ],
};
