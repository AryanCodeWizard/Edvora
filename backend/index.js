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
import tutorRoutes from "./routes/tutorRoutes.js";
// ---------------- Routes ----------------
import userRoutes from "./routes/User.js";

// ---------------- Config ----------------
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// ---------------- Database ----------------
connect();

// ---------------- ✅ FIXED GLOBAL CORS ----------------
// ⚠️ REMOVE ALL MANUAL res.header CORS CODE
const allowedOrigins = [
  "http://localhost:3000",
  // "http://localhost:3000/",
  "https://edvora-beryl.vercel.app", // deployed frontend (Vercel)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked CORS origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ---------------- Middlewares ----------------
app.use(express.json());
app.use(cookieParser());  // For parsing cookies in requests 
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
app.use("/api/v1/tutor", tutorRoutes);

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
