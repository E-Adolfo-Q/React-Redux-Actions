import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from './reducers/posts';
import comments from './reducers/comments';

const reducer = combineReducers({
    posts,
    comments,
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;