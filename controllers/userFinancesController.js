import db from './../db.js'
const users = db.collection("users");

export async function withdraw(req, res) {
  const { value, type, title, token, date } = req.body
  try {
    users.updateOne({ token }, { $push: { finances: { value, type, title, date } } })
    res.sendStatus(200)
  }
  catch (error) {
    res.send(error)
  }
}

export async function deposit(req, res) {
  const { value, type, title, token, date } = req.body
  try {
    await users.updateOne({ token }, { $push: { finances: { value, type, title, date } } })
    res.sendStatus(200)
  }
  catch (error) {
    res.send(error)
  }
}

export async function getFinances(req, res) {
  const { token } = req.headers
  try {
    const userFinances = await users.findOne({ token: token })
    res.send({ userFinances })
  }
  catch (error) {
    res.send(error)
  }
}
