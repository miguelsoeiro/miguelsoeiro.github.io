import heroChatImg from "@/assets/hero-chat.jpg";
import { useState, useEffect } from "react";

// list of steps and corresponding images
const steps = [
  { num: "1", title: "Ticket", desc: "Integrate Slack, Teams, Linear, and Jira" },
  { num: "2", title: "Plan", desc: "Quickly review Devin's proposal" },
  { num: "3", title: "Test", desc: "Devin tests changes by itself" },
  { num: "4", title: "PR", desc: "Review changes natively" },
];

const HeroSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [isCarouselHovering, setIsCarouselHovering] = useState(false);

  // images for each step; use placeholders if you do not have real assets
  const stepImages = [
    heroChatImg,
    "https://via.placeholder.com/800x600?text=Plan+View",
    "https://via.placeholder.com/800x600?text=Test+View",
    "https://via.placeholder.com/800x600?text=PR+View",
  ];

  // Auto-rotation for carousel
  useEffect(() => {
    if (isCarouselHovering) return;
    const interval = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, [isCarouselHovering]);


  return (
    <section className="relative pt-32 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 gradient-glow pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsl(186 100% 50% / 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm">
            <span className="px-2 py-0.5 rounded-full bg-devin-teal text-background text-xs font-semibold">
              New
            </span>
            <span className="text-muted-foreground">Introducing Devin Review</span>
            <svg
              className="w-3 h-3 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="text-teal">Devin</span>
            <span className="text-foreground">, the AI</span>
            <br />
            <span className="text-foreground">software engineer</span>
          </h1>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Start building
          </a>

          {/* Sub */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            Crush your backlog with your {" "}
            <span className="text-foreground">personal AI</span>
            <br className="hidden lg:block" />
            {" "}engineering team.
          </p>

          {/* Steps */}
          {/* reset to first step only when mouse leaves the whole group */}
          <div
            className="space-y-1 relative"
            onMouseLeave={() => setActiveStepIndex(0)}
          >
            {/* Dashed line */}
            <div className="absolute left-4 top-6 bottom-6 w-px border-l border-dashed border-devin-border" />
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                  i === activeStepIndex
                    ? "bg-devin-surface border border-devin-border"
                    : "opacity-60 hover:opacity-80"
                }`}
                onMouseEnter={() => setActiveStepIndex(i)}
                // no per-item mouseleave, container handles reset
              >
                <div
                  className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    i === activeStepIndex
                      ? "bg-devin-teal text-background"
                      : "bg-devin-surface border border-devin-border text-muted-foreground"
                  }`}
                >
                  {step.num}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {step.title}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — mock chat UI */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-devin-border shadow-2xl"
            style={{ boxShadow: "0 0 60px hsl(186 100% 50% / 0.08)" }}
          >
            <img
              src={stepImages[activeStepIndex]}
              alt="Devin AI chat interface"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* UseCases Carousel */}
      <div className="container max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Where Devin makes the biggest impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore the use cases where Devin delivers the most value
          </p>
        </div>

        {/* Carousel Container - 3 cards side by side */}
        <div className="flex gap-6 h-96 relative">
          {[
            {
              id: 1,
              title: "Bugs + Backlog Work",
              items: [
                "Ticket resolution",
                "CI/CD",
                "First-draft PR creation for backlog tasks",
              ],
            },
            {
              id: 2,
              title: "Data Engineering + Analysis",
              items: [
                "Data warehouse migrations",
                "ETL development",
                "Data cleaning and preprocessing",
              ],
            },
            {
              id: 3,
              title: "Code Migration + Refactors",
              items: [
                "Language migrations",
                "Version upgrades",
                "Codebase restructuring",
              ],
            },
          ].map((useCase, index) => {
            const getGradient = (idx: number) => {
              const gradients = [
                "from-blue-500/20 to-cyan-500/10",
                "from-cyan-500/20 to-teal-500/10",
                "from-teal-500/20 to-cyan-500/10",
              ];
              return gradients[idx];
            };

            return (
              <div
                key={useCase.id}
                className={`relative rounded-2xl border border-devin-border overflow-hidden cursor-pointer transition-all duration-500 flex flex-col ${
                  index === activeCarouselIndex
                    ? "flex-1 bg-devin-card"
                    : "flex-0 basis-24 bg-devin-surface hover:bg-devin-card/80"
                }`}
                onMouseEnter={() => {
                  setIsCarouselHovering(true);
                  setActiveCarouselIndex(index);
                }}
                onMouseLeave={() => setIsCarouselHovering(false)}
              >
                {/* Layer 1: Vertical text (collapsed state) - absolutely positioned */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-opacity">
                  <h3
                    className={`text-xs font-bold text-foreground text-center transition-opacity duration-200 ${
                      index === activeCarouselIndex ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {useCase.title}
                  </h3>
                </div>

                {/* Layer 2: Expanded content - absolutely positioned */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 will-change-opacity ${
                    index === activeCarouselIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    transitionDelay: index === activeCarouselIndex ? "150ms" : "0ms",
                  }}
                >
                  <div className="flex h-full">
                    {/* Left: Text Content */}
                    <div className="flex-1 p-8 flex flex-col justify-between min-w-0">
                      <div className="min-w-0">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                          {useCase.title}
                        </h3>
                        <ul className="space-y-3">
                          {useCase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-devin-teal mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="px-4 py-2 rounded-full bg-devin-teal text-background font-semibold text-sm hover:opacity-90 transition-opacity w-fit flex-shrink-0">
                        Learn more
                      </button>
                    </div>

                    {/* Right: Gradient Background */}
                    <div
                      className={`w-48 flex-shrink-0 bg-gradient-to-br ${getGradient(
                        index
                      )}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => {
                setIsCarouselHovering(true);
                setActiveCarouselIndex(index);
                setTimeout(() => setIsCarouselHovering(false), 3000);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeCarouselIndex
                  ? "bg-devin-teal w-8"
                  : "bg-devin-border hover:bg-devin-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
