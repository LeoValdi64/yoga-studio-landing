"use client";

import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { href: "#classes", label: "Classes" },
  { href: "#schedule", label: "Schedule" },
  { href: "#instructors", label: "Instructors" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-sage-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Leaf className="w-7 h-7 text-sage-600 transition-transform group-hover:rotate-12" />
            <span className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-bold text-sage-800 tracking-tight">
              ZenFlow <span className="font-normal text-sage-500">Yoga</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sage-700 hover:text-sage-900 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-sage-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-sage-600 text-white text-sm font-semibold rounded-full hover:bg-sage-700 transition-colors shadow-sm"
            >
              Book a Class
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-sage-700 hover:text-sage-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-sage-100">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sage-700 hover:text-sage-900 hover:bg-sage-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-3 px-5 py-3 bg-sage-600 text-white text-center font-semibold rounded-full hover:bg-sage-700 transition-colors"
              >
                Book a Class
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
