import React from 'react';
import { GameHistory } from '../../types/game';

interface GameInfoProps {
  status: string;
  history: GameHistory[];
  currentMove: number;
  onJumpTo: (move: number) => void;
}

export const GameInfo: React.FC<GameInfoProps> = ({
  status,
  history,
  currentMove,
  onJumpTo,
}) => {
  return (
    <div className="ml-8">
      <div className="text-xl font-bold mb-4">{status}</div>
      <ol className="space-y-2">
        {history.map((_, move) => (
          <li key={move}>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-200
                ${currentMove === move
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
                }`}
              onClick={() => onJumpTo(move)}
            >
              {move === 0 ? 'Go to game start' : `Go to move #${move}`}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};