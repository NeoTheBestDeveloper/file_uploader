import { ADD_POST } from './types';

const initState = {
  AllPosts: [],
  MyPosts: [],
};

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: Date.now().toString(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
        comment: action.payload.comment,
        img: URL.createObjectURL(action.payload.files.photos[0]),
      };
      return {
        ...state,
        MyPosts: [...state.MyPosts, newPost],
      };
    default:
      return state;
  }
};
