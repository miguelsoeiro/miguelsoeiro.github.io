import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

import microsoftLogo from "@/assets/logos/microsoft.svg";
import googleCloudLogo from "@/assets/logos/googlecloud.svg";
import awsLogo from "@/assets/logos/aws.svg";
import hubspotLogo from "@/assets/logos/hubspot.svg";
import cloudflareLogo from "@/assets/logos/cloudflare.svg";
import zapierLogo from "@/assets/logos/zapier.svg";
import stripeLogo from "@/assets/logos/stripe.svg";
import notionLogo from "@/assets/logos/notion.svg";

const partners = [
  { id: "microsoft",   src: microsoftLogo,   alt: "Microsoft",    className: "h-7 w-auto" },
  { id: "googlecloud", src: googleCloudLogo, alt: "Google Cloud", className: "h-7 w-auto" },
  { id: "aws",         src: awsLogo,         alt: "AWS",          className: "h-7 w-auto" },
  { id: "hubspot",     src: hubspotLogo,     alt: "HubSpot",      className: "h-7 w-auto" },
  { id: "cloudflare",  src: cloudflareLogo,  alt: "Cloudflare",   className: "h-7 w-auto" },
  { id: "zapier",      src: zapierLogo,      alt: "Zapier",       className: "h-7 w-auto" },
  { id: "stripe",      src: stripeLogo,      alt: "Stripe",       className: "h-7 w-auto" },
  { id: "notion",      src: notionLogo,      alt: "Notion",       className: "h-7 w-auto" },
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
      <div className="relative h-14 w-full max-w-3xl mx-auto">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={30}
          gap={56}
        >
          {partners.map(({ id, src, alt, className }) => (
            <img
              key={id}
              src={src}
              alt={alt}
              className={`${className} opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale brightness-200`}
              draggable={false}
            />
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
      <div className="relative mt-10 h-48 w-full overflow-hidden [mask-image:radial-gradient(55%_55%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,hsl(186_100%_50%),transparent_70%)] before:opacity-15" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-devin-border/30 bg-devin-card/20" />
        <Sparkles
          density={700}
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
