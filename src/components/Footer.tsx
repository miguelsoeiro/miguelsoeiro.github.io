import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "Transparent Reasons";

  return (
    <footer className="bg-slate-950 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Sobre</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              O seu parceiroos de IT para a era da IA. Transformamos organizações através de tecnologia inteligente e inovação.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-devin-teal transition-colors text-sm"
                >
                  Diagnóstico de Eficiência
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-devin-teal transition-colors text-sm"
                >
                  Arquitetura de Soluções
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-devin-teal transition-colors text-sm"
                >
                  Implementação & Dev
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-devin-teal transition-colors text-sm"
                >
                  Capacitação & Formação
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-devin-teal transition-colors text-sm"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-devin-teal transition-colors text-sm"
                >
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-devin-teal transition-colors text-sm"
                >
                  RGPD Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-devin-teal transition-colors text-sm"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Conecte-se</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-slate-400 hover:text-devin-teal hover:border-devin-teal transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="text-devin-teal font-semibold">{companyName}</span>. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-4 md:mt-0">
            Transformando ideias em inteligência
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
