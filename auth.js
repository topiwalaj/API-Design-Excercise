// const verifyPassword = (req, res, next) => {
//     const token = req.headers.authorization;
//     if(req.method === 'GET'){
//         return next();
//     }
//     if(!(token === 12345)) {
//         return res.status(401).send("unauthorized")
//     }
//     next();
// }
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { students } from './data';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.post('/login', (req, res) => {
    const reqId = req.body.id;
    const reqPassword = req.body.password;

    const foundStudent = students.find(s => s.studendId == reqId && s.password == reqPassword)

    if(!foundStudent){
        return res.status(401).json(`Student Id or Password Invalid!`)
    }

    const token = jsonwebtoken.sign({reqId}, process.env.KEY, {expiresIn: '45sec'});
    return res.json({token});
})
