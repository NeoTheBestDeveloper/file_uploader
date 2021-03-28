import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';

//create root reducer
export const rootReducer = combineReducers({
  posts: postsReducer,
});
