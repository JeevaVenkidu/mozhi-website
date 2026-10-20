"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Does Mozhi send my prompt to external servers without asking?",
    answer:
      "Never. If you choose the Local provider, 100% of the token inference happens on your machine using WebGPU or WASM in an isolated Web Worker. Zero bytes leave your browser. If you configure the Online provider, requests are made directly from your browser to your specified endpoint only when you click Enhance.",
  },
  {
    question: "What are the hardware requirements for the Local Model?",
    answer:
      "Mozhi uses SmolLM2 360M Instruct optimized via Transformers.js. It requires a Chromium-based browser with WebGPU enabled (Chrome 113+, Brave, or Edge). If your device lacks WebGPU support, Mozhi includes an automatic WebAssembly (WASM) fallback.",
  },
  {
    question: "How large is the local model download and how is it cached?",
    answer:
      "The model download is approximately 272 MB for the WebGPU quantized variant (or 386 MB for WASM). It downloads once from Hugging Face when you approve access in Mozhi Settings, and is permanently cached in your browser's local profile storage (IndexedDB / Origin Private File System).",
  },
  {
    question: "Can I connect Mozhi to a self-hosted Ollama or vLLM instance?",
    answer:
      "Yes! Because Mozhi implements the standard OpenAI-compatible HTTPS completions shape, you can point the base URL to your local server (e.g., http://localhost:11434/v1 for Ollama) or private enterprise endpoint. Enter your local model tag and test the connection with one click.",
  },
  {
    question: "Does Mozhi work on websites other than ChatGPT?",
    answer:
      "The extension popup works anywhere in your browser on any tab — simply click the extension icon, enhance your text, and copy the result. The direct 'Insert into page' button is currently tuned for ChatGPT, and additional web interfaces will be supported in upcoming releases.",
  },
  {
    question: "How do I completely remove all stored data and model files?",
    answer:
      "Open Mozhi Settings in your browser, scroll to the Data Management section, and click 'Clear all saved data'. This instantly purges the downloaded model weights, wipes your saved preferences and prompt session, and removes any stored API key.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-medium text-[#7A7873] uppercase tracking-wider mb-2">
            Clear Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#141413]">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-base text-[#61605B] leading-relaxed">
            Everything you need to know about runtime requirements, privacy guarantees, and model configurations.
          </p>
        </div>

        {/* Minimal Accordion: 1px subtle divider rule */}
        <div className="divide-y divide-[#E8E6DF] border-y border-[#E8E6DF]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-2xl font-normal text-[#141413] group-hover:text-[#45433E] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#55534E] text-base font-mono transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-[#141413] text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base text-[#575550] leading-relaxed animate-fade-in font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
