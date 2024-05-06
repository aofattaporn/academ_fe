import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import projectApi from "../../libs/projectApi";
import { RootState } from "../../stores/store";
import { QUERY_KEY, ErrorCustom } from "../../types/GenericType";
import { RoleAndRolePermission } from "../../types/Permission";

const useHandleRole = () => {
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

  const handleSetIsOpen = (isOpen: boolean) => setOpen(isOpen);

  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditRole("");
  };

  const updateRoleNameMutation = useMutation({
    mutationFn: (roleId: string) =>
      projectApi.updateRoleName(projectId as string, roleId, {
        newRole: editRole,
      }),
    onSuccess(data: RoleAndRolePermission) {
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
    onSuccess(data: RoleAndRolePermission) {
      queryClient.setQueryData(QUERY_KEY.PERMISSION_SETTING, data);
      setOpen(false);
      toast.success("Delete Role success");
    },
    onError(error: ErrorCustom) {
      toast.error(error.description);
    },
  });

  return {
    isEdit,
    open,
    editRole,
    projectId,
    updateRoleNameMutation,
    deleteRoleMutation,
    handleEdit,
    handleEditRoleName,
    handleSetIsOpen,
    handleCancelEdit,
  };
};

export default useHandleRole;
