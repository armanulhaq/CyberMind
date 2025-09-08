import { Briefcase, Users } from "lucide-react";

const JobCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 w-[320px] relative flex flex-col gap-3">
            {/* Badge: Time */}
            <span className="absolute top-4 right-4 bg-[#e3f2fd] text-[#1976d2] text-xs font-semibold px-3 py-1 rounded-lg shadow-sm">
                24h Ago
            </span>
            {/* Icon and Job Title */}
            <div className="flex items-center gap-3 mt-1">
                <img
                    src="/amazon-logo.png"
                    alt="Amazon Logo"
                    className="h-11 w-11 rounded-full object-contain bg-[#fff] border border-gray-100 shadow"
                />
                <div>
                    <h2 className="font-bold text-lg text-[#232323]">
                        Full Stack Developer
                    </h2>
                </div>
            </div>
            {/* Meta: Experience, Mode, Salary */}
            <div className="flex gap-4 items-center text-[#686868] text-sm mt-2">
                <span className="flex items-center gap-1">
                    <Users size={16} /> 1-3 yr Exp
                </span>
                <span className="flex items-center gap-1">
                    <Briefcase size={16} /> Onsite
                </span>
                <span className="flex items-center gap-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                        <rect
                            x="2"
                            y="2"
                            width="16"
                            height="16"
                            rx="4"
                            fill="#e0e7ff"
                        />
                        <text
                            x="10"
                            y="11.5"
                            textAnchor="middle"
                            fontSize="8"
                            fill="#232323"
                        >
                            12LPA
                        </text>
                    </svg>
                    12LPA
                </span>
            </div>
            {/* Description */}
            <ul className="text-[#686868] text-sm list-disc list-inside mt-1 mb-2 pl-1">
                <li>
                    A user-friendly interface lets you browse stunning photos
                    and videos
                </li>
                <li>
                    Filter destinations based on interests and travel style, and
                    create personalized
                </li>
            </ul>
            {/* Apply Button */}
            <button className="bg-[#109CFF] text-white font-semibold py-2 rounded-xl mt-2 transition-colors hover:bg-[#1976d2]">
                Apply Now
            </button>
        </div>
    );
};

export default JobCard;
