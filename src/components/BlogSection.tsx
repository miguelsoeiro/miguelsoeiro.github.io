import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/ui/blog-post-card";
import { articles } from "@/data/articles";

const BlogSection = () => {
  return (
    <div className="mt-20 pt-20 border-t border-devin-border">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
          <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">Insights & Tendências</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Insights & <span className="text-teal">Tendências</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Acompanhe nossas análises sobre IA, transformação digital e inovação em tecnologia.
        </p>
      </div>

      {/* Blog Cards Grid - Responsive: 1 col mobile, 2 md, 3 lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.slug} className="flex justify-center">
            <Link to={`/artigos/${article.slug}`} className="block" aria-label={`Ler artigo: ${article.headline}`}>
              <ArticleCard {...article} />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <Link
          to="/artigos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors"
        >
          Ver mais artigos
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
