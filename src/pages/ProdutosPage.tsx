import { Link } from "react-router-dom";
import { Home, CheckCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const productivityTools = [
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    vendor: "Microsoft",
    initials: "M365",
    description:
      "Suite completa de produtividade empresarial da Microsoft, com ferramentas para comunicação, colaboração e automação.",
    tools: ["Teams", "Outlook", "SharePoint", "OneDrive", "Excel", "Word", "PowerPoint", "Power Automate", "Power BI"],
    services: [
      "Licenciamento e gestão de contas",
      "Implementação e configuração",
      "Formação de equipas",
      "Suporte de 1.º nível",
    ],
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    vendor: "Google",
    initials: "GW",
    description:
      "Suite de produtividade e colaboração da Google, alternativa ao Microsoft 365 com integração nativa entre ferramentas.",
    tools: ["Gmail", "Drive", "Docs", "Sheets", "Slides", "Meet", "Calendar", "Forms"],
    services: [
      "Licenciamento e gestão de contas",
      "Implementação e configuração",
      "Formação de equipas",
      "Migração entre plataformas",
    ],
  },
  {
    id: "atlassian",
    name: "Atlassian",
    vendor: "Atlassian",
    initials: "ATL",
    description:
      "Plataforma líder em gestão de projectos e documentação para equipas ágeis, com ferramentas para qualquer tipo de fluxo de trabalho.",
    tools: ["Jira", "Confluence", "Jira Service Management", "Jira Product Discovery"],
    services: [
      "Licenciamento e gestão de contas",
      "Implementação e configuração de workflows",
      "Formação em metodologias ágeis",
      "Suporte contínuo",
    ],
  },
];

const aiTools = [
  {
    id: "claude",
    name: "Claude",
    vendor: "Anthropic",
    initials: "CL",
    description:
      "Assistente de IA avançado, ideal para análise de documentos, redacção, síntese de informação e raciocínio complexo.",
    highlight:
      "Excelente para trabalho com documentos longos e contexto empresarial sensível.",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    initials: "GPT",
    description:
      "O assistente de IA mais utilizado no mundo, versátil para criação de conteúdo, suporte, automação e produtividade geral.",
    highlight:
      "Ecossistema de plugins e GPTs personalizados para casos de uso específicos.",
  },
  {
    id: "gemini",
    name: "Gemini",
    vendor: "Google",
    initials: "GM",
    description:
      "IA da Google com integração nativa no Google Workspace, ideal para empresas que já usam Gmail, Drive e Docs.",
    highlight:
      "Integração directa com as ferramentas Google que a equipa já usa no dia-a-dia.",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    vendor: "Microsoft",
    initials: "GCP",
    description:
      "Assistente de IA para programadores, integrado no ambiente de desenvolvimento. Acelera a escrita de código e reduz erros.",
    highlight: "Ideal para equipas técnicas que desenvolvem software internamente.",
  },
  {
    id: "devin",
    name: "Devin",
    vendor: "Cognition",
    initials: "DVN",
    description:
      "Agente de IA autónomo para desenvolvimento de software. Capaz de executar tarefas de programação de forma independente.",
    highlight:
      "Primeiro agente de IA verdadeiramente autónomo para tarefas de engenharia de software.",
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    vendor: "Google",
    initials: "NLM",
    description:
      "Ferramenta de IA para análise e síntese de documentos. Transforma documentos extensos em conhecimento acessível e navegável.",
    highlight:
      "Ideal para equipas que trabalham com grandes volumes de documentação interna.",
  },
  {
    id: "grok",
    name: "Grok",
    vendor: "xAI",
    initials: "GRK",
    description:
      "Assistente de IA da xAI com acesso a informação em tempo real e integração com a plataforma X.",
    highlight: "Forte capacidade de análise de tendências e informação actualizada.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    vendor: "Perplexity AI",
    initials: "PPX",
    description:
      "Motor de pesquisa com IA que combina resultados da web com síntese inteligente. Substitui pesquisas longas por respostas directas com fontes.",
    highlight:
      "Ideal para investigação rápida e verificação de informação em contexto empresarial.",
  },
];

const SectionBadge = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border mb-5">
    <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
    <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
      {label}
    </span>
  </div>
);

const ProdutosPage = () => {
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
          <span className="text-foreground">Produtos</span>
        </nav>

        {/* Page header */}
        <div className="mb-16">
          <SectionBadge label="Produtos & Ferramentas" />
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Produtos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            As melhores ferramentas do mercado, implementadas e geridas por nós.
            Seleccionamos, configuramos e formamos — para que a sua equipa tire o máximo partido.
          </p>
        </div>

        {/* ── Secção 1: Ferramentas de Produtividade ── */}
        <div className="mb-20">
          <div className="mb-10">
            <SectionBadge label="Produtividade" />
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Ferramentas de <span className="text-teal">Produtividade</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              Implementamos, gerimos e formamos nas principais plataformas de produtividade empresarial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productivityTools.map((tool) => (
              <div
                key={tool.id}
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
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-devin-surface border border-devin-border flex items-center justify-center">
                      <span className="text-xs font-bold text-devin-teal tracking-tight">
                        {tool.initials}
                      </span>
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-devin-teal transition-colors leading-tight">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{tool.vendor}</p>
                    </div>
                  </div>
                  <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-devin-surface border border-devin-border text-devin-teal">
                    Produtividade
                  </span>
                </div>

                <div className="h-px bg-devin-border mx-6" />

                {/* Description */}
                <div className="px-6 py-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                </div>

                {/* Tools included */}
                <div className="px-6 pb-4">
                  <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2">
                    Ferramentas incluídas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs bg-devin-surface/80 border border-devin-border/60 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What we do */}
                <div className="px-6 pb-6 flex-1">
                  <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-3">
                    O que fazemos
                  </p>
                  <ul className="space-y-1.5">
                    {tool.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={13} className="text-devin-teal mt-0.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Secção 2: Ferramentas de IA ── */}
        <div className="mb-16">
          <div className="mb-10">
            <SectionBadge label="Inteligência Artificial" />
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Ferramentas de <span className="text-teal">Inteligência Artificial</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              Seleccionamos a ferramenta certa para cada função. Gerimos, implementamos e formamos as equipas para usar IA de forma prática e segura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiTools.map((tool) => (
              <div
                key={tool.id}
                className="group flex flex-col rounded-2xl border border-devin-border bg-devin-card hover:border-devin-teal/40 transition-all duration-300 overflow-hidden"
              >
                {/* Card header */}
                <div
                  className="px-5 pt-5 pb-4"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 0%, hsl(186 100% 50% / 0.07) 0%, transparent 70%)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-devin-surface border border-devin-border flex items-center justify-center">
                      <span className="text-xs font-bold text-devin-teal tracking-tight">
                        {tool.initials}
                      </span>
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-devin-teal transition-colors leading-tight">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{tool.vendor}</p>
                    </div>
                  </div>
                  <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-devin-surface border border-devin-border text-devin-teal">
                    IA
                  </span>
                </div>

                <div className="h-px bg-devin-border mx-5" />

                {/* Description */}
                <div className="px-5 py-4 flex-1">
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                </div>

                {/* Highlight */}
                <div className="mx-5 mb-5 px-3 py-2.5 rounded-xl bg-devin-surface/60 border-l-2 border-devin-teal/60">
                  <p className="text-xs text-muted-foreground/80 leading-relaxed italic">
                    {tool.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="relative rounded-2xl border border-devin-border bg-devin-card overflow-hidden p-10 text-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Não sabe qual a ferramenta certa para a sua empresa?
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
            Fazemos esse diagnóstico — gratuitamente.
          </p>
          <a
            href="mailto:geral@transparentreasons.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-devin-teal text-background text-sm font-semibold hover:bg-devin-teal/90 transition-colors hover:scale-105 active:scale-95"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProdutosPage;
