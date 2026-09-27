import type { Certification } from "../../data/certification";
import useScrollReveal from "../../hooks/useScrollReveal";

type CertificationCardProps = {
  certification: Certification;
  index: number;
};

function CertificationCard({
  certification,
  index,
}: CertificationCardProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`certification-card group scroll-reveal ${
        isVisible ? "is-visible" : ""
      } rounded-3xl border border-[#29233F] bg-[#0D0B1A]/70 p-8 backdrop-blur-sm`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        {/* Certificate icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#382D55] bg-[#151127] p-3">
          {certification.issuerLogo ? (
            <img
              src={certification.issuerLogo}
              alt={`${certification.issuer} logo`}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-2xl text-[#8B5CF6]">
              ◈
            </span>
          )}
        </div>

        {/* Year */}
        <span className="rounded-full border border-[#29233F] px-3 py-1 text-xs text-[#716B85]">
          {certification.year}
        </span>
      </div>

      {/* Content */}
      <div className="mt-7">
        <p className="text-sm font-medium text-[#8B5CF6]">
          {certification.issuer}
        </p>

        <h3 className="mt-2 text-2xl text-[#F8F7FF]">
          {certification.title}
        </h3>

        <p className="mt-5 leading-7 text-[#A9A4BC]">
          {certification.description}
        </p>
      </div>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {certification.skills.map((skill) => (
          <span
            key={skill}
            className="skill-tag"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Action */}
      <div className="mt-8">
        {certification.credentialUrl ? (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8F7FF] transition-colors duration-300 hover:text-[#A78BFA]"
          >
            View Certificate

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        ) : (
          <span className="text-sm font-semibold text-[#716B85]">
            Certificate details
          </span>
        )}
      </div>
    </article>
  );
}

export default CertificationCard;