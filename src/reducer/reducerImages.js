import { type } from "../types/type";

const initialState = {
  images: [],
};

export const reducerImages = (state = initialState, action) => {
  switch (action.type) {
    case type.addImages:
      return {
        ...state,
        images: [...action.payload],
      };
    default:
      return state;
  }
};
