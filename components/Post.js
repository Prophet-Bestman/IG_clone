import React from "react";

const Post = ({ post }) => {
  return (
    <div className="my-3.5">
      <h1>{post.userName}</h1>
      <div className="h-full">
        <img src={post.img} className="object-contain" alt="" />
      </div>
      <div>
        <p>{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;
