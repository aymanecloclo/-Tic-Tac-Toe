import { useState, useEffect } from 'react';
import { PlayerScore, GameStats } from '../types/game';

const initialScores: PlayerScore = {
  X: 0,
  O: 0,
  draws: 0,
};

const initialStats: GameStats = {
  totalGames: 0,
  winningStreak: 0,
  currentStreak: null,
};

export const useGameStats = () => {
  const [scores, setScores] = useState<PlayerScore>(initialScores);
  const [stats, setStats] = useState<GameStats>(initialStats);

  const updateStats = (winner: string | null) => {
    setScores(prev => {
      const newScores = { ...prev };
      if (winner) {
        newScores[winner as keyof PlayerScore]++;
      } else {
        newScores.draws++;
      }
      return newScores;
    });

    setStats(prev => {
      const newStats = { ...prev };
      newStats.totalGames++;

      if (winner) {
        if (prev.currentStreak === winner) {
          newStats.winningStreak = prev.winningStreak + 1;
        } else {
          newStats.currentStreak = winner;
          newStats.winningStreak = 1;
        }
      } else {
        newStats.currentStreak = null;
        newStats.winningStreak = 0;
      }

      return newStats;
    });
  };

  const resetStats = () => {
    setScores(initialScores);
    setStats(initialStats);
  };

  return {
    scores,
    stats,
    updateStats,
    resetStats,
  };
};