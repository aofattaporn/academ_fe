import { useAuth } from "./AuthProvider";
import HomeLayout from "./HomeLayout/HomeLayout";
import AuthLayout from "./AuthLayout";

const PrivateRoute = () => {
  const { user } = useAuth();

  return user?.emailVerified ? <HomeLayout /> : <AuthLayout />;
};

export default PrivateRoute;
