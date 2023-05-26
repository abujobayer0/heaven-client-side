import { Button, TextField } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToysRounded } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateToyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const uri = `https://heaven.onrender.com/update/${id}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const price = form.price.value;

    const quantity = form.quantity.value;
    const details = form.details.value;

    const updatedToy = {
      price,

      quantity,
      details,
    };
    try {
      fetch(uri, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedToy),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      toast.success("Updated Toy Successfuly");
    } catch (err) {
      console.log(err);
    } finally {
      form.reset();
      navigate("/myToys");
    }
  };

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
              label="Update Price"
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
              label="Update Available Quantity"
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
            label="Update Detail Description"
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
            UPDATE TOY <ToysRounded />
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateToyPage;
