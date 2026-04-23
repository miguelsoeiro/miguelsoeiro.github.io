import { Linkedin, Github, Mail, Phone } from "lucide-react";
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
              className="text-slate-400 hover:text-devin-teal transition-colors text-sm block mb-2"
            >
              geral@transparentreasons.com
            </a>
            <a
              href="tel:+351930679484"
              className="text-slate-400 hover:text-devin-teal transition-colors text-sm block mb-6"
            >
              +351 930 679 484
            </a>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all">
                <Github size={18} />
              </a>
              <a href="mailto:geral@transparentreasons.com" aria-label="Email" className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all">
                <Mail size={18} />
              </a>
              <a href="tel:+351930679484" aria-label="Telefone" className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all">
                <Phone size={18} />
              </a>
              <a href="https://wa.me/351930679484" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400/50 transition-all">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
