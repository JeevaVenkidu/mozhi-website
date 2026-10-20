"use client";

import React, { useState } from "react";

type ModeKey = "typo" | "light" | "balanced" | "advanced";

interface Scenario {
  title: string;
  tag: string;
  original: string;
  modes: Record<
    ModeKey,
    {
      text: string;
      rationale: string;
    }
  >;
}

const SCENARIOS: Scenario[] = [
  {
    title: "SQL Performance Debugging",
    tag: "Database & Backend",
    original:
      "why is my postgres join with orders table taking 14 seconds when customer has 50k rows and orders has 1.2m rows",
    modes: {
      typo: {
        text: "Why is my PostgreSQL join with the orders table taking 14 seconds when the customers table has 50k rows and orders has 1.2M rows?",
        rationale: "Corrects capitalization, phrasing, and punctuation without altering inquiry scope.",
      },
      light: {
        text: "Why is my PostgreSQL query joining 'customers' (50,000 rows) with 'orders' (1.2 million rows) taking 14 seconds? What common indexing or execution plan issues should I inspect?",
        rationale: "Sharpens table names, formats quantities, and asks specifically for actionable diagnostics.",
      },
      balanced: {
        text: "I have a slow PostgreSQL join between a 'customers' table (~50k rows) and an 'orders' table (~1.2M rows) taking 14 seconds.\n\nPlease diagnose potential performance bottlenecks:\n1. Execution Plan: How to interpret EXPLAIN (ANALYZE, BUFFERS) for this query.\n2. Indexing Strategy: Which composite or B-tree indexes should exist on the join keys and filter columns.\n3. Memory & Config: Relevant postgresql.conf settings (e.g., work_mem, random_page_cost).\n4. Query Alternatives: Recommendations for query restructuring or partitioning if applicable.",
        rationale: "Structures the question into systematic technical categories while preserving user facts.",
      },
      advanced: {
        text: "You are a Principal PostgreSQL Database Administrator and Query Optimization Specialist.\n\n### Problem Statement\nA SQL query joining `customers` (~50,000 rows) with `orders` (~1,200,000 rows) is executing in ~14 seconds, which is unacceptable for production latency.\n\n### Your Objective\nDeliver a step-by-step performance investigation protocol:\n\n1. Diagnostic Commands:\n   - Provide the exact `EXPLAIN (ANALYZE, BUFFERS, VERBOSE, SETTINGS)` command to run.\n   - Detail what symptoms to check for (e.g., Sequential Scan vs Index Scan, Hash Join vs Nested Loop, disk spill in Hash/Sort operations).\n\n2. Index & Schema Checklist:\n   - Show the SQL DDL for optimal B-Tree indexes on foreign keys (`orders.customer_id`) and timestamps/statuses.\n   - Explain when Partial Indexes or Covering Indexes (`INCLUDE`) would eliminate table lookups.\n\n3. Postgres Configuration Checks:\n   - Specify recommendations for `work_mem` to prevent temp file spills to disk.\n   - Address SSD tuning parameters (`random_page_cost = 1.1`, `effective_io_concurrency`).\n\n4. Output Format:\n   - Keep explanations concise and back every recommendation with production-tested SQL statements.",
        rationale: "Assigns persona, outlines structured diagnostic requirements, schema indexing DDL, and output constraints.",
      },
    },
  },
  {
    title: "Authentication Architecture Spec",
    tag: "Security & Fullstack",
    original:
      "make an auth system with passkeys and magic links for nextjs 15 app router and explain sessions",
    modes: {
      typo: {
        text: "Build an authentication system with passkeys and magic links for Next.js 15 App Router, and explain session management.",
        rationale: "Fixes grammar and punctuation.",
      },
      light: {
        text: "How do I implement a secure passwordless authentication system (WebAuthn/passkeys and email magic links) in Next.js 15 App Router? Please explain how to handle secure sessions.",
        rationale: "Subtly clarifies passwordless terminology (WebAuthn) and session security.",
      },
      balanced: {
        text: "Design a production-ready passwordless authentication architecture for a Next.js 15 App Router application supporting Passkeys (WebAuthn) and email Magic Links.\n\nCover the following:\n1. Flow & Libraries: Recommended libraries (e.g., @simplewebauthn, Auth.js v5) and implementation flow.\n2. Session Architecture: Stateless encrypted JWT cookies vs database-backed sessions with Redis/Postgres.\n3. Middleware Protection: Validating session tokens in Next.js 15 server middleware without Edge runtime bottlenecks.\n4. Fallback Handling: Account recovery if a user loses their passkey device.",
        rationale: "Introduces standard architectural dimensions: session storage, middleware, and fallback recovery.",
      },
      advanced: {
        text: "You are a Principal Security Architect specializing in Modern Web Authentication & Next.js Core Architecture.\n\n### Task\nArchitect an enterprise-grade, passwordless authentication subsystem for a Next.js 15 (App Router, Server Actions) web application.\n\n### Core Functional Requirements\n1. WebAuthn / FIDO2 Passkeys:\n   - Registration & Authentication challenge-response flows.\n   - Relying Party (RP) configuration and public key credential storage.\n2. Magic Link Fallback:\n   - Cryptographically random single-use verification tokens with 15-minute TTL.\n   - Rate limiting and email enumeration mitigation.\n3. Session Management:\n   - Compare `httpOnly`, `Secure`, `SameSite=Lax` encrypted cookie tokens vs stateful server sessions.\n   - Implementation in Next.js 15 Server Components & Server Actions with cache invalidation.\n\n### Output Format\n- Provide TypeScript interfaces for User, Authenticator, and Session models.\n- Provide an end-to-end architecture diagram or sequence flow.\n- Flag critical security pitfalls (replay attacks, CSRF, origin validation).",
        rationale: "Comprehensive architecture specification with threat modeling, protocols, and exact interface requirements.",
      },
    },
  },
  {
    title: "Engineering Blog / Technical Copy",
    tag: "DevRel & Content",
    original:
      "write a launch tweet and paragraph for our open source local model browser extension that sounds honest not hype",
    modes: {
      typo: {
        text: "Write a launch tweet and paragraph for our open-source, local-model browser extension that sounds honest rather than hyped.",
        rationale: "Fixes hyphenation, punctuation, and wording tone.",
      },
      light: {
        text: "Write a launch tweet and a short announcement paragraph for our open-source browser extension that runs local AI models in-browser. The tone must be pragmatic, transparent, and completely free of AI hype.",
        rationale: "Emphasizes pragmatic, hype-free tone guidelines.",
      },
      balanced: {
        text: "Draft a launch announcement (one 280-character post + one 3-paragraph developer forum intro) for an open-source browser extension that runs local models (SmolLM2 on WebGPU/WASM) directly on the user's device.\n\nTone & Style Guidelines:\n- Honest, developer-to-developer voice (no 'revolutionary', 'game-changing', or 'next-gen').\n- State constraints clearly: model download size (~270MB), hardware requirements, and speed compared to cloud APIs.\n- Emphasize privacy: zero telemetry, prompts never leave the tab, completely offline.\n- Call to action: invite code contributions and issue reports.",
        rationale: "Defines output formats (tweet + forum post), bans AI hype clichés, and requires stating constraints.",
      },
      advanced: {
        text: "You are an experienced Open Source Developer Advocate writing for a discerning technical audience on Hacker News and X/Twitter.\n\n### Objective\nCompose an honest launch package for Mozhi, an open-source browser extension that refines prompts using on-device inference (SmolLM2 via WebGPU):\n\n### Deliverables\n1. Single Launch Tweet (< 280 characters):\n   - Hook explaining what it does without buzzwords.\n   - Mention WebGPU local runtime & GitHub repository.\n2. Hacker News 'Show HN' Submission:\n   - Title (concise, factual).\n   - Top comment (3 paragraphs): Motivation, technical implementation (Transformers.js worker, IndexedDB weight cache, WebGPU fallback to WASM), trade-offs (memory footprint, quality vs cloud frontier models), and where feedback is needed.\n\n### Editorial Negative Constraints\n- Strictly ban: 'revolutionize', 'seamless', 'game-changer', 'supercharge', 'unleash', 'power of AI'.\n- Be upfront about cold-start latency and browser memory limitations.",
        rationale: "Targeted channel copywriting with strict negative constraints, technical architecture specifics, and transparent limitations.",
      },
    },
  },
];

export function InteractivePlayground() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [activeMode, setActiveMode] = useState<ModeKey>("balanced");
  const [providerSimulator, setProviderSimulator] = useState<"local" | "online">("local");
  const [copied, setCopied] = useState(false);

  const currentScenario = SCENARIOS[scenarioIndex];
  const currentOutput = currentScenario.modes[activeMode];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentOutput.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const modeDescriptions: Record<ModeKey, { title: string; subtitle: string; badge: string }> = {
    typo: {
      title: "Typo & Grammar",
      subtitle: "Zero structural changes. Fixes spelling, punctuation, and typos while keeping every word intact.",
      badge: "Non-Destructive",
    },
    light: {
      title: "Level 1 — Light",
      subtitle: "Clarifies phrasing and eliminates ambiguity while strictly preserving your authentic voice.",
      badge: "Voice Preserving",
    },
    balanced: {
      title: "Level 2 — Balanced",
      subtitle: "Adds structured organization, logical formatting, and implied context to maximize LLM quality.",
      badge: "Most Popular",
    },
    advanced: {
      title: "Level 3 — Advanced",
      subtitle: "Constructs a comprehensive prompt specification: Persona, Constraints, Schema, and Test Criteria.",
      badge: "Full Specification",
    },
  };

  return (
    <section id="playground" className="py-20 md:py-32 px-4 sm:px-6 bg-[#F5F3ED] border-y border-[#E8E6DF]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header: two lines at most, disciplined scale */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-medium text-[#7A7873] uppercase tracking-wider mb-2">
              Interactive Test Bench
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#141413]">
              Experience the transformation.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666560] max-w-md leading-relaxed font-normal">
            Choose a realistic engineering prompt below or test how Mozhi&apos;s four rewrite modes adapt rough ideas into high-yield instructions.
          </p>
        </div>

        {/* Doppelrand Interactive Chassis */}
        <div className="doppelrand-shell p-2 sm:p-4">
          <div className="doppelrand-core p-4 sm:p-7 flex flex-col gap-6">
            {/* Top Controls: Scenario Selectors & Provider Mode */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#EAE8E2]">
              {/* Scenario Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#828079] mr-1 hidden sm:inline">Scenario:</span>
                {SCENARIOS.map((sc, idx) => (
                  <button
                    key={sc.title}
                    onClick={() => setScenarioIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      scenarioIndex === idx
                        ? "bg-[#141413] text-white shadow-sm"
                        : "bg-[#F4F2EC] text-[#55534E] hover:bg-[#EAE7DF] hover:text-[#141413]"
                    }`}
                  >
                    <span>{sc.title}</span>
                    <span className="ml-1.5 opacity-60 text-[10px] hidden md:inline">({sc.tag})</span>
                  </button>
                ))}
              </div>

              {/* Provider Simulator Toggle */}
              <div className="flex items-center gap-2 self-start lg:self-auto">
                <span className="text-xs font-mono text-[#828079]">Provider:</span>
                <div className="inline-flex p-0.5 rounded-lg bg-[#F4F2EC] border border-[#E4E1D8] text-xs font-mono">
                  <button
                    onClick={() => setProviderSimulator("local")}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      providerSimulator === "local"
                        ? "bg-white text-[#141413] shadow-xs font-medium"
                        : "text-[#77756F] hover:text-[#141413]"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    Local WebGPU
                  </button>
                  <button
                    onClick={() => setProviderSimulator("online")}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      providerSimulator === "online"
                        ? "bg-white text-[#141413] shadow-xs font-medium"
                        : "text-[#77756F] hover:text-[#141413]"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6344F5]" />
                    Online BYOK
                  </button>
                </div>
              </div>
            </div>

            {/* Provider Runtime Specs Bar */}
            <div className="px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E8E5DC] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#62605B]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#141413]">Runtime Status:</span>
                {providerSimulator === "local" ? (
                  <span className="text-[#15803D] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    In-Browser SmolLM2 (360M) • 0 External Requests • ~272MB Cached
                  </span>
                ) : (
                  <span className="text-[#6344F5] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#6344F5]" />
                    HTTPS Endpoint • Client-Direct • API Key Never Sent to Mozhi
                  </span>
                )}
              </div>
              <div className="text-[11px] text-[#8C8A84]">
                Latency: {providerSimulator === "local" ? "~180ms on WebGPU" : "Network Dependent"}
              </div>
            </div>

            {/* Mode Selector Tabs (Big & Tactile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {(["typo", "light", "balanced", "advanced"] as const).map((mode) => {
                const info = modeDescriptions[mode];
                const isActive = activeMode === mode;
                return (
                  <button
                    key={mode}
                    onClick={() => setActiveMode(mode)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-w-0 ${
                      isActive
                        ? "bg-white border-[#141413] shadow-sm ring-1 ring-[#141413]"
                        : "bg-[#FAF9F6] border-[#E8E6DF] hover:border-[#D5D3CB] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1.5">
                      <span className="text-xs font-semibold text-[#141413]">{info.title}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded truncate ${
                          isActive
                            ? "bg-[#141413] text-white"
                            : "bg-[#EFECE4] text-[#696761]"
                        }`}
                      >
                        {info.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#706E68] leading-tight line-clamp-2">
                      {info.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Split View: Original vs Enhanced */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Left Column: Original Rough Thought */}
              <div className="lg:col-span-5 flex flex-col rounded-xl bg-[#FAF9F5] border border-[#E8E5DC] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-medium text-[#7D7B75] uppercase tracking-wider">
                    Raw User Draft
                  </span>
                  <span className="text-[11px] font-mono text-[#999790]">
                    {currentScenario.original.length} chars
                  </span>
                </div>
                <div className="flex-1 p-3 rounded-lg bg-white border border-[#E4E1D7] text-sm text-[#3E3C38] font-sans italic leading-relaxed">
                  &quot;{currentScenario.original}&quot;
                </div>
                <div className="mt-3 text-xs text-[#807E78] font-sans">
                  Notice: Incomplete casing, colloquial structure, missing criteria for the model.
                </div>
              </div>

              {/* Right Column: Mozhi Proposed Rewrite */}
              <div className="lg:col-span-7 flex flex-col rounded-xl bg-white border border-[#DEDAD0] shadow-sm p-4">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#F2EFE8]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#141413]">
                      Enhanced with {modeDescriptions[activeMode].title}
                    </span>
                    <span className="text-[11px] font-mono text-[#15803D] bg-[#EDF8F1] px-2 py-0.5 rounded-full border border-[#D5EFE0]">
                      +{currentOutput.text.length - currentScenario.original.length} chars
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#141413] text-white text-xs font-medium hover:bg-[#2A2926] active:scale-95 transition-all shadow-xs"
                  >
                    {copied ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-[#A5E3BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" strokeWidth="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" strokeWidth="2" />
                        </svg>
                        <span>Copy Output</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex-1 min-h-[180px] max-h-[300px] overflow-y-auto p-3.5 rounded-lg bg-[#FAF9F6] border border-[#E5E3DC] font-sans text-sm text-[#181716] leading-relaxed whitespace-pre-line selection:bg-[#141413] selection:text-white">
                  {currentOutput.text}
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#F2EFE8] flex items-center justify-between text-xs text-[#706E68]">
                  <span className="font-mono text-[11px]">
                    Rationale: {currentOutput.rationale}
                  </span>
                  <span className="text-[11px] text-[#9E9C94] hidden sm:inline">
                    Editable before insert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
