import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Jobs = ({ searchQuery, location, jobType }) => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/all-jobs")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);
    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            !searchQuery ||
            job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.companyName.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesLocation =
            !location || job.location.toLowerCase() === location.toLowerCase();

        const matchesJobType =
            !jobType || job.jobType.toLowerCase() === jobType.toLowerCase();

        return matchesSearch && matchesLocation && matchesJobType;
    });

    console.log(filteredJobs);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5 max-w-[80%] mx-auto">
            {filteredJobs.map((job) => (
                <JobCard key={job._id} job={job} />
            ))}
        </div>
    );
};

export default Jobs;
