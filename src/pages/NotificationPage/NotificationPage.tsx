import { useState } from "react";
import ProjectNotiTab from "./NotificationTab/ProjectNotiTab";
import ClearNotiTab from "./NotificationTab/ClearNotiTab";
import { QUERY_KEY } from "../../types/GenericType";
import notificationApi from "../../libs/notificationApi";
import { useQuery } from "react-query";
import { Notification } from "../../types/NotificationType";

enum NOTIFICATION_TAB {
  PROJECT_NOTI = "PROJECT_NOTI",
  CLEAR_NOTI = "CLEAR_NOTI",
}

const NotificationPage = () => {
  const [currentTab, setCurrentTab] = useState<NOTIFICATION_TAB>(
    NOTIFICATION_TAB.PROJECT_NOTI
  );
  const [allNoti, setAllNoti] = useState<Notification[]>([]);

  const {
    isLoading: notiLoading,
    isSuccess: notiSuccess,
    data: notiData,
  } = useQuery(
    QUERY_KEY.NOTIFICATIONS,
    () => notificationApi.getAllNotification(),
    {
      onSuccess(data: Notification[]) {
        setAllNoti(data);
      },
    }
  );

  {
    notiLoading ? <></> : null;
  }

  return (
    <div className="w-full h-full bg-main">
      <div className="w-full h-12 bg-primary-light"></div>
      <div className="flex justify-start px-8 py-8">
        <div className=" items-center">
          <h1 className="font-bold text-4xl text-dark">Notification</h1>
          <h3 className="text-grey">Show your notification</h3>
        </div>
      </div>
      <div className="px-8">
        <div className="w-full rounded-md shadow-3xl my-4 bg-white  items-center font-roboto p-4 font-dark">
          <div className=" grid grid-cols-12 font-bold">
            <button
              onClick={() => setCurrentTab(NOTIFICATION_TAB.PROJECT_NOTI)}
              className={`col-span-2 flex justify-center p-4 border-b-4             
              ${
                currentTab === NOTIFICATION_TAB.PROJECT_NOTI
                  ? "border-primary"
                  : "text-gray-200"
              }`}
            >
              <p>Project Notification</p>
            </button>
            <button
              onClick={() => setCurrentTab(NOTIFICATION_TAB.CLEAR_NOTI)}
              className={`col-span-2 flex justify-center p-4 border-b-4               
              ${
                currentTab === NOTIFICATION_TAB.CLEAR_NOTI
                  ? "border-primary"
                  : "text-gray-200"
              }`}
            >
              <p>Clear</p>
            </button>
            <div className="col-span-8 flex justify-center border-b-4"></div>
          </div>

          <div className="max-h-96 overflow-y-scroll">
            {currentTab === NOTIFICATION_TAB.PROJECT_NOTI &&
            notiSuccess &&
            notiData ? (
              <ProjectNotiTab
                notiData={allNoti.filter((item) => item.isClear === false)}
              />
            ) : null}
            {currentTab === NOTIFICATION_TAB.CLEAR_NOTI &&
            notiSuccess &&
            notiData ? (
              <ClearNotiTab
                notiData={allNoti.filter((item) => item.isClear === true)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
