import express from "express";
import { Router } from 'express'
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from './routers/userRouters.js'


dotenv.config();
const app = express()
// funções
app.use(cors());
app.use(express.json());
// criar função para: Enviar email e senha. Cadastrar usuário com nome, email e senha, enviar entrada, enviar saida, pegar registros
app.listen(5000, () => console.log('server ligado na porta 5000'));
app.use(userRoutes)

// app.post('/transactions', async (req, res) => {
//   const { name, token, type, value, description
//   } = req.body
//   await users.insertOne({
//     type: type,
//     name: name,
//     token: token,
//     value: value,
//     description: description,
//   })
// })

// app.get('/transactions', async (req, res) => {
//   try {
//     const lastTransactions = await transactions
//       .find()
//       .toArray()
//     res.send(lastTransactions)
//   }
//   catch {
//     res.sendStatus(500)
//   }
// })