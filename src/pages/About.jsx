import React from "react";
import { Link } from "react-router-dom";
import {
  UserRound,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Profile Image
import profileImg from "../assets/profile.png";

function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Readable, reusable and maintainable code.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Real Projects",
      description: "Practical solutions for real-world problems.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always exploring new tools and technologies.",
    },
  ];

  const strengths = [
    "Responsive web development",
    "Modern UI and user experience",
    "Frontend and backend integration",
    "Database design and API development",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-400">
            <UserRound size={16} />
            Get To Know Me
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A little more about my journey, my mindset and what drives me to
            build meaningful digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Profile Image */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-3xl border-l-2 border-t-2 border-cyan-400/60" />

            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-br-3xl border-b-2 border-r-2 border-blue-400/60" />

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-5 shadow-2xl sm:p-8">
              {/* Profile Photo */}
              <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-500/10 p-3 sm:p-5">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                <img
                  src={profileImg}
                  alt="Sujeet Dandotiya - Full Stack Developer"
                  className="relative mx-auto h-72 w-full rounded-xl object-contain object-center shadow-xl sm:h-96"
                  loading="lazy"
                />
              </div>

              {/* Name & Role */}
              <div className="mt-5 text-center">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Sujeet Dandotiya
                </h3>

                <p className="mt-1 text-sm font-medium text-cyan-400 sm:text-base">
                  Full Stack Developer
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Turning ideas into reality
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    One project at a time
                  </p>
                </div>

                <Code2 size={25} className="shrink-0 text-cyan-400" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-2 top-10 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950 p-3 shadow-xl sm:-right-5 sm:p-4">
              <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                <Sparkles size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">Growth Mindset</p>

                <p className="text-xs text-slate-400">Learn. Build. Improve.</p>
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Who I Am
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              Building digital products with
              <span className="text-cyan-400"> purpose and passion.</span>
            </h3>

            <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
              Hi, I'm Sujeet Dandotiya, a developer passionate about creating
              modern and useful web applications. I enjoy solving problems,
              learning new technologies and turning ideas into practical digital
              products.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
              My focus is on writing clean code, building responsive interfaces
              and connecting frontend applications with reliable backend
              services and databases.
            </p>

            {/* Strengths */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div key={strength} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-cyan-400"
                  />

                  <span className="text-sm leading-6 text-slate-300">
                    {strength}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {/* Contact Page */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Let's Connect
                <ArrowUpRight size={19} />
              </Link>

              {/* All Projects Page */}
              <Link
                to="/project"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
              >
                Explore Projects
                <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-slate-950/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-slate-950 sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                  <Icon size={23} />
                </div>

                <h4 className="text-lg font-bold text-white">{item.title}</h4>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
