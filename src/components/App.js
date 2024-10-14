import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelection = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => selectedCategory === "All" || task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategorySelection={handleCategorySelection} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={(newTask) => setTasks(prev => [...prev, newTask])} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;