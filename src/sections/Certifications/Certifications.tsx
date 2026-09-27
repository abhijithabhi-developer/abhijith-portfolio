import CertificationCard from "../../components/certifications/CertificationCard";
import { certifications } from "../../data/certification";

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
            Certifications
          </p>

          <h2 className="text-[#F8F7FF]">
         keeps me moving forward.
            <br />
             <span className="gradient-text">
               journey so far.
            </span>
           
          </h2>

          <p className="mt-6 text-lg text-[#716B85]">
            Certifications and professional training that have
            strengthened my technical knowledge and expanded my
            development skills.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index + 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;