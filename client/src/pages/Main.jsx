import React from "react";
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
            />
            <Jobs
                searchQuery={searchQuery}
                location={location}
                jobType={jobType}
            />
        </div>
    );
};

export default Main;
