import JobCard from "./JobCard";

const Jobs = () => {
    return (
        <div className="grid grid-cols-4 gap-6 my-10 max-w-7xl mx-auto">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
    );
};

export default Jobs;
