export type Skill = {
  id: number;
  name: string;
  icon: string;
};

export type SkillCategory = {
  id: number;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Mobile Application Development",
    description:
      "Building modern cross-platform mobile applications with clean and maintainable architecture.",
    icon: "/icons/skills/mobile_application_development.svg",
    skills: [
      {
        id: 1,
        name: "Flutter",
        icon: "/icons/skills/flutter.svg",
      },
      {
        id: 2,
        name: "Dart",
        icon: "/icons/skills/dart.svg",
      },
      {
        id: 3,
        name: "Android",
        icon: "/icons/skills/android.svg",
      },
    ],
  },

  {
    id: 2,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive web interfaces with modern frontend technologies.",
    icon: "/icons/skills/front_end_development.svg",
    skills: [
      {
        id: 1,
        name: "React",
        icon: "/icons/skills/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        icon: "/icons/skills/typescript.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: "/icons/skills/tailwindcss.svg",
      },
    ],
  },

  {
    id: 3,
    title: "Backend Development",
    description:
      "Working with APIs, backend services, and application integration.",
    icon: "/icons/skills/backend.svg",
    skills: [
      {
        id: 1,
        name: "REST APIs",
        icon: "/icons/skills/restapi.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        icon: "/icons/skills/fastapi.svg",
      },
      {
        id: 3,
        name: "Java",
        icon: "/icons/skills/java.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Database & Data",
    description:
      "Designing and working with relational databases and structured application data.",
    icon: "/icons/skills/database2.svg",
    skills: [
      {
        id: 1,
        name: "PostgreSQL",
        icon: "/icons/skills/pgsql.svg",
      },
      {
        id: 2,
        name: "SQL",
        icon: "/icons/skills/sql.svg",
      },
      {
        id: 3,
        name: "MySQL",
        icon: "/icons/skills/mysql.svg",
      },
    ],
  },
];