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
    <div className="container">
      <div className="card">
        <h1>Generador de Contraseñas</h1>
        <div className="exercise-content">
          <input
            type="number"
            placeholder="Longitud"
            value={length}
            onChange={(event) => setLength(event.target.value)}
          />
          <button type="button" className="action-btn" onClick={generatePassword}>
            Generar
          </button>
        </div>
        {password && <p>{password}</p>}
        <a href="index.html" className="back">
          ← Volver al menú
        </a>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
