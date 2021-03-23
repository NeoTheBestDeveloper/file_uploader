import { FETCH_ALL_IMAGES } from './types';
import { homeAPI } from './../api/api';

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
