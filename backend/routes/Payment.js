// const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
import { auth, isAdmin, isInstructor, isStudent } from "../middlewares/auth.js"
// const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payment")
import { capturePayment, sendPaymentSuccessEmail, verifyPayment } from "../controllers/Payment.js"

// Import the required modules
import express from "express"
// const router = express.Router()
const router = express.Router()

// router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/capturePayment",auth, isStudent, capturePayment)
router.post("/verifyPayment",auth, isStudent, verifyPayment)
router.post("/sendPaymentSuccessEmail", auth, isStudent, sendPaymentSuccessEmail);

export default router