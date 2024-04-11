import { IconButton } from "@mui/material";
import CreateProjectButtonComp from "../../../../../components/Button/CreateProjectButtonComp";
import TextFeildInputComp from "../../../../../components/Field/TextFeildInputComp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Role } from "../../../../../types/Permission";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import projectApi from "../../../../../libs/projectApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { QUERY_KEY } from "../../../../../types/GenericType";
import { RootState } from "../../../../../stores/store";

type RoleViewProps = {
  roles: Role[];
};
const RoleView = ({ roles }: RoleViewProps) => {
  const [roleName, setRoleName] = useState<string>("");
  const queryClient = useQueryClient();
  const projectId = useSelector((state: RootState) => state.modal.projectId);

  const handleSetRoleName = (newRole: string) => setRoleName(newRole);

  const mutation = useMutation({
    mutationFn: () =>
      projectApi.createNewRoleAndPermission(projectId as string, {
        newRole: roleName,
      }),
    onSuccess(data: Role[]) {
      console.log(data);
      queryClient.setQueryData(QUERY_KEY.PERMISSION_SETTING, data);
      setRoleName("");
      toast.success("Create New Role success");
    },
    onError() {
      toast.error("Failed to update project details");
    },
  });

  return (
    <>
      <div className="my-4">
        <p className=" text-gray-200">Manage Role within this project</p>
        <div className=" grid grid-cols-4 gap-4 w-full">
          <div className=" col-span-3 ">
            <TextFeildInputComp
              placeholder={"Role Name"}
              value={roleName}
              handleProjectName={handleSetRoleName}
            />
          </div>
          <div className=" col-span-1">
            <CreateProjectButtonComp
              title={"Add"}
              disable={roleName.trim().length === 0}
              isCreating={mutation.isLoading}
              handleChange={mutation.mutate}
            />
          </div>
        </div>
      </div>

      <div className="my-2">
        <p className="text-gray-200">All Role within this project</p>
        <div className=" w-full ">
          {roles.map((role, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <td className="grow">
                  {role.roleName} <span className="text-error">*</span>
                </td>
                <td>
                  <IconButton disabled>
                    <EditIcon />
                  </IconButton>
                </td>
                <td>
                  <IconButton disabled>
                    <DeleteForeverIcon />
                  </IconButton>
                </td>
              </div>
            );
          })}
        </div>
      </div>
    </>
    // </div>
  );
};

export default RoleView;
