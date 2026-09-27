export type Education = {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  field: string;
};

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor's Of Engineering",
    institution: "Anna University",
    duration: "2021 — 2025",
    field: "Computer Science and Engineering",
    description:
      "Studied core concepts of computer science, programming, databases, software engineering, and application development.",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Samuel L.M.S H.S.S Parassala",
    duration: "2019 — 2021",
    field: "Biology Science",
    description:
      "Built an early foundation in Biology science,mathematics, and problem solving.",
  },
];