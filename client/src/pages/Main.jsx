import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Jobs from "../components/Jobs";

const Main = ({ setIsCreateJobOpen }) => {
    return (
        <div>
            <Header setIsCreateJobOpen={setIsCreateJobOpen} />
            <Filter />
            <Jobs />
        </div>
    );
};

export default Main;
