import React from "react";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "Modern, responsive, and user-friendly websites built to deliver a great experience across mobile, tablet, and desktop devices.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "02",
    icon: "</>",
    title: "Frontend Development",
    description:
      "Interactive user interfaces with reusable components, smooth animations, responsive layouts, and clean design.",
    technologies: ["React", "Tailwind CSS", "Responsive UI"],
  },
  {
    number: "03",
    icon: "{ }",
    title: "Backend Development",
    description:
      "Secure server-side applications, REST APIs, authentication systems, and business logic built for reliable performance.",
    technologies: ["Node.js", "Express.js", "REST API"],
  },
  {
    number: "04",
    icon: "▥",
    title: "Data Analytics",
    description:
      "Turn raw data into meaningful insights with data cleaning, exploratory analysis, reports, and interactive dashboards.",
    technologies: ["Python", "SQL", "Pandas", "Power BI"],
  },
  {
    number: "05",
    icon: "✳",
    title: "AI Integration",
    description:
      "Integrate AI-powered features into applications to automate workflows, improve productivity, and create smarter experiences.",
    technologies: ["AI APIs", "Python", "LLMs"],
  },
  {
    number: "06",
    icon: "◈",
    title: "Database Development",
    description:
      "Design structured databases, manage application data, and build efficient queries for scalable applications.",
    technologies: ["MongoDB", "PostgreSQL", "SQL"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            What I Offer
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            I help transform ideas into practical digital solutions through
            modern web technologies, data-driven insights, and intelligent
            application development.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 sm:p-7"
            >
              {/* Hover highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-mono text-xl font-bold text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                  {service.icon}
                </div>

                <span className="font-mono text-sm text-slate-600">
                  / {service.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold transition group-hover:text-cyan-300">
                {service.title}
              </h3>

              <p className="mt-3 min-h-24 text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:gap-3"
              >
                Discuss Your Project
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-900/50 px-6 py-9 text-center sm:px-10">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Have an idea? Let&apos;s make it happen.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Let&apos;s discuss your requirements and find the right solution for
            your project.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
