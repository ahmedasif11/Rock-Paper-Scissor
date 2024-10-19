const ResultDisplay = ({ result, resultAnimation }) => {
  return (
    <p
      className={`text-2xl my-5 font-bold ${resultAnimation} ${
        result.includes("Win")
          ? "text-green-400"
          : result.includes("Lose")
          ? "text-red-400"
          : "text-yellow-400"
      }`}
    >
      {result}
    </p>
  );
};

export default ResultDisplay;
