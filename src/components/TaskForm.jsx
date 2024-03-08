import React, { useState } from "react";
import "./taskform.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: " ",
    status: "todo",
    tags: [],
  });
  const checkTags = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const selectTags = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: " ",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div>
      <header className="app-header">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            className="task_input"
            placeholder="Enter your task"
            onChange={handlechange}
          />
          <div className="task_form_buttom_line">
            <div>
              <Tag
                tagname="HTML"
                selectTags={selectTags}
                selected={checkTags("HTML")}
              />
              <Tag
                tagname="CSS"
                selectTags={selectTags}
                selected={checkTags("CSS")}
              />
              <Tag
                tagname="JAVASCRIPT"
                selectTags={selectTags}
                selected={checkTags("JAVASCRIPT")}
              />
              <Tag
                tagname="REACT"
                selectTags={selectTags}
                selected={checkTags("REACT")}
              />
            </div>
            <div>
              <select
                name="status"
                value={taskData.status}
                className="task_status"
                onChange={handlechange}
              >
                <option value="todo">To-Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
