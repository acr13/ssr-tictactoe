import React from 'react';
import { connect } from 'react-redux';

import { onCellClicked } from '../actions';
import gameState from '../selectors';

import Controls from '../components/controls';

const Home = (props) => {
  return (
    <div className="game">
      <h1 className="title">{'Tic-Tac-Toe'}</h1>
      <div className="board">
        {props.board.map((cell, idx) => (
            <div
              key={idx}
              className={`cell ${props.winningCells.includes(idx) ? 'win' : undefined}`}
              onClick={() => props.onCellClicked(idx, props.turn)}
            >
              {cell}
            </div>
        ))}
      </div>
      <Controls
        turn={props.turn}
        isGameOver={props.isGameOver}
        winningPlayer={props.winningPlayer}
      />
      <style jsx>{`
        .title {
          font-family: sans-serif;
        }

        .game {
          margin-top: 100px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .board {
          height: 500px;
          width: 500px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .cell {
          height: 32%;
          width: 32%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 60px;
          font-family: sans-serif;
        }

        .cell.win {
          background-color: lightgreen;
        }

        .cell {
          border: 1px solid black;
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
    </div>
  )
};

const mapDispatchToProps = {
  onCellClicked: (cell, turn) => onCellClicked(cell, turn)
};
  
export default connect(gameState, mapDispatchToProps)(Home);
