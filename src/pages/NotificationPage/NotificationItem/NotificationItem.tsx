import moment from "moment";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { Size } from "../../../types/ProjectType";
import { Notification } from "../../../types/NotificationType";
import { Divider } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import notificationApi from "../../../libs/notificationApi";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY } from "../../../types/GenericType";

type NotificationItemProps = {
  notiData: Notification;
};

const NotificationItem = ({ notiData }: NotificationItemProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (notiId: string) =>
      notificationApi.updateClearNotification(notiId),
    onSuccess: () => {
      queryClient.setQueryData(
        QUERY_KEY.NOTIFICATIONS,
        (oldData: Notification[] | undefined) => {
          const newData = oldData
            ? oldData.map((noti) =>
                noti.id === notiData.id ? { ...noti, isClear: true } : noti
              )
            : [];
          return newData;
        }
      );
    },
  });

  return (
    <div
      className="px-12 bg-primary-subtle py-4  gap-16 items-start 
      hover:cursor-pointer group grid grid-cols-12"
      onClick={() => mutation.mutate(notiData.id)}
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

      <div className="col-span-8">
        <h3 className="font-bold text-lg">{notiData.title}</h3>
        <h3>{notiData.body}</h3>
      </div>

      <div className="col-span-2 text-gray-300 group-hover:text-primary font-bold">
        <div className="flex gap-2  justify-center rounded-md p-2  ">
          <p>Clear</p>
          <CheckBoxIcon />
          <p className="w-2 h-2 bg-error rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
