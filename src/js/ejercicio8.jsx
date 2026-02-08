import { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    return {
      chars: trimmed.length,
      words: trimmed ? trimmed.split(/\s+/).length : 0,
    };
  }, [text]);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
      <section className="glass-card space-y-6">
        <header className="space-y-2">
          <h1>Contador de Palabras</h1>
          <p className="text-slate-300">
            Analiza el texto con métricas instantáneas en un panel futurista.
          </p>
        </header>
        <textarea
          rows="5"
          cols="40"
          className="textarea-field"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        <div className="flex flex-wrap gap-3">
          <span className="chip">Palabras: {stats.words}</span>
          <span className="chip">Caracteres: {stats.chars}</span>
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
