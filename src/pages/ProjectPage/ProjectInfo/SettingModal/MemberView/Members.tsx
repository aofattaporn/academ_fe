import { useState } from "react";
import {
  AllMemberAndPermission,
  MemberSetting,
} from "../../../../../types/ProjectType";
import { QUERY_KEY } from "../../../../../types/GenericType";
import { useQuery } from "react-query";
import projectApi from "../../../../../libs/projectApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/store";
import { Alert, Button, CircularProgress } from "@mui/material";
import InviteItem from "./InviteItem";
import MemberItem from "./MemberItem/MemberItem";
import InviteInput from "./InviteInput";
import { MembersPermission } from "../../../../../types/Permission";

const Members = () => {
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [memeberSetting, setMemberSetting] = useState<MemberSetting>();
  const [memberPermission, setMemberPermission] = useState<MembersPermission>({
    addRole: false,
    invite: false,
    remove: false,
  });

  const {
    isLoading: membersIsLoading,
    isError: membersIsError,
    refetch: membersRefetch,
    isSuccess: membersIsSuccess,
  } = useQuery(
    [QUERY_KEY.MEMBERS_SETTING, projectId],
    () => projectApi.getAllMembers(projectId as string),
    {
      refetchOnWindowFocus: false,
      onSuccess(data: AllMemberAndPermission) {
        setMemberSetting(data.allMemberProject);
        setMemberPermission(data.membersPermission);
      },
    }
  );

  if (membersIsLoading) {
    return (
      <div className="flex justify-center">
        <CircularProgress />;
      </div>
    );
  }

  return (
    <>
      {membersIsError ? (
        <Alert severity="error" className="my-8">
          Something went wrong
          <Button
            size="small"
            className="normal-case"
            onClick={() => membersRefetch()}
          >
            Try Again
          </Button>
        </Alert>
      ) : null}

      {membersIsSuccess ? (
        <>
          <div className="my-4">
            <p className="text-gray-200">Manage Role within this project</p>
            {memeberSetting && memeberSetting?.roles && membersIsSuccess ? (
              <InviteInput
                roles={memeberSetting.roles}
                memberPermission={memberPermission}
              />
            ) : null}
          </div>

          <div className="my-2">
            <p className="text-gray-200">All Role within this project</p>
            <div className="w-full max-h-72 overflow-y-scroll ">
              {memeberSetting &&
                memeberSetting?.roles &&
                membersIsSuccess &&
                memeberSetting.members.map((member, index) => {
                  return (
                    <MemberItem
                      key={index}
                      member={member}
                      roles={memeberSetting.roles}
                      memberPermission={memberPermission}
                    />
                  );
                })}

              {memeberSetting &&
                memeberSetting?.invites &&
                membersIsSuccess &&
                memeberSetting.invites.map((invite, index) => {
                  return (
                    <InviteItem
                      key={index}
                      invite={invite}
                      roles={memeberSetting.roles}
                      memberPermission={memberPermission}
                    />
                  );
                })}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Members;
