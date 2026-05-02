/**
 * Post-build pre-rendering script.
 *
 * Reads dist/index.html and generates a static HTML file for each route with
 * the correct <title>, meta tags, and JSON-LD schemas injected directly in
 * <head> — so crawlers and LLMs that don't execute JS see full metadata.
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
    desc: '22 aplicações construídas de raiz — plataformas web, iOS, Android e sistema de controlo de robótica farmacêutica. Ecossistema digital completo sem sistemas prévios.',
    tags: ['Web', 'iOS', 'Android', 'Robótica', 'Saúde', 'Gestão Clínica'],
  },
  'farmacias-mais-saude': {
    company: 'Farmácia Sália',
    sector: 'Retalho Farmacêutico',
    desc: 'Plataforma de gestão de clientes e fidelização de raiz: base de dados centralizada, histórico individual, sistema de pontos e benefícios.',
    tags: ['Web', 'CRM', 'Fidelização', 'Retalho', 'Saúde'],
  },
  'immersive-lives': {
    company: 'Immersive Lives',
    sector: 'MedTech / Realidade Virtual',
    desc: 'Sistema VR para reabilitação de pacientes com perturbações neurocognitivas. Interface dual (paciente + terapeuta) com IA integrada.',
    tags: ['Realidade Virtual', 'IA', 'MedTech', 'Saúde', 'UX Clínico'],
  },
};

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
  },
  {
    file: 'servicos/index.html',
    canonical: SITE + '/servicos',
    title: 'Serviços de Consultoria | Processos · IA · Tecnologia · Formação — Transparent Reasons',
    desc: 'Consultoria de processos e formação empresarial para PMEs portuguesas. Avenças mensais com acompanhamento contínuo. Diagnóstico gratuito.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Serviços', SITE + '/servicos']]), schemaFAQservicos],
  },
  {
    file: 'produtos/index.html',
    canonical: SITE + '/produtos',
    title: 'Ferramentas de Produtividade e IA para PMEs — Transparent Reasons',
    desc: 'Implementação e gestão de Microsoft 365, Atlassian (Jira, Confluence) e ferramentas de IA para empresas portuguesas. Fee fixo mensal, subscrições ao preço do fabricante.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Produtos', SITE + '/produtos']]), schemaFAQprodutos],
  },
  {
    file: 'sobre/index.html',
    canonical: SITE + '/sobre',
    title: 'Quem Somos — Miguel Pires Soeiro | Transparent Reasons',
    desc: 'Conheça Miguel Pires Soeiro, fundador da Transparent Reasons. Mais de 9 anos de experiência em tecnologia e gestão. MSc pelo Instituto Superior Técnico.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Sobre', SITE + '/sobre']]), schemaPerson, schemaFAQsobre],
  },
  {
    file: 'contacto/index.html',
    canonical: SITE + '/contacto',
    title: 'Contacto — Diagnóstico Gratuito para a Sua Empresa | Transparent Reasons',
    desc: 'Fale connosco e peça um diagnóstico gratuito para a sua empresa. Sem compromisso. Respondemos em 24 horas úteis.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Contacto', SITE + '/contacto']])],
  },
  {
    file: 'publicacoes/index.html',
    canonical: SITE + '/publicacoes',
    title: 'Casos de Estudo — Projectos de Referência | Transparent Reasons',
    desc: 'Projectos reais construídos pela Transparent Reasons: Nivelfarma, Farmácia Sália e Immersive Lives. Contexto, desafio, abordagem e resultado.',
    schemas: [crumb([[1, 'Home', SITE + '/'], [2, 'Publicações', SITE + '/publicacoes']])],
  },
  ...Object.entries(articleData).map(([slug, a]) => ({
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
        keywords: a.tags.join(', '),
        author: { '@type': 'Person', '@id': `${SITE}/sobre#miguel`, name: 'Miguel Pires Soeiro' },
        publisher: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Transparent Reasons' },
      },
    ],
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

function buildInject(route) {
  const schemasHtml = route.schemas
    .map(s => `  <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n');

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
${schemasHtml}`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

let count = 0;
for (const route of routes) {
  const stripped = stripHead(template);
  const inject   = buildInject(route);
  const html     = stripped.replace('</head>', `${inject}\n</head>`);

  const filePath = path.join(DIST, route.file);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, 'utf-8');
  count++;
  console.log(`  ✓ ${route.file}`);
}

console.log(`\nPre-rendered ${count} routes.`);
