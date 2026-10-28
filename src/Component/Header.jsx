import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skill" },
    { name: "Projects", href: "/project" },
    { name: "Services", href: "/service" },
  ];

  // Contact Details
  const email = "sujeetdandotiya@gmail.com";
  const whatsapp = "916267652566";

  const message = "Hello Sujeet! I visited your portfolio.";

  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    message,
  )}`;

  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
    "Portfolio Inquiry",
  )}&body=${encodeURIComponent(message)}`;

  const closeMenus = () => {
    setIsOpen(false);
    setShowContact(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenus}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-black text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:rotate-6">
            S
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide sm:text-xl">
              Sujeet<span className="text-cyan-400">.</span>
            </h1>

            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
              Developer Portfolio
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="relative py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Let's Talk */}
        <div className="relative hidden lg:block">
          <button
            type="button"
            onClick={() => setShowContact(!showContact)}
            aria-expanded={showContact}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Let's Talk
            <ChevronDown
              size={17}
              className={`transition-transform ${
                showContact ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Desktop Contact Dropdown */}
          {showContact && (
            <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-slate-900 p-3 shadow-2xl">
              <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Contact Me
              </p>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowContact(false)}
                className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-green-400/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <MessageCircle size={21} />
                </span>

                <span>
                  <span className="block text-sm font-semibold text-white">
                    WhatsApp
                  </span>

                  <span className="text-xs text-slate-400">Chat with me</span>
                </span>

                <ArrowUpRight size={16} className="ml-auto text-slate-500" />
              </a>

              {/* Email */}
              <a
                href={emailUrl}
                onClick={() => setShowContact(false)}
                className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-cyan-400/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Mail size={21} />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white">
                    Email
                  </span>

                  <span className="block break-all text-xs text-slate-400">
                    {email}
                  </span>
                </span>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-slate-500"
                />
              </a>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={closeMenus}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-white/5 hover:pl-6 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Mobile Contact Options */}
          <li className="pb-3 pt-2">
            <button
              type="button"
              onClick={() => setShowContact(!showContact)}
              aria-expanded={showContact}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              Let's Talk
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  showContact ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Contact Dropdown */}
            {showContact && (
              <div className="mt-3 grid grid-cols-2 gap-3">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenus}
                  className="flex flex-col items-center gap-2 rounded-xl border border-green-400/20 bg-green-400/5 p-4 text-center transition-colors hover:bg-green-400/10"
                >
                  <MessageCircle size={24} className="text-green-400" />

                  <span className="text-sm font-semibold text-white">
                    WhatsApp
                  </span>
                </a>

                {/* Email */}
                <a
                  href={emailUrl}
                  onClick={closeMenus}
                  className="flex flex-col items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-center transition-colors hover:bg-cyan-400/10"
                >
                  <Mail size={24} className="text-cyan-400" />

                  <span className="text-sm font-semibold text-white">
                    Email Me
                  </span>

                  <span className="break-all text-center text-[10px] text-slate-400">
                    {email}
                  </span>
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
