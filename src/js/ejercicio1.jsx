import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const getRandomColor = () => {
  const value = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${value}`;
};

const App = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (!color) {
      return;
    }
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "";
    };
  }, [color]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setColor(getRandomColor());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
      <section className="glass-card max-w-none space-y-6 md:w-1/2">
        <header className="space-y-2">
          <h1>Cambiador de Color de Fondo</h1>
          <p className="text-slate-300">
            Genera un color aleatorio y observa el ambiente futurista en tiempo
            real.
          </p>
        </header>
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="btn-primary"
            onClick={() => setColor(getRandomColor())}
          >
            Cambiar color
          </button>
          {color && <span className="chip">Color actual: {color}</span>}
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
