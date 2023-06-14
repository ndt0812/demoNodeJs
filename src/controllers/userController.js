import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import { createUserService, loginUserService } from "../services/userServices.js";

export const userController = (req, res) => {
    res.send('wellcome user');
}

export const userDetailsController = (req, res) => {
    res.send('wellcome details user');
}

//1.lay duoc thong tin tu phia client gui len server
//2.check xem thong tin duoc gui len da dung chua va co ton tai trong db hay khong
//3.thong tin tu phia client gui len duoc luu vao DB
//4.hien thi ve cho user da tao ra
export const createUserController = async (req, res) => {
    //1
    const { email, password, userName } = req.body;
    //2
    if (email && password && userName) {
        const response = await createUserService({ email, password, userName });
        return res.json(response)
    } else {
        return res.json({
            status: 'err',
            message: 'please enter information'
        })
    }
} 

export const loginUserController = async (req, res) => {
    const { email, password} = req.body;
    if (email && password ) {
        const response = await loginUserService({ email, password });
        return res.json(response)
    } else {
        return res.json({
            status: 'err',
            message: 'please enter email or password'
        })
    }
} 
