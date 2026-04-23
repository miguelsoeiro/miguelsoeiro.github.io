import { Link } from "react-router-dom";
import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

import microsoftLogo from "@/assets/logos/microsoft.svg";
import githubLogo from "@/assets/logos/github.svg";
import githubCopilotLogo from "@/assets/logos/githubcopilot.svg";
import googleLogo from "@/assets/logos/google.svg";
import geminiLogo from "@/assets/logos/googlegemini.svg";
import notebookLmLogo from "@/assets/logos/notebooklm.svg";
import atlassianLogo from "@/assets/logos/atlassian.svg";
import jiraLogo from "@/assets/logos/jira.svg";
import confluenceLogo from "@/assets/logos/confluence.svg";
import claudeLogo from "@/assets/logos/claude.svg";
import chatGptLogo from "@/assets/logos/chatgpt.svg";
import devinLogo from "@/assets/logos/devin.svg";
import grokLogo from "@/assets/logos/grok.svg";
import perplexityLogo from "@/assets/logos/perplexity.svg";

// wordmark: true → wider logo (company logotype), false → square icon (app)
const partners = [
  { id: "microsoft",      src: microsoftLogo,    alt: "Microsoft",      wordmark: true  },
  { id: "github",         src: githubLogo,        alt: "GitHub",         wordmark: false },
  { id: "github-copilot", src: githubCopilotLogo, alt: "GitHub Copilot", wordmark: false },
  { id: "google",         src: googleLogo,        alt: "Google",         wordmark: false },
  { id: "gemini",         src: geminiLogo,        alt: "Gemini",         wordmark: false },
  { id: "notebooklm",    src: notebookLmLogo,    alt: "NotebookLM",     wordmark: false },
  { id: "atlassian",      src: atlassianLogo,     alt: "Atlassian",      wordmark: false },
  { id: "jira",           src: jiraLogo,          alt: "Jira",           wordmark: false },
  { id: "confluence",     src: confluenceLogo,    alt: "Confluence",     wordmark: false },
  { id: "claude",         src: claudeLogo,        alt: "Claude",         wordmark: false },
  { id: "chatgpt",        src: chatGptLogo,       alt: "ChatGPT",        wordmark: false },
  { id: "devin",          src: devinLogo,         alt: "Devin",          wordmark: false },
  { id: "grok",           src: grokLogo,          alt: "Grok",           wordmark: false },
  { id: "perplexity",     src: perplexityLogo,    alt: "Perplexity",     wordmark: false },
];

const PartnersSection = () => {
  return (
    <div id="parceiros" className="mt-16 pt-16 border-t border-devin-border scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
          <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Ecossistema de Parceiros
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
          Tecnologia em que{" "}
          <span className="text-teal">confiamos</span>
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          Trabalhamos com as melhores plataformas do mundo para entregar
          soluções robustas e escaláveis à sua organização.
        </p>
      </div>

      {/* Slider */}
      <div className="relative h-16 w-[100vw] left-1/2 -translate-x-1/2 mt-8 mb-6 overflow-hidden">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={35}
          gap={64}
        >
          {partners.map(({ id, src, alt, wordmark }) => (
            <Link
              key={id}
              to="/produtos"
              title={alt}
              className="flex items-center justify-center flex-shrink-0 group/logo"
            >
              <img
                src={src}
                alt={alt}
                className={`object-contain brightness-0 invert opacity-35 group-hover/logo:opacity-80 transition-opacity duration-300 ${
                  wordmark ? "h-7 w-auto max-w-[96px]" : "h-9 w-9"
                }`}
                draggable={false}
              />
            </Link>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-32"
          direction="left"
          blurIntensity={0.8}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-32"
          direction="right"
          blurIntensity={0.8}
        />
      </div>

      {/* Sparkles decorative strip */}
      <div className="relative mt-6 h-20 w-full overflow-hidden [mask-image:radial-gradient(55%_55%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,hsl(186_100%_50%),transparent_70%)] before:opacity-15" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-devin-border/30 bg-devin-card/20" />
        <Sparkles
          density={80}
          size={0.8}
          speed={0.7}
          opacity={0.6}
          color="hsl(186, 100%, 50%)"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
};

export default PartnersSection;
