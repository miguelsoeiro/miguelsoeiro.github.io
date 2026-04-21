import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { ArticleCard } from "@/components/ui/blog-post-card";
import { articles } from "@/data/articles";

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
          {articles.map((article) => (
            <div key={article.slug} className="flex justify-center">
              <Link to={`/artigos/${article.slug}`} className="block" aria-label={`Ler artigo: ${article.headline}`}>
                <ArticleCard {...article} />
              </Link>
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
