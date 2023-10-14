import express from 'express';
import { courses, enrollments } from '../data.js';

const router = express.Router();

// get data of 
// router.get('/', (req, res) => {
//     return res.send(courses);
// })

// adds an entry into your data structure
router.patch('/:studentId', (req,res) => {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;
    const studentIndex = enrollments.findIndex(e => e.studendId == studentId)

    if(studentIndex == -1) {
        return res.status(404).json(`Student with id ${studentId} Not Found!`)
    }

    //const courseIndex = enrollments.findIndex(e => e.studendId == studentId)

    if(!courses.map(c => c.courseId).includes(courseId)){
        return res.status(404).json(`Course Not Found.`)
    }

    const enrollment = enrollments[index];
    enrollment.courses.push(courseId);
    console.log(studentId,courseId)
    return res.status(200).json(enrollment);
})

// removes an entry from your data structure
router.delete('/:studentId', (req,res) => {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;

    const studentIndex = enrollments.findIndex(e => e.studendId == studentId)

    if(studentIndex == -1) {
        return res.status(404).json(`Student with id ${studentId} Not Found!`)
    }

    const enrollment = enrollments[index];

    if(!enrollment.courses.includes(courseId)){
        return res.status(400).json("You are not in this course")
    }

    const courseIndex = enrollments.courses.findIndex(c => c == courseId)
    enrollment.courses.splice(courseIndex, 1);
    return res.status(204).json('Deleted');
})

// lists all students for a given course
router.get('/:courseId', (req,res) => {
    const courseId = req.params.courseId;
    const studenEnroll = [];
    enrollments.forEach(e => {
        if (e.courses.includes(courseId)){
            studenEnroll.push(e.studendId);
        }
    })
    return res.status(200).json(studenEnroll);
})

export default router;