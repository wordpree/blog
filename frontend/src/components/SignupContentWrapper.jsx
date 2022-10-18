import React from "react";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { SignupAtag } from "../styled";

const SignupContentWrapper = () => {
  return (
    <>
      <CardContent sx={{ marginTop: "2rem" }}>
        <Typography variant="subtitle2" color="text.secondary">
          By proceeding, you are agreed to the
          <SignupAtag> Terms & Conditions</SignupAtag> and
          <SignupAtag> Privacy Policy</SignupAtag>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: "0.5rem" }}
        >
          Already have an account?{" "}
          <SignupAtag className="nav-link" to="/login">
            Login
          </SignupAtag>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" sx={{ fontSize: 12 }}>
          Help
        </Button>
        <Button size="small" sx={{ fontSize: 12 }}>
          Privacy
        </Button>
      </CardActions>
    </>
  );
};

export default SignupContentWrapper;
