import { Divider } from "@mui/material";
import moment from "moment";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { Size } from "../../../types/ProjectType";
import NotificationSetting from "./NotiSetting/NotificationSetting";
import { Notification } from "../../../types/NotificationType";

type NotificationClearItemProps = {
  notiData: Notification;
};

const NotificationClearItem = ({ notiData }: NotificationClearItemProps) => {
  return (
    <div
      className="pl-12 bg-primary-subtle py-4  gap-16 items-start 
        hover:cursor-pointer group grid grid-cols-12"
    >
      <div className="col-span-2">
        <div className="mb-2 flex items-center gap-4">
          <AvatarProject
            isLoading={false}
            size={Size.small}
            projectName={notiData.projectProfile.projectName}
            color={notiData.projectProfile.avatarColor}
          ></AvatarProject>
          <p className="font-bold">{notiData.projectProfile.projectName}</p>
        </div>
        <p className="text-gray-400 text-sm flex gap-4">
          {moment(notiData.date).format("LLL")}
        </p>

        <Divider orientation="vertical" flexItem />
      </div>

      <div className="col-span-8 pt-2 overflow-x-clip">
        <h3 className="font-bold text-lg">{notiData.title}</h3>
        <h3>{notiData.body}</h3>
      </div>

      <div className="col-span-2 text-gray-300 group-hover:text-primary font-bold">
        <div className="flex gap-2 justify-center rounded-md p-2">
          <NotificationSetting fromItem="NOTI_ITEM" notiData={notiData} />
        </div>
      </div>
    </div>
  );
};

export default NotificationClearItem;
