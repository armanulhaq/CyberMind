import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const FilterBar = () => {
    const [salaryRange, setSalaryRange] = useState([50000, 100000]);

    const handleSalaryChange = (e, index) => {
        const newRange = [...salaryRange];
        newRange[index] = Number(e.target.value);
        setSalaryRange(newRange);
    };

    return (
        <div className="my-6 flex items-center justify-between gap-6 px-10 py-6 bg-white shadow-[0_4px_20px_rgba(127,127,127,0.15)]">
            <div className="flex items-center gap-3 flex-1 border-r border-gray-200 pr-6">
                <Search className="text-gray-500" size={18} />
                <input
                    type="text"
                    placeholder="Search By Job Title, Role"
                    className="outline-none text-[#686868] w-full text-sm"
                />
            </div>

            <div className="flex items-center gap-3 flex-1 border-r border-gray-200 px-4">
                <img src="/MapPin.png" alt="Location" className="h-4 w-4" />
                <div className="relative w-full">
                    <select className="w-full appearance-none text-[#686868] outline-none pr-6 bg-transparent text-sm">
                        <option>Preferred Location</option>
                        <option>Bengaluru</option>
                        <option>Hyderabad</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                        <option>Chennai</option>
                        <option>Pune</option>
                    </select>
                    <ChevronDown
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#686868] pointer-events-none"
                        size={18}
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 flex-1 border-r border-gray-200 px-4">
                <img src="/User.png" alt="Job Type" className="h-4 w-4" />
                <div className="relative w-full">
                    <select className="w-full appearance-none text-[#686868] outline-none pr-6 bg-transparent text-sm">
                        <option>Job Type</option>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Internship</option>
                        <option>Remote</option>
                    </select>
                    <ChevronDown
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#686868] pointer-events-none"
                        size={18}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between text-[#686868] text-sm">
                    <span>Salary Per Month</span>
                    <span className="font-medium">
                        ₹{salaryRange[0] / 1000}k - ₹{salaryRange[1] / 1000}k
                    </span>
                </div>
                <input
                    type="range"
                    min="50000"
                    max="100000"
                    step="5000"
                    value={salaryRange[0]}
                    onChange={(e) => handleSalaryChange(e, 0)}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default FilterBar;
