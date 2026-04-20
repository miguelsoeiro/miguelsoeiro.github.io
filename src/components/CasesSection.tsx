const cases = [
  {
    id: "nivelfarma",
    company: "Nivelfarma",
    sector: "Distribuição Farmacêutica",
    location: "Sintra, Lisboa",
    period: "2021 – 2023",
    initials: "NF",
    description:
      "Desenvolvimento de 22 aplicações de raiz — plataformas web, aplicações iOS e Android, e um sistema de controlo de robótica farmacêutica. A Nivelfarma não dispunha de sistemas prévios: construímos toda a infraestrutura digital e operacional a partir do zero.",
    tags: ["Web", "iOS", "Android", "Robótica", "Backend", "Cloud"],
    testimonial: "[Testemunho do cliente a adicionar]",
  },
  {
    id: "farmacias-mais-saude",
    company: "Farmácias Mais Saúde",
    sector: "Retalho Farmacêutico",
    location: "Funchal, Madeira",
    period: "2022 – 2023",
    initials: "FMS",
    description:
      "Plataforma de gestão de clientes e fidelização construída de raiz: base de dados centralizada com histórico individual por cliente, sistema de pontos e benefícios. A solução substituiu processos manuais e permitiu à rede conhecer e reter melhor os seus clientes.",
    tags: ["Web", "CRM", "Base de Dados", "Fidelização", "Backend"],
    testimonial: "[Testemunho do cliente a adicionar]",
  },
  {
    id: "immersive-lives",
    company: "Immersive Lives",
    sector: "MedTech / Realidade Virtual",
    location: "Óbidos, Portugal",
    period: "2023 – 2024",
    initials: "IL",
    description:
      "Sistema de realidade virtual para reabilitação de pacientes com perturbações neurocognitivas. Interface dual — uma para o paciente, outra para o terapeuta — com componentes de inteligência artificial integrados para personalização das sessões e análise de progresso.",
    tags: ["Realidade Virtual", "IA", "MedTech", "Interface Dual", "UX"],
    testimonial: "[Testemunho do cliente a adicionar]",
  },
];

const CasesSection = () => {
  return (
    <div id="casos" className="mt-20 pt-20 border-t border-devin-border scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
          <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Projectos de Referência
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          O que já <span className="text-teal">fizemos</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Três projectos reais, construídos de raiz, em sectores distintos. Cada um com os seus desafios — e com resultados tangíveis.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <div
            key={c.id}
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
                {/* Initials badge */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-devin-surface border border-devin-border flex items-center justify-center">
                  <span className="text-xs font-bold text-devin-teal tracking-tight">
                    {c.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-devin-teal transition-colors leading-tight">
                    {c.company}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.sector}</p>
                </div>
              </div>

              {/* Meta */}
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

            {/* Divider */}
            <div className="h-px bg-devin-border mx-6" />

            {/* Description */}
            <div className="px-6 py-5 flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </div>

            {/* Tags */}
            <div className="px-6 pb-5">
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

            {/* Testimonial placeholder */}
            <div className="mx-6 mb-6 px-4 py-3 rounded-xl bg-devin-surface/60 border border-devin-border/50">
              <p className="text-xs text-muted-foreground/60 italic leading-relaxed">{c.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasesSection;
