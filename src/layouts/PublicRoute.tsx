import { Navigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { useAuth } from "./AuthProvider";

const PublicRoute = () => {
  const { user } = useAuth();
  console.log("PublicRoute");

  return user?.emailVerified ? <Navigate to="/" /> : <AuthLayout />;
};

export default PublicRoute;
