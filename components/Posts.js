import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useQuery } from "react-query";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => setPosts(snapshot.docs)
      ),
    [db]
  );

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
