import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <div className="ml-4 md:ml-10 h-24 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
