import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { MouseEvent, ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../../../types/GenericType";
import userApi from "../../../libs/userApi";
import Search from "./Search/Search";
import { useDispatch } from "react-redux";
import { openModal } from "../../../stores/modalSlice/modalSlice";

const settings: string[] = ["Logout"];

function AcademNaveBar(): ReactElement {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenSearch = () => {
    dispatch(
      openModal({
        title: "Search",
        children: <Search />,
        projectId: "",
      })
    );
  };

  const { data: userData } = useQuery(
    QUERY_KEY.USER,
    () => userApi.getUserApi(),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handleLogOut = async (): Promise<void> => {
    const auth = getAuth();
    await signOut(auth);
    navigate("/sign-in", { replace: true });
  };

  return (
    <div className="grid grid-cols-3 items-center static bg-primary-dark p-1 px-12 min-w-[1000px]">
      <div
        onClick={handleOpenSearch}
        className="md:col-start-2 md:col-end-3 col-span-2 h-8 bg-white flex justify-between items-center rounded-3xl hover:cursor-pointer px-8"
      >
        <p className="text-gray-400">Search Bar</p>
        <SearchIcon className="text-gray-400" />
      </div>
      <div className="flex justify-end items-center">
        <Box>
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar
              alt={userData?.fullName}
              sx={{
                width: 32,
                height: 32,
                backgroundColor: userData?.avatarColor,
              }}
            >
              {userData?.fullName.slice(0, 1)}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, index) => (
              <MenuItem
                key={index}
                onClick={
                  setting === "Logout" ? handleLogOut : handleCloseUserMenu
                }
                className={setting === "Logout" ? "text-error" : ""}
              >
                {setting}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
    </div>
  );
}

export default AcademNaveBar;
