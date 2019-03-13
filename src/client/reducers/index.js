import {combineReducers} from 'redux';
import timeTo from './timeTo';
import timeSet from './timeSet';

export default combineReducers({
  timeTo: timeTo,
  time: timeSet
});
