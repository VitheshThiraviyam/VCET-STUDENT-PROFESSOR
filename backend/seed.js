import mongoose from "mongoose";
import Student from "./models/Student.js";
import ConnectDB from "./config/db.js";

const insertData = async () => {
  try {
    await ConnectDB();

    await Student.create({
      regNo: "913123104181",
      name: "Vithesh",
      department: "CSE",
      semester: 6,
      password: "123456"
    });

    console.log("Student Added");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default insertData;