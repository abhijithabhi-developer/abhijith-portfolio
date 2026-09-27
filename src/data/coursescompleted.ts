export type CourseCompleted = {
  id: number;
  title: string;
  provider: string;
  year: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
};

export const coursesCompleted: CourseCompleted[] = [
 {
id: 1,
title: "Digital Marketing",
provider: "Avodha",
year: "2021-2023",
description:
"Learned the fundamentals of digital marketing, including SEO, keyword research, content marketing, and social media marketing. Gained practical knowledge of improving website visibility, creating engaging digital content, and reaching target audiences. Developed an understanding of website analytics and using data to measure and improve marketing performance.",
skills: [
"Digital Marketing",
"Search Engine Optimization (SEO)",
"Keyword Research",
"Social Media Marketing",
"Content Marketing",
"Google Analytics",
"Website Development",
"Search Engine Marketing (SEM)",
"Web Analytics",
"Online Advertising",
],
},
{
id: 2,
title: "Google Cybersecurity Professional Certificate",
provider: "Google",
year: "2024",
description:
"Learned core cybersecurity principles, security frameworks, risk management, and methods for identifying threats and vulnerabilities. Gained practical experience with network security, Linux, SQL, security monitoring, threat detection, and incident response. Developed skills in analyzing security risks and automating cybersecurity tasks using Python and industry-standard security tools.",
skills: [
"Cybersecurity Fundamentals",
"Risk Management",
"Threat Analysis",
"Vulnerability Assessment",
"Network Security",
"Linux",
"SQL",
"Incident Response",
"SIEM",
"Intrusion Detection",
"Security Monitoring",
"NIST Framework",
 
],
},
{
id: 3,
title: "Flutter Mobile Application Developer",
provider: "Srishti Innovatives",
year: "2025",
description:
"Learned Flutter and Dart for cross-platform mobile app development. Built responsive and user-friendly interfaces with modern UI/UX principles. Gained experience in API integration, state management, and reusable widgets.",
skills: [
"Flutter",
"Dart",
"Mobile App Development",
"UI/UX",
"State Management",
"REST API",
"Firebase",
"Git & GitHub"
],
},

{
id: 4,
title: "Java Full Stack Developer",
provider: "JSpiders - Training & Development Center",
year: "2024-2025",
description:
"Learned Java programming and full-stack web development fundamentals. Built web applications using frontend and backend technologies with database integration. Gained practical experience in developing, testing, and managing application components.",
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
"Spring",
"Spring Boot",
"Hibernate",
"REST API",
"Git"
],
},
{
id: 5,
title: "Generative AI For Beginners",
provider: "Simple Learn SkillUp",
year: "2026",
description:
"Learned the fundamentals of Generative AI and large language models. Explored prompt engineering, AI-powered content generation, and practical applications of generative AI. Gained experience using AI tools to improve productivity and develop intelligent solutions.",
skills: [
"Generative AI",
"Prompt Engineering",
"Large Language Models (LLMs)",
"AI Tools",
"AI Content Generation",
"ChatGPT",
"Natural Language Processing",
"AI Applications"
],
},


];