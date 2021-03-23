import { combineReducers } from 'redux';
import { homeReducer } from './home-reducer';
import { myPhotoReducer } from './myPhoto-reducer';

//create root reducer
export const rootReducer = combineReducers({
  home: homeReducer,
  myPhoto: myPhotoReducer,
});
