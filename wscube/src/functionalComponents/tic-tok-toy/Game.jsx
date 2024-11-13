import React, { useState } from "react";
import "./style.css";
import useTicTacToe from "./hooks/tic-tac-toe";

function Game() {
  const { board, handleClick, calculateWinner, getStatusMessage, resetGame } =
    useTicTacToe();
  return (
    <div className="container">
      <div className="game">
        <div className="status">{getStatusMessage()}</div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
        {board.map((item, i) => {
          return (
            <button
              key={i}
              className="cell"
              onClick={() => handleClick(i)}
              disabled={item !== null}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
