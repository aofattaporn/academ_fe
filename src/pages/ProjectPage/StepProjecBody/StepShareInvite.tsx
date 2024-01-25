import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Button,
  Avatar,
} from "@mui/material";
import CreateProjectButtonComp from "../../../components/Button/CreateProjectButtonComp";
import CloseIcon from "@mui/icons-material/Close";
import EmailItem from "./InviteItem/InviteItem";

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

  const InviteItem = (email: string, role: string) => {
    return (
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <CloseIcon className="cursor-pointer hidden text-primary" />
          <p className="text-dark">{email}</p>
        </div>
        <div className="bg-primary-subtle py-1 px-2 rounded-md text-gray-400 text-sm">
          <p>{role}</p>
        </div>
      </div>
    );
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
          >
            Invite
          </InviteButton>
        </div>

        <div className="text-gray-400 my-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar
              className="bg-white"
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "White",
                color: "black",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
              }}
            >
              <p className="text-gray-400 text-md">A</p>
            </Avatar>
            <p>Attaporn Peungsook</p>
          </div>
          <div className=" bg-primary-subtle py-1 px-2 rounded-md  text-gray-400 text-sm">
            <p>Owner</p>
          </div>
        </div>

        <EmailItem email="thunyathep2544@gmail.com" role="Owner" />
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
