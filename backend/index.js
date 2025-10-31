
// const express = require("express");
// const app = express();

// const userRoutes = require("./routes/User");
// const profileRoutes = require("./routes/Profile");
// const courseRoutes = require("./routes/Course");
// const contactUsRoute = require("./routes/Contact");
// const paymentRoutes = require("./routes/Payment");

// const database = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const { cloudinaryConnect } = require("./config/cloudinary");
// const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");

// dotenv.config();
// const PORT = process.env.PORT || 4000;

// // ---------------- Database Connect ----------------
// database.connect();

// // ---------------- Middlewares ----------------
// app.use(express.json());
// app.use(cookieParser());

// // CORS middleware with Authorization header and preflight handling
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     // allowedHeaders: ["Content-Type", "Authorization"], // important for JWT for accessing
//   })
// );

// // File upload middleware
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp",
//   })
// );

// // Cloudinary connection
// cloudinaryConnect();

// // ---------------- Routes ----------------
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);

// // ---------------- Default Route ----------------
// app.get("/", (req, res) => {
//   return res.json({
//     success: true,
//     message: "Your server is up and running....",
//   });
// });

// // ---------------- Start Server ----------------
// app.listen(PORT, () => {
//   console.log(`App is running at ${PORT}`);
// });

import { cloudinaryConnect } from "./config/cloudinary.js";
import contactUsRoute from "./routes/Contact.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import courseRoutes from "./routes/Course.js";
import database from "./config/database.js";
import dotenv from "dotenv";
// ---------------- Imports ----------------
import express from "express";
import fileUpload from "express-fileupload";
import paymentRoutes from "./routes/Payment.js";
import profileRoutes from "./routes/Profile.js";
import serverless from "serverless-http";
// ---------------- Local Imports ----------------
import userRoutes from "./routes/User.js";

// ---------------- Config ----------------
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// ---------------- Database Connect ----------------
database.connect();

// ---------------- Middlewares ----------------
app.use(express.json());
app.use(cookieParser());

// ✅ CORS setup — change origin to your frontend Netlify URL later
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-frontend-name.netlify.app", // replace with actual deployed frontend URL
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// ---------------- File Upload ----------------
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// ---------------- Cloudinary ----------------
cloudinaryConnect();

// ---------------- Routes ----------------
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

// ---------------- Default Route ----------------
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// ---------------- Start Server (Local Only) ----------------
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`✅ Server running locally on port ${PORT}`);
  });
}

// ---------------- Vercel Export ----------------
export const handler = serverless(app);
