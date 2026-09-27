
import logo from "../../assets/images/navbar/logo.png";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[#2A2145] bg-[#0D0B1A]/80 px-6 py-4 backdrop-blur-md">

        {/* Logo */}
  <a href="#home" className="flex h-10 w-32 items-center">
  <img
    src={logo}
    alt="Abhijith V S"
  className="h-full w-auto scale-[2.2] object-contain origin-left"
  />
</a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#A9A4BC] transition-colors duration-300 hover:text-[#F8F7FF]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C026D3] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)]"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  );
}

export default Navbar;