import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "Consultoria de Processos", slug: "consultoria-processos" },
  { label: "Tecnologia & Ferramentas", slug: "tecnologia-ferramentas" },
  { label: "Consultoria de IA", slug: "consultoria-ia" },
  { label: "Formação", slug: "formacao" },
];

const legalLinks = [
  { label: "Política de Privacidade", slug: "politica-privacidade" },
  { label: "Termos de Serviço", slug: "termos-servico" },
  { label: "RGPD Compliance", slug: "rgpd" },
  { label: "Cookies", slug: "cookies" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">

          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Transparent Reasons</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consultoria, inovação e formação para PMEs portuguesas. Diagnosticamos, planeamos, implementamos e formamos — para que a sua empresa cresça sem fricção.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-slate-400 hover:text-devin-teal hover:underline transition-colors text-sm cursor-pointer">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/#porque" className="text-slate-400 hover:text-devin-teal hover:underline transition-colors text-sm cursor-pointer">
                  Porquê Nós
                </Link>
              </li>
              <li>
                <Link to="/publicacoes" className="text-slate-400 hover:text-devin-teal hover:underline transition-colors text-sm cursor-pointer">
                  Projectos
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/produtos"
                  className="text-slate-400 hover:text-devin-teal hover:underline transition-colors text-sm cursor-pointer"
                >
                  Produtos & Ferramentas
                </Link>
              </li>
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/servicos/${s.slug}`}
                    className="text-slate-400 hover:text-devin-teal hover:underline transition-colors text-sm cursor-pointer"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/legal/${l.slug}`}
                    className="text-slate-400 hover:text-devin-teal hover:underline transition-colors text-sm cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contacto</h3>
            <a
              href="mailto:geral@transparentreasons.com"
              className="text-slate-400 hover:text-devin-teal transition-colors text-sm block mb-6"
            >
              geral@transparentreasons.com
            </a>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all">
                <Github size={18} />
              </a>
              <a href="mailto:geral@transparentreasons.com" aria-label="Email" className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="text-devin-teal font-semibold">Transparent Reasons</span>. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-4 md:mt-0">
            Consultoria · Inovação · Formação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
