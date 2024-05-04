import { TextField } from "@mui/material";

type TextFeildInputCompProps = {
  disable: boolean;
  placeholder: string;
  value: string;
  handleProjectName: (projectName: string) => void;
};

const TextFeildInputComp = ({
  disable,
  placeholder,
  value,
  handleProjectName,
}: TextFeildInputCompProps) => {
  return (
    <TextField
      disabled={disable}
      size="small"
      fullWidth
      value={value}
      placeholder={placeholder}
      variant="outlined"
      type="text"
      onChange={(e) => handleProjectName(e.target.value)}
      required
    />
  );
};

export default TextFeildInputComp;
