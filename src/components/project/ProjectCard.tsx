import type { Project } from "../../data/projects";
import useScrollReveal from "../../hooks/useScrollReveal";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const { ref, isVisible } = useScrollReveal();

  const accentColor =
    project.accent === "violet"
      ? "#8B5CF6"
      : "#C026D3";

  const gradient =
    project.accent === "violet"
      ? "from-[#7C3AED]/20 to-[#C026D3]/10"
      : "from-[#C026D3]/15 to-[#7C3AED]/15";

  return (
    <article
      ref={ref}
      className={`project-card scroll-reveal ${
        isVisible ? "is-visible" : ""
      } group overflow-hidden rounded-3xl border border-[#29233F] bg-[#0D0B1A]/70 backdrop-blur-sm`}
    >
      {/* Project Image */}
      <div className="project-image relative h-[280px] overflow-hidden bg-[#151127]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full  object-cover"
          />
        ) : (
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_60%)]" />

            <div className="flex h-full items-center justify-center">
              <span className="text-4xl font-bold text-[#F8F7FF]/20">
                PROJECT
              </span>
            </div>
          </>
        )}
      </div>

      {/* Project Content */}
      <div className="p-8">

        {/* Category + Technology */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: accentColor }}
            >
              {project.category}
            </p>

            <h3 className="mt-2 text-2xl text-[#F8F7FF]">
              {project.title}
            </h3>
          </div>

          <span className="rounded-full border border-[#29233F] px-3 py-1 text-xs text-[#716B85]">
            {project.featuredTechnology}
          </span>
        </div>

        {/* Description */}
        <p className="mt-5 text-[#A9A4BC]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="skill-tag"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <div className="mt-8">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8F7FF] transition-colors duration-300 hover:text-[#A78BFA]"
            >
              View Project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          ) : (
            <span className="text-sm font-semibold text-[#716B85]">
              Project details
            </span>
          )}
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;