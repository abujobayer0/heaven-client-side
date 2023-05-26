import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard";
import { useEffect, useState } from "react";
import AnimatedWrapper from "../AnimateWrapper";
import { LinearProgress } from "@mui/material";
import Icon from "../../assets/teddy-bear.png";
import IconCar from "../../assets/rc.png";
import IconDollHouse from "../../assets/doll-house.png";
const TabsComponent = () => {
  const [teddyBear, setTeddyBear] = useState([]);
  const [dinosour, setDinosur] = useState([]);
  const [unicorn, setUnicorn] = useState([]);
  const [sportCar, setSportCar] = useState([]);
  const [fireTruck, setFireTruck] = useState([]);
  const [policeCar, setPoliceCar] = useState([]);
  const [barbie, setBarbie] = useState([]);
  const [drawingAndColoring, setDrawingAndColoring] = useState([]);
  const [diyCraft, setDiyCraft] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    setIsData(true);
    fetch("https://heaven.onrender.com/all")
      .then((res) => res.json())
      .then((data) => {
        setTeddyBear(data.filter((i) => i.subCategory === "Teddy Bear"));
        setDinosur(data.filter((i) => i.subCategory === "Dinosaur & Horse"));
        setUnicorn(data.filter((i) => i.subCategory === "Unicorn & Cat"));
        setSportCar(data.filter((i) => i.subCategory === "Sport Car Toys"));
        setFireTruck(
          data.filter((i) => i.subCategory === "Mini Fire Truck Toys")
        );
        setPoliceCar(data.filter((i) => i.subCategory === "Police Car Toys"));

        setBarbie(data.filter((i) => i.subCategory === "Barbie Doll Toys"));
        setDrawingAndColoring(
          data.filter((i) => i.subCategory === "Drawing and Coloring Sets")
        );
        setDiyCraft(data.filter((i) => i.subCategory === "DIY Craft Kits"));
        setIsData(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-[55px] fancyText text-center mt-10  text-[#d7282b]">
        Shop By Category
      </h1>
      <p className="text-center mb-10 mt-5 text-gray-500 px-6">
        Unleash the ultimate shopping experience! Browse through diverse
        categories, from fashion to electronics, and find precisely what you
        desire. Enhance your journey and uncover your ideal products
        effortlessly.{" "}
        <span
          className="border-b-4  border-red-600
        pb-2"
        >
          Let the exploration begin!
        </span>
      </p>
      <div className="p-4">
        <Tabs>
          <TabList className="flex gap-2">
            <Tab
              className="px-4 py-2 cursor-pointer rounded-lg bg-gray-200"
              selectedClassName="bg-red-600 outline-0 text-white"
            >
              Animal Toys
            </Tab>
            <Tab
              className="px-4 py-2 cursor-pointer rounded-lg bg-gray-200"
              selectedClassName="bg-green-400 outline-0 text-black"
            >
              Toy Cars
            </Tab>
            <Tab
              className="px-4 py-2 cursor-pointer rounded-lg bg-gray-200"
              selectedClassName="bg-yellow-400 outline-0 text-black"
            >
              Arts and Crafts Toys
            </Tab>
          </TabList>

          <TabPanel>
            <Tabs>
              <TabList className="flex gap-2 mt-4">
                <Tab
                  className="cursor-pointer  bg-transparent px-4 rounded-lg py-2 outline-0 border-2 text-black"
                  selectedClassName=" border-red-500 border-2 text-black rounded-lg"
                >
                  Teddy Bear
                </Tab>
                <Tab
                  className="cursor-pointer  bg-transparent px-4 py-2 rounded-lg outline-0 border-2 text-black"
                  selectedClassName=" border-red-500 border-2 text-black rounded-lg"
                >
                  Dinosaur & Horse
                </Tab>
                <Tab
                  className=" cursor-pointer bg-transparent px-4 py-2 rounded-lg outline-0 border-2 text-black"
                  selectedClassName=" border-red-500 border-2   text-black rounded-lg"
                >
                  Unicorn & Cat
                </Tab>
              </TabList>
              <TabPanel>
                <h2 className="text-xl mt-4">
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {teddyBear?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          isRed
                          picture={toy.picture}
                          name={toy.name}
                          id={toy._id}
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
              {teddyBear.length === 0 && (
                <div className="w-full flex-col flex justify-center items-center  py-44">
                  <img src={Icon} alt="" className="w-20" />
                  <h1 className="font-semibold text-gray-400">
                    {isData ? "Loading..." : "No Data"}
                    {isData && <LinearProgress color="error" />}
                  </h1>
                </div>
              )}
              <TabPanel>
                <h2 className="text-xl mt-4">
                  {" "}
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {dinosour?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          picture={toy.picture}
                          isRed
                          name={toy.name}
                          id={toy._id}
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
              <TabPanel>
                <h2 className="text-xl mt-4">
                  {" "}
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {unicorn?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          picture={toy.picture}
                          isRed
                          name={toy.name}
                          id={toy._id}
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex gap-2 mt-4">
                <Tab
                  className=" cursor-pointer bg-transparent px-4 py-2 outline-0 rounded-lg border-2 text-black"
                  selectedClassName=" border-green-500 border-2 text-black rounded-lg"
                >
                  Sport Car Toys
                </Tab>
                <Tab
                  className="cursor-pointer  bg-transparent px-4 py-2 outline-0 rounded-lg border-2 text-black"
                  selectedClassName=" border-green-500 border-2 text-black  rounded-lg"
                >
                  Mini Fire Truck Toys
                </Tab>
                <Tab
                  className=" cursor-pointer bg-transparent px-4 py-2 outline-0 rounded-lg border-2 text-black"
                  selectedClassName=" border-green-500 border-2 text-black rounded-lg"
                >
                  Police Car Toys
                </Tab>
              </TabList>
              <TabPanel>
                <h2 className="text-xl mt-4">
                  {" "}
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {sportCar?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          isGreen
                          picture={toy.picture}
                          name={toy.name}
                          id={toy._id}
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
              {sportCar.length === 0 && (
                <div className="w-full flex-col flex justify-center items-center  py-44">
                  <img src={IconCar} alt="" className="w-20" />
                  <h1 className="font-semibold text-gray-400">
                    {isData ? "Loading..." : "No Data"}
                    {isData && <LinearProgress color="error" />}
                  </h1>
                </div>
              )}
              <TabPanel>
                <h2 className="text-xl mt-4">
                  {" "}
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {fireTruck?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          isGreen
                          picture={toy.picture}
                          name={toy.name}
                          id={toy._id}
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
              <TabPanel>
                <h2 className="text-xl mt-4">
                  {" "}
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {policeCar?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          isGreen
                          picture={toy.picture}
                          name={toy.name}
                          id={toy._id}
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex gap-2 mt-4">
                <Tab
                  className=" cursor-pointer bg-transparent px-4 py-2 outline-0 rounded-lg border-2 text-black"
                  selectedClassName=" border-yellow-500 border-2 text-black rounded-lg"
                >
                  Barbie Doll Toys
                </Tab>
                <Tab
                  className=" cursor-pointer bg-transparent px-4 py-2 outline-0 rounded-lg border-2 text-black"
                  selectedClassName=" border-yellow-500 border-2 text-black  rounded-lg"
                >
                  Drawing and Coloring Sets
                </Tab>
                <Tab
                  className="cursor-pointer  bg-transparent px-4 py-2 outline-0 rounded-lg border-2 text-black"
                  selectedClassName=" border-yellow-500 border-2 text-black rounded-lg"
                >
                  DIY Craft Kits
                </Tab>
              </TabList>
              <TabPanel>
                <h2 className="text-xl mt-4">
                  {" "}
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {barbie?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          isYellow
                          picture={toy.picture}
                          name={toy.name}
                          id={toy._id}
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
              {barbie.length === 0 && (
                <div className="w-full flex-col flex justify-center items-center  py-44">
                  <img src={IconDollHouse} alt="" className="w-20" />
                  <h1 className="font-semibold text-gray-400">
                    {isData ? "Loading..." : "No Data"}
                    {isData && <LinearProgress color="error" />}
                  </h1>
                </div>
              )}
              <TabPanel>
                <h2 className="text-xl mt-4">
                  {" "}
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {drawingAndColoring?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          isYellow
                          picture={toy.picture}
                          name={toy.name}
                          id={toy._id}
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
              <TabPanel>
                <h2 className="text-xl mt-4">
                  {" "}
                  <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {diyCraft?.map((toy, index) => (
                      <AnimatedWrapper key={index}>
                        <ToyCard
                          picture={toy.picture}
                          name={toy.name}
                          id={toy._id}
                          isYellow
                          price={toy.price}
                          rating={toy.rating}
                        />
                      </AnimatedWrapper>
                    ))}
                  </div>
                </h2>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default TabsComponent;
