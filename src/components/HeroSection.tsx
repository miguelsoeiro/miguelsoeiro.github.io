import heroChatImg from "@/assets/hero-chat.jpg";
import { useState, useEffect } from "react";
import CTASection from "./CTASection";
import { CheckCircle, Search, Layers, Users } from "lucide-react";

// list of steps and corresponding images
const steps = [
  { num: "1", title: "Diagnóstico", desc: "Análise aprofundada da sua infraestrutura IT atual" },
  { num: "2", title: "Estratégia", desc: "Planeamento da solução IA personalizada" },
  { num: "3", title: "Implementação", desc: "Deployment com suporte contínuo" },
  { num: "4", title: "Formação", desc: "Capacitação da sua equipa" },
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
    <section id="home" className="relative pt-16 pb-0 overflow-hidden mb-0" style={{ overflow: 'hidden' }}>
      {/* Glow background */}
      <div className="absolute inset-0 gradient-glow pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsl(186 100% 50% / 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-0">
        {/* Left */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm">
            <span className="px-2 py-0.5 rounded-full bg-devin-teal text-background text-xs font-semibold">
              Nova Era
            </span>
            <span className="text-muted-foreground">Transformação Digital com IA</span>
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
            <span className="text-teal">[NOVO] Parceiro de IT</span>
            <span className="text-foreground"> para a</span>
            <br />
            <span className="text-foreground bg-yellow-400 text-black px-2">era da IA e muito mais</span>
          </h1>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Começar Transformação
          </a>

          {/* Sub */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            Transformamos organizações através de {" "}
            <span className="text-foreground">tecnologia inteligente</span>
            <br className="hidden lg:block" />
            {" "}e inovação.
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
      <div className="container max-w-7xl mx-auto px-6 py-12 mb-0">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Soluções que transformam
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Casos de uso onde a IA gera o maior impacto na sua organização
          </p>
        </div>

        {/* Carousel Container - 3 cards side by side */}
        <div className="flex gap-6 h-96 relative">
          {[
            {
              id: 1,
              title: "Automação Inteligente",
              items: [
                "Otimização de processos com IA",
                "Automatização de workflows",
                "Integração com ferramentas existentes",
              ],
            },
            {
              id: 2,
              title: "Análise de Dados",
              items: [
                "Implementação de data lakes",
                "Business Intelligence avançado",
                "Insights em tempo real",
              ],
            },
            {
              id: 3,
              title: "Segurança & Compliance",
              items: [
                "Proteção de dados com IA",
                "Conformidade RGPD",
                "Auditoria automatizada",
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
        <div className="flex justify-center gap-2 mt-8 mb-12">
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

        {/* Use Cases Grid Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Transformação Digital",
              icon: "💻",
              items: [
                "Migração para cloud",
                "Modernização de aplicações",
                "Integração de ferramentas",
              ],
            },
            {
              title: "IA & Automação",
              icon: "🤖",
              items: [
                "Implementação de agentes IA",
                "Processos automatizados",
                "Análise preditiva",
              ],
            },
            {
              title: "E muitas outras",
              icon: "⭐",
              items: [
                "Otimização de performance",
                "Gestão de segurança",
                "Consultoria estratégica",
                "Suporte ao utilizador",
                "Documentação assistida",
              ],
            },
          ].map((category, idx) => (
            <div
              key={idx}
              className="bg-devin-surface/50 border border-devin-border rounded-2xl p-8 hover:border-devin-teal/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-devin-teal mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section - A nossa Metodologia */}
        <div id="metodologia" className="mt-20 pt-20 border-t border-devin-border scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              A nossa <span className="text-teal">Metodologia</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado de 4 fases para transformar a sua organização com IA
            </p>
          </div>

          {/* Timeline / Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: 1,
                title: "Diagnóstico de Eficiência",
                description: "Auditoria aos processos atuais e infraestrutura (Office 365).",
                icon: Search,
                color: "text-blue-400",
              },
              {
                number: 2,
                title: "Arquitetura de Soluções",
                description: "Desenho do ecossistema de IA (Agentes Gemini/Claude) e Software à Medida.",
                icon: Layers,
                color: "text-cyan-400",
              },
              {
                number: 3,
                title: "Implementação & Dev",
                description: "Desenvolvimento assistido por Devin e configuração de ferramentas de produtividade.",
                icon: CheckCircle,
                color: "text-teal-400",
              },
              {
                number: 4,
                title: "Capacitação & Formação",
                description: "Workshop para equipas dominarem Copilot e ferramentas customizadas.",
                icon: Users,
                color: "text-emerald-400",
              },
            ].map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="relative">
                  {/* Card */}
                  <div className="group bg-devin-surface/50 border border-devin-border rounded-2xl p-8 hover:border-devin-teal/50 transition-all hover:bg-devin-card/50 hover:shadow-lg cursor-pointer h-full flex flex-col">
                    {/* Step Number Circle */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-devin-card border-2 border-devin-border rounded-full flex items-center justify-center font-bold text-devin-teal group-hover:border-devin-teal transition-all">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`${step.color} mb-6 mt-6 transition-transform group-hover:scale-110`}>
                      <IconComponent size={32} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-devin-teal transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-devin-teal to-transparent transition-all" />
                  </div>

                  {/* Connector line (hidden on mobile) */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-devin-teal/30 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div id="transformacao" className="mt-12 mb-0 pb-0 scroll-mt-24">
          <div className="relative rounded-3xl border border-devin-border bg-devin-card overflow-hidden p-8 text-center mb-0"
            style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}>
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Transforme sua
              <br />
              <span className="text-teal">organização</span>
            </h2>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 mt-4 rounded-full bg-devin-teal text-background font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Agendar Consulta
            </a>

            {/* Enterprise */}
            <div className="mt-16 pt-12 border-t border-devin-border mb-0">
              <p className="text-muted-foreground text-sm mb-1">Quer uma solução para toda a empresa?</p>
              <h3 className="text-2xl font-bold text-foreground mb-3">Solução Enterprise Completa</h3>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm mb-6">
                Soluções personalizadas com segurança, compliance RGPD e suporte dedicado para sua organização.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#" className="px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-devin-teal/40 transition-colors">
                  Saiba Mais
                </a>
                <a id="contactos" href="#" className="px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-devin-teal/40 transition-colors scroll-mt-24">
                  Contacte-nos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
