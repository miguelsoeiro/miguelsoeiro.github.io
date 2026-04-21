import { Navigate, Link, useParams } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { articlesBySlug } from "@/data/articles";
import { formatPostDate, formatReadTime } from "@/components/ui/blog-post-card";

const ArtigoDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesBySlug[slug] : null;

  if (!article) return <Navigate to="/artigos" replace />;

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={14} />
            Home
          </Link>
          <span>/</span>
          <Link to="/artigos" className="hover:text-foreground transition-colors">
            Artigos
          </Link>
          <span>/</span>
          <span className="text-foreground truncate">{article.headline}</span>
        </nav>

        <article>
          <header className="mb-10">
            {article.tag && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-devin-teal" />
                <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                  {article.tag}
                </span>
              </div>
            )}
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              {article.headline}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {article.writer && <span>{article.writer}</span>}
              {article.writer && article.publishedAt && <span>•</span>}
              {article.publishedAt && <span>{formatPostDate(article.publishedAt)}</span>}
              {(article.writer || article.publishedAt) && article.readingTime && <span>•</span>}
              {article.readingTime && <span>{formatReadTime(article.readingTime)}</span>}
            </div>
          </header>

          {article.cover && (
            <div className="mb-10 overflow-hidden rounded-2xl border border-devin-border">
              <img
                src={article.cover}
                alt={article.headline}
                className="w-full h-[280px] md:h-[360px] object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          )}

          <div className="space-y-7 mb-14">
            {article.sections.map((section) => (
              <section key={section.title} className="rounded-2xl bg-devin-surface/50 border border-devin-border p-6">
                <h2 className="text-base font-semibold text-devin-teal mb-3">{section.title}</h2>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={`${section.title}-${idx}`} className="text-sm text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="rounded-2xl border border-devin-border bg-devin-surface/30 p-5 mb-12">
            <p className="text-sm text-muted-foreground">
              Nota: Todos os artigos foram gerados 100% com Inteligência Artificial.
            </p>
          </div>
        </article>

        <Link
          to="/artigos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors"
        >
          <ArrowLeft size={14} />
          Ver todos os artigos
        </Link>
      </div>
    </PageLayout>
  );
};

export default ArtigoDetailPage;
