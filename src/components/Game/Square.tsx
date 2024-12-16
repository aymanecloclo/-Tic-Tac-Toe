import React from 'react';
import { SquareValue } from '../../types/game';

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isWinning?: boolean;
}

export const Square: React.FC<SquareProps> = ({ value, onClick, isWinning }) => {
  return (
    <button
      className={`w-24 h-24 text-5xl font-bold border-2 rounded-lg
        ${isWinning 
          ? 'bg-green-100 border-green-500 shadow-lg transform scale-105' 
          : 'bg-white border-gray-300'
        }
        hover:bg-gray-50 hover:shadow-md
        transition-all duration-200 ease-in-out
        ${value === 'X' 
          ? 'text-blue-600 hover:text-blue-700' 
          : 'text-red-600 hover:text-red-700'
        }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};