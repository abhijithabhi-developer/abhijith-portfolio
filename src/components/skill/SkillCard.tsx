import type { SkillCategory } from "../../data/skills";
import useScrollReveal from "../../hooks/useScrollReveal";

type SkillCardProps = {
  category: SkillCategory;
};

function SkillCard({ category }: SkillCardProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`skill-card scroll-reveal ${
        isVisible ? "is-visible" : ""
      } rounded-3xl border border-[#29233F] bg-[#0D0B1A]/70 p-7 backdrop-blur-sm`}
    >
      {/* Category Header */}
      <div className="flex items-start gap-4">

        {/* Category Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#382D55] bg-[#151127] p-2.5">
          <img
            src={category.icon}
            alt={`${category.title} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Category Information */}
        <div>
          <h3 className="text-xl text-[#F8F7FF]">
            {category.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#716B85]">
            {category.description}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-7 flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-item group flex items-center gap-2 rounded-xl border border-[#29233F] bg-[#151127]/70 px-3 py-2 transition-all duration-300 hover:border-[#7C3AED]/50 hover:bg-[#1B1533]"
          >
            {/* Technology Icon */}
            <div className="flex h-6 w-6 items-center justify-center">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Technology Name */}
            <span className="text-sm font-medium text-[#A9A4BC] transition-colors duration-300 group-hover:text-[#F8F7FF]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default SkillCard;