import express from 'express'
import { login } from '../controllers/userLoginController.js'
import { registerUser } from '../controllers/userRegisterController.js'
import { deposit, withdraw, getFinances } from './../controllers/userFinancesController.js'

const userRoutes = express.Router()

userRoutes.post('/users', registerUser)
userRoutes.post('/login', login)
userRoutes.post('/deposit', deposit)
userRoutes.post('/withdraw', withdraw)
userRoutes.get('/getFinances', getFinances)
export default userRoutes