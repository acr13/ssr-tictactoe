import { createSelector, createStructuredSelector } from 'reselect';

const getBoard = state => state.board;
const getTurn = state => state.turn;

const getIsGameOver = createSelector(
  [getBoard], (board) => {
    const players = ['x', 'o'];

    for (let i = 0; i < players.length; i++) {
      const p = players[i];

      if (
        // horizontal
        (board[0] === p && board[1] === p && board[2] === p) ||
        (board[3] === p && board[4] === p && board[5] === p) ||
        (board[6] === p && board[7] === p && board[8] === p) ||
        // vertical
        (board[0] === p && board[3] === p && board[6] === p) ||
        (board[1] === p && board[4] === p && board[7] === p) ||
        (board[2] === p && board[5] === p && board[8] === p) ||
  
        // diagonal
        (board[0] === p && board[4] === p && board[8] === p) ||
        (board[6] === p && board[4] === p && board[6] === p)
      ) {
        return true;
      }
    }

    return false;
  }
);

const getWinningCells = createSelector(
  [getIsGameOver, getBoard],
  (isGameOver, board) => {
    if (!isGameOver) {
      return [];
    }

    const players = ['x', 'o'];

    for (let i = 0; i < players.length; i++) {
      const p = players[i];

      if (board[0] === p && board[1] === p && board[2] === p) {
        return [0, 1, 2];
      } else if (board[3] === p && board[4] === p && board[5] === p) {
        return [3, 4, 5];
      } else if (board[6] === p && board[7] === p && board[8] === p) {
        return [6, 7, 8];
      } else if (board[0] === p && board[3] === p && board[6] === p) {
        return [0, 3, 6];
      } else if (board[1] === p && board[4] === p && board[7] === p) {
        return [1, 4, 7];
      } else if (board[2] === p && board[5] === p && board[8] === p) {
        return [2, 5, 8];
      } else if (board[0] === p && board[4] === p && board[8] === p) {
        return [0, 4, 8];
      } else if (board[2] === p && board[4] === p && board[6] === p) {
        return [2, 4, 6];
      }
    }
  }
);

const getWinningPlayer = createSelector([getTurn], (turn) => turn === 'x' ? 'o' : 'x');

export default createStructuredSelector({
  board: getBoard,
  turn: getTurn,
  isGameOver: getIsGameOver,
  winningCells: getWinningCells,
  winningPlayer: getWinningPlayer
});