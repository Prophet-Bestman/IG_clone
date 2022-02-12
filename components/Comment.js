import React from "react";
import formatDistance from "date-fns/formatDistance";
import Moment from "react-moment";

const Comment = ({ comment }) => {
  comment = comment.data();
  return (
    <div className="flex mb-3 mr-5 space-x-2 ">
      <div className={`rounded-full w-7 h-7 bg-black inline-grid`}></div>
      <p className="inline-grid flex-1">
        <span className="font-bold">{comment.username} </span>
        <span>{comment.comment}</span>
      </p>
      <Moment className="text-xs" fromNow>
        {comment.timestamp?.toDate()}
      </Moment>
    </div>
  );
};

export default Comment;
