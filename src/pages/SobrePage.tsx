import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, ArrowRight, Code, Users, Cpu, Settings, Target, CheckCircle, Brain, Eye, Lightbulb } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const schemaOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": "https://www.transparentreasons.com/#organization",
      "name": "Transparent Reasons",
      "url": "https://www.transparentreasons.com",
      "logo": "https://www.transparentreasons.com/apple-touch-icon.png",
      "description": "Consultoria de processos, tecnologia e formação para PMEs portuguesas. Diagnóstico, planeamento, implementação e formação — sem fricção.",
      "address": { "@type": "PostalAddress", "addressCountry": "PT", "addressLocality": "Lisboa" },
      "contactPoint": { "@type": "ContactPoint", "telephone": "+351930679484", "contactType": "customer service", "availableLanguage": "Portuguese" },
      "sameAs": [
        "https://www.linkedin.com/company/transparent-reasons/",
        "https://www.instagram.com/transparentreasons/",
        "https://www.facebook.com/transparentreasons"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.transparentreasons.com/" },
        { "@type": "ListItem", "position": 2, "name": "Sobre Nós", "item": "https://www.transparentreasons.com/sobre" }
      ]
    }
  ]
};

const differentials = [
  {
    icon: Code,
    title: "Visão técnica profunda",
    desc: "Temos um background real em programação e arquitectura de sistemas. Isso significa que entendemos o que é tecnicamente possível, identificamos os riscos das soluções propostas e falamos a mesma linguagem que as equipas de IT dos nossos clientes. Não vendemos buzzwords — entregamos implementações.",
  },
  {
    icon: Users,
    title: "Gestão ágil com experiência real",
    desc: "O fundador liderou equipas de até 15 pessoas em projectos de grande escala para clientes bancários internacionais. Essa experiência em gestão ágil — Scrum, Kanban, PMI — aplica-se directamente à gestão de projectos dos nossos clientes, com metodologias adaptadas à realidade de cada empresa.",
  },
  {
    icon: Brain,
    title: "IA aplicada, não especulativa",
    desc: "Trabalhamos com IA no dia-a-dia: desde arquitecturas de dados com machine learning integrado até ferramentas de produtividade como Copilot e ChatGPT Enterprise. O nosso foco é o impacto prático — automação de tarefas repetitivas, apoio à decisão e melhoria da experiência do cliente.",
  },
  {
    icon: Settings,
    title: "Curadoria rigorosa de ferramentas",
    desc: "Existe uma ferramenta para tudo — e a maioria não serve para o seu contexto. Fazemos a curadoria baseada em critérios objectivos: custo real, curva de aprendizagem, integrações disponíveis e suporte pós-implementação. Só recomendamos aquilo que escolheríamos para nós próprios.",
  },
  {
    icon: Target,
    title: "Foco exclusivo em PMEs",
    desc: "Não servimos clientes enterprise e PMEs ao mesmo tempo. O nosso modelo foi desenhado especificamente para empresas de 5 a 200 pessoas: orçamentos realistas, timings ajustados, sem over-engineering, sem processos burocráticos desnecessários. Crescemos quando os nossos clientes crescem.",
  },
  {
    icon: Eye,
    title: "Transparência como princípio, não como slogan",
    desc: "Preços fixos e claros desde o primeiro contacto. Relatórios mensais com o que foi feito, o que está por fazer e o impacto medido. Quando algo não está a funcionar, dizemos — e propomo-nos a corrigi-lo. Sem letras pequenas, sem surpresas no final do mês.",
  },
];

const services = [
  {
    slug: "consultoria-processos",
    title: "Consultoria de Processos",
    desc: "Diagnóstico, mapeamento e optimização de processos internos. Avença mensal com relatório de progresso incluído.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    icon: "CP",
  },
  {
    slug: "tecnologia-ferramentas",
    title: "Tecnologia & Ferramentas",
    desc: "Gestão e suporte de Microsoft 365 e Atlassian. Subscrições ao preço real do fabricante, fee fixo mensal.",
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
    icon: "TF",
  },
  {
    slug: "consultoria-ia",
    title: "Consultoria de IA",
    desc: "Selecção, implementação e formação em ferramentas de IA. Gestão de licenças enterprise incluída.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    icon: "IA",
  },
  {
    slug: "formacao",
    title: "Formação",
    desc: "Workshops práticos para equipas de até 12 pessoas. Presencial ou remoto, com materiais e certificado incluídos.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    icon: "FM",
  },
];

const SobrePage = () => (
  <PageLayout>
    <Helmet>
      <title>Sobre a Transparent Reasons — Consultoria para PMEs Portuguesas</title>
      <meta name="description" content="Conheça a Transparent Reasons: missão, diferenciais e como ajudamos PMEs portuguesas a crescer através de consultoria de processos, tecnologia e formação." />
      <link rel="canonical" href="https://www.transparentreasons.com/sobre" />
      <meta property="og:title" content="Sobre a Transparent Reasons — Consultoria para PMEs Portuguesas" />
      <meta property="og:description" content="Conheça a Transparent Reasons: missão, diferenciais e como ajudamos PMEs a crescer através de processos, tecnologia e formação." />
      <meta property="og:url" content="https://www.transparentreasons.com/sobre" />
      <meta property="og:image" content="https://www.transparentreasons.com/apple-touch-icon.png" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_PT" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Sobre a Transparent Reasons — Consultoria para PMEs Portuguesas" />
      <meta name="twitter:description" content="Conheça a Transparent Reasons: missão, diferenciais e como ajudamos PMEs a crescer." />
      <meta name="twitter:image" content="https://www.transparentreasons.com/apple-touch-icon.png" />
      <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
    </Helmet>

    <div className="container max-w-4xl mx-auto px-6 pb-24">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
        <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
          <Home size={14} />Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Sobre Nós</span>
      </div>

      {/* Hero */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
          <span className="text-muted-foreground font-medium tracking-widest uppercase">Sobre Nós</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
          A <span className="text-devin-teal">Transparent Reasons</span>:<br className="hidden lg:block" /> Consultoria que Transforma PMEs Portuguesas
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Processos mais claros, tecnologia bem adoptada e equipas preparadas para crescer — sem fricção, sem surpresas.
        </p>
      </div>

      {/* Missão */}
      <div className="mb-16 rounded-2xl border border-devin-border bg-devin-surface/50 p-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-card border border-devin-border text-xs mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
          <span className="text-muted-foreground font-medium tracking-widest uppercase">Missão</span>
        </div>
        <p className="text-base text-foreground leading-relaxed mb-4">
          A Transparent Reasons existe para eliminar a fricção entre as PMEs portuguesas e o seu potencial de crescimento. Muitas empresas têm bons produtos e boas pessoas — mas processos ineficientes, ferramentas mal adoptadas e equipas sem formação adequada travam o seu desenvolvimento.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          O nosso trabalho começa com um diagnóstico honesto: mapeamos o que existe, identificamos onde se perde tempo e dinheiro, e desenhamos um plano de acção realista. Depois implementamos, acompanhamos e formamos — porque uma solução só funciona se as pessoas souberem usá-la.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          O nome reflecte o compromisso central: "Transparent" pelo compromisso com a clareza total em preços, recomendações e relatórios; "Reasons" pela crença de que cada decisão deve ter uma justificação racional e comunicada. O cliente sabe sempre porquê — não apenas o quê.
        </p>
      </div>

      {/* Métricas */}
      <div className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { n: "22+", label: "Aplicações desenvolvidas" },
          { n: "3",   label: "Empresas transformadas" },
          { n: "9+",  label: "Anos de experiência" },
          { n: "15",  label: "Pessoas lideradas" },
        ].map(({ n, label }) => (
          <div key={label} className="rounded-2xl border border-devin-border bg-devin-surface/50 p-5 text-center">
            <p className="text-3xl font-bold text-devin-teal mb-1">{n}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* Porquê Nós — expandido */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
          <span className="text-muted-foreground font-medium tracking-widest uppercase">Porquê Nós</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-3">
          O que nos distingue da consultoria tradicional
        </h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Uma combinação única de visão técnica, experiência em gestão e conhecimento aplicado de IA — ao serviço de empresas com orçamentos reais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentials.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="group flex gap-4 p-6 rounded-2xl bg-devin-surface/50 border border-devin-border hover:border-devin-teal/40 transition-all"
              >
                <div className="text-devin-teal flex-shrink-0 mt-0.5">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-devin-teal transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{diff.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Serviços overview */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
          <span className="text-muted-foreground font-medium tracking-widest uppercase">Serviços</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-10">Como podemos ajudar a sua empresa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/servicos/${s.slug}`}
              className="group rounded-2xl border border-devin-border bg-devin-surface/50 p-6 hover:border-devin-teal/40 transition-all flex flex-col"
            >
              <div className={`w-10 h-10 rounded-xl ${s.bgColor} border border-devin-border flex items-center justify-center mb-4 flex-shrink-0`}>
                <span className={`text-xs font-bold ${s.color}`}>{s.icon}</span>
              </div>
              <h3 className="font-bold text-foreground text-sm mb-2 group-hover:text-devin-teal transition-colors leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <div className="flex items-center gap-1 mt-4 text-xs text-muted-foreground group-hover:text-devin-teal transition-colors">
                Saber mais <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-devin-border text-foreground font-medium text-sm hover:border-devin-teal/40 transition-colors"
          >
            Ver todos os serviços
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Valores */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
          <span className="text-muted-foreground font-medium tracking-widest uppercase">Valores</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-8">O que guia o nosso trabalho</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: Eye,
              title: "Transparência",
              body: "Preços fixos, relatórios claros e honestidade quando algo não está a funcionar. O cliente sabe sempre o que está a pagar e porquê.",
            },
            {
              icon: Lightbulb,
              title: "Pragmatismo",
              body: "Focamo-nos no que gera impacto real no curto prazo. Não implementamos soluções complexas quando uma mais simples resolve o problema.",
            },
            {
              icon: CheckCircle,
              title: "Impacto mensurável",
              body: "Cada projecto tem métricas de sucesso definidas antes de começar. O progresso é medido, reportado e ajustado mensalmente.",
            },
          ].map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-2xl border border-devin-border bg-devin-surface/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-devin-teal/10 border border-devin-teal/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-devin-teal" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div
        className="relative rounded-3xl border border-devin-border bg-devin-card overflow-hidden p-8 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Pronto para transformar a sua empresa?
        </h3>
        <p className="text-sm text-muted-foreground mb-2 max-w-md mx-auto">
          Diagnóstico gratuito — sem compromisso. Respondemos em 24 horas úteis.
        </p>
        <p className="text-xs text-muted-foreground/60 mb-6">Disponibilidade limitada por mês.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-devin-teal text-background font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Agendar Diagnóstico Gratuito
          </Link>
          <Link
            to="/fundacao"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-devin-border text-foreground font-medium text-sm hover:border-devin-teal/40 transition-colors"
          >
            Conhecer o Fundador
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

    </div>
  </PageLayout>
);

export default SobrePage;
