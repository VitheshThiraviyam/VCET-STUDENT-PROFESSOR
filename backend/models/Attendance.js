import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  regNo: String,
  subject: String,
  percentage: Number
});

export default mongoose.model("Attendance", attendanceSchema);