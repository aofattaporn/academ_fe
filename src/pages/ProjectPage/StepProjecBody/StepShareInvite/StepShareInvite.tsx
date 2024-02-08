import { useState } from "react";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import InviteItem from "./InviteItem/InviteItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import {
  addInvitedUser,
  incrementStep,
  removeInvitedUser,
} from "../../../../stores/projectSlice/createProjectSlice";
import OwnerItem from "./OwnerItem/OwnerIten";
import ShareInviteField from "../../../../components/Field/ShareInviteField";

const roles = ["Owner", "Member"];

const StepShareInvite = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();

  const invites = useSelector(
    (state: RootState) => state.createProject.invitedUsers
  );

  const handleAddInvite = () => {
    dispatch(
      addInvitedUser({
        email: email,
        role: selectedRole,
      })
    );
    setSelectedRole("");
    setEmail("");
  };

  return (
    <>
      <div className="bg-main mt-6 p-8 font-roboto ">
        <ShareInviteField
          label="Role"
          options={roles}
          email={email}
          selected={selectedRole}
          handleEmail={(email: string) => setEmail(email)}
          handleSelected={(role: string) => setSelectedRole(role)}
          handleSave={handleAddInvite}
        />
        <OwnerItem />

        {invites.map((item, index) => {
          return (
            <InviteItem
              key={index}
              email={item.email}
              role={item.role}
              handleRemove={() => dispatch(removeInvitedUser(index))}
            />
          );
        })}
      </div>
      <div className="bg-main mt-6">
        <CreateProjectButtonComp
          title="Next"
          disable={false}
          handleChange={() => dispatch(incrementStep())}
        />
      </div>
    </>
  );
};

export default StepShareInvite;
