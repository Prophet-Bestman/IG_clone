import React, { createContext } from "react";
import { POST_INITIAL_STATE } from "./posts.reducer";

export const PostContext = createContext(POST_INITIAL_STATE);

const PostProvider = ({ Children }) => {
  <PostContext.Provider>{Children}</PostContext.Provider>;
};

export default PostProvider;
