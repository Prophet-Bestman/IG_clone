import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "1",
    userName: "Prophet Bestman",
    img: "/dp.jfif",
    caption: "I am the best developer. Just on the becoming journey",
  },
  {
    id: "2",
    userName: "Prophet Bestman",
    img: "/dp.jfif",
    caption: "I am the best developer. Just on the becoming journey",
  },
  {
    id: "3",
    userName: "Prophet Bestman",
    img: "/dp.jfif",
    caption: "I am the best developer. Just on the becoming journey",
  },
];

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {/* Post */}
    </div>
  );
};

export default Posts;
