import db from './../db.js'
import bcrypt from 'bcrypt'
const users = db.collection("users");

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
      res.send(user)
      res.redirect("/main")
    }

  }
  catch (error) {
    res.send(error);
    console.log(error);
  }
}
