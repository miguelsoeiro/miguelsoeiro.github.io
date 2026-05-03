import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é a Transparent Reasons?",
    a: "A Transparent Reasons é uma consultoria portuguesa especializada em ajudar PMEs a trabalhar melhor. Actuamos em três áreas complementares: optimização de processos internos, implementação e gestão de tecnologia (Microsoft 365, Atlassian, ferramentas de IA), e formação de equipas. Trabalhamos com empresas de 5 a 100 colaboradores que querem crescer sem fricção.",
  },
  {
    q: "Qual é o custo da consultoria de processos para PMEs?",
    a: "A consultoria de processos funciona em regime de avença mensal com três opções: Starter (8h/mês a 600 €/mês), Growth (16h/mês a 1.100 €/mês) e Scale (32h/mês a 2.000 €/mês). O compromisso mínimo é de 3 meses. Horas adicionais custam 80 €/h. Todas as avenças incluem mapeamento de processos, relatório mensal de progresso e acompanhamento contínuo.",
  },
  {
    q: "Como a Transparent Reasons ajuda empresas a adoptar ferramentas de IA?",
    a: "Primeiro diagnosticamos as necessidades reais da empresa — sem buzzwords. Depois seleccionamos a ferramenta mais adequada (Claude, ChatGPT, Gemini, Copilot, Devin, entre outras), gerimos as licenças enterprise ao preço do fabricante sem markup, e formamos a equipa para usar IA de forma prática e segura. O fee de gestão é de 200 €/mês.",
  },
  {
    q: "A Transparent Reasons implementa Microsoft 365 e Atlassian?",
    a: "Sim. Gerimos Microsoft 365 (Teams, SharePoint, OneDrive, Outlook) e Atlassian (Jira, Confluence, Jira Service Management) por um fee fixo de 150 €/mês. As subscrições são facturadas ao preço real do fabricante, sem qualquer markup. O fee cobre implementação, configuração, suporte de 1.º nível e optimização contínua.",
  },
  {
    q: "Que tipos de formação empresarial oferece a Transparent Reasons?",
    a: "Sessões práticas presenciais ou remotas para equipas até 12 participantes. Os temas incluem Microsoft 365, Atlassian (Jira e Confluence), ferramentas de IA, e metodologias ágeis. Uma sessão de 3h custa 450 €; uma sessão de 6h custa 800 €. Um pack de 5 sessões sai a 3.500 € (desconto ~12%). Todos os formatos incluem materiais e certificado de participação.",
  },
  {
    q: "A Transparent Reasons oferece diagnóstico gratuito?",
    a: "Sim. Oferecemos um diagnóstico inicial gratuito e sem compromisso — uma conversa para perceber onde a sua empresa pode ganhar eficiência. A disponibilidade é limitada a poucos clientes por mês. Para agendar, basta enviar um email para geral@transparentreasons.com ou preencher o formulário em transparentreasons.com/contacto.",
  },
  {
    q: "Que tipo de empresas são clientes da Transparent Reasons?",
    a: "Trabalhamos principalmente com PMEs portuguesas com 5 a 100 colaboradores nos sectores da saúde, retalho, distribuição, serviços profissionais e tecnologia. Clientes de referência incluem a Nivelfarma (distribuição farmacêutica — 22 aplicações construídas de raiz), a Farmácia Sália (CRM e fidelização) e a Immersive Lives (MedTech / Realidade Virtual).",
  },
  {
    q: "Qual é a metodologia da Transparent Reasons?",
    a: "Trabalhamos em 4 etapas: Diagnosticar (mapeamos processos e identificamos ineficiências), Planear (desenhamos o plano com tecnologias e timings adequados), Implementar (executamos com acompanhamento contínuo e relatórios mensais), e Formar (capacitamos a equipa para tirar o máximo partido). Este ciclo garante resultados mensuráveis e sustentáveis.",
  },
];

export const FAQSection = () => (
  <div className="mt-20 pt-20 border-t border-devin-border">
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-devin-surface border border-devin-border text-sm mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-devin-teal animate-pulse" />
        <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
          Perguntas Frequentes
        </span>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
        Perguntas <span className="text-teal">Frequentes</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-sm">
        As perguntas que nos fazem com mais frequência — com respostas directas.
      </p>
    </div>

    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="rounded-xl border border-devin-border bg-devin-card overflow-hidden data-[state=open]:border-devin-teal/40"
        >
          <AccordionTrigger className="px-6 py-4 text-sm font-semibold text-foreground hover:text-devin-teal transition-colors hover:no-underline text-left">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5">
            <div className="border-l-2 border-devin-teal/60 pl-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default FAQSection;
