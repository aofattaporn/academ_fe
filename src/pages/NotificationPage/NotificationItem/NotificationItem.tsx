import moment from "moment";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { Size } from "../../../types/ProjectType";
import { Notification } from "../../../types/NotificationType";
import { Divider } from "@mui/material";

type NotificationItemProps = {
  notiData: Notification;
};

const NotificationItem = ({ notiData }: NotificationItemProps) => {
  return (
    <div className="px-12 bg-primary-subtle py-4 flex gap-16 items-start">
      <div>
        <div className="mb-2 flex items-center gap-4">
          <AvatarProject
            isLoading={false}
            size={Size.small}
            projectName={notiData.projectProfile.projectName}
            color={notiData.projectProfile.avatarColor}
          ></AvatarProject>
          <p className="font-bold">{notiData.projectProfile.projectName}</p>
        </div>
        <p className="text-gray-400 text-sm">
          {moment(notiData.date).format("LLL")}
        </p>
      </div>

      <Divider orientation="vertical" flexItem />
      <div>
        <h3 className="font-bold  text-lg">{notiData.title}</h3>
        <h3 className="">{notiData.Body}</h3>
      </div>
    </div>
  );
};

export default NotificationItem;
