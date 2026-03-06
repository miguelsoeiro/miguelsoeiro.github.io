const logos = [
  "Nubank", "Anduril", "Qualcomm", "Samsara", "Rippling",
  "Hewlett Packard Enterprise", "Bridgewater", "Niantic", "Loom",
];

const stats = [
  { value: "8x", label: "engineering time efficiency gain" },
  { value: "20x", label: "cost savings" },
  { value: "12x", label: "faster migrations" },
];

const CustomersSection = () => {
  return (
    <section className="py-24 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-devin-muted text-sm uppercase tracking-widest font-medium mb-4">Industry leaders choose to</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Build with Devin</h2>
          <a href="#" className="inline-flex items-center gap-1 mt-4 text-devin-teal hover:opacity-80 transition-opacity text-sm font-medium">
            Hear from our customers
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.value} className="bg-devin-card border border-devin-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-teal mb-2">{s.value}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {logos.map((logo) => (
            <div key={logo} className="px-4 py-2 rounded-lg bg-devin-surface border border-devin-border text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
