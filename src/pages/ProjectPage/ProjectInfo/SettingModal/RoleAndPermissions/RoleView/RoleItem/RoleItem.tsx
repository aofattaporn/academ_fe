import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TextFeildInputComp from "../../../../../../../components/Field/TextFeildInputComp";
import TasksButton from "../../../../../../../components/Button/TasksButton";
import {
  RoleAndFullPermission,
  RolePermission,
} from "../../../../../../../types/Permission";
import {
  BTN_TASKS_CANCEL,
  BTN_TASKS_SAVE,
} from "../../../../../../../types/MyTasksType";
import ConfirmDelete from "../../../../../../../components/Modal/ConfirmDelete";
import useHandleRole from "../../../../../../../hooks/projectHook/useHandleRole";

type RoleItemProps = {
  role: RoleAndFullPermission;
  isDefultRole: boolean;
  isDisableEdit: boolean;
  isDisableDelete: boolean;
  rolePermission: RolePermission;
};

const RoleItem = ({
  role,
  isDefultRole,
  isDisableEdit,
  isDisableDelete,
}: RoleItemProps) => {
  const {
    isEdit,
    open,
    editRole,
    updateRoleNameMutation,
    deleteRoleMutation,
    handleSetIsOpen,
    handleEdit,
    handleEditRoleName,
    handleCancelEdit,
  } = useHandleRole();

  return (
    <div className="flex items-center justify-between w-full">
      {isEdit ? (
        <div className="flex w-full gap-2">
          <TextFeildInputComp
            placeholder={"Role Name"}
            value={editRole}
            handleProjectName={handleEditRoleName}
            disable={false}
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
            {role.roleName}{" "}
            {isDefultRole && <span className="text-error">*</span>}
          </div>
          <div>
            <IconButton
              onClick={() => handleEdit(role.roleName)}
              disabled={isDefultRole || !isDisableEdit}
            >
              <EditIcon />
            </IconButton>
          </div>

          <div>
            <IconButton
              onClick={() => handleSetIsOpen(true)}
              disabled={isDefultRole || !isDisableDelete}
            >
              <DeleteForeverIcon />
            </IconButton>
          </div>

          {open ? (
            <ConfirmDelete
              isDeleting={deleteRoleMutation.isLoading}
              handleClose={() => handleSetIsOpen(false)}
              handleDelete={() => deleteRoleMutation.mutate(role.roleId)}
            />
          ) : null}
        </>
      )}
    </div>
  );
};

export default RoleItem;
