import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import app from "../../firebase.init";
const PrivateRoute = ({ children }) => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Authentication error:", error);
    return <div>Authentication error. Please try again later.</div>;
  }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};
export default PrivateRoute;
