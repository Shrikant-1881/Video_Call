import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  app.set("mongo_user");
  const connectionDb = await mongoose.connect(
    //"mongodb+srv://shrikantbhor20:India%4011@cluster0.dzrfe.mongodb.net/"
    "mongodb+srv://shrikantbhor20:India%4011@cluster0.tpy2vla.mongodb.net/"
  );
  console.log(`Mongo connected to DB Host: ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("Listen on port 8000");
  });
};

start();
