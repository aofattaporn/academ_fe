import { useAuth } from "./AuthProvider";
import HomeLayout from "./HomeLayout/HomeLayout";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useAuth();

  return user?.emailVerified ? <HomeLayout /> : <Navigate to={"/sign-in"} />;
};

export default PrivateRoute;
