import express from "express";
import Marks from "../models/Mark.js";

const marksRouter = express.Router();

marksRouter.post("/add", async (req, res) => {
  try {
    const { regNo, semester, iat, subject, marks } = req.body;

    if (marks > 100 || marks < 0) {
      return res.json({ message: "Marks must be between 0 and 100" });
    }

    const existing = await Marks.findOne({
      regNo,
      semester,
      iat,
      subject
    });

    if (existing) {
      return res.json({ message: "Marks already exist for this subject & IAT" });
    }

    const newMarks = await Marks.create({
      regNo,
      semester,
      iat,
      subject,
      marks
    });

    res.json({ message: "Marks added successfully", data: newMarks });

  } catch {
    res.status(500).json({ message: "Error adding marks" });
  }
});

marksRouter.get("/all", async (req, res) => {
  try {
    const data = await Marks.find().sort({ createdAt: -1 });
    res.json(data);
  } catch {
    res.status(500).json({ message: "Error fetching marks" });
  }
});

marksRouter.get("/view", async (req, res) => {
  try {
    const { regNo } = req.query;

    const data = await Marks.find({ regNo }).sort({ semester: 1 });

    res.json(data);

  } catch {
    res.status(500).json({ message: "Error fetching marks" });
  }
});

marksRouter.put("/update/:id", async (req, res) => {
  try {
    const { marks } = req.body;

    if (marks > 100 || marks < 0) {
      return res.json({ message: "Marks must be between 0 and 100" });
    }

    const updated = await Marks.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.json({ message: "Marks not found" });
    }

    res.json({ message: "Marks updated successfully", data: updated });

  } catch {
    res.status(500).json({ message: "Error updating marks" });
  }
});

marksRouter.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Marks.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.json({ message: "Marks not found" });
    }

    res.json({ message: "Marks deleted successfully" });

  } catch {
    res.status(500).json({ message: "Error deleting marks" });
  }
});

export default marksRouter;