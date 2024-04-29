import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreIcon from "@mui/icons-material/Restore";
import { useQueryClient, useMutation } from "react-query";
import notificationApi from "../../../../libs/notificationApi";
import { QUERY_KEY } from "../../../../types/GenericType";
import { Notification } from "../../../../types/NotificationType";

type NotificationSettingProps = {
  fromItem: string;
  notiData: Notification;
};

const NotificationSetting = ({
  fromItem,
  notiData,
}: NotificationSettingProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const queryClient = useQueryClient();

  const restoreNotiMutate = useMutation({
    mutationFn: (notiId: string) =>
      notificationApi.updateClearNotification(notiId, false),
    onSuccess: () => {
      setAnchorElUser(null);
      queryClient.setQueryData(
        QUERY_KEY.NOTIFICATIONS,
        (oldData: Notification[] | undefined) => {
          const newData = oldData
            ? oldData.map((noti) =>
                noti.id === notiData.id ? { ...noti, isClear: false } : noti
              )
            : [];
          return newData;
        }
      );
    },
  });

  const deleteNotiMutate = useMutation({
    mutationFn: (notiId: string) => notificationApi.deleteNotification(notiId),
    onSuccess: () => {
      setAnchorElUser(null);
      queryClient.setQueryData(
        QUERY_KEY.NOTIFICATIONS,
        (oldData: Notification[] | undefined) => {
          const newData = oldData
            ? oldData.filter((noti) => noti.id !== notiData.id)
            : [];
          return newData;
        }
      );
    },
  });

  return (
    <>
      <div
        className="rounded-md"
        onClick={(e) => {
          const target = e.currentTarget as HTMLElement;
          setAnchorElUser(target);
        }}
      >
        <MoreVertIcon />
      </div>

      <Menu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {fromItem !== "NOTI_ITEM" ? (
          <MenuItem
            className="flex gap-4"
            onClick={() => {
              restoreNotiMutate.mutate(notiData.id);
            }}
          >
            <RestoreIcon />
            <p>UnClear</p>
          </MenuItem>
        ) : null}

        <MenuItem
          className="flex gap-4"
          onClick={() => {
            deleteNotiMutate.mutate(notiData.id);
          }}
        >
          <DeleteForeverIcon />
          <p>Delete</p>
        </MenuItem>
      </Menu>
    </>
  );
};

export default NotificationSetting;
