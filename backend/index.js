// import { cloudinaryConnect } from "./config/cloudinary.js";
// // ---------------- Imports ----------------
// import { connect } from "./config/database.js";
// import contactUsRoute from "./routes/Contact.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import courseRoutes from "./routes/Course.js";
// // import database from "./config/database.js";
// // import {connect} from "./config/database.js";
// import dotenv from "dotenv";
// import express from "express";
// import fileUpload from "express-fileupload";
// // import paymentRoutes from "./routes/Payment.js";
// import paymentRoutes from "./routes/Payment.js";
// import profileRoutes from "./routes/Profile.js";
// import serverless from "serverless-http";
// // ---------------- Local Imports ----------------
// import userRoutes from "./routes/User.js";

// // ---------------- Config ----------------
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 4000;

// // ---------------- Database Connect ----------------
// connect();

// // ---------------- Middlewares ----------------
// app.use(express.json());
// app.use(cookieParser());

// // ✅ CORS setup — change origin to your frontend Netlify URL later
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://edvora-hazel.vercel.app", // ✅ add your actual frontend domain
//     ],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   })
// );

// // ---------------- File Upload ----------------
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp",
//   })
// );

// // ---------------- Cloudinary ----------------
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

// // ---------------- Start Server (Local Only) ----------------
// if (process.env.NODE_ENV !== "production") {
//   app.listen(PORT, () => {
//     console.log(`✅ Server running locally on port ${PORT}`);
//   });
// }

// // ---------------- Vercel Export ----------------
// export const handler = serverless(app);

import { cloudinaryConnect } from "./config/cloudinary.js";
import { connect } from "./config/database.js";
import contactUsRoute from "./routes/Contact.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import courseRoutes from "./routes/Course.js";
import dotenv from "dotenv";
// ---------------- Imports ----------------
import express from "express";
import fileUpload from "express-fileupload";
import paymentRoutes from "./routes/Payment.js";
import profileRoutes from "./routes/Profile.js";
import serverless from "serverless-http";
// ---------------- Routes ----------------
import userRoutes from "./routes/User.js";

// ---------------- Config ----------------
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// ---------------- Database ----------------
connect();

// ---------------- ✅ GLOBAL CORS ----------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://edvora-hazel.vercel.app");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// ---------------- Middlewares ----------------
app.use(express.json());
app.use(cookieParser());
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
  res.json({
    success: true,
    message: "✅ Server is up and CORS-enabled",
  });
});

// ---------------- Server Setup ----------------
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`✅ Running locally on port ${PORT}`));
}

// ---------------- Export for Serverless ----------------
export const handler = serverless(app);
