import { useParams, Navigate, Link } from "react-router-dom";
import { Settings, Cpu, CheckCircle, ArrowLeft, Home } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const produtoData = {
  "tecnologia-ferramentas": {
    icon: Settings,
    color: "text-cyan-400",
    badge: "Subscrição Mensal ou Anual",
    title: "Tecnologia & Ferramentas",
    subtitle: "Revenda e implementação de Microsoft 365 e Atlassian, com suporte de 1.º nível e gestão de conta incluídos.",
    description:
      "Adquirir licenças é a parte fácil. O desafio está em implementar bem, integrar com os processos existentes e garantir que a equipa realmente adopta as ferramentas. A Transparent Reasons trata de tudo — da escolha do plano à configuração, passando pelo suporte contínuo.",
    includes: [
      "Análise das necessidades antes de qualquer recomendação",
      "Gestão completa de licenças, acessos e renovações",
      "Configuração e implementação das ferramentas",
      "Suporte de 1.º nível para utilizadores finais",
      "Formação inicial da equipa incluída",
      "Automação e integração entre ferramentas",
    ],
    packs: [
      { name: "Microsoft 365 Business Basic", hours: "Email, Teams, SharePoint (1 TB), OneDrive", price: "Preço por utilizador", ideal: "Para equipas que precisam de colaboração e email na cloud" },
      { name: "Microsoft 365 Business Standard", hours: "Inclui apps Office desktop + tudo do Basic", price: "Preço por utilizador", ideal: "Para quem também precisa do Word, Excel e PowerPoint instalados" },
      { name: "Microsoft 365 Business Premium", hours: "Segurança avançada (Intune, Defender) + tudo do Standard", price: "Preço por utilizador", ideal: "Para empresas com requisitos de segurança mais exigentes" },
      { name: "Atlassian (Jira / Confluence / JSM)", hours: "Gestão de projectos, documentação interna, service desk", price: "Preço por utilizador", ideal: "Para equipas que gerem projectos e processos de forma estruturada" },
    ],
    notes: ["Desconto de 10% em plano anual", "Preços finais dependem do número de utilizadores — contacte-nos para proposta"],
  },
  "consultoria-ia": {
    icon: Cpu,
    color: "text-teal-400",
    badge: "Avença + Subscrição Gerida",
    title: "Consultoria de IA",
    subtitle: "Selecção da ferramenta de IA certa para cada necessidade, gestão de licenças enterprise e formação específica incluída.",
    description:
      "O mercado de ferramentas de IA é enorme e cresce todos os meses. Escolher mal custa dinheiro e tempo. A Transparent Reasons avalia as necessidades reais da sua equipa, recomenda as ferramentas certas, gere as licenças enterprise e garante que a adopção é bem feita — com formação específica incluída.",
    includes: [
      "Avaliação das necessidades e recomendação das ferramentas mais adequadas",
      "Gestão de contas enterprise: licenças, acessos, facturação e custos",
      "Monitorização do uso e optimização de custos mensais",
      "Formação prática para a equipa em cada ferramenta adoptada",
      "Acompanhamento de novas funcionalidades e actualizações relevantes",
      "Relatório mensal de utilização e retorno gerado",
    ],
    packs: [
      { name: "Fee de gestão", hours: "Claude, ChatGPT, Gemini, GitHub Copilot, Devin, NotebookLM, Grok, Perplexity…", price: "150 €/mês", ideal: "Gestão completa de uma ou mais ferramentas de IA enterprise" },
    ],
    notes: ["Desconto de 10% em plano anual", "O custo das licenças das ferramentas é facturado ao custo real — sem markup"],
  },
};

type Slug = keyof typeof produtoData;

const ProdutosDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const produto = slug ? produtoData[slug as Slug] : null;

  if (!produto) return <Navigate to="/produtos" replace />;

  const IconComponent = produto.icon;

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
          <Link to="/produtos" className="hover:text-foreground transition-colors">Produtos</Link>
          <span>/</span>
          <span className="text-foreground">{produto.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal" />
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">{produto.badge}</span>
          </div>
          <div className={`${produto.color} mb-4`}>
            <IconComponent size={36} />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">{produto.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{produto.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-2xl">{produto.description}</p>

        {/* Packs */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-5">Planos disponíveis</h2>
          <div className="space-y-3">
            {produto.packs.map((pack, idx) => (
              <div key={idx} className="rounded-2xl border border-devin-border bg-devin-surface/50 p-5">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-semibold text-foreground">{pack.name}</h3>
                  <span className="text-devin-teal font-bold whitespace-nowrap">{pack.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{pack.hours}</p>
                <p className="text-xs text-muted-foreground/60 mt-1 italic">{pack.ideal}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1">
            {produto.notes.map((note, idx) => (
              <p key={idx} className="text-xs text-muted-foreground/60 italic">· {note}</p>
            ))}
          </div>
        </div>

        {/* Includes */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-5">O que está incluído</h2>
          <ul className="space-y-3">
            {produto.includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle size={16} className="text-devin-teal mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className="relative rounded-2xl border border-devin-border bg-devin-card overflow-hidden p-8 text-center mb-10"
          style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />
          <h3 className="text-xl font-bold text-foreground mb-2">Pronto para começar?</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-sm mx-auto">
            Contacte-nos para uma proposta adaptada à dimensão e necessidades da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:geral@transparentreasons.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-devin-teal text-background text-sm font-semibold hover:bg-devin-teal/90 transition-colors"
            >
              geral@transparentreasons.com
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
          to="/produtos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors"
        >
          <ArrowLeft size={14} />
          Ver todos os produtos
        </Link>
      </div>
    </PageLayout>
  );
};

export default ProdutosDetailPage;
