const GameControls = ({ playGame, handleAutoplay, resetScores, autoplay }) => {
  return (
    <div className="flex space-x-5 mt-5 text-white">
      <button
        onClick={resetScores}
        className="p-2 bg-red-600 rounded hover:bg-red-500 transition duration-300"
      >
        Reset Score
      </button>
      <button
        onClick={handleAutoplay}
        className={`p-2 ${
          autoplay ? "bg-red-600" : "bg-green-600"
        } rounded hover:bg-green-500 transition duration-300`}
      >
        {autoplay ? "Stop" : "Auto Play"}
      </button>
    </div>
  );
};

export default GameControls;
