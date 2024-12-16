import React from 'react';
import { PlayerScore, GameStats } from '../../types/game';

interface ScoreBoardProps {
  scores: PlayerScore;
  stats: GameStats;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores, stats }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Score Board</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-blue-100 rounded-lg">
          <div className="text-blue-600 font-bold text-xl">Player X</div>
          <div className="text-3xl font-bold text-blue-800">{scores.X}</div>
        </div>
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <div className="text-gray-600 font-bold text-xl">Draws</div>
          <div className="text-3xl font-bold text-gray-800">{scores.draws}</div>
        </div>
        <div className="text-center p-4 bg-red-100 rounded-lg">
          <div className="text-red-600 font-bold text-xl">Player O</div>
          <div className="text-3xl font-bold text-red-800">{scores.O}</div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-purple-100 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-purple-600 font-bold">Total Games</div>
            <div className="text-2xl font-bold text-purple-800">{stats.totalGames}</div>
          </div>
          <div className="text-center">
            <div className="text-purple-600 font-bold">Win Streak</div>
            <div className="text-2xl font-bold text-purple-800">
              {stats.currentStreak ? `${stats.currentStreak}: ${stats.winningStreak}` : '-'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};