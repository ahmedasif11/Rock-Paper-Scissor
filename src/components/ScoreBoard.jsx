const Scoreboard = ({ scores }) => {
  return (
    <p className="text-lg">
      Wins: {scores.wins}, Losses: {scores.losses}, Ties: {scores.ties}
    </p>
  );
};

export default Scoreboard;
