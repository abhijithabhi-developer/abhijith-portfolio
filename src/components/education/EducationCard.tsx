import type { Education } from "../../data/education";
import useScrollReveal from "../../hooks/useScrollReveal";

type EducationCardProps = {
  education: Education;
 
};

function EducationCard({
  education,
   
}: EducationCardProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`education-card scroll-reveal ${
        isVisible ? "is-visible" : ""
      } rounded-3xl border border-[#29233F] bg-[#0D0B1A]/70 p-8 backdrop-blur-sm`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#382D55] bg-[#151127]">
          <span className="text-2xl text-[#8B5CF6]">
            ◇
          </span>
        </div>

        <span className="rounded-full border border-[#29233F] px-3 py-1 text-xs text-[#716B85]">
          {education.duration}
        </span>
      </div>

      {/* Content */}
      <div className="mt-7">
        <p className="text-sm font-medium text-[#8B5CF6]">
          {education.field}
        </p>

        <h3 className="mt-2 text-2xl text-[#F8F7FF]">
          {education.degree}
        </h3>

        <p className="mt-2 text-[#A9A4BC]">
          {education.institution}
        </p>

        <p className="mt-5 leading-7 text-[#716B85]">
          {education.description}
        </p>
      </div>
    </article>
  );
}

export default EducationCard;