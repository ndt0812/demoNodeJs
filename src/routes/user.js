import express from 'express';

const routerUser = express.Router();

routerUser.get('/user', (req, res) => {
    res.send('wellcome user');
})

routerUser.get('/user/details', (req, res) => {
    res.send('wellcome details user');
})

export default routerUser;