import { Button, IconButton } from "@mui/material";
import PlayStore from "../../assets/google-play.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const AppCard = () => {
  return (
    <div className="w-full flex flex-col  items-center py-14 px-8 rounded-t-lg xl:border-2 ">
      <h1 className="text-red-600 text-center font-bold">Heaven Toy Planet</h1>
      <h2 className="text-3xl text-center md:text-4xl font-bold">
        Download Our Mobile App
      </h2>
      <Button
        variant="contained"
        style={{ marginTop: "30px", background: "#000" }}
      >
        <img src={PlayStore} className=" w-10" alt="" />
        <span className="flex justify-start items-start flex-col">
          <span className="uppercase text-[12px] md:text-xs">get it on</span>
          <span className="font-semibold md:text-lg">Google Play</span>
        </span>
      </Button>
      <h3 className="text-lg mt-10 rounded-b-xl py-2 border-red-600 border-b-4 custom font-bold">
        {" "}
        Follow Us
      </h3>
      <hr />
      <div className="flex my-4 justify-center items">
        <IconButton>
          <Facebook
            sx={{
              fontSize: 30,
              margin: "0 10px",
              color: "#333",
              cursor: "pointer",
            }}
          />
        </IconButton>
        <IconButton>
          <Twitter
            sx={{
              fontSize: 30,
              margin: " 10px",
              color: "#333",
              cursor: "pointer",
            }}
          />
        </IconButton>
        <IconButton>
          <Instagram
            sx={{
              fontSize: 30,
              margin: "0 10px",
              color: "#333",
              cursor: "pointer",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default AppCard;
