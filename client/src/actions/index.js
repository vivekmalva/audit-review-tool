import axios from 'axios';
import { FETCH_USER, FETCH_QUESTIONS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchQuestions = () => async dispatch => {
  const res = await axios.get('/api/audit');
  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};
