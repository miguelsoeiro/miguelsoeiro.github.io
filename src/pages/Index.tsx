import React from "react";
import "@/styles/background.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CustomersSection from "@/components/CustomersSection";
import UseCasesSection from "@/components/UseCasesSection";
import LearnSection from "@/components/LearnSection";
import UseCasesCarouselSection from "@/components/UseCasesCarouselSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  React.useEffect(() => {
    let stop: (() => void) | undefined;
    // dynamically import to keep bundle small and run only in browser
    import("@/lib/background").then((mod) => {
      if (mod && mod.default) {
        stop = mod.default();
      } else if (mod && mod.startBackground) {
        stop = mod.startBackground();
      }
    });
    return () => {
      if (stop) stop();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background canvas containers (Three.js module attaches to #container) */}
      <div id="container" />
      <div id="stats" />
      <div id="ui-container" />

      <Navbar />
      <HeroSection />
      <CustomersSection />
      <UseCasesSection />
      <LearnSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
