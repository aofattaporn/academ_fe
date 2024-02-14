import { Outlet } from "react-router-dom";
import AcademNaveBar from "./Navbar/AcademNavBar";
import SideBar from "./SideBar/SideBar";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import userApi from "../../libs/userApi";
import { saveUser } from "../../stores/userSlice/userSlice";

const HomeLayout = () => {
  const dispatch = useDispatch();

  const { data: userData, isSuccess } = useQuery(
    "userData",
    userApi.getUserApi
  );

  if (isSuccess) dispatch(saveUser(userData));

  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1 min-w-96 overflow-x-scroll">
        <AcademNaveBar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
