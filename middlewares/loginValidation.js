import bcrypt from "bcrypt";

import db from "../db.js";
const users = db.collection("users");

export async function loginValidation(req, res, next) {
  const { email, password } = req.body;
  const user = await users.findOne({ email });
  if (!user) {
    return res.status(404);
  }
  if (bcrypt.compareSync(password, user.password)) {
    res.locals.user = user;
  }
  next();
}