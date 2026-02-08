const { useEffect, useRef, useState } = React;

const formatTime = (totalSeconds) => {
  const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Temporizador</h1>
        <p id="time">{formatTime(seconds)}</p>
        <div className="actions">
          <button
            type="button"
            className="primary"
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
          >
            Iniciar
          </button>
          <button type="button" className="secondary" onClick={handleStop}>
            Detener
          </button>
          <button type="button" className="secondary" onClick={handleReset}>
            Reset
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
