import { Notification } from "../../../types/NotificationType";
import NotificationItem from "../NotificationItem/NotificationItem";

type ProjectNotiTabProps = {
  notiData: Notification[];
};

const ProjectNotiTab = ({ notiData }: ProjectNotiTabProps) => {
  if (notiData.length == 0) {
    return (
      <div className="flex items-center justify-center p-32">
        <p className="text-grey">No Notices Right Now.</p>
      </div>
    );
  }
  return (
    <div className="my-8 grid grid-cols-1 gap-4">
      {notiData.map((noti, index) => {
        return <NotificationItem key={index} notiData={noti} />;
      })}
    </div>
  );
};

export default ProjectNotiTab;
