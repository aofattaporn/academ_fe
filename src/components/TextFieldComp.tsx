import { useState } from "react";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TextFieldCompProps = {
  inputId: string;
  label: string;
  placeholder: string;
  errors?: string;
  isPassword: boolean;
} & UseFormRegisterReturn;

const TextFieldComp = forwardRef(
  (
    {
      inputId,
      label,
      placeholder,
      errors,
      isPassword,
      ...register
    }: TextFieldCompProps,
    ref
  ) => {
    const [isShowPassword, setIsShowPassword] = useState(true);

    const handleTogglePasswordVisibility = () => {
      setIsShowPassword((prev) => !prev);
    };

    return (
      <div>
        <h1 className="my-2">{label}</h1>
        <TextField
          size="small"
          fullWidth
          placeholder={placeholder}
          id={inputId}
          variant="outlined"
          type={isPassword && isShowPassword ? "password" : "text"}
          {...register}
          inputRef={ref}
          required
          InputProps={{
            endAdornment: isPassword ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
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
