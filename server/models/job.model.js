import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    company_logo: { type: String },
    job_title: { type: String, required: true },
    job_type: {
        type: String,
        enum: ["Full Time", "Part Time", "Internship", "Contract"],
        required: true,
    },
    time_posted: { type: Date.now(), required: true },
    experienceStart: { type: Number, required: true },
    experienceEnd: { type: Number, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    description: { type: String, required: true },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
