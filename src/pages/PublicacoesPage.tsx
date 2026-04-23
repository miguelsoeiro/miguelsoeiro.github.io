import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const cases = [
  {
    slug: "nivelfarma",
    company: "Nivelfarma",
    sector: "Distribuição Farmacêutica",
    location: "Sintra, Lisboa",
    period: "2021 – 2023",
    initials: "NF",
    description:
      "22 aplicações construídas de raiz — plataformas web, iOS, Android e sistema de controlo de robótica farmacêutica. Ecossistema digital completo sem sistemas prévios.",
    tags: ["Web", "iOS", "Android", "Robótica", "Saúde", "Gestão Clínica"],
  },
  {
    slug: "farmacias-mais-saude",
    company: "Farmácia Sália",
    sector: "Retalho Farmacêutico",
    location: "Setúbal",
    period: "2022 – 2023",
    initials: "FS",
    description:
      "Plataforma de gestão de clientes e fidelização de raiz: base de dados centralizada, histórico individual, sistema de pontos e benefícios.",
    tags: ["Web", "CRM", "Fidelização", "Retalho", "Saúde"],
  },
  {
    slug: "immersive-lives",
    company: "Immersive Lives",
    sector: "MedTech / Realidade Virtual",
    location: "Óbidos, Portugal",
    period: "2023 – 2024",
    initials: "IL",
    description:
      "Sistema de VR para reabilitação de pacientes com perturbações neurocognitivas. Interface dual (paciente + terapeuta) com IA integrada.",
    tags: ["Realidade Virtual", "IA", "MedTech", "Saúde", "UX Clínico"],
  },
];

const PublicacoesPage = () => {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={14} />
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Publicações</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Casos de Estudo
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Publicações
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Projectos reais, construídos de raiz, em sectores distintos. Cada caso com contexto, desafio, abordagem e resultado.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {cases.map((c) => (
            <div
              key={c.slug}
              className="group flex flex-col rounded-2xl border border-devin-border bg-devin-card hover:border-devin-teal/40 transition-all duration-300 overflow-hidden"
            >
              {/* Card header */}
              <div
                className="px-6 pt-6 pb-5"
                style={{
                  background:
                    "radial-gradient(ellipse at 0% 0%, hsl(186 100% 50% / 0.07) 0%, transparent 70%)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-devin-surface border border-devin-border flex items-center justify-center">
                    <span className="text-xs font-bold text-devin-teal tracking-tight">
                      {c.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base font-semibold text-foreground group-hover:text-devin-teal transition-colors leading-tight">
                      {c.company}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.sector}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {c.location}
                  </span>
                  <span className="text-devin-border">·</span>
                  <span>{c.period}</span>
                </div>
              </div>

              <div className="h-px bg-devin-border mx-6" />

              <div className="px-6 py-5 flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </div>

              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-devin-surface border border-devin-border text-devin-teal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/publicacoes/${c.slug}`}
                className="mx-6 mb-6 flex items-center gap-1.5 text-xs font-medium text-devin-teal hover:text-devin-teal/80 transition-colors group/link"
              >
                Ler caso completo
                <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}

          {/* Placeholder card */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-devin-border/50 bg-devin-surface/20 p-10 text-center min-h-[200px]">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal/40 animate-pulse mb-4" />
            <p className="text-sm font-medium text-foreground/40">Mais publicações em breve</p>
            <p className="text-xs text-muted-foreground/40 mt-1">Novos casos de estudo a caminho</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PublicacoesPage;
