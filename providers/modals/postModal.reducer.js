import { postModalTypes } from "./postModal.types";

export const MODAL_INITIAL_STATE = {
  isOpen: false,
};

const postModalReducer = (state, action) => {
  switch (action.type) {
    case postModalTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case postModalTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default postModalReducer;
