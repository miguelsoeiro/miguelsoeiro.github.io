import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Transparent Reasons</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consultoria, inovação e formação para PMEs portuguesas. Diagnosticamos, planeamos, implementamos e formamos — para que a sua empresa cresça sem fricção.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              {[
                "Consultoria de Processos",
                "Tecnologia & Ferramentas",
                "Consultoria de IA",
                "Formação",
              ].map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-slate-400 hover:text-devin-teal transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {[
                "Política de Privacidade",
                "Termos de Serviço",
                "RGPD Compliance",
                "Cookies",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-400 hover:text-devin-teal transition-colors text-sm">
                    {l}
                  </a>
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
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:geral@transparentreasons.com"
                className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all"
                aria-label="Email"
              >
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
