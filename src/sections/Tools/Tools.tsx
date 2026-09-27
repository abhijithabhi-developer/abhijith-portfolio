import { tools } from "../../data/tools";

function Tools() {
  const scrollingTools = [...tools, ...tools];

  return (
    <section id="tools" className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
            Tools & Technologies
          </p>

          <h2 className="text-[#F8F7FF]">
            Tools I worked
            <br />
            <span className="gradient-text">with.</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="tools-marquee-wrapper mt-16">
        <div className="tools-marquee">
          {scrollingTools.map((tool, index) => (
            <div
              key={`${tool.id}-${index}`}
              className="tool-item"
            >
              <div className="tool-icon">
                <img
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                />
              </div>

              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;