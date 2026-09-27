function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#29233F] bg-[#070812] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-wide text-[#F8F7FF]"
            >
              AVS
            </a>

            <p className="mt-2 text-sm text-[#716B85]">
              Building modern digital experiences with code.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A9A4BC] transition-colors duration-300 hover:text-[#F8F7FF]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A9A4BC] transition-colors duration-300 hover:text-[#F8F7FF]"
            >
              LinkedIn
            </a>

            <a
              href="#contact"
              className="text-sm text-[#A9A4BC] transition-colors duration-300 hover:text-[#F8F7FF]"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-[#29233F]" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-sm text-[#716B85] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Abhijith V S. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition-colors duration-300 hover:text-[#A78BFA]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;