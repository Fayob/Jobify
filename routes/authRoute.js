import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 10 * 60 * 1000, // 10 Minutes
  max: 100,
  message: "Too many request from the IP address, please try again later ",
});

import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
