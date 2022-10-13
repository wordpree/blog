import Router from "./index.js";
import { register, login } from "../controller/auth.js";

const authRouter = Router.post("/login", login).post("/register", register);

export default authRouter;
