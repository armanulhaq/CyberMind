import { useState } from "react";
import DoubleRangeSlider from "./DoubleRangeSlider";
import { Search, ChevronDown } from "lucide-react";

const FilterBar = ({
    searchQuery,
    setSearchQuery,
    location,
    setLocation,
    jobType,
    setJobType,
}) => {
    const [salaryRange, setSalaryRange] = useState([50000, 100000]);

    // const handleSalaryChange = (e, index) => {
    //     const newRange = [...salaryRange];
    //     newRange[index] = Number(e.target.value);
    //     setSalaryRange(newRange);
    // };

    return (
        <div className="my-4 flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 sm:px-6 lg:px-10 py-5 bg-white shadow-[0_4px_20px_rgba(127,127,127,0.15)]">
            {/* Search Input */}
            <div className="flex items-center gap-3 w-full lg:flex-1 border border-gray-200 rounded-lg px-3 py-2 lg:border-r lg:rounded-none lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:pr-6">
                <Search className="text-gray-500 shrink-0" size={18} />
                <input
                    type="text"
                    placeholder="Search By Job Title, Role"
                    className="outline-none text-[#686868] w-full text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Location Dropdown */}
            <div className="flex items-center gap-3 w-full lg:flex-1 border border-gray-200 rounded-lg px-3 py-2 lg:border-r lg:rounded-none lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:px-4">
                <img src="/MapPin.png" alt="Location" className="w-4" />
                <div className="relative w-full">
                    <select
                        className="w-full appearance-none text-[#686868] outline-none pr-6 bg-transparent text-sm"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">Preferred Location</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                    </select>
                    <ChevronDown
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#686868] pointer-events-none"
                        size={18}
                    />
                </div>
            </div>

            {/* Job Type Dropdown */}
            <div className="flex items-center gap-3 w-full lg:flex-1 border border-gray-200 rounded-lg px-3 py-2 lg:border-r lg:rounded-none lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:px-4">
                <img src="/User.png" alt="Job Type" className="h-4" />
                <div className="relative w-full">
                    <select
                        className="w-full appearance-none text-[#686868] outline-none pr-6 bg-transparent text-sm"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="">Job Type</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                    <ChevronDown
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#686868] pointer-events-none"
                        size={18}
                    />
                </div>
            </div>

            {/* Salary Range */}
            <div className="flex flex-col w-full lg:flex-1 border border-gray-200 rounded-lg px-3 py-2 lg:border-0">
                <div className="flex justify-between text-[#686868] text-sm">
                    <span>Salary Per Month</span>
                    <span className="font-medium">
                        ₹{salaryRange[0] / 1000}k - ₹{salaryRange[1] / 1000}k
                    </span>
                </div>
                <DoubleRangeSlider />
            </div>
        </div>
    );
};

export default FilterBar;
