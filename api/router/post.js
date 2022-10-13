import Router from "./index.js";
import { updatePost } from "../controller/post.js";

const postRouter = Router.post("/update", updatePost);

export default postRouter;
