import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import TextFeildInputComp from "../../../../../../components/Field/TextFeildInputComp";
import TasksButton from "../../../../../../components/Button/TasksButton";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import projectApi from "../../../../../../libs/projectApi";
import { RootState } from "../../../../../../stores/store";
import { Role } from "../../../../../../types/Permission";
import { ErrorCustom, QUERY_KEY } from "../../../../../../types/GenericType";
import { toast } from "react-toastify";
import {
  BTN_TASKS_CANCEL,
  BTN_TASKS_SAVE,
} from "../../../../../../types/MyTasksType";
import ConfirmDelete from "../../../../../../components/Modal/ConfirmDelete";

type RoleItemProps = {
  role: Role;
  enable: boolean;
};

const RoleItem = ({ role, enable }: RoleItemProps) => {
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [editRole, setEditRole] = useState<string>("");
  const projectId = useSelector((state: RootState) => state.modal.projectId);

  const handleEdit = (editRole: string) => {
    setIsEdit(true);
    setEditRole(editRole);
  };

  const handleEditRoleName = (editRole: string) => setEditRole(editRole);

  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditRole("");
  };

  const updateRoleNameMutation = useMutation({
    mutationFn: (roleName: string) =>
      projectApi.updateRoleName(projectId as string, roleName, {
        newRole: roleName,
      }),
    onSuccess(data: Role[]) {
      queryClient.setQueryData(QUERY_KEY.PERMISSION_SETTING, data);
      setIsEdit(false);
      toast.success("Update Role success");
    },
    onError(error: ErrorCustom) {
      toast.error(error.description);
    },
  });

  const deleteRoleMutation = useMutation({
    mutationFn: (roleName: string) =>
      projectApi.deleteRole(projectId as string, roleName),
    onSuccess(data: Role[]) {
      queryClient.setQueryData(QUERY_KEY.PERMISSION_SETTING, data);
      setOpen(false);
      toast.success("Delete Role success");
    },
    onError(error: ErrorCustom) {
      toast.error(error.description);
    },
  });

  return (
    <div className="flex items-center justify-between w-full">
      {isEdit ? (
        <div className="flex w-full gap-2">
          <TextFeildInputComp
            placeholder={"Role Name"}
            value={editRole}
            handleProjectName={handleEditRoleName}
          />
          <TasksButton
            title={BTN_TASKS_CANCEL}
            isSaving={false}
            handleSave={handleCancelEdit}
          />
          <TasksButton
            title={BTN_TASKS_SAVE}
            isSaving={updateRoleNameMutation.isLoading}
            handleSave={() => updateRoleNameMutation.mutate(role.roleId)}
          />
        </div>
      ) : (
        <>
          <div className="grow">
            {role.roleName} {!enable && <span className="text-error">*</span>}
          </div>
          <div>
            <IconButton
              onClick={() => handleEdit(role.roleName)}
              disabled={!enable}
            >
              <EditIcon />
            </IconButton>
          </div>
          <div>
            <IconButton onClick={() => setOpen(true)} disabled={!enable}>
              <DeleteForeverIcon />
            </IconButton>
          </div>

          {open ? (
            <ConfirmDelete
              isDeleting={deleteRoleMutation.isLoading}
              handleClose={() => setOpen(false)}
              handleDelete={() => deleteRoleMutation.mutate(role.roleId)}
            />
          ) : null}
        </>
      )}
    </div>
  );
};

export default RoleItem;
