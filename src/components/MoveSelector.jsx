import rockImg from "../Images/rock-emoji.png";
import paperImg from "../Images/paper-emoji.png";
import scissorsImg from "../Images/scissors-emoji.png";

const MoveSelector = ({ playGame }) => {
  const moves = [rockImg, paperImg, scissorsImg];

  return (
    <div className="flex space-x-5 mt-10">
      {moves.map((img, index) => (
        <div
          key={index}
          onClick={() => playGame(index + 1)}
          className="cursor-pointer transition-transform transform hover:scale-110 p-5 bg-gray-700 rounded-full shadow-lg hover:shadow-xl duration-300"
        >
          <img
            src={img}
            alt={["Rock", "Paper", "Scissors"][index]}
            className="w-16 h-16 image-bounce"
          />
        </div>
      ))}
    </div>
  );
};

export default MoveSelector;
