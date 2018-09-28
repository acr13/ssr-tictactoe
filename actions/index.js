export const ON_CELL_CLICKED = 'BOARD/ON_CELL_CLICKED';

export function onCellClicked(cell, value) {
  return { type: ON_CELL_CLICKED, payload: { cell, value } };
}