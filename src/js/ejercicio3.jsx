import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text: trimmed }]);
    setValue("");
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
      <section className="glass-card space-y-6">
        <header className="space-y-2">
          <h1>Lista Dinámica</h1>
          <p className="text-slate-300">
            Agrega y elimina ítems con un panel de control interactivo.
          </p>
        </header>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="text"
            className="input-field"
            placeholder="Escribe un elemento"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addItem();
              }
            }}
          />
          <button type="button" className="btn-primary" onClick={addItem}>
            Agregar
          </button>
        </div>
        <ul className="exercise-section">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="text-slate-100">{item.text}</span>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
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
