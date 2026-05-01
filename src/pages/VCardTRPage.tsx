import { Phone, Mail, Building2, Globe, Linkedin, Instagram, Facebook, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const contact = {
  name: "Transparent Reasons",
  title: "Consultoria · Inovação · Formação",
  phone: "+351 930 679 484",
  phoneTel: "+351930679484",
  email: "geral@transparentreasons.com",
  website: "https://transparentreasons.com/",
  websiteLabel: "transparentreasons.com",
  linkedin: "https://www.linkedin.com/company/transparent-reasons/",
  instagram: "https://www.instagram.com/transparentreasons/",
  facebook: "https://www.facebook.com/transparentreasons",
  vcf: "/transparent_reasons.vcf",
};

const ContactRow = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex items-center gap-4 py-4 border-b border-devin-border last:border-0">
    <div className="w-9 h-9 shrink-0 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-devin-teal">
      <Icon size={16} />
    </div>
    <div className="min-w-0">
      {href ? (
        <a href={href} className="text-sm font-medium text-foreground hover:text-devin-teal transition-colors truncate block">
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      )}
      <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
    </div>
  </div>
);

const VCardTRPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 gap-4">
      <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-devin-border shadow-2xl shadow-black/40">

        {/* Header */}
        <div
          className="px-6 pt-10 pb-8 text-center"
          style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.15) 0%, hsl(222 28% 12%) 70%)" }}
        >
          <div className="flex justify-center mb-5">
            <div className="w-20 h-20 rounded-2xl bg-devin-surface border border-devin-border/60 flex items-center justify-center overflow-hidden shadow-lg">
              <img src="/favicon.svg" alt="Transparent Reasons" className="w-12 h-12" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-1">{contact.name}</h1>
          <p className="text-sm text-devin-teal font-medium tracking-wide mb-6">{contact.title}</p>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${contact.phoneTel}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-devin-surface border border-devin-border text-sm font-medium text-foreground hover:border-devin-teal hover:text-devin-teal transition-all"
            >
              <Phone size={15} />
              Ligar
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-devin-teal/10 border border-devin-teal/40 text-sm font-medium text-devin-teal hover:bg-devin-teal/20 transition-all"
            >
              <Mail size={15} />
              Email
            </a>
          </div>
        </div>

        {/* Contact rows */}
        <div className="bg-devin-card px-6">
          <ContactRow icon={Phone} label="Telefone" value={contact.phone} href={`tel:${contact.phoneTel}`} />
          <ContactRow icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactRow icon={Building2} label="Empresa" value={contact.name} />
          <ContactRow icon={Globe} label="Website" value={contact.websiteLabel} href={contact.website} />
        </div>

        {/* Social links */}
        <div className="bg-devin-card px-6 py-4 flex justify-center gap-3 border-t border-devin-border">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="w-10 h-10 shrink-0 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-muted-foreground hover:text-devin-teal hover:border-devin-teal transition-all">
            <Linkedin size={16} />
          </a>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="w-10 h-10 shrink-0 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-muted-foreground hover:text-devin-teal hover:border-devin-teal transition-all">
            <Instagram size={16} />
          </a>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="w-10 h-10 shrink-0 rounded-full bg-devin-surface border border-devin-border flex items-center justify-center text-muted-foreground hover:text-devin-teal hover:border-devin-teal transition-all">
            <Facebook size={16} />
          </a>
        </div>

        {/* Download button */}
        <div className="bg-devin-card px-6 pb-8 pt-4">
          <a
            href={contact.vcf}
            download="transparent_reasons.vcf"
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-devin-teal text-background text-sm font-semibold hover:bg-devin-teal/90 transition-colors"
          >
            <Download size={16} />
            Guardar Contacto
          </a>
        </div>
      </div>

      <Link
        to="/"
        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-devin-teal transition-colors"
      >
        <ArrowLeft size={12} />
        transparentreasons.com
      </Link>
    </div>
  );
};

export default VCardTRPage;
