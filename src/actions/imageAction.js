import { type } from "../types/type";

export const addImagesFetch = (term) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://pixabay.com/api/?key=18295458-0f716a76786afd4d962faabf6&q=${term}`
    );
    const { hits } = await response.json();
    dispatch(addImagesState(hits));
  };
};

const addImagesState = (hits) => ({
  type: type.addImages,
  payload: [...hits],
});
