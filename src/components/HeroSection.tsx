import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Search, Layers, Users, Zap, TrendingUp, Code, Workflow, Target, Settings, BookOpen, Cpu, Award, ArrowRight } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import PartnersSection from "@/components/PartnersSection";
import BlogSection from "@/components/BlogSection";
import CasesSection from "@/components/CasesSection";
import miguelPhoto from "@/assets/miguel-soeiro.jpeg";

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

const servicoCards = [
  {
    slug: "consultoria-processos",
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
    slug: "formacao",
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

const produtoCards = [
  {
    slug: "tecnologia-ferramentas",
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
    slug: "consultoria-ia",
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
          <div className="space-y-1 relative">
            <div className="absolute left-4 top-6 bottom-6 w-px border-l border-dashed border-devin-border" />
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                  i === activeStepIndex ? "bg-devin-surface border border-devin-border" : "opacity-60 hover:opacity-80"
                }`}
                onClick={() => setActiveStepIndex(i)}
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

        {/* ── Metodologia ── */}
        <div id="metodologia" className="mt-8 pt-16 border-t border-devin-border scroll-mt-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Metodologia</span>
            </div>
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
        <div id="porque" className="mt-20 pt-20 border-t border-devin-border scroll-mt-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Porquê Nós</span>
            </div>
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
                    <h4 className="text-base font-semibold text-foreground mb-1 group-hover:text-devin-teal transition-colors">
                      {diff.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Sobre ── */}
        <div id="sobre" className="mt-20 pt-20 border-t border-devin-border scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Quem Somos</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Foto */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 lg:w-80">
                <div className="absolute inset-0 rounded-2xl ring-2 ring-devin-teal/40 pointer-events-none z-10" />
                <img
                  src={miguelPhoto}
                  alt="Miguel Pires Soeiro — Fundador da Transparent Reasons"
                  className="w-full rounded-2xl object-cover object-center shadow-lg"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-5">
              <div>
                <h3
                  className="text-3xl font-bold text-foreground mb-1"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Miguel Pires Soeiro
                </h3>
                <p
                  className="font-medium tracking-wide"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "12px", color: "#4DC8F0" }}
                >
                  Fundador · Consultoria · Dados & IA
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Com mais de 9 anos de experiência em tecnologia e gestão, trabalhei em projectos de grande escala nos sectores bancário, segurador, saúde e retalho — sempre na intersecção entre estratégia de negócio e execução técnica.
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                A Transparent Reasons nasceu dessa experiência acumulada — para ajudar PMEs portuguesas a trabalhar melhor: com processos mais claros, tecnologia bem adoptada e equipas preparadas para crescer.
              </p>

              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:bg-[#4DC8F0]/10"
                style={{ border: "1px solid #4DC8F0", color: "#4DC8F0", background: "transparent" }}
              >
                Conhecer o percurso completo
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Serviços ── */}
        <div id="servicos" className="mt-20 pt-20 border-t border-devin-border scroll-mt-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Serviços</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Os nossos <span className="text-teal">Serviços</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consultoria de processos e formação para equipas e organizações.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicoCards.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={idx}
                  to={`/servicos/${service.slug}`}
                  className="group bg-devin-surface/50 border border-devin-border rounded-2xl p-8 hover:border-devin-teal/40 transition-all hover:bg-devin-card/50 block cursor-pointer"
                >
                  <div className={`${service.color} mb-4 transition-transform group-hover:scale-110 inline-block`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-devin-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.packs.map((pack, pIdx) => (
                      <div key={pIdx} className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-devin-card border border-devin-border">
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
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-devin-teal group-hover:text-devin-teal/80 transition-colors">
                    Ver detalhe <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 flex justify-end">
            <Link to="/servicos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors">
              Ver todos os serviços <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── Produtos ── */}
        <div id="produtos-secao" className="mt-20 pt-20 border-t border-devin-border scroll-mt-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
              <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Produtos</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Os nossos <span className="text-teal">Produtos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia e inteligência artificial, seleccionada e gerida por nós.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {produtoCards.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={idx}
                  to={`/produtos/${service.slug}`}
                  className="group bg-devin-surface/50 border border-devin-border rounded-2xl p-8 hover:border-devin-teal/40 transition-all hover:bg-devin-card/50 block cursor-pointer"
                >
                  <div className={`${service.color} mb-4 transition-transform group-hover:scale-110 inline-block`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-devin-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.packs.map((pack, pIdx) => (
                      <div key={pIdx} className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-devin-card border border-devin-border">
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
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-devin-teal group-hover:text-devin-teal/80 transition-colors">
                    Ver detalhe <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 flex justify-end">
            <Link to="/produtos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors">
              Ver todos os produtos <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── Casos de Estudo ── */}
        <CasesSection />

        {/* ── Blog ── */}
        <BlogSection />

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
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
                <a
                  href="mailto:geral@transparentreasons.com"
                  className="px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-devin-teal/40 transition-colors"
                >
                  geral@transparentreasons.com
                </a>
                <a
                  href="tel:+351930679484"
                  className="px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-devin-teal/40 transition-colors"
                >
                  +351 930 679 484
                </a>
                <a
                  href="https://wa.me/351930679484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-green-400/50 hover:text-green-400 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
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
