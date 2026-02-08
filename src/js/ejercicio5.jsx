import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("Resultado:");
  const [lastOperation, setLastOperation] = useState("+");

  const calculate = (operation) => {
    setLastOperation(operation);
    const a = Number(num1);
    const b = Number(num2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setResult("Valores inválidos");
      return;
    }

    if (operation === "/" && b === 0) {
      setResult("No se puede dividir por cero");
      return;
    }

    const operations = {
      "+": a + b,
      "-": a - b,
      "*": a * b,
      "/": a / b,
    };

    setResult(`Resultado: ${operations[operation]}`);
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
      <section className="glass-card space-y-6">
        <header className="space-y-2">
          <h1>Calculadora</h1>
          <p className="text-slate-300">
            Opera con números en una consola luminosa de precisión.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="number"
            className="input-field"
            placeholder="Número 1"
            value={num1}
            onChange={(event) => setNum1(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                calculate(lastOperation);
              }
            }}
          />
          <input
            type="number"
            className="input-field"
            placeholder="Número 2"
            value={num2}
            onChange={(event) => setNum2(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                calculate(lastOperation);
              }
            }}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <button type="button" className="btn-primary" onClick={() => calculate("+")}>
            Sumar
          </button>
          <button type="button" className="btn-secondary" onClick={() => calculate("-")}>
            Restar
          </button>
          <button type="button" className="btn-secondary" onClick={() => calculate("*")}>
            Multiplicar
          </button>
          <button type="button" className="btn-secondary" onClick={() => calculate("/")}>
            Dividir
          </button>
        </div>
        <p className="chip">{result}</p>
        <a href="index.html" className="btn-ghost">
          ← Volver al menú
        </a>
      </section>
    </main>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
