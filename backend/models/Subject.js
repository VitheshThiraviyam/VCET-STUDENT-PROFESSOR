import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  subjectName: String,
  subjectCode: String,
  department: String,
  semester: Number
});

export default mongoose.model("Subject", subjectSchema);