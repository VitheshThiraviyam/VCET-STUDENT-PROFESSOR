import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import insertData from './seed.js';
import loginrouter from './Routes/Login.js';
import cors from 'cors';
import attendanceRouter from './Routes/Attendanceroute.js';
import marksRouter from './Routes/Marksroute.js';
import arouter from './Routes/Announcementroute.js';

dotenv.config();
const app = express();
ConnectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth",loginrouter);
app.use("/api/attendance",attendanceRouter);
app.use("/api/marks",marksRouter);
app.use("/api/announcement",arouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    "Server is running"
});