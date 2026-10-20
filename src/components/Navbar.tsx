"use client";

import React, { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4 px-4 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className="mx-auto max-w-5xl rounded-full bg-white/80 backdrop-blur-md border border-[#E8E6E0] shadow-[0_2px_12px_rgba(0,0,0,0.03)] px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300"
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/mozhi-logo-mono-black.svg"
            alt="Mozhi"
            className="h-7 sm:h-8 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
          />
          <span className="text-[11px] font-mono font-medium text-[#7A7873] px-1.5 py-0.5 rounded bg-[#F4F2EC] border border-[#E4E1D8]">
            மொழி
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#555451]">
          <a
            href="#how-it-works"
            className="hover:text-[#141413] transition-colors duration-150"
          >
            Workflow
          </a>
          <a
            href="#playground"
            className="hover:text-[#141413] transition-colors duration-150"
          >
            Live Demo
          </a>
          <a
            href="#modes"
            className="hover:text-[#141413] transition-colors duration-150"
          >
            Modes
          </a>
          <a
            href="#architecture"
            className="hover:text-[#141413] transition-colors duration-150"
          >
            Local Engine
          </a>
          <a
            href="#privacy"
            className="hover:text-[#141413] transition-colors duration-150"
          >
            Privacy
          </a>
          <a
            href="#faq"
            className="hover:text-[#141413] transition-colors duration-150"
          >
            FAQ
          </a>
        </div>

        {/* CTA & Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/JeevaVenkidu/mozhi-website"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center p-2 rounded-full text-[#666562] hover:text-[#141413] hover:bg-[#F4F2EC] transition-all"
            aria-label="GitHub Repository"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            href="#install"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141413] text-white text-xs sm:text-sm font-medium hover:bg-[#2A2A28] active:scale-95 transition-all duration-200 shadow-sm"
          >
            <span>Add to Chrome</span>
            <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#555451] hover:bg-[#F4F2EC] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-md rounded-2xl bg-white border border-[#E8E6E0] p-4 shadow-xl flex flex-col gap-3 text-sm font-medium text-[#444340]">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-[#F4F2EC]"
          >
            Workflow
          </a>
          <a
            href="#playground"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-[#F4F2EC]"
          >
            Live Demo
          </a>
          <a
            href="#modes"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-[#F4F2EC]"
          >
            Enhancement Modes
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-[#F4F2EC]"
          >
            Local Engine Architecture
          </a>
          <a
            href="#privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-[#F4F2EC]"
          >
            Privacy Guarantees
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg hover:bg-[#F4F2EC]"
          >
            Frequently Asked Questions
          </a>
        </div>
      )}
    </header>
  );
}
