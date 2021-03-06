import express from "express";
import { Router } from 'express'
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from './routers/userRouters.js'


dotenv.config();
const app = express()
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server ligado'));
app.use(userRoutes)
