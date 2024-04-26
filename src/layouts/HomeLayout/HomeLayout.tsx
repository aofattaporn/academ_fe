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

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    requestNotificationPermission();
    onMessageListener()
      .then((payload) => {
        console.log(payload);
        console.log("==========");
        setShow(true);
        setNotification({
          title: "notification?.title as string",
          body: "notification?.body as string",
        });
        console.log("Payload:", payload);
      })
      .catch((err) => console.log("failed: ", err));
  }, []);

  if (show) {
    toast.success("Show!!!");
  }

  onMessage(messaging, (payload: MessagePayload) => {
    console.log("Message received. Payload:", payload as MessagePayload);
    toast.success("Show!!!");
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
