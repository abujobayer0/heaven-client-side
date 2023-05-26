import { useEffect, useState } from "react";
import SmallCard from "../SmallCard";
import AppCard from "../AppCard";
import AnimatedWrapper from "../AnimateWrapper";
import { LinearProgress } from "@mui/material";
import IconProduct from "../../assets/product.png";
import IconGraph from "../../assets/graph.png";
const HotCollection = () => {
  const [featuredCollection, setFeaturedCollection] = useState([]);
  const [trandingCollection, setTrandingCollection] = useState([]);
  const [isData, setIsData] = useState(false);
  const [isData2, setIsData2] = useState(false);
  useEffect(() => {
    setIsData(true);
    fetch("https://heaven.onrender.com/all")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedCollection(data);
        setIsData(false);
      });
  }, []);
  useEffect(() => {
    setIsData2(true);
    fetch("https://heaven.onrender.com/all")
      .then((res) => res.json())
      .then((data) => {
        setTrandingCollection(data);
        setIsData2(false);
      });
  }, []);
  return (
    <div className="w-full px-6 border-t-2 grid grid-cols-1 items-end xl:grid-cols-2">
      <div className="flex flex-col justify-between items-start lg:flex-row gap-4 ">
        <div className="w-full xl:w-auto ">
          <h1 className="uppercase text-2xl flex gap-2 my-10">
            <span className="border-red-600  border-b-4">featured</span>{" "}
            products
          </h1>
          <div className="flex  flex-col gap-2">
            {featuredCollection.slice(0, 3).map((item, index) => (
              <SmallCard
                key={index}
                img={item.picture}
                id={item._id}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>{" "}
          {featuredCollection.length === 0 && (
            <div className="w-full flex-col flex justify-center items-center mx-auto py-16 ">
              <img src={IconProduct} alt="" className="w-20" />
              <h1 className="font-semibold text-gray-400">
                {isData ? "Loading..." : "You dont have any toys anymore."}
                {isData && <LinearProgress color="error" />}
              </h1>
            </div>
          )}
        </div>
        <div className="w-full xl:w-auto">
          <h1 className="uppercase text-2xl gap-2 flex my-10">
            <span className="border-red-600 border-b-4">trending</span> products
          </h1>
          <div className="flex  flex-col gap-2">
            {trandingCollection.slice(3, 6).map((item, index) => (
              <SmallCard
                key={index}
                img={item.picture}
                name={item.name}
                id={item._id}
                price={item.price}
              />
            ))}
          </div>
          {trandingCollection.length === 0 && (
            <div className="w-full flex-col flex justify-center items-center mx-auto py-16 ">
              <img src={IconGraph} alt="" className="w-20" />
              <h1 className="font-semibold text-gray-400">
                {isData2 ? "Loading..." : "You dont have any toys anymore."}
                {isData2 && <LinearProgress color="error" />}
              </h1>
            </div>
          )}
        </div>
      </div>
      <AnimatedWrapper>
        <div className="items-end  mt-10 xl:mt-0 xl:border-t-0 border-t-4  border-red-600 rounded-full pt-2 w-full justify-end flex">
          <AppCard />
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default HotCollection;
