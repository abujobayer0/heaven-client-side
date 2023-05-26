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
} from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

import { FaBoxOpen, FaStar } from "react-icons/fa";

const ToyTable = ({ toys }) => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const handleToast = () => {
    if (!user) {
      toast.warning("You Need To Login For View Details");
    }
  };
  return (
    <Box width="100%" sx={{ minHeight: "30vh" }} mx="auto">
      <TableContainer component={Paper}>
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
                Total {toys.length}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {toys.map((toy) => (
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
                  <span className="flex font-semibold justify-center gap-1 items-center">
                    {toy.rating ? toy.rating : "N/A"}
                    <FaStar className="text-yellow-500" />
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center font-semibold gap-2 text-gray-700">
                    {toy.quantity} <FaBoxOpen className="text-green-500" />{" "}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="large"
                    color="error"
                    style={{
                      fontSize: "12px",
                    }}
                    onClick={handleToast}
                  >
                    <Link to={`/toy/${toy._id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ToyTable;
