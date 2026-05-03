import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzlzapv";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-devin-surface border border-devin-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-devin-teal/60 transition-colors";

const ContactoPage = () => {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <PageLayout>
      <Helmet>
        <title>Contacto — Transparent Reasons</title>
        <meta name="description" content="Entre em contacto com a Transparent Reasons. Formulário de contacto directo ou por email e telefone." />
        <link rel="canonical" href="https://www.transparentreasons.com/contacto" />
        <meta property="og:title" content="Contacto — Transparent Reasons" />
        <meta property="og:description" content="Entre em contacto com a Transparent Reasons. Formulário de contacto directo ou por email e telefone." />
        <meta property="og:url" content="https://www.transparentreasons.com/contacto" />
        <meta property="og:image" content="https://www.transparentreasons.com/apple-touch-icon.png" />
        <meta property="og:locale" content="pt_PT" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contacto — Transparent Reasons" />
        <meta name="twitter:description" content="Entre em contacto com a Transparent Reasons." />
        <meta name="twitter:image" content="https://www.transparentreasons.com/apple-touch-icon.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "url": "https://www.transparentreasons.com/contacto",
          "name": "Contacto — Transparent Reasons",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://www.transparentreasons.com/#organization",
            "name": "Transparent Reasons",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+351930679484",
              "email": "geral@transparentreasons.com",
              "contactType": "customer service",
              "availableLanguage": ["Portuguese", "English"],
              "areaServed": "PT"
            }]
          }
        })}</script>
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
              Fale Connosco
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Envie-nos uma<br className="hidden lg:block" />
            <span className="text-teal">mensagem</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Responderemos em 24 horas úteis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="rounded-2xl border border-devin-teal/40 bg-devin-card p-10 flex flex-col items-center text-center gap-4">
                <CheckCircle size={40} className="text-devin-teal" />
                <h2 className="text-xl font-bold text-foreground">Mensagem enviada!</h2>
                <p className="text-sm text-muted-foreground">
                  Recebemos a sua mensagem e responderemos em 24 horas úteis.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-5 py-2.5 rounded-full border border-devin-border text-sm text-muted-foreground hover:border-devin-teal/50 hover:text-devin-teal transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-devin-border bg-devin-card p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-foreground/70 mb-2">
                      Nome <span className="text-devin-teal">*</span>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                      placeholder="O seu nome completo"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/70 mb-2">
                      Empresa <span className="text-devin-teal">*</span>
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      required
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/70 mb-2">
                      Telefone <span className="text-muted-foreground/40">(opcional)</span>
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="+351 900 000 000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground/70 mb-2">
                    Mensagem <span className="text-devin-teal">*</span>
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Como podemos ajudar?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs p-3 rounded-xl bg-red-400/10 border border-red-400/20">
                    <AlertCircle size={14} className="flex-shrink-0" />
                    Erro ao enviar. Tente novamente ou contacte-nos directamente em{" "}
                    <a href="mailto:geral@transparentreasons.com" className="underline">
                      geral@transparentreasons.com
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-3.5 rounded-full bg-devin-teal text-background font-semibold text-sm hover:bg-devin-teal/90 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "loading" ? "A enviar…" : "Enviar mensagem →"}
                </button>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Os seus dados não são partilhados com terceiros.
                </p>
              </form>
            )}
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
              </div>
            </div>

            <div className="rounded-2xl border border-devin-border bg-devin-surface/50 p-6">
              <h3 className="font-bold text-foreground mb-3 text-sm">O que acontece depois?</h3>
              <ol className="space-y-3">
                {[
                  "Recebemos a sua mensagem e respondemos em 24h úteis",
                  "Marcamos uma chamada de 30 minutos sem compromisso",
                  "Apresentamos observações e recomendações iniciais",
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactoPage;
