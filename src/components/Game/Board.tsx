import React from 'react';
import { Square } from './Square';
import { BoardType } from '../../types/game';

interface BoardProps {
  squares: BoardType;
  onSquareClick: (index: number) => void;
  winningLine: number[] | null;
}

export const Board: React.FC<BoardProps> = ({ squares, onSquareClick, winningLine }) => {
  const renderSquare = (index: number) => {
    const isWinningSquare = winningLine?.includes(index);
    
    return (
      <Square
        key={index}
        value={squares[index]}
        onClick={() => onSquareClick(index)}
        isWinning={isWinningSquare}
      />
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-72">
      {Array(9).fill(null).map((_, index) => renderSquare(index))}
    </div>
  );
};