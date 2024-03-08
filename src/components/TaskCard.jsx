import React from "react";
import "./taskcard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete,index }) => {
  return (
    <article className="task-card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagname={tag} selected />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img className="delete-icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
