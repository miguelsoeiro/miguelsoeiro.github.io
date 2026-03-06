import React, { useState, useEffect } from "react";

const useCases = [
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
];

const UseCasesCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate every 3 seconds, but only if not hovering
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const activeCase = useCases[activeIndex];

  const getGradient = (index: number) => {
    const gradients = [
      "from-blue-500/20 to-cyan-500/10",
      "from-cyan-500/20 to-teal-500/10",
      "from-teal-500/20 to-cyan-500/10",
    ];
    return gradients[index];
  };

  const getBackgroundColor = (index: number) => {
    const colors = [
      "bg-gradient-to-br from-blue-500/10",
      "bg-gradient-to-br from-cyan-500/10",
      "bg-gradient-to-br from-teal-500/10",
    ];
    return colors[index];
  };

  return (
    <section className="py-12">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Heading */}
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
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`relative rounded-2xl border border-devin-border overflow-hidden cursor-pointer transition-all duration-500 flex flex-col ${
                index === activeIndex
                  ? "flex-1 bg-devin-card"
                  : "flex-0 basis-24 bg-devin-surface hover:bg-devin-card/80"
              }`}
              onMouseEnter={() => {
                setIsHovering(true);
                setActiveIndex(index);
              }}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Layer 1: Vertical text (collapsed state) - absolutely positioned */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-opacity">
                <h3
                  className={`text-xs font-bold text-foreground text-center transition-opacity duration-200 ${
                    index === activeIndex ? "opacity-0" : "opacity-100"
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
                  index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                style={{
                  transitionDelay: index === activeIndex ? "150ms" : "0ms",
                }}
              >
                <div className="flex h-full">
                  {/* Left: Text Content */}
                  <div className="flex-1 p-8 flex flex-col justify-between overflow-hidden">
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
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsHovering(true);
                setActiveIndex(index);
                setTimeout(() => setIsHovering(false), 3000);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex
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

export default UseCasesCarouselSection;
