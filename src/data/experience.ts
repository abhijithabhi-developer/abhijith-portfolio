export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Dutch Cycling Project Pvt.Ltd",
    duration: "2025 — Present",
    description:
      "Working on modern software applications, developing features, integrating APIs, working with databases, and contributing to scalable software and application development.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "SQL",
      "MySQL",
      "PostgreSql",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Software Developer Trainee",
    company: "JSpiders - Training & Development Center",
    duration: "2024 — 2025",
    description:
      "Built a strong foundation in software development through practical projects, programming concepts, databases, and application development.",
    technologies: [
      "Java",
      "MySQL",
       "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "SpringBoot"
    ],
  },
   {
    id: 3,
    role: "Flutter Mobile Application Developer(intern)",
    company: "Srishti Innovative",
    duration: "2024 — 2024",
    description:
      "Built a strong foundation in software development through practical projects, programming concepts, databases, and application development.",
    technologies: [
      "Flutter",
      "Rest Api",
       "SQL",
      "Dart",
      "FrontEnd Development",
      
    ],
  },
   {
id: 4,
role: "Google Cybersecurity (Intern)",
company: "Google",
duration: "2023 — 2024",
description:
"Developed practical knowledge of cybersecurity through hands-on learning in Identity and Access Management (IAM), security fundamentals, threat analysis, incident response, network security, vulnerability assessment, and security best practices. Worked with security concepts, risk identification, access controls, and analyzing potential security threats.",
technologies: [
"Identity & Access Management (IAM)",
"Cybersecurity",
"Threat Analysis",
"Incident Response",
"Network Security",
"Vulnerability Assessment",
"Risk Management",
"Security Monitoring",
"Linux",
"SQL",
"Security Fundamentals"
],
},
{
id: 5,
role: "Digital Marketing Apprentice",
company: "Avodha",
duration: "2021 — 2022",
description:
"Gained practical experience in digital marketing through SEO, keyword research, social media marketing, content marketing, analyzing website performance using Google Analytics, and understanding strategies for increasing organic search traffic and audience engagement.",
technologies: [
"Digital Marketing",
"Search Engine Optimization (SEO)",
"Keyword Research",
"Social Media Marketing",
"Content Marketing",
"Website Development",
"Google Analytics",
"Search Engine Marketing (SEM)",
"Web Analytics",
"Online Marketing"
],
},

];