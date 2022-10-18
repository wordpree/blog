import React from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Input from "./Input";

const FormField = ({ input, handleChange, validateErr }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { username, email, password } = input;
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <Input
        validateErr={validateErr}
        required
        id="username"
        value={username}
        name="username"
        handleChange={handleChange}
        label="user name"
      />
      <Input
        validateErr={validateErr}
        required
        id="email"
        value={email}
        name="email"
        inputProps={{ type: "email" }}
        handleChange={handleChange}
        label="email"
      />
      <Input
        validateErr={validateErr}
        required
        id="password"
        value={password}
        name="password"
        inputProps={{ type: showPassword ? "text" : "password" }}
        handleChange={handleChange}
        label="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default FormField;
