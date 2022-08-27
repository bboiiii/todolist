import React from "react";

function AddTaskForm({ newTask, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label for="newitem">Add to the todo list</label>
      <input
        type="text"
        id="newitem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default AddTaskForm;
