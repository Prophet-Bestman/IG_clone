import React, { createContext, useReducer } from "react";
import postModalReducer, { MODAL_INITIAL_STATE } from "./postModal.reducer";
import { postModalTypes } from "./postModal.types";

export const PostModalContext = createContext(MODAL_INITIAL_STATE);

const PostModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postModalReducer, MODAL_INITIAL_STATE);

  const openModal = () => {
    dispatch({
      type: postModalTypes.OPEN_MODAL,
      payload: true,
    });
  };
  const closeModal = () => {
    dispatch({
      type: postModalTypes.CLOSE_MODAL,
      payload: false,
    });
  };

  const { isOpen } = state;

  return (
    <PostModalContext.Provider
      value={{
        isOpen: isOpen,
        openModal: openModal,
        closeModal: closeModal,
      }}
    >
      {children}
    </PostModalContext.Provider>
  );
};

export default PostModalProvider;
