import {FETCH_TIME} from '../actions';

export default (state = '', action)=> {
  switch (action.type) {
    case FETCH_TIME:
      return action.payload;
    default:
      return state;
  }
}
