import React from "react";
import { CardMedia, Container } from "@mui/material";
import FormField from "../components/FormField";
import SignupContentWrapper from "../components/SignupContentWrapper";
import {
  SignupFrm,
  SignupCard,
  SubmitButton,
  SignupFormField,
  SignupFrmHeader,
  LeftPanel,
  Title,
  Loading,
  ErrorMsg,
} from "../styled";
import { useAccountContext, signup } from "../context/account";
import { validate } from "../utils";
import img from "../assets/img/right.jpg";
import Logo from "../components/Logo";

const Signup = () => {
  const [input, setInputValue] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = React.useState(false);
  const [state, dispatch] = useAccountContext();

  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate([input.username, input.email, input.password])) {
      signup(dispatch, input);
    } else {
      setErr(true);
    }
  };
  return (
    <Container maxWidth="lg">
      <SignupCard>
        <LeftPanel>
          <SignupFrm component="form" noValidate autoComplete="off">
            <SignupFrmHeader>
              <Logo size="large" />
              <Title component="div" variant="h6">
                Create a blog account
              </Title>
            </SignupFrmHeader>
            <SignupFormField>
              <FormField
                input={input}
                handleChange={handleChange}
                validateErr={err}
              />
              {state.status === "fail" && <ErrorMsg>{state.errorMsg}</ErrorMsg>}
              <SubmitButton
                variant="contained"
                onClick={handleSignup}
                disabled={state.status === "start"}
              >
                Sign Up
              </SubmitButton>
              {state.status === "start" && <Loading />}
            </SignupFormField>
            <SignupContentWrapper />
          </SignupFrm>
        </LeftPanel>
        <CardMedia
          component="img"
          sx={{ flex: 3, height: "65.25vh" }}
          image={img}
          alt="Book shelf"
        />
      </SignupCard>
    </Container>
  );
};

export default Signup;
