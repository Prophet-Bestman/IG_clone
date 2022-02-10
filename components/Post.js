import React, { useContext } from "react";
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

const Post = ({ post }) => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="my-3.5">
      {/* Post  Header */}
      <div className="flex items-center py-5 px-2">
        <img
          src={post.image}
          className="object-contain p-1 mr-3 h-12 w-12 rounded-full"
          alt=""
        />
        <p className="font-bold text-sm">{post.username}</p>
        <DotsHorizontalIcon className="h-5 ml-auto" />
      </div>
      {/* Image */}
      <div>
        <img src={post.image} className="w-full object-cover" alt="" />
      </div>
      {/* Buttons */}
      <div className="flex space-x-1 my-4">
        {!!user && <HeartIcon className="btn" />}
        <ChatIcon className="btn" />
        {!!user && <PaperAirplaneIcon className="btn" />}
        {!!user && (
          <div className="flex flex-1">
            <BookmarkIcon className="btn ml-auto" />
          </div>
        )}
      </div>

      {/* Caption */}
      <p>
        <span className="text-sm font-bold">{post.username} </span>{" "}
        {post.caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      {!!user && (
        <form>
          <div className="flex w-full items-center relative mt-2 p-3 rounded-md">
            <div className="absolute pointer-events-none pl-3">
              <EmojiHappyIcon className="h-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Type your comment"
              className="focus:ring-black w-full rounded-md sm:text-sm bg-gray-50 border-gray-300 focus:border-black pl-10"
            />
            <button className="ml-5 font-bold text-blue-400">Post</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Post;
