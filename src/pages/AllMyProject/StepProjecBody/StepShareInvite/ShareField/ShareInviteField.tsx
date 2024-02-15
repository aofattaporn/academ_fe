import {
  styled,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { placeholders } from "../../../../../types/AuthType";

type ShareFieldProps = {
  label: string;
  options: string[];
  email: string;
  selected: string;
  handleEmail: (email: string) => void;
  handleSelected: (selected: string) => void;
  handleSave: () => void;
};

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

const ShareInviteField: React.FC<ShareFieldProps> = ({
  label,
  options,
  email,
  selected,
  handleEmail,
  handleSelected,
  handleSave,
}) => {
  return (
    <div className="flex items-center gap-2">
      <TextField
        size="small"
        className="w-7/12"
        placeholder={placeholders.email}
        value={email}
        onChange={(e) => handleEmail(e.target.value)}
      />
      <FormControl size="small" className="w-3/12">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={label}
          onChange={(e) => handleSelected(e.target.value)}
        >
          {options.map((data) => (
            <MenuItem key={data} value={data}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <InviteButton
        className="w-2/12 shadow-md"
        disabled={!email || !selected}
        onClick={handleSave}
      >
        Invite
      </InviteButton>
    </div>
  );
};

export default ShareInviteField;
