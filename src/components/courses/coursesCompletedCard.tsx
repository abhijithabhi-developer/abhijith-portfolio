import type { CourseCompleted } from "../../data/coursescompleted";
import useScrollReveal from "../../hooks/useScrollReveal";

type CoursesCompletedCardProps = {
  course: CourseCompleted;
  index: number;
};

function CoursesCompletedCard({
  course,
  index,
}: CoursesCompletedCardProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`course-card scroll-reveal ${
        isVisible ? "is-visible" : ""
      } group rounded-3xl border border-[#29233F] bg-[#0D0B1A]/70 p-8 backdrop-blur-sm`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#382D55] bg-[#151127]">
          <span className="text-2xl font-bold text-[#8B5CF6]">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <span className="rounded-full border border-[#29233F] px-3 py-1 text-xs text-[#716B85]">
          {course.year}
        </span>
      </div>

      {/* Course Information */}
      <div className="mt-7">
        <p className="text-sm font-medium text-[#8B5CF6]">
          {course.provider}
        </p>

        <h3 className="mt-2 text-2xl text-[#F8F7FF]">
          {course.title}
        </h3>

        <p className="mt-5 leading-7 text-[#A9A4BC]">
          {course.description}
        </p>
      </div>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {course.skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      {/* Credential */}
      <div className="mt-8">
        {course.credentialUrl ? (
          <a
            href={course.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8F7FF] transition-colors duration-300 hover:text-[#A78BFA]"
          >
            View Course
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        ) : (
          <span className="text-sm font-semibold text-[#716B85]">
            Course completed
          </span>
        )}
      </div>
    </article>
  );
}

export default CoursesCompletedCard;