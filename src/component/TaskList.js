import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  setTaskStatus,
  removeTask,
  showIncomplete,
  setShowIncomplete,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label for="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
    </>
  );
}

export default TaskList;
