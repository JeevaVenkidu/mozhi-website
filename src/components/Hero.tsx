"use client";

import React, { useState } from "react";

export function Hero() {
  const [selectedMode, setSelectedMode] = useState<"Typo" | "Light" | "Balanced" | "Advanced">("Balanced");
  const [copied, setCopied] = useState(false);

  const sampleOriginal =
    "why is react re-rendering my list component on every keystroke in searchbar";

  const sampleEnhancedMap = {
    Typo: "Why is React re-rendering my list component on every keystroke in the search bar?",
    Light:
      "Why does my React list component re-render on every keystroke in the search input? How can I prevent unnecessary re-renders?",
    Balanced:
      "Explain why a React list component re-renders on every keystroke in a parent search bar. Identify root causes (unmemoized props, state placement, inline functions) and provide a concise code fix using React.memo or useDeferredValue.",
    Advanced:
      "You are a Senior React Performance Engineer. Diagnose and resolve unwanted re-renders of a list component caused by typing into a search input.\n\nContext & Requirements:\n1. Root Cause Analysis: Explain reconciliation triggers (parent state update, reference equality).\n2. Solutions: Compare React.memo, useMemo, useCallback, and useDeferredValue.\n3. Code Example: Provide a clean TypeScript before/after demonstrating decoupled state.\n4. Verification: How to profile with React DevTools Profiler.",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleEnhancedMap[selectedMode]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 overflow-hidden">
      {/* Subtle architectural ambient highlight */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6344F5]/[0.035] via-[#EAE6DF]/40 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl text-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F2EC] border border-[#E4E1D8] text-xs font-mono font-medium text-[#5A5852] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>Local-First Browser Extension for ChatGPT</span>
          <span className="text-[#A3A199]">•</span>
          <span className="text-[#787670]">Free & Open Source</span>
        </div>

        {/* Display Headline: Two lines at most, disciplined scale */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.03em] font-normal text-[#141413] max-w-4xl mx-auto text-balance">
          Sharpen every prompt <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#44423D]">before you hit send.</span>
        </h1>

        {/* Supporting subtext: honest, crisp */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#5E5D59] max-w-2xl mx-auto leading-relaxed text-pretty font-normal">
          Rooted in Tamil <span className="font-medium text-[#141413]">mozhi</span> (மொழி — language & clear expression). Mozhi refines rough thoughts directly in your browser using local WebGPU inference or your private API key. Never auto-submits.
        </p>

        {/* Action Buttons: Button-in-button nested architecture */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#install"
            className="group relative inline-flex items-center gap-3.5 px-6 py-3.5 rounded-full bg-[#141413] text-white text-sm sm:text-base font-medium hover:bg-[#262624] active:scale-[0.98] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            <span>Add to Chrome — Free</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

          <a
            href="https://github.com/JeevaVenkidu/mozhi-website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white border border-[#DEDAD1] text-[#444340] text-sm sm:text-base font-medium hover:bg-[#F9F8F5] hover:border-[#CDC9BF] hover:text-[#141413] transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Read Architecture</span>
          </a>
        </div>

        {/* Technical Specification Chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#6A6964]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6344F5]" />
            SmolLM2 360M on WebGPU
          </span>
          <span className="text-[#D3D0C7]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Zero Remote Tracking
          </span>
          <span className="text-[#D3D0C7]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
            Insert without Auto-Submit
          </span>
        </div>

        {/* Faux Browser & Mozhi Extension Doppelrand Chassis */}
        <div className="mt-14 relative mx-auto max-w-4xl text-left">
          {/* Double bezel shell */}
          <div className="doppelrand-shell p-2 sm:p-3">
            <div className="doppelrand-core overflow-hidden">
              {/* Browser window chrome bar */}
              <div className="bg-[#FAF9F5] border-b border-[#E8E6E0] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E5E3DC] border border-[#D5D2C9]" />
                  <span className="w-3 h-3 rounded-full bg-[#E5E3DC] border border-[#D5D2C9]" />
                  <span className="w-3 h-3 rounded-full bg-[#E5E3DC] border border-[#D5D2C9]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E0DED7] text-xs font-mono text-[#6F6D67] max-w-xs truncate">
                  <svg className="w-3.5 h-3.5 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>chatgpt.com</span>
                  <span className="text-[#AFAEA8]">/</span>
                  <span className="text-[#403F3C]">c/new-prompt</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#8C8A84] hidden sm:inline">Mozhi MV3 Active</span>
                  <div className="w-6 h-6 rounded bg-[#141413] flex items-center justify-center p-1 text-white">
                    <svg viewBox="0 0 512 512" fill="none" className="w-full h-full text-white">
                      <g fill="none" stroke="currentColor" strokeWidth="48" strokeLinecap="butt" strokeLinejoin="round">
                        <path d="M 354 154 A 156 156 0 1 0 234 412 C 310 412 366 370 374 286" />
                        <path d="M 286 196 A 78 78 0 1 0 234 334 C 304 334 344 280 356 210 C 364 164 392 144 434 144 L 434 412" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Main Content Showcase: Simulated Extension Popup */}
              <div className="bg-[#FBFBF9] p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: ChatGPT page context simulation */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8A8881]">
                    Context: ChatGPT Input Box
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E8E6E0] shadow-sm">
                    <p className="text-xs text-[#8A8881] font-mono mb-2">Original text in draft:</p>
                    <p className="text-sm font-sans text-[#2A2927] italic bg-[#F8F7F2] p-2.5 rounded-lg border border-[#EFECE3]">
                      &quot;{sampleOriginal}&quot;
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-[#7A7872]">
                      <span className="font-mono">75 chars</span>
                      <span className="text-[#10B981] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        Mozhi ready to enhance
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F2EC] border border-[#E4E1D8] text-xs text-[#55534E] leading-relaxed">
                    <strong className="text-[#141413] block mb-1">Safety First Workflow</strong>
                    Mozhi does not hijack your typing or automatically trigger the ChatGPT submit button. When you click Insert, the enhanced prompt fills the textarea for you to review and send manually.
                  </div>
                </div>

                {/* Right: The actual Mozhi Popup Interface */}
                <div className="lg:col-span-7 rounded-2xl bg-white border border-[#DEDAD1] shadow-lg p-5 flex flex-col gap-4">
                  {/* Popup Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE8]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#141413] flex items-center justify-center p-1 text-white">
                        <svg viewBox="0 0 512 512" fill="none" className="w-full h-full text-white">
                          <g fill="none" stroke="currentColor" strokeWidth="48" strokeLinecap="butt" strokeLinejoin="round">
                            <path d="M 354 154 A 156 156 0 1 0 234 412 C 310 412 366 370 374 286" />
                            <path d="M 286 196 A 78 78 0 1 0 234 334 C 304 334 344 280 356 210 C 364 164 392 144 434 144 L 434 412" />
                          </g>
                        </svg>
                      </div>
                      <span className="font-serif text-lg font-bold text-[#141413]">Mozhi</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F0EDE4] text-[#605E58] border border-[#E4E0D6]">
                        v0.1.0
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#585651]">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EDF8F1] text-[#246A3D] border border-[#D3ECD9]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#246A3D]" />
                        Local: SmolLM2
                      </span>
                    </div>
                  </div>

                  {/* Mode Selector Tabs */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono text-[#74726C]">Enhancement Mode</label>
                      <span className="text-[11px] text-[#A09E96]">Click to preview</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-[#F4F2EC] rounded-xl border border-[#E6E3DA]">
                      {(["Typo", "Light", "Balanced", "Advanced"] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setSelectedMode(mode)}
                          className={`py-1.5 text-xs font-medium rounded-lg transition-all duration-150 ${
                            selectedMode === mode
                              ? "bg-white text-[#141413] shadow-sm font-semibold"
                              : "text-[#6A6862] hover:text-[#141413]"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Output View */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs text-[#74726C]">
                      <span className="font-mono">Proposed Enhancement ({selectedMode})</span>
                      <span className="font-mono text-[11px] text-[#908E87]">
                        {sampleEnhancedMap[selectedMode].length} characters
                      </span>
                    </div>

                    <div className="min-h-[140px] max-h-[200px] overflow-y-auto p-3.5 rounded-xl bg-[#FBFBF9] border border-[#E5E3DC] font-sans text-sm text-[#1E1D1B] whitespace-pre-line leading-relaxed">
                      {sampleEnhancedMap[selectedMode]}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#F0EEE8]">
                    <button
                      onClick={() => setSelectedMode("Balanced")}
                      className="text-xs font-mono text-[#7A7872] hover:text-[#141413] transition-colors"
                    >
                      Reset Draft
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCD8CF] text-xs font-medium text-[#44423E] hover:bg-[#F5F4EE] transition-all"
                      >
                        {copied ? (
                          <>
                            <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#10B981]">Copied</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" strokeWidth="2" />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" strokeWidth="2" />
                            </svg>
                            <span>Copy Result</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141413] text-xs font-medium text-white hover:bg-[#2C2B28] transition-all shadow-sm"
                      >
                        <svg className="w-3.5 h-3.5 text-[#A5E3BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Insert into ChatGPT</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
