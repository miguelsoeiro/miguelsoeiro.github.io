import { useState } from "react";
import { CheckCircle, Search, Layers, Users, Zap, TrendingUp, Code, Workflow, Target, Settings, BookOpen, Cpu, Award } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import PartnersSection from "@/components/PartnersSection";

const steps = [
  {
    num: "01",
    title: "Diagnosticar",
    desc: "Mapeamos processos e identificamos ineficiências com relatório detalhado",
    timelineData: [
      { id: 1, title: "Auditoria IT", date: "Fase 1", content: "Análise completa da infraestrutura e ferramentas actuais", category: "Auditoria", icon: Search, relatedIds: [2, 3], status: "completed" as const, energy: 100 },
      { id: 2, title: "Mapeamento", date: "Fase 2", content: "Documentação de workflows e processos internos", category: "Análise", icon: Workflow, relatedIds: [1, 3], status: "completed" as const, energy: 95 },
      { id: 3, title: "Identificar Gaps", date: "Fase 3", content: "Lacunas operacionais e oportunidades de melhoria", category: "Análise", icon: Target, relatedIds: [1, 2, 4], status: "completed" as const, energy: 90 },
      { id: 4, title: "Prioridades", date: "Fase 4", content: "Ranking de iniciativas por impacto e esforço", category: "Estratégia", icon: TrendingUp, relatedIds: [3, 5], status: "completed" as const, energy: 85 },
      { id: 5, title: "Relatório", date: "Fase 5", content: "Documento com diagnóstico e recomendações detalhadas", category: "Relatório", icon: Layers, relatedIds: [4], status: "in-progress" as const, energy: 80 },
    ],
  },
  {
    num: "02",
    title: "Planear",
    desc: "Desenhamos o plano de acção com tecnologias e timings adequados",
    timelineData: [
      { id: 1, title: "Roadmap", date: "Fase 1", content: "Plano de implementação faseado e priorizado", category: "Planeamento", icon: Target, relatedIds: [2, 3], status: "completed" as const, energy: 100 },
      { id: 2, title: "Selecção Tech", date: "Fase 2", content: "Escolha das ferramentas e tecnologias mais adequadas", category: "Tecnologia", icon: Settings, relatedIds: [1, 3], status: "completed" as const, energy: 95 },
      { id: 3, title: "Timings", date: "Fase 3", content: "Calendário realista com marcos e entregas definidos", category: "Planeamento", icon: CheckCircle, relatedIds: [2, 4], status: "in-progress" as const, energy: 90 },
      { id: 4, title: "Orçamento", date: "Fase 4", content: "Estimativa de custos e retorno esperado (ROI)", category: "Financeiro", icon: TrendingUp, relatedIds: [3, 5], status: "in-progress" as const, energy: 85 },
      { id: 5, title: "Aprovação", date: "Fase 5", content: "Validação do plano e kick-off com todos os stakeholders", category: "Gestão", icon: Users, relatedIds: [4], status: "pending" as const, energy: 75 },
    ],
  },
  {
    num: "03",
    title: "Implementar",
    desc: "Executamos as soluções com acompanhamento contínuo",
    timelineData: [
      { id: 1, title: "Configuração", date: "Fase 1", content: "Setup de ferramentas, licenças e acessos", category: "Setup", icon: Settings, relatedIds: [2, 3], status: "pending" as const, energy: 100 },
      { id: 2, title: "Integrações", date: "Fase 2", content: "Ligação entre sistemas e automação de workflows", category: "Dev", icon: Workflow, relatedIds: [1, 3], status: "pending" as const, energy: 95 },
      { id: 3, title: "Testes", date: "Fase 3", content: "Validação com utilizadores reais em ambiente controlado", category: "Qualidade", icon: CheckCircle, relatedIds: [2, 4], status: "pending" as const, energy: 90 },
      { id: 4, title: "Go-live", date: "Fase 4", content: "Lançamento e activação em ambiente de produção", category: "Deploy", icon: Zap, relatedIds: [3, 5], status: "pending" as const, energy: 85 },
      { id: 5, title: "Relatório Mensal", date: "Fase 5", content: "Acompanhamento e relatório de impacto mensal", category: "Relatório", icon: TrendingUp, relatedIds: [4], status: "pending" as const, energy: 75 },
    ],
  },
  {
    num: "04",
    title: "Formar",
    desc: "Capacitamos a equipa para tirar o máximo partido",
    timelineData: [
      { id: 1, title: "Levantamento", date: "Fase 1", content: "Identificação das necessidades de formação por perfil", category: "Análise", icon: Search, relatedIds: [2, 3], status: "pending" as const, energy: 100 },
      { id: 2, title: "Workshops", date: "Fase 2", content: "Sessões práticas presenciais ou remotas (máx. 12 pax)", category: "Formação", icon: Users, relatedIds: [1, 3], status: "pending" as const, energy: 95 },
      { id: 3, title: "Materiais", date: "Fase 3", content: "Guias, manuais e certificados de participação incluídos", category: "Documentação", icon: BookOpen, relatedIds: [2, 4], status: "pending" as const, energy: 90 },
      { id: 4, title: "Avaliação", date: "Fase 4", content: "Medição das competências adquiridas pela equipa", category: "Avaliação", icon: Award, relatedIds: [3, 5], status: "pending" as const, energy: 85 },
      { id: 5, title: "Follow-up", date: "Fase 5", content: "Suporte pós-formação e optimização contínua", category: "Suporte", icon: TrendingUp, relatedIds: [4], status: "pending" as const, energy: 80 },
    ],
  },
];

const services = [
  {
    icon: Layers,
    title: "Consultoria de Processos",
    description: "Avença mensal com acompanhamento contínuo, mapeamento de processos internos e relatório mensal de progresso.",
    color: "text-blue-400",
    packs: [
      { name: "Starter", detail: "8h/mês", price: "600 €/mês" },
      { name: "Growth", detail: "16h/mês", price: "1.100 €/mês" },
      { name: "Scale", detail: "32h/mês", price: "2.000 €/mês" },
    ],
    note: "Horas adicionais: 80 €/h · Prazo mínimo: 3 meses",
    includes: [
      "Mapeamento e redesign de processos",
      "Arquitectura de sistemas",
      "Relatório mensal de progresso",
    ],
  },
  {
    icon: Settings,
    title: "Tecnologia & Ferramentas",
    description: "Revenda e implementação de Microsoft 365 e Atlassian, com suporte de 1.º nível e gestão de conta incluídos.",
    color: "text-cyan-400",
    packs: [
      { name: "Microsoft 365", detail: "Business Basic, Standard, Premium", price: "Mensal ou anual" },
      { name: "Atlassian", detail: "Jira, Confluence, JSM", price: "Mensal ou anual" },
    ],
    note: "Desconto de 10% em plano anual",
    includes: [
      "Implementação e configuração",
      "Suporte de 1.º nível incluído",
      "Automação e integração de sistemas",
    ],
  },
  {
    icon: Cpu,
    title: "Consultoria de IA",
    description: "Selecção da ferramenta de IA certa para cada necessidade, gestão de licenças enterprise e formação específica incluída.",
    color: "text-teal-400",
    packs: [
      { name: "Fee de gestão", detail: "Claude, ChatGPT, Gemini, Copilot, Devin…", price: "150 €/mês" },
    ],
    note: "Desconto de 10% em plano anual · Avença + subscrição gerida",
    includes: [
      "Selecção da ferramenta adequada ao negócio",
      "Gestão de contas e licenças enterprise",
      "Formação específica em cada ferramenta",
    ],
  },
  {
    icon: BookOpen,
    title: "Formação",
    description: "Sessões práticas presenciais ou remotas para equipas de até 12 participantes, com materiais e certificado incluídos.",
    color: "text-emerald-400",
    packs: [
      { name: "Sessão 3h", detail: "Até 12 participantes", price: "450 €" },
      { name: "Sessão 6h", detail: "Até 12 participantes", price: "800 €" },
      { name: "Pack 5 Sessões", detail: "Desconto ~12%", price: "3.500 €" },
    ],
    note: "Inclui materiais e certificado de participação",
    includes: [
      "Microsoft 365, Atlassian, IA, Metodologias ágeis",
      "Formato presencial ou remoto",
      "Certificado de participação",
    ],
  },
];

const differentials = [
  { icon: Code, title: "Visão técnica profunda", desc: "Background em programação e arquitectura de sistemas." },
  { icon: Users, title: "Gestão ágil", desc: "Experiência em liderança e gestão de equipas ágeis." },
  { icon: Cpu, title: "IA aplicada", desc: "Conhecimento prático focado em resultados reais, não em buzzwords." },
  { icon: Settings, title: "Curadoria de IA", desc: "Ajudamos a escolher, gerir e formar nas ferramentas de IA certas." },
  { icon: Target, title: "Foco em PMEs", desc: "Soluções à medida da realidade e dimensão das empresas portuguesas." },
  { icon: CheckCircle, title: "Transparência total", desc: "Comunicação clara, sem letras pequenas, sem surpresas no final do mês." },
];

const HeroSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="home" className="relative pt-16 pb-0 overflow-hidden mb-0">
      {/* Glow background */}
      <div className="absolute inset-0 gradient-glow pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 20%, hsl(186 100% 50% / 0.15) 0%, transparent 60%)" }}
      />

      {/* ── Hero ── */}
      <div className="container max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm">
            <span className="px-2 py-0.5 rounded-full bg-devin-teal text-background text-xs font-semibold">PMEs</span>
            <span className="text-muted-foreground">Consultoria · Inovação · Formação</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="text-teal">Parceiro estratégico</span>
            <span className="text-foreground"> para</span>
            <br />
            <span className="text-foreground">PMEs portuguesas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            Diagnosticamos, planeamos, implementamos e formamos
            <br className="hidden lg:block" />
            — para que a sua empresa cresça sem fricção.
          </p>

          {/* Steps */}
          <div className="space-y-1 relative" onMouseLeave={() => setActiveStepIndex(0)}>
            <div className="absolute left-4 top-6 bottom-6 w-px border-l border-dashed border-devin-border" />
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                  i === activeStepIndex ? "bg-devin-surface border border-devin-border" : "opacity-60 hover:opacity-80"
                }`}
                onMouseEnter={() => setActiveStepIndex(i)}
              >
                <div
                  className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    i === activeStepIndex ? "bg-devin-teal text-background" : "bg-devin-surface border border-devin-border text-muted-foreground"
                  }`}
                >
                  {step.num}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{step.title}</div>
                  <div className="text-muted-foreground text-xs">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:geral@transparentreasons.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-devin-teal text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Agendar Diagnóstico Gratuito
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-devin-border text-foreground font-medium text-sm hover:border-devin-teal/40 transition-colors"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        {/* Right — Radial Orbital Timeline */}
        <div className="relative flex justify-center lg:justify-end items-center sm:h-screen h-auto overflow-hidden">
          <RadialOrbitalTimeline timelineData={steps[activeStepIndex].timelineData} />
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 pb-12">

        {/* ── Serviços ── */}
        <div id="servicos" className="mt-8 pt-16 border-t border-devin-border scroll-mt-24">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Os nossos <span className="text-teal">Serviços</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Quatro pilares complementares para optimizar processos, adoptar tecnologia e capacitar equipas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-devin-surface/50 border border-devin-border rounded-2xl p-8 hover:border-devin-teal/40 transition-all hover:bg-devin-card/50"
                >
                  <div className={`${service.color} mb-4 transition-transform group-hover:scale-110 inline-block`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-devin-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="space-y-2 mb-4">
                    {service.packs.map((pack, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-devin-card border border-devin-border"
                      >
                        <div className="min-w-0 mr-4">
                          <span className="text-sm font-semibold text-foreground">{pack.name}</span>
                          <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">· {pack.detail}</span>
                        </div>
                        <span className="text-sm font-bold text-devin-teal whitespace-nowrap">{pack.price}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground mb-5 italic">{service.note}</p>

                  <ul className="space-y-2">
                    {service.includes.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-devin-teal mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Metodologia ── */}
        <div id="metodologia" className="mt-20 pt-20 border-t border-devin-border scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              A nossa <span className="text-teal">Metodologia</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado em 4 etapas para transformar a sua organização sem fricção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Diagnosticar",
                description: "Mapeamos os processos actuais, identificamos ineficiências e definimos prioridades com um relatório de diagnóstico detalhado.",
                icon: Search,
                color: "text-blue-400",
              },
              {
                number: "02",
                title: "Planear",
                description: "Desenhamos o plano de acção com tecnologias, metodologias e timings adequados ao seu negócio e orçamento.",
                icon: Target,
                color: "text-cyan-400",
              },
              {
                number: "03",
                title: "Implementar",
                description: "Executamos as soluções com acompanhamento contínuo — ferramentas, automações, integrações e relatórios mensais.",
                icon: Settings,
                color: "text-teal-400",
              },
              {
                number: "04",
                title: "Formar",
                description: "Capacitamos a equipa para tirar o máximo partido de tudo o que foi implementado, com materiais e certificado incluídos.",
                icon: Users,
                color: "text-emerald-400",
              },
            ].map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="group bg-devin-surface/50 border border-devin-border rounded-2xl p-8 hover:border-devin-teal/50 transition-all hover:bg-devin-card/50 hover:shadow-lg cursor-pointer h-full flex flex-col">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-devin-card border-2 border-devin-border rounded-full flex items-center justify-center font-bold text-devin-teal text-sm group-hover:border-devin-teal transition-all">
                      {step.number}
                    </div>
                    <div className={`${step.color} mb-6 mt-6 transition-transform group-hover:scale-110`}>
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-devin-teal transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
                    <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-devin-teal to-transparent transition-all" />
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-devin-teal/30 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Porquê nós ── */}
        <div className="mt-20 pt-20 border-t border-devin-border">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Porquê a <span className="text-teal">Transparent Reasons?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma combinação única de visão técnica, experiência em gestão e conhecimento aplicado de IA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((diff, idx) => {
              const IconComponent = diff.icon;
              return (
                <div
                  key={idx}
                  className="group flex gap-4 p-6 rounded-2xl bg-devin-surface/50 border border-devin-border hover:border-devin-teal/40 transition-all"
                >
                  <div className="text-devin-teal flex-shrink-0 mt-0.5">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-devin-teal transition-colors">
                      {diff.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Parceiros ── */}
        <PartnersSection />

        {/* ── CTA ── */}
        <div className="mt-12 mb-0 pb-0">
          <div
            className="relative rounded-3xl border border-devin-border bg-devin-card overflow-hidden p-8 text-center"
            style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Comece pelo
              <br />
              <span className="text-teal">diagnóstico gratuito</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6 text-sm leading-relaxed">
              Uma conversa sem compromisso para perceber onde a sua empresa pode ganhar eficiência.
              <br />Sem letras pequenas, sem surpresas.
            </p>
            <a
              href="mailto:geral@transparentreasons.com"
              className="inline-flex items-center px-8 py-3 rounded-full bg-devin-teal text-background font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Agendar Diagnóstico Gratuito
            </a>

            {/* Contactos */}
            <div id="contactos" className="mt-16 pt-12 border-t border-devin-border scroll-mt-24">
              <p className="text-muted-foreground text-sm mb-1">Prefere contactar directamente?</p>
              <h3 className="text-2xl font-bold text-foreground mb-3">Fale connosco</h3>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm mb-6">
                Respondemos a todas as mensagens em menos de 24 horas úteis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:geral@transparentreasons.com"
                  className="px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-devin-teal/40 transition-colors"
                >
                  geral@transparentreasons.com
                </a>
                <a
                  href="https://www.transparentreasons.com"
                  className="px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-devin-teal/40 transition-colors"
                >
                  www.transparentreasons.com
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
