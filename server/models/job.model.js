import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        jobTitle: { type: String, required: true },
        companyName: { type: String, required: true },
        location: {
            type: String,
            enum: [
                "Bengaluru",
                "Hyderabad",
                "Delhi",
                "Mumbai",
                "Chennai",
                "Pune",
            ],
            required: true,
        },
        jobType: {
            type: String,
            enum: ["Full Time", "Part Time", "Internship", "Contract"],
            required: true,
        },
        minSalary: { type: Number, required: true },
        maxSalary: { type: Number, required: true },
        deadline: { type: Date, required: true },
        jobDescription: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
