import { useState } from "react";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import TextFeildInputComp from "../../../../components/Field/TextFeildInputComp";
import MemberItem from "./MemberItem/MemberItem";
import { MemberSetting } from "../../../../types/ProjectType";
import { QUERY_KEY } from "../../../../types/GenericType";
import { useQuery } from "react-query";
import projectApi from "../../../../libs/projectApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import { Alert, Button, CircularProgress } from "@mui/material";

const Members = () => {
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [memeberSetting, setMemberSetting] = useState<MemberSetting>();

  const {
    isLoading: membersIsLoading,
    isError: membersIsError,
    refetch: membersRefetch,
    isSuccess: membersIsSuccess,
  } = useQuery(
    QUERY_KEY.MEMBERS_SETTING,
    () => projectApi.getAllMembers(projectId as string),
    {
      refetchOnWindowFocus: false,
      onSuccess(data) {
        setMemberSetting(data);
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
            <p className=" text-gray-200">Manage Role within this project</p>
            <div className=" grid grid-cols-4 gap-4 w-full">
              <div className=" col-span-3 ">
                <TextFeildInputComp
                  placeholder={"Email Invite"}
                  value={memberEmail}
                  handleProjectName={(email: string) => setMemberEmail(email)}
                />
              </div>
              <div className=" col-span-1">
                <CreateProjectButtonComp
                  title={"Invite"}
                  disable={false}
                  isCreating={false}
                  handleChange={() => {}}
                />
              </div>
            </div>
          </div>

          <div className="my-2">
            <p className="text-gray-200">All Role within this project</p>
            <div className=" w-full ">
              {memeberSetting &&
                memeberSetting?.roles &&
                membersIsSuccess &&
                memeberSetting.members.map((member, index) => {
                  return (
                    <MemberItem
                      key={index}
                      member={member}
                      roles={memeberSetting.roles}
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
