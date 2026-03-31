import mongoose from "mongoose";

const professorSchema = new mongoose.Schema({
  name: String,
  staffId: String,
  department: String,
  password: String
});

export default mongoose.model("Professor", professorSchema);