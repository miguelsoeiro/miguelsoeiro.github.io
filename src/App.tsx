import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Wraps lazy() — if a chunk 404s after a new deploy (stale hash in cache),
// reloads the page so the browser fetches the fresh index.js with correct refs.
function lazyWithReload<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(() =>
    factory().catch(() => {
      window.location.reload();
      return new Promise<{ default: T }>(() => {});
    })
  );
}

const ServicosPage      = lazyWithReload(() => import("./pages/ServicosPage"));
const LegalPage         = lazyWithReload(() => import("./pages/LegalPage"));
const PublicacoesPage   = lazyWithReload(() => import("./pages/PublicacoesPage"));
const ArticlePage       = lazyWithReload(() => import("./pages/ArticlePage"));
const ProdutosPage      = lazyWithReload(() => import("./pages/ProdutosPage"));
const ProdutosDetailPage = lazyWithReload(() => import("./pages/ProdutosDetailPage"));
const ServicosListPage  = lazyWithReload(() => import("./pages/ServicosListPage"));
const ArtigosPage       = lazyWithReload(() => import("./pages/ArtigosPage"));
const ArtigoDetailPage  = lazyWithReload(() => import("./pages/ArtigoDetailPage"));
const SobrePage         = lazyWithReload(() => import("./pages/SobrePage"));
const FundacaoPage      = lazyWithReload(() => import("./pages/FundacaoPage"));
const VCardPage         = lazyWithReload(() => import("./pages/VCardPage"));
const VCardTRPage       = lazyWithReload(() => import("./pages/VCardTRPage"));
const ContactoPage      = lazyWithReload(() => import("./pages/ContactoPage"));
const NotFound          = lazyWithReload(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos/:slug" element={<ServicosPage />} />
            <Route path="/legal/:slug" element={<LegalPage />} />
            <Route path="/servicos" element={<ServicosListPage />} />
            <Route path="/publicacoes" element={<PublicacoesPage />} />
            <Route path="/publicacoes/:slug" element={<ArticlePage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="/produtos/:slug" element={<ProdutosDetailPage />} />
            <Route path="/artigos" element={<ArtigosPage />} />
            <Route path="/artigos/:slug" element={<ArtigoDetailPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/fundacao" element={<FundacaoPage />} />
            <Route path="/vcard" element={<VCardTRPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/vcard-mps" element={<VCardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
