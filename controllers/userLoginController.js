import db from './../db.js'
const users = db.collection("users");

export async function login(req, res) {
  console.log(req.body)

  const { email, password } = req.body
  try {
    await users.find({
      email,
      password
    })
    res.sendStatus(200)
  }
  catch (error) {
    res.send(error);
    console.log(error);
  }
}
