import { Navigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { useAuth } from "./AuthProvider";

const PublicRoute = () => {
  const { user } = useAuth();

  return !user?.emailVerified ? <AuthLayout /> : <Navigate to="/" />;
};

export default PublicRoute;
