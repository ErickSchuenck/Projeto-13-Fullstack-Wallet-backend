import db from './../db.js'
import bcrypt from 'bcrypt'
const users = db.collection("users");

export async function withdraw(req, res) {
  const { value, type, title, token } = req.body
  try {
    users.updateOne({ token }, { $push: { finances: [{ value, type, title }] } })
    res.sendStatus(200)
  }
  catch (error) {
    res.send(error)
  }
}

export async function deposit(req, res) {
  const { value, type, title, token } = req.body
  try {
    users.updateOne({ token }, { $push: { finances: [{ value, type, title }] } })
    res.sendStatus(200)
  }
  catch (error) {
    res.send(error)
  }
}

export async function getFinances(req, res) {
  const { token } = req.body
  console.log('REQ BODY', req.body)
  try {
    const userFinances = await users.findOne({ token: token })
    console.log('user', user)
    res.send(user.finances)
  }
  catch (error) {
    res.send(error)
  }
}
