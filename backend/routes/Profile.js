// const { auth, isInstructor } = require("../middlewares/auth")
import { auth, isInstructor } from "../middlewares/auth.js"
// const {
//   deleteAccount,
//   updateProfile,
//   getAllUserDetails,
//   updateDisplayPicture,
//   getEnrolledCourses,
//   instructorDashboard,
// } = require("../controllers/Profile")
import {
  deleteAccount,
  getAllUserDetails,
  getEnrolledCourses,
  instructorDashboard,
  updateDisplayPicture,
  updateProfile,
} from "../controllers/Profile.js";

// const express = require("express")
import express from "express"

const router = express.Router()

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

export default router