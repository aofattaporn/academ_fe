import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
