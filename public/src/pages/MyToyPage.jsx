import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Autocomplete,
  TextField,
  Pagination,
  Stack,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getAuth } from "firebase/auth";
import app from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Delete, Edit } from "@mui/icons-material";
import { toast } from "react-toastify";
import { FaBoxOpen, FaStar } from "react-icons/fa";
const MyToy = () => {
  const auth = getAuth(app);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [user] = useAuthState(auth);
  const [item, setItem] = useState(false);
  const [isData, setIsData] = useState(false);
  const [progress, setProgress] = useState(false);
  const [pagination, setPagination] = useState(true);
  const [sortedToys, setSortedToys] = useState([]);
  const uri = `https://heaven.onrender.com/user?email=${user.email}&&page=${page}`;
  useEffect(() => {
    setIsData(true);
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setSortedToys(data.result);
        console.log(data);
        setIsData(false);
        setCount(data.totalPages);
      });
  }, [page]);
  const handleDelete = (e) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this toy?"
    );
    if (confirmDelete) {
      try {
        const uri = `https://heaven.onrender.com/delete/${e}`;
        setItem((p) => !p);
        fetch(uri, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            setSortedToys((prevToys) =>
              prevToys.filter((toy) => toy._id !== e)
            );
            console.log(data);
          })
          .catch((error) => console.error("Error:", error));
      } catch (err) {
        console.log(err);
      } finally {
        toast.success("Successfully Deleted");
      }
    }
  };
  const options = ["ascending", "descending", "All Toys"];
  const [selectedSort, setSelectedSort] = useState("");
  const handleSort = (event, value) => {
    setSelectedSort(value);
    if (value) {
      try {
        setProgress(true);
        fetch(
          `https://heaven.onrender.com/toys?sort=${value}&&email=${user.email}`
        )
          .then((response) => response.json())
          .then((data) => {
            setSortedToys(data);
            setPagination(false);
            setProgress(false);
          })
          .catch((error) => {
            console.log("Error fetching sorted toys:", error);
          });
      } catch (err) {
        console.log(err);
      } finally {
        console.log("complete");
      }
    } else {
      fetch(uri)
        .then((res) => res.json())
        .then((data) => {
          setSortedToys(data.result);
          setCount(data.totalPages);
        });
      setPagination(true);
    }
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="w-full">
      {" "}
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <div className="flex  items-center">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            onChange={handleSort}
            options={options}
            value={selectedSort}
            sx={{ width: 200, margin: "20px" }}
            renderInput={(params) => (
              <TextField
                name="sort"
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
                {...params}
                label="Sort by"
              />
            )}
          />{" "}
          {progress && <CircularProgress color="error" />}
        </div>
        <Box width="100%" mx="auto">
          <TableContainer component={Paper}>
            <h1 className="px-6">
              <span>
                <li className="font-semibold text-lg list-none">
                  Total :{" "}
                  <span className="text-red-600">{sortedToys.length}</span>
                </li>
              </span>
              <span>
                <li className="font-semibold list-none text-lg">
                  Page : <span className="text-red-600">{page}</span>
                </li>
              </span>
            </h1>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    Photo
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    Seller
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    Toy Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    Rating
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    Quantity
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    Update
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    Delete
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#d7282b" }}>
                    View Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedToys.map((toy) => (
                  <TableRow key={toy._id}>
                    <TableCell>
                      <img src={toy.picture} className="w-10" alt="" />
                    </TableCell>
                    <TableCell>{toy.seller ? toy.seller : "N/A"}</TableCell>
                    <TableCell>{toy.name}</TableCell>
                    <TableCell>
                      <span className="text-red-500 font-semibold">
                        {toy.price} $
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="flex font-semibold justify-center gap-1  items-center">
                        {toy.rating ? toy.rating : "N/A"}
                        <FaStar className="text-yellow-500" />
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center font-semibold gap-2 text-gray-700">
                        {toy.quantity}
                        <FaBoxOpen className="text-green-500" />
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="small"
                        color="success"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        <Link to={`/update/${toy._id}`}>
                          <Edit />
                        </Link>
                      </Button>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        style={{
                          fontSize: "12px",
                        }}
                        onClick={() => handleDelete(toy._id)}
                      >
                        <Delete />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="large"
                        color="error"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        <Link to={`/toy/${toy._id}`}>View Details</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {sortedToys.length === 0 && (
            <div className="w-full flex-col flex justify-center items-center  py-44">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4302/4302089.png"
                alt=""
                className="w-20"
              />
              <h1 className="font-semibold text-gray-400">
                {isData ? "Loading..." : "You dont have any toys anymore."}
                {isData && <LinearProgress color="error" />}
              </h1>
            </div>
          )}
        </Box>
        {pagination && (
          <div className="w-full flex justify-center items-center">
            <Stack mt={5} spacing={2}>
              <Pagination
                count={count}
                page={page}
                color="error"
                onChange={handleChange}
              />
            </Stack>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyToy;
