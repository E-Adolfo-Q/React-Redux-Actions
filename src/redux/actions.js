import { createAction } from 'redux-actions';
import api from '../services/api';

export const handleApiError = createAction('handleApiError');

export const getPostsSuccess = createAction('getPostsSuccess');

export const getPosts = () => async (dispatch) => {
    try{
     const response = await api.posts.get();  
     dispatch(getPostsSuccess(response.data));
    }catch(error){
     dispatch(handleApiError(error));    
    }    
};

export const createPostSuccess = createAction('createPostSuccess');

export const createPost = (data) => async (dispatch) => {    
    try{
     const response = await api.posts.create(data);  
     dispatch(createPostSuccess(response.data));
    }catch(error){
     dispatch(handleApiError(error));    
    }    
};

export const getCommentsSuccess  = createAction('getCommentsSuccess');

export const getComments = () => async (dispatch) => {
    try{
     const response = await api.comments.get();  
     dispatch(getCommentsSuccess(response.data));
    }catch(error){
     dispatch(handleApiError(error));    
    }    
};

export const createCommentSuccess = createAction('createCommentSuccess');

export const createComment = (data) => async (dispatch) => {
    try{
     const response = await api.comments.create(data);  
     dispatch(createCommentSuccess(response.data));
    }catch(error){
     dispatch(handleApiError(error));    
    }    
};
