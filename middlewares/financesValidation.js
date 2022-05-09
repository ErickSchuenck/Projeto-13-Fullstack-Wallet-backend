import joi from "joi";

import db from "../db.js";
const users = db.collection("users");

export async function financesValidation(req, res, next) {
  const userSchema = joi.object({
    date: joi.string().required(),
    type: joi.string().required(),
    title: joi.string().required(),
    token: joi.string().required(),
    value: joi.number().required(),
  });
  const validation = userSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }
  const uniqueEmailValidation = await users.findOne({ email: req.body.email });
  if (uniqueEmailValidation) {
    return res.sendStatus(409)
  }
  next();
}