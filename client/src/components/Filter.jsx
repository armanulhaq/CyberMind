import DoubleRangeSlider from "./DoubleRangeSlider";
import { Search, ChevronDown } from "lucide-react";

const FilterBar = ({
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
        <div className="my-4 flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 sm:px-6 lg:px-12 py-5 bg-white shadow-[0_8px_20px_-10px_rgba(127,127,127,0.15)]">
            <div className="flex items-center gap-7 w-full lg:flex-1 border border-gray-200 rounded-lg px-3 py-2 lg:border-r lg:rounded-none lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:pr-6 font-medium text-base leading-none text-center">
                <Search className="text-gray-500 shrink-0 w-5" />
                <input
                    type="text"
                    placeholder="Search By Job Title, Role"
                    className="outline-none text-[#686868] w-full text-[16px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-7 w-full lg:flex-1 border border-gray-200 rounded-lg px-3 py-2 lg:border-r lg:rounded-none lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:px-4">
                <img src="/MapPin.png" alt="Location" className="w-4" />
                <div className="relative w-full">
                    <select
                        className="w-full appearance-none text-[#686868] outline-none pr-6 bg-transparent font-medium text-base leading-none"
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

            <div className="flex items-center gap-7 w-full lg:flex-1 border border-gray-200 rounded-lg px-3 py-2 lg:border-r lg:rounded-none lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:px-4">
                <img src="/User.png" alt="Job Type" className="w-5" />
                <div className="relative w-full">
                    <select
                        className="w-full appearance-none text-[#686868] outline-none pr-6 bg-transparent font-medium text-base leading-none"
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
            <div className="flex flex-col w-full lg:flex-1 border border-gray-200 rounded-lg px-3 py-2 lg:border-0">
                <div className="flex justify-between text-[#686868] text-sm">
                    <span className="text-[#222222]">Salary Per Month</span>
                    <span className="font-medium text-[#222222]">
                        ₹{salaryRange[0] / 1000}K - ₹{salaryRange[1] / 1000}K
                    </span>
                </div>
                <DoubleRangeSlider
                    salaryRange={salaryRange}
                    setSalaryRange={setSalaryRange}
                />
            </div>
        </div>
    );
};

export default FilterBar;
