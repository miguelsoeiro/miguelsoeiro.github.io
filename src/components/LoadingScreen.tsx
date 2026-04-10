import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-devin-navy flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.05) 0%, hsl(222 28% 9%) 60%)",
      }}
    >
      {/* Logo Animation */}
      <div className="mb-8 relative">
        <div className="w-16 h-16 rounded-2xl bg-devin-teal flex items-center justify-center animate-pulse">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="7" cy="7" r="3" fill="hsl(222 28% 9%)" />
            <circle cx="17" cy="7" r="3" fill="hsl(222 28% 9%)" />
            <circle cx="7" cy="17" r="3" fill="hsl(222 28% 9%)" />
            <circle cx="17" cy="17" r="3" fill="hsl(222 28% 9%)" />
          </svg>
        </div>
        {/* Glow effect */}
        <div
          className="absolute inset-0 w-16 h-16 rounded-2xl bg-devin-teal/30 blur-xl -z-10"
          style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
        />
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Transparent Reasons
      </h2>
      <p className="text-devin-muted text-sm mb-8">
        A carregar experiência...
      </p>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-devin-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-devin-teal rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-devin-muted text-xs mt-3">
        {Math.min(Math.round(progress), 100)}%
      </p>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-devin-teal/20 animate-ping" />
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-devin-teal/10 animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white/20 animate-ping" style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default LoadingScreen;
