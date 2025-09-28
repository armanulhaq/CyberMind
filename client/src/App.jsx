import { useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import CreateJob from "./components/CreateJob";

function App() {
    const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [salaryRange, setSalaryRange] = useState([50000, 100000]);

    const handleOverlayClick = (e) => {
        // Only close if clicking the overlay itself, not the modal content
        //e.target is the element that was actaully clicked
        //e.currentTarget is the element that the event listener is attached to
        if (e.target === e.currentTarget) {
            //if click outside the modal, condition fulfils and setIsCreateJobOpen is set to false
            setIsCreateJobOpen(false);
        }
    };

    return (
        <>
            <Main
                setIsCreateJobOpen={setIsCreateJobOpen}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                location={location}
                setLocation={setLocation}
                jobType={jobType}
                setJobType={setJobType}
                salaryRange={salaryRange}
                setSalaryRange={setSalaryRange}
            />
            {isCreateJobOpen && (
                <div
                    className="fixed inset-0 bg-gray-500/70 flex items-center justify-center z-50 p-4"
                    onClick={handleOverlayClick}
                >
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                        <CreateJob setIsCreateJobOpen={setIsCreateJobOpen} />
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
