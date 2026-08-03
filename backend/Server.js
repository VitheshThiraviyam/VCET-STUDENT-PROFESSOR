import express from 'express';
import mongoose from 'mongoose';
import ConnectDB from './config/db.js';
import insertData from './seed.js';
import loginrouter from './Routes/Login.js';
import cors from 'cors';
import attendanceRouter from './Routes/Attendanceroute.js';
import marksRouter from './Routes/Marksroute.js';
import arouter from './Routes/Announcementroute.js';

const app = express();
ConnectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth",loginrouter);
app.use("/api/attendance",attendanceRouter);
app.use("/api/marks",marksRouter);
app.use("/api/announcement",arouter);

app.listen(5000,() => {
    "Server is running"
});