import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;