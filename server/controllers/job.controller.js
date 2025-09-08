import Job from "../models/job.model.js";

const getAllJobs = async (req, res) => {
    try {
        const data = await Job.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getAllJobs;
