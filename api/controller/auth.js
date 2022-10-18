import { json } from "express";
import db from "../db/config.js";
import { encryptPwd, decryptPwd } from "../util/index.js";

const register = (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const q = ` SELECT * from users WHERE email=? OR username=? `;

  db.query(q, [email, username], (err, result) => {
    if (err) {
      return res.json(err);
    }

    if (result.length) {
      const existingUserAndEmail = result.find(
        (r) => r.username === username && r.email === email
      );
      const existingUser = result.find((r) => r.username === username);
      const existingEmail = result.find((r) => r.email === email);

      if (existingUserAndEmail) {
        return res
          .status(409)
          .json({ message: `User and email has already been used!` });
      }
      if (existingUser) {
        return res.status(409).json({ message: `User has already been used!` });
      }
      if (existingEmail) {
        return res
          .status(409)
          .json({ message: `Email has already been used!` });
      }
    }

    const crpPswd = encryptPwd(password, process.env.sec_key);
    const q =
      "INSERT INTO users (`username`,`email`,`password`) VALUES (?,?,?)";
    db.query(q, [username, email, crpPswd], (err, result) => {
      if (err) {
        return res.json(err);
      }
      return res.status(200).json({ username, email, id: result.insertId });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const q = `SELECT * from users WHERE email=?`;

  db.query(q, [email], (err, result) => {
    if (err) {
      return res.json(err);
    }
    if (result.length === 0) {
      return res.status(404).json(`Account not existing!`);
    }
    if (result.length) {
      const originalText = decryptPwd(result[0].password, process.env.sec_key);
      if (originalText === password) {
        return res.status(200).json(`User login successfully.`);
      } else {
        return res.status(401).json(`Incorrect password!`);
      }
    }
  });
};

export { register, login };
