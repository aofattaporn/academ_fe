import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import companyIcon from "../assets/pdf/company-icon.png";
import AcademIcon from "../assets/svg/academ_icon.svg";

const BoxBlackground = styled(Box)({
  backgroundImage: `url(${companyIcon})`, // Use the url() function to specify the image URL
  backgroundSize: "30%", // You can adjust the background size to fit your needs
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 35% ",
  height: "80vh",
});

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
          <div className="flex items-center gap-8">
            <img src={AcademIcon} alt="academ-icon" height={200} width={45} />
            <h1 className="text-dark font-bold text-2xl">Academ</h1>
          </div>
        </Toolbar>
      </AppBar>
      <BoxBlackground>
        <div className="flex justify-center w-full z-10">
          <Outlet />
        </div>
      </BoxBlackground>
    </>
  );
};

export default AuthLayout;
