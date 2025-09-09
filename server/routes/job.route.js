import express from "express";
import { createJob, getAllJobs } from "../controllers/job.controller.js";

const router = express.Router();
router.get("/all-jobs", getAllJobs);
router.post("/create-job", createJob);

export default router;
