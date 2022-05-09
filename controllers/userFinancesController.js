import db from './../db.js'
import bcrypt from 'bcrypt'
const users = db.collection("users");

export async function withdraw(req, res) {
  console.log(req.body)

  const { value, type, title } = req.body

}

export async function deposit(req, res) {
  console.log(req.body)

  const { value, type, title } = req.body

}
