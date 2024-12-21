import React, { useState } from "react";
import axios from "axios";

const Form = ({func}) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://company-assesment1.vercel.app/task", { task });
    setTask("");
    func();
  };

  return (
    <div className="form-container">
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
          placeholder="Enter task here"
        />
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
