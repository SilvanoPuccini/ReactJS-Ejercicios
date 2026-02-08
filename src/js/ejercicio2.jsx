import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
      <section className="glass-card space-y-6">
        <header className="space-y-2">
          <h1>Contador de clics</h1>
          <p className="text-slate-300">
            Mide tu energía con cada pulsación en un panel luminoso.
          </p>
        </header>
        <div className="flex flex-wrap items-center gap-4">
          <span className="chip">Clics: {count}</span>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Contar clic
          </button>
        </div>
        <a href="index.html" className="btn-ghost">
          ← Volver al menú
        </a>
      </section>
    </main>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
