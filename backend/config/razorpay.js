// const Razorpay = require("razorpay");
// exports.instance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });




// backend/config/razorpay.js
const Razorpay = require("razorpay");
const path = require("path");
const dotenv = require("dotenv");

// ✅ Force load .env manually before anything else
dotenv.config({ path: path.join(__dirname, "../.env") });

// Debug logs (you can remove later)
console.log("🔹 Razorpay Config Loaded");
console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY_SECRET:", process.env.RAZORPAY_SECRET ? "Loaded ✅" : "Missing ❌");

// ✅ Throw a clear error if keys are missing
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET) {
  throw new Error("❌ RAZORPAY_KEY_ID or RAZORPAY_SECRET missing in .env file");
}

// ✅ Create Razorpay instance
exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});
