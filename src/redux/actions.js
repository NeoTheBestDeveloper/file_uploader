import { FETCH_POSTS, ADD_POST } from './types';
import { homeAPI, myPhotosAPI } from './../api/api';

// This thunk get photos from server for home page
export const fetchPosts = () => {
  return async (dispatch) => {
    let response = await homeAPI.fetchImages();

    // If reponse is good, then dispatch posts to store
    if (response) {
      dispatch({
        type: FETCH_POSTS,
        payload: response,
      });
    }
  };
};

export const addPost = (files) => {
  return async (dispatch) => {
    let response = await myPhotosAPI.fileUpload(files);
    if (response) {
      dispatch({
        type: ADD_POST,
        payload: files,
      });
    }
  };
};
