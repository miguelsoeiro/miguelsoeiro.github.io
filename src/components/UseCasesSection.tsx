const useCases = [
  {
    title: "Code Migration + Refactors",
    items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Data Engineering + Analysis",
    items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
    color: "from-teal-500/20 to-green-500/10",
  },
  {
    title: "Bugs + Backlog Work",
    items: ["Ticket resolution", "CI/CD", "First-draft PR creation for backlog tasks"],
    color: "from-purple-500/20 to-blue-500/10",
  },
  {
    title: "Application Development",
    items: ["Frontend bugs and edge cases", "Unit and E2E testing", "Building SaaS integrations"],
    color: "from-orange-500/20 to-red-500/10",
  },
  {
    title: "Bug & Issue Triage",
    items: ["Automated on-call response", "Ticket resolution", "CI/CD autotriage"],
    color: "from-pink-500/20 to-rose-500/10",
  },
  {
    title: "And Many Others",
    items: ["Technical debt", "Performance optimization", "Scraping", "Maintaining documentation"],
    color: "from-indigo-500/20 to-violet-500/10",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-devin-muted text-sm uppercase tracking-widest font-medium mb-4">What Devin can do</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Use cases</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From implementing new features to fixing thousands of lint errors, Devin can clear your backlog, modernize your codebase, and help you build more.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className={`rounded-2xl border border-devin-border bg-gradient-to-br ${uc.color} bg-devin-card p-6 hover:border-devin-teal/30 transition-colors`}
            >
              <h3 className="font-bold text-foreground text-lg mb-4">{uc.title}</h3>
              <ul className="space-y-2">
                {uc.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-devin-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
