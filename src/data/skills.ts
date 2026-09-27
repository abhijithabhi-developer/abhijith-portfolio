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
    icon: "/src/assets/icons/skills/mobile_application_development.svg",
    skills: [
      {
        id: 1,
        name: "Flutter",
        icon: "/src/assets/icons/skills/flutter.svg",
      },
      {
        id: 2,
        name: "Dart",
        icon: "/src/assets/icons/skills/dart.svg",
      },
      {
        id: 3,
        name: "Android",
        icon: "/src/assets/icons/skills/android.svg",
      },
    ],
  },

  {
    id: 2,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive web interfaces with modern frontend technologies.",
    icon: "/src/assets/icons/skills/front_end_development.svg",
    skills: [
      {
        id: 1,
        name: "React",
        icon: "/src/assets/icons/skills/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        icon: "/src/assets/icons/skills/typescript.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: "/src/assets/icons/skills/tailwindcss.svg",
      },
    ],
  },

  {
    id: 3,
    title: "Backend Development",
    description:
      "Working with APIs, backend services, and application integration.",
    icon: "/src/assets/icons/skills/backend.svg",
    skills: [
      {
        id: 1,
        name: "REST APIs",
        icon: "/src/assets/icons/skills/restapi.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        icon: "/src/assets/icons/skills/fastapi.svg",
      },
      {
        id: 3,
        name: "Java",
        icon: "/src/assets/icons/skills/java.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Database & Data",
    description:
      "Designing and working with relational databases and structured application data.",
    icon: "/src/assets/icons/skills/database2.svg",
    skills: [
      {
        id: 1,
        name: "PostgreSQL",
        icon: "/src/assets/icons/skills/pgsql.svg",
      },
      {
        id: 2,
        name: "SQL",
        icon: "/src/assets/icons/skills/sql.svg",
      },
      {
        id: 3,
        name: "MySQL",
        icon: "/src/assets/icons/skills/mysql.svg",
      },
    ],
  },
]