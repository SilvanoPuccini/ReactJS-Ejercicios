const { useState } = React;

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
    <div className="container">
      <div className="card">
        <h1>Lista Dinámica</h1>
        <div className="exercise-content">
          <input
            type="text"
            placeholder="Escribe un elemento"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="button" className="action-btn" onClick={addItem}>
            Agregar
          </button>
        </div>
        <ul id="itemList">
          {items.map((item) => (
            <li key={item.id}>
              {item.text}
              <button type="button" onClick={() => removeItem(item.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <a href="index.html" className="back">
          ← Volver al menú
        </a>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
