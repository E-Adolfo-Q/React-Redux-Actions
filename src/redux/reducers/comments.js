import { handleActions } from 'redux-actions';
import { createCommentSuccess, getCommentsSuccess } from '../actions';

export default handleActions({
    [createCommentSuccess]: (state,action) => {
        return [...state,action.payload]
     },
     [getCommentsSuccess]: (state,action) => {
       return action.payload;
     },
}, []);