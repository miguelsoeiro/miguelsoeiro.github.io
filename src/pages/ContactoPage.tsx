import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Mail, Phone, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const ContactoPage = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    colaboradores: "",
    desafio: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Pedido de Diagnóstico Gratuito — Transparent Reasons");
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nEmpresa: ${form.empresa}\nNº Colaboradores: ${form.colaboradores}\nPrincipal Desafio: ${form.desafio}\n\nMensagem:\n${form.mensagem}`
    );
    window.location.href = `mailto:geral@transparentreasons.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageLayout>
      <Helmet>
        <title>Contacto — Diagnóstico Gratuito para a Sua Empresa | Transparent Reasons</title>
        <meta name="description" content="Fale connosco e peça um diagnóstico gratuito para a sua empresa. Sem compromisso. Respondemos em 24 horas úteis." />
        <link rel="canonical" href="https://www.transparentreasons.com/contacto" />
        <meta property="og:title" content="Contacto — Diagnóstico Gratuito | Transparent Reasons" />
        <meta property="og:description" content="Fale connosco e peça um diagnóstico gratuito para a sua empresa. Sem compromisso. Respondemos em 24 horas úteis." />
        <meta property="og:url" content="https://www.transparentreasons.com/contacto" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.transparentreasons.com/" }, { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://www.transparentreasons.com/contacto" }] })}</script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={14} />
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Contacto</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Diagnóstico Gratuito
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fale Connosco —<br className="hidden lg:block" />
            <span className="text-teal">Diagnóstico Gratuito</span> para a Sua Empresa
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Uma conversa sem compromisso para perceber onde a sua empresa pode ganhar eficiência.
            Preencha o formulário e entraremos em contacto em 24 horas úteis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-devin-border bg-devin-card p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="O seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-devin-surface border border-devin-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-devin-teal/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-2">
                    Email <span className="text-devin-teal">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@empresa.pt"
                    className="w-full px-4 py-3 rounded-xl bg-devin-surface border border-devin-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-devin-teal/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  className="w-full px-4 py-3 rounded-xl bg-devin-surface border border-devin-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-devin-teal/60 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-2">
                    Nº de Colaboradores
                  </label>
                  <select
                    name="colaboradores"
                    value={form.colaboradores}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-devin-surface border border-devin-border text-sm focus:outline-none focus:border-devin-teal/60 transition-colors appearance-none"
                    style={{ color: form.colaboradores ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground) / 0.5)" }}
                  >
                    <option value="" disabled>Seleccionar</option>
                    <option value="1-5">1 – 5</option>
                    <option value="6-20">6 – 20</option>
                    <option value="21-50">21 – 50</option>
                    <option value="+50">Mais de 50</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-2">
                    Principal Desafio
                  </label>
                  <select
                    name="desafio"
                    value={form.desafio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-devin-surface border border-devin-border text-sm focus:outline-none focus:border-devin-teal/60 transition-colors appearance-none"
                    style={{ color: form.desafio ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground) / 0.5)" }}
                  >
                    <option value="" disabled>Seleccionar</option>
                    <option value="Processos">Processos internos</option>
                    <option value="Tecnologia">Tecnologia (Microsoft 365 / Atlassian)</option>
                    <option value="IA">Adopção de IA</option>
                    <option value="Formação">Formação de equipa</option>
                    <option value="Não sei ainda">Não sei ainda</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-2">
                  Mensagem <span className="text-muted-foreground/40">(opcional)</span>
                </label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva brevemente a situação da sua empresa ou a área onde pretende melhorias..."
                  className="w-full px-4 py-3 rounded-xl bg-devin-surface border border-devin-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-devin-teal/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-full bg-devin-teal text-background font-semibold text-sm hover:bg-devin-teal/90 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                Pedir Diagnóstico Gratuito →
              </button>

              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Sem compromisso. Respondemos em 24 horas úteis.<br />
                Os seus dados não são partilhados com terceiros.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-devin-border bg-devin-surface/50 p-6">
              <h3 className="font-bold text-foreground mb-4 text-sm">Contacto directo</h3>
              <div className="space-y-3">
                <a
                  href="mailto:geral@transparentreasons.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-devin-teal transition-colors"
                >
                  <Mail size={15} className="text-devin-teal flex-shrink-0" />
                  geral@transparentreasons.com
                </a>
                <a
                  href="tel:+351930679484"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-devin-teal transition-colors"
                >
                  <Phone size={15} className="text-devin-teal flex-shrink-0" />
                  +351 930 679 484
                </a>
                <a
                  href="https://wa.me/351930679484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={15} className="text-green-400 flex-shrink-0" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-devin-border bg-devin-surface/50 p-6">
              <h3 className="font-bold text-foreground mb-3 text-sm">O que acontece depois?</h3>
              <ol className="space-y-3">
                {[
                  "Recebemos o seu pedido e respondemos em 24h úteis",
                  "Marcamos uma chamada de 30 minutos sem compromisso",
                  "Apresentamos as nossas observações e recomendações iniciais",
                  "Decide se quer avançar — sem qualquer pressão",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-devin-teal/10 border border-devin-teal/30 flex items-center justify-center text-devin-teal font-bold text-xs mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div
              className="rounded-2xl border border-devin-border overflow-hidden p-6 text-center"
              style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.06) 0%, hsl(222 25% 12%) 70%)" }}
            >
              <p className="text-xs text-muted-foreground mb-1">Disponibilidade</p>
              <p className="text-sm font-semibold text-foreground">
                Diagnósticos gratuitos limitados por mês
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-devin-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
                A aceitar pedidos
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactoPage;
