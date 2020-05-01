import { combineReducers } from 'redux';
import authReducer from './authReducer';
import questionsReducer from './questionsReducer';
import reviewReducer from './answersReducer';

export default combineReducers({
    auth:authReducer,
    questions:questionsReducer,
    review: reviewReducer,
});