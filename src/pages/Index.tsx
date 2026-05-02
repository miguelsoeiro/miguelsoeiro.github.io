import React from "react";
import { Helmet } from "react-helmet-async";
import "@/styles/background.css";
import ModernNavbar from "@/components/ModernNavbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const SITE = "https://www.transparentreasons.com";
const OG_IMG = `${SITE}/apple-touch-icon.png`;

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE}/#organization`,
      "name": "Transparent Reasons",
      "url": SITE,
      "logo": `${SITE}/favicon.svg`,
      "description": "Consultoria estratégica para PMEs portuguesas — optimização de processos, implementação de tecnologia (Microsoft 365, Atlassian, IA) e formação de equipas.",
      "address": { "@type": "PostalAddress", "addressCountry": "PT", "addressLocality": "Portugal" },
      "email": "geral@transparentreasons.com",
      "telephone": "+351930679484",
      "areaServed": "PT",
      "knowsLanguage": ["pt", "en"],
      "founder": { "@type": "Person", "@id": `${SITE}/sobre#miguel`, "name": "Miguel Pires Soeiro" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços e Produtos",
        "itemListElement": [
          { "@type": "Offer", "name": "Consultoria de Processos — Starter", "description": "Avença mensal de 8h com mapeamento de processos e relatório mensal", "price": "600", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" } },
          { "@type": "Offer", "name": "Consultoria de Processos — Growth", "description": "Avença mensal de 16h com mapeamento de processos e relatório mensal", "price": "1100", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" } },
          { "@type": "Offer", "name": "Consultoria de Processos — Scale", "description": "Avença mensal de 32h com mapeamento de processos e relatório mensal", "price": "2000", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" } },
          { "@type": "Offer", "name": "Gestão de Tecnologia (Microsoft 365 + Atlassian)", "description": "Fee fixo mensal de gestão de ferramentas de produtividade, subscrições ao preço do fabricante", "price": "150", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" } },
          { "@type": "Offer", "name": "Consultoria de IA", "description": "Fee fixo mensal de gestão de ferramentas de IA, subscrições ao preço do fabricante", "price": "200", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" } },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#local`,
      "name": "Transparent Reasons",
      "url": SITE,
      "email": "geral@transparentreasons.com",
      "telephone": "+351930679484",
      "priceRange": "€€",
      "address": { "@type": "PostalAddress", "addressCountry": "PT" },
      "areaServed": { "@type": "Country", "name": "Portugal" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      "url": SITE,
      "name": "Transparent Reasons",
      "inLanguage": "pt-PT",
      "publisher": { "@type": "Organization", "@id": `${SITE}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${SITE}/publicacoes?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      "mainEntity": [
        { "@type": "Question", "name": "O que é a Transparent Reasons?", "acceptedAnswer": { "@type": "Answer", "text": "A Transparent Reasons é uma consultoria portuguesa especializada em ajudar PMEs a trabalhar melhor. Actuamos em três áreas complementares: optimização de processos internos, implementação e gestão de tecnologia (Microsoft 365, Atlassian, ferramentas de IA), e formação de equipas." } },
        { "@type": "Question", "name": "Qual é o custo da consultoria de processos para PMEs?", "acceptedAnswer": { "@type": "Answer", "text": "Avença mensal: Starter (8h/mês a 600 €/mês), Growth (16h/mês a 1.100 €/mês), Scale (32h/mês a 2.000 €/mês). Prazo mínimo 3 meses. Horas adicionais: 80 €/h." } },
        { "@type": "Question", "name": "Como a Transparent Reasons ajuda empresas a adoptar ferramentas de IA?", "acceptedAnswer": { "@type": "Answer", "text": "Diagnosticamos necessidades, seleccionamos a ferramenta adequada (Claude, ChatGPT, Gemini, Copilot, Devin), gerimos licenças enterprise ao preço do fabricante e formamos a equipa. Fee de gestão: 200 €/mês." } },
        { "@type": "Question", "name": "A Transparent Reasons implementa Microsoft 365 e Atlassian?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Fee fixo de 150 €/mês. Subscrições ao preço do fabricante, sem markup. Inclui implementação, configuração, suporte de 1.º nível e optimização contínua." } },
        { "@type": "Question", "name": "A Transparent Reasons oferece diagnóstico gratuito?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Diagnóstico inicial gratuito e sem compromisso. Disponibilidade limitada por mês. Contacto: geral@transparentreasons.com ou transparentreasons.com/contacto." } },
        { "@type": "Question", "name": "Que tipos de formação empresarial oferece a Transparent Reasons?", "acceptedAnswer": { "@type": "Answer", "text": "Sessões práticas para equipas até 12 participantes. Sessão 3h: 450 €. Sessão 6h: 800 €. Pack 5 sessões: 3.500 €. Inclui materiais e certificado. Temas: Microsoft 365, Atlassian, IA, metodologias ágeis." } },
        { "@type": "Question", "name": "Que tipo de empresas são clientes da Transparent Reasons?", "acceptedAnswer": { "@type": "Answer", "text": "PMEs portuguesas com 5 a 100 colaboradores nos sectores da saúde, retalho, distribuição, serviços profissionais e tecnologia. Clientes: Nivelfarma, Farmácia Sália, Immersive Lives." } },
        { "@type": "Question", "name": "Qual é a metodologia da Transparent Reasons?", "acceptedAnswer": { "@type": "Answer", "text": "4 etapas: Diagnosticar (mapeamos processos), Planear (plano com tecnologias e timings), Implementar (execução com relatórios mensais), Formar (capacitamos a equipa)." } },
      ],
    },
  ],
};

const Index = () => {
  React.useEffect(() => {
    let stop: (() => void) | undefined;
    import("@/lib/background").then((mod) => {
      if (mod && mod.default) stop = mod.default();
      else if (mod && mod.startBackground) stop = mod.startBackground();
    });
    return () => { if (stop) stop(); };
  }, []);

  return (
    <div className="bg-background text-foreground relative">
      <Helmet>
        <title>Transparent Reasons — Consultoria para PMEs Portuguesas</title>
        <meta name="description" content="Consultoria estratégica para PMEs portuguesas: optimização de processos, implementação de Microsoft 365, Atlassian e IA, e formação de equipas. Diagnóstico gratuito." />
        <meta name="keywords" content="consultoria PME, consultoria processos, Microsoft 365, Atlassian, Jira, formação empresarial, inteligência artificial, IA empresas, Portugal" />
        <link rel="canonical" href={`${SITE}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Transparent Reasons — Consultoria para PMEs Portuguesas" />
        <meta property="og:description" content="Consultoria estratégica para PMEs portuguesas: optimização de processos, implementação de Microsoft 365, Atlassian e IA, e formação de equipas. Diagnóstico gratuito." />
        <meta property="og:url" content={`${SITE}/`} />
        <meta property="og:image" content={OG_IMG} />
        <meta property="og:locale" content="pt_PT" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Transparent Reasons — Consultoria para PMEs Portuguesas" />
        <meta name="twitter:description" content="Consultoria estratégica para PMEs portuguesas: processos, tecnologia e formação. Diagnóstico gratuito." />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>
      <div id="container" className="absolute inset-0" style={{ height: "100%", overflow: "hidden" }} />
      <div id="stats" />
      <div id="ui-container" />
      <div className="relative z-10 animate-page-in">
        <ModernNavbar />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
