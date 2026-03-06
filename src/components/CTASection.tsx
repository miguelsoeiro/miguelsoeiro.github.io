const CTASection = () => {
  return (
    <section className="py-24 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl border border-devin-border bg-devin-card overflow-hidden p-12 text-center"
          style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 50% / 0.08) 0%, hsl(222 25% 12%) 60%)" }}>
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-devin-teal to-transparent" />

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Build more with
            <br />
            <span className="text-teal">Devin</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 mt-4 rounded-full bg-devin-teal text-background font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Get started
          </a>

          {/* Enterprise */}
          <div className="mt-16 pt-12 border-t border-devin-border">
            <p className="text-muted-foreground text-sm mb-1">Need Devin for your enterprise?</p>
            <h3 className="text-2xl font-bold text-foreground mb-3">Get started with Devin Enterprise</h3>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm mb-6">
              Devin Enterprise provides additional capabilities, security and control for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-devin-teal/40 transition-colors">
                Learn about Devin Enterprise
              </a>
              <a href="#" className="px-6 py-2.5 rounded-full bg-devin-surface border border-devin-border text-foreground text-sm font-medium hover:border-devin-teal/40 transition-colors">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
