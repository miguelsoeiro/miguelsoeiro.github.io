import { useParams, Navigate, Link } from "react-router-dom";
import { Layers, BookOpen, CheckCircle, ArrowLeft, Home } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const serviceData = {
  "consultoria-processos": {
    icon: Layers,
    color: "text-blue-400",
    badge: "Avença Mensal",
    title: "Consultoria de Processos",
    subtitle: "Identificamos onde a sua empresa perde eficiência e implementamos as melhorias com acompanhamento contínuo.",
    description:
      "Muitas PMEs têm processos que cresceram de forma orgânica — funcionam, mas com muito desperdício de tempo e recursos. A Transparent Reasons entra, observa, mapeia e propõe melhorias concretas. Depois acompanha a implementação ao longo do tempo, com um relatório mensal detalhado para medir o progresso.",
    includes: [
      "Reuniões regulares de acompanhamento (incluídas nas horas da avença)",
      "Mapeamento detalhado de processos internos com documentação",
      "Identificação de ineficiências, bottlenecks e pontos de melhoria",
      "Proposta e implementação de melhorias operacionais",
      "Arquitectura de sistemas e redesign de fluxos de trabalho",
      "Relatório mensal de progresso com métricas de impacto",
    ],
    packs: [
      {
        name: "Starter",
        hours: "8 horas / mês",
        price: "600 €/mês",
        ideal: "Ideal para empresas a iniciar o processo de optimização",
      },
      {
        name: "Growth",
        hours: "16 horas / mês",
        price: "1.100 €/mês",
        ideal: "Para empresas em processo activo de melhoria contínua",
      },
      {
        name: "Scale",
        hours: "32 horas / mês",
        price: "2.000 €/mês",
        ideal: "Para transformações mais ambiciosas e resultados mais rápidos",
      },
    ],
    notes: ["Horas adicionais: 80 €/hora", "Prazo mínimo de compromisso: 3 meses"],
  },
  formacao: {
    icon: BookOpen,
    color: "text-emerald-400",
    badge: "Preço Fixo por Sessão",
    title: "Formação",
    subtitle: "Sessões práticas para equipas de até 12 participantes. Presencial ou remoto. Materiais e certificado incluídos.",
    description:
      "A tecnologia só gera valor quando as pessoas a sabem usar. As sessões de formação da Transparent Reasons são práticas, focadas nas ferramentas e metodologias que a sua equipa realmente usa — sem teoria desnecessária. Máximo 12 participantes por sessão para garantir qualidade.",
    includes: [
      "Sessões adaptadas às ferramentas e nível da equipa",
      "Materiais de apoio e guias de referência rápida",
      "Certificado de participação para cada formando",
      "Suporte pós-formação por email durante 30 dias",
      "Formato presencial nas instalações do cliente ou remoto via Teams/Meet",
      "Possibilidade de gravar a sessão para consulta futura",
    ],
    packs: [
      {
        name: "Sessão 3 horas",
        hours: "Até 12 participantes · Presencial ou remoto",
        price: "450 €",
        ideal: "Introdução a uma ferramenta ou tema específico",
      },
      {
        name: "Sessão 6 horas",
        hours: "Até 12 participantes · Presencial ou remoto",
        price: "800 €",
        ideal: "Formação aprofundada com tempo para prática orientada",
      },
      {
        name: "Pack 5 Sessões",
        hours: "Até 12 participantes por sessão · Desconto ~12%",
        price: "3.500 €",
        ideal: "Programa de formação completo para um ou vários temas",
      },
    ],
    notes: [
      "Temas disponíveis: Microsoft 365, Atlassian, Ferramentas de IA, Metodologias ágeis",
      "Deslocação ao cliente incluída em Lisboa e arredores — consultar para outras localidades",
    ],
  },
};

type ServiceSlug = keyof typeof serviceData;

const redirectedSlugs: Record<string, string> = {
  "tecnologia-ferramentas": "/produtos/tecnologia-ferramentas",
  "consultoria-ia": "/produtos/consultoria-ia",
};

const ServicosPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug && redirectedSlugs[slug]) return <Navigate to={redirectedSlugs[slug]} replace />;

  const service = serviceData[slug as ServiceSlug];
  if (!service) return <Navigate to="/servicos" replace />;

  const Icon = service.icon;

  return (
    <PageLayout>
      <div className="container max-w-4xl mx-auto px-6 pb-24">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1"><Home size={14} />Home</Link>
          <span>/</span>
          <Link to="/servicos" className="hover:text-foreground transition-colors">Serviços</Link>
          <span>/</span>
          <span className="text-foreground">{service.title}</span>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground font-medium tracking-widest uppercase">{service.badge}</span>
          </div>

          <div className={`${service.color} mb-4`}>
            <Icon size={40} />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            {service.subtitle}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">Preços</h2>
          <p className="text-sm text-muted-foreground mb-8">Transparência total — sem letras pequenas.</p>

          <div className="space-y-4">
            {service.packs.map((pack, i) => (
              <div key={i} className="rounded-2xl border border-devin-border bg-devin-surface/50 p-6 hover:border-devin-teal/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg mb-1">{pack.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{pack.hours}</p>
                    <p className="text-sm text-muted-foreground italic">{pack.ideal}</p>
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <span className="text-2xl font-bold text-devin-teal">{pack.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {service.notes.length > 0 && (
            <ul className="mt-4 space-y-1">
              {service.notes.map((note, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-devin-teal mt-1.5 flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* What's included */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">O que está incluído</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-devin-surface/30 border border-devin-border">
                <CheckCircle size={16} className="text-devin-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="relative rounded-3xl border border-devin-border bg-devin-card overflow-hidden p-8 text-center"
          style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Pronto para começar?</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Agende um diagnóstico gratuito — uma conversa sem compromisso para perceber como podemos ajudar.
          </p>
          <a
            href="mailto:geral@transparentreasons.com"
            className="inline-flex items-center px-8 py-3 rounded-full bg-devin-teal text-background font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors">
            <ArrowLeft size={14} />
            Ver todos os serviços
          </Link>
        </div>

      </div>
    </PageLayout>
  );
};

export default ServicosPage;
