import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

const Post = ({ post }) => {
  const { data: session } = useSession();
  return (
    <div className="my-3.5">
      {/* Post  Header */}
      <div className="flex items-center py-5 px-2">
        <img
          src={post.img}
          className="object-contain p-1 mr-3 h-12 w-12 rounded-full"
          alt=""
        />
        <p className="font-bold text-sm">{post.userName}</p>
        <DotsHorizontalIcon className="h-5 ml-auto" />
      </div>
      {/* Image */}
      <div>
        <img src={post.img} className="w-full object-cover" alt="" />
      </div>
      {/* Buttons */}
      <div className="flex space-x-1 my-4">
        {session && <HeartIcon className="btn" />}
        <ChatIcon className="btn" />
        {session && <PaperAirplaneIcon className="btn" />}
        {session && (
          <div className="flex flex-1">
            <BookmarkIcon className="btn ml-auto" />
          </div>
        )}
      </div>

      {/* Caption */}
      <p>
        <span className="text-sm font-bold">{post.userName} </span>{" "}
        {post.caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      {session && (
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
