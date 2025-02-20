import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

const app = express();
const server = createServer(app);
const io = new Server();

const MONGODB_URL = process.env.MONGODB_URL || "";

mongoose.connect(MONGODB_URL);

app.get("/", (req, res) => {
  res.send("Gaurav");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log(msg);
  });
});

server.listen(8000, () => {
  console.log("server is running on http://localhost:8000");
});
