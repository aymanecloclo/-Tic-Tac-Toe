import React, { useState, useRef } from 'react';
import { Board } from './Board';
import { GameInfo } from './GameInfo';
import { ScoreBoard } from './ScoreBoard';
import { useGameState } from '../../hooks/useGameState';
import { useGameStats } from '../../hooks/useGameStats';
import { FaMusic, FaPause, FaPlay } from "react-icons/fa";
export const TicTacToe: React.FC = () => {
  const {
    currentSquares,
    status,
    history,
    currentMove,
    winningLine,
    handlePlay,
    jumpTo,
    winner,
    resetGame,
  } = useGameState();

  const { scores, stats, updateStats, resetStats } = useGameStats();

  const handleGameEnd = (winner: string | null) => {
    updateStats(winner);
  };

  const handleReset = () => {
    resetGame();
    resetStats();
  };
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Function to toggle music
  const toggleMusic = () => {
    if (musicPlaying) {
      // Pause music
      audioRef.current?.pause();
    } else {
      // Play music
      audioRef.current?.play();
    }
    setMusicPlaying(!musicPlaying);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-300 to-blue-300 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tic Tac Toe
        </h1>
        
        <ScoreBoard scores={scores} stats={stats} />
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
            <div className="w-full lg:w-auto">
              <Board
                squares={currentSquares}
                onSquareClick={handlePlay}
                winningLine={winningLine}
              />
              <div className="mt-4 text-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
                >
                  Reset Game
                </button>
              </div>
            </div>
            
            <GameInfo
              status={status}
              history={history}
              currentMove={currentMove}
              onJumpTo={jumpTo}
              onGameEnd={handleGameEnd}
              winner={winner}
            />
          </div>
        </div>
      </div>
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-l-2xl shadow-2xl">
        <div className="text-white flex items-center justify-between gap-4">
          <FaMusic className="text-3xl cursor-pointer hover:text-gray-200" onClick={toggleMusic} />
          {musicPlaying ? (
            <FaPause className="text-3xl cursor-pointer hover:text-gray-200" onClick={toggleMusic} />
          ) : (
            <FaPlay className="text-3xl cursor-pointer hover:text-gray-200" onClick={toggleMusic} />
          )}
        </div>
        <p className="text-white text-sm mt-2 text-center">
          {musicPlaying ? "Musique en cours" : "Musique arrêtée"}
        </p>
      </div>

      {/* Audio Element for Music */}
      <audio ref={audioRef} loop>
        <source  src="/src/music/tic.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>

  );
};
