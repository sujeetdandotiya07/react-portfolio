import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiVite,
  SiNpm,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      subtitle: "Building modern user interfaces",
      icon: "</>",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      subtitle: "Server-side logic and APIs",
      icon: "{ }",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Authentication", level: 75 },
      ],
    },
    {
      title: "Database Management",
      subtitle: "Data storage and management",
      icon: "DB",
      color: "from-emerald-400 to-teal-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Data Modeling", level: 75 },
      ],
    },
  ];

  const techStack = [
    { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
    { name: "React.js", Icon: FaReact, color: "text-cyan-400" },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      color: "text-cyan-300",
    },
    { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", Icon: SiExpress, color: "text-white" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-green-400" },
    {
      name: "PostgreSQL",
      Icon: SiPostgresql,
      color: "text-sky-400",
    },
    { name: "Git", Icon: FaGitAlt, color: "text-orange-500" },
    { name: "GitHub", Icon: FaGithub, color: "text-white" },
    { name: "Postman", Icon: SiPostman, color: "text-orange-400" },
    { name: "Vite", Icon: SiVite, color: "text-purple-400" },
  ];

  const tools = [
    { name: "Git", Icon: FaGitAlt, color: "text-orange-500" },
    { name: "GitHub", Icon: FaGithub, color: "text-white" },
    { name: "VS Code", Icon: VscVscode, color: "text-blue-400" },
    { name: "Postman", Icon: SiPostman, color: "text-orange-400" },
    { name: "npm", Icon: SiNpm, color: "text-red-500" },
    { name: "Vite", Icon: SiVite, color: "text-purple-400" },
    {
      name: "Responsive Design",
      Icon: FaCode,
      color: "text-cyan-400",
    },
    {
      name: "API Integration",
      Icon: FaCode,
      color: "text-emerald-400",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            My Technical Skills
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of technologies and tools I use to build responsive
            interfaces, powerful backend systems and practical web applications.
          </p>
        </div>

        {/* Technology Icons */}
        <div className="mb-16 sm:mb-20">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">
              My Tech <span className="text-cyan-400">Stack</span>
            </h3>

            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Technologies I use to build modern web applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {techStack.map(({ name, Icon, color }) => (
              <div
                key={name}
                className="group flex w-24 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-500/10 sm:w-28 sm:p-5"
              >
                <Icon
                  className={`${color} text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl`}
                  aria-hidden="true"
                />

                <span className="text-center text-xs font-medium text-slate-300 sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-950/30 sm:p-7"
            >
              {/* Card Header */}
              <div className="mb-7 flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-lg font-black text-slate-950 shadow-lg`}
                >
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skill Progress Bars */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>

                      <span className="text-xs font-semibold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className="h-2 overflow-hidden rounded-full bg-slate-800"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        style={{ width: `${skill.level}%` }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Workflow */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6 sm:mt-20 sm:p-10">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Tools & <span className="text-cyan-400">Workflow</span>
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Tools I use during development and project delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {tools.map(({ name, Icon, color }) => (
              <div
                key={name}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Icon
                  className={`${color} text-3xl transition-transform duration-300 group-hover:scale-110 sm:text-4xl`}
                  aria-hidden="true"
                />

                <span className="text-center text-xs font-medium text-slate-300 sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 sm:text-base">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Let's Build Something
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
