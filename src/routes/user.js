import express from 'express';
import { createUserController, loginUserController, userController, userDetailsController, searchUserController } from '../controllers/userController.js';

const routerUser = express.Router();

routerUser.get('/user/search',searchUserController)

routerUser.get('/user/:userId', userDetailsController)

routerUser.post('/user/login', loginUserController)

routerUser.post('/user', createUserController)

routerUser.get('/user', userController)

export default routerUser;