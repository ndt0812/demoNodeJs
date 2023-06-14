import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const createUserService = ({ email, password, userName }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
            if (isEmail) {
                const checkEmail = await User.find({ email: email });
                const checkUserName = await User.find({ userName });

                if (checkEmail.length || checkUserName.length) {
                    resolve({
                        status: 'err',
                        message: 'UserName or Email is existed'
                    })
                }

                const hashPassword = bcrypt.hashSync(password, 10);
                console.log('hashPassword', hashPassword)
                const newUser = await User.create({
                    email,
                    password: hashPassword,
                    userName
                })
                resolve({
                    status: 'thanh cong',
                    data: {
                        email: newUser.email,
                        password: hashPassword,
                        userName: newUser.userName
                    }
                })
            } else {
                resolve({
                    status: 'err',
                    message: 'please enter the correct email'
                })
            }
        } catch (error) {
            reject({
                status: 'err',
                message: error
            })
        }
    })
}

//login api
export const loginUserService = ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
            if (isEmail) {
                const useDB = await User.find({ email: email });
                if (useDB) {
                const checkPassword = await bcrypt.compareSync(password, useDB[0].password);
                    if (checkPassword) {
                        resolve({
                            status: 'login thanh cong',
                            data: {
                                userName: useDB[0].userName,
                                email: useDB[0].email
                            }
                        })
                    }
                    resolve({
                        status: 'ERR',
                        message: 'The email or password is something wrong'
                    })
                } else {
                    resolve({
                        status: 'err',
                        message: 'please enter the correct email'
                    })
                }
            }
        } catch (error) {
            reject({
                status: 'err',
                message: error
            })
        }
    }).catch((err) => {
        console.log(err)
    })
}