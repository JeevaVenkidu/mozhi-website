import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { ModesDeepDive } from "@/components/ModesDeepDive";
import { LocalVsOnline } from "@/components/LocalVsOnline";
import { PrivacySection } from "@/components/PrivacySection";
import { FaqSection } from "@/components/FaqSection";
import { InstallSection } from "@/components/InstallSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFBF9] text-[#141413]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <InteractivePlayground />
        <ModesDeepDive />
        <LocalVsOnline />
        <PrivacySection />
        <FaqSection />
        <InstallSection />
      </main>
      <Footer />
    </div>
  );
}
