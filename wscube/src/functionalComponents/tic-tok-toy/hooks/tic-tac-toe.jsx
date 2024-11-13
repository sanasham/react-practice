import { useState } from "react";

const initialBoard = Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isNext, setIsNext] = useState(true);

  const WINNINGPATTERNS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Left-to-right diagonal
    [2, 4, 6], // Right-to-left diagonal
  ];

  const calculateWinner = (currenBoard) => {
    // console.log(`current board : ${currenBoard}`);
    for (let i = 0; i < WINNINGPATTERNS.length; i++) {
      //   console.log(`winning pattern`, WINNINGPATTERNS[i]);
      const [a, b, c] = WINNINGPATTERNS[i];
      console.log(a, b, c);
      console.log(`current board[a] ${currenBoard[a]}`);
      if (
        currenBoard[a] &&
        currenBoard[a] === currenBoard[b] &&
        currenBoard[a] === currenBoard[c]
      ) {
        return currenBoard[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    // check the winner
    const winner = calculateWinner(board);

    console.log(`board of index ${board[index]}`);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext);
    console.log(`new board is ${newBoard}`);
  };
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isNext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard);
  };
  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
