import projectBeozImage from "../assets/images/projects/beoz_project.webp"
import portfolioProject from "../assets/images/projects/portfolio_project.webp"

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  featuredTechnology: string;
  technologies: string[];
  accent: "violet" | "magenta";
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  /*{
    id: 1,
    title: "truKom",
    category: "Mobile Application",
    description:
      "A modern cycling and touring ecosystem designed around riders, tours, packages, activities, and travel experiences.",
    featuredTechnology: "Flutter",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "MySQL",
    ],
    accent: "violet",
  },*/

  {
    id: 1,
    title: "Developer Portfolio",
    category: "Web Application",
    description:
      "A modern developer portfolio focused on clean interfaces, smooth interactions, and a strong technical identity.",
    featuredTechnology: "React",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
    ],
    accent: "magenta",
    image:portfolioProject
  },
   {
    id: 2,
    title: "Beoz Electronics",
    category: "Web Application",
    description:
      "A modern developer portfolio focused on clean interfaces, smooth interactions, and a strong technical identity.",
 featuredTechnology: "HTML/ CSS/ JavaScript",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
    ],
    accent: "magenta",
    image:projectBeozImage
  },
];