import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAllJobs, getJobById, getRecruiterPostedJobs, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/postjob").post(isAuthenticated, postJob);
router.route("/alljobs").get(isAuthenticated, getAllJobs);
router.route("/postedjobs").get(isAuthenticated, getRecruiterPostedJobs);
router.route("/:id").get(isAuthenticated, getJobById);

export default router;