import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicosPage from "./pages/ServicosPage";
import LegalPage from "./pages/LegalPage";
import PublicacoesPage from "./pages/PublicacoesPage";
import ArticlePage from "./pages/ArticlePage";
import ProdutosPage from "./pages/ProdutosPage";
import ProdutosDetailPage from "./pages/ProdutosDetailPage";
import ServicosListPage from "./pages/ServicosListPage";
import ArtigosPage from "./pages/ArtigosPage";
import ArtigoDetailPage from "./pages/ArtigoDetailPage";
import SobrePage from "./pages/SobrePage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
