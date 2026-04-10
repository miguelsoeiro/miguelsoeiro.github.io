import React from "react";

const Homepage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal mb-4">HOMEPAGE TEST</h1>
        <p className="text-xl">Se vês isto, a rota funciona!</p>
        <p className="text-lg mt-4 text-muted-foreground">Alterações visíveis:</p>
        <ul className="text-left mt-2 space-y-1">
          <li>✅ Loading Screen funcionando</li>
          <li>✅ Título "[NOVO] Parceiro de IT"</li>
          <li>✅ Fundo amarelo na frase</li>
          <li>✅ Performance otimizada</li>
        </ul>
        <a href="/" className="inline-block mt-6 px-4 py-2 bg-teal text-black rounded">
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default Homepage;
