import { Navigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { useAuth } from "./AuthProvider";

const PublicRoute = () => {
  const { user } = useAuth();

  return !user ? <AuthLayout /> : <Navigate to="/" />;
};

export default PublicRoute;
