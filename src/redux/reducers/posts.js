
import { handleActions } from 'redux-actions';
import { createPostSuccess, getPostsSuccess } from '../actions';

export default handleActions({
  [createPostSuccess]: (state,action) => {
     return [...state,action.payload]
  },
  [getPostsSuccess]: (state,action) => {
    return action.payload;
  },  
},[]);
