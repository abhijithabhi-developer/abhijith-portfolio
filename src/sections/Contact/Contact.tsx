function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-20 md:py-32"
    >
      <div className="contact-container mx-auto max-w-7xl">

        {/* Contact glow */}
        <div className="contact-glow" />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16">

          {/* Heading */}
          <div className="max-w-5xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
              Contact
            </p>

            <h2 className="contact-heading">
              Let's Build Something Great
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-[#A9A4BC] md:text-xl">
              I'm always interested in building meaningful products,
              solving interesting technical problems, and connecting
              with people who share a passion for technology.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abhijithsvijayan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M6.5 8.5V18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.5 5.5V5.6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 18V8.5M11 12.5C11.7 10 13.1 8.5 15.3 8.5C17.9 8.5 18.5 10.5 18.5 13V18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-base font-semibold text-[#F8F7FF]">
                  LinkedIn
                </p>

                <p className="mt-1 text-sm text-[#A9A4BC]">
                  abhijithsvijayan
                </p>
              </div>

              <span className="contact-arrow">
                →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/abhijithabhi-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M15 22V18.5C15 17.5 14.6 16.7 14 16.2C17.9 15.8 20 13.8 20 10.2C20 9 19.6 8 18.9 7.2C19.1 6.3 19 5.2 18.5 4.3C18.5 4.3 17.5 4 15.8 5.2C14.9 5 13.9 4.8 13 4.8C12.1 4.8 11.1 5 10.2 5.2C8.5 4 7.5 4.3 7.5 4.3C7 5.2 6.9 6.3 7.1 7.2C6.4 8 6 9 6 10.2C6 13.8 8.1 15.8 12 16.2C11.4 16.7 11 17.5 11 18.5V22"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 18.5C6.5 19 5.5 18.5 5 17.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-base font-semibold text-[#F8F7FF]">
                  GitHub
                </p>

                <p className="mt-1 text-sm text-[#A9A4BC]">
                  View repositories
                </p>
              </div>

              <span className="contact-arrow">
                →
              </span>
            </a>

            {/* Email */}
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abhijithabhisvijayan@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card group"
>
              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <rect
                    x="3.5"
                    y="5"
                    width="17"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M4.5 7L12 13L19.5 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-base font-semibold text-[#F8F7FF]">
                  Email
                </p>

                <p className="mt-1 text-sm text-[#A9A4BC]">
                  Send a message
                </p>
              </div>

              <span className="contact-arrow">
                →
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;