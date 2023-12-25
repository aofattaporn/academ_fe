import { FormHelperText, TextField } from "@mui/material";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TextFieldCompProps = {
  label: string;
  placeholder: string;
} & UseFormRegisterReturn;

const TextFieldComp = forwardRef(
  ({ label, placeholder, ...register }: TextFieldCompProps, ref) => {
    return (
      <div>
        <h1 className="my-2">{label}</h1>
        <TextField
          size="small"
          fullWidth
          placeholder={placeholder}
          id="outlined-basic"
          variant="outlined"
          type="text"
          {...register}
          inputRef={ref}
          required
        />
        {false && (
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        )}
      </div>
    );
  }
);

export default TextFieldComp;
