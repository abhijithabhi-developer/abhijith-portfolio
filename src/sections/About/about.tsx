import useScrollReveal from "../../hooks/useScrollReveal";

function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="relative px-6 py-32"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl scroll-reveal ${
          isVisible ? "is-visible" : ""
        }`}
      >
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
            About Me
          </p>

          <h2 className="text-[#F8F7FF]">
            Turning ideas into
            <br />
            <span className="gradient-text">
            real products.
            </span>
             
          </h2>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Introduction */}
         {/* Introduction */}
<div className="about-card rounded-3xl border border-[#29233F] bg-[#0D0B1A]/70 p-8 backdrop-blur-sm">
  <h3 className="text-[#F8F7FF]">
    Who I am
  </h3>

  <div className="mt-5 space-y-5 text-[#A9A4BC]">
    <p>
      I'm Abhijith, a software engineer passionate about
      building modern, reliable, and user-focused software.
    </p>

    <p>
      My primary focus is Flutter development, where I work
      on creating polished mobile applications with clean
      architecture and maintainable code.
    </p>

    <p>
      I'm also expanding my expertise across backend
      development, REST APIs, databases, and modern web
      technologies.
    </p>

    <p>I care about the details that make software feel finished — predictable state, fast screens, sensible error handling, and interfaces that are obvious to use. I keep learning deliberately, currently expanding into Python, FastAPI and AI-assisted application development</p>
  </div>
</div>

     {/* Approach */}
<div className="about-card rounded-3xl border border-[#29233F] bg-[#0D0B1A]/70 p-8 backdrop-blur-sm">

  {/* Heading */}
  <h3 className="text-[#F8F7FF]">
    How I work
  </h3>

  {/* Work Principles */}
  <div className="mt-5 space-y-6">

    {/* Clean Architecture */}
    <div>
      <p className="mb-2 font-semibold text-[#F8F7FF]">
        Clean Architecture
      </p>

      <p className="leading-7 text-[#A9A4BC]">
        I focus on separating UI, business logic, data,
        and infrastructure so applications remain easier
        to maintain and scale.
      </p>
    </div>

    {/* Continuous Learning */}
    <div>
      <p className="mb-2 font-semibold text-[#F8F7FF]">
        Continuous Learning
      </p>

      <p className="leading-7 text-[#A9A4BC]">
        I'm constantly exploring new technologies and
        improving my understanding of software engineering.
      </p>
    </div>

    {/* Building With Purpose */}
    <div>
      <p className="mb-2 font-semibold text-[#F8F7FF]">
        Building With Purpose
      </p>

      <p className="leading-7 text-[#A9A4BC]">
        I care about solving real problems rather than
        simply building features for the sake of it.
      </p>
    </div>

  </div>
</div>
        </div>

        {/* Technology highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-[#29233F] bg-[#0D0B1A]/50 p-5">
            <p className="text-2xl font-bold text-[#F8F7FF]">
              Flutter
            </p>

            <p className="mt-1 text-sm text-[#716B85]">
              Mobile Application Development
            </p>
          </div>

          <div className="rounded-2xl border border-[#29233F] bg-[#0D0B1A]/50 p-5">
            <p className="text-2xl font-bold text-[#F8F7FF]">
              JAVA
            </p>

            <p className="mt-1 text-sm text-[#716B85]">
              Software Development
            </p>
          </div>

          <div className="rounded-2xl border border-[#29233F] bg-[#0D0B1A]/50 p-5">
            <p className="text-2xl font-bold text-[#F8F7FF]">
              APIs
            </p>

            <p className="mt-1 text-sm text-[#716B85]">
              Backend Integration
            </p>
          </div>

          <div className="rounded-2xl border border-[#29233F] bg-[#0D0B1A]/50 p-5">
            <p className="text-2xl font-bold text-[#F8F7FF]">
              MySQL
            </p>

            <p className="mt-1 text-sm text-[#716B85]">
              Data & Databases
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;