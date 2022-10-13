import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./router/auth.js";
import userRouter from "./router/user.js";
import postRouter from "./router/post.js";

dotenv.config();
const port = process.env.port || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/post", postRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.listen(port, () => console.log(`app is running on port ${port}`));
