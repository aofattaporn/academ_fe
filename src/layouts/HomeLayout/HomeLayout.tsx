import { Outlet } from "react-router-dom";
import AcademNaveBar from "./Navbar/AcademNavBar";
import SideBar from "./SideBar/SideBar";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import userApi from "../../libs/userApi";
import { saveUser } from "../../stores/userSlice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { onMessage, MessagePayload } from "firebase/messaging";
import { useState, useEffect } from "react";
import {
  requestNotificationPermission,
  onMessageListener,
  messaging,
} from "../../Firebase";
import AvatarProject from "../../components/AvatarProject/AvatarProject";
import { Size } from "../../types/ProjectType";
import { Divider, styled } from "@mui/material";

const HomeLayout = () => {
  const dispatch = useDispatch();

  const { data: userData, isSuccess } = useQuery(
    "userData",
    userApi.getUserApi,
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  if (isSuccess) dispatch(saveUser(userData));

  // const [show, setShow] = useState(false);
  // const [notification, setNotification] = useState({ title: "", body: "" });

  onMessage(messaging, (payload: MessagePayload) => {
    console.log("Message received. Payload:", payload as MessagePayload);
    const body = payload.notification?.body;

    toast(
      <div style={{ width: "200px", height: "100px" }}>
        <div className="mb-2 flex items-center gap-4">
          <AvatarProject
            isLoading={false}
            size={Size.small}
            projectName="Echo Echo"
            color="#AF8AE2"
          ></AvatarProject>
          <p className="font-bold">Echo Echo</p>
        </div>{" "}
        <p className="text-dark my-4">{body}</p>
      </div>,
      {
        progressClassName: "progress",
        progressStyle: { backgroundColor: "red" },
        hideProgressBar: true,
      }
    );
  });

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="h-screen flex-1 min-w-[1000px] overflow-x-scroll">
        <AcademNaveBar />
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
