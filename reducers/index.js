import { combineReducers } from 'redux';

import board from './board';
import turn from './turn';

export default combineReducers({
  board,
  turn
});
