"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="pt-20 pb-12 px-4 sm:px-6 bg-[#FAF9F6] border-t border-[#E8E6DF] overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#ECE9E0]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/mozhi-logo-mono-black.svg"
                alt="Mozhi"
                className="h-8 w-auto"
              />
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F0EDE4] text-[#696761] border border-[#E2DED4]">
                மொழி
              </span>
            </div>

            <p className="text-sm text-[#66645E] leading-relaxed max-w-sm">
              A sovereign, local-first browser extension for rewriting prompts with mathematical clarity. Run SmolLM2 in-browser or connect your own API.
            </p>

            <div className="text-xs font-mono text-[#8C8A84] mt-2">
              மொழி (*mozhi*) — Tamil for language, speech, and expression.
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div className="md:col-span-3 flex flex-col gap-3 text-sm">
            <span className="text-xs font-mono font-bold text-[#141413] uppercase tracking-wider mb-1">
              Product &amp; Workflow
            </span>
            <a href="#how-it-works" className="text-[#66645E] hover:text-[#141413] transition-colors">
              How It Works
            </a>
            <a href="#playground" className="text-[#66645E] hover:text-[#141413] transition-colors">
              Interactive Test Bench
            </a>
            <a href="#modes" className="text-[#66645E] hover:text-[#141413] transition-colors">
              4 Enhancement Modes
            </a>
            <a href="#architecture" className="text-[#66645E] hover:text-[#141413] transition-colors">
              Local vs Online Engine
            </a>
            <a href="#faq" className="text-[#66645E] hover:text-[#141413] transition-colors">
              Frequently Asked Questions
            </a>
          </div>

          {/* Links Column 2: Governance & Open Source */}
          <div className="md:col-span-4 flex flex-col gap-3 text-sm">
            <span className="text-xs font-mono font-bold text-[#141413] uppercase tracking-wider mb-1">
              Transparency &amp; Code
            </span>
            <a
              href="https://github.com/JeevaVenkidu/mozhi-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#66645E] hover:text-[#141413] transition-colors flex items-center gap-1.5"
            >
              <span>GitHub Repository</span>
              <span className="text-[10px] font-mono bg-[#EFECE3] px-1.5 py-0.5 rounded">v0.1.0</span>
            </a>
            <a href="#privacy" className="text-[#66645E] hover:text-[#141413] transition-colors">
              Privacy Policy &amp; Security Spec
            </a>
            <a href="#install" className="text-[#66645E] hover:text-[#141413] transition-colors">
              Chrome Web Store Listing
            </a>
            <div className="mt-2 p-3 rounded-xl bg-[#F4F2EC] border border-[#E5E2D7] text-xs font-mono text-[#6A6862]">
              Strictly non-commercial &amp; open source under the MIT License.
            </div>
          </div>
        </div>

        {/* Big Quiet Wordmark: Monument typographic anchor */}
        <div className="pt-12 pb-6 text-center select-none overflow-hidden" aria-hidden="true">
          <div className="font-serif text-[clamp(4.5rem,14vw,10.5rem)] font-normal text-[#EAE7DE] leading-none tracking-tight">
            MOZHI
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A8882] pt-6 border-t border-[#ECE9E0]">
          <div>
            © 2026 Mozhi Project. Crafted with care for clear thinking.
          </div>
          <div className="flex items-center gap-4">
            <span>Zero telemetry</span>
            <span>•</span>
            <span>Zero ad trackers</span>
            <span>•</span>
            <span>100% In-Browser</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
