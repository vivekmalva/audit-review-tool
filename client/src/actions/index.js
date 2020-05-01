import axios from 'axios';
import { FETCH_USER, FETCH_QUESTIONS, POST_ANSWERS , POST_REVIEW } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchQuestions = () => async dispatch => {
  const res = await axios.get('/api/audit');
  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};

export const postAnswers = (formData) => async dispatch => {
  const res = await axios.post('/api/audit',formData);
  dispatch({ type: POST_ANSWERS, payload: res.data });
};

export const postReview = (formData) => async dispatch => {
  const res = await axios.post('/api/review',formData);
  dispatch({ type: POST_REVIEW, payload: res.data });
};
