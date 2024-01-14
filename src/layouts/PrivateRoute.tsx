import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import HomeLayout from "./HomeLayout/HomeLayout";

const PrivateRoute = () => {
  const { user } = useAuth();

  return user?.emailVerified ? <HomeLayout /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
