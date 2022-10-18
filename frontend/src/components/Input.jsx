import React from "react";
import { TextFieldWrapper } from "../styled";

const Input = ({
  id,
  label = "",
  placeholder = "",
  helperText = "",
  name = "",
  value = "",
  inputProps = {},
  handleChange,
  InputProps,
  required = false,
  validateErr,
}) => {
  const enableErr = validateErr && !value.trim();
  const ht = enableErr ? "It is required" : helperText;
  return (
    <TextFieldWrapper
      required={required}
      value={value}
      name={name}
      id={id}
      label={label}
      placeholder={placeholder}
      error={enableErr}
      helperText={ht}
      inputProps={inputProps}
      onChange={handleChange}
      variant="standard"
      InputProps={InputProps}
    />
  );
};

export default Input;
