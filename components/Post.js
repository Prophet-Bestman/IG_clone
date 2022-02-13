import React, { useContext, useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { AuthContext } from "../providers/auth/auth.provider";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Comments from "./Comments";

const Post = ({ post }) => {
  const id = post.id;
  post = post.data();
  const { user, setUser } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);

  console.log(liked);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentText = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentText,
      username: user?.email,
      userImage: "#000",
      timestamp: serverTimestamp(),
    });
  };

  // Listen for Comments
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),
    [db, id]
  );

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "posts", id, "likes", user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", user.uid), {
        username: user.email,
      });
    }
  };

  // Listen for Likes
  useEffect(
    () =>
      onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );

  // Listen for Liked by user
  useEffect(
    () => setLiked(likes.findIndex((like) => like.id === user?.uid) !== -1),
    [likes]
  );

  return (
    <div className="my-5 py-4 shadow-sm">
      {/* Post  Header */}
      <div className="flex items-center py-5 px-1">
        <img
          src={post.image}
          className="object-cover p-1 mr-1 h-12 w-12 rounded-full"
          alt=""
        />
        <p className="font-bold text-sm">{post.username}</p>
        <DotsHorizontalIcon className="h-5 ml-auto" />
      </div>
      {/* Image */}
      <div className="px-2 md:px-0">
        <img
          src={post.image}
          className="w-full object-cover rounded-md"
          alt=""
        />
      </div>
      {/* Buttons */}
      {!!user && (
        <div className="flex space-x-2 my-4 px-2">
          {liked ? (
            <HeartIconFilled onClick={likePost} className="btn text-red-500" />
          ) : (
            <HeartIcon onClick={likePost} className="btn" />
          )}
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />

          <div className="flex flex-1">
            <BookmarkIcon className="btn ml-auto" />
          </div>
        </div>
      )}

      {/* Caption */}
      {likes.length > 0 && (
        <span className="font-bold text-xs">
          {likes.length} {likes.length > 1 ? "Likes" : "Like"},
        </span>
      )}
      {comments.length > 0 && (
        <span className="ml-2 font-bold text-xs">
          {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
        </span>
      )}
      <p className="px-2">
        <span className="text-sm font-bold">{post.username} </span>{" "}
        {post.caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && <Comments comments={comments} />}

      {/* Input Box */}
      {!!user && (
        <form>
          <div className="flex w-full items-center relative mt-2 p-3 rounded-md">
            <div className="absolute pointer-events-none pl-3">
              <EmojiHappyIcon className="h-5 text-gray-500" />
            </div>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type your comment"
              className="focus:ring-black w-full rounded-md sm:text-sm bg-gray-50 border-gray-300 focus:border-black pl-10"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              onClick={(e) => sendComment(e)}
              className="ml-5 font-bold text-blue-400"
            >
              Post
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Post;
