export type Certification = {
  id: number;
  title: string;
  issuer: string;
  issuerLogo?: string;
  year: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
};
export const certifications: Certification[] = [
{
id: 1,
title: "Claude Academy:Claude 101",
issuer: "Anthropic",
 issuerLogo: "/icons/certifications/anthropic.svg",
year: "2026",
description:
"Learned the fundamentals of Claude and generative AI through practical lessons. Explored effective prompting, AI-assisted workflows, and using Claude to support research, coding, content creation, and productivity.",
skills: [
"Generative AI",
"Claude",
"Prompt Engineering",
"AI-Assisted Coding",
"AI Workflows",
"AI Productivity",
],
},
    {
    id: 2,
    title: "Java Full Stack Development",
    issuer: "JSpiders",
     issuerLogo: "/icons/certifications/jspiders.svg",
    year: "2025",
    description:
      "Practical software development training covering programming, web technologies, databases, and application development.",
    skills: [
      "Core Java",
"Advanced Java",
"JDBC",
"JSP",
"Servlets",
"HTML",
"CSS",
"JavaScript",
"SQL",
"MySQL",
    ],
  },
  {
id: 3,
title: "Flutter Internship",
issuer: "Srishti Innovative",
    issuerLogo: "/icons/certifications/srishti_innovative.svg",
year: "2024",
description:
"Completed a practical internship focused on Flutter and Dart mobile application development. Worked on responsive user interfaces, application features, and cross-platform development. Gained hands-on experience in building and testing mobile applications.",
skills: [
"Flutter",
"Dart",
"Mobile App Development",
"UI/UX",
"Responsive Design",
"API Integration",
"State Management",
"Git",
],
},

  {
    id: 4,
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    issuerLogo: "/icons/certifications/google_icon.svg",
    year: "2024",
    description:
      "Professional training covering cybersecurity fundamentals, security operations, networking, Linux, and threat analysis.",
    skills: [
      "Cybersecurity",
      "Linux",
      "Networking",
      "Security",
    ],
  },
  {
    id: 5,
    title: "Digital Marketing Certification",
    issuer: "Avodha",
 issuerLogo: "/icons/certifications/avodha.svg",
    year: "2021",
    description:
      "Training covering website development, search engine optimization, social media marketing, and email marketing.",
    skills: [
      "SEO",
      "SMM",
      "Email Marketing",
      "Web Development",
    ],
  },
  {
id: 6,
title: "Cybersecurity Job Simulation",
issuer: "Tata",
   issuerLogo: "/icons/certifications/tata_icon.svg",
year: "2024",
description:
"Completed a practical cybersecurity job simulation focused on threat identification, security analysis, and risk assessment. Gained experience in analyzing security scenarios and developing appropriate cybersecurity solutions.",
skills: [
"Cybersecurity",
"Threat Analysis",
"Risk Assessment",
"Security Analysis",
"Incident Response",
],
},
{
id: 7,
title: "Industrial Metaverse Using Mixed Reality (XR)",
issuer: "Ingage",
   issuerLogo: "/icons/certifications/ingage.svg",
year: "2024",
description:
"Learned the fundamentals of industrial metaverse technologies and extended reality (XR). Explored mixed reality applications, immersive digital environments, and their use in industrial and business applications.",
skills: [
"Extended Reality (XR)",
"Mixed Reality (MR)",
"Industrial Metaverse",
"Immersive Technologies",
"Virtual Environments",
"3D Visualization",
],
},


];