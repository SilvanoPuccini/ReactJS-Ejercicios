import { useState } from "react";
import { createRoot } from "react-dom/client";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const App = () => {
  const [length, setLength] = useState("");
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const size = Number(length);
    if (!size || size < 4) {
      setPassword("Longitud mínima: 4");
      return;
    }

    let result = "";
    for (let i = 0; i < size; i += 1) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(result);
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
      <section className="glass-card space-y-6">
        <header className="space-y-2">
          <h1>Generador de Contraseñas</h1>
          <p className="text-slate-300">
            Crea claves seguras con estética neon y feedback instantáneo.
          </p>
        </header>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="number"
            className="input-field"
            placeholder="Longitud"
            value={length}
            onChange={(event) => setLength(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                generatePassword();
              }
            }}
          />
          <button type="button" className="btn-primary" onClick={generatePassword}>
            Generar
          </button>
        </div>
        {password && (
          <div className="rounded-2xl border border-neon-pink/40 bg-white/5 px-4 py-3 text-neon-pink shadow-glow">
            {password}
          </div>
        )}
        <a href="index.html" className="btn-ghost">
          ← Volver al menú
        </a>
      </section>
    </main>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
