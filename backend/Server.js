import express from 'express';
import mongoose from 'mongoose';
import ConnectDB from './config/db.js';
const app = express();

ConnectDB();

app.listen(5000,() => {
    "Server is running"
});