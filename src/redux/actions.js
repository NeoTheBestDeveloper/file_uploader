import { FETCH_ALL_IMAGES, UPLOAD_MY_IMAGES } from './types';
import { homeAPI, myPhotosAPI } from './../api/api';

// This thunk get photos from server for home page
export const fetchAllImages = () => {
  return async (dispatch) => {
    let response = await homeAPI.fetchImages();

    // If reponse is good, then dispatch photos to store
    if (response) {
      dispatch({
        type: FETCH_ALL_IMAGES,
        payload: response,
      });
    }
  };
};

export const uploadMyImages = (files) => {
  return async (dispatch) => {
    let response = await myPhotosAPI.fileUpload(files);

    if (response) {
      dispatch({
        type: UPLOAD_MY_IMAGES,
        payload: response,
      });
    }
  };
};
