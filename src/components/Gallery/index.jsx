import { useEffect, useState } from "react";

import "./Gallery.css"; // Import the CSS file for styling
import Masonry from "react-masonry-css";
import AnimatedWrapper from "../AnimateWrapper";
import { LinearProgress } from "@mui/material";
import Icon from "../../assets/photo.png";
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    setIsData(true);
    fetch("https://heaven.onrender.com/gallery")
      .then((res) => res.json())
      .then((data) => {
        setIsData(false);
        setImages(data);
      });
  }, [images]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="gallery-container px-6 flex-col">
      <h1 className="fancyText text-[#d7282b] mt-10 text-[55px]">Gallery</h1>
      <p className="text-center mb-10 mt-5 text-gray-500 px-6">
        Step into our enchanting Toy Store Gallery, where imagination comes to
        life. Explore a delightful collection of toys, from timeless classics to
        cutting-edge creations. Rediscover the joy of play and embark
        <span
          className="border-b-4  border-red-600
        pb-2"
        >
          on unforgettable adventures!
        </span>
      </p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <AnimatedWrapper key={index}>
            <div className="gallery-item bg-gray-50">
              <img
                className="img-responsive p-2 shadow-lg rounded-xl"
                style={{ margin: "5px" }}
                src={`${image.url}`}
                loading="lazy"
                alt={`Image ${index}`}
              />
            </div>
          </AnimatedWrapper>
        ))}
      </Masonry>
      {images.length === 0 && (
        <div className="w-full flex-col flex justify-center items-center  py-44">
          <img src={Icon} alt="" className="w-20" />
          <h1 className="font-semibold text-gray-400">
            {isData ? "Loading..." : "You dont have any toys anymore."}
            {isData && <LinearProgress color="error" />}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Gallery;
