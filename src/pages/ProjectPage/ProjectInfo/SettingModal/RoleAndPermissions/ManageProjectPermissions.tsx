import { useState } from "react";
import RoleView from "./RoleView/RoleView";
import PermissionsView from "./PermissionsView/PermissionsView";
import { QUERY_KEY } from "../../../../../types/GenericType";
import { useQuery } from "react-query";
import projectApi from "../../../../../libs/projectApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/store";
import {
  RoleAndFullPermission,
  RoleAndRolePermission,
  RolePermission,
} from "../../../../../types/Permission";
import { Alert, Button, CircularProgress } from "@mui/material";

enum MANAGE_VIEW {
  ROLE = "ROLE",
  PERMMISSION = "PERMMISSION",
}

type VIEWS = { name: string; view: MANAGE_VIEW };

const SETTING_VIEWS: VIEWS[] = [
  { name: "All Roles", view: MANAGE_VIEW.ROLE },
  { name: "Permissions", view: MANAGE_VIEW.PERMMISSION },
];

const ManageProjectPermissions = () => {
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [view, setView] = useState<MANAGE_VIEW>(MANAGE_VIEW.ROLE);
  const handleSwitchView = (selectedView: MANAGE_VIEW) => setView(selectedView);

  const [roleAndFullPermission, setRoleAndFullPermission] = useState<
    RoleAndFullPermission[]
  >([]);
  const [rolePermission, setRolePermission] = useState<RolePermission>({
    addNew: false,
    edit: false,
    delete: false,
  });

  const {
    isLoading: rolePermissionIsLoading,
    isError: rolePermissionIsError,
    refetch: rolePermissionRefetch,
  } = useQuery(
    QUERY_KEY.PERMISSION_SETTING,
    () => projectApi.getProjectRoleAndPermission(projectId as string),
    {
      refetchOnWindowFocus: false,
      onSuccess(data: RoleAndRolePermission) {
        setRoleAndFullPermission(data.rolesAndFullPermission);
        setRolePermission(data.rolePermission);
      },
    }
  );

  if (rolePermissionIsLoading) {
    return (
      <div className="flex justify-center">
        <CircularProgress />;
      </div>
    );
  }

  if (rolePermissionIsError) {
    return (
      <Alert severity="error">
        Something went wrong
        <Button
          size="small"
          className="normal-case"
          onClick={() => rolePermissionRefetch()}
        >
          Try Again
        </Button>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="grid grid-cols-5">
        {SETTING_VIEWS.map((views, index) => {
          return (
            <button
              key={index}
              onClick={() => handleSwitchView(views.view)}
              className={`border-b-2 col-span-1 flex justify-start ${
                view === views.view
                  ? "text-primary font-bold border-primary"
                  : "text-gray-400"
              }`}
            >
              <p>{views.view}</p>
            </button>
          );
        })}

        <div className="border-b-2 col-span-3"></div>
      </div>

      {view === MANAGE_VIEW.ROLE ? (
        <RoleView
          roles={roleAndFullPermission}
          rolePermission={rolePermission}
        />
      ) : null}

      {view === MANAGE_VIEW.PERMMISSION ? (
        <PermissionsView
          roles={roleAndFullPermission}
          rolePermission={rolePermission}
        />
      ) : null}
    </div>
  );
};

export default ManageProjectPermissions;
