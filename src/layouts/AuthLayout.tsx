import { AppBar, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <h1 className="text-dark font-bold text-2xl">Academ</h1>
        </Toolbar>
      </AppBar>
      <div className="my-12 flex justify-center w-full">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
