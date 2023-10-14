import express from 'express';
import courseRouter from './routes/courses.js';
import studentRouter from './routes/students.js'; 
import enrollmentRouter from './routes/enrollments.js';
const app = express();

const port = 3000;

app.use(express.json());

app.use('/courses', courseRouter)

app.use('/students', studentRouter)

app.use('/enrollment', enrollmentRouter)

app.listen(port, () => console.log(`Running on : http://localhost:${port}`));