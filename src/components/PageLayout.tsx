import ModernNavbar from "@/components/ModernNavbar";
import Footer from "@/components/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-background text-foreground min-h-screen flex flex-col">
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.05) 0%, transparent 60%)" }}
    />
    <div className="relative z-10 flex flex-col min-h-screen">
      <ModernNavbar />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default PageLayout;
