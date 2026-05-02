import React from "react";
import { Helmet } from "react-helmet-async";
import "@/styles/background.css";
import ModernNavbar from "@/components/ModernNavbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.transparentreasons.com/#organization",
      "name": "Transparent Reasons",
      "url": "https://www.transparentreasons.com",
      "logo": "https://www.transparentreasons.com/favicon.svg",
      "description": "Consultoria estratégica para PMEs portuguesas — optimização de processos, implementação de tecnologia (Microsoft 365, Atlassian, IA) e formação de equipas.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PT",
        "addressLocality": "Portugal"
      },
      "email": "geral@transparentreasons.com",
      "telephone": "+351930679484",
      "areaServed": "PT",
      "knowsLanguage": ["pt", "en"],
      "founder": {
        "@type": "Person",
        "@id": "https://www.transparentreasons.com/sobre#miguel",
        "name": "Miguel Pires Soeiro"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços e Produtos",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Consultoria de Processos — Starter",
            "description": "Avença mensal de 8h com mapeamento de processos e relatório mensal",
            "price": "600",
            "priceCurrency": "EUR",
            "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" }
          },
          {
            "@type": "Offer",
            "name": "Consultoria de Processos — Growth",
            "description": "Avença mensal de 16h com mapeamento de processos e relatório mensal",
            "price": "1100",
            "priceCurrency": "EUR",
            "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" }
          },
          {
            "@type": "Offer",
            "name": "Consultoria de Processos — Scale",
            "description": "Avença mensal de 32h com mapeamento de processos e relatório mensal",
            "price": "2000",
            "priceCurrency": "EUR",
            "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" }
          },
          {
            "@type": "Offer",
            "name": "Gestão de Tecnologia (Microsoft 365 + Atlassian)",
            "description": "Fee fixo mensal de gestão de ferramentas de produtividade, subscrições ao preço do fabricante",
            "price": "150",
            "priceCurrency": "EUR",
            "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" }
          },
          {
            "@type": "Offer",
            "name": "Consultoria de IA",
            "description": "Fee fixo mensal de gestão de ferramentas de IA, subscrições ao preço do fabricante",
            "price": "200",
            "priceCurrency": "EUR",
            "priceSpecification": { "@type": "UnitPriceSpecification", "unitCode": "MON" }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.transparentreasons.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é a Transparent Reasons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Transparent Reasons é uma consultoria portuguesa especializada em ajudar PMEs a trabalhar melhor. Actuamos em três áreas complementares: optimização de processos internos, implementação e gestão de tecnologia (Microsoft 365, Atlassian, ferramentas de IA), e formação de equipas."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é o custo da consultoria de processos para PMEs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A consultoria de processos funciona em regime de avença mensal com três opções: Starter (8h/mês a 600 €/mês), Growth (16h/mês a 1.100 €/mês) e Scale (32h/mês a 2.000 €/mês). O compromisso mínimo é de 3 meses. Horas adicionais custam 80 €/h."
          }
        },
        {
          "@type": "Question",
          "name": "Como a Transparent Reasons ajuda empresas a adoptar ferramentas de IA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diagnosticamos as necessidades reais da empresa, seleccionamos a ferramenta mais adequada (Claude, ChatGPT, Gemini, Copilot, Devin), gerimos as licenças enterprise ao preço do fabricante sem markup, e formamos a equipa. O fee de gestão é de 200 €/mês."
          }
        },
        {
          "@type": "Question",
          "name": "A Transparent Reasons implementa Microsoft 365 e Atlassian?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Gerimos Microsoft 365 e Atlassian (Jira, Confluence, JSM) por um fee fixo de 150 €/mês. As subscrições são facturadas ao preço real do fabricante, sem qualquer markup. O fee cobre implementação, configuração, suporte de 1.º nível e optimização contínua."
          }
        },
        {
          "@type": "Question",
          "name": "A Transparent Reasons oferece diagnóstico gratuito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Oferecemos um diagnóstico inicial gratuito e sem compromisso. A disponibilidade é limitada a poucos clientes por mês. Para agendar, basta enviar email para geral@transparentreasons.com ou preencher o formulário em transparentreasons.com/contacto."
          }
        },
        {
          "@type": "Question",
          "name": "Que tipos de formação empresarial oferece a Transparent Reasons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sessões práticas presenciais ou remotas para equipas até 12 participantes. Os temas incluem Microsoft 365, Atlassian, ferramentas de IA e metodologias ágeis. Uma sessão de 3h custa 450 €; uma sessão de 6h custa 800 €. Um pack de 5 sessões sai a 3.500 €. Todos os formatos incluem materiais e certificado de participação."
          }
        },
        {
          "@type": "Question",
          "name": "Que tipo de empresas são clientes da Transparent Reasons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabalhamos principalmente com PMEs portuguesas com 5 a 100 colaboradores nos sectores da saúde, retalho, distribuição, serviços profissionais e tecnologia. Clientes de referência incluem a Nivelfarma, a Farmácia Sália e a Immersive Lives."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é a metodologia da Transparent Reasons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabalhamos em 4 etapas: Diagnosticar (mapeamos processos e identificamos ineficiências), Planear (desenhamos o plano com tecnologias e timings adequados), Implementar (executamos com acompanhamento contínuo e relatórios mensais), e Formar (capacitamos a equipa para tirar o máximo partido)."
          }
        }
      ]
    }
  ]
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
        <link rel="canonical" href="https://www.transparentreasons.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Transparent Reasons — Consultoria para PMEs Portuguesas" />
        <meta property="og:description" content="Consultoria estratégica para PMEs portuguesas: optimização de processos, implementação de Microsoft 365, Atlassian e IA, e formação de equipas. Diagnóstico gratuito." />
        <meta property="og:url" content="https://www.transparentreasons.com/" />
        <meta property="og:image" content="https://www.transparentreasons.com/favicon.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Transparent Reasons — Consultoria para PMEs Portuguesas" />
        <meta name="twitter:description" content="Consultoria estratégica para PMEs portuguesas: processos, tecnologia e formação. Diagnóstico gratuito." />
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
