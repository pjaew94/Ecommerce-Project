import React from "react";

const Comment = ({ _id, name, text, date }) => {
  return (
    <div
      className="comment"
      key={_id}
      
    >
      <h3>{text}</h3>
      <div className="by">
        <h4>{name}</h4>
        <h4>{date}</h4>
      </div>
    </div>
  );
};

export default Comment;
