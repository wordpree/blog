import Router from "./index.js";
import { addUser } from "../controller/user.js";

const authRouter = Router.post("/user", addUser);

export default authRouter;
