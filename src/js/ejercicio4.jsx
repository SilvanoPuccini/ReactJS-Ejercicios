import { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

const items = [
  "Manzana",
  "Banana",
  "Naranja",
  "Pera",
  "Sandía",
  "Uva",
  "Mango",
  "Ananá",
  "Fresa",
  "Cereza",
];

const App = () => {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(normalizedQuery));
  }, [query]);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
      <section className="glass-card space-y-6">
        <header className="space-y-2">
          <h1>Filtro en tiempo real</h1>
          <p className="text-slate-300">
            Busca frutas en una interfaz con feedback instantáneo.
          </p>
        </header>
        <input
          type="text"
          className="input-field"
          placeholder="Buscar..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ul className="exercise-section">
          {filteredItems.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>
        <a href="index.html" className="btn-ghost">
          ← Volver al menú
        </a>
      </section>
    </main>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
