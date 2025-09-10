import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import NoJobs from "./NoJobs";
import JobCardSkeleton from "./JobSkeleton";

const Jobs = ({ searchQuery, location, jobType, salaryRange }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/all-jobs`)
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                setLoading(false);
            });
    }, []);

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            !searchQuery ||
            job.jobTitle.toLowerCase().startsWith(searchQuery.toLowerCase());

        const matchesLocation =
            !location || job.location.toLowerCase() === location.toLowerCase();

        const matchesJobType =
            !jobType || job.jobType.toLowerCase() === jobType.toLowerCase();
        const matchesSalary =
            !salaryRange ||
            (job.maxSalary / 12 >= salaryRange[0] &&
                job.maxSalary / 12 <= salaryRange[1]);
        return (
            matchesSearch && matchesLocation && matchesJobType && matchesSalary
        );
    });

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 max-w-[70%] lg:max-w-[80%] mx-auto">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <JobCardSkeleton key={idx} />
                ))}
            </div>
        );
    }
    if (filteredJobs.length === 0) {
        return <NoJobs />;
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 max-w-[90%] lg:max-w-[80%] mx-auto">
            {filteredJobs.map((job) => (
                <JobCard key={job._id} job={job} />
            ))}
        </div>
    );
};

export default Jobs;
