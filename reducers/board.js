import { ON_CELL_CLICKED } from '../actions';

const initialState = Array(9).fill(' ');

export default (state = initialState, action) => {
  if (action.type === ON_CELL_CLICKED) {
    const { cell, value } = action.payload;
    return [ ...state.slice(0, cell), value, ...state.slice(cell + 1) ];
  }

  return state;
};
