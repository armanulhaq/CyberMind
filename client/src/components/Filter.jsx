import React, { useState } from "react";
import { Search, MapPin, User, ChevronDown } from "lucide-react";

const FilterBar = () => {
    const [salaryRange, setSalaryRange] = useState([50000, 80000]);

    const handleSalaryChange = (e, index) => {
        const newRange = [...salaryRange];
        newRange[index] = Number(e.target.value);
        setSalaryRange(newRange);
    };

    return (
        <div
            className="my-6 flex items-center justify-between gap-6 px-16 py-8 bg-white shadow-[0_4px_20px_rgba(127,127,127,0.15)]
"
        >
            <div className="flex items-center gap-2 flex-1 border-r border-gray-200 pr-4">
                <Search className="text-gray-500" size={18} />
                <input
                    type="text"
                    placeholder="Search By Job Title, Role"
                    className="outline-none text-gray-600 w-full"
                />
            </div>

            <div className="flex items-center gap-2 flex-1 border-r border-gray-200 px-4">
                <MapPin className="text-gray-500" size={18} />
                <span className="text-gray-600">Preferred Location</span>
                <ChevronDown className="text-gray-500" size={18} />
            </div>
            <div className="flex items-center gap-2 flex-1 border-r border-gray-200 px-4">
                <User className="text-gray-500" size={18} />
                <span className="text-gray-600">Job type</span>
                <ChevronDown className="text-gray-500" size={18} />
            </div>

            <div className="flex flex-1 items-center gap-4">
                <span className="text-gray-600 text-sm">Salary Per Month</span>
                <span className="text-gray-800 text-sm font-medium">
                    ₹{salaryRange[0] / 1000}k - ₹{salaryRange[1] / 1000}k
                </span>
                <div className="flex items-center gap-2 w-32">
                    <input
                        type="range"
                        min="10000"
                        max="200000"
                        step="5000"
                        value={salaryRange[0]}
                        onChange={(e) => handleSalaryChange(e, 0)}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
