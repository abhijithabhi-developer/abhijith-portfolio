import SkillCard from "../../components/skill/SkillCard";
import { skillCategories } from "../../data/skills";
import useScrollReveal from "../../hooks/useScrollReveal";

function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      className="relative px-6 py-32"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl scroll-reveal ${
          isVisible ? "is-visible" : ""
        }`}
      >
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
            Skills & Expertise
          </p>

          <h2 className="text-[#F8F7FF]">
            Technologies I
            <br />
              <span className="gradient-text">
    work with.
  </span>
           
          </h2>

          <p className="mt-6 text-lg text-[#716B85]">
            A growing set of technologies I use to build mobile
            applications, web experiences, backend services, and
            data-driven solutions.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;