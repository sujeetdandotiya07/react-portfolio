import React from "react";

const projects = [
  {
    id: 1,
    title: "SDSOFTECH – Business Website",
    description:
      "A modern and responsive business website designed to showcase services, highlight expertise, and provide visitors with a smooth browsing experience.",
    category: "Web Development",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    number: "01",
    image:
      "https://image.thum.io/get/width/1200/crop/800/https://sdsoftech1.netlify.app/",
    github: "https://github.com/",
    demo: "https://sdsoftech1.netlify.app/",
    status: "Live",
  },
  {
    id: 2,
    title: "Calculator App",
    description:
      "A responsive calculator application for performing everyday mathematical calculations with a clean and easy-to-use interface.",
    category: "Web Application",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    number: "02",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&auto=format&fit=crop&q=80",
    github: "https://github.com/",
    demo: "https://glassclaculter.netlify.app/", // Add your Calculator live URL here
    status: "Live",
  },
  {
    id: 3,
    title: "Language Translator",
    description:
      "A language translation application designed to help users translate text between languages through a simple and user-friendly interface.",
    category: "Utility Application",
    technologies: ["React", "JavaScript", "API", "CSS3"],
    number: "03",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format&fit=crop&q=80",
    github: "https://github.com/",
    demo: "https://text-translat.netlify.app/", // Add your Translator live URL here
    status: "Live",
  },
  {
    id: 4,
    title: "School Management ERP Software",
    description:
      "An upcoming school management ERP platform designed to streamline student records, attendance, fees, examinations, staff management, and academic administration.",
    category: "ERP Software",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    number: "04",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop&q=80",
    github: "#",
    demo: "#",
    status: "Coming Soon",
  },
];

function Project() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            My Portfolio
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore my live applications, web development projects, and upcoming
            software solutions.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950/60">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "https://placehold.co/1200x800/0f172a/22d3ee?text=Project+Preview";
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full border border-cyan-300/30 bg-slate-950/80 px-3 py-1 text-xs text-cyan-300 backdrop-blur-sm">
                  {project.category}
                </span>

                {/* Status */}
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "Coming Soon"
                      ? "border border-amber-400/30 bg-amber-400/10 text-amber-300"
                      : "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  }`}
                >
                  {project.status}
                </span>

                {/* Project number */}
                <span className="absolute bottom-3 right-5 text-5xl font-black tracking-tighter text-white/70 drop-shadow-lg">
                  {project.number}
                </span>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold transition group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                  {project.status === "Coming Soon" ? (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-amber-400/10 px-4 py-2.5 text-sm font-semibold text-amber-300">
                      Coming Soon
                    </span>
                  ) : (
                    <>
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                        >
                          GitHub <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {project.demo !== "#" ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                        >
                          Live Demo <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-500">
                          Add Live URL
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-400">
            Have a project idea? Let's build something meaningful.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let's Work Together <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
