import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
export default mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.mysqlpwd,
    database:"blog"
})