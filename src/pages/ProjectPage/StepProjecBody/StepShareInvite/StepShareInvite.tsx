import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Button,
} from "@mui/material";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import InviteItem from "./InviteItem/InviteItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import {
  addInviteProject,
  removeInviteProject,
} from "../../../../stores/createProject/createProjectSlice";
import OwnerItem from "./OwnerItem/OwnerIten";

const roles = ["Owner", "Member"];

const InviteButton = styled(Button)({
  backgroundColor: "#AF8AE2",
  font: "normal",
  color: "#FFFFFF",
  textTransform: "none",
  "&:disabled": {
    background: "#F1EAFF",
    color: "#BDBDBD",
    boxShadow: "none",
  },
  "&:hover": {
    backgroundColor: "#AF8AE2",
    color: "#FFFFFF",
  },
});

const StepShareInvite = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const invites = useSelector(
    (state: RootState) => state.createProject.invites
  );
  const dispatch = useDispatch();

  const handleAddInvite = () => {
    dispatch(
      addInviteProject({
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
        <div className="flex items-center gap-2">
          <TextField
            size="small"
            className="w-7/12"
            placeholder="Type email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl size="small" className="w-3/12">
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedRole}
              label="Role"
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <InviteButton
            className="w-2/12 shadow-md"
            disabled={selectedRole === "" || email === ""}
            onClick={handleAddInvite}
          >
            Invite
          </InviteButton>
        </div>

        <OwnerItem />

        {invites.map((item, index) => {
          return (
            <InviteItem
              key={index}
              email={item.email}
              role={item.role}
              handleRemove={() => dispatch(removeInviteProject(index))}
            />
          );
        })}
      </div>
      <div className="bg-main mt-6">
        <CreateProjectButtonComp
          title="Next"
          disable={false}
          handleChange={() => {}}
        />
      </div>
    </>
  );
};

export default StepShareInvite;
