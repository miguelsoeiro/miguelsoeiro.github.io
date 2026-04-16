import { useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const UPDATED = "Abril 2025";

const legalData = {
  "politica-privacidade": {
    title: "Política de Privacidade",
    sections: [
      {
        heading: "Responsável pelo Tratamento",
        content:
          "A Transparent Reasons é responsável pelo tratamento dos dados pessoais recolhidos através deste website e no âmbito da prestação de serviços. Contacto: geral@transparentreasons.com",
      },
      {
        heading: "Dados Recolhidos",
        content:
          "Recolhemos apenas os dados que nos fornece voluntariamente: nome, endereço de email e informação partilhada no âmbito de pedidos de contacto ou na execução dos serviços contratados. Não recolhemos dados sensíveis nem utilizamos tracking publicitário.",
      },
      {
        heading: "Finalidade e Base Legal",
        content:
          "Os seus dados são utilizados para: (1) responder a pedidos de informação e propostas — base legal: consentimento; (2) execução dos contratos de prestação de serviços — base legal: execução de contrato; (3) cumprimento de obrigações legais e contabilísticas — base legal: obrigação legal.",
      },
      {
        heading: "Conservação dos Dados",
        content:
          "Os dados são conservados pelo período necessário à finalidade para que foram recolhidos. Dados de clientes são mantidos por 10 anos após término da relação contratual para cumprimento de obrigações fiscais e contabilísticas, nos termos da legislação portuguesa.",
      },
      {
        heading: "Partilha com Terceiros",
        content:
          "Não vendemos nem partilhamos dados pessoais com terceiros para fins comerciais. Podemos recorrer a subcontratantes (ex.: fornecedores de infraestrutura cloud) que actuam como subprocessadores nos termos do RGPD, com garantias contratuais adequadas.",
      },
      {
        heading: "Os Seus Direitos",
        content:
          "Ao abrigo do RGPD, tem direito a: acesso aos seus dados, rectificação, eliminação ('direito ao esquecimento'), portabilidade, oposição ao tratamento e limitação do tratamento. Para exercer qualquer destes direitos, contacte-nos em geral@transparentreasons.com. Tem também o direito de apresentar reclamação à Comissão Nacional de Protecção de Dados (CNPD).",
      },
      {
        heading: "Segurança",
        content:
          "Adoptamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.",
      },
      {
        heading: "Contacto",
        content:
          "Para qualquer questão relativa à privacidade dos seus dados, contacte: geral@transparentreasons.com",
      },
    ],
  },
  "termos-servico": {
    title: "Termos de Serviço",
    sections: [
      {
        heading: "1. Identificação das Partes",
        content:
          "Os presentes Termos regulam a prestação de serviços pela Transparent Reasons (doravante 'Prestador') ao cliente (doravante 'Cliente'). Ao contratar qualquer serviço, o Cliente aceita estes Termos na íntegra.",
      },
      {
        heading: "2. Descrição dos Serviços",
        content:
          "A Transparent Reasons presta serviços de consultoria de processos, implementação de tecnologia (Microsoft 365, Atlassian), consultoria de IA e formação. O âmbito concreto de cada prestação é definido em proposta comercial ou contrato individual assinado pelas partes.",
      },
      {
        heading: "3. Condições de Pagamento",
        content:
          "Os serviços de avença são faturados mensalmente, com pagamento a 15 dias após emissão de fatura. Os serviços de formação são faturados na data da sessão, com pagamento a 8 dias. Em caso de atraso superior a 30 dias, aplicam-se juros de mora legais. Os preços indicados não incluem IVA à taxa legal em vigor.",
      },
      {
        heading: "4. Prazo e Rescisão",
        content:
          "Os serviços de avença têm prazo mínimo de 3 meses, renovável automaticamente. A rescisão deve ser comunicada com 30 dias de antecedência. Qualquer das partes pode rescindir em caso de incumprimento grave, com aviso prévio de 15 dias.",
      },
      {
        heading: "5. Confidencialidade",
        content:
          "A Transparent Reasons compromete-se a manter confidenciais todas as informações do Cliente a que tenha acesso no âmbito da prestação de serviços. Esta obrigação mantém-se por 3 anos após o término da relação contratual.",
      },
      {
        heading: "6. Propriedade Intelectual",
        content:
          "Os entregáveis produzidos especificamente para o Cliente no âmbito de um contrato são propriedade do Cliente após pagamento integral. Metodologias, frameworks e ferramentas próprias da Transparent Reasons continuam a ser sua propriedade.",
      },
      {
        heading: "7. Limitação de Responsabilidade",
        content:
          "A responsabilidade da Transparent Reasons está limitada ao valor dos honorários pagos nos 3 meses anteriores ao evento que originou o dano. Não são assumidas responsabilidades por danos indirectos, lucros cessantes ou danos consequenciais.",
      },
      {
        heading: "8. Lei Aplicável e Foro",
        content:
          "Os presentes Termos são regidos pela lei portuguesa. Para resolução de litígios, as partes elegem o foro da comarca de Lisboa, com expressa renúncia a qualquer outro.",
      },
    ],
  },
  rgpd: {
    title: "RGPD Compliance",
    sections: [
      {
        heading: "O Nosso Compromisso",
        content:
          "A Transparent Reasons cumpre integralmente o Regulamento Geral sobre a Protecção de Dados (RGPD — Regulamento UE 2016/679) e a legislação portuguesa de protecção de dados. A transparência no tratamento de dados é um valor central da nossa empresa.",
      },
      {
        heading: "Actividades de Tratamento",
        content:
          "Tratamos dados pessoais de clientes, prospects e colaboradores para as seguintes finalidades: prestação de serviços contratados, gestão comercial, faturação, cumprimento de obrigações legais e comunicações relacionadas com os serviços.",
      },
      {
        heading: "Base Legal para o Tratamento",
        content:
          "Tratamos dados com base em: (1) consentimento explícito do titular; (2) execução de contrato do qual o titular é parte; (3) cumprimento de obrigações legais; (4) interesses legítimos do responsável pelo tratamento, quando não prevalecem os interesses do titular.",
      },
      {
        heading: "Transferências Internacionais",
        content:
          "Sempre que recorremos a ferramentas ou serviços de terceiros que impliquem transferência de dados para fora do Espaço Económico Europeu, garantimos que existem salvaguardas adequadas, como Cláusulas Contratuais Padrão aprovadas pela Comissão Europeia.",
      },
      {
        heading: "Direitos dos Titulares",
        content:
          "Reconhecemos e facilitamos o exercício dos seguintes direitos: acesso, rectificação, eliminação, portabilidade, oposição, limitação do tratamento e direito a não ser sujeito a decisões automatizadas. Para exercer os seus direitos, contacte: geral@transparentreasons.com",
      },
      {
        heading: "Incidentes de Segurança",
        content:
          "Em caso de violação de dados que represente risco para os titulares, notificamos a CNPD no prazo de 72 horas e os titulares afectados sem demora injustificada, nos termos do artigo 33.º e 34.º do RGPD.",
      },
      {
        heading: "Autoridade de Controlo",
        content:
          "A autoridade de controlo competente em Portugal é a Comissão Nacional de Protecção de Dados (CNPD), www.cnpd.pt, para a qual pode apresentar reclamação caso considere que o tratamento dos seus dados viola o RGPD.",
      },
    ],
  },
  cookies: {
    title: "Política de Cookies",
    sections: [
      {
        heading: "O Que São Cookies",
        content:
          "Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Permitem que o site 'lembre' as suas preferências e melhore a sua experiência de navegação.",
      },
      {
        heading: "Cookies que Utilizamos",
        content:
          "Este website utiliza apenas cookies estritamente necessários para o funcionamento técnico da plataforma (cookies de sessão). Não utilizamos cookies de rastreamento publicitário, cookies de terceiros para fins de marketing, nem técnicas de fingerprinting.",
      },
      {
        heading: "Cookies de Sessão",
        content:
          "Os cookies de sessão são temporários e eliminados automaticamente quando fecha o browser. São utilizados para manter a coerência da navegação durante a sua visita ao website.",
      },
      {
        heading: "Cookies de Terceiros",
        content:
          "Não integramos actualmente serviços de terceiros que definam cookies no seu dispositivo (como Google Analytics, Facebook Pixel ou similar). Se tal vier a suceder, esta política será actualizada e será solicitado o seu consentimento.",
      },
      {
        heading: "Como Gerir Cookies",
        content:
          "Pode gerir ou bloquear cookies através das definições do seu browser. Note que bloquear cookies estritamente necessários pode afectar o funcionamento do website. Consulte a ajuda do seu browser para mais informações: Chrome, Firefox, Safari, Edge.",
      },
      {
        heading: "Actualizações a Esta Política",
        content:
          "Esta política de cookies pode ser actualizada periodicamente. Recomendamos que a consulte regularmente. A data da última actualização está indicada no início da página.",
      },
    ],
  },
};

type LegalSlug = keyof typeof legalData;

const LegalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = legalData[slug as LegalSlug];

  if (!page) return <Navigate to="/" replace />;

  return (
    <PageLayout>
      <div className="container max-w-3xl mx-auto px-6 pb-24">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <a href="/" className="hover:text-devin-teal transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground">{page.title}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">{page.title}</h1>
          <p className="text-sm text-muted-foreground">Última actualização: {UPDATED}</p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {page.sections.map((section, i) => (
            <div key={i} className="pb-10 border-b border-devin-border last:border-0">
              <h2 className="text-lg font-semibold text-foreground mb-3">{section.heading}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-devin-teal transition-colors">
            <ArrowLeft size={14} />
            Voltar à página inicial
          </a>
        </div>

      </div>
    </PageLayout>
  );
};

export default LegalPage;
