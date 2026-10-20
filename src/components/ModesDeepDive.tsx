"use client";

import React from "react";

export function ModesDeepDive() {
  const modes = [
    {
      level: "Fix",
      name: "Typo & Grammar",
      badge: "Pure Correction",
      accentColor: "#141413",
      summary: "Preserves your exact words, correcting only mechanics.",
      rules: [
        "Corrects spelling, punctuation, capitalization, and grammar.",
        "Strictly prevents the addition of new requirements or expanded scope.",
        "Preserves your sentence rhythm, formatting, and direct vernacular.",
      ],
      idealFor: "Fast mobile typers, quick messaging, keeping your raw phrasing.",
    },
    {
      level: "Level 1",
      name: "Light Enhancement",
      badge: "Voice-Preserving",
      accentColor: "#4F46E5",
      summary: "Polishes phrasing and specificity while protecting your personal voice.",
      rules: [
        "Eliminates vague pronouns and ambiguous technical references.",
        "Refines awkward phrasing without sounding robotic or bloated.",
        "Leaves the conversational structure intact.",
      ],
      idealFor: "Quick research inquiries, interactive brainstorming, conversational Q&A.",
    },
    {
      level: "Level 2",
      name: "Balanced Clarity",
      badge: "Default Choice",
      accentColor: "#059669",
      summary: "Transforms unstructured thoughts into organized, logical prompts.",
      rules: [
        "Structures chaotic requests into distinct numbered points or sections.",
        "Surfaces critical implied constraints (e.g., framework versions, runtime limits).",
        "Instructs the LLM on step-by-step diagnostic reasoning.",
      ],
      idealFor: "Bug fixing, SQL queries, code review requests, feature design.",
    },
    {
      level: "Level 3",
      name: "Advanced Specification",
      badge: "Full Protocol",
      accentColor: "#D97706",
      summary: "Constructs a battle-ready task specification with persona and output schema.",
      rules: [
        "Assigns senior domain specialist persona and explicit goal definitions.",
        "Enforces negative constraints (anti-patterns, banned assumptions).",
        "Defines strict output formatting (TypeScript interfaces, tabular comparisons, JSON).",
      ],
      idealFor: "Production code generation, system architecture RFCs, complex audits.",
    },
  ];

  return (
    <section id="modes" className="py-20 md:py-32 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#E8E6DF]">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-medium text-[#7A7873] uppercase tracking-wider mb-2">
            Rewrite Modes
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#141413]">
            Four calibrated levels of craft.
          </h2>
          <p className="mt-4 text-base text-[#61605B] leading-relaxed">
            One size never fits all. Mozhi lets you dial the exact degree of intervention your prompt requires — from zero-addition spell checking to complete prompt engineering.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modes.map((m) => (
            <div
              key={m.name}
              className="p-7 rounded-2xl bg-white border border-[#E8E6DF] shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#D0CDC2] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                  <span className="text-xs font-mono font-bold text-[#828078] uppercase tracking-wider">
                    {m.level}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F4F2EC] text-[#55534E] border border-[#E5E2D8] whitespace-nowrap">
                    {m.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#141413] mb-2">
                  {m.name}
                </h3>

                <p className="text-sm text-[#4A4843] font-medium mb-6">
                  {m.summary}
                </p>

                <div className="space-y-2.5 mb-6">
                  {m.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5D5B56] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-1.5 shrink-0" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2EFE8] text-xs font-mono text-[#7D7B74]">
                <span className="font-semibold text-[#141413]">Best for:</span> {m.idealFor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
