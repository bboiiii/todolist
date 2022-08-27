import React, { useState } from "react";
import Header from "./component/Header";
import "./App.css";
import TaskList from "./component/TaskList";
import AddTaskForm from "./component/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn Js", status: 0 },
    { id: "task_2", title: "Code a Todo List Level 2", status: 1 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(true);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get things done." />
      <TaskList
        tasks={tasks}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        showIncomplete={showIncomplete}
        setShowIncomplete={setShowIncomplete}
      />
      <AddTaskForm
        newTask={newTask}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
