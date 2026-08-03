import express from 'express';
import Attendance from '../models/Attendance.js';

const attendanceRouter = express.Router();

attendanceRouter.post('/add', async (req, res) => {
  try {
    const { regNo, status, date } = req.body;

    const existing = await Attendance.findOne({ regNo, date });

    if (existing) {
      return res.json({ message: "Attendance already marked for this date" });
    }

    const newAttendance = new Attendance({
      regNo,
      status,
      date
    });

    await newAttendance.save();

    res.json({
      message: "Attendance added successfully",
      data: newAttendance
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
attendanceRouter.get('/view', async (req, res) => {
  const { regNo } = req.query;

  const data = await Attendance.find({ regNo });

  res.json(data);
});
export default attendanceRouter;