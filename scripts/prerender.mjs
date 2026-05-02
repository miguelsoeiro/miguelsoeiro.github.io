/**
 * Post-build pre-rendering script.
 *
 * Reads dist/index.html and generates a static HTML file for each route with
 * the correct <title>, meta tags, JSON-LD schemas, and <noscript> body content
 * injected directly — so crawlers and LLMs that don't execute JS see full metadata.
 *
 * Run via: node scripts/prerender.mjs  (called by npm postbuild)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST  = path.resolve(__dirname, '../dist');
const SITE  = 'https://www.transparentreasons.com';
const OG_IMG = `${SITE}/apple-touch-icon.png`;

// ─── Shared schemas ───────────────────────────────────────────────────────────

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE}/#organization`,
      name: 'Transparent Reasons',
      url: SITE,
      logo: `${SITE}/favicon.svg`,
      description: 'Consultoria estratégica para PMEs portuguesas — optimização de processos, implementação de tecnologia (Microsoft 365, Atlassian, IA) e formação de equipas.',
      address: { '@type': 'PostalAddress', addressCountry: 'PT', addressLocality: 'Portugal' },
      email: 'geral@transparentreasons.com',
      telephone: '+351930679484',
      areaServed: 'PT',
      knowsLanguage: ['pt', 'en'],
      founder: { '@type': 'Person', '@id': `${SITE}/sobre#miguel`, name: 'Miguel Pires Soeiro' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE}/#local`,
      name: 'Transparent Reasons',
      url: SITE,
      email: 'geral@transparentreasons.com',
      telephone: '+351930679484',
      priceRange: '€€',
      address: { '@type': 'PostalAddress', addressCountry: 'PT' },
      areaServed: { '@type': 'Country', name: 'Portugal' },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'Transparent Reasons',
      inLanguage: 'pt-PT',
      publisher: { '@type': 'Organization', '@id': `${SITE}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/publicacoes?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

const schemaFAQhome = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE}/#faq`,
  mainEntity: [
    { '@type': 'Question', name: 'O que é a Transparent Reasons?', acceptedAnswer: { '@type': 'Answer', text: 'A Transparent Reasons é uma consultoria portuguesa especializada em ajudar PMEs a trabalhar melhor. Actuamos em três áreas: optimização de processos internos, implementação e gestão de tecnologia (Microsoft 365, Atlassian, ferramentas de IA), e formação de equipas.' } },
    { '@type': 'Question', name: 'Qual é o custo da consultoria de processos para PMEs?', acceptedAnswer: { '@type': 'Answer', text: 'Avença mensal: Starter (8h/mês a 600 €/mês), Growth (16h/mês a 1.100 €/mês), Scale (32h/mês a 2.000 €/mês). Prazo mínimo 3 meses. Horas adicionais: 80 €/h.' } },
    { '@type': 'Question', name: 'A Transparent Reasons oferece diagnóstico gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Oferecemos um diagnóstico inicial gratuito e sem compromisso. Disponibilidade limitada por mês. Contacto: geral@transparentreasons.com ou transparentreasons.com/contacto.' } },
    { '@type': 'Question', name: 'A Transparent Reasons implementa Microsoft 365 e Atlassian?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Gerimos Microsoft 365 e Atlassian (Jira, Confluence, JSM) por um fee fixo de 150 €/mês. Subscrições ao preço do fabricante, sem markup.' } },
    { '@type': 'Question', name: 'Como a Transparent Reasons ajuda empresas a adoptar ferramentas de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Diagnosticamos necessidades, seleccionamos a ferramenta adequada (Claude, ChatGPT, Gemini, Copilot, Devin), gerimos licenças enterprise e formamos a equipa. Fee de gestão: 200 €/mês.' } },
    { '@type': 'Question', name: 'Que tipos de formação empresarial oferece a Transparent Reasons?', acceptedAnswer: { '@type': 'Answer', text: 'Sessões práticas para equipas até 12 participantes. Sessão 3h: 450 €. Sessão 6h: 800 €. Pack 5 sessões: 3.500 €. Inclui materiais e certificado. Temas: Microsoft 365, Atlassian, IA, metodologias ágeis.' } },
    { '@type': 'Question', name: 'Que tipo de empresas são clientes da Transparent Reasons?', acceptedAnswer: { '@type': 'Answer', text: 'PMEs portuguesas com 5 a 100 colaboradores nos sectores da saúde, retalho, distribuição, serviços profissionais e tecnologia. Clientes: Nivelfarma, Farmácia Sália, Immersive Lives.' } },
    { '@type': 'Question', name: 'Qual é a metodologia da Transparent Reasons?', acceptedAnswer: { '@type': 'Answer', text: '4 etapas: Diagnosticar (mapeamos processos), Planear (plano com tecnologias e timings), Implementar (execução com relatórios mensais), Formar (capacitamos a equipa).' } },
  ],
};

const schemaFAQservicos = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Qual é o custo da consultoria de processos?', acceptedAnswer: { '@type': 'Answer', text: 'Avença mensal: Starter (8h/mês a 600 €/mês), Growth (16h/mês a 1.100 €/mês), Scale (32h/mês a 2.000 €/mês). Prazo mínimo 3 meses. Horas adicionais: 80 €/h.' } },
    { '@type': 'Question', name: 'Que formação empresarial oferece a Transparent Reasons?', acceptedAnswer: { '@type': 'Answer', text: 'Sessões práticas para equipas até 12 participantes. Sessão 3h: 450 €. Sessão 6h: 800 €. Pack 5 sessões: 3.500 €. Inclui materiais e certificado. Temas: Microsoft 365, Atlassian, IA, metodologias ágeis.' } },
    { '@type': 'Question', name: 'Quanto tempo dura a consultoria de processos?', acceptedAnswer: { '@type': 'Answer', text: 'O prazo mínimo de compromisso é de 3 meses. A maioria dos clientes opta por avenças de 6 a 12 meses para garantir resultados sustentáveis.' } },
  ],
};

const schemaFAQprodutos = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'O que inclui a gestão de Microsoft 365 e Atlassian?', acceptedAnswer: { '@type': 'Answer', text: 'Fee fixo de 150 €/mês inclui implementação, configuração, suporte de 1.º nível e optimização contínua de Microsoft 365 (Teams, SharePoint, OneDrive, Outlook) e Atlassian (Jira, Confluence, JSM). As subscrições são facturadas ao preço do fabricante, sem markup.' } },
    { '@type': 'Question', name: 'A Transparent Reasons revende licenças de Microsoft 365 e Atlassian?', acceptedAnswer: { '@type': 'Answer', text: 'Não revendemos com markup. As subscrições são facturadas ao preço real do fabricante. A Transparent Reasons cobra apenas um fee de gestão fixo mensal (150 €/mês para Microsoft 365 + Atlassian).' } },
    { '@type': 'Question', name: 'Como funciona a gestão de ferramentas de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Por 200 €/mês gerimos ferramentas de IA (Claude, ChatGPT, Gemini, Copilot, Devin): selecção da ferramenta adequada, gestão de licenças enterprise ao preço do fabricante, e formação específica da equipa.' } },
    { '@type': 'Question', name: 'Quanto tempo demora a implementar o Microsoft 365?', acceptedAnswer: { '@type': 'Answer', text: 'Tipicamente 2 a 4 semanas para uma implementação completa, dependendo da dimensão da empresa e dos serviços a configurar. A formação da equipa ocorre nas semanas seguintes.' } },
  ],
};

const schemaFAQsobre = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quem fundou a Transparent Reasons?', acceptedAnswer: { '@type': 'Answer', text: 'Miguel Pires Soeiro, com mais de 9 anos de experiência em tecnologia e gestão. MSc em Engenharia Informática pelo Instituto Superior Técnico. Certificado em Agile PM e Project Management Professional pela Google, e SI Architect pela MongoDB.' } },
    { '@type': 'Question', name: 'Que projectos já desenvolveu o fundador da Transparent Reasons?', acceptedAnswer: { '@type': 'Answer', text: 'Nivelfarma (22 aplicações de raiz — web, iOS, Android e robótica farmacêutica), Farmácia Sália (plataforma CRM e fidelização) e Immersive Lives (sistema VR para reabilitação neurocognitiva com IA).' } },
    { '@type': 'Question', name: 'Qual é a filosofia da Transparent Reasons?', acceptedAnswer: { '@type': 'Answer', text: 'Transparência total: preços claros, recomendações honestas e comunicação directa. Cada decisão tem uma justificação racional comunicada ao cliente. Nunca recomendamos ferramentas que não escolheríamos para nós próprios.' } },
  ],
};

const schemaPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE}/sobre#miguel`,
  name: 'Miguel Pires Soeiro',
  jobTitle: 'Fundador, Consultoria, Dados & IA',
  worksFor: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Transparent Reasons' },
  alumniOf: { '@type': 'EducationalOrganization', name: 'Instituto Superior Técnico', address: { '@type': 'PostalAddress', addressCountry: 'PT', addressLocality: 'Lisboa' } },
  knowsAbout: ['Consultoria de Processos', 'Gestão de Projectos', 'Microsoft 365', 'Atlassian', 'Inteligência Artificial', 'Data Engineering', 'PMEs', 'Scrum', 'Kanban'],
};

const articleData = {
  nivelfarma: {
    company: 'Nivelfarma',
    sector: 'Distribuição Farmacêutica',
    period: '2021 – 2023',
    desc: '22 aplicações construídas de raiz — plataformas web, iOS, Android e sistema de controlo de robótica farmacêutica. Ecossistema digital completo sem sistemas prévios.',
    tags: ['Web', 'iOS', 'Android', 'Robótica', 'Saúde', 'Gestão Clínica'],
  },
  'farmacias-mais-saude': {
    company: 'Farmácia Sália',
    sector: 'Retalho Farmacêutico',
    period: '2022 – 2023',
    desc: 'Plataforma de gestão de clientes e fidelização de raiz: base de dados centralizada, histórico individual, sistema de pontos e benefícios.',
    tags: ['Web', 'CRM', 'Fidelização', 'Retalho', 'Saúde'],
  },
  'immersive-lives': {
    company: 'Immersive Lives',
    sector: 'MedTech / Realidade Virtual',
    period: '2023 – 2024',
    desc: 'Sistema VR para reabilitação de pacientes com perturbações neurocognitivas. Interface dual (paciente + terapeuta) com IA integrada.',
    tags: ['Realidade Virtual', 'IA', 'MedTech', 'Saúde', 'UX Clínico'],
  },
};

const artigosData = [
  {
    slug: 'transformacao-digital-com-ia-primeiros-passos',
    headline: 'Transformação Digital com IA: Primeiros Passos',
    excerpt: 'Como implementar soluções de IA para otimizar processos empresariais e acelerar a transformação digital da sua organização.',
    datePublished: '2026-04-10',
    tag: 'IA & Automação',
    cover: '/images/articles/transformacao-digital-com-ia-primeiros-passos.png',
  },
  {
    slug: 'agentes-ia-o-futuro-da-produtividade-software',
    headline: 'Agentes IA: O Futuro da Produtividade Software',
    excerpt: 'Explore como agentes autónomos estão a redefinir workflows de desenvolvimento, suporte ao cliente e processos empresariais.',
    datePublished: '2026-04-08',
    tag: 'Tecnologia',
    cover: '/images/articles/agentes-ia-o-futuro-da-produtividade-software.png',
  },
  {
    slug: 'seguranca-em-primeira-linha-compliance-com-ia',
    headline: 'Segurança em Primeira Linha: Compliance com IA',
    excerpt: 'Implemente práticas de segurança robustas e conformidade regulatória usando tecnologias emergentes e automação inteligente.',
    datePublished: '2026-04-05',
    tag: 'Segurança',
    cover: '/images/articles/seguranca-em-primeira-linha-compliance-com-ia.png',
  },
];

// ─── Route definitions ────────────────────────────────────────────────────────

const crumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([pos, name, item]) => ({ '@type': 'ListItem', position: pos, name, item })),
});

const routes = [
  {
    file: 'index.html',
    canonical: SITE + '/',
    title: 'Transparent Reasons — Consultoria para PMEs Portuguesas',
    desc: 'Consultoria estratégica para PMEs portuguesas: optimização de processos, implementação de Microsoft 365, Atlassian e IA, e formação de equipas. Diagnóstico gratuito.',
    schemas: [schemaOrg, schemaFAQhome],
    noscript: `<h1>Transparent Reasons — Consultoria para PMEs Portuguesas</h1>
<p>Consultoria estratégica para PMEs portuguesas: optimização de processos, implementação de tecnologia (Microsoft 365, Atlassian, IA) e formação de equipas. Diagnóstico gratuito sem compromisso.</p>
<h2>Serviços e Preços</h2>
<ul>
<li><strong>Consultoria de Processos</strong> — Avença Starter 8h/mês: 600 €/mês; Growth 16h/mês: 1.100 €/mês; Scale 32h/mês: 2.000 €/mês. Prazo mínimo 3 meses. Horas extra: 80 €/h.</li>
<li><strong>Gestão Microsoft 365 e Atlassian</strong> (Teams, SharePoint, OneDrive, Outlook, Jira, Confluence, JSM) — 150 €/mês. Subscrições ao preço do fabricante, sem markup.</li>
<li><strong>Gestão Ferramentas de IA</strong> (Claude, ChatGPT, Gemini, Copilot, Devin) — 200 €/mês. Inclui selecção, licenças enterprise e formação da equipa.</li>
<li><strong>Formação Empresarial</strong> — Sessão 3h: 450 €; Sessão 6h: 800 €; Pack 5 sessões: 3.500 €. Até 12 participantes. Inclui materiais e certificado.</li>
</ul>
<h2>Clientes de Referência</h2>
<p>Nivelfarma (22 apps web/iOS/Android/robótica farmacêutica), Farmácia Sália (CRM e fidelização), Immersive Lives (VR para reabilitação neurocognitiva).</p>
<p>Diagnóstico gratuito — disponibilidade limitada por mês.<br>Contacto: <a href="mailto:geral@transparentreasons.com">geral@transparentreasons.com</a> | +351 930 679 484 | <a href="https://wa.me/351930679484">WhatsApp</a></p>`,
  },
  {
    file: 'servicos/index.html',
    canonical: SITE + '/servicos',
    title: 'Serviços de Consultoria | Processos · IA · Tecnologia · Formação — Transparent Reasons',
    desc: 'Consultoria de processos e formação empresarial para PMEs portuguesas. Avenças mensais com acompanhamento contínuo. Diagnóstico gratuito.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Serviços', SITE + '/servicos']]), schemaFAQservicos],
    noscript: `<h1>Serviços de Consultoria, Tecnologia e Formação para Empresas</h1>
<p>A Transparent Reasons oferece serviços de consultoria de processos, gestão de tecnologia e formação para PMEs portuguesas.</p>
<h2>Consultoria de Processos</h2>
<p>Avença mensal com acompanhamento contínuo. Starter 8h/mês: 600 €/mês. Growth 16h/mês: 1.100 €/mês. Scale 32h/mês: 2.000 €/mês. Prazo mínimo 3 meses. Horas adicionais: 80 €/h.</p>
<h2>Formação Empresarial</h2>
<p>Sessões práticas para equipas até 12 participantes. Sessão 3h: 450 €. Sessão 6h: 800 €. Pack 5 sessões: 3.500 €. Temas: Microsoft 365, Atlassian, IA, metodologias ágeis. Inclui materiais e certificado.</p>
<p>Diagnóstico gratuito. Contacto: <a href="mailto:geral@transparentreasons.com">geral@transparentreasons.com</a></p>`,
  },
  {
    file: 'produtos/index.html',
    canonical: SITE + '/produtos',
    title: 'Ferramentas de Produtividade e IA para PMEs — Transparent Reasons',
    desc: 'Implementação e gestão de Microsoft 365, Atlassian (Jira, Confluence) e ferramentas de IA para empresas portuguesas. Fee fixo mensal, subscrições ao preço do fabricante.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Produtos', SITE + '/produtos']]), schemaFAQprodutos],
    noscript: `<h1>Ferramentas de Produtividade e Inteligência Artificial para PMEs</h1>
<p>Gestão e implementação de Microsoft 365, Atlassian e ferramentas de IA para empresas portuguesas.</p>
<h2>Microsoft 365 e Atlassian — 150 €/mês</h2>
<p>Implementação, configuração, suporte e optimização de Microsoft 365 (Teams, SharePoint, OneDrive, Outlook) e Atlassian (Jira, Confluence, JSM). Subscrições facturadas ao preço do fabricante, sem markup.</p>
<h2>Ferramentas de IA — 200 €/mês</h2>
<p>Selecção da ferramenta adequada (Claude, ChatGPT, Gemini, Microsoft Copilot, Devin), gestão de licenças enterprise ao preço do fabricante e formação da equipa.</p>
<p>Contacto: <a href="mailto:geral@transparentreasons.com">geral@transparentreasons.com</a></p>`,
  },
  {
    file: 'sobre/index.html',
    canonical: SITE + '/sobre',
    title: 'Quem Somos — Miguel Pires Soeiro | Transparent Reasons',
    desc: 'Conheça Miguel Pires Soeiro, fundador da Transparent Reasons. Mais de 9 anos de experiência em tecnologia e gestão. MSc pelo Instituto Superior Técnico.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Sobre', SITE + '/sobre']]), schemaPerson, schemaFAQsobre],
    noscript: `<h1>Quem Somos — Transparent Reasons</h1>
<h2>Miguel Pires Soeiro — Fundador</h2>
<p>Mais de 9 anos de experiência em tecnologia e gestão de projectos. MSc em Engenharia Informática e de Computadores pelo Instituto Superior Técnico de Lisboa. Certificações: Agile Project Management (Google), Project Management Professional (Google), SI Architect (MongoDB).</p>
<h2>Projectos de Referência</h2>
<ul>
<li>Nivelfarma — 22 aplicações web, iOS, Android e robótica farmacêutica construídas de raiz (2021–2023)</li>
<li>Farmácia Sália — Plataforma CRM e programa de fidelização de clientes (2022–2023)</li>
<li>Immersive Lives — Sistema de realidade virtual para reabilitação neurocognitiva com IA integrada (2023–2024)</li>
</ul>
<h2>A Nossa Abordagem</h2>
<p>Transparência total: preços claros, recomendações honestas, comunicação directa. Nunca recomendamos ferramentas que não escolheríamos para nós próprios.</p>
<p>Contacto: <a href="mailto:geral@transparentreasons.com">geral@transparentreasons.com</a> | +351 930 679 484</p>`,
    preloadImage: true,
  },
  {
    file: 'contacto/index.html',
    canonical: SITE + '/contacto',
    title: 'Contacto — Diagnóstico Gratuito para a Sua Empresa | Transparent Reasons',
    desc: 'Fale connosco e peça um diagnóstico gratuito para a sua empresa. Sem compromisso. Respondemos em 24 horas úteis.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Contacto', SITE + '/contacto']])],
    noscript: `<h1>Contacto — Diagnóstico Gratuito para a Sua Empresa</h1>
<p>Fale connosco e peça um diagnóstico gratuito para a sua empresa. Sem compromisso. Respondemos em 24 horas úteis. Os seus dados não são partilhados com terceiros.</p>
<h2>Contacto Directo</h2>
<ul>
<li>Email: <a href="mailto:geral@transparentreasons.com">geral@transparentreasons.com</a></li>
<li>Telefone: <a href="tel:+351930679484">+351 930 679 484</a></li>
<li>WhatsApp: <a href="https://wa.me/351930679484">wa.me/351930679484</a></li>
</ul>
<h2>O que acontece depois?</h2>
<ol>
<li>Recebemos o seu pedido e respondemos em 24h úteis</li>
<li>Marcamos uma chamada de 30 minutos sem compromisso</li>
<li>Apresentamos as nossas observações e recomendações iniciais</li>
<li>Decide se quer avançar — sem qualquer pressão</li>
</ol>`,
  },
  {
    file: 'publicacoes/index.html',
    canonical: SITE + '/publicacoes',
    title: 'Casos de Estudo — Projectos de Referência | Transparent Reasons',
    desc: 'Projectos reais construídos pela Transparent Reasons: Nivelfarma, Farmácia Sália e Immersive Lives. Contexto, desafio, abordagem e resultado.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Publicações', SITE + '/publicacoes']])],
    noscript: `<h1>Casos de Estudo — Projectos de Referência</h1>
<p>Projectos reais construídos pela Transparent Reasons em sectores distintos, com contexto, desafio, abordagem e resultado documentados.</p>
<ul>
<li><a href="/publicacoes/nivelfarma"><strong>Nivelfarma</strong></a> — Distribuição Farmacêutica, Sintra (2021–2023): 22 aplicações web, iOS, Android e robótica farmacêutica construídas de raiz. Ecossistema digital completo.</li>
<li><a href="/publicacoes/farmacias-mais-saude"><strong>Farmácia Sália</strong></a> — Retalho Farmacêutico, Setúbal (2022–2023): Plataforma CRM e programa de fidelização. Base de dados unificada de clientes.</li>
<li><a href="/publicacoes/immersive-lives"><strong>Immersive Lives</strong></a> — MedTech/VR, Óbidos (2023–2024): Sistema VR para reabilitação neurocognitiva com IA integrada. Interface dual paciente + terapeuta.</li>
</ul>`,
  },
  {
    file: 'artigos/index.html',
    canonical: SITE + '/artigos',
    title: 'Artigos sobre IA e Transformação Digital | Transparent Reasons',
    desc: 'Análises sobre IA, transformação digital e inovação em tecnologia — escritas pela equipa da Transparent Reasons.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Artigos', SITE + '/artigos']])],
    noscript: `<h1>Artigos sobre IA e Transformação Digital</h1>
<p>Análises sobre IA, transformação digital e inovação em tecnologia pela equipa da Transparent Reasons.</p>
<ul>
<li><a href="/artigos/transformacao-digital-com-ia-primeiros-passos"><strong>Transformação Digital com IA: Primeiros Passos</strong></a> — Como implementar soluções de IA para otimizar processos empresariais. (10 Abr 2026)</li>
<li><a href="/artigos/agentes-ia-o-futuro-da-produtividade-software"><strong>Agentes IA: O Futuro da Produtividade Software</strong></a> — Como agentes autónomos estão a redefinir workflows de desenvolvimento. (8 Abr 2026)</li>
<li><a href="/artigos/seguranca-em-primeira-linha-compliance-com-ia"><strong>Segurança em Primeira Linha: Compliance com IA</strong></a> — Práticas de segurança robustas e conformidade regulatória. (5 Abr 2026)</li>
</ul>`,
  },
  ...Object.entries(articleData).map(([slug, a]) => {
    const yearMatch = a.period.match(/\d{4}/);
    const datePublished = yearMatch ? `${yearMatch[0]}-01-01` : undefined;
    return {
      file: `publicacoes/${slug}/index.html`,
      canonical: `${SITE}/publicacoes/${slug}`,
      title: `${a.company} — Caso de Estudo | ${a.sector} | Transparent Reasons`,
      desc: a.desc,
      schemas: [
        crumb([[1, 'Home', SITE + '/'], [2, 'Publicações', SITE + '/publicacoes'], [3, a.company, `${SITE}/publicacoes/${slug}`]]),
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${a.company} — Caso de Estudo`,
          description: a.desc,
          url: `${SITE}/publicacoes/${slug}`,
          ...(datePublished && { datePublished }),
          dateModified: '2025-01-01',
          keywords: a.tags.join(', '),
          inLanguage: 'pt-PT',
          author: { '@type': 'Person', '@id': `${SITE}/sobre#miguel`, name: 'Miguel Pires Soeiro' },
          publisher: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Transparent Reasons' },
        },
      ],
      noscript: `<h1>${a.company} — Caso de Estudo | ${a.sector}</h1><p>${a.desc}</p><p>Período: ${a.period} | Tags: ${a.tags.join(', ')}</p>`,
    };
  }),
  ...artigosData.map(a => ({
    file: `artigos/${a.slug}/index.html`,
    canonical: `${SITE}/artigos/${a.slug}`,
    title: `${a.headline} | Transparent Reasons`,
    desc: a.excerpt,
    schemas: [
      crumb([[1, 'Home', SITE + '/'], [2, 'Artigos', SITE + '/artigos'], [3, a.headline, `${SITE}/artigos/${a.slug}`]]),
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: a.headline,
        description: a.excerpt,
        url: `${SITE}/artigos/${a.slug}`,
        datePublished: a.datePublished,
        dateModified: a.datePublished,
        image: `${SITE}${a.cover}`,
        articleSection: a.tag,
        inLanguage: 'pt-PT',
        author: { '@type': 'Person', '@id': `${SITE}/sobre#miguel`, name: 'Miguel Pires Soeiro' },
        publisher: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Transparent Reasons' },
      },
    ],
    noscript: `<h1>${a.headline}</h1><p>${a.excerpt}</p><p>Autor: Miguel Pires Soeiro | Data: ${a.datePublished} | Categoria: ${a.tag}</p>`,
  })),
];

// ─── HTML manipulation helpers ────────────────────────────────────────────────

const STRIP_PATTERNS = [
  /<title>[^<]*<\/title>/g,
  /<meta\s+name="description"[^>]*\/?>/gi,
  /<meta\s+name="keywords"[^>]*\/?>/gi,
  /<meta\s+name="author"[^>]*\/?>/gi,
  /<meta\s+property="og:[^"]*"[^>]*\/?>/gi,
  /<meta\s+name="twitter:[^"]*"[^>]*\/?>/gi,
  /<link\s+rel="canonical"[^>]*\/?>/gi,
  /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi,
];

function stripHead(html) {
  let out = html;
  for (const re of STRIP_PATTERNS) out = out.replace(re, '');
  return out;
}

function buildHeadInject(route, miguelImageHref) {
  const schemasHtml = route.schemas
    .map(s => `  <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n');

  const preloadHtml = (route.preloadImage && miguelImageHref)
    ? `  <link rel="preload" as="image" href="${miguelImageHref}" />\n`
    : '';

  return `
  <title>${route.title}</title>
  <meta name="description" content="${route.desc.replace(/"/g, '&quot;')}" />
  <meta name="author" content="Transparent Reasons" />
  <link rel="canonical" href="${route.canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />
  <meta property="og:description" content="${route.desc.replace(/"/g, '&quot;')}" />
  <meta property="og:url" content="${route.canonical}" />
  <meta property="og:image" content="${OG_IMG}" />
  <meta property="og:locale" content="pt_PT" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />
  <meta name="twitter:description" content="${route.desc.replace(/"/g, '&quot;')}" />
  <meta name="twitter:image" content="${OG_IMG}" />
${preloadHtml}${schemasHtml}`;
}

function buildBodyInject(route) {
  if (!route.noscript) return null;
  return `<noscript><div style="display:none" aria-hidden="true">${route.noscript}</div></noscript>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

// Find miguel-soeiro image in dist/assets for LCP preload on /sobre
let miguelImageHref = null;
try {
  const assetFiles = fs.readdirSync(path.join(DIST, 'assets'));
  const miguelFile = assetFiles.find(f => /^miguel-soeiro/.test(f));
  if (miguelFile) miguelImageHref = `/assets/${miguelFile}`;
} catch {
  // assets dir may not exist yet; skip preload
}

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

let count = 0;
for (const route of routes) {
  const stripped  = stripHead(template);
  const headInject = buildHeadInject(route, miguelImageHref);
  const bodyInject = buildBodyInject(route);

  let html = stripped.replace('</head>', `${headInject}\n</head>`);

  if (bodyInject) {
    html = html.replace('<div id="root">', `${bodyInject}\n<div id="root">`);
  }

  const filePath = path.join(DIST, route.file);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, 'utf-8');
  count++;
  console.log(`  ✓ ${route.file}`);
}

console.log(`\nPre-rendered ${count} routes.`);
