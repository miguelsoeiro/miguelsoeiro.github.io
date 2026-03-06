const integrations = [
  {
    name: "GitHub",
    desc: "Devin can independently create PRs, respond to PR comments, review PRs, etc.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Linear",
    desc: "Assign Devin tickets directly in Linear, or add the Devin tag to delegate tasks.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3.38 14.515L9.485 20.62c-.18.11-.38.17-.585.17-.43 0-.84-.17-1.145-.47L2.28 14.845c-.3-.305-.47-.715-.47-1.145 0-.205.06-.405.17-.585zM2.1 11.53l10.37 10.37c-.285.065-.575.1-.87.1C5.49 22 1 17.51 1 12c0-.295.035-.585.1-.87zM12 1C6.48 1 2 5.48 2 11c0 .295.035.585.1.87l10.03 10.03c.295.065.575.1.87.1 5.52 0 10-4.48 10-10S17.52 1 12 1z"/>
      </svg>
    ),
  },
  {
    name: "Slack and Teams",
    desc: "Assign Devin tasks by tagging @Devin in Slack or Teams. Devin keeps you updated on progress in replies.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
  },
];

const IntegrationsSection = () => {
  return (
    <section className="py-24 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Works where
            <br />
            <span className="text-teal">you work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-devin-card border border-devin-border rounded-2xl p-8 hover:border-devin-teal/30 transition-all hover:shadow-lg"
              style={{ boxShadow: "0 0 0 0 transparent" }}
            >
              <div className="w-12 h-12 rounded-xl bg-devin-surface border border-devin-border flex items-center justify-center mb-5 text-devin-teal">
                {integration.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{integration.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{integration.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
