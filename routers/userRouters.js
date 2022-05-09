import express from 'express'
import { login } from '../controllers/userLoginController.js'
import { registerUser } from '../controllers/userRegisterController.js'
import { deposit, withdraw, getFinances } from './../controllers/userFinancesController.js'
import { registerValidation } from "../middlewares/registerValidation.js";
import { loginValidation } from '../middlewares/loginValidation.js';
import { financesValidation } from '../middlewares/financesValidation.js'


const userRoutes = express.Router()

userRoutes.post('/users', registerValidation, registerUser)
userRoutes.post('/login', loginValidation, login)
userRoutes.post('/deposit', financesValidation, deposit)
userRoutes.post('/withdraw', financesValidation, withdraw)
userRoutes.get('/getFinances', getFinances)
export default userRoutes