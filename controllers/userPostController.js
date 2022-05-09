import db from './../db.js'
import bcrypt from 'bcrypt'
const users = db.collection("users");

export async function registerUser(req, res) {
  console.log(req.body)

  const { email, password, name } = req.body
  try {
    await users.insertOne({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      finances: []
    })
    res.sendStatus(200)
  }
  catch (error) {
    res.send(error);
    console.log(error);
  }
}
