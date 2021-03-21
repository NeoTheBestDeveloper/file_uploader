import { FETCH_ALL_IMAGES } from './types';
import { homeAPI } from './../api/api';

export const fetchAllImages = () => {
  return async (dispatch) => {
    let response = await homeAPI.fetchImages();

    if (response) {
      dispatch({
        type: FETCH_ALL_IMAGES,
        payload: response,
      });
    }
  };
};
