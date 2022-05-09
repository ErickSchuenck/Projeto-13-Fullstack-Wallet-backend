import db from '../db.js'
import bcrypt from 'bcrypt'
const users = db.collection("users");

export async function registerUser(req, res) {
  const { email, password, name } = req.body
  try {
    await users.insertOne({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      finances: [],
      token: ''
    })
    res.sendStatus(200)
  }
  catch (error) {
    res.send(error);
    console.log(error);
  }
}
