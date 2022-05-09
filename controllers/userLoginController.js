import db from './../db.js'
import bcrypt from 'bcrypt'
import { v4 } from 'uuid'

const users = db.collection("users");


export async function login(req, res) {
  const token = v4()
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
      users.updateOne({ email }, { $set: { token } })
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
