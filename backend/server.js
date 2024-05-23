import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connectToMongoDb } from "./db/connectToMongodb.js";
import { app, server } from "./socket.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow requests from this origin
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontends/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontends", "build", "index.html"));
});
server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`server is running at http://localhost:${PORT}`);
});
