import Job from "../models/job.model.js";

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        if (!jobs) {
            return res.status(404).json({ message: "No jobs found" });
        }
        res.status(200).json(jobs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        if (!job) {
            return res.status(400).json({ message: "Job creation failed" });
        }
        res.status(200).json({ message: "Job created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export { getAllJobs, createJob };
