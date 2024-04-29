import { Notification } from "../../../types/NotificationType";
import NotificationClearItem from "../NotificationItem/NotificationClearItem";

type ClearNotiTabProps = {
  notiData: Notification[];
};

const ClearNotiTab = ({ notiData }: ClearNotiTabProps) => {
  return (
    <div className="my-8 grid grid-cols-1 gap-4">
      {notiData.map((noti, index) => {
        return <NotificationClearItem key={index} notiData={noti} />;
      })}
    </div>
  );
};

export default ClearNotiTab;
