import { Menu, MenuItem } from "@mui/material";
import TextFeildInputComp from "../../../../components/Field/TextFeildInputComp";
import { useState } from "react";
import {
  Invite,
  MemberSetting,
  RoleProject,
} from "../../../../types/ProjectType";
import { useMutation, useQueryClient } from "react-query";
import projectApi from "../../../../libs/projectApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import moment from "moment";
import { toast } from "react-toastify";
import { QUERY_KEY } from "../../../../types/GenericType";

type InviteInputProps = {
  roles: RoleProject[];
};

const InviteInput = ({ roles }: InviteInputProps) => {
  const queryClient = useQueryClient();
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<RoleProject>(roles[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpenAnchorEl = (element: null | HTMLElement) => {
    setAnchorEl(element);
  };

  const mutation = useMutation({
    mutationFn: (invite: Invite) =>
      projectApi.inviteMember(projectId as string, invite),
    onSuccess(data: MemberSetting) {
      queryClient.setQueryData([QUERY_KEY.MEMBERS_SETTING, projectId], data);
      toast.success("Invite Member success");
      setMemberEmail("");
    },
    onError() {
      toast.error("somthin went wrong");
    },
  });

  return (
    <div className="grid grid-cols-12 w-full gap-2 items-center">
      <div className="col-span-8">
        <TextFeildInputComp
          placeholder={"Email Invite"}
          value={memberEmail}
          handleProjectName={(email: string) => setMemberEmail(email)}
        />
      </div>

      <div className="col-span-2">
        <button
          className="flex justify-center items-center rounded-md bg-white p-2 border-2"
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
