const LearnSection = () => {
  return (
    <section className="py-16 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Learn &amp; work
            <br />
            <span className="text-teal">together</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Devin is built for collaboration and can learn to fit into your unique workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Card 1 - large */}
          <div className="lg:col-span-2 bg-devin-card border border-devin-border rounded-2xl p-8 hover:border-devin-teal/30 transition-colors">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-devin-surface border border-devin-border text-xs text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-devin-teal" />
                Approved new knowledge
              </div>
              <div className="text-sm text-muted-foreground font-mono bg-devin-surface rounded-lg px-3 py-2 border border-devin-border">
                When working in the backend repo
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mt-6">
              Devin learns your codebase &amp;
              <br />
              picks up tribal knowledge
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Devin builds context over time, learning your team's patterns and best practices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-devin-card border border-devin-border rounded-2xl p-8 hover:border-devin-teal/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-devin-surface border border-devin-border flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-devin-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Code on the go</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Write code using natural language instructions with Devin on mobile.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-devin-card border border-devin-border rounded-2xl p-8 hover:border-devin-teal/30 transition-colors lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-devin-teal/10 border border-devin-teal/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-devin-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">Collaborate</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Use Devin's editor, shell
              <br />
              and browser
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Take over and run commands, edit code, or use the browser for Devin at any time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-devin-card border border-devin-border rounded-2xl p-8 hover:border-devin-teal/30 transition-colors lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Able to work with{" "}
              <span className="text-teal">hundreds of tools</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Devin connects to your favorite MCP servers, from Asana to Zapier
            </p>
            <div className="flex flex-wrap gap-2">
              {["Confluence", "Airtable", "Segment", "Asana", "Notion", "Stripe", "AWS", "GitHub", "Datadog", "Linear", "Databricks", "Slack", "Google Drive", "Sentry", "PostgreSQL", "Azure", "Snowflake", "MongoDB"].map((tool) => (
                <span key={tool} className="px-3 py-1 rounded-full bg-devin-surface border border-devin-border text-sm text-muted-foreground hover:text-foreground hover:border-devin-teal/30 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
