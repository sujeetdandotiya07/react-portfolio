import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  CodeXml,
  Eye,
} from "lucide-react";

function Footer() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    try {
      const key = "portfolio_visit_count";
      const count = parseInt(localStorage.getItem(key) || "0", 10) + 1;

      localStorage.setItem(key, count.toString());
      setVisitCount(count);
    } catch (error) {
      // Handle unavailable browser storage safely.
      setVisitCount(0);
    }
  }, []);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "My Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sujeetdandotiya07",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sujeet-dandotiya-41b73b3a7/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sujeet_dandotiya/",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sujeetdandotiya@gmail.com",
      href: "mailto:sujeetdandotiya@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6267652566",
      href: "tel:+916267652566",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                <CodeXml size={25} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Sujeet Dandotiya
                  <span className="text-cyan-400">.</span>
                </h2>

                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Full Stack Developer
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              I build modern, responsive and user-friendly web experiences with
              clean code and creative design. Let's turn your ideas into
              reality.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-slate-950"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600 transition-colors group-hover:bg-cyan-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Get In Touch</h3>

            <ul className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <Icon
                      size={19}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-cyan-400"
                    />

                    <a
                      href={item.href}
                      className="break-all text-sm text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      {item.value}
                    </a>
                  </li>
                );
              })}

              <li className="flex items-start gap-3">
                <MapPin
                  size={19}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-cyan-400"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Gwalior, India
                </span>
              </li>
            </ul>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916267652566?text=Hello%20Sujeet!%20I%20want%20to%20work%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-all hover:gap-3"
            >
              Work with me
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-center text-xs leading-6 text-slate-500 sm:text-left sm:text-sm">
              © {currentYear} Sujeet Dandotiya. All rights reserved.
            </p>

            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <Eye size={14} aria-hidden="true" />
              {visitCount} Visits
            </span>
          </div>

          {/* Policy Links */}
          <div className="flex items-center justify-center gap-5 text-xs text-slate-500 sm:text-sm">
            <Link
              to="/privacy"
              className="transition-colors hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-slate-700"
            />

            <Link to="/terms" className="transition-colors hover:text-cyan-400">
              Terms
            </Link>
          </div>

          {/* Back To Top */}
          <a
            href="/#home"
            aria-label="Back to top"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 sm:mx-0"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
