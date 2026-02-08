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
    <div className="container">
      <div className="card">
        <h1>Contador de Palabras</h1>
        <textarea
          rows="5"
          cols="40"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        <p>
          Palabras: <span>{stats.words}</span>
        </p>
        <p>
          Caracteres: <span>{stats.chars}</span>
        </p>
        <a href="index.html" className="back">
          ← Volver al menú
        </a>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
