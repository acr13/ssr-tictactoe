import React from 'react';

const Controls = (props) => {
  return (
    <div className="turn">
      {props.isGameOver ?
        <div className="wins">{`${props.winningPlayer} Wins!`}</div> :
        <div>{`It's ${props.turn}'s turn! `}</div>
      }
      <style jsx>{`
        .turn {
          margin-top: 10px;
          font-size: 24px;
          font-family: sans-serif;
        }

        .wins {
          color: lightgreen;
        }
      `}</style>
    </div>
  );
};

export default Controls;
