import { Component, ReactNode } from "react";

interface Props { children: ReactNode }
interface State { error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-8">
          <div className="max-w-lg text-center">
            <p className="text-sm font-mono text-muted-foreground mb-2">Erro de renderização</p>
            <pre className="text-xs text-red-400 bg-devin-surface border border-devin-border rounded-xl p-4 text-left whitespace-pre-wrap break-all">
              {this.state.error.message}
            </pre>
            <button
              className="mt-6 px-4 py-2 text-sm rounded-full border border-devin-border text-foreground hover:border-devin-teal transition-colors"
              onClick={() => window.location.reload()}
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
