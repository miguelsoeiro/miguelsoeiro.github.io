import { ArticleCard, type ArticleCardProps } from "@/components/ui/blog-post-card";

// Blog posts data
const blogPosts: ArticleCardProps[] = [
  {
    headline: "Transformação Digital com IA: Primeiros Passos",
    excerpt:
      "Como implementar soluções de IA para otimizar processos empresariais e acelerar a transformação digital da sua organização.",
    cover:
      "https://images.unsplash.com/photo-1677442d019cecf8f6e1c29b2c225b8d544d15b1?w=800&h=600&fit=crop",
    tag: "IA & Automação",
    readingTime: 420,
    writer: "João Silva",
    publishedAt: new Date("2026-04-10"),
    clampLines: 3,
  },
  {
    headline: "Agentes IA: O Futuro da Produtividade Software",
    excerpt:
      "Explore como agentes autónomos estão redefinindo workflows de desenvolvimento, suporte ao cliente e processos empresariais.",
    cover:
      "https://images.unsplash.com/photo-1677442d019cecf8f6e1c29b2c225b8d544d15b1?w=800&h=600&fit=crop&q=80",
    tag: "Tecnologia",
    readingTime: 480,
    writer: "Maria Costa",
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
    writer: "Pedro Mendes",
    publishedAt: new Date("2026-04-05"),
    clampLines: 3,
  },
];

const BlogSection = () => {
  return (
    <div className="mt-20 pt-20 border-t border-devin-border">
      {/* Section Header */}
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
          Insights & <span className="text-teal">Tendências</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Acompanhe nossas análises sobre IA, transformação digital e inovação em
          tecnologia.
        </p>
      </div>

      {/* Blog Cards Grid - Responsive: 1 col mobile, 2 md, 3 lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="flex justify-center">
            <ArticleCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
