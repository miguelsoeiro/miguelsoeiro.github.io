import React from "react";
import "@/styles/background.css";
import ModernNavbar from "@/components/ModernNavbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  React.useEffect(() => {
    let stop: (() => void) | undefined;
    import("@/lib/background").then((mod) => {
      if (mod && mod.default) stop = mod.default();
      else if (mod && mod.startBackground) stop = mod.startBackground();
    });
    return () => { if (stop) stop(); };
  }, []);

  return (
    <div className="bg-background text-foreground relative">
      <div id="container" className="absolute inset-0" style={{ height: "100%", overflow: "hidden" }} />
      <div id="stats" />
      <div id="ui-container" />
      <div className="relative z-10 animate-page-in">
        <ModernNavbar />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
