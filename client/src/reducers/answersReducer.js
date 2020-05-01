import { POST_ANSWERS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case POST_ANSWERS:
      return action.payload;
    default:
      return state;
  }
}
