import { useState, useEffect } from 'react';
import { calculateWinner } from '../utils/gameLogic';
import { BoardType, GameHistory } from '../types/game';

export const useGameState = () => {
  const [history, setHistory] = useState<GameHistory[]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const { winner: currentWinner, line: winningLine } = calculateWinner(currentSquares);

  useEffect(() => {
    if (currentWinner !== winner) {
      setWinner(currentWinner);
    }
  }, [currentWinner]);

  const handlePlay = (nextSquareIndex: number) => {
    if (winner || currentSquares[nextSquareIndex]) {
      return;
    }

    const nextSquares = currentSquares.slice();
    nextSquares[nextSquareIndex] = xIsNext ? 'X' : 'O';

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move: number) => {
    setCurrentMove(move);
  };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setWinner(null);
  };

  const status = winner
    ? `Winner: ${winner}`
    : currentSquares.every(Boolean)
    ? 'Game is a draw!'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return {
    currentSquares,
    status,
    history,
    currentMove,
    winningLine,
    winner,
    handlePlay,
    jumpTo,
    resetGame,
  };
};