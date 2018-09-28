import { ON_CELL_CLICKED } from '../actions';

const initialState = 'x';

export default (state = initialState, action) => {
  if (action.type === ON_CELL_CLICKED) {
    return state === 'x' ? 'o' : 'x';
  }

  return state;
}
