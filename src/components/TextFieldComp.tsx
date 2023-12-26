import { FormHelperText, TextField } from "@mui/material";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TextFieldCompProps = {
  label: string;
  placeholder: string;
  errors?: string;
} & UseFormRegisterReturn;

const TextFieldComp = forwardRef(
  ({ label, placeholder, errors, ...register }: TextFieldCompProps, ref) => {
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
        {errors && (
          <FormHelperText
            id="my-helper-text"
            className="text-error"
            sx={{ color: "#FF3B3B" }}
          >
            {errors}
          </FormHelperText>
        )}
      </div>
    );
  }
);

export default TextFieldComp;
