import React, { useState } from "react";

const navLinks = ["Home", "Enterprise", "Pricing", "Customers"];
const secondaryLinks = ["About us", "Careers", "Blog", "Contact", "Docs"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-devin-border">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-devin-teal flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="7" cy="7" r="3" fill="hsl(222 28% 9%)" />
            <circle cx="17" cy="7" r="3" fill="hsl(222 28% 9%)" />
            <circle cx="7" cy="17" r="3" fill="hsl(222 28% 9%)" />
            <circle cx="17" cy="17" r="3" fill="hsl(222 28% 9%)" />
          </svg>
        </div>
      </div>

      {/* Primary nav */}
      <div className="hidden md:flex items-center gap-1 bg-devin-surface border border-devin-border rounded-full px-2 py-1">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              link === "Home"
                ? "bg-secondary text-foreground"
                : "text-devin-muted hover:text-foreground"
            }`}
          >
            {link === "Home" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-devin-teal mr-2 align-middle" />}
            {link}
          </a>
        ))}
      </div>

      {/* Secondary nav */}
      <div className="hidden md:flex items-center gap-5">
        {secondaryLinks.map((link) => (
          <a key={link} href="#" className="text-sm text-devin-muted hover:text-foreground transition-colors flex items-center gap-0.5">
            {link}
            <svg className="w-3 h-3 ml-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-3">
        <a href="#" className="text-sm text-devin-muted hover:text-foreground transition-colors flex items-center gap-0.5">
          Login
          <svg className="w-3 h-3 ml-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <a
          href="#"
          className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Get started
        </a>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-devin-card border-b border-devin-border p-4 flex flex-col gap-3">
          {[...navLinks, ...secondaryLinks].map((link) => (
            <a key={link} href="#" className="text-sm text-foreground hover:text-devin-teal transition-colors py-1">
              {link}
            </a>
          ))}
          <a href="#" className="mt-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold text-center">
            Get started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
