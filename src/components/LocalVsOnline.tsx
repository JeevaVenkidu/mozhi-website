"use client";

import React from "react";

export function LocalVsOnline() {
  return (
    <section id="architecture" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-medium text-[#7A7873] uppercase tracking-wider mb-2">
            Dual Engine Architecture
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#141413]">
            Local-first by design. Or bring your own model.
          </h2>
          <p className="mt-4 text-base text-[#61605B] leading-relaxed">
            Mozhi gives you complete sovereignty over prompt processing. Choose absolute on-device isolation, or connect to your own enterprise API endpoint.
          </p>
        </div>

        {/* Side-by-Side Comparison Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Local Engine */}
          <div className="p-8 rounded-3xl bg-[#FAF9F5] border border-[#E6E3DA] flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[#141413] uppercase">
                    Local Engine
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#EDF8F1] text-[#246A3D] border border-[#D2ECD9] font-medium">
                  Zero Network Footprint
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#141413] mb-3">
                SmolLM2 360M in your browser.
              </h3>

              <p className="text-sm text-[#575550] leading-relaxed mb-8">
                Runs completely on your hardware inside an isolated Web Worker via Transformers.js. No API keys, no subscriptions, and zero prompt text ever touches an external server.
              </p>

              <div className="space-y-4 font-mono text-xs text-[#52504B] mb-8">
                <div className="flex items-start justify-between gap-x-4 gap-y-1 flex-wrap py-2 border-b border-[#ECE9E0]">
                  <span className="text-[#888680]">Runtime Backend</span>
                  <span className="font-semibold text-[#141413]">WebGPU (q4/fp16) + WASM Fallback</span>
                </div>
                <div className="flex items-start justify-between gap-x-4 gap-y-1 flex-wrap py-2 border-b border-[#ECE9E0]">
                  <span className="text-[#888680]">Download Footprint</span>
                  <span className="font-semibold text-[#141413]">~272 MB (WebGPU) / ~386 MB (WASM)</span>
                </div>
                <div className="flex items-start justify-between gap-x-4 gap-y-1 flex-wrap py-2 border-b border-[#ECE9E0]">
                  <span className="text-[#888680]">Weight Caching</span>
                  <span className="font-semibold text-[#141413]">Browser Profile / IndexedDB Storage</span>
                </div>
                <div className="flex items-start justify-between gap-x-4 gap-y-1 flex-wrap py-2 border-b border-[#ECE9E0]">
                  <span className="text-[#888680]">Integrity Check</span>
                  <span className="font-semibold text-[#141413]">1-Token Startup Validation Probe</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD6] text-xs text-[#575550]">
              <strong className="text-[#141413] block mb-1">One-Time Download Guarantee</strong>
              The weights download once after you approve access in Settings. The popup never forces or triggers a background download without your consent.
            </div>
          </div>

          {/* Right: Online Provider */}
          <div className="p-8 rounded-3xl bg-white border border-[#E6E3DA] flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6344F5]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[#141413] uppercase">
                    Online Provider
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#F4F2EC] text-[#55534E] border border-[#E5E2D8] font-medium">
                  BYOK Compatible
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#141413] mb-3">
                Any OpenAI-compatible endpoint.
              </h3>

              <p className="text-sm text-[#575550] leading-relaxed mb-8">
                Connect Mozhi to OpenAI, Groq, OpenRouter, or your private self-hosted Ollama / vLLM cluster. You supply the API base URL, model name, and authentication token.
              </p>

              <div className="space-y-4 font-mono text-xs text-[#52504B] mb-8">
                <div className="flex items-start justify-between gap-x-4 gap-y-1 flex-wrap py-2 border-b border-[#ECE9E0]">
                  <span className="text-[#888680]">Protocol</span>
                  <span className="font-semibold text-[#141413]">Standard HTTPS Chat Completions</span>
                </div>
                <div className="flex items-start justify-between gap-x-4 gap-y-1 flex-wrap py-2 border-b border-[#ECE9E0]">
                  <span className="text-[#888680]">Key Persistence</span>
                  <span className="font-semibold text-[#141413]">chrome.storage.local (Isolated Key)</span>
                </div>
                <div className="flex items-start justify-between gap-x-4 gap-y-1 flex-wrap py-2 border-b border-[#ECE9E0]">
                  <span className="text-[#888680]">Direct Transit</span>
                  <span className="font-semibold text-[#141413]">Direct to Endpoint (Zero Proxy Servers)</span>
                </div>
                <div className="flex items-start justify-between gap-x-4 gap-y-1 flex-wrap py-2 border-b border-[#ECE9E0]">
                  <span className="text-[#888680]">Endpoint Health</span>
                  <span className="font-semibold text-[#141413]">Built-in Test Connection & Validation</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DFD6] text-xs text-[#575550]">
              <strong className="text-[#141413] block mb-1">Strict Key Revocation</strong>
              You can wipe your API key at any moment from Mozhi Settings. Mozhi never caches keys in global variables or submits them to telemetry.
            </div>
          </div>
        </div>

        {/* Critical Non-Failover Commitment */}
        <div className="mt-8 p-6 rounded-2xl bg-[#F6F4EE] border border-[#E4E0D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold text-[#991B1B] uppercase tracking-wider flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>The No Silent Failover Rule</span>
            </div>
            <p className="text-xs sm:text-sm text-[#4E4C47] leading-relaxed">
              If the Local Model runs out of memory or fails to initialize, Mozhi halts and displays an explicit diagnostic. It will <strong className="text-[#141413]">never silently route your prompt to the Online provider</strong> without your knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
