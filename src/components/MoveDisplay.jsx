import rockImg from "../Images/rock-emoji.png";
import paperImg from "../Images/paper-emoji.png";
import scissorsImg from "../Images/scissors-emoji.png";

const MoveDisplay = ({ playerMove, computerMove }) => {
  const moveImages = {
    Rock: rockImg,
    Paper: paperImg,
    Scissors: scissorsImg,
  };

  return (
    <div className="flex items-center">
      {playerMove && (
        <img
          src={moveImages[playerMove]}
          alt={playerMove}
          className="w-16 h-16 image-fade"
        />
      )}
      <p className="mx-5 text-lg">{playerMove ? "VS" : ""}</p>
      {computerMove && (
        <img
          src={moveImages[computerMove]}
          alt={computerMove}
          className="w-16 h-16 image-fade"
        />
      )}
    </div>
  );
};

export default MoveDisplay;
