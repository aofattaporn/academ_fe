import { useState } from "react";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import TextFeildInputComp from "../../../../components/Field/TextFeildInputComp";
import MemberItem from "./MemberItem/MemberItem";
import { FullMember, Role } from "../../../../types/ProjectType";

const MOCK_ROLE: FullMember[] = [
  {
    userName: "aofattaorn",
    email: "aofattapon@hotmail.com",
    roleId: "1",
  },
  {
    userName: "thunyathep",
    email: "thunyathep@hotmail.com",
    roleId: "2",
  },
];

const MOCK_ROLES: Role[] = [
  { roleId: "1", roleName: "Owner" },
  { roleId: "2", roleName: "Member" },
];

const Members = () => {
  const [memberEmail, setMemberEmail] = useState<string>("");

  return (
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
          {MOCK_ROLE.map((member, index) => {
            return (
              <MemberItem key={index} member={member} roles={MOCK_ROLES} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Members;
