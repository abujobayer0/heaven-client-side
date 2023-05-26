import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/UserManage";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AllToyPage from "./pages/AllToyPage";
import AddAToyPage from "./pages/AddAToyPage";
import DetailPage from "./pages/DetailPage";
import PrivateRoute from "./components/PrivateRoute";
import MyToy from "./pages/MyToyPage";
import "aos/dist/aos.css";

import UpdateToyPage from "./pages/UpdateToyPage";
import { ToastContainer } from "react-toastify";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <div className="flex  w-full flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/alltoys" element={<AllToyPage />}></Route>
        <Route
          path="/toy/:id"
          element={
            <PrivateRoute>
              <DetailPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addAToy"
          element={
            <PrivateRoute>
              <AddAToyPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/myToys"
          element={
            <PrivateRoute>
              <MyToy />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/update/:id" element={<UpdateToyPage />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
