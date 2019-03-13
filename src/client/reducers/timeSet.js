import {FETCH_TIME_SET} from '../actions';

export default (state = '', action)=> {
  switch (action.type) {
    case FETCH_TIME_SET:
      return action.payload;
    default:
      return state;
  }
}
