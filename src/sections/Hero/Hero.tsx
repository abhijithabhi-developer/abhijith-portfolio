import profileImg from "../../assets/images/profile/portfolio.png"


function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div className="max-w-3xl">

          {/* Small intro */}
         <p className="hero-fade-up hero-delay-1 mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
            Software Engineer
          </p>

          {/* Main heading */}
       <h1 className="hero-fade-up hero-delay-2 text-[#F8F7FF]">
            Building digital
            <br />

            <span className="hero-gradient-text">
              experiences
            </span>

            <br />

            that matter.
          </h1>

          {/* Description */}
     <p className="hero-fade-up hero-delay-3 mt-8 max-w-2xl text-lg text-[#A9A4BC] md:text-xl">
            I'm Abhijith, a software engineer focused on building
            modern applications with Flutter, backend technologies,
            APIs, and databases.
          </p>

          {/* Buttons */}
     <div className="hero-fade-up hero-delay-4 mt-10 flex flex-wrap items-center gap-4">

            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C026D3] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#382D55] bg-[#151127]/50 px-7 py-3.5 text-sm font-semibold text-[#F8F7FF] transition-all duration-300 hover:border-[#7C3AED] hover:bg-[#151127]"
            >
              Let's Talk
            </a>

          </div>

          {/* Tech highlights */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#716B85]">
            <span>Flutter</span>
            <span>React</span>
            <span>Java</span>
            <span>REST APIs</span>
            <span>MySQL</span>
              <span>PostgreSql</span>
          </div>
        </div>

{/* Right Visual */}
<div className="hero-visual relative flex min-h-[540px] items-center justify-center">

  {/* Main glow */}
  <div className="absolute h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[130px]" />

  {/* Decorative ring */}
  <div className="absolute h-[470px] w-[470px] rounded-full border border-[#7C3AED]/20" />

  {/* Secondary ring */}
  <div className="absolute h-[410px] w-[410px] rounded-full border border-[#C026D3]/15" />

  {/* Profile container */}
  <div className="relative flex h-[420px] w-[420px] items-center justify-center overflow-hidden rounded-full border border-[#382D55] bg-[#0D0B1A]/90 shadow-[0_0_100px_rgba(124,58,237,0.18)]">

    {/* Profile Image */}
    <img
      src={profileImg}
      alt="Abhijith"
      className="h-full w-full object-cover object-top"
    />

  </div>

  {/* Small floating accent */}
  <div className="absolute right-[4%] top-[14%] h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

  <div className="absolute bottom-[14%] left-[4%] h-2.5 w-2.5 rounded-full bg-[#C026D3] shadow-[0_0_20px_rgba(192,38,211,0.6)]" />

</div>

      </div>
    </section>
  );
}

export default Hero;