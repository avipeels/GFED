import React, { useState } from "react";

import "./App.css";

const initialTasks = [
  { id: 0, name: "Study JS" },
  { id: 1, name: "Study HTML" },
  { id: 2, name: "Study CSS" },
];
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskValue, setTaskValue] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskValue.trim() !== "") {
      setTasks([...tasks, { id: tasks.length, name: taskValue }]);
      setTaskValue("");
    }
  };

  return (
    <React.Fragment>
      <form>
        <label htmlFor="taskName"></label>
        <input
          onChange={(e) => {
            setTaskValue(e.target.value);
          }}
          type="text"
          value={taskValue}
          id="taskName"
        />
        <button type="submit" onClick={handleAddTask}>
          Add
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <>
            <li key={task.id}>{task.name}</li>
            <button
              type="submit"
              onClick={() => {
                setTasks(tasks.filter((t) => t.id !== task.id));
              }}
            >
              Delete
            </button>
          </>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
