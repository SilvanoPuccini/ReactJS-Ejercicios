const { useState } = React;

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Contador de clics</h1>
        <p id="counter">Clics: {count}</p>
        <button type="button" className="action-btn" onClick={() => setCount(count + 1)}>
          Contar clic
        </button>
        <a href="index.html" className="back">
          ← Volver al menú
        </a>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
