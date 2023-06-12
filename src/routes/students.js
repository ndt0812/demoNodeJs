import express from 'express';

const routerStudents = express.Router();

routerStudents.get('/students', (req, res) => {
    res.send('wellcome students');
})


routerStudents.get('/students/details', (req, res) => {
    res.send('wellcome details students');
})

export default routerStudents;