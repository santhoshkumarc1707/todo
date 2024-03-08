import React from "react";
import "./taskcolumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status,handleDelete }) => {
  return (
    <div>
      <section className="task-column">
        <h2 className="task-column-heading">
          <img className="task-column-icon" src={icon} alt="" />
          {title}
        </h2>
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/>
            )
        )}
      </section>
    </div>
  );
};

export default TaskColumn;
