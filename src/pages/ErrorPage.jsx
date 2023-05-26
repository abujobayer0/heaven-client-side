import { Button, Container } from "@mui/material";
import Error from "../assets/errorImg.png";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Container
      sx={{
        display: "flex ",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {" "}
      <Link to={"/"}>
        <Button
          color="error"
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
          variant="outlined"
        >
          <ArrowBack></ArrowBack> Back to Home
        </Button>
      </Link>
      <img
        className="w-44 mt-20 md:mt-5 flex justify-center items-center  "
        src={Error}
        alt=""
      />
    </Container>
  );
};

export default ErrorPage;
