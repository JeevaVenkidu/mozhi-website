"use client";

import React from "react";

export function PrivacySection() {
  const pledges = [
    {
      title: "Zero Prompt Analytics or Logging",
      description:
        "Mozhi contains zero tracking scripts, zero Google Analytics, zero telemetry libraries, and zero phone-home pings. What you write never passes through an analytics funnel.",
      badge: "No Trackers",
    },
    {
      title: "No Central Server or User Accounts",
      description:
        "There is no Mozhi cloud backend, no account creation, no password database, and no prompt history sync. Mozhi is a sovereign tool that runs entirely within your browser profile.",
      badge: "No Cloud DB",
    },
    {
      title: "Transparent, Unencrypted Local Storage",
      description:
        "We are upfront about storage: your current draft is saved in chrome.storage.local so you don't lose work if the popup dismisses. Chrome does not encrypt this storage on disk, but clicking 'Reset' or 'Clear All Saved Data' wipes it instantly.",
      badge: "Full Transparency",
    },
    {
      title: "Isolated Credential Boundaries",
      description:
        "Your online API key is stored in dedicated, isolated extension storage with access limited strictly to trusted extension contexts. Injected website scripts cannot read your key.",
      badge: "Sandboxed Keys",
    },
  ];

  return (
    <section id="privacy" className="py-20 md:py-32 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#E8E6DF]">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-medium text-[#7A7873] uppercase tracking-wider mb-2">
            Security & Data Sovereignty
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#141413]">
            Your thoughts belong to you.
          </h2>
          <p className="mt-4 text-base text-[#61605B] leading-relaxed">
            AI tools often quietly harvest user prompts to train future models. Mozhi was built to invert this dynamic through strict local execution and radical privacy transparency.
          </p>
        </div>

        {/* 4 Pledges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pledges.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-2xl bg-white border border-[#E8E6DF] shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F4F2EC] text-[#55534E] border border-[#E5E2D8]">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#141413] mb-3">
                  {p.title}
                </h3>

                <p className="text-sm text-[#5C5A55] leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit link */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#E4E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-[#141413]">
              Review the Formal Security Documentation
            </h4>
            <p className="text-xs text-[#66645E]">
              Inspect our comprehensive threat model, storage keys, and privacy policy drafts in the repository.
            </p>
          </div>

          <a
            href="https://github.com/JeevaVenkidu/mozhi-website/blob/main/SECURITY.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4F2EC] hover:bg-[#EAE7DE] text-xs font-mono font-medium text-[#2E2D2A] transition-colors"
          >
            <span>SECURITY.md</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
