import { Outlet } from "react-router-dom";
import AcademNaveBar from "./Navbar/AcademNavBar";
import SideBar from "./SideBar/SideBar";

const HomeLayout = () => {
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
