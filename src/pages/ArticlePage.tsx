import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface ArticleData {
  company: string;
  sector: string;
  location: string;
  period: string;
  initials: string;
  tags: string[];
  contexto: string;
  desafio: string;
  abordagem: string;
  resultado: string;
}

const articleData: Record<string, ArticleData> = {
  "nivelfarma": {
    company: "Nivelfarma",
    sector: "Distribuição Farmacêutica",
    location: "Sintra, Lisboa",
    period: "2021 – 2023",
    initials: "NF",
    tags: ["Web", "iOS", "Android", "Robótica", "Saúde", "Gestão Clínica"],
    contexto:
      "A Nivelfarma é uma empresa portuguesa de distribuição de produtos farmacêuticos e geriátricos, sediada em Sintra, com uma divisão tecnológica própria — a NivelTech. Quando iniciámos a colaboração, não existia qualquer sistema digital interno: toda a operação decorria sem infraestrutura tecnológica de suporte.",
    desafio:
      "Construir um ecossistema digital de raiz para múltiplos perfis de utilizador — farmácias, lares, auxiliares, enfermeiros e gestores — com cobertura multiplataforma, integração com robótica farmacêutica e conformidade com as exigências regulatórias do sector.",
    abordagem:
      "Desenvolvemos 22 aplicações ao longo de vários anos: plataformas web para gestão de encomendas e terapêutica; aplicações iOS e Android para apoio domiciliário e institucional; sistema de controlo de robótica farmacêutica com integração software-hardware; e gestão de dados clínicos com conformidade regulatória. A metodologia foi iterativa, com validação constante com utilizadores finais em contexto real.",
    resultado:
      "22 aplicações em produção a servir farmácias, lares e prestadores de cuidados de saúde em Portugal. Ecossistema digital completo construído de raiz, que passou a suportar toda a operação da empresa e da sua rede de clientes.",
  },
  "farmacias-mais-saude": {
    company: "Farmácia Sália",
    sector: "Retalho Farmacêutico",
    location: "Setúbal",
    period: "2022 – 2023",
    initials: "FS",
    tags: ["Web", "CRM", "Fidelização", "Retalho", "Saúde"],
    contexto:
      "Farmácia em Setúbal. À data do início da colaboração não existia qualquer sistema para gerir a relação com clientes — a informação estava dispersa ou simplesmente não existia de forma estruturada.",
    desafio:
      "Ausência total de CRM e impossibilidade de identificar e premiar clientes fidelizados. Processos manuais, dependentes de memória humana, sem escalabilidade para o crescimento do grupo.",
    abordagem:
      "Desenvolvemos uma plataforma de gestão de clientes e fidelização à medida: base de dados centralizada com perfil e histórico individual por cliente; sistema de pontos e benefícios configurável; formação das equipas para adopção da plataforma; e acompanhamento pós-implementação com ajustes baseados em feedback real das equipas de farmácia.",
    resultado:
      "Base de dados unificada de clientes operacional. Programa de fidelização activo e em uso diário. Decisões de gestão passaram a ser baseadas em dados reais, em vez de estimativas ou memória.",
  },
  "immersive-lives": {
    company: "Immersive Lives",
    sector: "MedTech / Realidade Virtual",
    location: "Óbidos, Portugal",
    period: "2023 – 2024",
    initials: "IL",
    tags: ["Realidade Virtual", "IA", "MedTech", "Saúde", "UX Clínico"],
    contexto:
      "Spin-off da Universidade Lusófona, sediada em Óbidos, especializada em soluções de realidade virtual aplicadas à saúde. O projecto centrou-se em pacientes com perturbações neurocognitivas e nos profissionais de saúde que os acompanham.",
    desafio:
      "Criar ambientes virtuais seguros e adaptados para utilizadores com limitações cognitivas. Desenvolver em simultâneo uma interface dual para dois perfis completamente distintos: pacientes com limitações e terapeutas com necessidades de controlo, monitorização e registo. Tudo construído de raiz.",
    abordagem:
      "Desenvolvemos ambientes VR adaptados a perfis neurocognitivos específicos; painel de controlo para terapeutas com monitorização em tempo real das sessões; interface simplificada e acessível para pacientes; e componentes de IA integrados para personalização automática de sessões com base no perfil e progresso de cada paciente.",
    resultado:
      "Sistema em uso com pacientes reais em contexto terapêutico. Interface dual funcional e validada por terapeutas. IA integrada para personalização clínica activa, com registo de sessões e evolução individual de cada paciente.",
  },
};

const sections = [
  { key: "contexto" as const, label: "O Contexto" },
  { key: "desafio" as const, label: "O Desafio" },
  { key: "abordagem" as const, label: "A Nossa Abordagem" },
  { key: "resultado" as const, label: "O Resultado" },
];

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articleData[slug] : null;

  if (!article) return <Navigate to="/publicacoes" replace />;

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={14} />
            Home
          </Link>
          <span>/</span>
          <Link to="/publicacoes" className="hover:text-foreground transition-colors">
            Publicações
          </Link>
          <span>/</span>
          <span className="text-foreground">{article.company}</span>
        </nav>

        {/* Article header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal" />
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              {article.sector}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-devin-surface border border-devin-border flex items-center justify-center">
              <span className="text-sm font-bold text-devin-teal tracking-tight">
                {article.initials}
              </span>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {article.company}
              </h1>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {article.location} · {article.period}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-devin-surface border border-devin-border text-devin-teal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-6 mb-14">
          {sections.map(({ key, label }) => (
            <div
              key={key}
              className="rounded-2xl bg-devin-surface/50 border border-devin-border p-6"
            >
              <h2 className="text-base font-semibold text-devin-teal mb-3">{label}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{article[key]}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="relative rounded-2xl border border-devin-border bg-devin-card overflow-hidden p-8 text-center mb-12"
          style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Quer resultados semelhantes?
          </h3>
          <p className="text-sm text-muted-foreground mb-5">
            Cada projecto começa por um diagnóstico gratuito. Sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:geral@transparentreasons.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-devin-teal text-background text-sm font-semibold hover:bg-devin-teal/90 transition-colors"
            >
              Fale connosco
            </a>
            <a
              href="https://wa.me/351930679484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-devin-border text-foreground text-sm font-medium hover:border-green-400/50 hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Back link */}
        <Link
          to="/publicacoes"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors"
        >
          <ArrowLeft size={14} />
          Ver todas as publicações
        </Link>
      </div>
    </PageLayout>
  );
};

export default ArticlePage;
