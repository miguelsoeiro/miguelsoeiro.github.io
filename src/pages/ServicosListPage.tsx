import { Link } from "react-router-dom";
import { Home, Layers, BookOpen, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const servicoCards = [
  {
    slug: "consultoria-processos",
    title: "Consultoria de Processos",
    icon: Layers,
    color: "text-blue-400",
    description: "Avença mensal com acompanhamento contínuo, mapeamento de processos internos e relatório mensal de progresso.",
    packs: [
      { name: "Starter", detail: "8h/mês", price: "600 €/mês" },
      { name: "Growth", detail: "16h/mês", price: "1.100 €/mês" },
      { name: "Scale", detail: "32h/mês", price: "2.000 €/mês" },
    ],
  },
  {
    slug: "formacao",
    title: "Formação",
    icon: BookOpen,
    color: "text-emerald-400",
    description: "Sessões práticas presenciais ou remotas para equipas de até 12 participantes, com materiais e certificado incluídos.",
    packs: [
      { name: "Sessão 3h", detail: "Até 12 participantes", price: "450 €" },
      { name: "Sessão 6h", detail: "Até 12 participantes", price: "800 €" },
      { name: "Pack 5 Sessões", detail: "Desconto ~12%", price: "3.500 €" },
    ],
  },
];

const ServicosListPage = () => {
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
          <span className="text-foreground">Serviços</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Serviços
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Os nossos <span className="text-teal">Serviços</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Consultoria de processos e formação para equipas e organizações. Acompanhamento contínuo, resultados mensuráveis.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicoCards.map((s) => {
            const IconComponent = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/servicos/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-devin-border bg-devin-card hover:border-devin-teal/40 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="px-6 pt-6 pb-5"
                  style={{ background: "radial-gradient(ellipse at 0% 0%, hsl(186 100% 50% / 0.07) 0%, transparent 70%)" }}
                >
                  <div className={`${s.color} mb-4 transition-transform group-hover:scale-110 inline-block`}>
                    <IconComponent size={28} />
                  </div>
                  <h2 className="text-lg font-bold text-foreground group-hover:text-devin-teal transition-colors mb-2">
                    {s.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>

                <div className="h-px bg-devin-border mx-6" />

                <div className="px-6 py-4 space-y-2 flex-1">
                  {s.packs.map((pack) => (
                    <div key={pack.name} className="flex items-center justify-between px-3 py-2 rounded-xl bg-devin-surface/60 border border-devin-border/60">
                      <span className="text-sm font-medium text-foreground">{pack.name}</span>
                      <span className="text-sm font-bold text-devin-teal whitespace-nowrap">{pack.price}</span>
                    </div>
                  ))}
                </div>

                <div className="px-6 pb-6 flex items-center gap-1.5 text-xs font-medium text-devin-teal group-hover:text-devin-teal/80 transition-colors">
                  Ver detalhes
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicosListPage;
