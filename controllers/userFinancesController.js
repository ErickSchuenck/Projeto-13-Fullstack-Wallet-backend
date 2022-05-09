import db from './../db.js'
import bcrypt from 'bcrypt'
const users = db.collection("users");

export async function withdraw(req, res) {
  console.log(req.body)
  const { value, type, title, token } = req.body

}

export async function deposit(req, res) {
  console.log(req.body)
  const { value, type, title, token } = req.body
  users.updateOne({ token }, { $push: { finances: [{ value, type, title }] } })
}
