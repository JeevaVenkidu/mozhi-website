import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mozhi — Local-First Prompt Enhancer for Browser & ChatGPT",
  description:
    "Refine rough prompts before submitting them to AI tools. Mozhi runs on-device using a local SmolLM2 model or user-configured OpenAI endpoints. Zero telemetry, never auto-submits.",
  keywords: [
    "prompt engineering",
    "local AI",
    "browser extension",
    "SmolLM2",
    "WebGPU",
    "ChatGPT prompt enhancer",
    "privacy-first AI",
    "Mozhi",
  ],
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon-128.png",
  },
  openGraph: {
    title: "Mozhi — Local-First Prompt Enhancer",
    description:
      "Craft clearer prompts in four modes. Run in-browser with WebGPU or connect your own API key. Zero telemetry.",
    siteName: "Mozhi",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FBFBF9] text-[#141413] font-sans antialiased selection:bg-[#141413] selection:text-white">
        {children}
      </body>
    </html>
  );
}

