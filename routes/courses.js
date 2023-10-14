import express from 'express';
import { courses } from '../data.js';

const router = express.Router();

// get data of 
router.get('/', (req, res) => {
    return res.send(courses);
})

// create new course
router.post('/', (req,res) => {
    const courseCode = req.body.courseCode;
    const courseName = req.body.courseName;
    const semester = req.body.semester;

    if(!courseCode || !courseName || !semester) {
        return res.status(400).json(`Missing Properties!`);
    }

    const courseIds = courses.map(c => c.courseId);
    const newId = Math.max(...courseIds) + 1;

    const newCourse = [{
        courseId: newId,
        courseCode: req.body.courseCode,
        courseName: req.body.courseName,
        semester: req.body.semester
    }]

    courses.push(newCourse);
    return res.status(201).json({NewCourse: newCourse})
})

// delete courses

// update course details
router.patch(':id', (req, res) => {
    const courseId = parseInt(req.params.id);

    const courseIndex = courses.findIndex(course => c.courseId === courseId);

    if(courseIndex === -1){
        return res.status(404).json(`Customer with id ${courseId} Not Found!`)
    }

    const course = courses[courseIndex]



})

export default router;