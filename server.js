import express from "express";
import { Router } from 'express'
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import { type } from "express/lib/response";

let db;
const app = express()

// funções

app.use(cors());
app.use(express.json());
dotenv.config();

// criar função para: Enviar email e senha. Cadastrar usuário com nome, email e senha, enviar entrada, enviar saida, pegar registros


app.listen(5000, () => console.log('server ligado na porta 5000'));

// regex email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const mongoClient = new MongoClient(process.env.MONGO_URL);
await mongoClient.connect()
  .then(() => {
    db = mongoClient.db("projeto13-mywallet");
  })
  .catch(error => console.log("Database conection problem", error));

const users = db.collection("users");
const transactions = db.collection("transactions");

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body
  await users.insertOne({
    name: name,
    email: email,
    password: password,
  })
})

app.post('/transactions', async (req, res) => {
  const { name, token, type, value, description
  } = req.body
  await users.insertOne({
    type: type,
    name: name,
    token: token,
    value: value,
    description: description,
  })
})

app.get('/transactions', async (req, res) => {
  try {
    const lastTransactions = await transactions
      .find()
      .toArray()
    res.send(lastTransactions)
  }
  catch {
    res.sendStatus(500)
  }
})