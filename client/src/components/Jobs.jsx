import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/all-jobs")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);
    console.log(jobs);
    return (
        <div className="grid grid-cols-4 gap-6 my-5 max-w-7xl mx-auto">
            {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
            ))}
        </div>
    );
};

export default Jobs;
