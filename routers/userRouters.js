import express from 'express'
import { login } from '../controllers/userLoginController.js'
import { registerUser } from './../controllers/userPostController.js'

const userRoutes = express.Router()

userRoutes.post('/users', registerUser)
userRoutes.get('/users', login)
export default userRoutes