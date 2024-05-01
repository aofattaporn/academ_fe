import { useState } from "react";
import {
  MembersPermission,
  Permission,
  ProjectPermission,
  ROLE_MEMBER,
  ROLE_OWNER,
  RoleAndFullPermission,
  RoleAndRolePermission,
  RolePermission,
  TaskPermission,
} from "../../../../../../types/Permission";
import CreateProjectButtonComp from "../../../../../../components/Button/CreateProjectButtonComp";
import SelectRole from "./SelectRole";
import { BTN_TASKS_SAVE } from "../../../../../../types/MyTasksType";
import { Button, Divider, Switch } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import projectApi from "../../../../../../libs/projectApi";
import { QUERY_KEY } from "../../../../../../types/GenericType";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../stores/store";

type PermissionsViewProps = {
  roles: RoleAndFullPermission[];
  rolePermission: RolePermission;
};

const PermissionsView = ({ roles }: PermissionsViewProps) => {
  const queryClient = useQueryClient();
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [selectedRole, setSelectedRole] = useState<RoleAndFullPermission>(
    roles[0]
  );
  const [permission, setPermission] = useState<Permission>(roles[0].permission);

  const handleSelectRole = (role: RoleAndFullPermission) => {
    setAnchorElUser(null);
    setSelectedRole(role);
    setPermission(role.permission);
  };

  const handleSetSelectedRole = (element: null | HTMLElement) =>
    setAnchorElUser(element);

  const handleSetPermission = (
    permissionType: keyof Permission,
    permissionName:
      | keyof MembersPermission
      | keyof ProjectPermission
      | keyof RolePermission
      | keyof TaskPermission,
    value: boolean
  ) => {
    setPermission((prevPer) => ({
      ...prevPer,
      [permissionType]: {
        ...(prevPer[permissionType] as any),
        [permissionName]: value,
      },
    }));
  };

  const handleRetorePermission = () => {
    setPermission(selectedRole.permission);
  };

  const mutation = useMutation({
    mutationFn: () =>
      projectApi.settingPermission(
        projectId as string,
        selectedRole.permission.id,
        permission
      ),
    onSuccess(data: RoleAndRolePermission) {
      queryClient.setQueryData(QUERY_KEY.PERMISSION_SETTING, data);

      const findIndex = data.rolesAndFullPermission.findIndex(
        (element) => element.roleId === selectedRole.roleId
      );
      if (findIndex === -1) {
        toast.error("Somthing went wrong");
      } else {
        setSelectedRole(data.rolesAndFullPermission[findIndex]);
        setPermission(data.rolesAndFullPermission[findIndex].permission);
        toast.success("Update Permission success");
      }
    },
    onError() {
      toast.error("Failed to update permission");
    },
  });

  return (
    <>
      <div className="flex gap-4 items-center">
        <p className="my-2"> Select Role for managing permissions:</p>
        <SelectRole
          roles={roles}
          roleName={selectedRole.roleName}
          anchorEl={anchorElUser}
          handleSelect={handleSelectRole}
          handleSetAnchorElUser={handleSetSelectedRole}
        />
      </div>

      <div className="w-full rounded-md border-opacity-5 border-2 p-4">
        <div className="grid grid-cols-1 gap-6">
          <div className=" font-roboto text-dark flex justify-between">
            <h1 className="text-xl font-bold">{selectedRole.roleName}</h1>
            {JSON.stringify(selectedRole.permission) ===
            JSON.stringify(permission) ? null : (
              <Button
                onClick={handleRetorePermission}
                sx={{ color: "#FFCC00" }}
                className="flex gap-2"
              >
                <RestoreIcon />
                <p>Restore Permission</p>
              </Button>
            )}
          </div>

          {Object.entries(permission).map(([roleType, value]) => {
            console.log(permission);
            if (roleType === "id") return null;
            return (
              <div>
                <h2 className="font-bold text-md normal-case">{roleType}</h2>
                <div className="grid grid-cols-3 gap-x-4">
                  {Object.entries(
                    value as
                      | MembersPermission
                      | ProjectPermission
                      | RolePermission
                      | TaskPermission
                  ).map(([permission, value], index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p>{permission}</p>
                      <Switch
                        disabled={
                          selectedRole.roleName === ROLE_OWNER ||
                          selectedRole.roleName === ROLE_MEMBER
                        }
                        checked={value}
                        onChange={(e) => {
                          handleSetPermission(
                            roleType as keyof Permission,
                            permission as
                              | keyof RolePermission
                              | keyof ProjectPermission
                              | keyof MembersPermission
                              | keyof TaskPermission,
                            e.target.checked
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
                <Divider />
              </div>
            );
          })}

          <div className="my-4">
            <CreateProjectButtonComp
              title={BTN_TASKS_SAVE}
              disable={
                JSON.stringify(selectedRole.permission) ===
                JSON.stringify(permission)
              }
              isCreating={mutation.isLoading}
              handleChange={mutation.mutate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PermissionsView;
