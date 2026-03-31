import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  regNo: String,
  subject: String,
  marks: Number
});

export default mongoose.model("Marks", marksSchema);