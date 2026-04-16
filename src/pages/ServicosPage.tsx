import { useParams, Navigate } from "react-router-dom";
import { Layers, Settings, Cpu, BookOpen, CheckCircle, ArrowLeft } from "lucide-react";
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
  "tecnologia-ferramentas": {
    icon: Settings,
    color: "text-cyan-400",
    badge: "Subscrição Mensal ou Anual",
    title: "Tecnologia & Ferramentas",
    subtitle: "Revenda e implementação de Microsoft 365 e Atlassian, com suporte de 1.º nível e gestão de conta incluídos.",
    description:
      "Adquirir licenças é a parte fácil. O desafio está em implementar bem, integrar com os processos existentes e garantir que a equipa realmente adopta as ferramentas. A Transparent Reasons trata de tudo — da escolha do plano à configuração, passando pelo suporte contínuo.",
    includes: [
      "Análise das necessidades antes de qualquer recomendação",
      "Gestão completa de licenças, acessos e renovações",
      "Configuração e implementação das ferramentas",
      "Suporte de 1.º nível para utilizadores finais",
      "Formação inicial da equipa incluída",
      "Automação e integração entre ferramentas",
    ],
    packs: [
      {
        name: "Microsoft 365 Business Basic",
        hours: "Email, Teams, SharePoint (1 TB), OneDrive",
        price: "Preço por utilizador",
        ideal: "Para equipas que precisam de colaboração e email na cloud",
      },
      {
        name: "Microsoft 365 Business Standard",
        hours: "Inclui apps Office desktop + tudo do Basic",
        price: "Preço por utilizador",
        ideal: "Para quem também precisa do Word, Excel e PowerPoint instalados",
      },
      {
        name: "Microsoft 365 Business Premium",
        hours: "Segurança avançada (Intune, Defender) + tudo do Standard",
        price: "Preço por utilizador",
        ideal: "Para empresas com requisitos de segurança mais exigentes",
      },
      {
        name: "Atlassian (Jira / Confluence / JSM)",
        hours: "Gestão de projectos, documentação interna, service desk",
        price: "Preço por utilizador",
        ideal: "Para equipas que gerem projectos e processos de forma estruturada",
      },
    ],
    notes: ["Desconto de 10% em plano anual", "Preços finais dependem do número de utilizadores — contacte-nos para proposta"],
  },
  "consultoria-ia": {
    icon: Cpu,
    color: "text-teal-400",
    badge: "Avença + Subscrição Gerida",
    title: "Consultoria de IA",
    subtitle: "Selecção da ferramenta de IA certa para cada necessidade, gestão de licenças enterprise e formação específica incluída.",
    description:
      "O mercado de ferramentas de IA é enorme e cresce todos os meses. Escolher mal custa dinheiro e tempo. A Transparent Reasons avalia as necessidades reais da sua equipa, recomenda as ferramentas certas, gere as licenças enterprise e garante que a adopção é bem feita — com formação específica incluída.",
    includes: [
      "Avaliação das necessidades e recomendação das ferramentas mais adequadas",
      "Gestão de contas enterprise: licenças, acessos, facturação e custos",
      "Monitorização do uso e optimização de custos mensais",
      "Formação prática para a equipa em cada ferramenta adoptada",
      "Acompanhamento de novas funcionalidades e actualizações relevantes",
      "Relatório mensal de utilização e retorno gerado",
    ],
    packs: [
      {
        name: "Fee de gestão",
        hours: "Claude, ChatGPT, Gemini, GitHub Copilot, Devin, NotebookLM, Grok, Perplexity…",
        price: "150 €/mês",
        ideal: "Gestão completa de uma ou mais ferramentas de IA enterprise",
      },
    ],
    notes: [
      "Desconto de 10% em plano anual",
      "O custo das licenças das ferramentas é facturado ao custo real — sem markup",
    ],
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

const ServicosPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug as ServiceSlug];

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;

  return (
    <PageLayout>
      <div className="container max-w-4xl mx-auto px-6 pb-24">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <a href="/" className="hover:text-devin-teal transition-colors">Home</a>
          <span>/</span>
          <a href="/#servicos" className="hover:text-devin-teal transition-colors">Serviços</a>
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
          <a href="/#servicos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors">
            <ArrowLeft size={14} />
            Ver todos os serviços
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default ServicosPage;
