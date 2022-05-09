import db from './../db.js'
import bcrypt from 'bcrypt'
import { v4 } from 'uuid'

const users = db.collection("users");
const token = v4()

export async function login(req, res) {
  console.log(req.body)

  const { email, password } = req.body
  try {
    const user = await users.findOne({
      email
    })
    if (!user) {
      res.sendStatus(404)
      return
    }
    if (!bcrypt.compareSync(password, user.password)) {
      res.send('Incorrect password')
    }
    else {
      console.log(
        user._id,
        token,
      )
      res.send(
        {
          id: user._id,
          token,
        }
      )
    }
  }
  catch (error) {
    res.send(error);
    console.log(error);
  }
}
