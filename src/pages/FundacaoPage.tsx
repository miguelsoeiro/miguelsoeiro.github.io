import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, GraduationCap, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import miguelPhoto from "@/assets/miguel-soeiro.jpeg";
import miguelPhotoWebp from "@/assets/miguel-soeiro.webp";

const formacao = {
  grau: "MSc em Engenharia Informática e de Computadores",
  instituicao: "Instituto Superior Técnico",
  periodo: "2017 – 2020",
  areas: ["Big Data", "Engenharia de Software", "Sistemas Distribuídos", "Inteligência Artificial"],
};

const certificacoes = [
  {
    titulo: "Agile Project Management",
    emissor: "Google",
    ano: "2024",
    cor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    sigla: "G",
  },
  {
    titulo: "SI Architect Certification",
    emissor: "MongoDB",
    ano: "2024",
    cor: "text-green-400",
    bgColor: "bg-green-400/10",
    sigla: "M",
  },
  {
    titulo: "Project Management Professional Certificate",
    emissor: "Google",
    ano: "2024",
    cor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    sigla: "G",
  },
];

const projects = [
  {
    sector: "Distribuição Farmacêutica",
    name: "Nivelfarma",
    location: "Sintra, Lisboa",
    description: "22 aplicações desenvolvidas de raiz — web, iOS, Android e robótica farmacêutica. Construído sem sistemas prévios.",
    slug: "nivelfarma",
    initials: "NF",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    sector: "Retalho Farmacêutico",
    name: "Farmácia Sália",
    location: "Setúbal, Portugal",
    description: "Plataforma de gestão de clientes e fidelização (CRM) construída de raiz, sem solução prévia.",
    slug: "farmacias-mais-saude",
    initials: "FM",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    sector: "MedTech · Realidade Virtual",
    name: "Immersive Lives",
    location: "Óbidos",
    description: "Sistema VR para reabilitação neurocognitiva com IA integrada. Interface dual para pacientes e terapeutas.",
    slug: "immersive-lives",
    initials: "IL",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
];

const timelineEntries = [
  {
    period: "Ago 2025 — Presente",
    role: "Data & AI Enterprise Solutions Architect",
    company: "Sector Financeiro",
    description: "Concepção de arquitecturas de dados escaláveis e soluções de IA orientadas ao negócio. Ponte entre estratégia e execução técnica em ambiente de grande escala.",
    badge: null,
  },
  {
    period: "Fev 2023 — Ago 2025",
    role: "Service Lead — Data Lake",
    company: "Xpand IT",
    description: "Liderança de equipa de 15 pessoas em 3 sub-equipas (suporte, desenvolvimento, ingestão de dados) para cliente bancário internacional. Azure Databricks e Cloudera.",
    badge: null,
  },
  {
    period: "Nov 2021 — Fev 2023",
    role: "Engagement Manager",
    company: "Xpand IT",
    description: "Gestão de conta estratégica, identificação de novas oportunidades de negócio e coordenação de entregas em ambiente multidisciplinar.",
    badge: null,
  },
  {
    period: "Out 2020 — Nov 2021",
    role: "Project Manager",
    company: "Xpand IT",
    description: "Gestão de projectos nos sectores bancário, segurador e retalho. Scrum, Kanban e Waterfall conforme o contexto de cada cliente.",
    badge: null,
  },
  {
    period: "Out 2018 — Out 2020",
    role: "Product Manager",
    company: "Nivelfarma",
    description: "Direcção de plataforma health tech com 22 aplicações. Primeira solução robótica multi-blister da Europa, em parceria com Pharmagest e Yuyama.",
    badge: "Cliente de referência TR",
  },
  {
    period: "Nov 2017 — Out 2018",
    role: "Full Stack Software Engineer",
    company: "Nivelfarma",
    description: "Desenvolvimento de plataforma web farmacêutica e aplicação Android para divisão de cuidados ao domicílio.",
    badge: null,
  },
  {
    period: "Jan 2017 — Nov 2017",
    role: "Software Developer — Unity 3D",
    company: "Immersive Lives",
    description: "Desenvolvimento de simulações VR imersivas para treino cognitivo e terapia. Backend APIs, lógica de interacção e ambientes 3D.",
    badge: "Cliente de referência TR",
  },
  {
    period: "Set 2016 — Jul 2017",
    role: "Team Leader & Assistant Teacher",
    company: "COPELABS · Universidade Lusófona",
    description: "Liderança de equipa de investigação em plataformas VR para terapia de exposição. Docência assistida em Realidade Virtual e Ciber-Terapia.",
    badge: null,
  },
];

const schemaFAQfundacao = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Quem fundou a Transparent Reasons?", "acceptedAnswer": { "@type": "Answer", "text": "Miguel Pires Soeiro, com mais de 9 anos de experiência em tecnologia e gestão. MSc em Engenharia Informática pelo Instituto Superior Técnico. Certificações em Agile PM e Project Management Professional (Google) e SI Architect (MongoDB)." } },
    { "@type": "Question", "name": "Que projectos já desenvolveu o fundador da Transparent Reasons?", "acceptedAnswer": { "@type": "Answer", "text": "Nivelfarma (22 aplicações de raiz — web, iOS, Android e robótica farmacêutica), Farmácia Sália (plataforma CRM e fidelização) e Immersive Lives (sistema VR para reabilitação neurocognitiva com IA)." } },
    { "@type": "Question", "name": "Qual é a filosofia da Transparent Reasons?", "acceptedAnswer": { "@type": "Answer", "text": "Transparência total: preços claros, recomendações honestas e comunicação directa. Cada decisão tem uma justificação racional comunicada ao cliente. Nunca recomendamos ferramentas que não escolheríamos para nós próprios." } },
  ],
};

const schemaPerson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.transparentreasons.com/fundacao#miguel",
      "name": "Miguel Pires Soeiro",
      "jobTitle": "Fundador, Consultoria, Dados & IA",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://www.transparentreasons.com/#organization",
        "name": "Transparent Reasons"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Instituto Superior Técnico",
        "address": { "@type": "PostalAddress", "addressCountry": "PT", "addressLocality": "Lisboa" }
      },
      "knowsAbout": ["Consultoria de Processos", "Gestão de Projectos", "Microsoft 365", "Atlassian", "Inteligência Artificial", "Data Engineering", "PMEs", "Scrum", "Kanban"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "Agile Project Management", "credentialCategory": "certification", "recognizedBy": { "@type": "Organization", "name": "Google" } },
        { "@type": "EducationalOccupationalCredential", "name": "SI Architect Certification", "credentialCategory": "certification", "recognizedBy": { "@type": "Organization", "name": "MongoDB" } },
        { "@type": "EducationalOccupationalCredential", "name": "Project Management Professional Certificate", "credentialCategory": "certification", "recognizedBy": { "@type": "Organization", "name": "Google" } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.transparentreasons.com/" },
        { "@type": "ListItem", "position": 2, "name": "Fundação", "item": "https://www.transparentreasons.com/fundacao" }
      ]
    }
  ]
};

const FundacaoPage = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimelineVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <PageLayout>
      <Helmet>
        <title>Fundador & Origens — Miguel Pires Soeiro | Transparent Reasons</title>
        <meta name="description" content="Conheça Miguel Pires Soeiro, fundador da Transparent Reasons, o seu percurso, certificações e os projectos que moldaram a empresa." />
        <link rel="canonical" href="https://www.transparentreasons.com/fundacao" />
        <meta property="og:title" content="Fundador & Origens — Miguel Pires Soeiro | Transparent Reasons" />
        <meta property="og:description" content="Conheça Miguel Pires Soeiro, fundador da Transparent Reasons. Mais de 9 anos de experiência em tecnologia e gestão." />
        <meta property="og:url" content="https://www.transparentreasons.com/fundacao" />
        <meta property="og:image" content="https://www.transparentreasons.com/apple-touch-icon.png" />
        <meta property="og:locale" content="pt_PT" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Fundador & Origens — Miguel Pires Soeiro | Transparent Reasons" />
        <meta name="twitter:description" content="Conheça Miguel Pires Soeiro, fundador da Transparent Reasons. Mais de 9 anos de experiência em tecnologia e gestão." />
        <meta name="twitter:image" content="https://www.transparentreasons.com/apple-touch-icon.png" />
        <script type="application/ld+json">{JSON.stringify(schemaPerson)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQfundacao)}</script>
      </Helmet>
      <div className="container max-w-4xl mx-auto px-6 pb-24">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={14} />Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Fundador</span>
        </div>

        {/* Hero badge */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground font-medium tracking-widest uppercase">Origens & Fundador</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            O fundador da <span className="text-devin-teal">Transparent Reasons</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mais de 9 anos a construir soluções reais para empresas reais.
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

        {/* Main — two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20 items-start">

          {/* Left — Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative w-64 lg:w-full max-w-xs">
              <div className="absolute inset-0 rounded-2xl ring-2 ring-devin-teal/40 pointer-events-none z-10" />
              <picture>
                <source srcSet={miguelPhotoWebp} type="image/webp" />
                <img
                  src={miguelPhoto}
                  alt="Miguel Pires Soeiro — Fundador da Transparent Reasons"
                  className="w-full rounded-2xl object-cover object-center shadow-lg"
                  loading="eager"
                  decoding="async"
                  width={800}
                  height={800}
                />
              </picture>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-1">Miguel Pires Soeiro</h2>
              <p className="text-sm font-medium text-devin-teal tracking-wide mb-3">
                Fundador · Consultoria · Dados & IA
              </p>
              <Link
                to="/vcard-mps"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground/70 border border-devin-border rounded-md hover:text-foreground/60 transition-colors"
              >
                ⬇ Guardar contacto
              </Link>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Com mais de 9 anos de experiência em tecnologia e gestão, trabalhei em projectos de grande escala nos sectores bancário, segurador, saúde e retalho — sempre na intersecção entre estratégia de negócio e execução técnica.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              O meu percurso começou no desenvolvimento de software, o que me deu uma base técnica sólida em aplicações web, mobile e sistemas distribuídos. Com o tempo, evoluí para gestão de projectos e liderança de equipas multidisciplinares, gerindo iniciativas complexas de ponta a ponta.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              A Transparent Reasons nasceu dessa experiência acumulada — para ajudar PMEs portuguesas a trabalhar melhor: com processos mais claros, tecnologia bem adoptada e equipas preparadas para crescer.
            </p>
          </div>
        </div>

        {/* Formação */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Formação</h2>
          <div className="rounded-2xl border border-devin-border bg-devin-surface/50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-devin-card border border-devin-border flex items-center justify-center">
                <GraduationCap size={20} className="text-devin-teal" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-base mb-0.5">{formacao.grau}</h3>
                <p className="text-sm text-devin-teal mb-1">{formacao.instituicao}</p>
                <p className="text-xs text-muted-foreground mb-3">{formacao.periodo}</p>
                <div className="flex flex-wrap gap-2">
                  {formacao.areas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-devin-card border border-devin-border text-devin-teal"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificações */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Certificações</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certificacoes.map((cert, i) => (
              <div
                key={i}
                className="rounded-2xl border border-devin-border bg-devin-surface/50 p-5 hover:border-devin-teal/40 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${cert.bgColor} border border-devin-border flex items-center justify-center mb-4`}>
                  <span className={`text-sm font-bold ${cert.cor}`}>{cert.sigla}</span>
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1 leading-snug">{cert.titulo}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{cert.emissor}</span>
                  <span className="text-xs text-devin-teal font-medium">{cert.ano}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* A Nossa Abordagem */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground font-medium tracking-widest uppercase">A Nossa Abordagem</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Como trabalhamos com cada cliente
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                num: "01",
                title: "Diagnóstico sem assumptions",
                body: "Antes de recomendar qualquer solução, ouvimos. Mapeamos os processos reais, falamos com as pessoas que os executam e identificamos as ineficiências que mais impactam o negócio. Cada empresa é diferente — tratamo-la como tal.",
              },
              {
                num: "02",
                title: "Planos que cabem no orçamento real",
                body: "Não vendemos soluções de enterprise a empresas com orçamentos de PME. Desenhamos planos de acção com tecnologias adequadas, timings realistas e estimativas de retorno honestas. Sem over-engineering.",
              },
              {
                num: "03",
                title: "Execução com acompanhamento contínuo",
                body: "Não entregamos um relatório e desaparecemos. Implementamos, acompanhamos, ajustamos. Todos os meses enviamos um relatório de progresso com o que foi feito, o que está por fazer e o impacto medido.",
              },
              {
                num: "04",
                title: "Formação para que o investimento não se perca",
                body: "A melhor ferramenta não serve de nada se a equipa não souber usá-la. Por isso, a formação faz parte da metodologia — não é um extra. Capacitamos as pessoas para que sejam autónomas após a nossa saída.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="rounded-xl border border-devin-border bg-devin-surface/50 p-6 hover:border-devin-teal/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-devin-teal bg-devin-teal/10 px-2 py-0.5 rounded-full">{pillar.num}</span>
                  <h3 className="font-bold text-foreground text-sm">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Porquê Transparent Reasons */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground font-medium tracking-widest uppercase">O Nome</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-5">
            Porquê "Transparent Reasons"?
          </h2>
          <div className="rounded-xl border border-devin-border bg-devin-surface/50 p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              O nome não é acidental. "Transparent" reflecte um compromisso com a clareza total — nos preços, nas recomendações, nos relatórios de progresso e nas conversas difíceis. Nunca vendemos tecnologia que não seria a nossa primeira escolha, e nunca ocultamos quando algo não está a funcionar.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "Reasons" reflecte a crença de que cada decisão deve ter uma justificação racional e comunicada. Quando recomendamos uma ferramenta, explicamos porquê. Quando aconselhamos contra uma opção, também. O cliente deve sempre perceber o raciocínio por detrás de cada escolha — não apenas seguir recomendações às cegas.
            </p>
          </div>
        </div>

        {/* Percurso */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground font-medium tracking-widest uppercase">Percurso</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-10">
            Uma carreira construída na intersecção entre tecnologia e negócio
          </h2>

          <div ref={timelineRef} className="relative">
            {/* Vertical line — gradient fade top & bottom */}
            <div
              className="absolute left-[10px] top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent 0%, #4DC8F0 8%, #4DC8F0 92%, transparent 100%)" }}
            />

            <div className="space-y-4 pl-9">
              {timelineEntries.map((entry, i) => (
                <div
                  key={i}
                  style={
                    timelineVisible
                      ? { animation: "timeline-slide-in 200ms ease forwards", animationDelay: `${i * 60}ms`, opacity: 0 }
                      : { opacity: 0 }
                  }
                  className="relative"
                >
                  {/* Dot — outer ring + inner fill */}
                  <div className="absolute -left-[25px] top-[18px]">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        i === 0
                          ? "border-devin-teal bg-devin-teal/10"
                          : "border-devin-border bg-devin-surface"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          i === 0 ? "bg-devin-teal animate-pulse" : "bg-devin-teal/50"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-xl overflow-hidden transition-all hover:border-devin-teal/30 ${
                      i === 0 ? "border border-devin-teal/40" : "border border-devin-border"
                    }`}
                    style={{ background: "#1E1E2E" }}
                  >
                    {/* Accent strip — current entry only */}
                    {i === 0 && (
                      <div className="h-px bg-gradient-to-r from-devin-teal/80 via-devin-teal/30 to-transparent" />
                    )}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-devin-teal/70">
                          {entry.period}
                        </p>
                        {entry.badge && (
                          <span className="flex-shrink-0 inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-devin-teal/15 text-devin-teal border border-devin-teal/30">
                            {entry.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-base text-foreground leading-snug mb-1">
                        {entry.role}
                      </h3>
                      <p className="mb-2 text-sm text-devin-teal font-medium">
                        {entry.company}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projectos de Referência */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Projectos de Referência</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {projects.map((p) => (
              <div
                key={p.slug}
                className="rounded-2xl border border-devin-border bg-devin-surface/50 p-5 hover:border-devin-teal/40 transition-all flex flex-col"
              >
                <div className={`w-10 h-10 rounded-xl ${p.bgColor} border border-devin-border flex items-center justify-center mb-4 flex-shrink-0`}>
                  <span className={`text-xs font-bold ${p.color}`}>{p.initials}</span>
                </div>
                <p className={`text-xs font-medium ${p.color} mb-1`}>{p.sector}</p>
                <h3 className="font-bold text-foreground text-sm mb-0.5 leading-snug">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.location}</p>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Link
              to="/publicacoes"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors"
            >
              Ver casos de estudo completos
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div
          className="relative rounded-3xl border border-devin-border bg-devin-card overflow-hidden p-8 text-center"
          style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Quer conhecer melhor o trabalho da Transparent Reasons?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Veja os projectos que desenvolvemos ou agende um diagnóstico gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/publicacoes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-devin-border text-foreground font-medium text-sm hover:border-devin-teal/40 transition-colors"
            >
              Ver Projectos
              <ArrowRight size={14} />
            </Link>
            <a
              href="mailto:geral@transparentreasons.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-devin-teal text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Agendar Diagnóstico
            </a>
            <a
              href="https://wa.me/351930679484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-devin-border text-foreground font-medium text-sm hover:border-green-400/50 hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default FundacaoPage;
