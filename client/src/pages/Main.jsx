import Header from "../components/Header";
import Filter from "../components/Filter";
import Jobs from "../components/Jobs";

const Main = ({
    setIsCreateJobOpen,
    searchQuery,
    setSearchQuery,
    location,
    setLocation,
    jobType,
    setJobType,
    salaryRange,
    setSalaryRange,
}) => {
    return (
        <div>
            <Header setIsCreateJobOpen={setIsCreateJobOpen} />
            <Filter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                location={location}
                setLocation={setLocation}
                jobType={jobType}
                setJobType={setJobType}
                salaryRange={salaryRange}
                setSalaryRange={setSalaryRange}
            />
            <Jobs
                searchQuery={searchQuery}
                location={location}
                jobType={jobType}
                salaryRange={salaryRange}
            />
        </div>
    );
};

export default Main;
