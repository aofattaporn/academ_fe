import { TextField } from "@mui/material";

type TextFieldCompProps = {
  label: string;
  placeholder: string;
};

const TextFieldComp = ({ label, placeholder }: TextFieldCompProps) => {
  return (
    <>
      <h1 className="my-2">{label}</h1>
      <TextField
        size="small"
        fullWidth
        placeholder={placeholder}
        id="outlined-basic"
        variant="outlined"
      />
    </>
  );
};

export default TextFieldComp;
