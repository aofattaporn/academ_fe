import { Navigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { useAuth } from "./AuthProvider";
import { useQuery } from "react-query";
import userApi from "../libs/userApi";
import { useDispatch } from "react-redux";
import { saveUser } from "../stores/userSlice/userSlice";

const PublicRoute = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const {
    data: userData,
    isSuccess,
    isLoading,
  } = useQuery("userData", async () => await userApi.getUserApi());

  if (isLoading) return <p>Loading...</p>;
  if (isSuccess) dispatch(saveUser(userData));

  return !user?.emailVerified ? <AuthLayout /> : <Navigate to="/" />;
};

export default PublicRoute;
