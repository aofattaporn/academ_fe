import { Menu, MenuItem } from "@mui/material";
import TextFeildInputComp from "../../../../../components/Field/TextFeildInputComp";
import { useState } from "react";
import {
  AllMemberAndPermission,
  Invite,
  RoleProject,
} from "../../../../../types/ProjectType";
import { useMutation, useQueryClient } from "react-query";
import projectApi from "../../../../../libs/projectApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/store";
import CreateProjectButtonComp from "../../../../../components/Button/CreateProjectButtonComp";
import moment from "moment";
import { toast } from "react-toastify";
import { ErrorCustom, QUERY_KEY } from "../../../../../types/GenericType";
import { MembersPermission } from "../../../../../types/Permission";

type InviteInputProps = {
  roles: RoleProject[];
  memberPermission: MembersPermission;
};

const InviteInput = ({ roles, memberPermission }: InviteInputProps) => {
  const queryClient = useQueryClient();
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<RoleProject>(roles[1]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpenAnchorEl = (element: null | HTMLElement) => {
    setAnchorEl(element);
  };

  const mutation = useMutation({
    mutationFn: (invite: Invite) =>
      projectApi.inviteMember(projectId as string, invite),
    onSuccess(data: AllMemberAndPermission) {
      queryClient.setQueryData([QUERY_KEY.MEMBERS_SETTING, projectId], data);
      toast.success("Invite Member success");
      setMemberEmail("");
    },
    onError(error: ErrorCustom) {
      toast.error(error.description);
    },
  });

  return (
    <div className="grid grid-cols-12 w-full gap-2 items-center">
      <div className="col-span-8">
        <TextFeildInputComp
          placeholder={"Email Invite"}
          value={memberEmail}
          handleProjectName={(email: string) => setMemberEmail(email)}
          disable={!memberPermission.invite}
        />
      </div>

      <div className="col-span-2">
        <button
          disabled={!memberPermission.addRole}
          className={`flex justify-center items-center rounded-md p-2
          ${
            !memberPermission.addRole
              ? "bg-main text-gray-300"
              : "bg-white border-2"
          } `}
          onClick={(e) => handleOpenAnchorEl(e.currentTarget)}
        >
          <p>{selectedRole.roleName}</p>
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleOpenAnchorEl(null)}
        >
          {roles.map((role, index) => (
            <MenuItem
              key={index}
              onClick={() => setSelectedRole(role)}
              className="flex w-full bg-black"
            >
              {role.roleName}
            </MenuItem>
          ))}
        </Menu>
      </div>

      <div className="col-span-2">
        <CreateProjectButtonComp
          title={"Invite"}
          disable={!memberEmail}
          isCreating={mutation.isLoading}
          handleChange={() =>
            mutation.mutate({
              inviteId: "",
              inviteRoleId: selectedRole.roleId,
              inviteDate: moment().toISOString(),
              inviteEmail: memberEmail,
            })
          }
        />
      </div>
    </div>
  );
};

export default InviteInput;
