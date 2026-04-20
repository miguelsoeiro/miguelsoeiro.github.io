import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { ArticleCard, type ArticleCardProps } from "@/components/ui/blog-post-card";

const articles: ArticleCardProps[] = [
  {
    headline: "Transformação Digital com IA: Primeiros Passos",
    excerpt:
      "Como implementar soluções de IA para otimizar processos empresariais e acelerar a transformação digital da sua organização.",
    cover:
      "https://images.unsplash.com/photo-1677442d019cecf8f6e1c29b2c225b8d544d15b1?w=800&h=600&fit=crop",
    tag: "IA & Automação",
    readingTime: 420,
    writer: "Transparent Reasons",
    publishedAt: new Date("2026-04-10"),
    clampLines: 3,
  },
  {
    headline: "Agentes IA: O Futuro da Produtividade Software",
    excerpt:
      "Explore como agentes autónomos estão a redefinir workflows de desenvolvimento, suporte ao cliente e processos empresariais.",
    cover:
      "https://images.unsplash.com/photo-1677442d019cecf8f6e1c29b2c225b8d544d15b1?w=800&h=600&fit=crop&q=80",
    tag: "Tecnologia",
    readingTime: 480,
    writer: "Transparent Reasons",
    publishedAt: new Date("2026-04-08"),
    clampLines: 3,
  },
  {
    headline: "Segurança em Primeira Linha: Compliance com IA",
    excerpt:
      "Implemente práticas de segurança robustas e conformidade regulatória usando tecnologias emergentes e automação inteligente.",
    cover:
      "https://images.unsplash.com/photo-1677442d019cecf8f6e1c29b2c225b8d544d15b1?w=800&h=600&fit=crop&q=60",
    tag: "Segurança",
    readingTime: 540,
    writer: "Transparent Reasons",
    publishedAt: new Date("2026-04-05"),
    clampLines: 3,
  },
];

const ArtigosPage = () => {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={14} />
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Artigos</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Insights & Tendências
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Artigos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Análises sobre IA, transformação digital e inovação em tecnologia — escritas pela equipa da Transparent Reasons.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {articles.map((article, idx) => (
            <div key={idx} className="flex justify-center">
              <ArticleCard {...article} />
            </div>
          ))}
        </div>

        {/* Placeholder */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-devin-border/50 bg-devin-surface/20 p-10 text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal/40 animate-pulse mb-4" />
          <p className="text-sm font-medium text-foreground/40">Mais artigos em breve</p>
          <p className="text-xs text-muted-foreground/40 mt-1">Novos conteúdos a caminho</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ArtigosPage;
