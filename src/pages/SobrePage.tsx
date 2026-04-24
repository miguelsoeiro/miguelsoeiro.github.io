import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, GraduationCap, Award, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
// TODO: substituir pelo ficheiro de imagem real do fundador
import miguelPhoto from "@/assets/miguel-soeiro.jpeg";

const formacao = {
  grau: "MSc em Engenharia Informática e de Computadores",
  instituicao: "Instituto Superior Técnico",
  periodo: "2017 – 2020",
  areas: ["Big Data", "Engenharia de Software", "Sistemas Distribuídos", "Inteligência Artificial"],
};

const certificacoes = [
  {
    titulo: "Agile Project Management",
    emissor: "Google",
    ano: "2024",
    cor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    sigla: "G",
  },
  {
    titulo: "SI Architect Certification",
    emissor: "MongoDB",
    ano: "2024",
    cor: "text-green-400",
    bgColor: "bg-green-400/10",
    sigla: "M",
  },
  {
    titulo: "Project Management Professional Certificate",
    emissor: "Google",
    ano: "2024",
    cor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    sigla: "G",
  },
];

const projects = [
  {
    sector: "Distribuição Farmacêutica",
    name: "Nivelfarma",
    location: "Sintra, Lisboa",
    description: "22 aplicações desenvolvidas de raiz — web, iOS, Android e robótica farmacêutica. Construído sem sistemas prévios.",
    slug: "nivelfarma",
    initials: "NF",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    sector: "Retalho Farmacêutico",
    name: "Farmácias Mais Saúde",
    location: "Funchal, Madeira",
    description: "Plataforma de gestão de clientes e fidelização (CRM) construída de raiz, sem solução prévia.",
    slug: "farmacias-mais-saude",
    initials: "FM",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    sector: "MedTech · Realidade Virtual",
    name: "Immersive Lives",
    location: "Óbidos",
    description: "Sistema VR para reabilitação neurocognitiva com IA integrada. Interface dual para pacientes e terapeutas.",
    slug: "immersive-lives",
    initials: "IL",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
];

const SobrePage = () => {
  useEffect(() => {
    document.title = "Fundador | Transparent Reasons";
    return () => { document.title = "Transparent Reasons — Consultoria · Inovação · Formação"; };
  }, []);

  return (
    <PageLayout>
      <div className="container max-w-4xl mx-auto px-6 pb-24">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={14} />Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Fundador</span>
        </div>

        {/* Hero badge */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground font-medium tracking-widest uppercase">Quem Somos</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            O fundador da <span className="text-devin-teal">Transparent Reasons</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mais de 9 anos a construir soluções reais para empresas reais.
          </p>
        </div>

        {/* Main — two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20 items-start">

          {/* Left — Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            {/* TODO: substituir pelo ficheiro de imagem real do fundador */}
            <div className="relative w-64 lg:w-full max-w-xs">
              <div className="absolute inset-0 rounded-2xl ring-2 ring-devin-teal/40 pointer-events-none z-10" />
              <img
                src={miguelPhoto}
                alt="Miguel Pires Soeiro — Fundador da Transparent Reasons"
                className="w-full rounded-2xl object-cover object-center shadow-lg"
              />
            </div>
          </div>

          {/* Right — Bio */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-1">Miguel Pires Soeiro</h2>
              <p className="text-sm font-medium text-devin-teal tracking-wide mb-3">
                Fundador · Consultoria · Dados & IA
              </p>
              <a
                href="/miguel_soeiro.vcf"
                download="miguel_soeiro.vcf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors hover:text-foreground/60"
                style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "12px", color: "#8A8A9A", border: "1px solid #2A2A3E", borderRadius: "6px", background: "transparent" }}
              >
                ⬇ Guardar contacto
              </a>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Com mais de 9 anos de experiência em tecnologia e gestão, trabalhei em projectos de grande escala nos sectores bancário, segurador, saúde e retalho — sempre na intersecção entre estratégia de negócio e execução técnica.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              O meu percurso começou no desenvolvimento de software, o que me deu uma base técnica sólida em aplicações web, mobile e sistemas distribuídos. Com o tempo, evoluí para gestão de projectos e liderança de equipas multidisciplinares, gerindo iniciativas complexas de ponta a ponta.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              A Transparent Reasons nasceu dessa experiência acumulada — para ajudar PMEs portuguesas a trabalhar melhor: com processos mais claros, tecnologia bem adoptada e equipas preparadas para crescer.
            </p>
          </div>
        </div>

        {/* Formação */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Formação</h2>
          <div className="rounded-2xl border border-devin-border bg-devin-surface/50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-devin-card border border-devin-border flex items-center justify-center">
                <GraduationCap size={20} className="text-devin-teal" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-base mb-0.5">{formacao.grau}</h3>
                <p className="text-sm text-devin-teal mb-1">{formacao.instituicao}</p>
                <p className="text-xs text-muted-foreground mb-3">{formacao.periodo}</p>
                <div className="flex flex-wrap gap-2">
                  {formacao.areas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-devin-card border border-devin-border text-devin-teal"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificações */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Certificações</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certificacoes.map((cert, i) => (
              <div
                key={i}
                className="rounded-2xl border border-devin-border bg-devin-surface/50 p-5 hover:border-devin-teal/40 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${cert.bgColor} border border-devin-border flex items-center justify-center mb-4`}>
                  <span className={`text-sm font-bold ${cert.cor}`}>{cert.sigla}</span>
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1 leading-snug">{cert.titulo}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{cert.emissor}</span>
                  <span className="text-xs text-devin-teal font-medium">{cert.ano}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projectos de Referência */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Projectos de Referência</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {projects.map((p) => (
              <div
                key={p.slug}
                className="rounded-2xl border border-devin-border bg-devin-surface/50 p-5 hover:border-devin-teal/40 transition-all flex flex-col"
              >
                <div className={`w-10 h-10 rounded-xl ${p.bgColor} border border-devin-border flex items-center justify-center mb-4 flex-shrink-0`}>
                  <span className={`text-xs font-bold ${p.color}`}>{p.initials}</span>
                </div>
                <p className={`text-xs font-medium ${p.color} mb-1`}>{p.sector}</p>
                <h3 className="font-bold text-foreground text-sm mb-0.5 leading-snug">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.location}</p>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Link
              to="/publicacoes"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors"
            >
              Ver casos de estudo completos
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div
          className="relative rounded-3xl border border-devin-border bg-devin-card overflow-hidden p-8 text-center"
          style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Quer conhecer melhor o trabalho da Transparent Reasons?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Veja os projectos que desenvolvemos ou agende um diagnóstico gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/publicacoes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-devin-border text-foreground font-medium text-sm hover:border-devin-teal/40 transition-colors"
            >
              Ver Projectos
              <ArrowRight size={14} />
            </Link>
            <a
              href="mailto:geral@transparentreasons.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-devin-teal text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Agendar Diagnóstico
            </a>
            <a
              href="https://wa.me/351930679484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-devin-border text-foreground font-medium text-sm hover:border-green-400/50 hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default SobrePage;
