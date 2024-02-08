import { useAuth } from "./AuthProvider";
import HomeLayout from "./HomeLayout/HomeLayout";
import AuthLayout from "./AuthLayout";
import { useQuery } from "react-query";
import userApi from "../libs/userApi";
import { saveUser } from "../stores/userSlice/userSlice";
import { useDispatch } from "react-redux";

const PrivateRoute = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const { data: userData, isSuccess } = useQuery(
    "userData",
    userApi.getUserApi
  );

  if (isSuccess) dispatch(saveUser(userData));

  return user?.emailVerified ? <HomeLayout /> : <AuthLayout />;
};

export default PrivateRoute;
