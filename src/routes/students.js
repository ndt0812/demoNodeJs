import express from 'express';
import { createStudentController, studentController, studentDetailsController } from '../controllers/studentsController.js';

const routerStudents = express.Router();

routerStudents.get('/students', studentController)

routerStudents.get('/students/details', studentDetailsController)

routerStudents.post('/students', createStudentController)

export default routerStudents;