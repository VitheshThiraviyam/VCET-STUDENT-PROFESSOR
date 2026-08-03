import express from 'express';
import Announcement from '../models/Announcement.js';

const arouter = express.Router();

arouter.post('/add', async (req, res) => {
  try {
    const announcement = new Announcement(req.body);
    await announcement.save();
    res.json({ message: "Announcement added successfully" });
  } catch (err) {
    res.json({ message: "Error adding announcement" });
  }
});

arouter.get('/view', async (req, res) => {
  try {
    const data = await Announcement.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.json({ message: "Error fetching announcements" });
  }
});

arouter.delete('/delete/:id', async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.json({ message: "Announcement deleted successfully" });
  } catch (err) {
    res.json({ message: "Error deleting announcement" });
  }
});

export default arouter;