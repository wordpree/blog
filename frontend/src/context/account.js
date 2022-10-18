import { createContext, useContext, useReducer } from "react";
import * as action from "./action";
import * as api from "../api";

const AccountContext = createContext({});

const AccountProvider = ({ children, props }) => {
  const [state, dispatch] = useReducer(accountReducer, {
    account: null,
    status: null,
    errorMsg: null,
  });
  return (
    <AccountContext.Provider {...props} value={[state, dispatch]}>
      {children}
    </AccountContext.Provider>
  );
};

const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (!context) throw new Error(`context must be within a provider!`);
  return context;
};

const accountReducer = (state, { type, payload, status }) => {
  switch (type) {
    case action.SIGNUP_START:
      return { ...state, status: "start" };
    case action.SIGNUP_SUCCESS:
      return {
        ...state,
        status: "success",
        account: payload.account,
        errorMsg: null,
      };
    case action.SIGNUP_FAIL:
      return {
        ...state,
        status: "fail",
        account: null,
        errorMsg: payload.error,
      };
    default:
      throw new Error(`Unknow type: ${type}`);
  }
};

const signup = async (dispatch, data) => {
  try {
    dispatch({ type: action.SIGNUP_START, payload: {}, status: "start" });
    const response = await api.issueSignup(data);
    console.log(response);
    const result = response.data;
    dispatch({
      type: action.SIGNUP_SUCCESS,
      payload: { account: result },
      status: "success",
    });
  } catch (error) {
    dispatch({
      type: action.SIGNUP_FAIL,
      payload: { error: error.response.data.message },
      status: "fail",
    });
  }
};

export { AccountProvider, useAccountContext, signup };
