export type SquareValue = 'X' | 'O' | null;
export type BoardType = SquareValue[];
export type GameHistory = BoardType;

export interface PlayerScore {
  X: number;
  O: number;
  draws: number;
}

export interface GameStats {
  totalGames: number;
  winningStreak: number;
  currentStreak: string | null;
}