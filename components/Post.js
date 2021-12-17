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

const Post = ({ post }) => {
  return (
    <div className="my-3.5 px-3">
      {/* Header */}
      <div className="flex items-center p-5">
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
        <HeartIcon className="btn" />
        <ChatIcon className="btn" />
        <PaperAirplaneIcon className="btn" />
        <div className="flex flex-1">
          <BookmarkIcon className="btn ml-auto" />
        </div>
      </div>

      {/* Caption */}
      <p>{post.caption}</p>

      {/* Comments */}

      {/* Input Box */}
    </div>
  );
};

export default Post;
