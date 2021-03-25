import { UPLOAD_MY_IMAGES } from './types';

const initState = {};

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case UPLOAD_MY_IMAGES:
      console.log(action);
      return state;
    default:
      return state;
  }
};
