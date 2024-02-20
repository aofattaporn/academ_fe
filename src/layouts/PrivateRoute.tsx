import NotAccessPage from "../pages/NotAccessPage";
import { useAuth } from "./AuthProvider";
import HomeLayout from "./HomeLayout/HomeLayout";

const PrivateRoute = () => {
  const { user } = useAuth();

  return user?.emailVerified ? <HomeLayout /> : <NotAccessPage />;
};

export default PrivateRoute;
