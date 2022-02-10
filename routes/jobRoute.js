import express from "express";
const router = express.Router();

import {
  getAllJobs,
  showStats,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

router.route("/").post(createJob).get(getAllJobs);
// remember about :id
router.route("/stats").get(showStats);
router.route("/:id").patch(updateJob).delete(deleteJob);

export default router;
