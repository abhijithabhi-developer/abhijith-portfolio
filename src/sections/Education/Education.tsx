import EducationCard from "../../components/education/EducationCard";
import { education } from "../../data/education";

function Education() {
  return (
    <section
      id="education"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
            Education
          </p>

          <h2 className="text-[#F8F7FF]">
            The foundation
            <br />
              <span className="gradient-text">
              behind my journey.
            </span>
          
          </h2>

          <p className="mt-6 text-lg text-[#716B85]">
            The academic foundation that shaped my approach to
            programming, problem solving, and software development.
          </p>
        </div>

        {/* Education cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {education.map((item, index) => (
            <EducationCard
              key={item.id}
              education={item}
              index={index + 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;