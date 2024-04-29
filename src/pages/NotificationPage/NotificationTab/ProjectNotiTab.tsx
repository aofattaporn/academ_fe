import { Notification } from "../../../types/NotificationType";
import NotificationItem from "../NotificationItem/NotificationItem";

type ProjectNotiTabProps = {
  notiData: Notification[];
};

const ProjectNotiTab = ({ notiData }: ProjectNotiTabProps) => {
  return (
    <div className="my-8 grid grid-cols-1 gap-4">
      {notiData.map((noti, index) => {
        return <NotificationItem key={index} notiData={noti} />;
      })}
    </div>
  );
};

export default ProjectNotiTab;
