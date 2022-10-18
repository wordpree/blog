import styled, { keyframes } from "styled-components";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import { Link } from "react-router-dom";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SignupCard = styled(Card)`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.16);
`;

const LeftPanel = styled(Box)`
  position: relative;
  flex: 2;
`;

const SignupFrm = styled(Box)`
  position: relative;
`;

const TextFieldWrapper = styled(TextField)`
  margin: 0.75rem 0;
  min-width: 248px;
`;

const SubmitButton = styled(Button)`
  margin-top: 2rem;
  text-transform: capitalize;
  padding: 0.25rem 1.5rem;
  border-radius: 5px;
  width: 248px;
`;

const SignupFormField = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const Title = styled(Typography)`
  margin-left: 3rem;
`;

const SignupFrmHeader = styled(CardContent)`
  display: flex;
  align-items: center;
  border-bottom: 1px inset #ddd;
  padding: 1.5rem 2rem;
`;

const SignupAtag = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #1976d2;
`;

const Loading = styled(SyncOutlinedIcon)`
  animation: ${rotate} 2s linear infinite;
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 6px;
`;

export {
  SignupFrm,
  SignupCard,
  TextFieldWrapper,
  LeftPanel,
  SubmitButton,
  SignupFormField,
  SignupFrmHeader,
  Title,
  SignupAtag,
  Loading,
  ErrorMsg,
};
