import { Outlet } from "react-router-dom";
import AcademNaveBar from "./Navbar/AcademNavBar";
import SideBar from "./SideBar/SideBar";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import userApi from "../../libs/userApi";
import { saveUser } from "../../stores/userSlice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { onMessage, MessagePayload } from "firebase/messaging";
import { messaging } from "../../Firebase";
import AvatarProject from "../../components/AvatarProject/AvatarProject";
import { Size } from "../../types/ProjectType";
import { NotificationAlert } from "../../types/NotificationType";

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

  onMessage(messaging, (payload: MessagePayload) => {
    const notificationAlert: NotificationAlert = {
      ProjectName: payload.data?.ProjectName || "",
      AvatarColor: payload.data?.AvatarColor || "",
      Title: payload.data?.Title || "",
      Body: payload.data?.Body || "",
      Date: payload.data?.Date || "",
    };

    toast(
      <div style={{ width: "200px" }}>
        <div className="mb-2 flex items-center gap-4 ">
          <AvatarProject
            isLoading={false}
            size={Size.small}
            projectName={notificationAlert.ProjectName}
            color={notificationAlert.AvatarColor}
          ></AvatarProject>
          <p className="font-bold">{notificationAlert.ProjectName}</p>
        </div>{" "}
        <div className="my-5 text-dark font-roboto">
          <p className="font-bold">{notificationAlert.Title}</p>
          <p>{notificationAlert.Body}</p>
        </div>
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
