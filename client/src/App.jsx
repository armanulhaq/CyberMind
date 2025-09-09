import { useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import CreateJob from "./components/CreateJob";

function App() {
    const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
    const handleOverlayClick = (e) => {
        // Only close if clicking the overlay itself, not the modal content
        if (e.target === e.currentTarget) {
            setIsCreateJobOpen(false);
        }
    };

    return (
        <>
            <Main setIsCreateJobOpen={setIsCreateJobOpen} />
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
