import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  regNo: String,
  semester: String,
  iat: String,
  subject: String,
  marks: Number
});

const Marks = mongoose.model("Marks", marksSchema);

export default Marks;