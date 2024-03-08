import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todo from "./assets/direct-hit.png";
import doing from "./assets/glowing-star.png";
import done from "./assets/check-mark-button.png";
const oldTask = localStorage.getItem("task");
console.log(oldTask);
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const NewTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(NewTask);
  };

  return (
    <div className="App">
      <TaskForm setTasks={setTasks} />
      <main className="app-main">
        <TaskColumn
          title="To Do"
          icon={todo}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doing}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={done}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
