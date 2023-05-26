import Footer from "../Footer";
import NavBar from "../NavBar";
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const auth = getAuth(app);
const LoginPage = () => {
  const provider = new GoogleAuthProvider();
  const [isLogin, setLogin] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location.state.from || "/");
        toast.success("Google Sign Up Successful");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error signing in with Google");
      });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const email = form.regEmail.value;
    const password = form.regPassword.value;
    const photo = form.photo.value;

    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const loggedUser = res.user;
          console.log(loggedUser);
          navigate(location.state.from || "/");
          localStorage.setItem("photoUrl", photo);
          localStorage.setItem("username", name);
          toast.success("Registration Successful");
        })
        .catch((error) => {
          console.error("Error adding user data: ", error);
          toast.error("Error registering user");
        });
    } catch (err) {
      console.log(err);
    } finally {
      form.reset();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          toast.success("Login Successful");
          navigate(location.state.from || "/");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Invalid credentials");
        });
    } catch (err) {
      console.log(err);
    } finally {
      form.reset();
    }
  };

  return (
    <>
      <NavBar />
      {isLogin ? (
        <Container maxWidth="xs">
          <div
            style={{
              marginTop: "164px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Login
            </Typography>
            <form
              onSubmit={handleLogin}
              style={{ width: "100%", marginTop: "16px" }}
            >
              <TextField
                label="Email"
                variant="outlined"
                required
                name="email"
                fullWidth
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
                name="password"
                required
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#d7282b",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
                    color: "#d7282b",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#d7282b",
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                style={{ marginTop: "16px", background: "#d7282b" }}
              >
                Login
              </Button>

              <Button
                onClick={handleGoogleLogin}
                variant="outlined"
                size="large"
                style={{ marginTop: "16px" }}
                fullWidth
                sx={{
                  marginTop: "16px",
                  border: "1px solid #d7282b",
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#fff",
                    border: "1px solid #d7282b",
                  },
                }}
              >
                <IconButton color="primary" aria-label="Google">
                  <FcGoogle />
                </IconButton>
              </Button>

              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "16px" }}
              >
                Dont have an account?{" "}
                <Link onClick={handleRegLogin} s>
                  <span className="text-[#d7282b]">Sign Up</span>
                </Link>
              </Typography>
            </form>
          </div>
        </Container>
      ) : (
        <Container maxWidth="xs">
          <div
            style={{
              marginTop: "164px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Signup
            </Typography>
            <form
              style={{ width: "100%", marginTop: "16px" }}
              onSubmit={handleRegistration}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="userName"
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
                required
              />
              <TextField
                label="Email"
                name="regEmail"
                variant="outlined"
                fullWidth
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
                required
              />
              <TextField
                name="regPassword"
                label="Password"
                variant="outlined"
                fullWidth
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
                type="password"
              />
              <TextField
                label="Photo URL"
                name="photo"
                variant="outlined"
                fullWidth
                required
                margin="normal"
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
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                type="submit"
                style={{ marginTop: "16px", background: "#d7282b" }}
              >
                Signup
              </Button>
              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "16px" }}
              >
                Already have an account?{" "}
                <Link onClick={handleRegLogin}>
                  <span className="text-[#d7282b]">Login</span>
                </Link>
              </Typography>
            </form>
          </div>
        </Container>
      )}

      <Footer />
    </>
  );
};

export default LoginPage;
