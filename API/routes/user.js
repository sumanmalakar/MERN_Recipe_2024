import express from 'express'
import { register,login,allUser, MyProfile } from '../controllers/user.js'
import { Authenticate } from '../middleware/auth.js'

const router = express.Router()


router.post('/register',register)

router.post('/login',login)

router.get('/users',allUser)

router.get('/profile',Authenticate,MyProfile)

export default router;