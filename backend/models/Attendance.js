import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  regNo: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Present", "Absent", "Leave", "OD"],
    default: "Present"
  },
  date: {
    type: String,
    required: true
  }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;