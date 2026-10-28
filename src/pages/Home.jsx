import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ArrowUpRight,
  Download,
  Code2,
  Sparkles,
  MapPin,
  Mail,
  Terminal,
  Layers,
  CheckCircle2,
  ChevronDown,
  Copy,
  Check,
  Cpu,
  FileCode,
  Flame,
  ExternalLink,
  Laptop,
} from "lucide-react";

// ==========================================
// CONSTANTS & CONFIGURATION DATA
// ==========================================
const ROLES = [
  "Full Stack Developer",
  "React & Node Specialist",
  "UI/UX Craftsperson",
  "Problem Solver",
];

const SKILLS = [
  { name: "React.js", category: "Frontend", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "TypeScript", category: "Language", level: "Proficient" },
  { name: "Next.js", category: "Framework", level: "Proficient" },
  { name: "MongoDB", category: "Database", level: "Advanced" },
  { name: "Tailwind CSS", category: "Styling", level: "Expert" },
  { name: "PostgreSQL", category: "Database", level: "Intermediate" },
  { name: "Docker", category: "DevOps", level: "Intermediate" },
];

const CODE_SNIPPETS = {
  "developer.ts": `// Sujeet Dandotiya — Full Stack Engineer
export const developer: DeveloperProfile = {
  name: "Sujeet Dandotiya",
  location: "India 🇮🇳",
  status: "Open to High-Impact Opportunities",
  coreStack: ["React 19", "Node.js", "TypeScript", "Next.js", "Tailwind"],
  philosophy: "Clean architecture, resilient backend, delightful UX",
  sayHello: () => "Let's build something remarkable together!"
};`,

  "skills.json": `{
  "frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  "backend": ["Node.js", "Express", "RESTful APIs", "GraphQL"],
  "database": ["MongoDB", "PostgreSQL", "Redis"],
  "practices": ["Clean Code", "TDD", "CI/CD Pipelines", "Agile"]
}`,

  "contact.sh": `#!/bin/bash
# Direct Connection Channel
curl -X POST https://api.sujeet.dev/v1/connect \\
  -H "Authorization: Bearer INVITATION_TOKEN" \\
  -d '{
    "to": "sujeetdandotiya@gmail.com",
    "subject": "Exciting collaboration opportunity"
  }'
echo "Message dispatched successfully."`,
};

// ==========================================
// BACKGROUND PARTICLES CANVAS
// ==========================================
function InteractiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 18000), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw & update nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 211, 252, ${p.alpha})`;
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  );
}

// ==========================================
// TYPEWRITER TEXT EFFECT COMPONENT
// ==========================================
function TypewriterEffect({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1600,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
          if (currentText === fullWord) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className="inline-flex items-center text-cyan-400 font-semibold tracking-wide">
      <span>{currentText}</span>
      <span className="ml-1 inline-block h-6 w-[2.5px] animate-pulse bg-cyan-400" />
    </span>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function Home() {
  // Cursor ambient spotlight state
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const containerRef = useRef(null);

  // 3D Tilt Card Parallax
  const cardRef = useRef(null);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const [cardGlow, setCardGlow] = useState({ x: 50, y: 50 });

  // Code Tab state & Copy Notification
  const [activeTab, setActiveTab] = useState("developer.ts");
  const [copied, setCopied] = useState(false);
  const [statsCounter, setStatsCounter] = useState(0);

  // Mouse move handler for ambient background spotlight
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // 3D Card tilt calculation
  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    setCardRotation({ x: rotateX, y: rotateY });
    setCardGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleCardMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 });
    setCardGlow({ x: 50, y: 50 });
  };

  const handleCopyCode = () => {
    const textToCopy = CODE_SNIPPETS[activeTab];
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home"
      aria-label="Developer Hero Introduction"
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070f] px-5 pb-20 pt-28 text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200 sm:px-8 lg:px-14"
    >
      {/* Dynamic Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[110px] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      />

      {/* Atmospheric Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Particle Canvas */}
      <InteractiveCanvas />

      {/* Main Grid Content */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* ========================================================= */}
        {/* LEFT COLUMN: HERO INFORMATION & ACTIONS (7 COLS)         */}
        {/* ========================================================= */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-300 shadow-sm backdrop-blur-xl transition hover:border-emerald-400/50 sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </span>
            <span>Available for Full-time Roles & Contracts</span>
            <span className="text-emerald-500">•</span>
            <span className="text-slate-400 font-normal">
              Remote / Relocate
            </span>
          </div>

          {/* Subheading Greeting */}
          <div className="mt-7 flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
            <Sparkles size={16} className="text-cyan-400 animate-pulse" />
            <span>Hey there, my name is</span>
          </div>

          {/* Primary Name Header */}
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-6xl xl:text-7xl">
            Sujeet{" "}
            <span className="relative inline-block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Dandotiya
              {/* Subtle underline bar */}
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-cyan-400/80 via-blue-500/80 to-transparent rounded-full" />
            </span>
          </h1>

          {/* Dynamic Typing Title */}
          <div className="mt-5 flex min-h-[40px] items-center text-xl font-bold text-slate-300 sm:text-2xl lg:text-3xl">
            <span className="mr-2 text-slate-400 font-medium">I am a</span>
            <TypewriterEffect words={ROLES} />
          </div>

          {/* Narrative Summary */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg sm:leading-8">
            Crafting robust, high-performance web systems and expressive user
            experiences. I bridge the divide between scalable backend
            microservices and intuitive frontend architecture using clean
            patterns, automated workflows, and modern web standards.
          </p>

          {/* Core Tech Stack Badges */}
          <div className="mt-8">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
              <Cpu size={14} className="text-cyan-400" />
              Core Competencies
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative cursor-default rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200"
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-1.5 text-[10px] text-slate-500 group-hover:text-cyan-300/80">
                    ({skill.level})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span>Explore Featured Work</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="/public/Resume.pdf"
              download="Sujeet_Dandotiya_Resume.pdf"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Download
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              <span>Download CV</span>
            </a>

            {/* Quick Contact Button */}
            <a
              href="mailto:sujeetdandotiya@gmail.com"
              aria-label="Send email to Sujeet Dandotiya"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
              title="Direct Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Social Proof & Location Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-cyan-400" />
              <span>Based in India • IST (UTC+5:30)</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop size={15} className="text-indigo-400" />
              <span>Available Globally for Remote Sync</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: 3D INTERACTIVE CODE CARD (5 COLS)           */}
        {/* ========================================================= */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
          <div
            className="w-full max-w-lg [perspective:1200px]"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div
              ref={cardRef}
              style={{
                transform: `rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)`,
                transformStyle: "preserve-3d",
              }}
              className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-2xl transition-transform duration-150 ease-out will-change-transform sm:p-6"
            >
              {/* Dynamic Interactive Card Gloss */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(400px circle at ${cardGlow.x}% ${cardGlow.y}%, rgba(56, 189, 248, 0.25), transparent 80%)`,
                }}
              />

              {/* IDE Top Window Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="ml-2 font-mono text-[11px] text-slate-500">
                    sujeet-workspace
                  </span>
                </div>

                {/* Copy Snippet Action */}
                <button
                  onClick={handleCopyCode}
                  type="button"
                  aria-label="Copy active code"
                  className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[11px] font-mono text-slate-400 transition hover:border-slate-700 hover:text-cyan-300"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-medium">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* IDE Code Tabs */}
              <div className="relative z-10 mt-3 flex items-center gap-1 border-b border-slate-800/80 pb-2">
                {Object.keys(CODE_SNIPPETS).map((filename) => {
                  const isActive = activeTab === filename;
                  return (
                    <button
                      key={filename}
                      onClick={() => setActiveTab(filename)}
                      type="button"
                      className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-mono transition-all duration-200 ${
                        isActive
                          ? "bg-slate-800/90 text-cyan-300 font-medium shadow-sm border border-slate-700/60"
                          : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                      }`}
                    >
                      <FileCode
                        size={13}
                        className={
                          isActive ? "text-cyan-400" : "text-slate-500"
                        }
                      />
                      <span>{filename}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Display Area */}
              <div className="relative z-10 mt-4 overflow-hidden rounded-xl border border-slate-800/90 bg-[#070b14]/90 p-4 font-mono text-xs sm:text-[13px]">
                <div className="flex items-center justify-between pb-2 text-[10px] text-slate-500 uppercase tracking-wider border-b border-slate-800/50 mb-3">
                  <span>Syntax: UTF-8</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    LIVE PREVIEW
                  </span>
                </div>
                <pre className="max-h-56 overflow-x-auto text-slate-300 font-mono leading-relaxed select-text">
                  <code>{CODE_SNIPPETS[activeTab]}</code>
                </pre>
              </div>

              {/* Interactive Quick Metrics Pill Grid */}
              <div className="relative z-10 mt-5 grid grid-cols-3 gap-3 border-t border-slate-800/80 pt-4 text-center">
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-2.5 transition hover:border-slate-700">
                  <div className="text-lg font-bold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mt-0.5">
                    Responsive
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-2.5 transition hover:border-slate-700">
                  <div className="text-lg font-bold text-cyan-400 tracking-tight">
                    Clean
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mt-0.5">
                    Architecture
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-2.5 transition hover:border-slate-700">
                  <div className="text-lg font-bold text-emerald-400 tracking-tight">
                    Modern
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mt-0.5">
                    Full Stack
                  </div>
                </div>
              </div>

              {/* Interactive Status Footer */}
              <div className="relative z-10 mt-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Terminal size={13} className="text-cyan-400" />
                  status: interactive mode
                </span>
                <span className="text-slate-500 text-[10px]">
                  Move mouse to tilt
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-16 flex justify-center">
        <a
          href="#projects"
          className="group inline-flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase transition hover:text-cyan-400"
        >
          <span>Scroll to explore projects</span>
          <ChevronDown
            size={18}
            className="animate-bounce text-slate-400 group-hover:text-cyan-400"
          />
        </a>
      </div>
    </section>
  );
}
