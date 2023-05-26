import { Avatar, Box, Button, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { getAuth, signOut } from "firebase/auth";
import { styled } from "@mui/material/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import Badge from "@mui/material/Badge";
import app from "../../firebase.init";
import { motion } from "framer-motion";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
import logo from "../../assets/icon.png";
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [res, setRes] = useState(true);
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("User signed out successfully");
        localStorage.removeItem("photoUrl");
        localStorage.removeItem("username");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        toast.error("Error signing out"); // Show error notification
      });
  };
  const savedPhotoUrl = localStorage.getItem("photoUrl");
  const savedUsername = localStorage.getItem("username");

  const handleMenu = () => {
    setAnchorEl((p) => !p);
  };
  const currentRoute = useLocation();

  // Define a function to generate the title based on the current route
  const generateTitle = () => {
    switch (currentRoute.pathname) {
      case "/":
        return "Heaven ";
      case "/alltoys":
        return "Heaven | All Toys";
      case "/myToys":
        return "Heaven | My Toys";
      case "/addAToy":
        return "Heaven | Add A Toy";
      case "/blogs":
        return "Heaven | Blog";
      case "/toy/:id":
        return "Heaven | Toy Detail";
      case "/update/:id":
        return "Heaven | Update";
      case "/login":
        return "Heaven | Login";
      default:
        return "Heaven";
    }
  };
  return (
    <motion.header
      className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-white bg-red-600 text-sm py-4 md:py-2 dark:bg-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{generateTitle()}</title>
      </Helmet>
      <nav
        className="w-full bg-gradient-to-t md:from-red-500 md:to-red-500 rounded-lg  md:max-w-7xl mx-auto px-6 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex  items-center justify-between">
          <Link to={"/"}>
            <motion.a
              className="flex cursor-pointer justify-center items-center text-xl text-start font-semibold dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              HEAVEN <img src={logo} className="w-10" alt="logo" />
            </motion.a>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setRes((p) => !p)}
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-with-collapse"
              aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <motion.div
          id="navbar-with-collapse"
          className={`${
            res ? "hidden" : ""
          } bg-gradient-to-t from-red-500 p-4 m-2 to-red-500 rounded-lg md:rounded-none mt-4 basis-full grow sm:block`}
        >
          <motion.div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <NavLink
              to={"/"}
              className="font-medium text-white hover:text-[#fff] "
              aria-current="page"
            >
              Home
            </NavLink>
            <hr />
            <NavLink
              to={"/alltoys"}
              className="font-medium text-[#fff] hover:text-white "
            >
              All Toys
            </NavLink>
            <hr />
            {user && (
              <>
                <NavLink
                  to={"/myToys"}
                  className="font-medium text-[#fff] hover:text-white "
                >
                  My Toys
                </NavLink>
                <hr />
              </>
            )}
            {user && (
              <>
                <NavLink
                  to={"/addAToy"}
                  className="font-medium text-[#fff] hover:text-white "
                >
                  Add A Toy
                </NavLink>
                <hr />
              </>
            )}
            <NavLink
              to={"/blogs"}
              className="font-medium text-[#fff] hover:text-white "
            >
              Blogs
            </NavLink>
            <hr />
            {!user ? (
              <NavLink to={"/login"}>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#d7282b",
                    outline: "none",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#fff",
                      border: "none",
                      outline: "none",
                      // Define your hover styles here
                    },
                  }}
                >
                  <BiLogInCircle />
                  Login
                </Button>
              </NavLink>
            ) : (
              <Box>
                <Tooltip
                  title={user?.displayName || savedUsername}
                  placement="left"
                >
                  <StyledBadge
                    overlap="circular"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <div className="border-2 md:border-none border-white rounded-full md:p-0 p-1">
                      <Avatar
                        alt={user?.displayName || savedUsername}
                        src={`${user?.photoURL || savedPhotoUrl}`}
                      />
                    </div>
                  </StyledBadge>
                </Tooltip>
                <Menu
                  id="account-menu"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={anchorEl}
                  onClose={handleMenu}
                >
                  <MenuItem onClick={handleMenu}>
                    <Button
                      onClick={handleSignOut}
                      variant="outlined"
                      sx={{
                        backgroundColor: "#fff",
                        color: "#d7282b",
                        outline: "none",
                        border: "none",
                        fontSize: "14px",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#fff",
                          border: "none",
                          outline: "none",
                          // Define your hover styles here
                        },
                      }}
                    >
                      <BiLogInCircle />
                      Signout
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            )}{" "}
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default NavBar;
