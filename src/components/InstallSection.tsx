"use client";

import React, { useState } from "react";

export function InstallSection() {
  const [showCliGuide, setShowCliGuide] = useState(false);

  return (
    <section id="install" className="py-24 md:py-36 px-4 sm:px-6 bg-[#F5F3ED] border-t border-[#E8E6DF] relative overflow-hidden">
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE7DF] border border-[#DDD9CE] text-xs font-mono font-medium text-[#55534E] mb-6">
          <span>Ready for Chromium Browsers</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.03em] text-[#141413] max-w-3xl mx-auto text-balance">
          Start shaping clearer prompts.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#5E5D57] max-w-xl mx-auto leading-relaxed font-normal">
          No credit card, no account registration, and zero cloud lock-in. Install Mozhi into Chrome, Brave, or Edge in seconds.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group relative inline-flex items-center gap-3.5 px-7 py-4 rounded-full bg-[#141413] text-white text-base font-medium hover:bg-[#2A2926] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
          >
            <span>Add to Chrome — Free</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

          <button
            onClick={() => setShowCliGuide(!showCliGuide)}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#D5D1C7] text-[#44423E] text-base font-medium hover:bg-[#FAF9F5] hover:border-[#BFBBB0] transition-all"
          >
            <svg className="w-4 h-4 font-mono text-[#77756F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            <span>Developer: Load Unpacked</span>
          </button>
        </div>

        {/* Developer Unpacked Guide */}
        {showCliGuide && (
          <div className="mt-8 mx-auto max-w-xl p-5 rounded-2xl bg-white border border-[#DEDAD0] shadow-sm text-left animate-fade-in text-xs font-mono text-[#4A4843]">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE3] mb-3">
              <span className="font-bold text-[#141413]">Install from Source (Developer Mode)</span>
              <button
                onClick={() => setShowCliGuide(false)}
                className="text-[#888680] hover:text-[#141413]"
              >
                ✕
              </button>
            </div>
            <ol className="space-y-2 list-decimal list-inside text-[#55534E]">
              <li>
                Clone the repository: <code className="bg-[#F4F2EC] px-1 py-0.5 rounded text-[#141413]">git clone https://github.com/JeevaVenkidu/Mozhi.git</code>
              </li>
              <li>
                Install and build: <code className="bg-[#F4F2EC] px-1 py-0.5 rounded text-[#141413]">npm install &amp;&amp; npm run build</code>
              </li>
              <li>
                Open <code className="bg-[#F4F2EC] px-1 py-0.5 rounded text-[#141413]">chrome://extensions</code> and toggle <strong>Developer mode</strong>.
              </li>
              <li>
                Click <strong>Load unpacked</strong> and select the directory: <code className="bg-[#F4F2EC] px-1 py-0.5 rounded text-[#141413]">.output/chrome-mv3</code>
              </li>
            </ol>
          </div>
        )}

        <div className="mt-8 text-xs font-mono text-[#807E78]">
          Manifest V3 • Built with TypeScript &amp; WXT • Tested with 87+ unit &amp; integration tests
        </div>
      </div>
    </section>
  );
}
