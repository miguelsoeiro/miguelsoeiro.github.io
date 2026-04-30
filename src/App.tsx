import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages — only downloaded when the user navigates to that route
const ServicosPage      = lazy(() => import("./pages/ServicosPage"));
const LegalPage         = lazy(() => import("./pages/LegalPage"));
const PublicacoesPage   = lazy(() => import("./pages/PublicacoesPage"));
const ArticlePage       = lazy(() => import("./pages/ArticlePage"));
const ProdutosPage      = lazy(() => import("./pages/ProdutosPage"));
const ProdutosDetailPage = lazy(() => import("./pages/ProdutosDetailPage"));
const ServicosListPage  = lazy(() => import("./pages/ServicosListPage"));
const ArtigosPage       = lazy(() => import("./pages/ArtigosPage"));
const ArtigoDetailPage  = lazy(() => import("./pages/ArtigoDetailPage"));
const SobrePage         = lazy(() => import("./pages/SobrePage"));
const NotFound          = lazy(() => import("./pages/NotFound"));

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
