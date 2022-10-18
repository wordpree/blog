import axios from "axios";

const issueSignup = async (data) => {
  return await axios.post(`http://localhost:4000/api/v1/auth/register`, data);
};

export { issueSignup };
