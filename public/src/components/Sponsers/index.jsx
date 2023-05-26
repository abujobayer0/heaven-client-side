import { useEffect, useState } from "react";
import AnimatedWrapper from "../AnimateWrapper";
import { LinearProgress } from "@mui/material";
import IconRetailers from "../../assets/retailer.png";
import IconCargo from "../../assets/cargo-truck.png";
const Sponsers = () => {
  const [retailers, setRetailers] = useState([]);
  const [isRData, setIsRData] = useState(false);
  const [isPData, setIsPData] = useState(false);
  useEffect(() => {
    setIsRData(true);
    fetch("https://heaven.onrender.com/retailers")
      .then((res) => res.json())
      .then((data) => {
        setRetailers(data[0].urls);
        setIsRData(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const [onlinePartners, setOnlinePartners] = useState([]);

  useEffect(() => {
    setIsPData(true);
    fetch("https://heaven.onrender.com/online-partners")
      .then((res) => res.json())
      .then((data) => {
        setOnlinePartners(data[0].urls);
        setIsPData(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="fancyText text-[#d7282b] mt-10 text-[55px]">Retailers</h1>
      <div className="md:flex grid grid-cols-2 justify-items-center   w-full items-center px-0 lg:px-0 md:my-10 md:px-12 flex-col md:flex-row  justify-around">
        {retailers &&
          retailers.map((img, index) => (
            <AnimatedWrapper key={index}>
              <img
                key={index}
                className="w-24 scale-95 mx-auto hover:scale-105 transition-all ease-in-out cursor-pointer md:w-32 lg:w-44 "
                src={img.url}
                loading="lazy"
                alt="retailers"
                onContextMenu={handleContextMenu}
              />
            </AnimatedWrapper>
          ))}
      </div>
      {retailers.length === 0 && (
        <div className="w-full flex-col flex justify-center items-center  py-44">
          <img src={IconRetailers} alt="" className="w-20" />
          <h1 className="font-semibold text-gray-400">
            {isRData ? "Loading..." : "You dont have any toys anymore."}
            {isRData && <LinearProgress color="error" />}
          </h1>
        </div>
      )}
      <h1 className="fancyText  text-[#d7282b] mt-10 text-[55px]">
        Online Partners
      </h1>
      <div className="grid grid-cols-2 justify-items-center md:flex  w-full items-center px-0 lg:px-0 my-10 md:px-12 flex-col md:flex-row  justify-between md:justify-around">
        {onlinePartners &&
          onlinePartners.map((img, index) => (
            <AnimatedWrapper key={index}>
              <img
                className="w-24 mx-auto scale-95 hover:scale-105 transition-all ease-in-out cursor-pointer md:w-32 lg:w-44 "
                src={img.url}
                alt="retailers"
                loading="lazy"
                onContextMenu={handleContextMenu}
              />
            </AnimatedWrapper>
          ))}
      </div>
      {onlinePartners.length === 0 && (
        <div className="w-full flex-col flex justify-center items-center  pt-20 pb-44 ">
          <img src={IconCargo} alt="" className="w-20" />
          <h1 className="font-semibold text-gray-400">
            {isPData ? "Loading..." : "You dont have any toys anymore."}
            {isPData && <LinearProgress color="error" />}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Sponsers;
