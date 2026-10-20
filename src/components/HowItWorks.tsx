"use client";

import React from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Write roughly, anywhere",
      description:
        "Draft your messy thoughts into ChatGPT or click Mozhi's browser action popup. There is no need to engineer the prompt beforehand — just get the core facts down.",
      detail: "Preserves your draft session in browser storage if you close the popup.",
      techBadge: "Context Aware",
    },
    {
      num: "02",
      title: "Refine on your device",
      description:
        "Choose an enhancement mode and provider. The pinned SmolLM2 360M model runs inference in a sandboxed Web Worker on your GPU/WASM in ~200ms without touching the cloud.",
      detail: "Or route to your private OpenAI-compatible endpoint with your own API key.",
      techBadge: "Zero Cloud Latency",
    },
    {
      num: "03",
      title: "Review & safely insert",
      description:
        "Inspect the proposed prompt alongside your original draft. Edit the result freely. Click Insert to update ChatGPT's prompt box — Mozhi never auto-submits.",
      detail: "Prompts you before replacing text already sitting in ChatGPT's input field.",
      techBadge: "Human-in-the-Loop",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-medium text-[#7A7873] uppercase tracking-wider mb-2">
            The Workflow
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#141413]">
            How Mozhi shapes your thoughts.
          </h2>
          <p className="mt-4 text-base text-[#61605B] leading-relaxed">
            Designed for engineers, researchers, and writers who want better answers from LLMs without tedious prompt-engineering rituals.
          </p>
        </div>

        {/* 3 Step Editorial Grid: Asymmetrical card rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white border border-[#E8E6DF] shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#D6D3C9] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-[#141413]">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-[#686660] bg-[#F5F3EC] px-2.5 py-1 rounded-full border border-[#E7E4DC]">
                    {step.techBadge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#141413] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#5C5A55] leading-relaxed font-normal mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EFE8] text-xs font-mono text-[#828079]">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Safety Callout Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F5F3EC] border border-[#E5E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#141413] text-white flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#86EFAC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#141413]">The Non-Submission Principle</h4>
              <p className="text-xs text-[#63615C]">Mozhi will NEVER trigger an AI form submission. You retain complete authorship.</p>
            </div>
          </div>

          <div className="text-xs font-mono text-[#52504B] bg-white px-3 py-1.5 rounded-lg border border-[#DEDAD0] shrink-0">
            Explicit User Action Required
          </div>
        </div>
      </div>
    </section>
  );
}
