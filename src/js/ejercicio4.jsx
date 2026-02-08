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
    <div className="container">
      <div className="card">
        <h1>Filtro en tiempo real</h1>
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href="index.html" className="back">
          ← Volver al menú
        </a>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
