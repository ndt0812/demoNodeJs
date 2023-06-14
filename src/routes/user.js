import express from 'express';
import { createUserController, loginUserController, userController, userDetailsController } from '../controllers/userController.js';

const routerUser = express.Router();

routerUser.get('/user', userController)

routerUser.get('/user/details', userDetailsController)

routerUser.post('/user', createUserController)

routerUser.post('/user/login', loginUserController)

export default routerUser;