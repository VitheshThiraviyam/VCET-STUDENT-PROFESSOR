import express, { Router } from 'express';
import Student from '../models/Student.js';
import Professor from '../models/Professor.js';

const loginrouter = express.Router();

loginrouter.post("/login", async (req, res) => {
    const { regNo, password } = req.body;
    const student = await Student.findOne({ regNo });

    if (!student) {
        return res.json({ message: "Unauthorized access" });
    }
    if (student.password != password) {
        return res.json({ message: "Wrong password" });
    }
    console.log(req.body);
    res.json({
        message: "Login successfull",
        student: {
            regNo: student.regNo,
            name: student.name,
            department: student.department,
            semester: student.semester
        }
    });

})
loginrouter.post("/adminlogin", async (req,res) => {
    const { staffId, password } = req.body;

    const faculty = await Professor.findOne({staffId});

    if(!faculty)
    {
        return res.json({message : "Unauthorized access"})
    }
    if(faculty.password != password)
    {
        return res.json({message: "Wrong password"});
    }
    console.log(req.body);
    res.json({
        message: "Login Successfull",
        faculty: {
            name: faculty.name,
            department: faculty.department,
        }
    })
})

export default loginrouter;