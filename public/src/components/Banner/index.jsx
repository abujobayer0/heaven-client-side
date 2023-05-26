import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-1 my-10 items-center justify-items-center md:grid-cols-2 relative w-full  rounded-lg bg-white">
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        className="md:w-full relative"
      >
        <img
          src="https://img.freepik.com/premium-photo/colorful-toys-collection-desk_488220-3796.jpg?w=2000"
          alt="Banner"
          className=" rounded-tl-lg rounded-bl-lg md:rounded-l-lg md:rounded-tl-none md:rounded-bl-none w-full "
        />
        <div className="absolute inset-0 bg-white bg-opacity-5"></div>
      </div>
      <div className="relative bg-gradient-to-b md:to-white  from-white to-red-100 w-full border-b-4 border-red-600  md:border-0 rounded-b-full pb-20  flex items-center justify-center py-6 md:py-10">
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="text-center md:text-right"
        >
          <h1 className="text-5xl flex flex-col font-semibold  md:text-5xl text-black">
            <span>Welcome to the </span>
            <span className="planetText font-semibold text-[#d7282b]">
              Heaven Toy Store
            </span>
          </h1>
          <Button
            type="submit"
            variant="contained"
            size="large"
            style={{
              marginTop: "16px",
              background: "#d7282b",
              borderRadius: "25px",
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
