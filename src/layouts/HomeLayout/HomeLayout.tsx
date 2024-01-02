import { Outlet } from "react-router-dom";
import AcademSideBar from "./AcademSideBar";
import AcademNaveBar from "./AcademNavBar";

const HomeLayout = () => {
  return (
    <div className="text-md flex overflow-x-scroll" style={{ height: "100vh" }}>
      <AcademSideBar />
      <div className="w-screen overflow-scroll">
        <AcademNaveBar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
