import { Outlet } from "react-router-dom";
import AcademSideBar from "./AcademSideBar";

const HomeLayout = () => {
  return (
    <div className="text-md flex fixed" style={{ height: "100vh" }}>
      <AcademSideBar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
