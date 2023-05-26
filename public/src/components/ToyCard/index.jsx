import { Button } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import app from "../../firebase.init";
const ToyCard = ({
  picture,
  name,
  price,
  rating,
  isYellow,
  isGreen,
  id,
  isRed,
}) => {
  const renderRatingStars = () => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-400"}
        />
      );
    }

    return stars;
  };
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const handleToast = () => {
    if (!user) {
      toast.warning("You Need To Login For View Details");
    }
  };
  return (
    <div
      className={`max-w-sm scale-95 hover:scale-100 rounded flex flex-col justify-center mx-auto items-start ${
        isGreen
          ? "border-green-500"
          : isYellow
          ? "border-yellow-500"
          : "border-red-600"
      } border-2 overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300`}
    >
      <img
        src={picture}
        alt={name}
        loading="lazy"
        className="w-72 mx-auto md:w-full scale-95 hover:scale-100 transition-all ease-in-out rounded-lg p-2 shadow-sm  md:h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div
          className={`font-bold ${
            isGreen
              ? "text-green-500"
              : isYellow
              ? "text-yellow-500"
              : "text-red-600"
          } text-lg mb-2`}
        >
          {`${name.length > 30 ? name.slice(0, 30) + "..." : name}`}
        </div>
        <div className="text-gray-700 mb-2">Price: ${price}</div>
        <div className="flex items-center text-gray-700 mb-2">
          <span className="mr-1">Rating:</span>
          {renderRatingStars()}
        </div>
      </div>
      <div className="px-6 mx-auto pb-4">
        <Button
          variant="contained"
          size="large"
          style={{
            marginTop: "16px",
            background: isYellow ? "#eab308" : isGreen ? "#22c55e" : "#d7282b",
          }}
        >
          <Link to={`/toy/${id}`} onClick={handleToast}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ToyCard;
