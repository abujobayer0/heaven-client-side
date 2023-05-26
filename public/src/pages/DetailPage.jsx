import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Done, Email, ShoppingCart, ToysOutlined } from "@mui/icons-material";
import { Button, LinearProgress } from "@mui/material";
import { BiUser } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import HotCollection from "../components/HotCollection";
import Icon from "../assets/photo.png";
const DetailPage = () => {
  const { id } = useParams();

  const [toy, setToy] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    setIsData(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`https://heaven.onrender.com/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setIsData(false);
      });
  }, [id]);
  const stars = [];

  const renderRatingStars = () => {
    const stars = [];

    for (let i = 0; i < toy.rating; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < toy.rating ? "text-yellow-500" : "text-gray-400"}
        />
      );
    }

    return stars;
  };

  return (
    <div className="w-full">
      <NavBar />
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full flex justify-center items-center flex-col border-2 rounded-lg p-2 shadow-sm">
            <img src={toy.picture} className="w-full  " alt="" />
            {toy.length === 0 && (
              <div className="w-full  flex-col flex justify-center items-center mx-auto py-16 ">
                <img src={Icon} alt="" className="w-20" />
                <h1 className="font-semibold text-gray-400">
                  {isData ? "Loading..." : "You dont have any toys anymore."}
                  {isData && <LinearProgress color="error" />}
                </h1>
              </div>
            )}
          </div>
          <div className="p-4 flex text-gray-800 flex-col gap-2">
            <h1 className="text-2xl md:text-3xl  font-semibold">{toy?.name}</h1>
            <h2 className="text-xl md:text-2xl  ">
              Price:
              <span className="text-red-600 font-bold px-2">${toy.price}</span>
            </h2>
            <h3 className="font-semibold flex gap-2">
              <Done sx={{ color: "#d7282b" }} />
              In Stock <span className="text-red-600">{toy.quantity}</span>
              <ToysOutlined />
            </h3>
            <h3 className="font-semibold flex gap-2 items-center ">
              <Email sx={{ color: "#d7282b" }} />
              Email:
              <span className="text-red-600">
                {toy.email ? toy.email : "N/A"}
              </span>
            </h3>
            <h3 className="font-semibold flex gap-2 items-center ">
              <BiUser style={{ color: "#d7282b" }} />
              Seller:
              <span className="text-red-600">
                {toy.seller ? toy.seller : "N/A"}
              </span>
            </h3>
            <div className="flex items-center text-gray-700 mb-2">
              <span className="mr-1 font-semibold">Rating:</span>
              {renderRatingStars()}
            </div>
            <div className="flex items-center text-gray-700 text-xs mb-2">
              <span className="mr-1 font-semibold">Category:</span>
              {toy.subCategory ? toy.subCategory : "No Sub category"}
            </div>
            <div className="w-full h-16 flex justify-center items-center border-red-100 rounded-lg bg-red-50 border-2">
              <h1 className="text-red-600 planetText font-semibold">
                Delivery :{" "}
                <span className="text-green-600 planetText">Free!</span>
              </h1>
            </div>
            <Button
              variant="outlined"
              size="large"
              color="error"
              sx={{ fontWeight: "600" }}
              className="w-full  px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Buy <ShoppingCart />
            </Button>
          </div>
        </div>
        <h1 className="text-3xl fancyText text-red-600 border-b-4 border-red-600  p-4 text-center">
          Description
        </h1>
        <article className="text-start newText mt-5 mb-10  text-gray-700">
          {toy.details ? toy.details : <h1>N/A</h1>}
        </article>
        <HotCollection />
      </div>

      <Footer />
    </div>
  );
};

export default DetailPage;
