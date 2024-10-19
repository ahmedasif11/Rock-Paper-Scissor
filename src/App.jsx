import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import GameControls from "./components/GameControls";
import MoveSelector from "./components/MoveSelector";
import MoveDisplay from "./components/MoveDisplay";
import ResultDisplay from "./components/ResultDisplay";
import Scoreboard from "./components/ScoreBoard";

const Game = () => {
  const [scores, setScores] = useState({ wins: 0, losses: 0, ties: 0 });
  const [result, setResult] = useState("");
  const [playerMove, setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [autoplay, setAutoplay] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [resultAnimation, setResultAnimation] = useState("");
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("scores"));
    if (savedScores) setScores(savedScores);
  }, []);

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  const playGame = (selected) => {
    const num = Math.floor(Math.random() * 3) + 1;
    const moves = ["Rock", "Paper", "Scissors"];
    setPlayerMove(moves[selected - 1]);
    setComputerMove(moves[num - 1]);

    let resultText = "";
    if (selected === num) {
      setScores((prev) => ({ ...prev, ties: prev.ties + 1 }));
      resultText = "Game Ties!";
      setResultAnimation("fade");
    } else if (
      (selected === 1 && num === 3) ||
      (selected === 2 && num === 1) ||
      (selected === 3 && num === 2)
    ) {
      setScores((prev) => ({ ...prev, wins: prev.wins + 1 }));
      resultText = "You Win!";
      setResultAnimation("slide-in");
    } else {
      setScores((prev) => ({ ...prev, losses: prev.losses + 1 }));
      resultText = "You Lose!";
      setResultAnimation("slide-in");
    }

    setResult(resultText);
    setTimeout(() => setResultAnimation(""), 2000);
  };

  const handleAutoplay = () => {
    if (autoplay) {
      clearInterval(intervalId);
      setAutoplay(false);
      setIntervalId(null);
    } else {
      const id = setInterval(() => {
        const num = Math.floor(Math.random() * 3) + 1;
        playGame(num);
      }, 1000);
      setAutoplay(true);
      setIntervalId(id);
    }
  };

  const resetScores = () => {
    setScores({ wins: 0, losses: 0, ties: 0 });
    setResult("");
    setPlayerMove("");
    setComputerMove("");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      } h-screen transition-all duration-500 animate-page`}
    >
      <Header />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MoveSelector playGame={playGame} />
      <hr className="my-5 w-1/2 border-gray-600" />
      <MoveDisplay playerMove={playerMove} computerMove={computerMove} />
      <ResultDisplay result={result} resultAnimation={resultAnimation} />
      <Scoreboard scores={scores} />
      <GameControls
        handleAutoplay={handleAutoplay}
        resetScores={resetScores}
        autoplay={autoplay}
      />
    </div>
  );
};

export default Game;
