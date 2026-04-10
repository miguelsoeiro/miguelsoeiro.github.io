import React, { useState } from "react";
import "@/styles/background.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="bg-background text-foreground relative">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* Background canvas containers (Three.js module attaches to #container) */}
      <div id="container" className="absolute inset-0" style={{ height: '100%', overflow: 'hidden' }} />
      <div id="stats" />
      <div id="ui-container" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
