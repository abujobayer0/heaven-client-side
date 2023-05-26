import { useEffect, useState } from "react";
import ToyTable from "../components/ToyTable";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { LoadingButton } from "@mui/lab";
import { FaPlusCircle } from "react-icons/fa";
import { LinearProgress } from "@mui/material";

const AllToyPage = () => {
  const [toys, setToys] = useState([]);
  const [visibleToys, setVisibleToys] = useState(20);
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(true);
  const [isData, setIsData] = useState(false);
  function handleClick() {
    setLoading(true);
    setVisibleToys((prevVisibleToys) => prevVisibleToys + 20);
  }

  useEffect(() => {
    setIsData(true);
    fetch(`https://heaven.onrender.com/alltoys?limit=${visibleToys}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
        setIsData(false);
      })
      .catch((error) => {
        console.log("Error fetching toys:", error);
        setLoading(false);
      });
  }, [visibleToys]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    if (search !== "") {
      try {
        const response = await fetch(
          `https://heaven.onrender.com/search?name=${search}`
        );
        const data = await response.json();
        setToys(data);
        console.log(data);
        setButton(false);
      } catch (err) {
        console.log(err);
      } finally {
        form.reset();
      }
    } else {
      fetch(`https://heaven.onrender.com/alltoys?limit=${visibleToys}`)
        .then((response) => response.json())
        .then((data) => {
          setToys(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching toys:", error);
          setLoading(false);
          setButton(true);
        });
    }
  };

  return (
    <div className="w-full">
      <NavBar></NavBar>
      <div className="max-w-7xl flex flex-col mx-auto items-center justify-center">
        <div>
          <form
            onSubmit={handleSearch}
            className=" bg-gray-100 flex mt-5 justify-start items-start "
          >
            <div className="flex bg-gray-100 p-3  w-full md:w-72  rounded-l-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                name="search"
                placeholder="Toy name or keyword..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#d7282b] py-3 px-5 text-white font-semibold rounded-r-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            >
              <span>Search</span>
            </button>
          </form>
        </div>
        <div className="flex mb-5 justify-start w-full  items-start"></div>
        <ToyTable toys={toys} />{" "}
        {toys.length === 0 && (
          <div className="w-full flex-col flex justify-center items-center  pb-44">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4302/4302089.png"
              alt=""
              className="w-20"
            />
            <h1 className="font-semibold text-gray-400">
              {isData ? `Loading...` : "No Data Found"}
              {isData && <LinearProgress color="error" />}
            </h1>{" "}
          </div>
        )}
        {button && (
          <span>
            {!isData && (
              <LoadingButton
                size="small"
                onClick={handleClick}
                loading={loading}
                loadingPosition="start"
                fullWidth
                startIcon={<FaPlusCircle />}
                variant="contained"
                color="error"
                style={{ marginTop: "16px" }}
              >
                <span>Load More</span>
              </LoadingButton>
            )}
          </span>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllToyPage;
