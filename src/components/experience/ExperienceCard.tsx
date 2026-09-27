import type { Experience } from "../../data/experience";
import useScrollReveal from "../../hooks/useScrollReveal";

type ExperienceCardProps = {
  experience: Experience;
 
};

function ExperienceCard({
  experience,
  
}: ExperienceCardProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`experience-item relative pl-12 scroll-reveal ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border ${
          experience.current
            ? "border-[#7C3AED]/40 bg-[#0D0B1A]"
            : "border-[#29233F] bg-[#0D0B1A]"
        }`}
      >
        <div
          className={
            experience.current
              ? "h-2.5 w-2.5 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.7)]"
              : "h-2 w-2 rounded-full bg-[#716B85]"
          }
        />
      </div>

      {/* Experience card */}
      <div className="experience-card rounded-3xl border border-[#29233F] bg-[#0D0B1A]/70 p-8 backdrop-blur-sm">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p
              className={`text-sm font-medium ${
                experience.current
                  ? "text-[#8B5CF6]"
                  : "text-[#716B85]"
              }`}
            >
              {experience.role}
            </p>

            <h3 className="mt-2 text-2xl text-[#F8F7FF]">
              {experience.company}
            </h3>
          </div>

          <span className="w-fit rounded-full border border-[#29233F] px-3 py-1 text-xs text-[#716B85]">
            {experience.duration}
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 leading-7 text-[#A9A4BC]">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="skill-tag"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;