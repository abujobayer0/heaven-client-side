import {
  Autocomplete,
  Button,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToysRounded } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebase.init";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const AddAToyPage = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const picture = form.photo.value;
    const name = form.name.value;
    const seller = form.sellerName.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const email = form.email.value;
    const newToy = {
      picture,
      email,
      name,
      seller,
      subCategory,
      price,
      rating,
      quantity,
      details,
    };
    try {
      fetch("https://heaven.onrender.com/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newToy),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      toast.success("Added Toy Successfully");
      navigate("/myToys");
    } catch (err) {
      console.log(err);
    } finally {
      form.reset();
    }
  };

  const [isAutocompleteEnabled, setIsAutocompleteEnabled] = useState(true);

  const handleSwitchChange = (event) => {
    setIsAutocompleteEnabled(event.target.checked);
  };
  const savedUsername = localStorage.getItem("username");
  const options = [
    "Teddy Bear",
    "Dinosaur & Horse",
    "Unicorn & Cat",
    "Sport Car Toys",
    "Mini Fire Truck Toys",
    "Police Car Toys",
    "Barbie Doll Toys",
    "Drawing and Coloring Sets",
    "DIY Craft Kits",
  ];
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#d7282b" : "#d7282b",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <div className="w-full">
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            margin: "auto",
            padding: "20px",
          }}
        >
          <div className="flex w-full gap-2 flex-col md:flex-row">
            <TextField
              label="Picture URL of the toy"
              fullWidth
              required
              name="photo"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#d7282b",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d7282b",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                  color: "#d7282b",
                },
              }}
              margin="normal"
            />
            <TextField
              label="Name"
              fullWidth
              name="name"
              required
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#d7282b",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d7282b",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                  color: "#d7282b",
                },
              }}
              margin="normal"
            />
            <TextField
              label="Seller Name"
              fullWidth
              name="sellerName"
              required
              defaultValue={user.displayName ? user.displayName : savedUsername}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#d7282b",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d7282b",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                  color: "#d7282b",
                },
              }}
              margin="normal"
            />
          </div>
          <div className="flex flex-col md:flex-col gap-2">
            <TextField
              label="Seller Email"
              fullWidth
              defaultValue={user.email ? user.email : ""}
              name="email"
              required
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#d7282b",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d7282b",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                  color: "#d7282b",
                },
              }}
              margin="normal"
            />
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  defaultChecked={isAutocompleteEnabled}
                  onChange={handleSwitchChange}
                />
              }
              label="Add toy on home page  sub-category"
            />
            <Autocomplete
              fullWidth
              disabled={!isAutocompleteEnabled}
              options={options}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Sub-category"
                  fullWidth
                  name="subCategory"
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#d7282b",
                      },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#d7282b",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root":
                      {
                        color: "#d7282b",
                      },
                  }}
                  margin="normal"
                />
              )}
            />
          </div>
          <div className="flex w-full gap-2 flex-col md:flex-row">
            <TextField
              label="Price"
              type="number"
              fullWidth
              name="price"
              required
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#d7282b",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d7282b",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                  color: "#d7282b",
                },
              }}
              margin="normal"
            />
            <TextField
              label="Rating"
              type="number"
              fullWidth
              name="rating"
              required
              inputProps={{
                max: 5,
              }}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#d7282b",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d7282b",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                  color: "#d7282b",
                },
              }}
              margin="normal"
            />
            <TextField
              label="Available Quantity"
              type="number"
              fullWidth
              name="quantity"
              required
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#d7282b",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d7282b",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                  color: "#d7282b",
                },
              }}
              margin="normal"
            />
          </div>

          <TextField
            label="Detail Description"
            multiline
            rows={4}
            fullWidth
            name="details"
            required
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#d7282b",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#d7282b",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                color: "#d7282b",
              },
            }}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              alignSelf: "flex-end",
              gap: "10px",
              backgroundColor: "#d7282b",
              "&:hover": {
                backgroundColor: "#9c1e20",
              },
            }}
          >
            ADD TOY <ToysRounded />
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddAToyPage;
