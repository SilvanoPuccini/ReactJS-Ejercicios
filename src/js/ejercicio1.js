const { useEffect, useState } = React;

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
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [color]);

  return (
    <div className="container">
      <div className="card">
        <h1>Cambiador de Color de Fondo</h1>
        <div className="exercise-content">
          <button
            type="button"
            className="action-btn"
            onClick={() => setColor(getRandomColor())}
          >
            Cambiar color
          </button>
        </div>
        {color && <p>Color actual: {color}</p>}
        <a href="index.html" className="back">
          ← Volver al menú
        </a>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
