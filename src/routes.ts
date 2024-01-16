import express from 'express'
import { getUser, saveUser } from './controllers/userController'

const routes = express.Router()

routes.get('/', getUser)
routes.post('/teste', saveUser)

export default routes