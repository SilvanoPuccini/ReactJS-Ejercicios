import { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

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
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
      <section className="glass-card space-y-6">
        <header className="space-y-2">
          <h1>Lista de Tareas</h1>
          <p className="text-slate-300">Las tareas se guardan automáticamente.</p>
        </header>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="text"
            className="input-field"
            placeholder="Nueva tarea"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addTask();
              }
            }}
          />
          <button type="button" className="btn-primary" onClick={addTask}>
            Agregar tarea
          </button>
        </div>
        <ul className="exercise-section">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-neon-cyan"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
                className={`flex-1 ${
                  task.completed ? \"line-through text-slate-400\" : \"text-slate-100\"
                }`}
              >
                {task.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="btn-secondary" onClick={clearCompleted}>
            Limpiar tareas completadas ({completedCount})
          </button>
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
