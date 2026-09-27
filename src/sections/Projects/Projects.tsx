import ProjectCard from "../../components/project/ProjectCard";
import { projects } from "../../data/projects";
import useScrollReveal from "../../hooks/useScrollReveal";

function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
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
            Selected Work
          </p>

          <h2 className="text-[#F8F7FF]">
            Projects I've
            <br />
             <span className="gradient-text">
             built and explored.
            </span>
             
          </h2>

          <p className="mt-6 text-lg text-[#716B85]">
            A selection of applications and technical projects
            focused on solving real-world problems.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;