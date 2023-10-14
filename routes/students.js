import express from 'express';
import { students, enrollments } from '../data.js';

const router = express.Router();

// get data of students
router.get('/', (req, res) => {
    return res.send(students);
})

// create new course
router.post('/', (req,res) => {
    //const courseCode = req.body.courseCode;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    if(!firstName || !lastName || !password) {
        return res.status(400).json(`Missing Properties!`);
    }

    const studentIds = students.map(c => c.studendId);
    const newId = Math.max(...studentIds) + 1;

    const newStudent = [{
        studendId: newId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    }]

    students.push(newStudent);
    const newEnrollment ={
        studendId: newId,
        courses: []
    }
    enrollments.push(newEnrollment);
    return res.status(201).json({NewStudent: newStudent})
})

export default router;