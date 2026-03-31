import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  regNo: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model("Student", studentSchema);