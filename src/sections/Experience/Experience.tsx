import ExperienceCard from "../../components/experience/ExperienceCard";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
            Experience
          </p>

          <h2 className="text-[#F8F7FF]">
            My professional
            <br />
              <span className="gradient-text">
               journey so far.
            </span>
          
          </h2>

          <p className="mt-6 text-lg text-[#716B85]">
            A journey of building software, learning new technologies,
            and growing as an engineer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 h-[calc(100%-8px)] w-px bg-gradient-to-b from-[#7C3AED]/50 via-[#29233F] to-transparent" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience,) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
              
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;