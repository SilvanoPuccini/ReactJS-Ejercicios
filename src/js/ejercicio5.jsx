import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("Resultado:");

  const calculate = (operation) => {
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
    <div className="container">
      <div className="card">
        <h1>Calculadora</h1>
        <div className="exercise-content">
          <input
            type="number"
            placeholder="Número 1"
            value={num1}
            onChange={(event) => setNum1(event.target.value)}
          />
          <input
            type="number"
            placeholder="Número 2"
            value={num2}
            onChange={(event) => setNum2(event.target.value)}
          />
        </div>
        <div className="actions">
          <button type="button" onClick={() => calculate("+")}>
            Sumar
          </button>
          <button type="button" onClick={() => calculate("-")}>
            Restar
          </button>
          <button type="button" onClick={() => calculate("*")}>
            Multiplicar
          </button>
          <button type="button" onClick={() => calculate("/")}>
            Dividir
          </button>
        </div>
        <p id="result">{result}</p>
        <a href="index.html" className="back">
          ← Volver al menú
        </a>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
