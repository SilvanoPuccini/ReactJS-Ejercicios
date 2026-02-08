const { useEffect, useMemo, useState } = React;

const getStoredTasks = () => {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [];
};

const App = () => {
  const [tasks, setTasks] = useState(() => getStoredTasks());
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: trimmed, completed: false },
    ]);
    setValue("");
  };

  const toggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks],
  );

  return (
    <div className="container">
      <div className="card">
        <h1>Lista de Tareas</h1>
        <p className="subtitle">Las tareas se guardan automáticamente</p>
        <div className="exercise-content">
          <input
            type="text"
            placeholder="Nueva tarea"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="button" className="action-btn" onClick={addTask}>
            Agregar tarea
          </button>
        </div>
        <ul id="taskList">
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
                style={
                  task.completed
                    ? { textDecoration: "line-through", opacity: 0.6 }
                    : undefined
                }
              >
                {task.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="exercise-content">
          <button type="button" className="action-btn" onClick={clearCompleted}>
            Limpiar tareas completadas ({completedCount})
          </button>
        </div>
        <a href="index.html" className="back">
          ← Volver al menú
        </a>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
