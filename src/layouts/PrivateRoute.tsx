import { Route } from "react-router-dom";
import InvitePage from "../pages/InvitePage/InvitePage";
import NotAccessPage from "../pages/NotAccessPage";
import { useAuth } from "./AuthProvider";
import HomeLayout from "./HomeLayout/HomeLayout";

const PrivateRoute = () => {
  const { user } = useAuth();

  <Route path="/join-project" element={<InvitePage />} />;

  return user?.emailVerified ? <HomeLayout /> : <NotAccessPage />;
};

export default PrivateRoute;
